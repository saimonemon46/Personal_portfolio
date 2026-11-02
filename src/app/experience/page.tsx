import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { experiences } from "@/data/experience";
import { ArrowLeft, Calendar, MapPin, ExternalLink, Zap, CheckCircle2 } from "lucide-react";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F4F0E6] dark:bg-[#151916] text-[#20251F] dark:text-[#F1EDE3] transition-colors duration-200">
      <Navbar />

      <main className="flex-1 pt-28 sm:pt-36 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#626A60] dark:text-[#B2B7AB] hover:text-[#20251F] dark:hover:text-[#F1EDE3] transition-colors mb-8 group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>

          {/* Header */}
          <div className="border-b border-[#D9D2C3] dark:border-[#394139] pb-8 mb-12">
            <div className="text-xs font-mono font-semibold tracking-wider text-[#A4472D] dark:text-[#E3A56E] uppercase">
              Career Trajectory
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#20251F] dark:text-[#F1EDE3] tracking-tight mt-1">
              Engineering Experience
            </h1>
            <p className="mt-2 text-base text-[#626A60] dark:text-[#B2B7AB] max-w-2xl font-sans">
              Professional history across real client systems, full-stack enterprise ERP modules, and production Linux environments.
            </p>
          </div>

          {/* Detailed Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp) => (
              <article
                key={exp.company}
                className="rounded-xl bg-[#FFFCF5] dark:bg-[#1F2520] border border-[#D9D2C3] dark:border-[#394139] p-6 sm:p-8 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-[#D9D2C3] dark:border-[#394139]">
                  <div>
                    <div className="flex items-center gap-3">
                      <h2 className="text-2xl font-display font-bold text-[#20251F] dark:text-[#F1EDE3]">
                        {exp.company}
                      </h2>
                      {exp.isCurrent && (
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-[#28664F]/10 text-[#28664F] dark:text-[#8EC5A5] border border-[#28664F]/20 font-semibold">
                          Current Role
                        </span>
                      )}
                    </div>
                    <div className="text-base font-semibold text-[#A4472D] dark:text-[#E3A56E] mt-1">
                      {exp.role}
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs font-mono text-[#626A60] dark:text-[#B2B7AB] gap-1">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#A4472D] dark:text-[#E3A56E]" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#28664F] dark:text-[#8EC5A5]" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Metric Callout */}
                {exp.featuredMetric && (
                  <div className="my-6 p-4 rounded-lg bg-[#28664F]/10 dark:bg-[#28664F]/20 border border-[#28664F]/30 flex items-center gap-4">
                    <Zap className="w-6 h-6 text-[#28664F] dark:text-[#8EC5A5] flex-shrink-0" />
                    <div>
                      <div className="text-xl font-display font-bold text-[#28664F] dark:text-[#8EC5A5]">
                        {exp.featuredMetric.value}
                      </div>
                      <div className="text-xs font-mono text-[#28664F] dark:text-[#8EC5A5]/90">
                        {exp.featuredMetric.label}
                      </div>
                    </div>
                  </div>
                )}

                {/* Summary */}
                <p className="text-sm sm:text-base text-[#626A60] dark:text-[#B2B7AB] leading-relaxed my-6 font-sans">
                  {exp.summary}
                </p>

                {/* Detailed Deliverables */}
                <div className="mb-6">
                  <h3 className="text-xs font-mono uppercase text-[#626A60] dark:text-[#B2B7AB] tracking-wider mb-3">
                    Key Deliverables &amp; Impact
                  </h3>
                  <div className="space-y-3">
                    {exp.achievements.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#626A60] dark:text-[#B2B7AB]">
                        <CheckCircle2 className="w-4 h-4 text-[#A4472D] dark:text-[#E3A56E] flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed font-sans">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="pt-6 border-t border-[#D9D2C3] dark:border-[#394139] flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded text-xs font-mono bg-[#EEE9DE] dark:bg-[#252D27] text-[#20251F] dark:text-[#F1EDE3] border border-[#D9D2C3] dark:border-[#394139]"
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
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-[#A4472D] dark:text-[#E3A56E] hover:text-[#873A26] dark:hover:text-[#F0B981] transition-colors"
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
