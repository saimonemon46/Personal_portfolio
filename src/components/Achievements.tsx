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
        return <Trophy className="w-6 h-6 text-[#8A5A17] dark:text-[#E6BD76]" />;
      case "ieee-icadi":
        return <Award className="w-6 h-6 text-[#A4472D] dark:text-[#E3A56E]" />;
      case "dsa-mastery":
        return <Code2 className="w-6 h-6 text-[#28664F] dark:text-[#8EC5A5]" />;
      case "amar-ischool-ml":
        return <Brain className="w-6 h-6 text-[#A4472D] dark:text-[#E3A56E]" />;
      case "amar-ischool-nlp":
        return <Sparkles className="w-6 h-6 text-[#8A5A17] dark:text-[#E6BD76]" />;
      case "gp-academy-prompt":
        return <Terminal className="w-6 h-6 text-[#A4472D] dark:text-[#E3A56E]" />;
      case "campusx-agentic-ai":
        return <Bot className="w-6 h-6 text-[#28664F] dark:text-[#8EC5A5]" />;
      case "campusx-100-ml":
        return <Flame className="w-6 h-6 text-[#A4472D] dark:text-[#E3A56E]" />;
      case "campusx-100-dl":
        return <Layers className="w-6 h-6 text-[#8A5A17] dark:text-[#E6BD76]" />;
      default:
        return <Award className="w-6 h-6 text-[#A4472D] dark:text-[#E3A56E]" />;
    }
  };

  return (
    <section id="recognition" className="scroll-mt-20 py-16 sm:py-20 lg:py-24 relative border-t border-[#D9D2C3] dark:border-[#394139] transition-colors">
      <span id="about" className="scroll-mt-20 absolute top-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6 pb-6 border-b border-[#D9D2C3] dark:border-[#394139]">
          <div>
            <div className="text-xs font-mono font-semibold tracking-wider text-[#A4472D] dark:text-[#E3A56E] uppercase">
              04 / Recognition
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#20251F] dark:text-[#F1EDE3] tracking-tight mt-1">
              Achievements &amp; Certifications
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#626A60] dark:text-[#B2B7AB] max-w-2xl font-sans">
              Interactive showcase of 9 milestones: national hackathons, international symposiums, verified AI/ML certifications, and intensive 100-day engineering tracks.
            </p>
          </div>

          {/* Category Toggle Tabs */}
          <div className="flex items-center gap-2 p-1.5 rounded-xl bg-[#EEE9DE] dark:bg-[#1F2520] border border-[#D9D2C3] dark:border-[#394139] self-start md:self-auto shadow-xs">
            <button
              type="button"
              onClick={() => handleCategoryChange("honors")}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
                activeCategory === "honors"
                  ? "bg-[#A4472D] text-white dark:bg-[#E3A56E] dark:text-[#151916] shadow-xs"
                  : "text-[#626A60] dark:text-[#B2B7AB] hover:text-[#20251F] dark:hover:text-[#F1EDE3]"
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
                  ? "bg-[#A4472D] text-white dark:bg-[#E3A56E] dark:text-[#151916] shadow-xs"
                  : "text-[#626A60] dark:text-[#B2B7AB] hover:text-[#20251F] dark:hover:text-[#F1EDE3]"
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
          {/* Compact Tab Selector Bar */}
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
                      ? "bg-[#FFFCF5] dark:bg-[#1F2520] border-[#A4472D] dark:border-[#E3A56E] shadow-sm ring-1 ring-[#A4472D]/20 dark:ring-[#E3A56E]/30"
                      : "bg-[#FFFCF5]/60 hover:bg-[#FFFCF5] dark:bg-[#1F2520]/50 dark:hover:bg-[#1F2520] border-[#D9D2C3] dark:border-[#394139] hover:border-[#A4472D]/40"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeRecognitionIndicator"
                      className="absolute inset-0 rounded-xl bg-[#A4472D]/[0.04] dark:bg-[#E3A56E]/[0.08] border-2 border-[#A4472D] dark:border-[#E3A56E] pointer-events-none"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}

                  <div
                    className={`w-6 h-6 rounded-md flex items-center justify-center text-[11px] font-mono font-bold flex-shrink-0 transition-colors ${
                      isActive
                        ? "bg-[#A4472D] text-white dark:bg-[#E3A56E] dark:text-[#151916]"
                        : "bg-[#EEE9DE] text-[#626A60] dark:bg-[#252D27] dark:text-[#B2B7AB] group-hover:text-[#20251F] dark:group-hover:text-[#F1EDE3]"
                    }`}
                  >
                    0{idx + 1}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="text-[11px] font-mono font-semibold text-[#A4472D] dark:text-[#E3A56E] truncate">
                      {item.metric}
                    </div>
                    <div className="text-xs font-semibold text-[#20251F] dark:text-[#F1EDE3] truncate mt-0.5">
                      {item.title}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Item Showcase Card */}
          <div className="rounded-2xl bg-[#FFFCF5] dark:bg-[#1F2520] border border-[#D9D2C3] dark:border-[#394139] p-6 sm:p-8 shadow-sm relative overflow-hidden">
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
                    <div className="p-2.5 rounded-xl bg-[#EEE9DE] dark:bg-[#252D27] border border-[#D9D2C3] dark:border-[#394139] shadow-xs">
                      {getIcon(activeItem.id)}
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#A4472D]/10 text-[#A4472D] dark:bg-[#E3A56E]/15 dark:text-[#E3A56E] border border-[#A4472D]/20 dark:border-[#E3A56E]/30 font-semibold">
                        {activeItem.badge}
                      </span>
                      <span className="text-xs font-mono text-[#626A60] dark:text-[#B2B7AB]">
                        {activeCategory === "honors" ? "Competitive Milestone" : "Verified Credential"}
                      </span>
                    </div>
                  </div>

                  <div className="text-3xl sm:text-4xl font-display font-bold text-[#20251F] dark:text-[#F1EDE3] tracking-tight">
                    {activeItem.metric}
                  </div>
                  <div className="text-xs sm:text-sm font-mono text-[#626A60] dark:text-[#B2B7AB] mt-1">
                    {activeItem.context}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-display font-bold text-[#20251F] dark:text-[#F1EDE3] mt-4">
                    {activeItem.title}
                  </h3>

                  <p className="mt-3 text-sm text-[#626A60] dark:text-[#B2B7AB] leading-relaxed font-sans">
                    {activeItem.description}
                  </p>
                </div>

                {/* Right Side: Actions & Verification */}
                <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-6 pt-6 lg:pt-0 border-t lg:border-t-0 lg:border-l border-[#D9D2C3] dark:border-[#394139] lg:pl-8">
                  <div className="space-y-2">
                    <div className="text-xs font-mono uppercase tracking-wider text-[#626A60] dark:text-[#B2B7AB]">
                      Verification &amp; Links
                    </div>
                    {activeItem.linkUrl && (
                      <div>
                        {activeItem.linkUrl.startsWith("http") ? (
                          <a
                            href={activeItem.linkUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-semibold text-white dark:text-[#151916] bg-[#A4472D] hover:bg-[#873A26] dark:bg-[#E3A56E] dark:hover:bg-[#F0B981] transition-all shadow-md shadow-[#A4472D]/20 group"
                          >
                            <span>{activeItem.linkText || "View Verification →"}</span>
                            <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </a>
                        ) : (
                          <Link
                            href={activeItem.linkUrl}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-semibold text-white dark:text-[#151916] bg-[#A4472D] hover:bg-[#873A26] dark:bg-[#E3A56E] dark:hover:bg-[#F0B981] transition-all shadow-md shadow-[#A4472D]/20 group"
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
                      className="w-9 h-9 rounded-lg bg-[#EEE9DE] hover:bg-[#E3DDCF] dark:bg-[#252D27] dark:hover:bg-[#1F2520] border border-[#D9D2C3] dark:border-[#394139] flex items-center justify-center text-[#20251F] dark:text-[#F1EDE3] transition-all cursor-pointer"
                      aria-label="Previous item"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="text-xs font-mono text-[#626A60] dark:text-[#B2B7AB] px-2 font-semibold">
                      0{activeIndex + 1} / 0{currentList.length}
                    </span>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="w-9 h-9 rounded-lg bg-[#EEE9DE] hover:bg-[#E3DDCF] dark:bg-[#252D27] dark:hover:bg-[#1F2520] border border-[#D9D2C3] dark:border-[#394139] flex items-center justify-center text-[#20251F] dark:text-[#F1EDE3] transition-all cursor-pointer"
                      aria-label="Next item"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                      className="w-9 h-9 rounded-lg bg-[#EEE9DE] hover:bg-[#E3DDCF] dark:bg-[#252D27] dark:hover:bg-[#1F2520] border border-[#D9D2C3] dark:border-[#394139] flex items-center justify-center text-[#626A60] dark:text-[#B2B7AB] hover:text-[#20251F] dark:hover:text-[#F1EDE3] transition-all cursor-pointer ml-1"
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
