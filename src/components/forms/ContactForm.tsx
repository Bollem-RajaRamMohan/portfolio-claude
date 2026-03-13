"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";
import MagneticButton from "@/components/animations/MagneticButton";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, open mailto with the form data
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.open(`mailto:your@email.com?subject=${subject}&body=${body}`);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <FadeIn delay={0.1}>
        <div className="group relative">
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder=" "
            className="peer w-full border-b border-neutral-800 bg-transparent py-4 text-white outline-none transition-colors focus:border-purple-500 placeholder-transparent"
          />
          <label className="absolute left-0 top-4 text-sm text-neutral-500 transition-all peer-focus:top-0 peer-focus:text-xs peer-focus:text-purple-400 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-neutral-500">
            Your Name
          </label>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="group relative">
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder=" "
            className="peer w-full border-b border-neutral-800 bg-transparent py-4 text-white outline-none transition-colors focus:border-purple-500 placeholder-transparent"
          />
          <label className="absolute left-0 top-4 text-sm text-neutral-500 transition-all peer-focus:top-0 peer-focus:text-xs peer-focus:text-purple-400 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-neutral-500">
            Your Email
          </label>
        </div>
      </FadeIn>

      <FadeIn delay={0.3}>
        <div className="group relative">
          <textarea
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder=" "
            className="peer w-full resize-none border-b border-neutral-800 bg-transparent py-4 text-white outline-none transition-colors focus:border-purple-500 placeholder-transparent"
          />
          <label className="absolute left-0 top-4 text-sm text-neutral-500 transition-all peer-focus:top-0 peer-focus:text-xs peer-focus:text-purple-400 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-neutral-500">
            Your Message
          </label>
        </div>
      </FadeIn>

      <FadeIn delay={0.4}>
        <MagneticButton>
          <motion.button
            type="submit"
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-medium text-black transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
          >
            {submitted ? "Message Sent!" : "Send Message"}
            {!submitted && (
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
            )}
          </motion.button>
        </MagneticButton>
      </FadeIn>
    </form>
  );
}
