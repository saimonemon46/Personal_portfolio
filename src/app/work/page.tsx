"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { SystemsLab } from "@/components/SystemsLab";
import { projects } from "@/data/projects";
import { ArrowLeft, Filter } from "lucide-react";

export default function WorkPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const filterOptions = [
    "All",
    "AI / ML",
    "Distributed Systems",
    "Backend",
    "DevOps / Infra",
  ];

  const filteredProjects =
    selectedFilter === "All"
      ? projects
      : projects.filter((p) => p.filterCategory === selectedFilter);

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F1E8] dark:bg-[#161412] text-[#29251F] dark:text-[#F5F1E8]">
      <Navbar />

      <main className="flex-1 pt-28 sm:pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#777168] dark:text-slate-400 hover:text-[#29251F] dark:hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>

          {/* Page Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[rgba(24,25,31,0.1)] dark:border-white/[0.08]">
            <div>
              <div className="text-xs font-mono font-semibold tracking-wider text-[#B66A3C] dark:text-[#E28754] uppercase">
                Systems &amp; Repositories
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#29251F] dark:text-[#F5F1E8] tracking-tight mt-1">
                All Projects
              </h1>
              <p className="mt-2 text-base text-[#777168] dark:text-slate-400 max-w-2xl font-sans">
                A complete directory of production architectures, distributed pipelines, applied AI agents, and developer tooling.
              </p>
            </div>

            <div className="text-xs font-mono text-[#777168] dark:text-slate-400">
              Showing {filteredProjects.length} of {projects.length} systems
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-[#777168] dark:text-slate-400 mr-2 flex items-center gap-1">
              <Filter className="w-3 h-3 text-[#B66A3C] dark:text-[#E28754]" />
              <span>Filter:</span>
            </span>

            {filterOptions.map((filter) => {
              const active = selectedFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    active
                      ? "bg-[#B66A3C] dark:bg-[#B66A3C] text-white font-semibold shadow-md shadow-[#B66A3C]/20 border border-[#B66A3C] dark:border-[#E28754]"
                      : "bg-[#EAE3D6] dark:bg-[#25211D] text-[#777168] dark:text-slate-400 hover:text-[#29251F] dark:hover:text-white border border-[rgba(24,25,31,0.1)] dark:border-white/[0.08] hover:border-[rgba(24,25,31,0.2)] dark:hover:border-white/[0.16]"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          {/* Projects Grid */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          {/* Applied AI & Systems Lab Deep Dive */}
          {selectedFilter === "All" && (
            <div className="mt-20 pt-16 border-t border-[rgba(24,25,31,0.1)] dark:border-white/[0.08]">
              <SystemsLab />
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
