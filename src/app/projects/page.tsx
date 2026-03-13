"use client";

import FadeIn from "@/components/animations/FadeIn";
import PageTransition from "@/components/animations/PageTransition";
import ProjectCard from "@/components/cards/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <PageTransition>
      <section className="min-h-screen bg-black px-6 pt-32 pb-20">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
              Portfolio
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-6xl">
              All Projects
            </h1>
          </FadeIn>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {projects.map((project, i) => (
              <FadeIn key={project.id} delay={0.2 + i * 0.1}>
                <ProjectCard project={project} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
