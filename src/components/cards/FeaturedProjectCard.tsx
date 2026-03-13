"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { Project } from "@/types";
import { ArrowUpRight } from "lucide-react";

interface FeaturedProjectCardProps {
  project: Project;
  index: number;
}

export default function FeaturedProjectCard({
  project,
  index,
}: FeaturedProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <Link href={`/projects/${project.slug}`} className="block">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformPerspective: 1000 }}
        className="group relative overflow-hidden rounded-2xl border border-white/5 bg-neutral-900/50"
      >
        {/* Gradient background as image placeholder */}
        <div
          className={`relative aspect-[16/10] w-full bg-gradient-to-br ${project.gradient} overflow-hidden`}
        >
          {/* Overlay pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.5)_100%)]" />

          {/* Project number */}
          <div className="absolute top-6 right-6 text-7xl font-bold text-white/10">
            {String(index + 1).padStart(2, "0")}
          </div>

          {/* Tags that slide in on hover */}
          <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.05 }}
                viewport={{ once: true }}
                className="rounded-full bg-black/30 px-3 py-1 text-xs text-white/80 backdrop-blur-sm"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3">
                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>
                {project.year && (
                  <span className="text-xs text-neutral-500">{project.year}</span>
                )}
              </div>
              <p className="mt-3 max-w-lg text-neutral-400 leading-relaxed">
                {project.description}
              </p>
            </div>
            <div className="flex-shrink-0 ml-4 rounded-full border border-white/10 p-3 transition-all group-hover:border-white/30 group-hover:bg-white group-hover:text-black">
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
