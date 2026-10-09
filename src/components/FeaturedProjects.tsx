import Link from "next/link";
import { ArrowRight, Layers } from "lucide-react";
import { projects } from "@/data/projects";
import { AnimatedFeaturedShowcase } from "@/components/AnimatedFeaturedShowcase";

export function FeaturedProjects() {
  // 3 Featured Production Systems: MediSA, Distributed Media, and ZeroDrift LedgerCore
  const featuredSlugs = ["medisa", "distributed-media", "zerodrift"];
  const featuredSystems = featuredSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter(Boolean) as typeof projects;

  return (
    <section id="projects" className="scroll-mt-20 py-16 sm:py-20 lg:py-24 relative">
      <span id="work" className="scroll-mt-20 absolute top-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 pb-6 border-b border-[rgba(24,25,31,0.08)] dark:border-white/[0.08]">
          <div>
            <div className="text-xs font-mono font-semibold tracking-wider text-[#163e91] dark:text-blue-400 uppercase">
              Featured Flagship Architectures
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#18191f] dark:text-[#f1f5f9] tracking-tight mt-1">
              Architected for failure. Verified under load.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#5e606a] dark:text-slate-400 max-w-2xl font-sans">
              Interactive animated showcase of 3 production systems: clinical AI triage, asynchronous distributed media pipelines, and high-concurrency double-entry ledger engines.
            </p>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-semibold text-[#18191f] dark:text-slate-200 bg-[#eeeae0] hover:bg-[#e4decb] dark:bg-[#151d30] dark:hover:bg-[#1c263e] border border-[rgba(24,25,31,0.12)] dark:border-white/[0.08] hover:border-blue-500/40 transition-all self-start md:self-auto group shadow-sm"
          >
            <span>View All Projects (7 More in Directory)</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#163e91] dark:text-blue-400 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Animated 3-Project Showcase (Compact, animated, tabbed) */}
        <AnimatedFeaturedShowcase projects={featuredSystems} />

        {/* View All Section Banner */}
        <div className="mt-12 p-5 sm:p-7 rounded-2xl bg-[#fbf9f4] dark:bg-[#151d30] border border-[rgba(24,25,31,0.1)] dark:border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-sm">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#163e91] dark:text-blue-400 font-semibold mb-1">
              <Layers className="w-3.5 h-3.5" />
              <span>Rest of Systems in View All Section</span>
            </div>
            <h3 className="text-lg sm:text-xl font-display font-bold text-[#18191f] dark:text-[#f1f5f9]">
              Bare-Metal Jitsi SFU, SmartPark AI &amp; 5 Research Labs
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-[#5e606a] dark:text-slate-400 max-w-xl font-sans">
              Discover real-time WebRTC media clusters, autonomous multi-agent dispatch engines, financial multi-hop graph RAGs, and developer tooling in the complete directory.
            </p>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-semibold text-white bg-[#163e91] hover:bg-[#122f6d] dark:bg-blue-600 dark:hover:bg-blue-500 transition-all shadow-md shadow-blue-600/20 whitespace-nowrap self-start sm:self-auto group"
          >
            <span>View All 10 Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
