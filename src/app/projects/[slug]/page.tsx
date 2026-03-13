"use client";

import { useRef } from "react";
import { useParams } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";
import FadeIn from "@/components/animations/FadeIn";
import MagneticButton from "@/components/animations/MagneticButton";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white">Project Not Found</h1>
          <Link
            href="/projects"
            className="mt-4 inline-block text-neutral-400 hover:text-white transition-colors"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="bg-black">
      {/* Hero banner with parallax */}
      <div ref={heroRef} className="relative h-[70vh] overflow-hidden">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
        >
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>

        {/* Back button */}
        <div className="absolute top-28 left-6 z-10 md:left-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            All Projects
          </Link>
        </div>

        {/* Hero content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="mx-auto max-w-5xl">
            <FadeIn delay={0.2}>
              <div className="flex items-center gap-4 mb-4">
                {project.year && (
                  <span className="text-sm text-white/60">{project.year}</span>
                )}
                {project.role && (
                  <>
                    <span className="text-white/20">|</span>
                    <span className="text-sm text-white/60">
                      {project.role}
                    </span>
                  </>
                )}
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <h1 className="text-4xl font-bold text-white sm:text-6xl lg:text-7xl">
                {project.title}
              </h1>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70 backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-5xl px-6 py-20 md:px-12">
        {/* Links */}
        <FadeIn>
          <div className="flex gap-4 mb-16">
            {project.liveUrl && (
              <MagneticButton>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-105"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Site
                </a>
              </MagneticButton>
            )}
            {project.githubUrl && (
              <MagneticButton>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all hover:border-white/20 hover:bg-white/10"
                >
                  <Github className="h-4 w-4" />
                  Source Code
                </a>
              </MagneticButton>
            )}
          </div>
        </FadeIn>

        {/* Description */}
        <FadeIn delay={0.1}>
          <div className="mb-16">
            <h2 className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-4">
              Overview
            </h2>
            <p className="text-lg leading-relaxed text-neutral-300">
              {project.longDescription || project.description}
            </p>
          </div>
        </FadeIn>

        {/* Challenge & Solution */}
        <div className="grid gap-16 md:grid-cols-2 mb-16">
          {project.challenges && (
            <FadeIn delay={0.2}>
              <div>
                <h2 className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-4">
                  Challenge
                </h2>
                <p className="text-neutral-400 leading-relaxed">
                  {project.challenges}
                </p>
              </div>
            </FadeIn>
          )}
          {project.solution && (
            <FadeIn delay={0.3}>
              <div>
                <h2 className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-4">
                  Solution
                </h2>
                <p className="text-neutral-400 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </FadeIn>
          )}
        </div>
      </div>

      {/* Next Project */}
      <Link href={`/projects/${nextProject.slug}`} className="block">
        <div className="group relative border-t border-white/5 overflow-hidden">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${nextProject.gradient} opacity-0 transition-opacity duration-700 group-hover:opacity-10`}
          />
          <div className="mx-auto max-w-5xl px-6 py-20 md:px-12">
            <FadeIn>
              <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
                Next Project
              </p>
              <h3 className="mt-4 text-3xl font-bold text-white sm:text-5xl transition-colors group-hover:text-neutral-300">
                {nextProject.title}
              </h3>
              <p className="mt-2 text-neutral-500">{nextProject.description}</p>
            </FadeIn>
          </div>
        </div>
      </Link>
    </div>
  );
}
