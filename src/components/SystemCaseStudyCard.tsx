"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";
import { LightboxModal } from "@/components/LightboxModal";
import { ExternalLink, ZoomIn, ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";

interface SystemCaseStudyCardProps {
  project: Project;
  index: number;
}

export function SystemCaseStudyCard({ project, index }: SystemCaseStudyCardProps) {
  const [activeThumbIdx, setActiveThumbIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const formattedIndex = String(index + 1).padStart(2, "0");
  const currentScreenshot =
    project.screenshots.length > 0
      ? project.screenshots[activeThumbIdx] || project.screenshots[0]
      : null;

  return (
    <article
      id={`system-${project.slug}`}
      className="rounded-2xl bg-[#fbf9f4] dark:bg-[#151d30] border border-[rgba(24,25,31,0.12)] dark:border-white/[0.08] p-6 sm:p-8 lg:p-10 shadow-sm dark:shadow-2xl transition-all duration-300 hover:border-blue-600/40 dark:hover:border-blue-500/30"
    >
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] mb-6">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="font-mono text-sm font-bold px-2.5 py-1 rounded-md bg-[#163e91]/10 dark:bg-blue-500/10 text-[#163e91] dark:text-blue-400 border border-[#163e91]/20 dark:border-blue-500/20">
            {formattedIndex}
          </span>
          {project.tierTag && (
            <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-[#163e91]/5 dark:bg-white/[0.05] text-[#163e91] dark:text-slate-300 border border-[rgba(24,25,31,0.08)] dark:border-white/[0.08]">
              {project.tierTag}
            </span>
          )}
        </div>

        {project.honorBadge && (
          <span className="font-mono text-xs text-[#c46200] dark:text-amber-400 font-medium">
            {project.honorBadge}
          </span>
        )}
      </div>

      {/* Title & Tagline */}
      <div className="mb-6">
        <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#18191f] dark:text-[#f1f5f9] tracking-tight">
          {project.title}
        </h3>
        <p className="mt-2 text-sm sm:text-base font-mono text-[#5e606a] dark:text-slate-400 leading-relaxed">
          {project.tagline}
        </p>
      </div>

      {/* Layout Grid: Left Info / Case Study Breakdown & Right Gallery / Topology */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Problem, Case Study Breakdown Rows, Stack, Links */}
        <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-6">
          <p className="text-sm sm:text-base text-[#18191f]/90 dark:text-slate-300 leading-relaxed font-sans">
            {project.problem}
          </p>

          {/* Structured Case Study Breakdown Matrix */}
          {project.caseStudyBreakdown && project.caseStudyBreakdown.length > 0 && (
            <div className="rounded-xl bg-[#f0ece1]/70 dark:bg-[#111726]/80 border border-[rgba(24,25,31,0.08)] dark:border-white/[0.06] divide-y divide-[rgba(24,25,31,0.08)] dark:divide-white/[0.06] overflow-hidden">
              {project.caseStudyBreakdown.map((row, idx) => (
                <div
                  key={idx}
                  className="p-3.5 sm:p-4 grid grid-cols-1 sm:grid-cols-12 gap-1.5 sm:gap-4 items-baseline"
                >
                  <span className="sm:col-span-4 font-mono text-xs font-bold uppercase tracking-wider text-[#163e91] dark:text-blue-400">
                    {row.label}
                  </span>
                  <span className="sm:col-span-8 text-xs sm:text-sm text-[#5e606a] dark:text-slate-300 leading-relaxed">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Technology Stack Badges */}
          <div className="pt-2">
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#8b8d97] dark:text-slate-500 mb-2">
              System Architecture &amp; Stack
            </div>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded text-xs font-mono bg-[#eeeae0] dark:bg-[#1c263e] text-[#18191f] dark:text-slate-200 border border-[rgba(24,25,31,0.08)] dark:border-white/[0.08]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions & Links */}
          <div className="pt-4 flex flex-wrap items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-semibold text-[#18191f] dark:text-white bg-[#eeeae0] hover:bg-[#e4decb] dark:bg-[#1c263e] dark:hover:bg-[#253352] border border-[rgba(24,25,31,0.12)] dark:border-white/[0.12] transition-colors shadow-sm"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub Repository &rarr;</span>
              </a>
            )}

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-sm"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Production &rarr;</span>
              </a>
            )}

            {project.videoUrl && (
              <a
                href={project.videoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-semibold text-[#c46200] dark:text-amber-400 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Video Demonstration &rarr;</span>
              </a>
            )}

            {project.docUrl && (
              <a
                href={project.docUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-semibold text-[#0b7a55] dark:text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Verification Certificate &rarr;</span>
              </a>
            )}

            <Link
              href={`/work/${project.slug}`}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono font-semibold text-[#163e91] dark:text-blue-400 hover:underline ml-auto"
            >
              <span>Deep-Dive Study</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Right Column: Screenshot Gallery or Interactive Topology Box */}
        <div className="lg:col-span-5">
          {project.screenshots.length > 0 ? (
            <div className="rounded-xl bg-[#eeeae0]/80 dark:bg-[#111726] border border-[rgba(24,25,31,0.1)] dark:border-white/[0.08] p-4 shadow-md">
              {/* Gallery Header */}
              <div className="flex items-center justify-between pb-3 border-b border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] mb-3">
                <span className="text-xs font-mono font-semibold text-[#18191f] dark:text-slate-200 truncate">
                  {project.title.split(":")[0]} Live Preview
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 font-bold whitespace-nowrap">
                  {project.screenshots.length} VERIFIED SCREENS
                </span>
              </div>

              {/* Active Image Hero Stage */}
              {currentScreenshot && (
                <div
                  onClick={() => setLightboxOpen(true)}
                  className="group relative w-full aspect-[16/10] bg-[#14161f] dark:bg-[#07090f] rounded-lg overflow-hidden border border-[rgba(24,25,31,0.12)] dark:border-white/[0.08] cursor-pointer"
                  title="Click to view full resolution"
                >
                  <Image
                    src={currentScreenshot.url}
                    alt={currentScreenshot.title}
                    fill
                    className="object-contain object-top p-1 transition-transform duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 100vw, 480px"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="px-3 py-1.5 rounded-full bg-black/80 border border-white/20 text-[11px] font-mono text-white flex items-center gap-1.5 shadow-lg backdrop-blur-md">
                      <ZoomIn className="w-3.5 h-3.5 text-blue-400" />
                      <span>Click to expand</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Current Screenshot Caption */}
              {currentScreenshot && (
                <div className="mt-2 text-[11px] font-mono text-[#5e606a] dark:text-slate-400 flex items-center justify-between">
                  <span className="font-semibold text-[#163e91] dark:text-blue-300 truncate">
                    {currentScreenshot.title}
                  </span>
                  <span className="text-[10px] text-[#8b8d97] dark:text-slate-500">
                    {activeThumbIdx + 1} / {project.screenshots.length}
                  </span>
                </div>
              )}

              {/* Thumbnails Row */}
              {project.screenshots.length > 1 && (
                <div className="mt-3 pt-3 border-t border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] grid grid-cols-4 sm:grid-cols-7 gap-2">
                  {project.screenshots.map((s, thumbIdx) => (
                    <button
                      key={thumbIdx}
                      type="button"
                      onClick={() => setActiveThumbIdx(thumbIdx)}
                      className={`relative aspect-[16/10] rounded overflow-hidden border-2 transition-all ${
                        activeThumbIdx === thumbIdx
                          ? "border-blue-600 dark:border-blue-500 ring-2 ring-blue-500/20 scale-105"
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
                  ))}
                </div>
              )}

              {/* Lightbox Modal */}
              <LightboxModal
                screenshots={project.screenshots}
                initialIndex={activeThumbIdx}
                isOpen={lightboxOpen}
                onClose={() => setLightboxOpen(false)}
              />
            </div>
          ) : (
            /* Topology Box for Jitsi or architectural systems without screenshots */
            <div className="rounded-xl bg-[#eeeae0]/80 dark:bg-[#111726] border border-[rgba(24,25,31,0.1)] dark:border-white/[0.08] p-5 shadow-md">
              <div className="flex items-center justify-between pb-3 border-b border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] mb-4">
                <span className="text-xs font-mono font-semibold text-[#18191f] dark:text-slate-200">
                  jitsi_webrtc_topology.sys
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-500/20 font-bold">
                  BARE-METAL 10Gbps
                </span>
              </div>

              <div className="space-y-3 font-sans text-xs sm:text-sm">
                <div className="p-3 rounded-lg bg-[#fbf9f4] dark:bg-[#151d30] border-l-4 border-blue-600 dark:border-blue-500">
                  <strong className="block text-[#18191f] dark:text-slate-100 font-mono text-xs mb-0.5">
                    Presenter (1080p Screen):
                  </strong>
                  <span className="text-[#5e606a] dark:text-slate-400">
                    Ingested into Jitsi Videobridge via WebRTC (sub-50ms latency).
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-[#fbf9f4] dark:bg-[#151d30] border-l-4 border-emerald-600 dark:border-emerald-500">
                  <strong className="block text-[#18191f] dark:text-slate-100 font-mono text-xs mb-0.5">
                    500 Listen-Only Viewers:
                  </strong>
                  <span className="text-[#5e606a] dark:text-slate-400">
                    Low-CPU broadcast routing with muted upstream audio, consuming 1.3–2.0 Gbps aggregate bandwidth.
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-[#fbf9f4] dark:bg-[#151d30] border-l-4 border-amber-600 dark:border-amber-500">
                  <strong className="block text-[#18191f] dark:text-slate-100 font-mono text-xs mb-0.5">
                    Headless Jibri Recorder:
                  </strong>
                  <span className="text-[#5e606a] dark:text-slate-400">
                    Virtual studio camera locking onto 1080p slide stream, encoding directly to NVMe MP4 buffer.
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
