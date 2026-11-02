import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t border-[#D9D2C3] dark:border-[#394139] bg-[#EEE9DE]/60 dark:bg-[#151916] py-12 relative text-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left info */}
          <div className="flex flex-col items-center md:items-start">
            <div className="font-display font-bold text-sm tracking-tight text-[#20251F] dark:text-[#F1EDE3] flex items-center gap-2">
              <span>MD. SAIMON HASAN EMON</span>
              <span className="text-[#626A60] dark:text-[#B2B7AB]">•</span>
              <span className="font-mono text-xs text-[#A4472D] dark:text-[#E3A56E] font-normal">Backend &amp; Distributed Systems</span>
            </div>
            <p className="text-[#626A60] dark:text-[#B2B7AB] mt-1 text-center md:text-left">
              Engineered with Next.js, TypeScript, Tailwind CSS, and Systems Architecture rigor.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5 text-[#626A60] dark:text-[#B2B7AB]">
            <a
              href="https://github.com/saimonemon46"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#20251F] dark:hover:text-[#F1EDE3] transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/md-saimon-hasan-emon-17739a324/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#A4472D] dark:hover:text-[#E3A56E] transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:saimonemon46@gmail.com"
              className="hover:text-[#20251F] dark:hover:text-[#F1EDE3] transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://leetcode.com/u/saimonemon46/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#8A5A17] dark:hover:text-[#E6BD76] transition-colors font-mono"
              title="LeetCode Profile"
            >
              LeetCode
            </a>
            <a
              href="https://www.geeksforgeeks.org/profile/saimon46?tab=activity"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#28664F] dark:hover:text-[#8EC5A5] transition-colors font-mono"
              title="GeeksforGeeks Profile"
            >
              GFG
            </a>
          </div>

          {/* Copyright */}
          <div className="text-[#626A60] dark:text-[#B2B7AB] font-mono text-center md:text-right">
            &copy; 2026 Saimon.systems. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
