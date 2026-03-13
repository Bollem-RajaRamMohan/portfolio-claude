"use client";

import FadeIn from "@/components/animations/FadeIn";
import FeaturedProjectCard from "@/components/cards/FeaturedProjectCard";
import MagneticButton from "@/components/animations/MagneticButton";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="bg-neutral-950 px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            Work
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-5xl">
            Featured Projects
          </h2>
        </FadeIn>

        <div className="mt-16 flex flex-col gap-10">
          {featured.map((project, i) => (
            <FadeIn key={project.id} delay={0.2 + i * 0.1}>
              <FeaturedProjectCard project={project} index={i} />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-16 text-center">
            <MagneticButton>
              <a
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-medium text-white backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10"
              >
                View All Projects
              </a>
            </MagneticButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
