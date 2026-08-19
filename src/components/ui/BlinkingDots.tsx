"use client";

import React, { useEffect, useRef } from "react";

interface BlinkingDotsProps {
  dotSize?: number;
  spacing?: number;
  dotColor?: string;
  glowColor?: string;
  minOpacity?: number;
  maxOpacity?: number;
  blinkProbability?: number;
  speed?: number;
  cursorRadius?: number;
  className?: string;
}

interface Dot {
  x: number;
  y: number;
  targetOpacity: number;
  currentOpacity: number;
  blinkSpeed: number;
}

export default function BlinkingDots({
  dotSize = 2,
  spacing = 38, // Sparse grid (~800 dots total instead of ~3000) for zero lag
  dotColor = "#C5A059",
  glowColor = "rgba(197, 160, 89, 0.4)",
  minOpacity = 0.08,
  maxOpacity = 0.65,
  blinkProbability = 0.008,
  speed = 0.03,
  cursorRadius = 110,
  className = "",
}: BlinkingDotsProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let dots: Dot[] = [];
    let isVisible = true;
    let lastRenderTime = 0;

    let mousePos = { x: -1000, y: -1000, active: false };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mousePos.x = e.clientX - rect.left;
      mousePos.y = e.clientY - rect.top;
      mousePos.active = true;
    };

    const handleMouseLeave = () => {
      mousePos.active = false;
    };

    // Pause canvas completely when off-screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.02 }
    );
    observer.observe(canvas);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    const initDots = (width: number, height: number) => {
      dots = [];
      const cols = Math.floor(width / spacing);
      const rows = Math.floor(height / spacing);

      const offsetX = (width - cols * spacing) / 2 + spacing / 2;
      const offsetY = (height - rows * spacing) / 2 + spacing / 2;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const initialOpacity =
            minOpacity + Math.random() * (maxOpacity - minOpacity);
          dots.push({
            x: offsetX + i * spacing,
            y: offsetY + j * spacing,
            currentOpacity: initialOpacity,
            targetOpacity: initialOpacity,
            blinkSpeed: speed * (0.6 + Math.random() * 0.8),
          });
        }
      }
    };

    const handleResize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      // Lock DPR to 1 to guarantee 60 FPS without high-DPI canvas bloat
      const dpr = 1;
      const width = parent.clientWidth;
      const height = parent.clientHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
      initDots(width, height);
    };

    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });

    const radiusSq = cursorRadius * cursorRadius;

    const render = (timestamp: number) => {
      animationFrameId = requestAnimationFrame(render);

      if (!isVisible) return;

      // Cap render FPS to ~45fps to eliminate GPU/CPU frame drops during page scrolling
      if (timestamp - lastRenderTime < 22) return;
      lastRenderTime = timestamp;

      const width = canvas.width;
      const height = canvas.height;

      ctx.clearRect(0, 0, width, height);

      // Fast single-pass loop without heavy secondary gradient draw calls
      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];

        // Random blinking state change
        if (Math.random() < blinkProbability) {
          dot.targetOpacity =
            Math.random() > 0.5
              ? maxOpacity
              : minOpacity + Math.random() * (maxOpacity - minOpacity);
        }

        // Interpolate opacity towards target
        if (dot.currentOpacity < dot.targetOpacity) {
          dot.currentOpacity += dot.blinkSpeed;
        } else if (dot.currentOpacity > dot.targetOpacity) {
          dot.currentOpacity -= dot.blinkSpeed;
        }

        // Fast mouse proximity boost
        let hoverBoost = 0;
        if (mousePos.active) {
          const dx = mousePos.x - dot.x;
          const dy = mousePos.y - dot.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < radiusSq) {
            hoverBoost = (1 - Math.sqrt(distSq) / cursorRadius) * 0.6;
          }
        }

        const alpha = Math.min(1.0, dot.currentOpacity + hoverBoost);

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dotSize / 2 + hoverBoost * 1.2, 0, Math.PI * 2);
        ctx.fillStyle = dotColor;
        ctx.globalAlpha = alpha;
        ctx.fill();
      }

      ctx.globalAlpha = 1.0;
    };

    render(performance.now());

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [
    dotSize,
    spacing,
    dotColor,
    glowColor,
    minOpacity,
    maxOpacity,
    blinkProbability,
    speed,
    cursorRadius,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none w-full h-full ${className}`}
    />
  );
}
