"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { achievements } from "@/data/achievements";
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
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";

export function Achievements() {
  const [activeCategory, setActiveCategory] = useState<"honors" | "certifications">("honors");
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const honorsItems = achievements.filter((item) => item.category === "honors");
  const certItems = achievements.filter((item) => item.category === "certifications");

  const currentList = activeCategory === "honors" ? honorsItems : certItems;
  const activeItem = currentList[activeIndex] || currentList[0];

  // Reset index when category switches
  const handleCategoryChange = (category: "honors" | "certifications") => {
    setActiveCategory(category);
    setActiveIndex(0);
  };

  // Auto-play timer (cycles every 7 seconds when not paused or hovered)
  useEffect(() => {
    if (!isAutoPlaying || isHovered) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % currentList.length);
    }, 7000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoPlaying, isHovered, currentList.length]);

  const goToItem = (idx: number) => {
    setDirection(idx > activeIndex ? 1 : -1);
    setActiveIndex(idx);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : currentList.length - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % currentList.length);
  };

  const getIcon = (id: string) => {
    switch (id) {
      case "millionx":
        return <Trophy className="w-6 h-6 text-amber-500 dark:text-amber-400" />;
      case "ieee-icadi":
        return <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
      case "dsa-mastery":
        return <Code2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case "amar-ischool-ml":
        return <Brain className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />;
      case "amar-ischool-nlp":
        return <Sparkles className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />;
      case "gp-academy-prompt":
        return <Terminal className="w-6 h-6 text-purple-600 dark:text-purple-400" />;
      case "campusx-agentic-ai":
        return <Bot className="w-6 h-6 text-teal-600 dark:text-teal-400" />;
      case "campusx-100-ml":
        return <Flame className="w-6 h-6 text-amber-600 dark:text-amber-400" />;
      case "campusx-100-dl":
        return <Layers className="w-6 h-6 text-rose-600 dark:text-rose-400" />;
      default:
        return <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
    }
  };

  return (
    <section id="recognition" className="scroll-mt-20 py-16 sm:py-20 lg:py-24 relative border-t border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6 pb-6 border-b border-[rgba(24,25,31,0.08)] dark:border-white/[0.08]">
          <div>
            <div className="text-xs font-mono font-semibold tracking-wider text-[#163e91] dark:text-blue-400 uppercase">
              04 / Recognition
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#18191f] dark:text-[#f1f5f9] tracking-tight mt-1">
              Achievements &amp; Certifications
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#5e606a] dark:text-slate-400 max-w-2xl font-sans">
              Interactive showcase of 9 milestones: national hackathons, international symposiums, verified AI/ML certifications, and intensive 100-day engineering tracks.
            </p>
          </div>

          {/* Category Toggle Tabs */}
          <div className="flex items-center gap-2 p-1.5 rounded-xl bg-[#eeeae0] dark:bg-[#151d30] border border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] self-start md:self-auto shadow-xs">
            <button
              type="button"
              onClick={() => handleCategoryChange("honors")}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
                activeCategory === "honors"
                  ? "bg-[#163e91] text-white dark:bg-blue-600 dark:text-white shadow-xs"
                  : "text-[#5e606a] dark:text-slate-400 hover:text-[#18191f] dark:hover:text-slate-200"
              }`}
            >
              <Trophy className="w-3.5 h-3.5" />
              <span>Honors &amp; Hackathons ({honorsItems.length})</span>
            </button>
            <button
              type="button"
              onClick={() => handleCategoryChange("certifications")}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
                activeCategory === "certifications"
                  ? "bg-[#163e91] text-white dark:bg-blue-600 dark:text-white shadow-xs"
                  : "text-[#5e606a] dark:text-slate-400 hover:text-[#18191f] dark:hover:text-slate-200"
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Certifications &amp; Courses ({certItems.length})</span>
            </button>
          </div>
        </div>

        {/* Interactive Showcase Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Compact Tab Selector Bar (matching Featured Projects style) */}
          <div
            className={`grid gap-3 mb-6 ${
              activeCategory === "honors"
                ? "grid-cols-1 md:grid-cols-3"
                : "grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
            }`}
          >
            {currentList.map((item, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => goToItem(idx)}
                  className={`relative text-left p-3 rounded-xl border transition-all duration-200 flex items-start gap-2.5 group cursor-pointer ${
                    isActive
                      ? "bg-[#fbf9f4] dark:bg-[#151d30] border-[#163e91] dark:border-blue-500 shadow-sm ring-1 ring-[#163e91]/20 dark:ring-blue-500/30"
                      : "bg-[#fbf9f4]/60 hover:bg-[#fbf9f4] dark:bg-[#151d30]/50 dark:hover:bg-[#151d30] border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] hover:border-[rgba(24,25,31,0.18)] dark:hover:border-white/[0.16]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeRecognitionIndicator"
                      className="absolute inset-0 rounded-xl bg-[#163e91]/[0.03] dark:bg-blue-500/[0.06] border-2 border-[#163e91] dark:border-blue-500 pointer-events-none"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}

                  <div
                    className={`w-6 h-6 rounded-md flex items-center justify-center text-[11px] font-mono font-bold flex-shrink-0 transition-colors ${
                      isActive
                        ? "bg-[#163e91] text-white dark:bg-blue-600 dark:text-white"
                        : "bg-[#f0ece1] text-[#5e606a] dark:bg-[#111726] dark:text-slate-400 group-hover:text-[#18191f] dark:group-hover:text-white"
                    }`}
                  >
                    0{idx + 1}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="text-[11px] font-mono font-semibold text-[#163e91] dark:text-blue-400 truncate">
                      {item.metric}
                    </div>
                    <div className="text-xs font-semibold text-[#18191f] dark:text-slate-200 truncate mt-0.5">
                      {item.title}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Item Showcase Card */}
          <div className="rounded-2xl bg-[#fbf9f4] dark:bg-[#151d30] border border-[rgba(24,25,31,0.12)] dark:border-white/[0.08] p-6 sm:p-8 shadow-sm dark:shadow-xl relative overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeItem.id}
                custom={direction}
                initial={{ opacity: 0, x: direction * 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 24 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col lg:flex-row lg:items-center justify-between gap-8"
              >
                {/* Left Side: Identity & Metrics */}
                <div className="lg:max-w-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-[#f0ece1] dark:bg-[#111726] border border-[rgba(24,25,31,0.08)] dark:border-white/[0.06] shadow-xs">
                      {getIcon(activeItem.id)}
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-blue-500/10 text-[#163e91] dark:text-blue-400 border border-blue-500/20 font-semibold">
                        {activeItem.badge}
                      </span>
                      <span className="text-xs font-mono text-[#5e606a] dark:text-slate-400">
                        {activeCategory === "honors" ? "Competitive Milestone" : "Verified Credential"}
                      </span>
                    </div>
                  </div>

                  <div className="text-3xl sm:text-4xl font-display font-bold text-[#18191f] dark:text-[#f1f5f9] tracking-tight">
                    {activeItem.metric}
                  </div>
                  <div className="text-xs sm:text-sm font-mono text-[#5e606a] dark:text-slate-400 mt-1">
                    {activeItem.context}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-display font-bold text-[#18191f] dark:text-slate-200 mt-4">
                    {activeItem.title}
                  </h3>

                  <p className="mt-3 text-sm text-[#5e606a] dark:text-slate-300 leading-relaxed font-sans">
                    {activeItem.description}
                  </p>
                </div>

                {/* Right Side: Actions & Verification */}
                <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-6 pt-6 lg:pt-0 border-t lg:border-t-0 lg:border-l border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] lg:pl-8">
                  <div className="space-y-2">
                    <div className="text-xs font-mono uppercase tracking-wider text-[#5e606a] dark:text-slate-400">
                      Verification &amp; Links
                    </div>
                    {activeItem.linkUrl && (
                      <div>
                        {activeItem.linkUrl.startsWith("http") ? (
                          <a
                            href={activeItem.linkUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-semibold text-white bg-[#163e91] hover:bg-[#122f6d] dark:bg-blue-600 dark:hover:bg-blue-500 transition-all shadow-md shadow-blue-600/20 group"
                          >
                            <span>{activeItem.linkText || "View Verification →"}</span>
                            <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </a>
                        ) : (
                          <Link
                            href={activeItem.linkUrl}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-semibold text-white bg-[#163e91] hover:bg-[#122f6d] dark:bg-blue-600 dark:hover:bg-blue-500 transition-all shadow-md shadow-blue-600/20 group"
                          >
                            <span>{activeItem.linkText || "View Project →"}</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="w-9 h-9 rounded-lg bg-[#eeeae0] hover:bg-[#e4decb] dark:bg-[#111726] dark:hover:bg-[#1a233a] border border-[rgba(24,25,31,0.1)] dark:border-white/[0.08] flex items-center justify-center text-[#18191f] dark:text-slate-200 transition-all cursor-pointer"
                      aria-label="Previous item"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="text-xs font-mono text-[#5e606a] dark:text-slate-400 px-2 font-semibold">
                      0{activeIndex + 1} / 0{currentList.length}
                    </span>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="w-9 h-9 rounded-lg bg-[#eeeae0] hover:bg-[#e4decb] dark:bg-[#111726] dark:hover:bg-[#1a233a] border border-[rgba(24,25,31,0.1)] dark:border-white/[0.08] flex items-center justify-center text-[#18191f] dark:text-slate-200 transition-all cursor-pointer"
                      aria-label="Next item"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                      className="w-9 h-9 rounded-lg bg-[#eeeae0] hover:bg-[#e4decb] dark:bg-[#111726] dark:hover:bg-[#1a233a] border border-[rgba(24,25,31,0.1)] dark:border-white/[0.08] flex items-center justify-center text-[#5e606a] dark:text-slate-400 hover:text-[#18191f] dark:hover:text-slate-200 transition-all cursor-pointer ml-1"
                      aria-label={isAutoPlaying ? "Pause autoplay" : "Start autoplay"}
                      title={isAutoPlaying ? "Pause autoplay" : "Start autoplay"}
                    >
                      {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
