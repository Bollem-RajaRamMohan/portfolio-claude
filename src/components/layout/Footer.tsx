"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react";
import { navItems, socialLinks } from "@/data/navigation";
import MagneticButton from "@/components/animations/MagneticButton";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black">
      {/* Gradient top border */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      {/* CTA Strip */}
      <div className="border-b border-white/5 px-6 py-20">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8">
          <h3 className="text-3xl font-bold text-white sm:text-4xl">
            Got a project?
          </h3>
          <MagneticButton>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-medium text-black transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
            >
              Let&apos;s Talk
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </MagneticButton>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Logo + tagline */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-white"
            >
              Portfolio<span className="text-neutral-500">.</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-500">
              Building premium digital experiences with modern technologies and
              thoughtful design.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              Navigation
            </h4>
            <ul className="mt-4 space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              Connect
            </h4>
            <ul className="mt-4 space-y-3">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <li key={link.platform}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-white"
                    >
                      {Icon && <Icon className="h-4 w-4" />}
                      {link.platform}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
          <p className="text-xs text-neutral-600">
            &copy; {new Date().getFullYear()} Your Name. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 text-xs text-neutral-600 transition-colors hover:text-white"
          >
            Back to top
            <ArrowUp className="h-3 w-3 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
