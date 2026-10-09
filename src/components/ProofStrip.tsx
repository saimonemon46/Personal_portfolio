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
      value: "125+",
      label: "DSA Problems Solved",
      subtext: "75 GFG · 50+ LeetCode",
      highlight: false,
    },
    {
      value: "Active Focus",
      label: "Systems, LLD & Applied AI",
      subtext: "DSA · Distributed Systems · LLD · AI",
      highlight: true,
    },
    {
      value: "TOP 40",
      label: "MillionX AI Buildathon",
      subtext: "National Finalist (400+ Teams)",
      highlight: false,
    },
  ];

  return (
    <section className="border-y border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] bg-[#fbf9f4]/80 dark:bg-[#111726]/80 backdrop-blur-sm py-8 relative transition-colors overflow-hidden">
      {/* Top subtle animated gradient lightbeam */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#163e91]/30 dark:via-blue-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -2 }}
              className="flex flex-col justify-center border-l-2 border-[rgba(24,25,31,0.12)] dark:border-white/[0.08] pl-4 sm:pl-6 transition-all hover:border-[#163e91] dark:hover:border-blue-500/80 group cursor-default"
            >
              <div
                className={`text-2xl sm:text-3xl lg:text-4xl font-display font-bold tracking-tight ${
                  metric.highlight
                    ? "text-emerald-700 dark:text-emerald-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-300"
                    : "text-[#18191f] dark:text-[#f1f5f9] group-hover:text-[#163e91] dark:group-hover:text-blue-400"
                } transition-colors`}
              >
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#18191f] dark:text-[#f1f5f9] mt-1">
                {metric.label}
              </div>
              <div className="text-[11px] sm:text-xs font-mono text-[#5e606a] dark:text-slate-400 mt-0.5">
                {metric.subtext}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
