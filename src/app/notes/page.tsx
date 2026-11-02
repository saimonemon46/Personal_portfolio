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
    <div className="min-h-screen flex flex-col bg-[#F4F0E6] dark:bg-[#151916] text-[#20251F] dark:text-[#F1EDE3] transition-colors duration-200">
      <Navbar />

      <main className="flex-1 pt-28 sm:pt-36 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#626A60] dark:text-[#B2B7AB] hover:text-[#20251F] dark:hover:text-[#F1EDE3] transition-colors mb-8 group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>

          {/* Header */}
          <div className="border-b border-[#D9D2C3] dark:border-[#394139] pb-8 mb-12">
            <div className="text-xs font-mono font-semibold tracking-wider text-[#A4472D] dark:text-[#E3A56E] uppercase">
              Mental Models &amp; Foundations
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#20251F] dark:text-[#F1EDE3] tracking-tight mt-1">
              Engineering Notes &amp; DSA
            </h1>
            <p className="mt-2 text-base text-[#626A60] dark:text-[#B2B7AB] max-w-2xl font-sans">
              Algorithmic pattern invariants, production backend laws, and the discipline of compounding deep work.
            </p>
          </div>

          {/* Section 1: The 4 Laws of Production Backend Code */}
          <section id="invariants" className="scroll-mt-28 mb-20">
            <div className="mb-8">
              <div className="text-xs font-mono text-[#A4472D] dark:text-[#E3A56E] uppercase font-semibold">
                Section 01
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#20251F] dark:text-[#F1EDE3] mt-1">
                The Four Laws of Production Backend Code
              </h2>
              <p className="text-sm text-[#626A60] dark:text-[#B2B7AB] mt-1">
                Mental models distilled from debugging distributed systems, race conditions, and database deadlocks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {engineeringLaws.map((law) => (
                <article
                  key={law.number}
                  className="rounded-xl bg-[#FFFCF5] dark:bg-[#1F2520] border border-[#D9D2C3] dark:border-[#394139] p-6 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-[#A4472D]/10 text-[#A4472D] dark:bg-[#E3A56E]/15 dark:text-[#E3A56E] border border-[#A4472D]/20 dark:border-[#E3A56E]/30 font-bold">
                      {law.number}
                    </span>
                    <h3 className="text-lg font-display font-bold text-[#20251F] dark:text-[#F1EDE3] mt-3">
                      {law.title}
                    </h3>
                    <p className="text-xs font-mono text-[#626A60] dark:text-[#B2B7AB] mt-1">
                      {law.summary}
                    </p>
                    <p className="text-xs sm:text-sm text-[#626A60] dark:text-[#B2B7AB] leading-relaxed mt-4 font-sans">
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
                <div className="text-xs font-mono text-[#A4472D] dark:text-[#E3A56E] uppercase font-semibold">
                  Section 02
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#20251F] dark:text-[#F1EDE3] mt-1">
                  16 Algorithmic Pattern Invariants
                </h2>
                <p className="text-sm text-[#626A60] dark:text-[#B2B7AB] mt-1">
                  Mastered across 125+ problems (75 GFG · 50+ LeetCode) focusing on structural invariants over rote memorization.
                </p>
              </div>

              {/* Profiles links */}
              <div className="flex items-center gap-3 text-xs font-mono">
                <a
                  href="https://leetcode.com/u/saimonemon46/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-md bg-[#FFFCF5] dark:bg-[#1F2520] border border-[#8A5A17]/30 text-[#8A5A17] dark:text-[#E6BD76] hover:text-[#8A5A17]/80 dark:hover:text-[#F1EDE3] transition-colors flex items-center gap-1 shadow-sm"
                >
                  <span>LeetCode Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="https://www.geeksforgeeks.org/profile/saimon46?tab=activity"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-md bg-[#FFFCF5] dark:bg-[#1F2520] border border-[#28664F]/30 text-[#28664F] dark:text-[#8EC5A5] hover:text-[#28664F]/80 dark:hover:text-[#F1EDE3] transition-colors flex items-center gap-1 shadow-sm"
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
                  className={`px-3 py-1 rounded-md text-xs font-mono transition-colors cursor-pointer ${
                    patternFilter === f.val
                      ? "bg-[#A4472D] text-white dark:bg-[#E3A56E] dark:text-[#151916] font-semibold"
                      : "bg-[#FFFCF5] dark:bg-[#1F2520] text-[#626A60] dark:text-[#B2B7AB] hover:text-[#20251F] dark:hover:text-[#F1EDE3] border border-[#D9D2C3] dark:border-[#394139]"
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
                  className="p-5 rounded-xl bg-[#FFFCF5] dark:bg-[#1F2520] border border-[#D9D2C3] dark:border-[#394139] hover:border-[#A4472D]/40 dark:hover:border-[#E3A56E]/40 transition-all flex flex-col justify-between shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono text-[#A4472D] dark:text-[#E3A56E] font-bold">
                        Pattern {pat.number}
                      </span>
                      <span className="text-[10px] font-mono text-[#626A60] dark:text-[#B2B7AB] px-2 py-0.5 rounded bg-[#EEE9DE] dark:bg-[#252D27]">
                        {pat.complexity}
                      </span>
                    </div>

                    <h3 className="text-base font-display font-bold text-[#20251F] dark:text-[#F1EDE3]">
                      {pat.name}
                    </h3>

                    <p className="mt-2 text-xs text-[#626A60] dark:text-[#B2B7AB] leading-relaxed font-sans">
                      {pat.invariant}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#D9D2C3] dark:border-[#394139] text-[11px] font-mono text-[#626A60] dark:text-[#B2B7AB] truncate">
                    <span className="text-[#626A60] dark:text-[#B2B7AB]">Exemplars:</span> {pat.exemplars}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: The 9 PM – 12 AM Night Shift Ritual & Influential Books */}
          <section className="rounded-xl bg-[#FFFCF5] dark:bg-[#1F2520] border border-[#D9D2C3] dark:border-[#394139] p-6 sm:p-8 shadow-sm">
            <div className="text-xs font-mono text-[#A4472D] dark:text-[#E3A56E] uppercase font-semibold">
              Section 03
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#20251F] dark:text-[#F1EDE3] mt-1">
              {deepWorkRitual.title}
            </h2>
            <p className="text-sm text-[#626A60] dark:text-[#B2B7AB] mt-2 font-sans italic">
              &quot;{deepWorkRitual.quote}&quot;
            </p>

            <div className="mt-6 space-y-4">
              {deepWorkRitual.steps.map((s, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg bg-[#EEE9DE] dark:bg-[#252D27] border border-[#D9D2C3] dark:border-[#394139] flex flex-col sm:flex-row sm:items-baseline justify-between gap-2"
                >
                  <div>
                    <span className="text-xs font-mono font-bold text-[#A4472D] dark:text-[#E3A56E] mr-2">
                      {s.time}
                    </span>
                    <span className="text-sm font-semibold text-[#20251F] dark:text-[#F1EDE3]">
                      {s.focus}
                    </span>
                    <p className="text-xs text-[#626A60] dark:text-[#B2B7AB] mt-1 font-sans">
                      {s.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Books that shaped thinking */}
            <div className="mt-8 pt-6 border-t border-[#D9D2C3] dark:border-[#394139]">
              <h3 className="text-xs font-mono uppercase text-[#626A60] dark:text-[#B2B7AB] tracking-wider mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#28664F] dark:text-[#8EC5A5]" />
                <span>Foundational Literature</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {deepWorkRitual.books.map((b) => (
                  <div
                    key={b.title}
                    className="p-4 rounded-lg bg-[#EEE9DE] dark:bg-[#252D27] border border-[#D9D2C3] dark:border-[#394139]"
                  >
                    <div className="text-xs font-semibold text-[#20251F] dark:text-[#F1EDE3]">
                      &quot;{b.title}&quot;
                    </div>
                    <div className="text-[11px] font-mono text-[#626A60] dark:text-[#B2B7AB] mt-0.5">
                      by {b.author}
                    </div>
                    <p className="mt-2 text-[11px] text-[#626A60] dark:text-[#B2B7AB] leading-relaxed font-sans">
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
