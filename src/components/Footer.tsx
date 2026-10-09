import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] bg-[#f0ece1]/60 dark:bg-[#070A0F] py-12 relative text-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left info */}
          <div className="flex flex-col items-center md:items-start">
            <div className="font-display font-bold text-sm tracking-tight text-[#18191f] dark:text-[#f1f5f9] flex items-center gap-2">
              <span>MD. SAIMON HASAN EMON</span>
              <span className="text-[#5e606a] dark:text-slate-500">•</span>
              <span className="font-mono text-xs text-[#163e91] dark:text-blue-400 font-normal">Backend &amp; Distributed Systems</span>
            </div>
            <p className="text-[#5e606a] dark:text-slate-400 mt-1 text-center md:text-left">
              Engineered with Next.js, TypeScript, Tailwind CSS, and Systems Architecture rigor.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5 text-[#5e606a] dark:text-slate-400">
            <a
              href="https://github.com/saimonemon46"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#18191f] dark:hover:text-white transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/md-saimon-hasan-emon-17739a324/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#163e91] dark:hover:text-blue-400 transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:saimonemon46@gmail.com"
              className="hover:text-[#18191f] dark:hover:text-white transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://leetcode.com/u/saimonemon46/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-mono"
              title="LeetCode Profile"
            >
              LeetCode
            </a>
            <a
              href="https://www.geeksforgeeks.org/profile/saimon46?tab=activity"
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors font-mono"
              title="GeeksforGeeks Profile"
            >
              GFG
            </a>
          </div>

          {/* Copyright */}
          <div className="text-[#5e606a] dark:text-slate-400 font-mono text-center md:text-right">
            &copy; 2026 Saimon.systems. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
