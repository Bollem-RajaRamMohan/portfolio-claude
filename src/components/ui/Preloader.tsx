"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);
  const counterRef = useRef<HTMLSpanElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only show preloader once per session
    if (sessionStorage.getItem("preloaded")) {
      setIsLoading(false);
      setHasLoaded(true);
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem("preloaded", "true");
        setIsLoading(false);
        setTimeout(() => setHasLoaded(true), 100);
      },
    });

    // Counter animation
    tl.to(
      { val: 0 },
      {
        val: 100,
        duration: 2,
        ease: "power2.inOut",
        onUpdate: function () {
          if (counterRef.current) {
            counterRef.current.textContent = String(
              Math.round(this.targets()[0].val)
            );
          }
        },
      }
    );

    // Fade out text
    tl.to(textRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.3,
      ease: "power2.in",
    });

    // Slide overlay up
    tl.to(overlayRef.current, {
      yPercent: -100,
      duration: 0.8,
      ease: "power4.inOut",
    });

    return () => {
      tl.kill();
    };
  }, []);

  if (hasLoaded) return null;

  return (
    <div
      ref={overlayRef}
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-black ${
        !isLoading ? "pointer-events-none" : ""
      }`}
    >
      <div ref={textRef} className="text-center">
        <span
          ref={counterRef}
          className="block text-8xl font-bold tabular-nums tracking-tighter text-white"
        >
          0
        </span>
        <div className="mt-4 h-[1px] w-48 bg-neutral-800 mx-auto overflow-hidden">
          <div className="h-full bg-white origin-left animate-[scaleX_2s_ease-in-out_forwards]" />
        </div>
      </div>
    </div>
  );
}
