import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { projects } from "@/data/projects";
import { ProjectDeepDiveClient } from "./ProjectDeepDiveClient";
import {
  ArrowLeft,
  ExternalLink,
  Shield,
  Layers,
  CheckCircle2,
  Activity,
} from "lucide-react";
import { GithubIcon } from "@/components/icons";

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Find previous and next project for navigation
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className="min-h-screen flex flex-col bg-[#f6f4ee] dark:bg-[#0b0f19] text-[#18191f] dark:text-[#f1f5f9]">
      <Navbar />

      <main className="flex-1 pt-28 sm:pt-36 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#5e606a] dark:text-slate-400 hover:text-[#18191f] dark:hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>All Projects</span>
          </Link>

          {/* Header */}
          <div className="border-b border-[rgba(24,25,31,0.1)] dark:border-white/[0.08] pb-8">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              {project.tierTag ? (
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#163e91]/10 text-[#163e91] dark:bg-blue-500/10 dark:text-blue-400 border border-[#163e91]/20 dark:border-blue-500/20">
                  {project.tierTag}
                </span>
              ) : (
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#163e91]/10 text-[#163e91] dark:bg-blue-500/10 dark:text-blue-400 border border-[#163e91]/20 dark:border-blue-500/20">
                  {project.category}
                </span>
              )}
              {project.honorBadge && (
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-amber-500/10 text-[#c46200] dark:text-amber-400 border border-amber-500/20 font-medium">
                  {project.honorBadge}
                </span>
              )}
              {project.featured && (
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                  Featured System
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#18191f] dark:text-[#f1f5f9] tracking-tight">
              {project.title}
            </h1>

            <p className="mt-2 text-lg text-[#163e91] dark:text-blue-300 font-mono text-sm sm:text-base">
              {project.tagline}
            </p>

            <p className="mt-4 text-base sm:text-lg text-[#5e606a] dark:text-slate-300 leading-relaxed font-sans">
              {project.description}
            </p>

            {/* Metrics Ribbon */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-[#fbf9f4] dark:bg-[#151d30] border border-[rgba(24,25,31,0.1)] dark:border-white/[0.08] shadow-sm">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-[10px] font-mono uppercase text-slate-500 dark:text-slate-400">
                    {m.label}
                  </span>
                  <span className="text-lg font-display font-bold text-slate-900 dark:text-slate-100 mt-0.5">
                    {m.value}
                  </span>
                  {m.detail && (
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 truncate">
                      {m.detail}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-[#0D1117] hover:bg-slate-100 dark:hover:bg-[#161B22] border border-slate-200 dark:border-white/[0.12] hover:border-blue-500/40 transition-all shadow-sm"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
              )}

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-md shadow-blue-600/20"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Production Demo</span>
                </a>
              )}

              {project.videoUrl && (
                <a
                  href={project.videoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Video Demonstration</span>
                </a>
              )}

              {project.docUrl && (
                <a
                  href={project.docUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Verification Certificate</span>
                </a>
              )}
            </div>
          </div>

          {/* Interactive Client Section for Screenshot Gallery & Lightbox */}
          <ProjectDeepDiveClient project={project} />

          {/* Problem & Solution Breakdown */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl bg-[#fbf9f4] dark:bg-[#151d30] border border-[rgba(24,25,31,0.1)] dark:border-white/[0.08] shadow-sm">
              <div className="text-xs font-mono uppercase text-[#c46200] dark:text-amber-400 font-semibold mb-2 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span>The Engineering Problem</span>
              </div>
              <p className="text-sm text-[#5e606a] dark:text-slate-300 leading-relaxed font-sans">
                {project.problem}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#fbf9f4] dark:bg-[#151d30] border border-[rgba(24,25,31,0.1)] dark:border-white/[0.08] shadow-sm">
              <div className="text-xs font-mono uppercase text-[#0b7a55] dark:text-emerald-400 font-semibold mb-2 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>The Architectural Solution</span>
              </div>
              <p className="text-sm text-[#5e606a] dark:text-slate-300 leading-relaxed font-sans">
                {project.solution}
              </p>
            </div>
          </div>

          {/* System Case Study Breakdown Matrix */}
          {project.caseStudyBreakdown && project.caseStudyBreakdown.length > 0 && (
            <div className="mt-12 p-6 sm:p-8 rounded-xl bg-[#fbf9f4] dark:bg-[#151d30] border border-[rgba(24,25,31,0.12)] dark:border-white/[0.08] shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#163e91] dark:bg-blue-400" />
                <h2 className="text-xl font-display font-bold text-[#18191f] dark:text-[#f1f5f9]">
                  System Case Study Breakdown
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#5e606a] dark:text-slate-400 mb-6 font-sans">
                Architectural invariants, specialized implementation details, and verification criteria.
              </p>

              <div className="rounded-xl bg-[#f0ece1]/70 dark:bg-[#111726]/80 border border-[rgba(24,25,31,0.08)] dark:border-white/[0.06] divide-y divide-[rgba(24,25,31,0.08)] dark:divide-white/[0.06] overflow-hidden">
                {project.caseStudyBreakdown.map((row, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-baseline"
                  >
                    <span className="sm:col-span-4 font-mono text-xs font-bold uppercase tracking-wider text-[#163e91] dark:text-blue-400">
                      {row.label}
                    </span>
                    <span className="sm:col-span-8 text-xs sm:text-sm text-[#18191f]/90 dark:text-slate-300 leading-relaxed font-sans">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Architecture Overview */}
          <div className="mt-12 p-6 sm:p-8 rounded-xl bg-[#fbf9f4] dark:bg-[#151d30] border border-[rgba(24,25,31,0.1)] dark:border-white/[0.08] shadow-sm">
            <h2 className="text-xl font-display font-bold text-[#18191f] dark:text-[#f1f5f9] mb-3 flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#163e91] dark:text-blue-400" />
              <span>Architectural Breakdown</span>
            </h2>
            <p className="text-sm sm:text-base text-[#5e606a] dark:text-slate-300 leading-relaxed mb-6 font-sans">
              {project.deepDive.architectureDescription}
            </p>

            {project.architectureHint && (
              <div className="p-4 rounded-lg bg-slate-900 dark:bg-[#070A0F] border border-slate-800 dark:border-white/[0.06] font-mono text-xs text-blue-300 overflow-x-auto whitespace-pre">
                {project.architectureHint}
              </div>
            )}
          </div>

          {/* Key Decisions */}
          {project.deepDive.keyDecisions && project.deepDive.keyDecisions.length > 0 && (
            <div className="mt-12">
              <h2 className="text-xl font-display font-bold text-[#18191f] dark:text-[#f1f5f9] mb-6">
                Key Engineering Decisions &amp; Trade-Offs
              </h2>
              <div className="space-y-4">
                {project.deepDive.keyDecisions.map((decision, dIdx) => (
                  <div
                    key={dIdx}
                    className="p-5 rounded-xl bg-[#fbf9f4] dark:bg-[#151d30] border border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] hover:border-[rgba(24,25,31,0.18)] dark:hover:border-white/[0.16] transition-all shadow-sm"
                  >
                    <div className="text-sm font-semibold text-[#163e91] dark:text-blue-400 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#163e91] dark:text-blue-400 flex-shrink-0" />
                      <span>{decision.title}</span>
                    </div>
                    <p className="mt-2 text-xs sm:text-sm text-[#5e606a] dark:text-slate-300 leading-relaxed pl-6 font-sans">
                      {decision.explanation}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Concurrency & Validation */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.deepDive.concurrencyAndFailures && (
              <div className="p-6 rounded-xl bg-[#fbf9f4] dark:bg-[#151d30] border border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] shadow-sm">
                <h3 className="text-base font-display font-bold text-[#18191f] dark:text-[#f1f5f9] mb-4 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span>Failure Boundaries &amp; Concurrency</span>
                </h3>
                <ul className="space-y-2.5 text-xs text-[#5e606a] dark:text-slate-300">
                  {project.deepDive.concurrencyAndFailures.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-amber-600 dark:text-amber-400 mt-0.5">●</span>
                      <span className="font-sans">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.deepDive.benchmarkOrValidation && (
              <div className="p-6 rounded-xl bg-[#fbf9f4] dark:bg-[#151d30] border border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] shadow-sm">
                <h3 className="text-base font-display font-bold text-[#18191f] dark:text-[#f1f5f9] mb-4 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                  <span>Benchmark &amp; Verification</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#5e606a] dark:text-slate-300 leading-relaxed font-sans">
                  {project.deepDive.benchmarkOrValidation}
                </p>
              </div>
            )}
          </div>

          {/* Technology Stack Tags */}
          <div className="mt-12 pt-6 border-t border-[rgba(24,25,31,0.08)] dark:border-white/[0.08]">
            <div className="text-xs font-mono uppercase text-[#5e606a] dark:text-slate-400 mb-3">
              Technologies Used
            </div>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md text-xs font-mono bg-[#f0ece1] dark:bg-[#111726] text-[#18191f] dark:text-slate-200 border border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Prev / Next Pagination */}
          <div className="mt-16 pt-8 border-t border-slate-200 dark:border-white/[0.08] flex items-center justify-between text-xs font-mono">
            {prevProject ? (
              <Link
                href={`/work/${prevProject.slug}`}
                className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Prev: {prevProject.title}</span>
              </Link>
            ) : (
              <span />
            )}

            {nextProject && (
              <Link
                href={`/work/${nextProject.slug}`}
                className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <span>Next: {nextProject.title}</span>
                <ArrowLeft className="w-3.5 h-3.5 rotate-180" />
              </Link>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
