"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { Calendar, MapPin, ExternalLink, Zap } from "lucide-react";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="scroll-mt-20 py-20 lg:py-28 bg-transparent border-t border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-14"
        >
          <div className="text-xs font-mono font-semibold tracking-wider text-[#163e91] dark:text-blue-400 uppercase">
            02 / Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#18191f] dark:text-[#f1f5f9] tracking-tight mt-1">
            Work Experience
          </h2>
          <p className="mt-2 text-base text-[#5e606a] dark:text-slate-400">
            Battle-tested engineering on active production systems, optimizing relational query paths and maintaining high availability.
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative border-l border-[rgba(24,25,31,0.12)] dark:border-white/[0.12] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -15, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              {/* Timeline indicator node */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 ${
                  exp.isCurrent
                    ? "bg-[#163e91] dark:bg-blue-500 border-blue-300 ring-4 ring-blue-500/25"
                    : "bg-[#f6f4ee] dark:bg-[#0b0f19] border-stone-400 dark:border-slate-500 group-hover:border-[#163e91] dark:group-hover:border-blue-400"
                } transition-colors`}
              >
                {exp.isCurrent && (
                  <span className="absolute -inset-1 rounded-full bg-blue-500/30 animate-ping pointer-events-none" />
                )}
              </div>

              {/* Card Container */}
              <div className="rounded-xl bg-[#fbf9f4] dark:bg-[#151d30] border border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] hover:border-[rgba(24,25,31,0.22)] dark:hover:border-blue-500/40 transition-all p-6 sm:p-8 shadow-sm dark:shadow-xl group-hover:shadow-md dark:group-hover:shadow-2xl">
                {/* Header Row: Company, Role, Period */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] pb-4 mb-5">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-[#18191f] dark:text-[#f1f5f9]">
                        {exp.company}
                      </h3>
                      {exp.isCurrent && (
                        <span className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 font-semibold flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          <span>Current</span>
                        </span>
                      )}
                    </div>
                    <div className="text-sm font-semibold text-[#163e91] dark:text-blue-400 mt-0.5">
                      {exp.role}
                    </div>
                  </div>

                  <div className="flex flex-wrap sm:flex-col sm:items-end text-xs font-mono text-[#5e606a] dark:text-slate-400 gap-x-4 gap-y-1">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#163e91] dark:text-blue-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Featured Metric Badge */}
                {exp.featuredMetric && (
                  <div className="mb-5 inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-emerald-500/10 dark:bg-emerald-950/40 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300">
                    <Zap className="w-4 h-4 text-emerald-700 dark:text-emerald-400 flex-shrink-0 animate-pulse" />
                    <span className="text-base sm:text-lg font-display font-bold">
                      {exp.featuredMetric.value}
                    </span>
                    <span className="text-xs font-mono text-emerald-800 dark:text-emerald-200/90 font-medium">
                      {exp.featuredMetric.label}
                    </span>
                  </div>
                )}

                {/* Summary */}
                <p className="text-sm sm:text-base text-[#5e606a] dark:text-slate-300 leading-relaxed mb-5 font-sans">
                  {exp.summary}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2 mb-6 text-xs sm:text-sm text-[#5e606a] dark:text-slate-300/90 list-disc list-inside">
                  {exp.achievements.map((item, aIdx) => (
                    <li key={aIdx} className="leading-relaxed">
                      <span className="text-[#18191f] dark:text-slate-200">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags and Certificate Link */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[rgba(24,25,31,0.08)] dark:border-white/[0.08]">
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded text-xs font-mono bg-[#f0ece1] dark:bg-[#111726] text-[#18191f] dark:text-slate-300 border border-[rgba(24,25,31,0.08)] dark:border-white/[0.06] hover:border-[#163e91]/30 dark:hover:border-blue-400/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {exp.certificateUrl && (
                    <a
                      href={exp.certificateUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-[#163e91] dark:text-blue-400 hover:text-[#163e91]/80 dark:hover:text-blue-300 transition-colors group/link"
                    >
                      <span>Completion Certificate</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
