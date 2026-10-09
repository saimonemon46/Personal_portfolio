"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { ProjectScreenshot } from "@/data/projects";

interface LightboxModalProps {
  screenshots: ProjectScreenshot[];
  initialIndex?: number;
  isOpen: boolean;
  onClose: () => void;
}

export function LightboxModal({
  screenshots,
  initialIndex = 0,
  isOpen,
  onClose,
}: LightboxModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : screenshots.length - 1));
  }, [screenshots.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < screenshots.length - 1 ? prev + 1 : 0));
  }, [screenshots.length]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleNext, handlePrev, onClose]);

  if (!isOpen || screenshots.length === 0) return null;

  const current = screenshots[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8">
      {/* Top Header Bar */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-slate-300 z-10">
        <div>
          <span className="font-bold text-white">{current?.title}</span>
          <span className="mx-2 text-slate-500">•</span>
          <span className="text-slate-400">
            {currentIndex + 1} / {screenshots.length}
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center gap-1"
        >
          <X className="w-4 h-4" />
          <span className="text-[11px] font-mono">Close [Esc]</span>
        </button>
      </div>

      {/* Main Image Viewport */}
      <div className="relative max-w-5xl max-h-[82vh] w-full h-full flex flex-col items-center justify-center">
        <div className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden rounded-lg">
          {current && (
            <Image
              src={current.url}
              alt={current.title}
              fill
              className="object-contain rounded-md shadow-2xl border border-white/10"
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
          )}
        </div>

        {/* Caption */}
        {current?.caption && (
          <div className="mt-3 text-center text-xs text-slate-300 bg-black/60 px-4 py-1.5 rounded-full border border-white/10 font-sans max-w-xl truncate">
            {current.caption}
          </div>
        )}
      </div>

      {/* Prev / Next controls */}
      {screenshots.length > 1 && (
        <>
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous screenshot"
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white transition-all hover:scale-105"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next screenshot"
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white transition-all hover:scale-105"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}
    </div>
  );
}
