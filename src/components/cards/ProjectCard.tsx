"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Project } from "@/types";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <motion.article
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="group relative overflow-hidden rounded-2xl border border-white/5 bg-neutral-900"
      >
        {/* Gradient placeholder */}
        <div
          className={`aspect-video w-full bg-gradient-to-br ${project.gradient} transition-transform duration-500 group-hover:scale-105`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.4)_100%)]" />
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between">
            <h3 className="text-lg font-semibold text-white">
              {project.title}
            </h3>
            <ArrowUpRight className="h-5 w-5 text-neutral-500 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
          </div>

          <p className="mt-2 text-sm text-neutral-400">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/5 px-3 py-1 text-xs text-neutral-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
