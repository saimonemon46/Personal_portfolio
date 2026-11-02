"use client";

import { useState } from "react";
import Image from "next/image";
import { Project } from "@/data/projects";
import { LightboxModal } from "@/components/LightboxModal";
import { ZoomIn, Eye } from "lucide-react";

interface ProjectDeepDiveClientProps {
  project: Project;
}

export function ProjectDeepDiveClient({ project }: ProjectDeepDiveClientProps) {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (project.screenshots.length === 0) return null;

  const currentScreenshot = project.screenshots[selectedIdx] || project.screenshots[0];

  return (
    <div className="mt-12 rounded-xl bg-[#FFFCF5] dark:bg-[#1F2520] border border-[#D9D2C3] dark:border-[#394139] p-6 shadow-sm">
      <div className="flex items-center justify-between pb-4 border-b border-[#D9D2C3] dark:border-[#394139] mb-6">
        <div>
          <h2 className="text-lg font-display font-bold text-[#20251F] dark:text-[#F1EDE3] flex items-center gap-2">
            <Eye className="w-4 h-4 text-[#A4472D] dark:text-[#E3A56E]" />
            <span>Interactive Verification Gallery</span>
          </h2>
          <p className="text-xs text-[#626A60] dark:text-[#B2B7AB] mt-0.5">
            Verified production screens, consoles, and benchmark outputs.
          </p>
        </div>
        <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#A4472D]/10 text-[#A4472D] dark:bg-[#E3A56E]/15 dark:text-[#E3A56E] border border-[#A4472D]/20 dark:border-[#E3A56E]/30">
          {project.screenshots.length} Screens
        </span>
      </div>

      {/* Hero stage for active image */}
      <div
        onClick={() => setLightboxOpen(true)}
        className="group relative w-full aspect-[16/10] bg-[#151916] rounded-lg overflow-hidden border border-[#D9D2C3] dark:border-[#394139] cursor-pointer"
      >
        <Image
          src={currentScreenshot.url}
          alt={currentScreenshot.title}
          fill
          className="object-contain object-top p-2 transition-transform duration-300 group-hover:scale-[1.02]"
          sizes="(max-width: 1024px) 100vw, 896px"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="px-4 py-2 rounded-full bg-black/80 border border-white/20 text-xs font-mono text-white flex items-center gap-2 shadow-xl backdrop-blur-md">
            <ZoomIn className="w-4 h-4 text-[#E3A56E]" />
            <span>Click to expand full resolution</span>
          </div>
        </div>
      </div>

      {/* Caption for active screenshot */}
      <div className="mt-3 text-xs font-mono text-[#626A60] dark:text-[#B2B7AB] flex items-center justify-between">
        <span className="font-semibold text-[#A4472D] dark:text-[#E3A56E]">{currentScreenshot.title}</span>
        <span className="text-[#626A60] dark:text-[#B2B7AB]">{currentScreenshot.caption}</span>
      </div>

      {/* Thumbnails row */}
      {project.screenshots.length > 1 && (
        <div className="mt-4 pt-4 border-t border-[#D9D2C3] dark:border-[#394139] flex items-center gap-2.5 overflow-x-auto pb-2">
          {project.screenshots.map((s, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedIdx(idx)}
              className={`relative flex-shrink-0 w-24 h-16 rounded-md overflow-hidden border-2 transition-all cursor-pointer ${
                selectedIdx === idx
                  ? "border-[#A4472D] dark:border-[#E3A56E] ring-2 ring-[#A4472D]/20 dark:ring-[#E3A56E]/20 scale-105"
                  : "border-[#D9D2C3] dark:border-[#394139] opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                src={s.url}
                alt={s.title}
                fill
                className="object-cover"
                sizes="96px"
              />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      <LightboxModal
        screenshots={project.screenshots}
        initialIndex={selectedIdx}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  );
}
