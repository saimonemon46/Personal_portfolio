import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { experiences } from "@/data/experience";
import { ArrowLeft, Calendar, MapPin, ExternalLink, Zap, CheckCircle2 } from "lucide-react";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F1E8] dark:bg-[#161412] text-[#29251F] dark:text-[#F5F1E8] transition-colors duration-200">
      <Navbar />

      <main className="flex-1 pt-28 sm:pt-36 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#777168] dark:text-slate-400 hover:text-[#29251F] dark:hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>

          {/* Header */}
          <div className="border-b border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] pb-8 mb-12">
            <div className="text-xs font-mono font-semibold tracking-wider text-[#B66A3C] dark:text-[#E28754] uppercase">
              Career Trajectory
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#29251F] dark:text-[#F5F1E8] tracking-tight mt-1">
              Engineering Experience
            </h1>
            <p className="mt-2 text-base text-[#777168] dark:text-slate-400 max-w-2xl font-sans">
              Professional history across real client systems, full-stack enterprise ERP modules, and production Linux environments.
            </p>
          </div>

          {/* Detailed Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp) => (
              <article
                key={exp.company}
                className="rounded-xl bg-[#FFFCF6] dark:bg-[#25211D] border border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] p-6 sm:p-8 shadow-sm dark:shadow-xl"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-[rgba(24,25,31,0.08)] dark:border-white/[0.08]">
                  <div>
                    <div className="flex items-center gap-3">
                      <h2 className="text-2xl font-display font-bold text-[#29251F] dark:text-[#F5F1E8]">
                        {exp.company}
                      </h2>
                      {exp.isCurrent && (
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 font-semibold">
                          Current Role
                        </span>
                      )}
                    </div>
                    <div className="text-base font-semibold text-[#B66A3C] dark:text-[#E28754] mt-1">
                      {exp.role}
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs font-mono text-[#777168] dark:text-slate-400 gap-1">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Metric Callout */}
                {exp.featuredMetric && (
                  <div className="my-6 p-4 rounded-lg bg-emerald-500/10 dark:bg-emerald-950/30 border border-emerald-500/30 flex items-center gap-4">
                    <Zap className="w-6 h-6 text-emerald-700 dark:text-emerald-400 flex-shrink-0" />
                    <div>
                      <div className="text-xl font-display font-bold text-emerald-800 dark:text-emerald-300">
                        {exp.featuredMetric.value}
                      </div>
                      <div className="text-xs font-mono text-emerald-800 dark:text-emerald-200/90">
                        {exp.featuredMetric.label}
                      </div>
                    </div>
                  </div>
                )}

                {/* Summary */}
                <p className="text-sm sm:text-base text-[#777168] dark:text-slate-300 leading-relaxed my-6 font-sans">
                  {exp.summary}
                </p>

                {/* Detailed Deliverables */}
                <div className="mb-6">
                  <h3 className="text-xs font-mono uppercase text-[#777168] dark:text-slate-400 tracking-wider mb-3">
                    Key Deliverables &amp; Impact
                  </h3>
                  <div className="space-y-3">
                    {exp.achievements.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#777168] dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-[#B66A3C] dark:text-[#E28754] flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed font-sans">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="pt-6 border-t border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded text-xs font-mono bg-[#EAE3D6] dark:bg-[#1E1B18] text-[#29251F] dark:text-slate-300 border border-[rgba(24,25,31,0.08)] dark:border-white/[0.06]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {exp.certificateUrl && (
                    <a
                      href={exp.certificateUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-[#B66A3C] dark:text-[#E28754] hover:text-[#B66A3C]/80 dark:hover:text-[#F0A175] transition-colors"
                    >
                      <span>Completion Certificate</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
