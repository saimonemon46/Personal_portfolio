"use client";

import { useState, useEffect } from "react";
import { Mail, FileDown, Clock, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/icons";

export function Contact() {
  const [dhakaTime, setDhakaTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format time in Dhaka (BST, UTC+6)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Dhaka",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setDhakaTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="contact" className="scroll-mt-20 py-20 lg:py-28 relative border-t border-[#D9D2C3] dark:border-[#394139] transition-colors">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-[#A4472D]/5 dark:bg-[#E3A56E]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Headline & Pitch (7 cols) */}
          <div className="lg:col-span-7">
            <div className="text-xs font-mono font-semibold tracking-wider text-[#A4472D] dark:text-[#E3A56E] uppercase mb-2">
              Get in Touch
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#20251F] dark:text-[#F1EDE3] tracking-tight leading-tight">
              Have an interesting engineering problem? Let&apos;s talk.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#626A60] dark:text-[#B2B7AB] leading-relaxed max-w-xl font-sans">
              Open to full-time software engineering roles, backend systems challenges, distributed processing, and applied AI applications.
            </p>

            {/* Live Clock Card */}
            <div className="mt-8 p-4 rounded-xl bg-[#FFFCF5] dark:bg-[#1F2520] border border-[#D9D2C3] dark:border-[#394139] inline-flex flex-col sm:flex-row sm:items-center gap-4 max-w-md shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#A4472D]/10 text-[#A4472D] dark:bg-[#E3A56E]/15 dark:text-[#E3A56E] border border-[#A4472D]/20 dark:border-[#E3A56E]/30">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase text-[#626A60] dark:text-[#B2B7AB]">
                    Local Time (Dhaka, BST / UTC+6)
                  </div>
                  <div className="text-sm font-mono font-bold text-[#20251F] dark:text-[#F1EDE3]">
                    {dhakaTime || "Loading..."}
                  </div>
                </div>
              </div>
              <div className="sm:border-l sm:border-[#D9D2C3] dark:sm:border-[#394139] sm:pl-4 text-xs text-[#28664F] dark:text-[#8EC5A5] font-mono font-semibold">
                ● Replies within 2–4 hours
              </div>
            </div>
          </div>

          {/* Contact Direct Links Grid (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {/* Email link */}
            <a
              href="mailto:saimonemon46@gmail.com"
              className="group p-4 rounded-xl bg-[#FFFCF5] hover:bg-[#EEE9DE] dark:bg-[#1F2520] dark:hover:bg-[#252D27] border border-[#D9D2C3] dark:border-[#394139] hover:border-[#A4472D]/40 dark:hover:border-[#E3A56E]/40 transition-all flex items-center justify-between shadow-sm"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-lg bg-[#A4472D]/10 text-[#A4472D] dark:bg-[#E3A56E]/15 dark:text-[#E3A56E] border border-[#A4472D]/20 dark:border-[#E3A56E]/30 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#626A60] dark:text-[#B2B7AB]">Direct Email</div>
                  <div className="text-sm font-semibold text-[#20251F] dark:text-[#F1EDE3] group-hover:text-[#A4472D] dark:group-hover:text-[#E3A56E] transition-colors">
                    saimonemon46@gmail.com
                  </div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#626A60] dark:text-[#B2B7AB] group-hover:text-[#A4472D] dark:group-hover:text-[#E3A56E] group-hover:translate-x-1 transition-all" />
            </a>

            {/* WhatsApp link */}
            <a
              href="https://wa.me/8801622015799"
              target="_blank"
              rel="noreferrer"
              className="group p-4 rounded-xl bg-[#FFFCF5] hover:bg-[#EEE9DE] dark:bg-[#1F2520] dark:hover:bg-[#252D27] border border-[#D9D2C3] dark:border-[#394139] hover:border-[#28664F]/40 transition-all flex items-center justify-between shadow-sm"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-lg bg-[#28664F]/10 text-[#28664F] dark:text-[#8EC5A5] border border-[#28664F]/20 group-hover:scale-110 transition-transform">
                  <WhatsappIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#626A60] dark:text-[#B2B7AB]">WhatsApp Direct</div>
                  <div className="text-sm font-semibold text-[#20251F] dark:text-[#F1EDE3] group-hover:text-[#28664F] dark:group-hover:text-[#8EC5A5] transition-colors">
                    +880 1622-015799
                  </div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#626A60] dark:text-[#B2B7AB] group-hover:text-[#28664F] dark:group-hover:text-[#8EC5A5] group-hover:translate-x-1 transition-all" />
            </a>

            {/* LinkedIn link */}
            <a
              href="https://www.linkedin.com/in/md-saimon-hasan-emon-17739a324/"
              target="_blank"
              rel="noreferrer"
              className="group p-4 rounded-xl bg-[#FFFCF5] hover:bg-[#EEE9DE] dark:bg-[#1F2520] dark:hover:bg-[#252D27] border border-[#D9D2C3] dark:border-[#394139] hover:border-[#A4472D]/40 dark:hover:border-[#E3A56E]/40 transition-all flex items-center justify-between shadow-sm"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-lg bg-[#A4472D]/10 text-[#A4472D] dark:bg-[#E3A56E]/15 dark:text-[#E3A56E] border border-[#A4472D]/20 dark:border-[#E3A56E]/30 group-hover:scale-110 transition-transform">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#626A60] dark:text-[#B2B7AB]">LinkedIn Profile</div>
                  <div className="text-sm font-semibold text-[#20251F] dark:text-[#F1EDE3] group-hover:text-[#A4472D] dark:group-hover:text-[#E3A56E] transition-colors">
                    in/md-saimon-hasan-emon
                  </div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#626A60] dark:text-[#B2B7AB] group-hover:text-[#A4472D] dark:group-hover:text-[#E3A56E] group-hover:translate-x-1 transition-all" />
            </a>

            {/* GitHub & Resume row */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://github.com/saimonemon46"
                target="_blank"
                rel="noreferrer"
                className="group p-3 rounded-xl bg-[#FFFCF5] hover:bg-[#EEE9DE] dark:bg-[#1F2520] dark:hover:bg-[#252D27] border border-[#D9D2C3] dark:border-[#394139] hover:border-[#A4472D]/40 transition-all flex items-center justify-between text-xs font-medium text-[#20251F] dark:text-[#F1EDE3] shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <GithubIcon className="w-4 h-4 text-[#626A60] dark:text-[#B2B7AB]" />
                  <span>GitHub</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-[#626A60] dark:text-[#B2B7AB] group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="/resume.pdf"
                download="Saimon_Hasan_Emon_Resume.pdf"
                className="group p-3 rounded-xl bg-[#A4472D]/10 hover:bg-[#A4472D]/20 dark:bg-[#E3A56E]/15 dark:hover:bg-[#E3A56E]/25 border border-[#A4472D]/30 hover:border-[#A4472D]/50 dark:border-[#E3A56E]/30 dark:hover:border-[#E3A56E]/50 transition-all flex items-center justify-between text-xs font-medium text-[#A4472D] dark:text-[#E3A56E] shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <FileDown className="w-4 h-4 text-[#A4472D] dark:text-[#E3A56E]" />
                  <span>Resume PDF</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-[#A4472D] dark:text-[#E3A56E] group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
