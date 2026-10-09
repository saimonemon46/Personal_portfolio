import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const primaryScreenshot = project.screenshots[0]?.url;

  return (
    <article className="group flex flex-col rounded-xl bg-[#fbf9f4] dark:bg-[#151d30] border border-[rgba(24,25,31,0.12)] dark:border-white/[0.08] hover:border-[#163e91]/40 dark:hover:border-blue-500/40 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md dark:shadow-xl dark:hover:shadow-blue-500/5">
      {/* Visual Header / Screenshot stage */}
      {primaryScreenshot ? (
        <div className="relative w-full aspect-[16/9] bg-[#eeeae0] dark:bg-[#07090f] border-b border-[rgba(24,25,31,0.1)] dark:border-white/[0.08] overflow-hidden">
          <Image
            src={primaryScreenshot}
            alt={`${project.title} screenshot`}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105 opacity-95 dark:opacity-90 dark:group-hover:opacity-100"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#fbf9f4]/80 dark:from-[#151d30] via-transparent to-transparent opacity-80" />
          
          {/* Top floating badge */}
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-[#fbf9f4]/90 dark:bg-[#07090f]/85 text-[#163e91] dark:text-blue-400 border border-[#163e91]/20 dark:border-blue-500/30 backdrop-blur-md shadow-sm">
              {project.category}
            </span>
          </div>

          {project.metrics[0] && (
            <div className="absolute top-3 right-3">
              <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-[#fbf9f4]/90 dark:bg-[#07090f]/85 text-[#0b7a55] dark:text-emerald-400 border border-emerald-500/30 backdrop-blur-md shadow-sm">
                {project.metrics[0].label}: {project.metrics[0].value}
              </span>
            </div>
          )}
        </div>
      ) : (
        <div className="p-4 bg-[#f0ece1] dark:bg-[#111726] border-b border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] flex items-center justify-between">
          <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-[#163e91]/10 text-[#163e91] dark:text-blue-400 border border-[#163e91]/20">
            {project.category}
          </span>
          {project.metrics[0] && (
            <span className="text-[11px] font-mono text-[#0b7a55] dark:text-emerald-400 font-semibold">
              {project.metrics[0].label}: {project.metrics[0].value}
            </span>
          )}
        </div>
      )}

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Honor badge if present */}
          {project.honorBadge && (
            <div className="text-[11px] font-mono text-[#c46200] dark:text-amber-400 font-semibold mb-1 truncate">
              {project.honorBadge}
            </div>
          )}

          {/* Title & Tagline */}
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="text-xl font-display font-bold text-[#18191f] dark:text-[#f1f5f9] group-hover:text-[#163e91] dark:group-hover:text-blue-400 transition-colors">
              <Link href={`/work/${project.slug}`}>{project.title}</Link>
            </h3>
          </div>

          <p className="mt-1 text-xs font-mono text-[#5e606a] dark:text-slate-400 line-clamp-1">
            {project.tagline}
          </p>

          <p className="mt-3 text-sm text-[#5e606a] dark:text-slate-300 leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Architecture hint block */}
          {project.architectureHint && (
            <div className="mt-4 p-2.5 rounded bg-[#f0ece1] dark:bg-[#0b0f19] border border-[rgba(24,25,31,0.08)] dark:border-white/[0.06] font-mono text-[11px] text-[#163e91] dark:text-blue-300 overflow-x-auto whitespace-nowrap">
              <span className="text-[#8b8d97] dark:text-slate-500 mr-1.5">$ flow:</span>
              {project.architectureHint}
            </div>
          )}

          {/* Tech Stack Pills */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.stack.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#eeeae0] dark:bg-[#1c263e] text-[#18191f] dark:text-slate-200 border border-[rgba(24,25,31,0.08)] dark:border-white/[0.06]"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 5 && (
              <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-[#5e606a] dark:text-slate-400">
                +{project.stack.length - 5}
              </span>
            )}
          </div>
        </div>

        {/* Action Links */}
        <div className="mt-6 pt-4 border-t border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] flex items-center justify-between text-xs font-medium">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-[#5e606a] hover:text-[#18191f] dark:text-slate-400 dark:hover:text-white transition-colors"
                title="View Source on GitHub"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            )}

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-[#0b7a55] hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors font-medium"
                title="Live Demonstration"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            )}

            {project.videoUrl && (
              <a
                href={project.videoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-[#c46200] hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300 transition-colors font-medium"
                title="Watch Video Demonstration"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Video</span>
              </a>
            )}
          </div>

          <Link
            href={`/work/${project.slug}`}
            className="flex items-center gap-1 text-[#163e91] dark:text-blue-400 hover:underline font-mono text-xs transition-colors font-semibold"
          >
            <span>Case Study</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
}
