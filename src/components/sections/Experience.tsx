"use client";

import FadeIn from "@/components/animations/FadeIn";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section className="bg-black px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            Journey
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-5xl">
            Experience
          </h2>
        </FadeIn>

        <div className="relative mt-16">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-purple-500/50 via-neutral-800 to-transparent md:left-1/2 md:-translate-x-1/2" />

          {experiences.map((exp, i) => (
            <FadeIn
              key={i}
              delay={0.2 + i * 0.1}
              direction={i % 2 === 0 ? "left" : "right"}
            >
              <div
                className={`relative mb-12 pl-8 md:w-1/2 ${
                  i % 2 === 0
                    ? "md:pr-12 md:pl-0 md:text-right"
                    : "md:pl-12 md:ml-auto"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute top-2 h-3 w-3 rounded-full border-2 border-purple-500 bg-black ${
                    i % 2 === 0
                      ? "left-[-6px] md:left-auto md:right-[-6px]"
                      : "left-[-6px] md:left-[-6px]"
                  }`}
                />

                <span className="text-xs uppercase tracking-[0.2em] text-purple-400">
                  {exp.period}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-white">
                  {exp.title}
                </h3>
                <p className="text-sm text-neutral-500">{exp.company}</p>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                  {exp.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
