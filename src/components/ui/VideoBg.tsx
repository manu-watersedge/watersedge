"use client";

import { useEffect, useRef } from "react";

/**
 * VideoBg — renders the video onto a canvas, cropping the right edge (watermark).
 * cropRight: fraction of the video width to cut from the right (0.15 = cut 15%)
 */
export default function VideoBg({ cropRight = 0.15 }: { cropRight?: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const draw = () => {
      if (!video.paused && !video.ended && video.readyState >= 2) {
        const vw = video.videoWidth;
        const vh = video.videoHeight;

        // Crop: show only left (1 - cropRight) portion — hides watermark
        const srcW = Math.floor(vw * (1 - cropRight));
        const srcH = vh;

        // Match canvas pixel size to its CSS display size
        const cw = canvas.offsetWidth;
        const ch = canvas.offsetHeight;
        if (canvas.width !== cw || canvas.height !== ch) {
          canvas.width = cw;
          canvas.height = ch;
        }

        // Scale by WIDTH only — like object-fit: contain anchored to width.
        // This preserves the original video's look/proportions (no zoom).
        const scale = cw / srcW;
        const drawW = cw;                   // fills full width
        const drawH = Math.round(srcH * scale); // natural height at this width

        // Tile the video vertically to fill the entire tall container
        ctx.clearRect(0, 0, cw, ch);
        for (let y = 0; y < ch; y += drawH) {
          ctx.drawImage(video, 0, 0, srcW, srcH, 0, y, drawW, drawH);
        }
      }
      rafRef.current = requestAnimationFrame(draw);
    };

    const onCanPlay = () => {
      video.play();
      draw();
    };

    video.addEventListener("canplay", onCanPlay);

    if (video.readyState >= 2) {
      video.play();
      draw();
    }

    return () => {
      video.removeEventListener("canplay", onCanPlay);
      cancelAnimationFrame(rafRef.current);
    };
  }, [cropRight]);

  return (
    <>
      {/* Hidden video source — audio off, loops */}
      <video
        ref={videoRef}
        src="/vdo-bg.mp4"
        loop
        muted
        playsInline
        preload="auto"
        style={{ display: "none" }}
      />
      {/* Canvas renders the cropped frame, fills the container */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          display: "block",
        }}
      />
    </>
  );
}
