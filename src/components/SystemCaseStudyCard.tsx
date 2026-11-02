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
      className="rounded-2xl bg-[#FFFCF5] dark:bg-[#1F2520] border border-[#D9D2C3] dark:border-[#394139] p-6 sm:p-8 lg:p-10 shadow-sm transition-all duration-300 hover:border-[#A4472D]/50 dark:hover:border-[#E3A56E]/50"
    >
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-[#D9D2C3] dark:border-[#394139] mb-6">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="font-mono text-sm font-bold px-2.5 py-1 rounded-md bg-[#A4472D]/10 text-[#A4472D] dark:bg-[#E3A56E]/15 dark:text-[#E3A56E] border border-[#A4472D]/20 dark:border-[#E3A56E]/30">
            {formattedIndex}
          </span>
          {project.tierTag && (
            <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-[#A4472D]/5 text-[#A4472D] dark:text-[#E3A56E] border border-[#D9D2C3] dark:border-[#394139]">
              {project.tierTag}
            </span>
          )}
        </div>

        {project.honorBadge && (
          <span className="font-mono text-xs text-[#8A5A17] dark:text-[#E6BD76] font-medium">
            {project.honorBadge}
          </span>
        )}
      </div>

      {/* Title & Tagline */}
      <div className="mb-6">
        <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#20251F] dark:text-[#F1EDE3] tracking-tight">
          {project.title}
        </h3>
        <p className="mt-2 text-sm sm:text-base font-mono text-[#626A60] dark:text-[#B2B7AB] leading-relaxed">
          {project.tagline}
        </p>
      </div>

      {/* Layout Grid: Left Info / Case Study Breakdown & Right Gallery / Topology */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Problem, Case Study Breakdown Rows, Stack, Links */}
        <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-6">
          <p className="text-sm sm:text-base text-[#20251F] dark:text-[#F1EDE3] leading-relaxed font-sans">
            {project.problem}
          </p>

          {/* Structured Case Study Breakdown Matrix */}
          {project.caseStudyBreakdown && project.caseStudyBreakdown.length > 0 && (
            <div className="rounded-xl bg-[#EEE9DE]/80 dark:bg-[#151916] border border-[#D9D2C3] dark:border-[#394139] divide-y divide-[#D9D2C3] dark:divide-[#394139] overflow-hidden">
              {project.caseStudyBreakdown.map((row, idx) => (
                <div
                  key={idx}
                  className="p-3.5 sm:p-4 grid grid-cols-1 sm:grid-cols-12 gap-1.5 sm:gap-4 items-baseline"
                >
                  <span className="sm:col-span-4 font-mono text-xs font-bold uppercase tracking-wider text-[#A4472D] dark:text-[#E3A56E]">
                    {row.label}
                  </span>
                  <span className="sm:col-span-8 text-xs sm:text-sm text-[#626A60] dark:text-[#B2B7AB] leading-relaxed">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Technology Stack Badges */}
          <div className="pt-2">
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#626A60] dark:text-[#B2B7AB] mb-2">
              System Architecture &amp; Stack
            </div>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded text-xs font-mono bg-[#EEE9DE] dark:bg-[#252D27] text-[#20251F] dark:text-[#F1EDE3] border border-[#D9D2C3] dark:border-[#394139]"
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-semibold text-[#20251F] dark:text-[#F1EDE3] bg-[#EEE9DE] hover:bg-[#E3DDCF] dark:bg-[#252D27] dark:hover:bg-[#1F2520] border border-[#D9D2C3] dark:border-[#394139] transition-colors shadow-sm"
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-semibold text-white bg-[#28664F] hover:bg-[#1e4e3c] transition-colors shadow-sm"
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-semibold text-[#8A5A17] dark:text-[#E6BD76] bg-[#8A5A17]/10 hover:bg-[#8A5A17]/20 border border-[#8A5A17]/30 transition-colors"
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-semibold text-[#28664F] dark:text-[#8EC5A5] bg-[#28664F]/10 hover:bg-[#28664F]/20 border border-[#28664F]/30 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Verification Certificate &rarr;</span>
              </a>
            )}

            <Link
              href={`/work/${project.slug}`}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono font-semibold text-[#A4472D] dark:text-[#E3A56E] hover:underline ml-auto"
            >
              <span>Deep-Dive Study</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Right Column: Screenshot Gallery or Interactive Topology Box */}
        <div className="lg:col-span-5">
          {project.screenshots.length > 0 ? (
            <div className="rounded-xl bg-[#EEE9DE]/80 dark:bg-[#151916] border border-[#D9D2C3] dark:border-[#394139] p-4 shadow-md">
              {/* Gallery Header */}
              <div className="flex items-center justify-between pb-3 border-b border-[#D9D2C3] dark:border-[#394139] mb-3">
                <span className="text-xs font-mono font-semibold text-[#20251F] dark:text-[#F1EDE3] truncate">
                  {project.title.split(":")[0]} Live Preview
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#28664F]/10 text-[#28664F] dark:text-[#8EC5A5] border border-[#28664F]/20 font-bold whitespace-nowrap">
                  {project.screenshots.length} VERIFIED SCREENS
                </span>
              </div>

              {/* Active Image Hero Stage */}
              {currentScreenshot && (
                <div
                  onClick={() => setLightboxOpen(true)}
                  className="group relative w-full aspect-[16/10] bg-[#151916] rounded-lg overflow-hidden border border-[#D9D2C3] dark:border-[#394139] cursor-pointer"
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
                      <ZoomIn className="w-3.5 h-3.5 text-[#E3A56E]" />
                      <span>Click to expand</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Current Screenshot Caption */}
              {currentScreenshot && (
                <div className="mt-2 text-[11px] font-mono text-[#626A60] dark:text-[#B2B7AB] flex items-center justify-between">
                  <span className="font-semibold text-[#A4472D] dark:text-[#E3A56E] truncate">
                    {currentScreenshot.title}
                  </span>
                  <span className="text-[10px] text-[#626A60] dark:text-[#B2B7AB]">
                    {activeThumbIdx + 1} / {project.screenshots.length}
                  </span>
                </div>
              )}

              {/* Thumbnails Row */}
              {project.screenshots.length > 1 && (
                <div className="mt-3 pt-3 border-t border-[#D9D2C3] dark:border-[#394139] grid grid-cols-4 sm:grid-cols-7 gap-2">
                  {project.screenshots.map((s, thumbIdx) => (
                    <button
                      key={thumbIdx}
                      type="button"
                      onClick={() => setActiveThumbIdx(thumbIdx)}
                      className={`relative aspect-[16/10] rounded overflow-hidden border-2 transition-all cursor-pointer ${
                        activeThumbIdx === thumbIdx
                          ? "border-[#A4472D] dark:border-[#E3A56E] ring-2 ring-[#A4472D]/20 dark:ring-[#E3A56E]/20 scale-105"
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
            <div className="rounded-xl bg-[#EEE9DE]/80 dark:bg-[#151916] border border-[#D9D2C3] dark:border-[#394139] p-5 shadow-md">
              <div className="flex items-center justify-between pb-3 border-b border-[#D9D2C3] dark:border-[#394139] mb-4">
                <span className="text-xs font-mono font-semibold text-[#20251F] dark:text-[#F1EDE3]">
                  jitsi_webrtc_topology.sys
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#A4472D]/10 text-[#A4472D] dark:text-[#E3A56E] border border-[#A4472D]/20 font-bold">
                  BARE-METAL 10Gbps
                </span>
              </div>

              <div className="space-y-3 font-sans text-xs sm:text-sm">
                <div className="p-3 rounded-lg bg-[#FFFCF5] dark:bg-[#1F2520] border-l-4 border-[#A4472D] dark:border-[#E3A56E]">
                  <strong className="block text-[#20251F] dark:text-[#F1EDE3] font-mono text-xs mb-0.5">
                    Presenter (1080p Screen):
                  </strong>
                  <span className="text-[#626A60] dark:text-[#B2B7AB]">
                    Ingested into Jitsi Videobridge via WebRTC (sub-50ms latency).
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-[#FFFCF5] dark:bg-[#1F2520] border-l-4 border-[#28664F] dark:border-[#8EC5A5]">
                  <strong className="block text-[#20251F] dark:text-[#F1EDE3] font-mono text-xs mb-0.5">
                    500 Listen-Only Viewers:
                  </strong>
                  <span className="text-[#626A60] dark:text-[#B2B7AB]">
                    Low-CPU broadcast routing with muted upstream audio, consuming 1.3–2.0 Gbps aggregate bandwidth.
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-[#FFFCF5] dark:bg-[#1F2520] border-l-4 border-[#8A5A17] dark:border-[#E6BD76]">
                  <strong className="block text-[#20251F] dark:text-[#F1EDE3] font-mono text-xs mb-0.5">
                    Headless Jibri Recorder:
                  </strong>
                  <span className="text-[#626A60] dark:text-[#B2B7AB]">
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
