"use client";

import { motion } from "framer-motion";
import { educationData } from "@/data/education";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export function Education() {
  return (
    <section className="py-16 bg-transparent border-t border-[#D9D2C3] dark:border-[#394139] relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-xl bg-[#FFFCF5] dark:bg-[#1F2520] border border-[#D9D2C3] dark:border-[#394139] p-6 sm:p-8 shadow-sm hover:border-[#A4472D]/40 dark:hover:border-[#E3A56E]/40 transition-all"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Degree & Institution (7 cols) */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-[#A4472D] dark:text-[#E3A56E] uppercase mb-2">
                <GraduationCap className="w-4 h-4" />
                <span>Academic Foundation</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-display font-bold text-[#20251F] dark:text-[#F1EDE3]">
                {educationData.institution}
              </h3>
              <div className="text-base text-[#A4472D] dark:text-[#E3A56E] font-medium mt-1">
                {educationData.degree}
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-mono text-[#626A60] dark:text-[#B2B7AB]">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#A4472D] dark:text-[#E3A56E]" />
                  {educationData.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#28664F] dark:text-[#8EC5A5]" />
                  {educationData.location}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#28664F]/10 text-[#28664F] dark:text-[#8EC5A5] border border-[#28664F]/20 font-bold">
                  CGPA: {educationData.cgpa} / {educationData.maxCgpa}
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {educationData.coursework.map((course) => (
                  <span
                    key={course}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#EEE9DE] dark:bg-[#252D27] text-[#20251F] dark:text-[#F1EDE3] border border-[#D9D2C3] dark:border-[#394139]"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            {/* Highlights (5 cols) */}
            <div className="lg:col-span-5 lg:border-l lg:border-[#D9D2C3] dark:lg:border-[#394139] lg:pl-8">
              <div className="text-xs font-mono text-[#626A60] dark:text-[#B2B7AB] uppercase tracking-wider mb-3">
                Key Highlights
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-[#626A60] dark:text-[#B2B7AB]">
                {educationData.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 leading-relaxed">
                    <span className="text-[#28664F] dark:text-[#8EC5A5] mt-0.5">▹</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
