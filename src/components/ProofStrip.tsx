"use client";

import { motion } from "framer-motion";

export function ProofStrip() {
  const metrics = [
    {
      value: "02",
      label: "Professional Roles",
      subtext: "Imjol · Leotech",
      highlight: false,
    },
    {
      value: "100+",
      label: "Algorithmic Problems",
      subtext: "GeeksforGeeks & LeetCode",
      highlight: false,
    },
    {
      value: "TOP 40",
      label: "MillionX AI Buildathon",
      subtext: "National Finalist (400+ Teams)",
      highlight: true,
    },
  ];

  return (
    <section className="border-y border-[#D9D2C3] dark:border-[#394139] bg-[#FFFCF5]/90 dark:bg-[#1F2520]/90 backdrop-blur-sm py-8 relative transition-colors overflow-hidden">
      {/* Top subtle animated gradient lightbeam */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#A4472D]/30 dark:via-[#E3A56E]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -2 }}
              className="flex flex-col justify-center border-l-2 border-[#D9D2C3] dark:border-[#394139] pl-4 sm:pl-6 transition-all hover:border-[#A4472D] dark:hover:border-[#E3A56E] group cursor-default"
            >
              <div
                className={`text-2xl sm:text-3xl lg:text-4xl font-display font-bold tracking-tight ${
                  metric.highlight
                    ? "text-[#A4472D] dark:text-[#E3A56E]"
                    : "text-[#20251F] dark:text-[#F1EDE3] group-hover:text-[#A4472D] dark:group-hover:text-[#E3A56E]"
                } transition-colors`}
              >
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#20251F] dark:text-[#F1EDE3] mt-1">
                {metric.label}
              </div>
              <div className="text-[11px] sm:text-xs font-mono text-[#626A60] dark:text-[#B2B7AB] mt-0.5">
                {metric.subtext}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
