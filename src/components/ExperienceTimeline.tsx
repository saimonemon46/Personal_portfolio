"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { Calendar, MapPin, ExternalLink, Zap } from "lucide-react";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="scroll-mt-20 py-20 lg:py-28 bg-transparent border-t border-[#D9D2C3] dark:border-[#394139] relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-14"
        >
          <div className="text-xs font-mono font-semibold tracking-wider text-[#A4472D] dark:text-[#E3A56E] uppercase">
            02 / Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#20251F] dark:text-[#F1EDE3] tracking-tight mt-1">
            Work Experience
          </h2>
          <p className="mt-2 text-base text-[#626A60] dark:text-[#B2B7AB]">
            Battle-tested engineering on active production systems, optimizing relational query paths and maintaining high availability.
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative border-l border-[#D9D2C3] dark:border-[#394139] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
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
                    ? "bg-[#A4472D] dark:bg-[#E3A56E] border-[#A4472D]/40 dark:border-[#E3A56E]/40 ring-4 ring-[#A4472D]/20 dark:ring-[#E3A56E]/20"
                    : "bg-[#F4F0E6] dark:bg-[#151916] border-[#D9D2C3] dark:border-[#394139] group-hover:border-[#A4472D] dark:group-hover:border-[#E3A56E]"
                } transition-colors`}
              >
                {exp.isCurrent && (
                  <span className="absolute -inset-1 rounded-full bg-[#A4472D]/30 dark:bg-[#E3A56E]/30 animate-ping pointer-events-none" />
                )}
              </div>

              {/* Card Container */}
              <div className="rounded-xl bg-[#FFFCF5] dark:bg-[#1F2520] border border-[#D9D2C3] dark:border-[#394139] hover:border-[#A4472D]/40 dark:hover:border-[#E3A56E]/40 transition-all p-6 sm:p-8 shadow-sm group-hover:shadow-md">
                {/* Header Row: Company, Role, Period */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#D9D2C3] dark:border-[#394139] pb-4 mb-5">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-[#20251F] dark:text-[#F1EDE3]">
                        {exp.company}
                      </h3>
                      {exp.isCurrent && (
                        <span className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-[#28664F]/10 text-[#28664F] dark:text-[#8EC5A5] border border-[#28664F]/20 font-semibold flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#28664F] dark:bg-[#8EC5A5] animate-pulse" />
                          <span>Current</span>
                        </span>
                      )}
                    </div>
                    <div className="text-sm font-semibold text-[#A4472D] dark:text-[#E3A56E] mt-0.5">
                      {exp.role}
                    </div>
                  </div>

                  <div className="flex flex-wrap sm:flex-col sm:items-end text-xs font-mono text-[#626A60] dark:text-[#B2B7AB] gap-x-4 gap-y-1">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#A4472D] dark:text-[#E3A56E]" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#28664F] dark:text-[#8EC5A5]" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Featured Metric Badge */}
                {exp.featuredMetric && (
                  <div className="mb-5 inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-[#28664F]/10 dark:bg-[#28664F]/20 border border-[#28664F]/30 text-[#28664F] dark:text-[#8EC5A5]">
                    <Zap className="w-4 h-4 text-[#28664F] dark:text-[#8EC5A5] flex-shrink-0 animate-pulse" />
                    <span className="text-base sm:text-lg font-display font-bold">
                      {exp.featuredMetric.value}
                    </span>
                    <span className="text-xs font-mono text-[#28664F] dark:text-[#8EC5A5]/90 font-medium">
                      {exp.featuredMetric.label}
                    </span>
                  </div>
                )}

                {/* Summary */}
                <p className="text-sm sm:text-base text-[#626A60] dark:text-[#B2B7AB] leading-relaxed mb-5 font-sans">
                  {exp.summary}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2 mb-6 text-xs sm:text-sm text-[#626A60] dark:text-[#B2B7AB] list-disc list-inside">
                  {exp.achievements.map((item, aIdx) => (
                    <li key={aIdx} className="leading-relaxed">
                      <span className="text-[#20251F] dark:text-[#F1EDE3]">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags and Certificate Link */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#D9D2C3] dark:border-[#394139]">
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded text-xs font-mono bg-[#EEE9DE] dark:bg-[#252D27] text-[#20251F] dark:text-[#F1EDE3] border border-[#D9D2C3] dark:border-[#394139] hover:border-[#A4472D]/40 dark:hover:border-[#E3A56E]/40 transition-colors"
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
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-[#A4472D] dark:text-[#E3A56E] hover:text-[#873A26] dark:hover:text-[#F0B981] transition-colors group/link"
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
