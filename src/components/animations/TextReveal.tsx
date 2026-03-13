"use client";

import { motion } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function TextReveal({
  text,
  className,
  delay = 0,
}: TextRevealProps) {
  const words = text.split(" ");

  return (
    <motion.p className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: delay + i * 0.04,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
          >
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </motion.p>
  );
}
