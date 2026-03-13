"use client";

import FadeIn from "@/components/animations/FadeIn";
import SkillCard from "@/components/cards/SkillCard";
import { skills } from "@/data/skills";

const categories = [
  { key: "frontend" as const, label: "Frontend" },
  { key: "backend" as const, label: "Backend" },
  { key: "tools" as const, label: "Tools & DevOps" },
  { key: "design" as const, label: "Design" },
];

export default function Skills() {
  return (
    <section className="bg-neutral-950 px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            Expertise
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-5xl">
            Skills & Technologies
          </h2>
        </FadeIn>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          {categories.map((cat, catIndex) => (
            <FadeIn key={cat.key} delay={0.2 + catIndex * 0.1}>
              <div>
                <h3 className="mb-4 text-xs uppercase tracking-[0.3em] text-neutral-500">
                  {cat.label}
                </h3>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {skills
                    .filter((s) => s.category === cat.key)
                    .map((skill) => (
                      <SkillCard key={skill.name} name={skill.name} />
                    ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
