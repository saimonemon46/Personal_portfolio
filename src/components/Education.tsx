"use client";

import { motion } from "framer-motion";
import { educationData } from "@/data/education";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export function Education() {
  return (
    <section className="py-16 bg-transparent border-t border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-xl bg-[#fbf9f4] dark:bg-[#151d30] border border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] p-6 sm:p-8 shadow-sm dark:shadow-xl hover:border-[#163e91]/30 dark:hover:border-blue-500/30 transition-all"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Degree & Institution (7 cols) */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-[#163e91] dark:text-blue-400 uppercase mb-2">
                <GraduationCap className="w-4 h-4" />
                <span>Academic Foundation</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-display font-bold text-[#18191f] dark:text-[#f1f5f9]">
                {educationData.institution}
              </h3>
              <div className="text-base text-[#163e91] dark:text-blue-400 font-medium mt-1">
                {educationData.degree}
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-mono text-[#5e606a] dark:text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {educationData.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  {educationData.location}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 font-bold">
                  CGPA: {educationData.cgpa} / {educationData.maxCgpa}
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {educationData.coursework.map((course) => (
                  <span
                    key={course}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#f0ece1] dark:bg-[#111726] text-[#18191f] dark:text-slate-300 border border-[rgba(24,25,31,0.08)] dark:border-white/[0.06]"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            {/* Highlights (5 cols) */}
            <div className="lg:col-span-5 lg:border-l lg:border-[rgba(24,25,31,0.08)] dark:lg:border-white/[0.08] lg:pl-8">
              <div className="text-xs font-mono text-[#5e606a] dark:text-slate-400 uppercase tracking-wider mb-3">
                Key Highlights
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-[#5e606a] dark:text-slate-300">
                {educationData.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 leading-relaxed">
                    <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">▹</span>
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
