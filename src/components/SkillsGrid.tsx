"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { Server, Database, Brain, Layout } from "lucide-react";

export function SkillsGrid() {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Server className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />;
      case 1:
        return <Database className="w-4 h-4 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform" />;
      case 2:
        return <Brain className="w-4 h-4 text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform" />;
      case 3:
        return <Layout className="w-4 h-4 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform" />;
      default:
        return <Server className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />;
    }
  };

  return (
    <section id="skills" className="scroll-mt-20 py-20 lg:py-28 bg-transparent border-t border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-12"
        >
          <div className="text-xs font-mono font-semibold tracking-wider text-[#163e91] dark:text-blue-400 uppercase">
            Technical Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#18191f] dark:text-[#f1f5f9] tracking-tight mt-1">
            Skills &amp; Technologies
          </h2>
          <p className="mt-2 text-base text-[#5e606a] dark:text-slate-400">
            Categorized technical capabilities grounded strictly in production delivery, open-source repositories, and academic foundations.
          </p>
        </motion.div>

        {/* 4 Grouped Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: catIdx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="rounded-xl bg-[#fbf9f4] dark:bg-[#151d30] border border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] hover:border-[#163e91]/40 dark:hover:border-blue-500/40 transition-all p-5 flex flex-col justify-between shadow-sm hover:shadow-md dark:shadow-lg dark:hover:shadow-2xl group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-3 border-b border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] mb-4">
                  <div className="flex items-center gap-2">
                    {getCategoryIcon(catIdx)}
                    <h3 className="text-sm font-display font-bold text-[#18191f] dark:text-[#f1f5f9] group-hover:text-[#163e91] dark:group-hover:text-blue-400 transition-colors">
                      {category.title}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#f0ece1] dark:bg-[#111726] text-[#5e606a] dark:text-slate-400 border border-[rgba(24,25,31,0.08)] dark:border-white/[0.06]">
                    {category.badge}
                  </span>
                </div>

                <p className="text-xs text-[#5e606a] dark:text-slate-400 mb-4 font-sans leading-relaxed">
                  {category.description}
                </p>

                {/* Skills list */}
                <div className="space-y-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/item flex flex-col p-2 rounded bg-[#f0ece1]/70 dark:bg-[#070A0F] border border-[rgba(24,25,31,0.06)] dark:border-white/[0.04] hover:border-[#163e91]/30 dark:hover:border-blue-500/30 transition-all hover:translate-x-1"
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-xs font-mono font-semibold ${
                            skill.highlight
                              ? "text-[#163e91] dark:text-blue-300 group-hover/item:text-[#163e91]/90 dark:group-hover/item:text-blue-200"
                              : "text-[#18191f] dark:text-slate-300"
                          }`}
                        >
                          {skill.name}
                        </span>
                        {skill.highlight && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#163e91] dark:bg-blue-500/80 animate-pulse" />
                        )}
                      </div>
                      <span className="text-[10px] text-[#5e606a] dark:text-slate-400 mt-0.5 leading-tight">
                        {skill.description}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
