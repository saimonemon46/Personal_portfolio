"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  ArrowRight,
  ExternalLink,
  BookOpen,
} from "lucide-react";

export interface DsaPatternItem {
  number: string;
  name: string;
  categories: ("core" | "concurrency" | "dp-graph")[];
  invariant: string;
  exemplar: string;
}

export const patternsData: DsaPatternItem[] = [
  {
    number: "01",
    name: "Two Pointers",
    categories: ["core"],
    invariant:
      "Maintain converging or fast-slow pointer invariants to eliminate nested loops in sorted sequences in O(N).",
    exemplar: "LC 11 (Container), LC 15 (3Sum), LC 42 (Rain Water)",
  },
  {
    number: "02",
    name: "Sliding Window",
    categories: ["core"],
    invariant:
      "Expand right pointer to satisfy constraint; contract left pointer monotonically to restore validity.",
    exemplar: "LC 3, LC 76 (Min Window), LC 424",
  },
  {
    number: "03",
    name: "Fast & Slow Pointers",
    categories: ["core", "concurrency"],
    invariant:
      "Floyd's cycle detection (1x and 2x speeds) to detect loops and find cycle entry points in O(N) time and O(1) memory.",
    exemplar: "LC 141 (Cycle), LC 142 (Cycle II), LC 287",
  },
  {
    number: "04",
    name: "Prefix Sum & Hash Map",
    categories: ["core"],
    invariant:
      "Converts range sum queries to O(1); finds subarray sum == K even when negative values rule out sliding windows.",
    exemplar: "LC 560 (Sum == K), LC 525, LC 974",
  },
  {
    number: "05",
    name: "Monotonic Stack / Queue",
    categories: ["core", "concurrency"],
    invariant:
      "Maintains strictly ordered elements to find the Next Greater or Smaller Element in O(N) linear amortized time.",
    exemplar: "LC 739 (Daily Temp), LC 84 (Histograms), LC 85",
  },
  {
    number: "06",
    name: "Merge Intervals",
    categories: ["core"],
    invariant:
      "Sort by interval start time; merge overlaps when curr.start <= prev.end to resolve calendar conflicts.",
    exemplar: "LC 56 (Merge), LC 57 (Insert), LC 253 (Meeting Rooms)",
  },
  {
    number: "07",
    name: "Binary Search on Answer",
    categories: ["core"],
    invariant:
      "When checking feasibility is monotonic (True...True, False...False), binary search the answer domain directly.",
    exemplar: "LC 875 (Koko), LC 1011 (Ship Capacity), LC 410",
  },
  {
    number: "08",
    name: "Top 'K' Elements (Heaps)",
    categories: ["core", "concurrency"],
    invariant:
      "Maintain a bounded Min-Heap of size K to find top K elements in O(N log K) without sorting the full array.",
    exemplar: "LC 215 (Kth Largest), LC 347 (Top K Frequent), LC 373",
  },
  {
    number: "09",
    name: "Two Heaps (Running Median)",
    categories: ["concurrency"],
    invariant:
      "Balance Max-Heap (lower half) and Min-Heap (upper half) to extract rolling streaming medians in O(1) time.",
    exemplar: "LC 295 (Median Stream), LC 480 (Sliding Median)",
  },
  {
    number: "10",
    name: "BFS & Multi-Source BFS",
    categories: ["dp-graph"],
    invariant:
      "Level-order FIFO queue exploration guaranteed to find unweighted shortest paths and simultaneous wavefronts.",
    exemplar: "LC 102 (Level Order), LC 994 (Rotting Oranges), LC 127",
  },
  {
    number: "11",
    name: "DFS & Tree Traversals",
    categories: ["dp-graph"],
    invariant:
      "Recursive stack propagation to evaluate tree heights, path sums, LCA, and subtree topological properties bottom-up.",
    exemplar: "LC 104 (Max Depth), LC 124 (Path Sum), LC 236 (LCA)",
  },
  {
    number: "12",
    name: "Backtracking & Pruning",
    categories: ["dp-graph"],
    invariant:
      "State-space search with constraint pruning; essential for passing Samsung 3-hr SW competency filter exams.",
    exemplar: "LC 79 (Word Search), LC 51 (N-Queens), LC 39 (Subsets)",
  },
  {
    number: "13",
    name: "2D Matrix / Grid Traversal",
    categories: ["dp-graph"],
    invariant:
      "Treat 2D coordinates (r, c) as implicit graph nodes with 4-directional boundary checks and in-place visited bitmasks.",
    exemplar: "LC 200 (Islands), LC 695 (Max Area), LC 417 (Pacific Atlantic)",
  },
  {
    number: "14",
    name: "Topological Sort (DAG)",
    categories: ["dp-graph", "concurrency"],
    invariant:
      "Kahn’s In-Degree algorithm to resolve build orders, dependency graphs, and detect deadlocks in Directed Acyclic Graphs.",
    exemplar: "LC 207 (Course Schedule), LC 210, LC 269 (Alien Dict)",
  },
  {
    number: "15",
    name: "Union-Find (DSU)",
    categories: ["dp-graph", "concurrency"],
    invariant:
      "Near O(1) amortized disjoint set connectivity using Path Compression and Union by Rank; detects cycles in undirected graphs.",
    exemplar: "LC 684 (Redundant Conn), LC 128 (Consecutive Seq), LC 261",
  },
  {
    number: "16",
    name: "Dynamic Programming (1D, 2D)",
    categories: ["dp-graph"],
    invariant:
      "Deconstruct problems into optimal substructures with overlapping subproblems, caching states to solve in polynomial time.",
    exemplar: "LC 300 (LIS), LC 1143 (LCS), LC 322 (Coin Change), LC 416",
  },
];

