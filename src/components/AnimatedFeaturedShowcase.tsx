"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  ZoomIn,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { LightboxModal } from "@/components/LightboxModal";
import { Project } from "@/data/projects";

interface AnimatedFeaturedShowcaseProps {
  projects: Project[];
}

export function AnimatedFeaturedShowcase({ projects }: AnimatedFeaturedShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [activeThumbIdx, setActiveThumbIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const activeProject = projects[activeIndex];
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play timer (cycles every 8 seconds when not paused or hovered)
  useEffect(() => {
    if (!isAutoPlaying || isHovered) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % projects.length);
      setActiveThumbIdx(0);
    }, 8000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoPlaying, isHovered, projects.length]);

  const goToProject = (newIdx: number) => {
    setDirection(newIdx > activeIndex ? 1 : -1);
    setActiveIndex(newIdx);
    setActiveThumbIdx(0);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : projects.length - 1));
    setActiveThumbIdx(0);
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % projects.length);
    setActiveThumbIdx(0);
  };

  const currentScreenshot =
    activeProject.screenshots[activeThumbIdx] || activeProject.screenshots[0];

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 3 Interactive Tab Selector Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
        {projects.map((proj, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={proj.slug}
              type="button"
              onClick={() => goToProject(idx)}
              className={`relative text-left p-3.5 sm:p-4 rounded-xl border transition-all duration-300 flex items-start gap-3.5 group ${
                isActive
                  ? "bg-[#fbf9f4] dark:bg-[#151d30] border-[#163e91] dark:border-blue-500 shadow-md shadow-blue-500/5 ring-1 ring-[#163e91]/20 dark:ring-blue-500/30"
                  : "bg-[#fbf9f4]/60 hover:bg-[#fbf9f4] dark:bg-[#151d30]/50 dark:hover:bg-[#151d30] border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] hover:border-[rgba(24,25,31,0.18)] dark:hover:border-white/[0.16]"
              }`}
            >
              {/* Active Tab Floating Highlight Indicator */}
              {isActive && (
                <motion.div
                  layoutId="activeFeaturedIndicator"
                  className="absolute inset-0 rounded-xl bg-[#163e91]/[0.03] dark:bg-blue-500/[0.06] border-2 border-[#163e91] dark:border-blue-500 pointer-events-none"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}

              {/* Number Badge */}
              <div
                className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-mono font-bold flex-shrink-0 transition-colors ${
                  isActive
                    ? "bg-[#163e91] text-white dark:bg-blue-600 dark:text-white"
                    : "bg-[#f0ece1] text-[#5e606a] dark:bg-[#111726] dark:text-slate-400 group-hover:text-[#18191f] dark:group-hover:text-white"
                }`}
              >
                0{idx + 1}
              </div>

              {/* Title & Tag */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-1">
                  <h3
                    className={`text-sm font-display font-bold truncate transition-colors ${
                      isActive
                        ? "text-[#163e91] dark:text-blue-400"
                        : "text-[#18191f] dark:text-[#f1f5f9]"
                    }`}
                  >
                    {proj.title.split(":")[0]}
                  </h3>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#163e91] dark:bg-blue-400 animate-pulse flex-shrink-0" />
                  )}
                </div>
                <p className="text-[11px] font-mono text-[#5e606a] dark:text-slate-400 truncate mt-0.5">
                  {proj.honorBadge || proj.tierTag || proj.category}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Animated Showcase Container */}
      <div className="rounded-2xl bg-[#fbf9f4] dark:bg-[#151d30] border border-[rgba(24,25,31,0.12)] dark:border-white/[0.08] shadow-md dark:shadow-2xl overflow-hidden relative">
        {/* Top Controls Bar */}
        <div className="px-5 py-3 border-b border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] bg-[#f0ece1]/50 dark:bg-[#111726]/60 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-[#163e91] dark:text-blue-400">
              FEATURED ARCHITECTURE 0{activeIndex + 1} / 0{projects.length}
            </span>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="p-1.5 rounded-md hover:bg-[#eeeae0] dark:hover:bg-[#1c263e] text-[#5e606a] dark:text-slate-400 hover:text-[#18191f] dark:hover:text-white transition-colors"
              title={isAutoPlaying ? "Pause Auto-play" : "Start Auto-play"}
              aria-label={isAutoPlaying ? "Pause Auto-play" : "Start Auto-play"}
            >
              {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>

            <div className="h-3.5 w-px bg-[rgba(24,25,31,0.12)] dark:bg-white/[0.12] mx-1" />

            <button
              type="button"
              onClick={handlePrev}
              className="p-1.5 rounded-md hover:bg-[#eeeae0] dark:hover:bg-[#1c263e] text-[#5e606a] dark:text-slate-400 hover:text-[#18191f] dark:hover:text-white transition-colors"
              title="Previous Architecture"
              aria-label="Previous Architecture"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="p-1.5 rounded-md hover:bg-[#eeeae0] dark:hover:bg-[#1c263e] text-[#5e606a] dark:text-slate-400 hover:text-[#18191f] dark:hover:text-white transition-colors"
              title="Next Architecture"
              aria-label="Next Architecture"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Animated Project Content Viewport */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeProject.slug}
            initial={{ opacity: 0, x: direction * 28 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -direction * 28 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="p-5 sm:p-7 lg:p-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Specs, Badges, Metrics, Matrix & Actions (7 cols) */}
              <div className="lg:col-span-7 flex flex-col justify-between h-full">
                <div>
                  {/* Badges ribbon */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-[#163e91]/10 text-[#163e91] dark:bg-blue-500/10 dark:text-blue-400 border border-[#163e91]/20 dark:border-blue-500/20">
                      {activeProject.tierTag || activeProject.category}
                    </span>
                    {activeProject.honorBadge && (
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20 flex items-center gap-1">
                        <Sparkles className="w-3 h-3 flex-shrink-0" />
                        <span>{activeProject.honorBadge}</span>
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#18191f] dark:text-[#f1f5f9] tracking-tight leading-snug">
                    {activeProject.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm font-mono text-[#163e91] dark:text-blue-300">
                    {activeProject.tagline}
                  </p>

                  {/* Metrics Pills Row */}
                  <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {activeProject.metrics.slice(0, 4).map((m, mIdx) => (
                      <div
                        key={mIdx}
                        className="p-2 rounded-lg bg-[#f0ece1]/70 dark:bg-[#111726]/80 border border-[rgba(24,25,31,0.06)] dark:border-white/[0.05]"
                      >
                        <div className="text-[10px] font-mono uppercase text-[#5e606a] dark:text-slate-400 truncate">
                          {m.label}
                        </div>
                        <div className="text-sm font-display font-bold text-[#18191f] dark:text-[#f1f5f9] mt-0.5 truncate">
                          {m.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Compact Case Study Breakdown Matrix (3 core invariants) */}
                  {activeProject.caseStudyBreakdown && (
                    <div className="mt-4 rounded-xl bg-[#f0ece1]/60 dark:bg-[#111726]/70 border border-[rgba(24,25,31,0.08)] dark:border-white/[0.06] divide-y divide-[rgba(24,25,31,0.06)] dark:divide-white/[0.06] overflow-hidden">
                      {activeProject.caseStudyBreakdown.slice(0, 3).map((item, cIdx) => (
                        <div key={cIdx} className="p-2.5 sm:p-3 flex items-start gap-2.5 text-xs">
                          <span className="font-mono uppercase font-bold text-[#163e91] dark:text-blue-400 flex-shrink-0 w-28 sm:w-32">
                            {item.label}
                          </span>
                          <span className="text-[#18191f]/90 dark:text-slate-300 font-sans leading-relaxed line-clamp-2">
                            {item.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Technology Stack Pills */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {activeProject.stack.slice(0, 6).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#f0ece1] dark:bg-[#111726] text-[#18191f] dark:text-slate-300 border border-[rgba(24,25,31,0.08)] dark:border-white/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="mt-6 pt-4 border-t border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] flex flex-wrap items-center gap-3">
                  <Link
                    href={`/work/${activeProject.slug}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-semibold text-white bg-[#163e91] hover:bg-[#122f6d] dark:bg-blue-600 dark:hover:bg-blue-500 transition-all shadow-md shadow-blue-600/20 group"
                  >
                    <span>Full Case Study Breakdown</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  {activeProject.githubUrl && (
                    <a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono text-[#18191f] dark:text-slate-200 bg-[#f0ece1] hover:bg-[#e6e0d2] dark:bg-[#111726] dark:hover:bg-[#1c263e] border border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Repository</span>
                    </a>
                  )}

                  {activeProject.demoUrl && (
                    <a
                      href={activeProject.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Production Demo</span>
                    </a>
                  )}

                  {activeProject.videoUrl && (
                    <a
                      href={activeProject.videoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono text-amber-700 dark:text-amber-400 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/20 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Video Demo</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column: Screenshot Viewer & Thumbnail Strip (5 cols) */}
              <div className="lg:col-span-5 flex flex-col">
                <div className="rounded-xl overflow-hidden bg-[#eeeae0] dark:bg-[#070A0F] border border-[rgba(24,25,31,0.12)] dark:border-white/[0.08] shadow-sm">
                  {/* Console Titlebar */}
                  <div className="px-3.5 py-2 bg-[#f0ece1] dark:bg-[#070A0F]/90 border-b border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-[#5e606a] dark:text-slate-400">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-500/80 inline-block" />
                      <span className="w-2 h-2 rounded-full bg-amber-500/80 inline-block" />
                      <span className="w-2 h-2 rounded-full bg-emerald-500/80 inline-block" />
                      <span className="truncate max-w-[150px] pl-1 font-semibold text-[#18191f] dark:text-slate-300">
                        {currentScreenshot?.title || activeProject.title}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => setLightboxOpen(true)}
                      className="flex items-center gap-1 text-[#163e91] dark:text-blue-400 hover:underline"
                    >
                      <ZoomIn className="w-3 h-3" />
                      <span>Expand</span>
                    </button>
                  </div>

                  {/* Primary Screenshot Stage */}
                  <div
                    onClick={() => setLightboxOpen(true)}
                    className="relative aspect-[16/10] w-full bg-[#10141d] dark:bg-[#070A0F] cursor-pointer group overflow-hidden"
                  >
                    {currentScreenshot && (
                      <Image
                        src={currentScreenshot.url}
                        alt={currentScreenshot.title}
                        fill
                        className="object-contain object-top p-1 transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 420px"
                      />
                    )}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="px-3 py-1.5 rounded-full bg-black/80 border border-white/20 text-xs font-mono text-white flex items-center gap-1.5 shadow-lg">
                        <ZoomIn className="w-3.5 h-3.5 text-blue-400" />
                        <span>Click to Expand</span>
                      </div>
                    </div>
                  </div>

                  {/* Thumbnail Strip (Quick Switching) */}
                  {activeProject.screenshots.length > 1 && (
                    <div className="p-2.5 bg-[#fbf9f4] dark:bg-[#0d1322] border-t border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] flex items-center gap-2 overflow-x-auto">
                      {activeProject.screenshots.map((s, sIdx) => {
                        const isSelected = sIdx === activeThumbIdx;
                        return (
                          <button
                            key={sIdx}
                            type="button"
                            onClick={() => setActiveThumbIdx(sIdx)}
                            className={`relative aspect-[16/10] w-14 sm:w-16 rounded overflow-hidden flex-shrink-0 border-2 transition-all ${
                              isSelected
                                ? "border-[#163e91] dark:border-blue-400 ring-2 ring-[#163e91]/20 dark:ring-blue-500/30 scale-105"
                                : "border-transparent opacity-60 hover:opacity-100"
                            }`}
                            title={s.title}
                          >
                            <Image
                              src={s.url}
                              alt={s.title}
                              fill
                              className="object-cover"
                              sizes="64px"
                            />
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox Modal */}
      {activeProject.screenshots.length > 0 && (
        <LightboxModal
          screenshots={activeProject.screenshots}
          initialIndex={activeThumbIdx}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </div>
  );
}
