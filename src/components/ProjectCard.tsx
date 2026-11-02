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
    <article className="group flex flex-col rounded-xl bg-[#FFFCF5] dark:bg-[#1F2520] border border-[#D9D2C3] dark:border-[#394139] hover:border-[#A4472D]/50 dark:hover:border-[#E3A56E]/50 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md">
      {/* Visual Header / Screenshot stage */}
      {primaryScreenshot ? (
        <div className="relative w-full aspect-[16/9] bg-[#EEE9DE] dark:bg-[#151916] border-b border-[#D9D2C3] dark:border-[#394139] overflow-hidden">
          <Image
            src={primaryScreenshot}
            alt={`${project.title} screenshot`}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105 opacity-95 dark:opacity-90 dark:group-hover:opacity-100"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FFFCF5]/80 dark:from-[#1F2520] via-transparent to-transparent opacity-80" />
          
          {/* Top floating badge */}
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-[#FFFCF5]/90 dark:bg-[#151916]/85 text-[#A4472D] dark:text-[#E3A56E] border border-[#A4472D]/20 dark:border-[#E3A56E]/30 backdrop-blur-md shadow-sm">
              {project.category}
            </span>
          </div>

          {project.metrics[0] && (
            <div className="absolute top-3 right-3">
              <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-[#FFFCF5]/90 dark:bg-[#151916]/85 text-[#28664F] dark:text-[#8EC5A5] border border-[#28664F]/30 backdrop-blur-md shadow-sm">
                {project.metrics[0].label}: {project.metrics[0].value}
              </span>
            </div>
          )}
        </div>
      ) : (
        <div className="p-4 bg-[#EEE9DE] dark:bg-[#252D27] border-b border-[#D9D2C3] dark:border-[#394139] flex items-center justify-between">
          <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-[#A4472D]/10 text-[#A4472D] dark:text-[#E3A56E] border border-[#A4472D]/20">
            {project.category}
          </span>
          {project.metrics[0] && (
            <span className="text-[11px] font-mono text-[#28664F] dark:text-[#8EC5A5] font-semibold">
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
            <div className="text-[11px] font-mono text-[#8A5A17] dark:text-[#E6BD76] font-semibold mb-1 truncate">
              {project.honorBadge}
            </div>
          )}

          {/* Title & Tagline */}
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="text-xl font-display font-bold text-[#20251F] dark:text-[#F1EDE3] group-hover:text-[#A4472D] dark:group-hover:text-[#E3A56E] transition-colors">
              <Link href={`/work/${project.slug}`}>{project.title}</Link>
            </h3>
          </div>

          <p className="mt-1 text-xs font-mono text-[#626A60] dark:text-[#B2B7AB] line-clamp-1">
            {project.tagline}
          </p>

          <p className="mt-3 text-sm text-[#626A60] dark:text-[#B2B7AB] leading-relaxed line-clamp-3 font-sans">
            {project.description}
          </p>

          {/* Architecture hint block */}
          {project.architectureHint && (
            <div className="mt-4 p-2.5 rounded bg-[#EEE9DE] dark:bg-[#151916] border border-[#D9D2C3] dark:border-[#394139] font-mono text-[11px] text-[#A4472D] dark:text-[#E3A56E] overflow-x-auto whitespace-nowrap">
              <span className="text-[#626A60] dark:text-[#B2B7AB] mr-1.5">$ flow:</span>
              {project.architectureHint}
            </div>
          )}

          {/* Tech Stack Pills */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.stack.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#EEE9DE] dark:bg-[#252D27] text-[#20251F] dark:text-[#F1EDE3] border border-[#D9D2C3] dark:border-[#394139]"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 5 && (
              <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-[#626A60] dark:text-[#B2B7AB]">
                +{project.stack.length - 5}
              </span>
            )}
          </div>
        </div>

        {/* Action Links */}
        <div className="mt-6 pt-4 border-t border-[#D9D2C3] dark:border-[#394139] flex items-center justify-between text-xs font-medium">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-[#626A60] hover:text-[#20251F] dark:text-[#B2B7AB] dark:hover:text-[#F1EDE3] transition-colors"
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
                className="flex items-center gap-1.5 text-[#28664F] hover:text-[#1e4e3c] dark:text-[#8EC5A5] dark:hover:text-[#a8d8bd] transition-colors font-medium"
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
                className="flex items-center gap-1.5 text-[#8A5A17] hover:text-[#6d4612] dark:text-[#E6BD76] dark:hover:text-[#f0d096] transition-colors font-medium"
                title="Watch Video Demonstration"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Video</span>
              </a>
            )}
          </div>

          <Link
            href={`/work/${project.slug}`}
            className="flex items-center gap-1 text-[#A4472D] dark:text-[#E3A56E] hover:underline font-mono text-xs transition-colors font-semibold"
          >
            <span>Case Study</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
}
