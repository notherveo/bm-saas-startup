"use client";
import { useRef, useEffect } from "react";
import { useReducedMotion } from "motion/react";

export default function Aurora() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (reduced) return;
    const canvas = canvas.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let w = 0,
      h = 0;
    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    const cells = 120;
    const size = 12;
    const cellsX = Math.ceil(w / size);
    const cellsY = Math.ceil(h / size);
    const cellsData = new Float32Array(cellsX * cellsY);
    const time = (t: number) => 0.001 + Math.sin(t * 0.0005 + t * 0.0003) * 0.15;
    const colors = [
      [1, 0.9, 0.8],
      [0.9, 0.7, 1],
      [0.6, 0.9, 0.8],
      [0.8, 0.6, 1],
      [0.4, 0.9, 0.6],
      [0.9, 0.4, 0.6],
    ];
    const draw = () => {
      const t = time(Date.now());
      ctx.clearRect(0, 0, w, h);
      for (let y = 0; y < cellsY; y++) {
        for (let x = 0; x < cellsX; x++) {
          const i = x + y * cellsX;
          const tx = x / cellsX;
          const ty = y / cellsY;
          const cx = tx + 0.5 * Math.sin(t * 0.5 + x * 0.1);
          const cy = ty + 0.5 * Math.cos(t * 0.3 + y * 0.1);
          const r = Math.min(1, Math.sqrt((cx - tx) ** 2 + (cy - ty) ** 2));
          const c = Math.sin(t * 1.5 + x * 0.3 + y * 0.2);
          const v = Math.min(1, (1 - r) * (1 - r) * c);
          cellsData[i] = v;
        }
      }
      for (let i = 0; i < cellsData.length; i++) {
        const v = cellsData[i];
        if (v < 0.001) continue;
        const color = colors[Math.floor(v * colors.length)];
        ctx.beginPath();
        const x = (i % cellsX) * size;
        const y = Math.floor(i / cellsX) * size;
        ctx.ellipse(
          x + size / 2,
          y + size / 2,
          size * v * 2,
          size * v * 2 * 0.6,
          0,
          0,
          2 * Math.PI
        );
        ctx.fillStyle = `rgba(${color[0] * 255}, ${color[1] * 255}, ${color[2] * 255}, ${v * 0.15})`;
        ctx.fill();
      }
    };
    let frame = 0;
    const loop = () => {
      frame = requestAnimationFrame(loop);
      draw();
    };
    loop();
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frame);
    };
  }, [reduced]);
  return (
    <canvas
      ref={canvas}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0"
    />
  );
}