type FilterType = "all" | "core" | "concurrency" | "dp-graph";

export function DsaPatterns() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const filteredPatterns =
    activeFilter === "all"
      ? patternsData
      : patternsData.filter((p) => p.categories.includes(activeFilter));

  const activePattern = filteredPatterns[activeIndex] || filteredPatterns[0];

  const filterButtons: { label: string; value: FilterType; count: number }[] = [
    { label: "All Patterns", value: "all", count: 16 },
    { label: "Core High-Frequency", value: "core", count: 8 },
    { label: "Concurrency & Systems", value: "concurrency", count: 6 },
    { label: "Graphs & DP", value: "dp-graph", count: 7 },
  ];

  // Reset index when filter changes
  const handleFilterChange = (filter: FilterType) => {
    setActiveFilter(filter);
    setActiveIndex(0);
  };

  // Auto-advance pattern every 7 seconds
  useEffect(() => {
    if (!isAutoPlaying || isHovered) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % filteredPatterns.length);
    }, 7000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoPlaying, isHovered, filteredPatterns.length]);

  const goToPattern = (idx: number) => {
    setDirection(idx > activeIndex ? 1 : -1);
    setActiveIndex(idx);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : filteredPatterns.length - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % filteredPatterns.length);
  };

  return (
    <section id="dsa" className="scroll-mt-20 py-16 sm:py-20 lg:py-24 relative border-t border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6 pb-6 border-b border-[rgba(24,25,31,0.08)] dark:border-white/[0.08]">
          <div>
            <div className="text-xs font-mono font-semibold tracking-wider text-[#163e91] dark:text-blue-400 uppercase flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-[#163e91] dark:text-blue-400" />
              <span>03 / Algorithmic Rigor</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#18191f] dark:text-[#f1f5f9] tracking-tight mt-1">
              Data Structures &amp; Patterns
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#5e606a] dark:text-slate-400 max-w-2xl font-sans">
              Interactive animated showcase of 16 algorithmic invariant patterns mastered across 125+ problems. Not syntax grinding, but invariants that power production systems.
            </p>
          </div>

          <Link
            href="/notes"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-semibold text-[#18191f] dark:text-slate-200 bg-[#eeeae0] hover:bg-[#e4decb] dark:bg-[#151d30] dark:hover:bg-[#1c263e] border border-[rgba(24,25,31,0.12)] dark:border-white/[0.08] hover:border-blue-500/40 transition-all self-start md:self-auto group shadow-sm"
          >
            <span>View All 16 DSA Notes</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#163e91] dark:text-blue-400 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Master Showcase Box */}
        <div
          className="rounded-2xl bg-[#fbf9f4] dark:bg-[#151d30] border border-[rgba(24,25,31,0.12)] dark:border-white/[0.08] p-5 sm:p-7 shadow-xs dark:shadow-xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Top Radar Stats & Profile Links Pills */}
          <div className="flex flex-wrap items-center gap-2 pb-6 border-b border-[rgba(24,25,31,0.08)] dark:border-white/[0.08]">
            <div className="px-3 py-1 rounded-md text-xs font-mono bg-[#eeeae0] dark:bg-[#111726] border border-[rgba(24,25,31,0.08)] dark:border-white/[0.06] text-[#5e606a] dark:text-slate-300">
              Total Solved:{" "}
              <strong className="text-[#163e91] dark:text-blue-400 font-bold">125+ Problems</strong>
            </div>

            <div className="px-3 py-1 rounded-md text-xs font-mono bg-[#eeeae0] dark:bg-[#111726] border border-[rgba(24,25,31,0.08)] dark:border-white/[0.06] text-[#5e606a] dark:text-slate-300">
              GeeksforGeeks:{" "}
              <strong className="text-[#163e91] dark:text-blue-400 font-bold">75 (220 Score)</strong>
            </div>

            <div className="px-3 py-1 rounded-md text-xs font-mono bg-[#eeeae0] dark:bg-[#111726] border border-[rgba(24,25,31,0.08)] dark:border-white/[0.06] text-[#5e606a] dark:text-slate-300">
              LeetCode:{" "}
              <strong className="text-[#163e91] dark:text-blue-400 font-bold">50+ Solved</strong>
            </div>

            <a
              href="https://leetcode.com/u/saimonemon46/"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1 rounded-md text-xs font-mono font-medium text-[#163e91] dark:text-blue-400 bg-white dark:bg-[#111726] hover:bg-blue-50/50 dark:hover:bg-blue-900/20 border border-[#163e91]/60 dark:border-blue-400/60 transition-all flex items-center gap-1.5 shadow-2xs"
            >
              <span>LeetCode Profile</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <a
              href="https://www.geeksforgeeks.org/profile/saimon46?tab=activity"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1 rounded-md text-xs font-mono font-medium text-[#0b7a55] dark:text-emerald-400 bg-white dark:bg-[#111726] hover:bg-emerald-50/50 dark:hover:bg-emerald-900/20 border border-[#0b7a55]/60 dark:border-emerald-400/60 transition-all flex items-center gap-1.5 shadow-2xs"
            >
              <span>GFG Profile</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <a
              href="https://github.com/saimonemon46/LeetCode-Practice"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1 rounded-md text-xs font-mono font-medium text-[#b45309] dark:text-amber-400 bg-white dark:bg-[#111726] hover:bg-amber-50/50 dark:hover:bg-amber-900/20 border border-[#b45309]/60 dark:border-amber-400/60 transition-all flex items-center gap-1.5 shadow-2xs"
            >
              <span>Code Repo</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Filter Tabs (Category Switcher) */}
          <div className="pt-5 pb-5 flex flex-wrap items-center gap-2">
            {filterButtons.map((btn) => {
              const isActive = activeFilter === btn.value;
              return (
                <button
                  key={btn.value}
                  type="button"
                  onClick={() => handleFilterChange(btn.value)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#163e91] text-white dark:bg-blue-600 dark:text-white font-bold shadow-xs"
                      : "bg-[#eeeae0] dark:bg-[#111726] text-[#5e606a] dark:text-slate-400 hover:text-[#18191f] dark:hover:text-slate-200 border border-[rgba(24,25,31,0.08)] dark:border-white/[0.06]"
                  }`}
                >
                  {btn.label} ({btn.count})
                </button>
              );
            })}
          </div>

          {/* Compact Pattern Selector Tabs Bar (like Featured Projects tabs) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-2 mb-6">
            {filteredPatterns.map((pattern, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={pattern.number}
                  type="button"
                  onClick={() => goToPattern(idx)}
                  className={`relative p-2.5 rounded-lg border text-left transition-all duration-200 flex flex-col justify-between cursor-pointer group ${
                    isActive
                      ? "bg-white dark:bg-[#111726] border-[#163e91] dark:border-blue-500 shadow-sm ring-1 ring-[#163e91]/20 dark:ring-blue-500/30"
                      : "bg-[#eeeae0]/50 hover:bg-[#eeeae0] dark:bg-[#111726]/40 dark:hover:bg-[#111726] border-[rgba(24,25,31,0.08)] dark:border-white/[0.06] hover:border-[rgba(24,25,31,0.2)] dark:hover:border-white/[0.14]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeDsaPatternIndicator"
                      className="absolute inset-0 rounded-lg bg-[#163e91]/[0.03] dark:bg-blue-500/[0.06] border-2 border-[#163e91] dark:border-blue-500 pointer-events-none"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span
                    className={`text-[10px] font-mono font-bold ${
                      isActive
                        ? "text-[#163e91] dark:text-blue-400"
                        : "text-[#5e606a] dark:text-slate-400"
                    }`}
                  >
                    P.{pattern.number}
                  </span>
                  <span className="text-xs font-semibold text-[#18191f] dark:text-slate-200 truncate mt-1">
                    {pattern.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Featured Active Pattern Card */}
          <div className="rounded-xl bg-white dark:bg-[#111726] border border-[rgba(24,25,31,0.1)] dark:border-white/[0.08] p-6 sm:p-8 shadow-xs relative overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activePattern.number}
                custom={direction}
                initial={{ opacity: 0, x: direction * 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 20 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col lg:flex-row lg:items-center justify-between gap-8"
              >
                {/* Left Side: Invariant & Details */}
                <div className="lg:max-w-2xl">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-mono font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20 uppercase">
                      PATTERN {activePattern.number} / 16
                    </span>
                    <span className="text-xs font-mono text-[#5e606a] dark:text-slate-400">
                      Algorithmic Invariant
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#18191f] dark:text-[#f1f5f9] tracking-tight">
                    {activePattern.name}
                  </h3>

                  {/* Core Invariant Quote */}
                  <div className="mt-4 p-4 rounded-xl bg-[#fbf9f4] dark:bg-[#151d30] border-l-4 border-[#163e91] dark:border-blue-500 border-y border-r border-[rgba(24,25,31,0.08)] dark:border-white/[0.06]">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#163e91] dark:text-blue-400 font-semibold mb-1">
                      Invariant Definition
                    </div>
                    <p className="text-sm sm:text-base text-[#18191f] dark:text-slate-200 font-sans leading-relaxed">
                      &ldquo;{activePattern.invariant}&rdquo;
                    </p>
                  </div>

                  {/* Exemplar Problems Pill */}
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-[#5e606a] dark:text-slate-400 font-semibold">
                      Exemplar Problems:
                    </span>
                    <span className="px-3 py-1 rounded-md bg-[#eeeae0] dark:bg-[#151d30] text-xs font-mono font-semibold text-[#163e91] dark:text-blue-300 border border-[rgba(24,25,31,0.08)] dark:border-white/[0.06]">
                      {activePattern.exemplar}
                    </span>
                  </div>
                </div>

                {/* Right Side: Navigation & Actions */}
                <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-6 pt-6 lg:pt-0 border-t lg:border-t-0 lg:border-l border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] lg:pl-8">
                  <div className="space-y-2">
                    <div className="text-xs font-mono uppercase tracking-wider text-[#5e606a] dark:text-slate-400">
                      Deep Dive Notes
                    </div>
                    <Link
                      href="/notes"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-semibold text-white bg-[#163e91] hover:bg-[#122f6d] dark:bg-blue-600 dark:hover:bg-blue-500 transition-all shadow-md shadow-blue-600/20 group"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Read Full Notes →</span>
                    </Link>
                  </div>

                  {/* Navigation Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="w-9 h-9 rounded-lg bg-[#eeeae0] hover:bg-[#e4decb] dark:bg-[#151d30] dark:hover:bg-[#1c263e] border border-[rgba(24,25,31,0.1)] dark:border-white/[0.08] flex items-center justify-center text-[#18191f] dark:text-slate-200 transition-all cursor-pointer"
                      aria-label="Previous pattern"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="text-xs font-mono text-[#5e606a] dark:text-slate-400 px-2 font-semibold">
                      {activePattern.number} / {filteredPatterns.length}
                    </span>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="w-9 h-9 rounded-lg bg-[#eeeae0] hover:bg-[#e4decb] dark:bg-[#151d30] dark:hover:bg-[#1c263e] border border-[rgba(24,25,31,0.1)] dark:border-white/[0.08] flex items-center justify-center text-[#18191f] dark:text-slate-200 transition-all cursor-pointer"
                      aria-label="Next pattern"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                      className="w-9 h-9 rounded-lg bg-[#eeeae0] hover:bg-[#e4decb] dark:bg-[#151d30] dark:hover:bg-[#1c263e] border border-[rgba(24,25,31,0.1)] dark:border-white/[0.08] flex items-center justify-center text-[#5e606a] dark:text-slate-400 hover:text-[#18191f] dark:hover:text-slate-200 transition-all cursor-pointer ml-1"
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
