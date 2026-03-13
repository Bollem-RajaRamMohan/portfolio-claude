"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export default function SplitText({
  text,
  className,
  delay = 0,
  as: Tag = "h1",
}: SplitTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chars = containerRef.current?.querySelectorAll(".split-char");
    if (!chars) return;

    gsap.set(chars, { y: "100%", opacity: 0 });

    gsap.to(chars, {
      y: "0%",
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.02,
      delay,
    });
  }, [delay]);

  const words = text.split(" ");

  return (
    <Tag className={className} ref={containerRef as never}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-[0.25em]">
          {word.split("").map((char, charIndex) => (
            <span
              key={charIndex}
              className="inline-block overflow-hidden"
            >
              <span className="split-char inline-block">{char}</span>
            </span>
          ))}
        </span>
      ))}
    </Tag>
  );
}
