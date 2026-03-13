"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import SplitText from "@/components/animations/SplitText";
import FadeIn from "@/components/animations/FadeIn";
import MagneticButton from "@/components/animations/MagneticButton";
import Marquee from "@/components/ui/Marquee";

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "Framer Motion",
  "GSAP",
  "Figma",
  "PostgreSQL",
  "Docker",
];

function DotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const gap = 40;
    const dotRadius = 1;
    const influenceRadius = 150;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const { x: mx, y: my } = mouseRef.current;

      for (let x = gap; x < canvas.width; x += gap) {
        for (let y = gap; y < canvas.height; y += gap) {
          const dx = x - mx;
          const dy = y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const influence = Math.max(0, 1 - dist / influenceRadius);

          const radius = dotRadius + influence * 3;
          const alpha = 0.15 + influence * 0.6;

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(168, 85, 247, ${alpha})`;
          ctx.fill();
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
    />
  );
}

export default function Hero() {
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollIndicatorRef.current) return;
    gsap.to(scrollIndicatorRef.current, {
      y: 8,
      repeat: -1,
      yoyo: true,
      duration: 1.2,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black">
      {/* Animated dot grid */}
      <DotGrid />

      {/* Gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/3 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <FadeIn delay={0.5}>
          <p className="mb-6 text-sm uppercase tracking-[0.4em] text-neutral-500">
            Developer &mdash; Designer &mdash; Creator
          </p>
        </FadeIn>

        <SplitText
          text="Crafting Digital Experiences That Inspire"
          className="mx-auto max-w-5xl text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-7xl lg:text-8xl"
          delay={0.8}
        />

        <FadeIn delay={1.6}>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-neutral-400">
            I build modern, performant, and beautifully designed web
            applications that leave a lasting impression.
          </p>
        </FadeIn>

        <FadeIn delay={1.8}>
          <div className="mt-12 flex items-center justify-center gap-4">
            <MagneticButton>
              <a
                href="/projects"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-medium text-black transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
              >
                View Projects
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-medium text-white backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10"
              >
                Get in Touch
              </a>
            </MagneticButton>
          </div>
        </FadeIn>
      </div>

      {/* Tech stack marquee */}
      <div className="absolute bottom-20 left-0 right-0 z-10">
        <FadeIn delay={2.2}>
          <Marquee items={techStack} speed={35} />
        </FadeIn>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <FadeIn delay={2.5}>
          <div ref={scrollIndicatorRef} className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-600">
              Scroll
            </span>
            <motion.div className="h-8 w-[1px] bg-gradient-to-b from-neutral-600 to-transparent" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
