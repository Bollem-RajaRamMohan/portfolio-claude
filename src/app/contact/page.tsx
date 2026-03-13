"use client";

import FadeIn from "@/components/animations/FadeIn";
import ContactForm from "@/components/forms/ContactForm";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-6">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            Contact
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="mt-4 text-4xl font-bold text-white sm:text-6xl">
            Get in Touch
          </h1>
        </FadeIn>

        <div className="mt-16 grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          {/* Left: Info */}
          <div>
            <FadeIn delay={0.2}>
              <p className="text-lg leading-relaxed text-neutral-400">
                I&apos;m always interested in hearing about new projects and
                opportunities. Whether you have a question or just want to say
                hi, feel free to reach out.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-10">
                <a
                  href="mailto:your@email.com"
                  className="group inline-flex items-center gap-3 text-white transition-colors hover:text-purple-400"
                >
                  <Mail className="h-5 w-5" />
                  <span className="text-lg">your@email.com</span>
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="mt-8 flex gap-4">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-neutral-400 transition-all hover:border-white/20 hover:bg-white/5 hover:text-white"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right: Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
