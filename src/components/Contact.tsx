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
    <section id="contact" className="scroll-mt-20 py-20 lg:py-28 relative border-t border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] transition-colors">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Headline & Pitch (7 cols) */}
          <div className="lg:col-span-7">
            <div className="text-xs font-mono font-semibold tracking-wider text-[#163e91] dark:text-blue-400 uppercase mb-2">
              Next Conversation
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#18191f] dark:text-[#f1f5f9] tracking-tight leading-tight">
              Build something that survives production.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#5e606a] dark:text-slate-300 leading-relaxed max-w-xl font-sans">
              Open to full-time software engineering roles, high-concurrency backend challenges, distributed systems, and applied AI infrastructure.
            </p>

            {/* Live Clock Card */}
            <div className="mt-8 p-4 rounded-xl bg-[#fbf9f4] dark:bg-[#151d30] border border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] inline-flex flex-col sm:flex-row sm:items-center gap-4 max-w-md shadow-sm dark:shadow-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-500/10 text-[#163e91] dark:text-blue-400 border border-blue-500/20">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase text-[#5e606a] dark:text-slate-400">
                    Local Time (Dhaka, BST / UTC+6)
                  </div>
                  <div className="text-sm font-mono font-bold text-[#18191f] dark:text-[#f1f5f9]">
                    {dhakaTime || "Loading..."}
                  </div>
                </div>
              </div>
              <div className="sm:border-l sm:border-[rgba(24,25,31,0.08)] dark:sm:border-white/[0.08] sm:pl-4 text-xs text-emerald-700 dark:text-emerald-400 font-mono font-semibold">
                ● Replies within 2–4 hours
              </div>
            </div>
          </div>

          {/* Contact Direct Links Grid (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {/* Email link */}
            <a
              href="mailto:saimonemon46@gmail.com"
              className="group p-4 rounded-xl bg-[#fbf9f4] hover:bg-[#f0ece1] dark:bg-[#151d30] dark:hover:bg-[#192338] border border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] hover:border-[#163e91]/40 transition-all flex items-center justify-between shadow-sm dark:shadow-md"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-lg bg-blue-500/10 text-[#163e91] dark:text-blue-400 border border-blue-500/20 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#5e606a] dark:text-slate-400">Direct Email</div>
                  <div className="text-sm font-semibold text-[#18191f] dark:text-[#f1f5f9] group-hover:text-[#163e91] dark:group-hover:text-blue-400 transition-colors">
                    saimonemon46@gmail.com
                  </div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#163e91] dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
            </a>

            {/* WhatsApp link */}
            <a
              href="https://wa.me/8801622015799"
              target="_blank"
              rel="noreferrer"
              className="group p-4 rounded-xl bg-[#fbf9f4] hover:bg-[#f0ece1] dark:bg-[#151d30] dark:hover:bg-[#192338] border border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] hover:border-emerald-500/40 transition-all flex items-center justify-between shadow-sm dark:shadow-md"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                  <WhatsappIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#5e606a] dark:text-slate-400">WhatsApp Direct</div>
                  <div className="text-sm font-semibold text-[#18191f] dark:text-[#f1f5f9] group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                    +880 1622-015799
                  </div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
            </a>

            {/* LinkedIn link */}
            <a
              href="https://www.linkedin.com/in/md-saimon-hasan-emon-17739a324/"
              target="_blank"
              rel="noreferrer"
              className="group p-4 rounded-xl bg-[#fbf9f4] hover:bg-[#f0ece1] dark:bg-[#151d30] dark:hover:bg-[#192338] border border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] hover:border-[#163e91]/40 transition-all flex items-center justify-between shadow-sm dark:shadow-md"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-lg bg-blue-500/10 text-[#163e91] dark:text-blue-400 border border-blue-500/20 group-hover:scale-110 transition-transform">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#5e606a] dark:text-slate-400">LinkedIn Profile</div>
                  <div className="text-sm font-semibold text-[#18191f] dark:text-[#f1f5f9] group-hover:text-[#163e91] dark:group-hover:text-blue-400 transition-colors">
                    in/md-saimon-hasan-emon
                  </div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#163e91] dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
            </a>

            {/* GitHub & Resume row */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://github.com/saimonemon46"
                target="_blank"
                rel="noreferrer"
                className="group p-3 rounded-xl bg-[#fbf9f4] hover:bg-[#f0ece1] dark:bg-[#151d30] dark:hover:bg-[#192338] border border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] hover:border-[#163e91]/30 transition-all flex items-center justify-between text-xs font-medium text-[#18191f] dark:text-slate-200 shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <GithubIcon className="w-4 h-4 text-[#5e606a] dark:text-slate-300" />
                  <span>GitHub</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="/resume.pdf"
                download="Saimon_Hasan_Emon_Resume.pdf"
                className="group p-3 rounded-xl bg-[#163e91]/10 hover:bg-[#163e91]/20 border border-[#163e91]/30 hover:border-[#163e91]/50 transition-all flex items-center justify-between text-xs font-medium text-[#163e91] dark:text-blue-400 shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <FileDown className="w-4 h-4 text-[#163e91] dark:text-blue-400" />
                  <span>Resume PDF</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-[#163e91] dark:text-blue-400 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
