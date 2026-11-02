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
    <div className="mt-20 pt-16 border-t border-[#D9D2C3] dark:border-[#394139]">
      {/* Lab Header */}
      <div className="mb-10">
        <div className="text-xs font-mono font-semibold tracking-wider text-[#A4472D] dark:text-[#E3A56E] uppercase">
          Systems Lab &amp; Specialized Engineering
        </div>
        <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#20251F] dark:text-[#F1EDE3] tracking-tight mt-1">
          Applied AI, Distributed Kernels &amp; Research Repositories
        </h3>
        <p className="mt-2 text-sm sm:text-base text-[#626A60] dark:text-[#B2B7AB] max-w-3xl font-sans">
          Focused open-source implementations covering autonomous multi-agent dispatchers, Federated Learning, ML recommendation APIs, and agentic workflows.
        </p>
      </div>

      {/* Featured Lab Card: SmartPark AI */}
      <div className="rounded-2xl bg-[#FFFCF5] dark:bg-[#1F2520] border border-[#D9D2C3] dark:border-[#394139] p-6 sm:p-8 shadow-sm mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded text-xs font-mono font-semibold bg-[#28664F]/10 text-[#28664F] dark:text-[#8EC5A5] border border-[#28664F]/20">
                  Autonomous Multi-Agent AI
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#28664F]/10 text-[#28664F] dark:text-[#8EC5A5] border border-[#28664F]/20">
                  LIVE PRODUCTION
                </span>
              </div>

              <div className="flex items-center gap-3 text-xs font-mono">
                <a
                  href="https://live-parking-agent.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-[#28664F] dark:text-[#8EC5A5] hover:underline flex items-center gap-1"
                >
                  <span>Live Vercel Demo</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <Link
                  href={`/work/${smartPark.slug}`}
                  className="text-[#A4472D] dark:text-[#E3A56E] hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>Case Study</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
                <a
                  href="https://github.com/saimonemon46/Live_Parking_Agent"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#626A60] dark:text-[#B2B7AB] hover:text-[#20251F] dark:hover:text-[#F1EDE3] flex items-center gap-1"
                >
                  <GithubIcon className="w-3 h-3" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            <h4 className="text-xl sm:text-2xl font-display font-bold text-[#20251F] dark:text-[#F1EDE3]">
              SmartPark AI: Autonomous Multi-Agent Dispatch
            </h4>

            <p className="text-sm text-[#626A60] dark:text-[#B2B7AB] leading-relaxed font-sans">
              Multi-agent parking allocation system with occupancy forecasting (ML), automatic slot assignment, and real-time live map dashboard deployed publicly on Vercel. Independent agent failure domains ensure uninterrupted slot assignment even if notification or external integration workers degrade.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {smartPark.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded text-xs font-mono bg-[#EEE9DE] dark:bg-[#252D27] text-[#20251F] dark:text-[#F1EDE3] border border-[#D9D2C3] dark:border-[#394139]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* SmartPark Live Screenshot Gallery */}
          <div className="lg:col-span-5">
            <div className="rounded-xl bg-[#EEE9DE]/80 dark:bg-[#151916] border border-[#D9D2C3] dark:border-[#394139] p-3.5 shadow-sm">
              <div className="flex items-center justify-between pb-2 border-b border-[#D9D2C3] dark:border-[#394139] mb-2.5">
                <span className="text-xs font-mono font-semibold text-[#20251F] dark:text-[#F1EDE3]">
                  SmartPark AI Live Interface
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#28664F]/10 text-[#28664F] dark:text-[#8EC5A5] border border-[#28664F]/20 font-bold">
                  4 LIVE SCREENS
                </span>
              </div>

              <div
                onClick={() => setSmartParkLightboxOpen(true)}
                className="group relative w-full aspect-[16/10] bg-[#151916] rounded-lg overflow-hidden border border-[#D9D2C3] dark:border-[#394139] cursor-pointer"
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
                    <ZoomIn className="w-3.5 h-3.5 text-[#E3A56E]" />
                    <span>Expand screenshot</span>
                  </div>
                </div>
              </div>

              {/* Thumbnails */}
              <div className="mt-2.5 pt-2 border-t border-[#D9D2C3] dark:border-[#394139] grid grid-cols-4 gap-1.5">
                {smartPark.screenshots.map((s, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSmartParkThumbIdx(idx)}
                    className={`relative aspect-[16/10] rounded overflow-hidden border-2 transition-all cursor-pointer ${
                      smartParkThumbIdx === idx
                        ? "border-[#A4472D] dark:border-[#E3A56E] ring-2 ring-[#A4472D]/20 dark:ring-[#E3A56E]/20 scale-105"
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
            className="rounded-xl bg-[#FFFCF5] dark:bg-[#1F2520] border border-[#D9D2C3] dark:border-[#394139] p-5 shadow-sm hover:border-[#A4472D]/40 dark:hover:border-[#E3A56E]/40 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-[#A4472D]/5 text-[#A4472D] dark:text-[#E3A56E] border border-[#D9D2C3] dark:border-[#394139]">
                  {p.tierTag || p.category}
                </span>

                {p.githubUrl && (
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-mono text-[#626A60] dark:text-[#B2B7AB] hover:text-[#20251F] dark:hover:text-[#F1EDE3] flex items-center gap-1"
                  >
                    <span>GitHub</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                )}
              </div>

              <h4 className="text-base font-display font-bold text-[#20251F] dark:text-[#F1EDE3] mt-2">
                {p.title}
              </h4>

              <p className="mt-2 text-xs text-[#626A60] dark:text-[#B2B7AB] leading-relaxed font-sans line-clamp-3">
                {p.description}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-[#D9D2C3] dark:border-[#394139] flex flex-wrap gap-1.5">
              {p.stack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#EEE9DE] dark:bg-[#252D27] text-[#20251F] dark:text-[#F1EDE3] border border-[#D9D2C3] dark:border-[#394139]"
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
