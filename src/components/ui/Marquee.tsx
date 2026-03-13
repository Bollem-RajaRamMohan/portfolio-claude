"use client";

interface MarqueeProps {
  items: string[];
  speed?: number;
  className?: string;
}

export default function Marquee({
  items,
  speed = 30,
  className,
}: MarqueeProps) {
  const content = items.join(" — ");

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className ?? ""}`}>
      <div
        className="inline-flex animate-marquee"
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        <span className="text-sm uppercase tracking-[0.3em] text-neutral-500 px-4">
          {content}
        </span>
        <span className="text-sm uppercase tracking-[0.3em] text-neutral-500 px-4">
          {content}
        </span>
        <span className="text-sm uppercase tracking-[0.3em] text-neutral-500 px-4">
          {content}
        </span>
        <span className="text-sm uppercase tracking-[0.3em] text-neutral-500 px-4">
          {content}
        </span>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee linear infinite;
        }
      `}</style>
    </div>
  );
}
