"use client";

import { useTheme } from "@/components/ThemeProvider";
import { Sun, Moon } from "lucide-react";
import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!mounted) {
    return (
      <button
        type="button"
        className={`w-9 h-9 rounded-md flex items-center justify-center bg-[#eeeae0] dark:bg-[#151d30] border border-[rgba(24,25,31,0.12)] dark:border-white/[0.12] text-[#5e606a] dark:text-slate-400 ${className}`}
        aria-label="Toggle light or dark theme"
      >
        <Moon className="w-4 h-4 opacity-50" />
      </button>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to Editorial Paper light theme" : "Switch to Night Shift obsidian theme"}
      title={isDark ? "Switch to Editorial Paper light mode" : "Switch to Night Shift dark mode"}
      className={`relative w-9 h-9 rounded-md flex items-center justify-center bg-[#eeeae0] hover:bg-[#e4decb] dark:bg-[#151d30] dark:hover:bg-[#1c263e] border border-[rgba(24,25,31,0.12)] hover:border-[rgba(24,25,31,0.25)] dark:border-white/[0.12] dark:hover:border-blue-500/40 text-[#18191f] dark:text-[#f1f5f9] transition-all shadow-sm ${className}`}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-400 animate-in fade-in zoom-in duration-200" />
      ) : (
        <Moon className="w-4 h-4 text-[#18191f] animate-in fade-in zoom-in duration-200" />
      )}
    </button>
  );
}
