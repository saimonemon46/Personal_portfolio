"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { FileDown, MapPin, GraduationCap, ArrowRight } from "lucide-react";
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
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-gradient-to-tr from-[#B66A3C]/15 via-blue-500/10 to-emerald-500/5 dark:from-[#B66A3C]/15 dark:via-[#A58A62]/10 dark:to-emerald-500/10 rounded-full blur-[130px] pointer-events-none animate-pulse" />

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
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#B66A3C]/10 dark:bg-[#B66A3C]/15 text-[#B66A3C] dark:text-[#E28754] border border-[#B66A3C]/20 dark:border-[#E28754]/20 font-semibold uppercase tracking-wider">
                Software Engineer · Backend &amp; Distributed Systems
              </span>
            </motion.div>

            {/* Headline H1 */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-[#29251F] dark:text-[#F5F1E8]"
            >
              I build backend systems that solve real engineering problems.
            </motion.h1>

            {/* Summary */}
            <motion.p
              variants={itemVariants}
              className="mt-4 text-base sm:text-lg text-[#777168] dark:text-slate-300 leading-relaxed max-w-2xl font-sans"
            >
              Software engineer focused on backend development, distributed systems, and applied AI. I work with Python, FastAPI, Laravel, and PostgreSQL to build APIs, asynchronous workflows, and practical software products.
            </motion.p>

            {/* Quick metadata line */}
            <motion.div
              variants={itemVariants}
              className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-[#777168] dark:text-slate-400"
            >
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#B66A3C] dark:text-[#E28754]" />
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
                  className="px-2.5 py-1 rounded bg-[#EAE3D6] dark:bg-[#25211D] border border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] text-xs font-mono text-[#29251F] dark:text-slate-300 hover:border-[#B66A3C]/50 hover:text-[#B66A3C] dark:hover:text-[#E28754] dark:hover:border-blue-400/40 transition-colors shadow-sm cursor-default"
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
                href="#work"
                className="relative group overflow-hidden flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#B66A3C] hover:bg-[#96532B] dark:bg-[#B66A3C] dark:hover:bg-[#CC7B4A] transition-all shadow-md shadow-[#B66A3C]/20"
              >
                <span>Explore Selected Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                href="/resume.pdf"
                download="Saimon_Hasan_Emon_Resume.pdf"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-[#29251F] dark:text-slate-200 bg-[#EAE3D6] hover:bg-[#DCD3C5] dark:bg-[#25211D] dark:hover:bg-[#1E1B18] border border-[rgba(24,25,31,0.12)] dark:border-white/[0.12] hover:border-[#B66A3C]/40 dark:hover:border-blue-400/40 transition-all shadow-sm"
              >
                <FileDown className="w-4 h-4 text-[#B66A3C] dark:text-[#E28754]" />
                <span>Download Resume</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                href="https://github.com/saimonemon46"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-[#29251F] dark:text-slate-200 bg-[#EAE3D6] hover:bg-[#DCD3C5] dark:bg-[#25211D] dark:hover:bg-[#1E1B18] border border-[rgba(24,25,31,0.12)] dark:border-white/[0.12] hover:border-[#B66A3C]/40 dark:hover:border-blue-400/40 transition-all shadow-sm"
              >
                <GithubIcon className="w-4 h-4 text-[#29251F] dark:text-slate-300" />
                <span>GitHub</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                href="https://www.linkedin.com/in/md-saimon-hasan-emon-17739a324/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-[#29251F] dark:text-slate-200 bg-[#EAE3D6] hover:bg-[#DCD3C5] dark:bg-[#25211D] dark:hover:bg-[#1E1B18] border border-[rgba(24,25,31,0.12)] dark:border-white/[0.12] hover:border-[#B66A3C]/40 dark:hover:border-blue-400/40 transition-all shadow-sm"
              >
                <LinkedinIcon className="w-4 h-4 text-[#B66A3C] dark:text-[#E28754]" />
                <span>LinkedIn</span>
              </motion.a>
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
            <div className="relative group flex items-center gap-4 p-3.5 rounded-xl bg-[#FFFCF6] dark:bg-[#25211D] border border-[rgba(24,25,31,0.1)] dark:border-white/[0.08] shadow-sm hover:border-[#B66A3C]/30 dark:hover:border-blue-500/30 transition-all">
              <div className="relative w-14 h-14 rounded-lg overflow-hidden border border-[#B66A3C]/30 dark:border-[#E28754]/30 flex-shrink-0 group-hover:scale-105 transition-transform">
                <Image
                  src="/assets/profile/saimon_emon.jpg"
                  alt="MD. Saimon Hasan Emon"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] font-mono tracking-wider text-[#8b8d97] dark:text-slate-400">
                  SOFTWARE ENGINEER
                </div>
                <div className="text-sm font-semibold text-[#29251F] dark:text-[#F5F1E8] truncate">
                  MD. Saimon Hasan Emon
                </div>
                <div className="text-xs text-[#0b7a55] dark:text-emerald-400 font-mono flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Software Engineer @ Imjol · B.Sc. CSE (3.84)
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
