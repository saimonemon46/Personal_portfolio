"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  engineeringCapabilities,
  skillCategories,
} from "@/data/skills";
import {
  ShieldCheck,
  ArrowUpRight,
  Cpu,
  Layers,
  ChevronDown,
  ChevronUp,
  Server,
  Database,
  Brain,
  Layout,
} from "lucide-react";

export function SkillsGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [showFullInventory, setShowFullInventory] = useState(false);

  const categories = [
    "All",
    "Distributed & Backend",
    "Transactions & Storage",
    "Applied AI",
    "Web Applications",
  ];

  const filteredCapabilities =
    selectedCategory === "All"
      ? engineeringCapabilities
      : engineeringCapabilities.filter(
          (item) => item.category === selectedCategory
        );

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Server className="w-4 h-4 text-[#B66A3C] dark:text-[#E28754]" />;
      case 1:
        return <Database className="w-4 h-4 text-[#A58A62] dark:text-[#C9AE85]" />;
      case 2:
        return <Brain className="w-4 h-4 text-[#356D52] dark:text-[#52A374]" />;
      case 3:
        return <Layout className="w-4 h-4 text-[#B66A3C] dark:text-[#E28754]" />;
      default:
        return <Server className="w-4 h-4 text-[#B66A3C] dark:text-[#E28754]" />;
    }
  };

  return (
    <section
      id="skills"
      className="scroll-mt-20 py-20 lg:py-28 bg-transparent border-t border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] relative transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-[#B66A3C] dark:text-[#E28754] uppercase mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Technical Stack</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#29251F] dark:text-[#F5F1E8] tracking-tight">
              Tools I work with.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#777168] dark:text-[#A8A093] leading-relaxed">
              Technologies and systems engineering capabilities grounded in production delivery, open-source repositories, and verified benchmarks.
            </p>
          </motion.div>

          {/* Core Philosophy Badge (Tania-inspired authentic voice) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="self-start lg:self-end px-4 py-3 rounded-lg bg-[#EAE3D6] dark:bg-[#1E1B18] border border-[#DCD3C5] dark:border-white/[0.08] text-xs font-mono text-[#29251F] dark:text-[#F5F1E8] shadow-xs max-w-sm"
          >
            <div className="flex items-center gap-1.5 text-[#B66A3C] dark:text-[#E28754] font-semibold mb-1">
              <Cpu className="w-3.5 h-3.5" />
              <span>Engineering Standard</span>
            </div>
            <p className="text-[11px] text-[#777168] dark:text-[#A8A093] leading-normal font-sans">
              Technologies are implementation details—what matters is the engineering capability delivered and the proof verifying it works.
            </p>
          </motion.div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-6 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === cat
                  ? "bg-[#B66A3C] text-white dark:bg-[#B66A3C] font-semibold shadow-xs"
                  : "bg-[#FFFCF6] dark:bg-[#25211D] text-[#777168] dark:text-[#A8A093] hover:text-[#29251F] dark:hover:text-white border border-[#DCD3C5] dark:border-white/[0.08]"
              }`}
            >
              {cat}
              {cat === "All" && ` (${engineeringCapabilities.length})`}
            </button>
          ))}
        </div>

        {/* PRIMARY CAPABILITIES MATRIX */}
        <div className="rounded-xl bg-[#FFFCF6] dark:bg-[#25211D] border border-[#DCD3C5] dark:border-white/[0.08] shadow-sm overflow-hidden">
          {/* Desktop Table Header */}
          <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3.5 bg-[#EAE3D6] dark:bg-[#1E1B18] border-b border-[#DCD3C5] dark:border-white/[0.08] text-xs font-mono text-[#777168] dark:text-[#A8A093] font-semibold uppercase tracking-wider">
            <div className="col-span-5 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-[#B66A3C] dark:text-[#E28754]" />
              <span>Engineering Capability &amp; Guarantees</span>
            </div>
            <div className="col-span-4 flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-[#B66A3C] dark:text-[#E28754]" />
              <span>Technologies &amp; Tools</span>
            </div>
            <div className="col-span-3 flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#B66A3C] dark:text-[#E28754]" />
              <span>Evidence &amp; Proof</span>
            </div>
          </div>

          {/* Capability Rows */}
          <div className="divide-y divide-[#DCD3C5] dark:divide-white/[0.06]">
            {filteredCapabilities.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 p-5 sm:p-6 hover:bg-[#F5F1E8]/60 dark:hover:bg-[#1E1B18]/50 transition-colors items-center"
              >
                {/* Column 1: Capability & Guarantee (5 cols) */}
                <div className="md:col-span-5 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B66A3C] dark:bg-[#E28754] flex-shrink-0" />
                    <h3 className="text-sm sm:text-base font-display font-bold text-[#29251F] dark:text-[#F5F1E8] tracking-tight">
                      {item.capability}
                    </h3>
                  </div>
                  <p className="text-xs text-[#777168] dark:text-[#A8A093] font-sans leading-relaxed pl-3.5">
                    {item.summary}
                  </p>
                </div>

                {/* Column 2: Technologies (4 cols) */}
                <div className="md:col-span-4 flex flex-wrap gap-1.5 items-center">
                  <div className="text-[10px] font-mono text-[#777168] dark:text-[#A8A093] md:hidden w-full mb-0.5">
                    Technologies:
                  </div>
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-mono font-medium bg-[#EAE3D6] dark:bg-[#161412] text-[#29251F] dark:text-[#F5F1E8] border border-[#DCD3C5] dark:border-white/[0.08]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Column 3: Verifiable Evidence (3 cols) */}
                <div className="md:col-span-3 flex flex-col items-start md:items-start justify-center">
                  <div className="text-[10px] font-mono text-[#777168] dark:text-[#A8A093] md:hidden w-full mb-1">
                    Evidence:
                  </div>
                  <Link
                    href={item.evidence.href}
                    className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#B66A3C] dark:text-[#E28754] hover:text-[#96532B] dark:hover:text-[#F0A175] transition-colors group/link"
                  >
                    <span>{item.evidence.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </Link>
                  <span className="text-[10px] font-mono text-[#777168] dark:text-[#A8A093] mt-1 flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-emerald-600 dark:bg-emerald-400" />
                    {item.evidence.metric}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Secondary Technology Inventory Drawer (For recruiters looking for specific keyword lists) */}
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => setShowFullInventory(!showFullInventory)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-semibold text-[#777168] dark:text-[#A8A093] hover:text-[#29251F] dark:hover:text-white bg-[#FFFCF6] dark:bg-[#25211D] border border-[#DCD3C5] dark:border-white/[0.08] hover:border-[#B66A3C]/40 transition-all cursor-pointer shadow-2xs"
          >
            <span>{showFullInventory ? "Collapse Full Technology Inventory" : "View Full Categorized Technology Inventory (24 Tools)"}</span>
            {showFullInventory ? (
              <ChevronUp className="w-3.5 h-3.5 text-[#B66A3C] dark:text-[#E28754]" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5 text-[#B66A3C] dark:text-[#E28754]" />
            )}
          </button>
        </div>

        {/* Full Categorized Inventory Grid (Collapsible) */}
        <AnimatePresence>
          {showFullInventory && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden mt-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
                {skillCategories.map((category, catIdx) => (
                  <div
                    key={category.title}
                    className="rounded-xl bg-[#FFFCF6] dark:bg-[#25211D] border border-[#DCD3C5] dark:border-white/[0.08] p-5 flex flex-col justify-between shadow-2xs group"
                  >
                    <div>
                      {/* Category Header */}
                      <div className="flex items-center justify-between pb-3 border-b border-[#DCD3C5] dark:border-white/[0.08] mb-4">
                        <div className="flex items-center gap-2">
                          {getCategoryIcon(catIdx)}
                          <h4 className="text-sm font-display font-bold text-[#29251F] dark:text-[#F5F1E8]">
                            {category.title}
                          </h4>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#EAE3D6] dark:bg-[#1E1B18] text-[#777168] dark:text-[#A8A093] border border-[#DCD3C5] dark:border-white/[0.06]">
                          {category.badge}
                        </span>
                      </div>

                      <p className="text-xs text-[#777168] dark:text-[#A8A093] mb-4 font-sans leading-relaxed">
                        {category.description}
                      </p>

                      {/* Skills list */}
                      <div className="space-y-2">
                        {category.skills.map((skill) => (
                          <div
                            key={skill.name}
                            className="flex flex-col p-2 rounded bg-[#EAE3D6]/60 dark:bg-[#1E1B18]/70 border border-[#DCD3C5]/60 dark:border-white/[0.04]"
                          >
                            <div className="flex items-center justify-between">
                              <span
                                className={`text-xs font-mono font-semibold ${
                                  skill.highlight
                                    ? "text-[#B66A3C] dark:text-[#E28754]"
                                    : "text-[#29251F] dark:text-[#F5F1E8]"
                                }`}
                              >
                                {skill.name}
                              </span>
                              {skill.highlight && (
                                <span className="w-1.5 h-1.5 rounded-full bg-[#B66A3C] dark:bg-[#E28754] animate-pulse" />
                              )}
                            </div>
                            <span className="text-[10px] text-[#777168] dark:text-[#A8A093] mt-0.5 leading-tight">
                              {skill.description}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
