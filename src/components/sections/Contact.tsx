"use client";

import FadeIn from "@/components/animations/FadeIn";
import MagneticButton from "@/components/animations/MagneticButton";
import { Mail, MapPin, Clock } from "lucide-react";

const contactDetails = [
  { icon: Mail, label: "Email", value: "your@email.com" },
  { icon: MapPin, label: "Location", value: "San Francisco, CA" },
  { icon: Clock, label: "Availability", value: "Open to opportunities" },
];

export default function Contact() {
  return (
    <section className="relative bg-black px-6 py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 bottom-0 h-[500px] w-[800px] -translate-x-1/2 translate-y-1/2 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="text-center">
          <FadeIn>
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
              Contact
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="mt-4 text-4xl font-bold text-white sm:text-6xl lg:text-7xl">
              Let&apos;s build something
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                great together
              </span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mx-auto mt-6 max-w-xl text-lg text-neutral-400">
              Have a project in mind? I&apos;d love to hear about it. Let&apos;s
              create something exceptional.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <MagneticButton className="mt-10 inline-block">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-medium text-black transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
              >
                Get in Touch
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
              </a>
            </MagneticButton>
          </FadeIn>
        </div>

        {/* Contact details */}
        <div className="mt-24 grid gap-8 md:grid-cols-3">
          {contactDetails.map((detail, i) => (
            <FadeIn key={detail.label} delay={0.4 + i * 0.1}>
              <div className="group rounded-2xl border border-white/5 bg-neutral-900/30 p-6 text-center transition-colors hover:border-white/10">
                <detail.icon className="mx-auto h-6 w-6 text-neutral-500 transition-colors group-hover:text-purple-400" />
                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-neutral-500">
                  {detail.label}
                </p>
                <p className="mt-1 text-sm text-white">{detail.value}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
