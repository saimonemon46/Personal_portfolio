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
    <div className="min-h-screen flex flex-col bg-[#F4F0E6] dark:bg-[#151916] text-[#20251F] dark:text-[#F1EDE3]">
      <Navbar />

      <main className="flex-1 pt-28 sm:pt-36 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#626A60] dark:text-[#B2B7AB] hover:text-[#20251F] dark:hover:text-[#F1EDE3] transition-colors mb-8 group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>All Projects</span>
          </Link>

          {/* Header */}
          <div className="border-b border-[#D9D2C3] dark:border-[#394139] pb-8">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              {project.tierTag ? (
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#A4472D]/10 text-[#A4472D] dark:bg-[#E3A56E]/15 dark:text-[#E3A56E] border border-[#A4472D]/20 dark:border-[#E3A56E]/30">
                  {project.tierTag}
                </span>
              ) : (
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#A4472D]/10 text-[#A4472D] dark:bg-[#E3A56E]/15 dark:text-[#E3A56E] border border-[#A4472D]/20 dark:border-[#E3A56E]/30">
                  {project.category}
                </span>
              )}
              {project.honorBadge && (
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-[#8A5A17]/10 text-[#8A5A17] dark:text-[#E6BD76] border border-[#8A5A17]/20 font-medium">
                  {project.honorBadge}
                </span>
              )}
              {project.featured && (
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-[#28664F]/10 text-[#28664F] dark:text-[#8EC5A5] border border-[#28664F]/20 font-medium">
                  Featured System
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#20251F] dark:text-[#F1EDE3] tracking-tight">
              {project.title}
            </h1>

            <p className="mt-2 text-lg text-[#A4472D] dark:text-[#E3A56E] font-mono text-sm sm:text-base">
              {project.tagline}
            </p>

            <p className="mt-4 text-base sm:text-lg text-[#626A60] dark:text-[#B2B7AB] leading-relaxed font-sans">
              {project.description}
            </p>

            {/* Metrics Ribbon */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-[#FFFCF5] dark:bg-[#1F2520] border border-[#D9D2C3] dark:border-[#394139] shadow-sm">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-[10px] font-mono uppercase text-[#626A60] dark:text-[#B2B7AB]">
                    {m.label}
                  </span>
                  <span className="text-lg font-display font-bold text-[#20251F] dark:text-[#F1EDE3] mt-0.5">
                    {m.value}
                  </span>
                  {m.detail && (
                    <span className="text-[11px] font-mono text-[#626A60] dark:text-[#B2B7AB] truncate">
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
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium text-[#20251F] dark:text-[#F1EDE3] bg-[#EEE9DE] hover:bg-[#E3DDCF] dark:bg-[#252D27] dark:hover:bg-[#1F2520] border border-[#D9D2C3] dark:border-[#394139] hover:border-[#A4472D]/40 transition-all shadow-sm"
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
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-semibold text-white dark:text-[#151916] bg-[#A4472D] hover:bg-[#873A26] dark:bg-[#E3A56E] dark:hover:bg-[#F0B981] transition-all shadow-md shadow-[#A4472D]/20"
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
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium text-[#8A5A17] dark:text-[#E6BD76] bg-[#8A5A17]/10 hover:bg-[#8A5A17]/20 border border-[#8A5A17]/30 transition-all"
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
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium text-[#28664F] dark:text-[#8EC5A5] bg-[#28664F]/10 hover:bg-[#28664F]/20 border border-[#28664F]/30 transition-all"
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
            <div className="p-6 rounded-xl bg-[#FFFCF5] dark:bg-[#1F2520] border border-[#D9D2C3] dark:border-[#394139] shadow-sm">
              <div className="text-xs font-mono uppercase text-[#8A5A17] dark:text-[#E6BD76] font-semibold mb-2 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#8A5A17] dark:bg-[#E6BD76]" />
                <span>The Engineering Problem</span>
              </div>
              <p className="text-sm text-[#626A60] dark:text-[#B2B7AB] leading-relaxed font-sans">
                {project.problem}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#FFFCF5] dark:bg-[#1F2520] border border-[#D9D2C3] dark:border-[#394139] shadow-sm">
              <div className="text-xs font-mono uppercase text-[#28664F] dark:text-[#8EC5A5] font-semibold mb-2 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#28664F] dark:bg-[#8EC5A5]" />
                <span>The Architectural Solution</span>
              </div>
              <p className="text-sm text-[#626A60] dark:text-[#B2B7AB] leading-relaxed font-sans">
                {project.solution}
              </p>
            </div>
          </div>

          {/* System Case Study Breakdown Matrix */}
          {project.caseStudyBreakdown && project.caseStudyBreakdown.length > 0 && (
            <div className="mt-12 p-6 sm:p-8 rounded-xl bg-[#FFFCF5] dark:bg-[#1F2520] border border-[#D9D2C3] dark:border-[#394139] shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#A4472D] dark:bg-[#E3A56E]" />
                <h2 className="text-xl font-display font-bold text-[#20251F] dark:text-[#F1EDE3]">
                  System Case Study Breakdown
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#626A60] dark:text-[#B2B7AB] mb-6 font-sans">
                Architectural invariants, specialized implementation details, and verification criteria.
              </p>

              <div className="rounded-xl bg-[#EEE9DE]/80 dark:bg-[#151916] border border-[#D9D2C3] dark:border-[#394139] divide-y divide-[#D9D2C3] dark:divide-[#394139] overflow-hidden">
                {project.caseStudyBreakdown.map((row, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-baseline"
                  >
                    <span className="sm:col-span-4 font-mono text-xs font-bold uppercase tracking-wider text-[#A4472D] dark:text-[#E3A56E]">
                      {row.label}
                    </span>
                    <span className="sm:col-span-8 text-xs sm:text-sm text-[#20251F] dark:text-[#F1EDE3] leading-relaxed font-sans">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Architecture Overview */}
          <div className="mt-12 p-6 sm:p-8 rounded-xl bg-[#FFFCF5] dark:bg-[#1F2520] border border-[#D9D2C3] dark:border-[#394139] shadow-sm">
            <h2 className="text-xl font-display font-bold text-[#20251F] dark:text-[#F1EDE3] mb-3 flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#A4472D] dark:text-[#E3A56E]" />
              <span>Architectural Breakdown</span>
            </h2>
            <p className="text-sm sm:text-base text-[#626A60] dark:text-[#B2B7AB] leading-relaxed mb-6 font-sans">
              {project.deepDive.architectureDescription}
            </p>

            {project.architectureHint && (
              <div className="p-4 rounded-lg bg-[#EEE9DE] dark:bg-[#151916] border border-[#D9D2C3] dark:border-[#394139] font-mono text-xs text-[#A4472D] dark:text-[#E3A56E] overflow-x-auto whitespace-pre">
                {project.architectureHint}
              </div>
            )}
          </div>

          {/* Key Decisions */}
          {project.deepDive.keyDecisions && project.deepDive.keyDecisions.length > 0 && (
            <div className="mt-12">
              <h2 className="text-xl font-display font-bold text-[#20251F] dark:text-[#F1EDE3] mb-6">
                Key Engineering Decisions &amp; Trade-Offs
              </h2>
              <div className="space-y-4">
                {project.deepDive.keyDecisions.map((decision, dIdx) => (
                  <div
                    key={dIdx}
                    className="p-5 rounded-xl bg-[#FFFCF5] dark:bg-[#1F2520] border border-[#D9D2C3] dark:border-[#394139] hover:border-[#A4472D]/40 dark:hover:border-[#E3A56E]/40 transition-all shadow-sm"
                  >
                    <div className="text-sm font-semibold text-[#A4472D] dark:text-[#E3A56E] flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#A4472D] dark:text-[#E3A56E] flex-shrink-0" />
                      <span>{decision.title}</span>
                    </div>
                    <p className="mt-2 text-xs sm:text-sm text-[#626A60] dark:text-[#B2B7AB] leading-relaxed pl-6 font-sans">
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
              <div className="p-6 rounded-xl bg-[#FFFCF5] dark:bg-[#1F2520] border border-[#D9D2C3] dark:border-[#394139] shadow-sm">
                <h3 className="text-base font-display font-bold text-[#20251F] dark:text-[#F1EDE3] mb-4 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#8A5A17] dark:text-[#E6BD76]" />
                  <span>Failure Boundaries &amp; Concurrency</span>
                </h3>
                <ul className="space-y-2.5 text-xs text-[#626A60] dark:text-[#B2B7AB]">
                  {project.deepDive.concurrencyAndFailures.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#8A5A17] dark:text-[#E6BD76] mt-0.5">●</span>
                      <span className="font-sans">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.deepDive.benchmarkOrValidation && (
              <div className="p-6 rounded-xl bg-[#FFFCF5] dark:bg-[#1F2520] border border-[#D9D2C3] dark:border-[#394139] shadow-sm">
                <h3 className="text-base font-display font-bold text-[#20251F] dark:text-[#F1EDE3] mb-4 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#28664F] dark:text-[#8EC5A5]" />
                  <span>Benchmark &amp; Verification</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#626A60] dark:text-[#B2B7AB] leading-relaxed font-sans">
                  {project.deepDive.benchmarkOrValidation}
                </p>
              </div>
            )}
          </div>

          {/* Technology Stack Tags */}
          <div className="mt-12 pt-6 border-t border-[#D9D2C3] dark:border-[#394139]">
            <div className="text-xs font-mono uppercase text-[#626A60] dark:text-[#B2B7AB] mb-3">
              Technologies Used
            </div>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md text-xs font-mono bg-[#EEE9DE] dark:bg-[#252D27] text-[#20251F] dark:text-[#F1EDE3] border border-[#D9D2C3] dark:border-[#394139] shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Prev / Next Pagination */}
          <div className="mt-16 pt-8 border-t border-[#D9D2C3] dark:border-[#394139] flex items-center justify-between text-xs font-mono">
            {prevProject ? (
              <Link
                href={`/work/${prevProject.slug}`}
                className="flex items-center gap-2 text-[#626A60] dark:text-[#B2B7AB] hover:text-[#A4472D] dark:hover:text-[#E3A56E] transition-colors"
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
                className="flex items-center gap-2 text-[#626A60] dark:text-[#B2B7AB] hover:text-[#A4472D] dark:hover:text-[#E3A56E] transition-colors"
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
