"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { FileDown, MapPin, GraduationCap, ArrowRight, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { ArchitectureVisual } from "@/components/ArchitectureVisual";

export function Hero() {
  const stack = [
    "Python",
    "FastAPI",
    "Laravel",
    "PostgreSQL",
    "Redis",
    "RabbitMQ",
    "Docker",
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.09,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="relative pt-24 sm:pt-32 pb-16 lg:pb-24 overflow-hidden">
      {/* Background ambient glowing orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-gradient-to-tr from-[#163e91]/15 via-blue-500/10 to-emerald-500/5 dark:from-blue-600/15 dark:via-blue-400/10 dark:to-emerald-500/10 rounded-full blur-[130px] pointer-events-none animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column (55% on desktop -> 7 cols) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Eyebrow & Status */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#eeeae0] dark:bg-[#151d30] border border-[rgba(24,25,31,0.1)] dark:border-white/[0.08] text-[#18191f] dark:text-slate-300 shadow-sm hover:border-emerald-500/40 transition-colors">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="w-2 h-2 rounded-full bg-emerald-500 -ml-3.5" />
                <span>Open for Engineering Roles</span>
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-[#163e91]/10 dark:bg-blue-500/10 text-[#163e91] dark:text-blue-400 border border-[#163e91]/20 dark:border-blue-500/20 font-medium">
                Ex-Leotech • Imjol
              </span>
            </motion.div>

            {/* Name & Title */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-[#18191f] dark:text-[#f1f5f9] uppercase"
            >
              MD. Saimon Hasan Emon
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="mt-2 text-xl sm:text-2xl font-display font-semibold text-[#163e91] dark:text-blue-400 flex items-center flex-wrap gap-2"
            >
              <span>Software Engineer</span>
              <span className="text-[#8b8d97] dark:text-slate-500 font-light">|</span>
              <span className="bg-gradient-to-r from-[#163e91] to-[#2b5cd4] dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent">
                Backend &amp; Distributed Systems
              </span>
            </motion.div>

            {/* Summary */}
            <motion.p
              variants={itemVariants}
              className="mt-4 text-base sm:text-lg text-[#5e606a] dark:text-slate-300 leading-relaxed max-w-2xl font-sans"
            >
              I engineer resilient backend architectures, asynchronous distributed pipelines, real-time media clusters, and applied AI systems — where <strong>correctness is guaranteed</strong>, background queues scale reliably, and systems are built for production.
            </motion.p>

            {/* Quick metadata line */}
            <motion.div
              variants={itemVariants}
              className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-[#5e606a] dark:text-slate-400"
            >
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#163e91] dark:text-blue-400" />
                <span>Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-[#0b7a55] dark:text-emerald-400" />
                <span>B.Sc. CSE · IUBAT (CGPA 3.84)</span>
              </div>
            </motion.div>

            {/* Core Stack Pills */}
            <motion.div variants={itemVariants} className="mt-6 flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-[#8b8d97] dark:text-slate-500 mr-1 uppercase">Stack:</span>
              {stack.map((item) => (
                <motion.span
                  key={item}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="px-2.5 py-1 rounded bg-[#eeeae0] dark:bg-[#151d30] border border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] text-xs font-mono text-[#18191f] dark:text-slate-300 hover:border-[#163e91]/50 hover:text-[#163e91] dark:hover:text-blue-400 dark:hover:border-blue-400/40 transition-colors shadow-sm cursor-default"
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>

            {/* Call to Actions */}
            <motion.div variants={itemVariants} className="mt-8 flex flex-wrap items-center gap-3">
              <motion.a
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                href="/resume.pdf"
                download="Saimon_Hasan_Emon_Resume.pdf"
                className="relative group overflow-hidden flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#163e91] hover:bg-[#122f6d] dark:bg-blue-600 dark:hover:bg-blue-500 transition-all shadow-md shadow-blue-600/25 ring-1 ring-white/20"
              >
                <div className="absolute inset-0 w-1/2 h-full bg-white/10 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700 pointer-events-none" />
                <FileDown className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                href="https://github.com/saimonemon46"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-[#18191f] dark:text-slate-200 bg-[#eeeae0] hover:bg-[#e4decb] dark:bg-[#151d30] dark:hover:bg-[#1c263e] border border-[rgba(24,25,31,0.12)] dark:border-white/[0.12] hover:border-[#163e91]/40 dark:hover:border-blue-400/40 transition-all shadow-sm"
              >
                <GithubIcon className="w-4 h-4 text-[#18191f] dark:text-slate-300" />
                <span>GitHub</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                href="https://www.linkedin.com/in/md-saimon-hasan-emon-17739a324/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-[#18191f] dark:text-slate-200 bg-[#eeeae0] hover:bg-[#e4decb] dark:bg-[#151d30] dark:hover:bg-[#1c263e] border border-[rgba(24,25,31,0.12)] dark:border-white/[0.12] hover:border-[#163e91]/40 dark:hover:border-blue-400/40 transition-all shadow-sm"
              >
                <LinkedinIcon className="w-4 h-4 text-[#163e91] dark:text-blue-400" />
                <span>LinkedIn</span>
              </motion.a>

              <a
                href="#systems"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-[#5e606a] dark:text-slate-400 hover:text-[#18191f] dark:hover:text-white transition-colors ml-auto sm:ml-0 group"
              >
                <span>Featured Systems</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column (45% on desktop -> 5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            {/* Engineer Profile Card with subtle overlay */}
            <div className="relative group flex items-center gap-4 p-3.5 rounded-xl bg-[#fbf9f4] dark:bg-[#151d30] border border-[rgba(24,25,31,0.1)] dark:border-white/[0.08] shadow-sm hover:border-[#163e91]/30 dark:hover:border-blue-500/30 transition-all">
              <div className="relative w-14 h-14 rounded-lg overflow-hidden border border-[#163e91]/30 dark:border-blue-500/30 flex-shrink-0 group-hover:scale-105 transition-transform">
                <Image
                  src="/assets/profile/saimon_emon.jpg"
                  alt="MD. Saimon Hasan Emon"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] font-mono tracking-wider text-[#8b8d97] dark:text-slate-400 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#163e91] dark:text-blue-400" />
                  <span>ENGINEER VERIFICATION</span>
                </div>
                <div className="text-sm font-semibold text-[#18191f] dark:text-[#f1f5f9] truncate">
                  MD. Saimon Hasan Emon
                </div>
                <div className="text-xs text-[#0b7a55] dark:text-emerald-400 font-mono flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Active on Production Clusters
                </div>
              </div>
            </div>

            {/* Architecture Blueprint Visualizer */}
            <ArchitectureVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
