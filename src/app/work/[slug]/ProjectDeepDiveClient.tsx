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
    <div className="mt-12 rounded-xl bg-white dark:bg-[#0D1117] border border-slate-200 dark:border-white/[0.08] p-6 shadow-xl">
      <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/[0.08] mb-6">
        <div>
          <h2 className="text-lg font-display font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Eye className="w-4 h-4 text-blue-500 dark:text-blue-400" />
            <span>Interactive Verification Gallery</span>
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Verified production screens, consoles, and benchmark outputs.
          </p>
        </div>
        <span className="text-xs font-mono px-2.5 py-1 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
          {project.screenshots.length} Screens
        </span>
      </div>

      {/* Hero stage for active image */}
      <div
        onClick={() => setLightboxOpen(true)}
        className="group relative w-full aspect-[16/10] bg-slate-900 dark:bg-[#070A0F] rounded-lg overflow-hidden border border-slate-800 dark:border-white/[0.08] cursor-pointer"
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
            <ZoomIn className="w-4 h-4 text-blue-400" />
            <span>Click to expand full resolution</span>
          </div>
        </div>
      </div>

      {/* Caption for active screenshot */}
      <div className="mt-3 text-xs font-mono text-slate-600 dark:text-slate-300 flex items-center justify-between">
        <span className="font-semibold text-blue-600 dark:text-blue-300">{currentScreenshot.title}</span>
        <span className="text-slate-500 dark:text-slate-400">{currentScreenshot.caption}</span>
      </div>

      {/* Thumbnails row */}
      {project.screenshots.length > 1 && (
        <div className="mt-4 pt-4 border-t border-slate-200 dark:border-white/[0.08] flex items-center gap-2.5 overflow-x-auto pb-2">
          {project.screenshots.map((s, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedIdx(idx)}
              className={`relative flex-shrink-0 w-24 h-16 rounded-md overflow-hidden border-2 transition-all ${
                selectedIdx === idx
                  ? "border-blue-500 ring-2 ring-blue-500/30 scale-105"
                  : "border-slate-300 dark:border-white/[0.1] opacity-70 hover:opacity-100"
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
