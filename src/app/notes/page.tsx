"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { engineeringLaws, dsaPatterns, deepWorkRitual } from "@/data/notes";
import { ArrowLeft, BookOpen, ExternalLink } from "lucide-react";

export default function NotesPage() {
  const [patternFilter, setPatternFilter] = useState<string>("all");

  const filteredPatterns =
    patternFilter === "all"
      ? dsaPatterns
      : dsaPatterns.filter((p) => p.category === patternFilter);

  return (
    <div className="min-h-screen flex flex-col bg-[#f6f4ee] dark:bg-[#0b0f19] text-[#18191f] dark:text-[#f1f5f9] transition-colors duration-200">
      <Navbar />

      <main className="flex-1 pt-28 sm:pt-36 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#5e606a] dark:text-slate-400 hover:text-[#18191f] dark:hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>

          {/* Header */}
          <div className="border-b border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] pb-8 mb-12">
            <div className="text-xs font-mono font-semibold tracking-wider text-[#163e91] dark:text-blue-400 uppercase">
              Mental Models &amp; Foundations
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#18191f] dark:text-[#f1f5f9] tracking-tight mt-1">
              Engineering Notes &amp; DSA
            </h1>
            <p className="mt-2 text-base text-[#5e606a] dark:text-slate-400 max-w-2xl font-sans">
              Algorithmic pattern invariants, production backend laws, and the discipline of compounding deep work.
            </p>
          </div>

          {/* Section 1: The 4 Laws of Production Backend Code */}
          <section id="invariants" className="scroll-mt-28 mb-20">
            <div className="mb-8">
              <div className="text-xs font-mono text-[#163e91] dark:text-blue-400 uppercase font-semibold">
                Section 01
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#18191f] dark:text-[#f1f5f9] mt-1">
                The Four Laws of Production Backend Code
              </h2>
              <p className="text-sm text-[#5e606a] dark:text-slate-400 mt-1">
                Mental models distilled from debugging distributed systems, race conditions, and database deadlocks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {engineeringLaws.map((law) => (
                <article
                  key={law.number}
                  className="rounded-xl bg-[#fbf9f4] dark:bg-[#151d30] border border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] p-6 shadow-sm dark:shadow-xl flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-blue-500/10 text-[#163e91] dark:text-blue-400 border border-blue-500/20 font-bold">
                      {law.number}
                    </span>
                    <h3 className="text-lg font-display font-bold text-[#18191f] dark:text-[#f1f5f9] mt-3">
                      {law.title}
                    </h3>
                    <p className="text-xs font-mono text-[#5e606a] dark:text-slate-400 mt-1">
                      {law.summary}
                    </p>
                    <p className="text-xs sm:text-sm text-[#5e606a] dark:text-slate-300 leading-relaxed mt-4 font-sans">
                      {law.elaboration}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Section 2: Algorithmic Pattern Invariants */}
          <section id="algorithms" className="scroll-mt-28 mb-20">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <div className="text-xs font-mono text-[#163e91] dark:text-blue-400 uppercase font-semibold">
                  Section 02
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#18191f] dark:text-[#f1f5f9] mt-1">
                  16 Algorithmic Pattern Invariants
                </h2>
                <p className="text-sm text-[#5e606a] dark:text-slate-400 mt-1">
                  Mastered across 125+ problems (75 GFG · 50+ LeetCode) focusing on structural invariants over rote memorization.
                </p>
              </div>

              {/* Profiles links */}
              <div className="flex items-center gap-3 text-xs font-mono">
                <a
                  href="https://leetcode.com/u/saimonemon46/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-md bg-[#fbf9f4] dark:bg-[#151d30] border border-blue-500/30 text-[#163e91] dark:text-blue-400 hover:text-[#163e91]/80 dark:hover:text-white transition-colors flex items-center gap-1 shadow-sm"
                >
                  <span>LeetCode Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="https://www.geeksforgeeks.org/profile/saimon46?tab=activity"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-md bg-[#fbf9f4] dark:bg-[#151d30] border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-white transition-colors flex items-center gap-1 shadow-sm"
                >
                  <span>GFG Profile (220 Score)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Pattern category filters */}
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                { label: "All Patterns (16)", val: "all" },
                { label: "Core High-Frequency (6)", val: "core" },
                { label: "Concurrency & Systems (4)", val: "concurrency" },
                { label: "Graphs & DP (6)", val: "dp-graph" },
              ].map((f) => (
                <button
                  key={f.val}
                  type="button"
                  onClick={() => setPatternFilter(f.val)}
                  className={`px-3 py-1 rounded-md text-xs font-mono transition-colors ${
                    patternFilter === f.val
                      ? "bg-[#163e91] text-white font-semibold"
                      : "bg-[#fbf9f4] dark:bg-[#151d30] text-[#5e606a] dark:text-slate-400 hover:text-[#18191f] dark:hover:text-white border border-[rgba(24,25,31,0.08)] dark:border-white/[0.08]"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Pattern cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredPatterns.map((pat) => (
                <div
                  key={pat.number}
                  className="p-5 rounded-xl bg-[#fbf9f4] dark:bg-[#151d30] border border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] hover:border-[#163e91]/30 dark:hover:border-blue-500/30 transition-all flex flex-col justify-between shadow-sm dark:shadow-none"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono text-[#163e91] dark:text-blue-400 font-bold">
                        Pattern {pat.number}
                      </span>
                      <span className="text-[10px] font-mono text-[#5e606a] dark:text-slate-400 px-2 py-0.5 rounded bg-[#f0ece1] dark:bg-[#111726]">
                        {pat.complexity}
                      </span>
                    </div>

                    <h3 className="text-base font-display font-bold text-[#18191f] dark:text-[#f1f5f9]">
                      {pat.name}
                    </h3>

                    <p className="mt-2 text-xs text-[#5e606a] dark:text-slate-300 leading-relaxed font-sans">
                      {pat.invariant}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[rgba(24,25,31,0.08)] dark:border-white/[0.06] text-[11px] font-mono text-[#5e606a] dark:text-slate-400 truncate">
                    <span className="text-[#5e606a]">Exemplars:</span> {pat.exemplars}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: The 9 PM – 12 AM Night Shift Ritual & Influential Books */}
          <section className="rounded-xl bg-[#fbf9f4] dark:bg-[#151d30] border border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] p-6 sm:p-8 shadow-sm dark:shadow-xl">
            <div className="text-xs font-mono text-[#163e91] dark:text-blue-400 uppercase font-semibold">
              Section 03
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#18191f] dark:text-[#f1f5f9] mt-1">
              {deepWorkRitual.title}
            </h2>
            <p className="text-sm text-[#5e606a] dark:text-slate-300 mt-2 font-sans italic">
              &quot;{deepWorkRitual.quote}&quot;
            </p>

            <div className="mt-6 space-y-4">
              {deepWorkRitual.steps.map((s, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg bg-[#f0ece1] dark:bg-[#070A0F] border border-[rgba(24,25,31,0.08)] dark:border-white/[0.05] flex flex-col sm:flex-row sm:items-baseline justify-between gap-2"
                >
                  <div>
                    <span className="text-xs font-mono font-bold text-[#163e91] dark:text-blue-400 mr-2">
                      {s.time}
                    </span>
                    <span className="text-sm font-semibold text-[#18191f] dark:text-slate-200">
                      {s.focus}
                    </span>
                    <p className="text-xs text-[#5e606a] dark:text-slate-400 mt-1 font-sans">
                      {s.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Books that shaped thinking */}
            <div className="mt-8 pt-6 border-t border-[rgba(24,25,31,0.08)] dark:border-white/[0.08]">
              <h3 className="text-xs font-mono uppercase text-[#5e606a] dark:text-slate-400 tracking-wider mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                <span>Foundational Literature</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {deepWorkRitual.books.map((b) => (
                  <div
                    key={b.title}
                    className="p-4 rounded-lg bg-[#f0ece1] dark:bg-[#070A0F] border border-[rgba(24,25,31,0.08)] dark:border-white/[0.05]"
                  >
                    <div className="text-xs font-semibold text-[#18191f] dark:text-[#f1f5f9]">
                      &quot;{b.title}&quot;
                    </div>
                    <div className="text-[11px] font-mono text-[#5e606a] dark:text-slate-400 mt-0.5">
                      by {b.author}
                    </div>
                    <p className="mt-2 text-[11px] text-[#5e606a] dark:text-slate-300/80 leading-relaxed font-sans">
                      {b.lesson}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
