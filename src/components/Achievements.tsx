"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { achievements, Achievement } from "@/data/achievements";
import {
  Award,
  Trophy,
  Code2,
  ArrowRight,
  ExternalLink,
  Brain,
  Sparkles,
  Terminal,
  Flame,
  Layers,
  GraduationCap,
  Bot,
} from "lucide-react";

export function Achievements() {
  const [activeTab, setActiveTab] = useState<"all" | "honors" | "certifications">("all");

  const honorsItems = achievements.filter((item) => item.category === "honors");
  const certItems = achievements.filter((item) => item.category === "certifications");

  const getIcon = (id: string) => {
    switch (id) {
      case "millionx":
        return <Trophy className="w-5 h-5 text-amber-500 dark:text-amber-400 group-hover:scale-110 transition-transform" />;
      case "ieee-icadi":
        return <Award className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />;
      case "dsa-mastery":
        return <Code2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform" />;
      case "amar-ischool-ml":
        return <Brain className="w-5 h-5 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform" />;
      case "amar-ischool-nlp":
        return <Sparkles className="w-5 h-5 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform" />;
      case "gp-academy-prompt":
        return <Terminal className="w-5 h-5 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform" />;
      case "campusx-agentic-ai":
        return <Bot className="w-5 h-5 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform" />;
      case "campusx-100-ml":
        return <Flame className="w-5 h-5 text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform" />;
      case "campusx-100-dl":
        return <Layers className="w-5 h-5 text-rose-600 dark:text-rose-400 group-hover:scale-110 transition-transform" />;
      default:
        return <Award className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />;
    }
  };

  const renderCard = (item: Achievement, idx: number) => (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.4, delay: (idx % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      className="rounded-xl bg-[#fbf9f4] dark:bg-[#151d30] border border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] hover:border-[#163e91]/40 dark:hover:border-blue-500/40 transition-all p-6 flex flex-col justify-between shadow-sm hover:shadow-md dark:shadow-xl dark:hover:shadow-2xl group"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 rounded-lg bg-[#f0ece1] dark:bg-[#111726] border border-[rgba(24,25,31,0.08)] dark:border-white/[0.06] shadow-xs">
            {getIcon(item.id)}
          </div>
          <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-blue-500/10 text-[#163e91] dark:text-blue-400 border border-blue-500/20 font-semibold">
            {item.badge}
          </span>
        </div>

        <div className="text-2xl font-display font-bold text-[#18191f] dark:text-[#f1f5f9] group-hover:text-[#163e91] dark:group-hover:text-blue-400 transition-colors">
          {item.metric}
        </div>
        <div className="text-xs font-mono text-[#5e606a] dark:text-slate-400 mt-0.5">
          {item.context}
        </div>

        <h3 className="text-base font-semibold text-[#18191f] dark:text-slate-200 mt-3">
          {item.title}
        </h3>

        <p className="mt-2 text-xs text-[#5e606a] dark:text-slate-300 leading-relaxed font-sans">
          {item.description}
        </p>
      </div>

      {item.linkUrl && (
        <div className="mt-5 pt-4 border-t border-[rgba(24,25,31,0.08)] dark:border-white/[0.08]">
          {item.linkUrl.startsWith("http") ? (
            <a
              href={item.linkUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#163e91] dark:text-blue-400 hover:text-[#163e91]/80 dark:hover:text-blue-300 transition-colors group/link"
            >
              <span>{item.linkText}</span>
              <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </a>
          ) : (
            <Link
              href={item.linkUrl}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#163e91] dark:text-blue-400 hover:text-[#163e91]/80 dark:hover:text-blue-300 transition-colors group/link"
            >
              <span>{item.linkText}</span>
              <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>
      )}
    </motion.div>
  );

  return (
    <section id="recognition" className="scroll-mt-20 py-20 lg:py-28 relative border-t border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-8"
        >
          <div className="text-xs font-mono font-semibold tracking-wider text-[#163e91] dark:text-blue-400 uppercase">
            04 / Recognition
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#18191f] dark:text-[#f1f5f9] tracking-tight mt-1">
            Achievements &amp; Certifications
          </h2>
          <p className="mt-2 text-base text-[#5e606a] dark:text-slate-400">
            Validated national hackathons, peer-reviewed symposiums, certified AI/ML coursework, and intensive 100-day engineering tracks.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <button
            type="button"
            onClick={() => setActiveTab("all")}
            className={`px-3.5 py-1.5 text-xs font-mono rounded-lg transition-all cursor-pointer ${
              activeTab === "all"
                ? "bg-[#163e91] text-white dark:bg-blue-600 dark:text-white shadow-xs font-semibold"
                : "bg-[#f0ece1] text-[#5e606a] hover:text-[#18191f] dark:bg-[#151d30] dark:text-slate-400 dark:hover:text-slate-200 border border-[rgba(24,25,31,0.08)] dark:border-white/[0.08]"
            }`}
          >
            All Recognitions ({achievements.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("honors")}
            className={`px-3.5 py-1.5 text-xs font-mono rounded-lg transition-all cursor-pointer ${
              activeTab === "honors"
                ? "bg-[#163e91] text-white dark:bg-blue-600 dark:text-white shadow-xs font-semibold"
                : "bg-[#f0ece1] text-[#5e606a] hover:text-[#18191f] dark:bg-[#151d30] dark:text-slate-400 dark:hover:text-slate-200 border border-[rgba(24,25,31,0.08)] dark:border-white/[0.08]"
            }`}
          >
            Honors &amp; Hackathons ({honorsItems.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("certifications")}
            className={`px-3.5 py-1.5 text-xs font-mono rounded-lg transition-all cursor-pointer ${
              activeTab === "certifications"
                ? "bg-[#163e91] text-white dark:bg-blue-600 dark:text-white shadow-xs font-semibold"
                : "bg-[#f0ece1] text-[#5e606a] hover:text-[#18191f] dark:bg-[#151d30] dark:text-slate-400 dark:hover:text-slate-200 border border-[rgba(24,25,31,0.08)] dark:border-white/[0.08]"
            }`}
          >
            Certifications &amp; Coursework ({certItems.length})
          </button>
        </div>

        {/* Content Presentation */}
        <AnimatePresence mode="wait">
          {activeTab === "all" ? (
            <motion.div
              key="all-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              {/* Subsection 1: Honors & Competitions */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Trophy className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                  <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#18191f] dark:text-slate-200">
                    Honors &amp; Competitive Milestones
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {honorsItems.map((item, idx) => renderCard(item, idx))}
                </div>
              </div>

              {/* Subsection 2: Certifications & Coursework */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#18191f] dark:text-slate-200">
                    Specialized Certifications &amp; Deep Technical Learning
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {certItems.map((item, idx) => renderCard(item, idx))}
                </div>
              </div>
            </motion.div>
          ) : activeTab === "honors" ? (
            <motion.div
              key="honors-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {honorsItems.map((item, idx) => renderCard(item, idx))}
            </motion.div>
          ) : (
            <motion.div
              key="certs-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {certItems.map((item, idx) => renderCard(item, idx))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
