"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const aboutText =
  "I'm a passionate developer focused on creating premium digital experiences. With expertise in modern web technologies, I bring ideas to life through clean code and thoughtful design. Every project is an opportunity to push boundaries and deliver something exceptional that users love to interact with.";

function ScrollRevealParagraph({ text }: { text: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = text.split(" ");

  return (
    <div ref={containerRef} className="flex flex-wrap">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </div>
  );
}

function Word({
  children,
  range,
  progress,
}: {
  children: string;
  range: [number, number];
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);

  return (
    <motion.span
      style={{ opacity }}
      className="mr-[0.3em] text-2xl font-medium leading-relaxed text-white sm:text-3xl lg:text-4xl"
    >
      {children}
    </motion.span>
  );
}

const stats = [
  { target: 5, suffix: "+", label: "Years Experience" },
  { target: 30, suffix: "+", label: "Projects Delivered" },
  { target: 15, suffix: "+", label: "Happy Clients" },
  { target: 99, suffix: "%", label: "Client Satisfaction" },
];

export default function About() {
  return (
    <section className="bg-black px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            About
          </p>
        </FadeIn>

        <div className="mt-12">
          <ScrollRevealParagraph text={aboutText} />
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={0.1 * i}>
              <div className="border-t border-white/5 pt-6">
                <AnimatedCounter
                  target={stat.target}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
