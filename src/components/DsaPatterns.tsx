"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2 } from "lucide-react";

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
    exemplar: "LC 11, LC 15 (3Sum), LC 42 (Rain Water)",
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

  const filteredPatterns =
    activeFilter === "all"
      ? patternsData
      : patternsData.filter((p) => p.categories.includes(activeFilter));

  const filterButtons: { label: string; value: FilterType; count: number }[] = [
    { label: "All Patterns", value: "all", count: 16 },
    { label: "Core High-Frequency", value: "core", count: 8 },
    { label: "Concurrency & Systems", value: "concurrency", count: 6 },
    { label: "Graphs & Dynamic Programming", value: "dp-graph", count: 7 },
  ];

  return (
    <section id="dsa" className="scroll-mt-20 py-20 lg:py-28 relative border-t border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-2xl mb-10"
        >
          <div className="text-xs font-mono font-semibold tracking-wider text-[#163e91] dark:text-blue-400 uppercase flex items-center gap-1.5">
            <Code2 className="w-3.5 h-3.5 text-[#163e91] dark:text-blue-400" />
            <span>03 / Algorithmic Rigor</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#18191f] dark:text-[#f1f5f9] tracking-tight mt-1">
            Data Structures &amp; Patterns
          </h2>
          <p className="mt-2 text-base text-[#5e606a] dark:text-slate-400 font-sans">
            Disciplined problem solving and deep pattern recognition. Not grinding random syntax, but mastering the algorithmic invariants that power efficient data structures.
          </p>
        </motion.div>

        {/* Master Radar Box Container (Matching reference design) */}
        <div className="rounded-2xl bg-white/70 dark:bg-[#111726]/80 border border-[rgba(24,25,31,0.12)] dark:border-white/[0.08] p-5 sm:p-7 shadow-xs dark:shadow-xl">
          {/* Top Radar Stats & Profile Links Pills */}
          <div className="flex flex-wrap items-center gap-2.5 pb-6 border-b border-[rgba(24,25,31,0.08)] dark:border-white/[0.08]">
            <div className="px-3.5 py-1.5 rounded-md text-xs font-mono bg-[#eeeae0] dark:bg-[#151d30] border border-[rgba(24,25,31,0.12)] dark:border-white/[0.08] text-[#5e606a] dark:text-slate-300">
              Total DSA Solved:{" "}
              <strong className="text-[#163e91] dark:text-blue-400 font-bold">125+ Problems</strong>
            </div>

            <div className="px-3.5 py-1.5 rounded-md text-xs font-mono bg-[#eeeae0] dark:bg-[#151d30] border border-[rgba(24,25,31,0.12)] dark:border-white/[0.08] text-[#5e606a] dark:text-slate-300">
              GeeksforGeeks:{" "}
              <strong className="text-[#163e91] dark:text-blue-400 font-bold">75 Solved (220 Score)</strong>
            </div>

            <div className="px-3.5 py-1.5 rounded-md text-xs font-mono bg-[#eeeae0] dark:bg-[#151d30] border border-[rgba(24,25,31,0.12)] dark:border-white/[0.08] text-[#5e606a] dark:text-slate-300">
              LeetCode:{" "}
              <strong className="text-[#163e91] dark:text-blue-400 font-bold">50+ Solved</strong>
            </div>

            <a
              href="https://leetcode.com/u/saimonemon46/"
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-1.5 rounded-md text-xs font-mono font-medium text-[#163e91] dark:text-blue-400 bg-white dark:bg-[#151d30] hover:bg-blue-50/50 dark:hover:bg-blue-900/20 border border-[#163e91] dark:border-blue-400/60 transition-all flex items-center gap-1.5 shadow-2xs"
            >
              <span>LeetCode Profile</span>
              <span className="font-bold">→</span>
            </a>

            <a
              href="https://www.geeksforgeeks.org/profile/saimon46?tab=activity"
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-1.5 rounded-md text-xs font-mono font-medium text-[#0b7a55] dark:text-emerald-400 bg-white dark:bg-[#151d30] hover:bg-emerald-50/50 dark:hover:bg-emerald-900/20 border border-[#0b7a55] dark:border-emerald-400/60 transition-all flex items-center gap-1.5 shadow-2xs"
            >
              <span>GeeksforGeeks Profile</span>
              <span className="font-bold">→</span>
            </a>

            <a
              href="https://github.com/saimonemon46/LeetCode-Practice"
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-1.5 rounded-md text-xs font-mono font-medium text-[#b45309] dark:text-amber-400 bg-white dark:bg-[#151d30] hover:bg-amber-50/50 dark:hover:bg-amber-900/20 border border-[#b45309] dark:border-amber-400/60 transition-all flex items-center gap-1.5 shadow-2xs"
            >
              <span>DSA Code Repo (GitHub)</span>
              <span className="font-bold">→</span>
            </a>
          </div>

          {/* Pattern Category Filter Buttons */}
          <div className="pt-6 pb-6 flex flex-wrap items-center gap-2">
            {filterButtons.map((btn) => {
              const isActive = activeFilter === btn.value;
              return (
                <button
                  key={btn.value}
                  type="button"
                  onClick={() => setActiveFilter(btn.value)}
                  className={`px-3.5 py-1.5 rounded-md text-xs font-mono transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#0c2461] dark:bg-blue-600 text-white font-bold shadow-sm ring-1 ring-blue-900/20 dark:ring-white/20"
                      : "bg-[#eeeae0] dark:bg-[#151d30] text-[#18191f] dark:text-slate-300 hover:text-[#0c2461] dark:hover:text-white border border-[rgba(24,25,31,0.14)] dark:border-white/[0.08] hover:border-[rgba(24,25,31,0.3)] dark:hover:border-white/[0.2]"
                  }`}
                >
                  {btn.label} ({btn.count})
                </button>
              );
            })}
          </div>

          {/* 3-Column Filterable Cards Grid (Full 16 Patterns) */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence>
              {filteredPatterns.map((pattern) => (
                <motion.div
                  layout
                  key={pattern.number}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  whileHover={{ y: -3 }}
                  className="rounded-xl bg-white dark:bg-[#151d30] border border-[rgba(24,25,31,0.12)] dark:border-white/[0.08] hover:border-[#163e91] dark:hover:border-blue-400 hover:shadow-md transition-all p-5 flex flex-col justify-between shadow-2xs group"
                >
                  <div>
                    {/* Pattern Badge */}
                    <div className="text-[11px] font-mono font-bold tracking-wider text-[#b45309] dark:text-amber-400 mb-1.5 uppercase">
                      PATTERN {pattern.number}
                    </div>

                    {/* Pattern Name */}
                    <h3 className="text-base sm:text-lg font-display font-bold text-[#18191f] dark:text-[#f1f5f9] group-hover:text-[#163e91] dark:group-hover:text-blue-400 transition-colors">
                      {pattern.name}
                    </h3>

                    {/* Invariant Description */}
                    <p className="mt-2 text-xs sm:text-sm text-[#5e606a] dark:text-slate-300 font-sans leading-relaxed">
                      {pattern.invariant}
                    </p>
                  </div>

                  {/* Exemplar Pill */}
                  <div className="mt-4 p-2.5 rounded-lg bg-[#eef2f6] dark:bg-[#0c1220] border border-slate-200/60 dark:border-white/[0.05] text-[11px] font-mono text-[#163e91] dark:text-blue-300 font-medium truncate">
                    {pattern.exemplar}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
