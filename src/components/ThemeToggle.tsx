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
        className={`w-9 h-9 rounded-md flex items-center justify-center bg-[#EEE9DE] dark:bg-[#1F2520] border border-[#D9D2C3] dark:border-[#394139] text-[#626A60] dark:text-[#B2B7AB] ${className}`}
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
      className={`relative w-9 h-9 rounded-md flex items-center justify-center bg-[#EEE9DE] hover:bg-[#D9D2C3] dark:bg-[#1F2520] dark:hover:bg-[#252D27] border border-[#D9D2C3] hover:border-[#A4472D]/40 dark:border-[#394139] dark:hover:border-[#E3A56E]/40 text-[#20251F] dark:text-[#F1EDE3] transition-all shadow-xs cursor-pointer ${className}`}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-[#E3A56E] animate-in fade-in zoom-in duration-200" />
      ) : (
        <Moon className="w-4 h-4 text-[#20251F] animate-in fade-in zoom-in duration-200" />
      )}
    </button>
  );
}
