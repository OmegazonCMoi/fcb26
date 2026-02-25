"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

function Counter({
  to,
  sign = "",
}: {
  to: number;
  sign?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const stepTime = 16;
    const steps = duration / stepTime;
    const increment = to / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(Math.round(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, to]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {sign}
    </span>
  );
}

const stats = [
  { value: 10, sign: "", label: "Ateliers" },
  { value: 600, sign: "+", label: "Participants" },
  { value: 98, sign: "%", label: "Satisfaction" },
];

export default function StatsSection() {
  return (
    <section className="py-32 border-y border-white/[0.06]">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24">
        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.05}>
              <div className="text-center md:text-left">
                <div className="font-[family-name:var(--font-display)] text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
                  <Counter to={stat.value} sign={stat.sign} />
                </div>
                <p className="text-[13px] text-white/35 mt-2 tracking-wide uppercase">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
