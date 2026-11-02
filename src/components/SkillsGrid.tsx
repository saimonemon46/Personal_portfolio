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
        return <Server className="w-4 h-4 text-[#A4472D] dark:text-[#E3A56E]" />;
      case 1:
        return <Database className="w-4 h-4 text-[#8A5A17] dark:text-[#E6BD76]" />;
      case 2:
        return <Brain className="w-4 h-4 text-[#28664F] dark:text-[#8EC5A5]" />;
      case 3:
        return <Layout className="w-4 h-4 text-[#A4472D] dark:text-[#E3A56E]" />;
      default:
        return <Server className="w-4 h-4 text-[#A4472D] dark:text-[#E3A56E]" />;
    }
  };

  return (
    <section
      id="skills"
      className="scroll-mt-20 py-20 lg:py-28 bg-transparent border-t border-[#D9D2C3] dark:border-[#394139] relative transition-colors"
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
            <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-[#A4472D] dark:text-[#E3A56E] uppercase mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Technical Stack</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#20251F] dark:text-[#F1EDE3] tracking-tight">
              Tools I work with.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#626A60] dark:text-[#B2B7AB] leading-relaxed">
              Technologies and systems engineering capabilities grounded in production delivery, open-source repositories, and verified benchmarks.
            </p>
          </motion.div>

          {/* Core Philosophy Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="self-start lg:self-end px-4 py-3 rounded-lg bg-[#EEE9DE] dark:bg-[#252D27] border border-[#D9D2C3] dark:border-[#394139] text-xs font-mono text-[#20251F] dark:text-[#F1EDE3] shadow-xs max-w-sm"
          >
            <div className="flex items-center gap-1.5 text-[#A4472D] dark:text-[#E3A56E] font-semibold mb-1">
              <Cpu className="w-3.5 h-3.5" />
              <span>Engineering Standard</span>
            </div>
            <p className="text-[11px] text-[#626A60] dark:text-[#B2B7AB] leading-normal font-sans">
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
                  ? "bg-[#A4472D] text-white dark:bg-[#E3A56E] dark:text-[#151916] font-semibold shadow-xs"
                  : "bg-[#FFFCF5] dark:bg-[#1F2520] text-[#626A60] dark:text-[#B2B7AB] hover:text-[#20251F] dark:hover:text-[#F1EDE3] border border-[#D9D2C3] dark:border-[#394139]"
              }`}
            >
              {cat}
              {cat === "All" && ` (${engineeringCapabilities.length})`}
            </button>
          ))}
        </div>

        {/* PRIMARY CAPABILITIES MATRIX */}
        <div className="rounded-xl bg-[#FFFCF5] dark:bg-[#1F2520] border border-[#D9D2C3] dark:border-[#394139] shadow-sm overflow-hidden">
          {/* Desktop Table Header */}
          <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3.5 bg-[#EEE9DE] dark:bg-[#252D27] border-b border-[#D9D2C3] dark:border-[#394139] text-xs font-mono text-[#626A60] dark:text-[#B2B7AB] font-semibold uppercase tracking-wider">
            <div className="col-span-5 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-[#A4472D] dark:text-[#E3A56E]" />
              <span>Engineering Capability &amp; Guarantees</span>
            </div>
            <div className="col-span-4 flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-[#A4472D] dark:text-[#E3A56E]" />
              <span>Technologies &amp; Tools</span>
            </div>
            <div className="col-span-3 flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#A4472D] dark:text-[#E3A56E]" />
              <span>Evidence &amp; Proof</span>
            </div>
          </div>

          {/* Capability Rows */}
          <div className="divide-y divide-[#D9D2C3] dark:divide-[#394139]">
            {filteredCapabilities.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 p-5 sm:p-6 hover:bg-[#EEE9DE]/50 dark:hover:bg-[#252D27]/50 transition-colors items-center"
              >
                {/* Column 1: Capability & Guarantee (5 cols) */}
                <div className="md:col-span-5 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A4472D] dark:bg-[#E3A56E] flex-shrink-0" />
                    <h3 className="text-sm sm:text-base font-display font-bold text-[#20251F] dark:text-[#F1EDE3] tracking-tight">
                      {item.capability}
                    </h3>
                  </div>
                  <p className="text-xs text-[#626A60] dark:text-[#B2B7AB] font-sans leading-relaxed pl-3.5">
                    {item.summary}
                  </p>
                </div>

                {/* Column 2: Technologies (4 cols) */}
                <div className="md:col-span-4 flex flex-wrap gap-1.5 items-center">
                  <div className="text-[10px] font-mono text-[#626A60] dark:text-[#B2B7AB] md:hidden w-full mb-0.5">
                    Technologies:
                  </div>
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-mono font-medium bg-[#EEE9DE] dark:bg-[#151916] text-[#20251F] dark:text-[#F1EDE3] border border-[#D9D2C3] dark:border-[#394139]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Column 3: Verifiable Evidence (3 cols) */}
                <div className="md:col-span-3 flex flex-col items-start md:items-start justify-center">
                  <div className="text-[10px] font-mono text-[#626A60] dark:text-[#B2B7AB] md:hidden w-full mb-1">
                    Evidence:
                  </div>
                  <Link
                    href={item.evidence.href}
                    className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#A4472D] dark:text-[#E3A56E] hover:text-[#873A26] dark:hover:text-[#F0B981] transition-colors group/link"
                  >
                    <span>{item.evidence.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </Link>
                  <span className="text-[10px] font-mono text-[#626A60] dark:text-[#B2B7AB] mt-1 flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-[#28664F] dark:text-[#8EC5A5]" />
                    {item.evidence.metric}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Secondary Technology Inventory Drawer */}
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => setShowFullInventory(!showFullInventory)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-semibold text-[#626A60] dark:text-[#B2B7AB] hover:text-[#20251F] dark:hover:text-[#F1EDE3] bg-[#FFFCF5] dark:bg-[#1F2520] border border-[#D9D2C3] dark:border-[#394139] hover:border-[#A4472D]/40 transition-all cursor-pointer shadow-2xs"
          >
            <span>{showFullInventory ? "Collapse Full Technology Inventory" : "View Full Categorized Technology Inventory (24 Tools)"}</span>
            {showFullInventory ? (
              <ChevronUp className="w-3.5 h-3.5 text-[#A4472D] dark:text-[#E3A56E]" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5 text-[#A4472D] dark:text-[#E3A56E]" />
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
                    className="rounded-xl bg-[#FFFCF5] dark:bg-[#1F2520] border border-[#D9D2C3] dark:border-[#394139] p-5 flex flex-col justify-between shadow-2xs group"
                  >
                    <div>
                      {/* Category Header */}
                      <div className="flex items-center justify-between pb-3 border-b border-[#D9D2C3] dark:border-[#394139] mb-4">
                        <div className="flex items-center gap-2">
                          {getCategoryIcon(catIdx)}
                          <h4 className="text-sm font-display font-bold text-[#20251F] dark:text-[#F1EDE3]">
                            {category.title}
                          </h4>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#EEE9DE] dark:bg-[#252D27] text-[#626A60] dark:text-[#B2B7AB] border border-[#D9D2C3] dark:border-[#394139]">
                          {category.badge}
                        </span>
                      </div>

                      <p className="text-xs text-[#626A60] dark:text-[#B2B7AB] mb-4 font-sans leading-relaxed">
                        {category.description}
                      </p>

                      {/* Skills list */}
                      <div className="space-y-2">
                        {category.skills.map((skill) => (
                          <div
                            key={skill.name}
                            className="flex flex-col p-2 rounded bg-[#EEE9DE]/60 dark:bg-[#252D27]/70 border border-[#D9D2C3]/60 dark:border-[#394139]/60"
                          >
                            <div className="flex items-center justify-between">
                              <span
                                className={`text-xs font-mono font-semibold ${
                                  skill.highlight
                                    ? "text-[#A4472D] dark:text-[#E3A56E]"
                                    : "text-[#20251F] dark:text-[#F1EDE3]"
                                }`}
                              >
                                {skill.name}
                              </span>
                              {skill.highlight && (
                                <span className="w-1.5 h-1.5 rounded-full bg-[#A4472D] dark:bg-[#E3A56E] animate-pulse" />
                              )}
                            </div>
                            <span className="text-[10px] text-[#626A60] dark:text-[#B2B7AB] mt-0.5 leading-tight">
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
