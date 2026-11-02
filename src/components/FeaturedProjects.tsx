import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Layers, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  const leadProject = projects.find((p) => p.slug === "zerodrift") || projects[0];
  const supportingProjects = [
    projects.find((p) => p.slug === "distributed-media"),
    projects.find((p) => p.slug === "medisa"),
  ].filter(Boolean) as typeof projects;

  return (
    <section id="work" className="scroll-mt-20 py-16 sm:py-20 lg:py-24 relative">
      <span id="projects" className="scroll-mt-20 absolute top-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 pb-6 border-b border-[rgba(24,25,31,0.08)] dark:border-white/[0.08]">
          <div>
            <div className="text-xs font-mono font-semibold tracking-wider text-[#B66A3C] dark:text-[#E28754] uppercase">
              Selected Work
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#29251F] dark:text-[#F5F1E8] tracking-tight mt-1">
              Engineering work, explained.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#777168] dark:text-slate-400 max-w-2xl font-sans">
              A few projects where I explored backend systems, distributed processing, and applied AI.
            </p>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-semibold text-[#29251F] dark:text-slate-200 bg-[#EAE3D6] hover:bg-[#DCD3C5] dark:bg-[#25211D] dark:hover:bg-[#1E1B18] border border-[rgba(24,25,31,0.12)] dark:border-white/[0.08] hover:border-[#B66A3C]/40 transition-all self-start md:self-auto group shadow-sm"
          >
            <span>View All Projects (7 More in Directory)</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#B66A3C] dark:text-[#E28754] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Lead Featured Project (Largest Card) */}
        {leadProject && (
          <article className="mb-8 rounded-2xl bg-[#FFFCF6] dark:bg-[#25211D] border border-[rgba(24,25,31,0.12)] dark:border-white/[0.08] p-6 sm:p-8 shadow-sm hover:border-[#B66A3C]/40 transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Description & Specs (7 cols) */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-[#B66A3C]/10 text-[#B66A3C] dark:bg-[#B66A3C]/15 dark:text-[#E28754] border border-[#B66A3C]/20 dark:border-[#E28754]/20">
                      {leadProject.tierTag || leadProject.category}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                      Lead Systems Project
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#29251F] dark:text-[#F5F1E8] tracking-tight">
                    <Link href={`/work/${leadProject.slug}`} className="hover:text-[#B66A3C] dark:hover:text-[#E28754] transition-colors">
                      {leadProject.title}
                    </Link>
                  </h3>

                  <p className="mt-1 text-xs sm:text-sm font-mono text-[#B66A3C] dark:text-[#F0A175]">
                    {leadProject.tagline}
                  </p>

                  <p className="mt-3 text-sm text-[#777168] dark:text-slate-300 leading-relaxed font-sans">
                    {leadProject.description}
                  </p>

                  {/* Metrics Row */}
                  <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {leadProject.metrics.map((m, mIdx) => (
                      <div
                        key={mIdx}
                        className="p-2.5 rounded-lg bg-[#EAE3D6]/70 dark:bg-[#1E1B18]/80 border border-[rgba(24,25,31,0.06)] dark:border-white/[0.05]"
                      >
                        <div className="text-[10px] font-mono uppercase text-[#777168] dark:text-slate-400 truncate">
                          {m.label}
                        </div>
                        <div className="text-sm sm:text-base font-display font-bold text-[#29251F] dark:text-[#F5F1E8] mt-0.5 truncate">
                          {m.value}
                        </div>
                        {m.detail && (
                          <div className="text-[10px] font-mono text-[#777168] dark:text-slate-400 truncate mt-0.5">
                            {m.detail}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Architecture hint */}
                  {leadProject.architectureHint && (
                    <div className="mt-4 p-2.5 rounded bg-[#EAE3D6] dark:bg-[#161412] border border-[rgba(24,25,31,0.08)] dark:border-white/[0.06] font-mono text-[11px] text-[#B66A3C] dark:text-[#F0A175] overflow-x-auto whitespace-nowrap">
                      <span className="text-[#8b8d97] dark:text-slate-500 mr-1.5">$ flow:</span>
                      {leadProject.architectureHint}
                    </div>
                  )}

                  {/* Tech stack */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {leadProject.stack.slice(0, 6).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#EAE3D6] dark:bg-[#1E1B18] text-[#29251F] dark:text-slate-300 border border-[rgba(24,25,31,0.08)] dark:border-white/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="mt-6 pt-4 border-t border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] flex flex-wrap items-center gap-3">
                  <Link
                    href={`/work/${leadProject.slug}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-semibold text-white bg-[#B66A3C] hover:bg-[#96532B] dark:bg-[#B66A3C] dark:hover:bg-[#CC7B4A] transition-all shadow-md shadow-[#B66A3C]/20 group"
                  >
                    <span>Full Case Study Breakdown</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  {leadProject.githubUrl && (
                    <a
                      href={leadProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono text-[#29251F] dark:text-slate-200 bg-[#EAE3D6] hover:bg-[#e6e0d2] dark:bg-[#1E1B18] dark:hover:bg-[#1E1B18] border border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Repository</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column: Screenshot Visual (5 cols) */}
              <div className="lg:col-span-5">
                <div className="rounded-xl overflow-hidden bg-[#EAE3D6] dark:bg-[#070A0F] border border-[rgba(24,25,31,0.12)] dark:border-white/[0.08] shadow-sm">
                  <div className="px-3.5 py-2 bg-[#EAE3D6] dark:bg-[#070A0F]/90 border-b border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-[#777168] dark:text-slate-400">
                    <span className="font-semibold text-[#29251F] dark:text-slate-300">
                      Locust Load Test Benchmark Report
                    </span>
                    <span className="text-emerald-700 dark:text-emerald-400">1,023.8 RPS</span>
                  </div>
                  <div className="relative aspect-[16/10] w-full bg-[#10141d] dark:bg-[#070A0F] overflow-hidden">
                    <Image
                      src="/assets/ledgercore/locust_load_test_report.png"
                      alt="Locust Load Test Benchmark Report"
                      fill
                      className="object-contain object-top p-1"
                      sizes="(max-width: 1024px) 100vw, 420px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </article>
        )}

        {/* Supporting Projects (2-Column Grid on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {supportingProjects.map((project) => {
            const screenshot = project.screenshots[0]?.url;
            return (
              <article
                key={project.slug}
                className="rounded-2xl bg-[#FFFCF6] dark:bg-[#25211D] border border-[rgba(24,25,31,0.12)] dark:border-white/[0.08] p-6 flex flex-col justify-between shadow-sm hover:border-[#B66A3C]/40 transition-all"
              >
                <div>
                  {/* Top visual if screenshot available */}
                  {screenshot && (
                    <div className="mb-4 rounded-xl overflow-hidden bg-[#EAE3D6] dark:bg-[#070A0F] border border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] relative aspect-[16/9] w-full">
                      <Image
                        src={screenshot}
                        alt={project.title}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  )}

                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-[#B66A3C]/10 text-[#B66A3C] dark:bg-[#B66A3C]/15 dark:text-[#E28754] border border-[#B66A3C]/20 dark:border-[#E28754]/20">
                      {project.category}
                    </span>
                    {project.honorBadge && (
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20">
                        {project.honorBadge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-display font-bold text-[#29251F] dark:text-[#F5F1E8] tracking-tight">
                    <Link href={`/work/${project.slug}`} className="hover:text-[#B66A3C] dark:hover:text-[#E28754] transition-colors">
                      {project.title}
                    </Link>
                  </h3>

                  <p className="mt-1 text-xs font-mono text-[#B66A3C] dark:text-[#F0A175]">
                    {project.tagline}
                  </p>

                  <p className="mt-2.5 text-xs sm:text-sm text-[#777168] dark:text-slate-300 leading-relaxed font-sans line-clamp-3">
                    {project.description}
                  </p>

                  {/* Metrics preview */}
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {project.metrics.slice(0, 2).map((m, mIdx) => (
                      <div
                        key={mIdx}
                        className="p-2 rounded-lg bg-[#EAE3D6]/70 dark:bg-[#1E1B18]/80 border border-[rgba(24,25,31,0.06)] dark:border-white/[0.05]"
                      >
                        <div className="text-[10px] font-mono uppercase text-[#777168] dark:text-slate-400 truncate">
                          {m.label}
                        </div>
                        <div className="text-xs sm:text-sm font-display font-bold text-[#29251F] dark:text-[#F5F1E8] truncate">
                          {m.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.stack.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#EAE3D6] dark:bg-[#1E1B18] text-[#29251F] dark:text-slate-300 border border-[rgba(24,25,31,0.08)] dark:border-white/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="mt-6 pt-4 border-t border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] flex items-center justify-between text-xs font-medium">
                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-[#777168] hover:text-[#29251F] dark:text-slate-400 dark:hover:text-white transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>GitHub</span>
                      </a>
                    )}
                    {project.videoUrl && (
                      <a
                        href={project.videoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-amber-700 dark:text-amber-400 hover:underline transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>Video Demo</span>
                      </a>
                    )}
                  </div>

                  <Link
                    href={`/work/${project.slug}`}
                    className="inline-flex items-center gap-1 text-[#B66A3C] dark:text-[#E28754] font-semibold hover:underline"
                  >
                    <span>Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* View All Section Banner */}
        <div className="mt-12 p-5 sm:p-7 rounded-2xl bg-[#FFFCF6] dark:bg-[#25211D] border border-[rgba(24,25,31,0.1)] dark:border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-sm">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#B66A3C] dark:text-[#E28754] font-semibold mb-1">
              <Layers className="w-3.5 h-3.5" />
              <span>Full Engineering Catalogue</span>
            </div>
            <h3 className="text-lg sm:text-xl font-display font-bold text-[#29251F] dark:text-[#F5F1E8]">
              Bare-Metal Jitsi SFU, SmartPark AI &amp; 5 More Systems
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-[#777168] dark:text-slate-400 max-w-xl font-sans">
              Discover real-time WebRTC media clusters, autonomous multi-agent dispatch engines, multimodal AI assistants, and developer tooling in the complete directory.
            </p>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-semibold text-white bg-[#B66A3C] hover:bg-[#96532B] dark:bg-[#B66A3C] dark:hover:bg-[#CC7B4A] transition-all shadow-md shadow-[#B66A3C]/20 whitespace-nowrap self-start sm:self-auto group"
          >
            <span>View All 10 Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
