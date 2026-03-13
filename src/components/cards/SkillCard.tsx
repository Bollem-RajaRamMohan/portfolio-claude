"use client";

import { useRef, useState } from "react";

interface SkillCardProps {
  name: string;
}

export default function SkillCard({ name }: SkillCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setGlowPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="group relative overflow-hidden rounded-xl border border-white/5 bg-neutral-900/50 px-5 py-4 transition-colors hover:border-white/10"
    >
      {/* Mouse-tracking glow */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(200px circle at ${glowPosition.x}px ${glowPosition.y}px, rgba(168, 85, 247, 0.15), transparent 70%)`,
        }}
      />
      <span className="relative z-10 text-sm text-neutral-300">{name}</span>
    </div>
  );
}
