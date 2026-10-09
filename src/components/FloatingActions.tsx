"use client";

import { Mail } from "lucide-react";
import { WhatsappIcon } from "@/components/icons";

export function FloatingActions() {
  return (
    <div
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto select-none"
      aria-label="Floating quick contact buttons"
    >
      {/* Email Floating Button */}
      <a
        href="mailto:saimonemon46@gmail.com"
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 border border-blue-400/40 hover:scale-110 active:scale-95 transition-all duration-200"
        aria-label="Send an email to saimonemon46@gmail.com"
      >
        <Mail className="w-5 h-5 text-white" />

        {/* Hover Tooltip (Left aligned) */}
        <span className="pointer-events-none absolute right-14 whitespace-nowrap rounded-md bg-slate-900/90 dark:bg-[#070A0F]/95 border border-white/10 px-3 py-1.5 text-xs font-mono text-slate-100 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 backdrop-blur-md">
          Email: saimonemon46@gmail.com
        </span>
      </a>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/8801622015799"
        target="_blank"
        rel="noreferrer"
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/30 border border-emerald-400/40 hover:scale-110 active:scale-95 transition-all duration-200"
        aria-label="Chat with Saimon on WhatsApp"
      >
        <WhatsappIcon className="w-6 h-6 text-white" />

        {/* Pulse ring indicator */}
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
        </span>

        {/* Hover Tooltip (Left aligned) */}
        <span className="pointer-events-none absolute right-14 whitespace-nowrap rounded-md bg-slate-900/90 dark:bg-[#070A0F]/95 border border-white/10 px-3 py-1.5 text-xs font-mono text-slate-100 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 backdrop-blur-md">
          WhatsApp: +880 1622-015799
        </span>
      </a>
    </div>
  );
}
