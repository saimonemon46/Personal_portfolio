"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { LightboxModal } from "@/components/LightboxModal";
import { ExternalLink, ArrowRight, ZoomIn } from "lucide-react";
import { GithubIcon } from "@/components/icons";

export function SystemsLab() {
  const [smartParkThumbIdx, setSmartParkThumbIdx] = useState(0);
  const [smartParkLightboxOpen, setSmartParkLightboxOpen] = useState(false);

  const smartPark = projects.find((p) => p.slug === "smartpark")!;
  const labProjects = projects.filter(
    (p) => ["frag", "unimind", "predictwise", "auto-docs", "langchat"].includes(p.slug)
  );

  const currentSmartParkScreen =
    smartPark.screenshots[smartParkThumbIdx] || smartPark.screenshots[0];

  return (
    <div className="mt-20 pt-16 border-t border-[rgba(24,25,31,0.12)] dark:border-white/[0.08]">
      {/* Lab Header */}
      <div className="mb-10">
        <div className="text-xs font-mono font-semibold tracking-wider text-[#163e91] dark:text-blue-400 uppercase">
          Systems Lab &amp; Specialized Engineering
        </div>
        <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#18191f] dark:text-[#f1f5f9] tracking-tight mt-1">
          Applied AI, Distributed Kernels &amp; Research Repositories
        </h3>
        <p className="mt-2 text-sm sm:text-base text-[#5e606a] dark:text-slate-400 max-w-3xl font-sans">
          Focused open-source implementations covering autonomous multi-agent dispatchers, Federated Learning, ML recommendation APIs, and agentic workflows.
        </p>
      </div>

      {/* Featured Lab Card: SmartPark AI */}
      <div className="rounded-2xl bg-[#fbf9f4] dark:bg-[#151d30] border border-[rgba(24,25,31,0.12)] dark:border-white/[0.08] p-6 sm:p-8 shadow-sm dark:shadow-xl mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                  Autonomous Multi-Agent AI
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  LIVE PRODUCTION
                </span>
              </div>

              <div className="flex items-center gap-3 text-xs font-mono">
                <a
                  href="https://live-parking-agent.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-emerald-700 dark:text-emerald-400 hover:underline flex items-center gap-1"
                >
                  <span>Live Vercel Demo</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <Link
                  href={`/work/${smartPark.slug}`}
                  className="text-[#163e91] dark:text-blue-400 hover:underline flex items-center gap-1"
                >
                  <span>Case Study</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
                <a
                  href="https://github.com/saimonemon46/Live_Parking_Agent"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#5e606a] dark:text-slate-400 hover:text-[#18191f] dark:hover:text-white flex items-center gap-1"
                >
                  <GithubIcon className="w-3 h-3" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            <h4 className="text-xl sm:text-2xl font-display font-bold text-[#18191f] dark:text-[#f1f5f9]">
              SmartPark AI: Autonomous Multi-Agent Dispatch
            </h4>

            <p className="text-sm text-[#5e606a] dark:text-slate-300 leading-relaxed font-sans">
              Multi-agent parking allocation system with occupancy forecasting (ML), automatic slot assignment, and real-time live map dashboard deployed publicly on Vercel. Independent agent failure domains ensure uninterrupted slot assignment even if notification or external integration workers degrade.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {smartPark.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded text-xs font-mono bg-[#eeeae0] dark:bg-[#1c263e] text-[#18191f] dark:text-slate-200 border border-[rgba(24,25,31,0.08)] dark:border-white/[0.08]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* SmartPark Live Screenshot Gallery */}
          <div className="lg:col-span-5">
            <div className="rounded-xl bg-[#eeeae0]/80 dark:bg-[#111726] border border-[rgba(24,25,31,0.1)] dark:border-white/[0.08] p-3.5 shadow-sm">
              <div className="flex items-center justify-between pb-2 border-b border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] mb-2.5">
                <span className="text-xs font-mono font-semibold text-[#18191f] dark:text-slate-200">
                  SmartPark AI Live Interface
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 font-bold">
                  4 LIVE SCREENS
                </span>
              </div>

              <div
                onClick={() => setSmartParkLightboxOpen(true)}
                className="group relative w-full aspect-[16/10] bg-[#14161f] dark:bg-[#07090f] rounded-lg overflow-hidden border border-[rgba(24,25,31,0.12)] dark:border-white/[0.08] cursor-pointer"
                title="Click to view full resolution"
              >
                <Image
                  src={currentSmartParkScreen.url}
                  alt={currentSmartParkScreen.title}
                  fill
                  className="object-contain object-top p-1 transition-transform duration-300 group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="px-3 py-1.5 rounded-full bg-black/80 border border-white/20 text-[11px] font-mono text-white flex items-center gap-1.5">
                    <ZoomIn className="w-3.5 h-3.5 text-blue-400" />
                    <span>Expand screenshot</span>
                  </div>
                </div>
              </div>

              {/* Thumbnails */}
              <div className="mt-2.5 pt-2 border-t border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] grid grid-cols-4 gap-1.5">
                {smartPark.screenshots.map((s, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSmartParkThumbIdx(idx)}
                    className={`relative aspect-[16/10] rounded overflow-hidden border-2 transition-all ${
                      smartParkThumbIdx === idx
                        ? "border-emerald-600 dark:border-emerald-500 ring-2 ring-emerald-500/20 scale-105"
                        : "border-transparent opacity-65 hover:opacity-100"
                    }`}
                    title={s.title}
                  >
                    <Image src={s.url} alt={s.title} fill className="object-cover" sizes="60px" />
                  </button>
                ))}
              </div>

              <LightboxModal
                screenshots={smartPark.screenshots}
                initialIndex={smartParkThumbIdx}
                isOpen={smartParkLightboxOpen}
                onClose={() => setSmartParkLightboxOpen(false)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Lab Repositories Grid (FRAG, UniMind, PredictWise, Auto-Docs, LangChat) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {labProjects.map((p) => (
          <article
            key={p.slug}
            className="rounded-xl bg-[#fbf9f4] dark:bg-[#151d30] border border-[rgba(24,25,31,0.1)] dark:border-white/[0.08] p-5 shadow-sm hover:border-[#163e91]/30 dark:hover:border-blue-500/30 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-[#163e91]/5 dark:bg-white/[0.05] text-[#163e91] dark:text-blue-400 border border-[rgba(24,25,31,0.08)] dark:border-white/[0.06]">
                  {p.tierTag || p.category}
                </span>

                {p.githubUrl && (
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-mono text-[#5e606a] dark:text-slate-400 hover:text-[#18191f] dark:hover:text-white flex items-center gap-1"
                  >
                    <span>GitHub</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                )}
              </div>

              <h4 className="text-base font-display font-bold text-[#18191f] dark:text-[#f1f5f9] mt-2">
                {p.title}
              </h4>

              <p className="mt-2 text-xs text-[#5e606a] dark:text-slate-300 leading-relaxed font-sans line-clamp-3">
                {p.description}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-[rgba(24,25,31,0.08)] dark:border-white/[0.06] flex flex-wrap gap-1.5">
              {p.stack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#eeeae0] dark:bg-[#1c263e] text-[#18191f] dark:text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
