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
      {/* Background ambient warm glowing orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-gradient-to-tr from-[#A4472D]/12 via-[#E3A56E]/10 to-[#28664F]/5 dark:from-[#A4472D]/15 dark:via-[#E3A56E]/10 dark:to-[#8EC5A5]/5 rounded-full blur-[130px] pointer-events-none" />

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
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#A4472D]/10 dark:bg-[#E3A56E]/15 text-[#A4472D] dark:text-[#E3A56E] border border-[#A4472D]/20 dark:border-[#E3A56E]/20 font-semibold uppercase tracking-wider">
                Software Engineer · Backend &amp; Distributed Systems
              </span>
            </motion.div>

            {/* Headline H1 */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-[#20251F] dark:text-[#F1EDE3]"
            >
              I build backend systems that solve real engineering problems.
            </motion.h1>

            {/* Summary */}
            <motion.p
              variants={itemVariants}
              className="mt-4 text-base sm:text-lg text-[#626A60] dark:text-[#B2B7AB] leading-relaxed max-w-2xl font-sans"
            >
              Software engineer focused on backend development, distributed systems, and applied AI. I work with Python, FastAPI, Laravel, and PostgreSQL to build APIs, asynchronous workflows, and practical software products.
            </motion.p>

            {/* Quick metadata line */}
            <motion.div
              variants={itemVariants}
              className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-[#626A60] dark:text-[#B2B7AB]"
            >
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#A4472D] dark:text-[#E3A56E]" />
                <span>Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-[#28664F] dark:text-[#8EC5A5]" />
                <span>B.Sc. CSE · IUBAT (CGPA 3.84)</span>
              </div>
            </motion.div>

            {/* Core Stack Pills */}
            <motion.div variants={itemVariants} className="mt-6 flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-[#626A60] dark:text-[#B2B7AB] mr-1 uppercase">Stack:</span>
              {stack.map((item) => (
                <motion.span
                  key={item}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="px-2.5 py-1 rounded bg-[#EEE9DE] dark:bg-[#1F2520] border border-[#D9D2C3] dark:border-[#394139] text-xs font-mono text-[#20251F] dark:text-[#F1EDE3] hover:border-[#A4472D]/50 hover:text-[#A4472D] dark:hover:text-[#E3A56E] dark:hover:border-[#E3A56E]/40 transition-colors shadow-xs cursor-default"
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
                className="relative group overflow-hidden flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white dark:text-[#151916] bg-[#A4472D] hover:bg-[#873A26] dark:bg-[#E3A56E] dark:hover:bg-[#F0B981] transition-all shadow-md shadow-[#A4472D]/20 dark:shadow-[#E3A56E]/15 cursor-pointer"
              >
                <span>Explore Selected Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                href="/resume.pdf"
                download="Saimon_Hasan_Emon_Resume.pdf"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-[#20251F] dark:text-[#F1EDE3] bg-[#EEE9DE] hover:bg-[#D9D2C3] dark:bg-[#1F2520] dark:hover:bg-[#252D27] border border-[#D9D2C3] dark:border-[#394139] hover:border-[#A4472D]/40 dark:hover:border-[#E3A56E]/40 transition-all shadow-xs"
              >
                <FileDown className="w-4 h-4 text-[#A4472D] dark:text-[#E3A56E]" />
                <span>Download Resume</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                href="https://github.com/saimonemon46"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-[#20251F] dark:text-[#F1EDE3] bg-[#EEE9DE] hover:bg-[#D9D2C3] dark:bg-[#1F2520] dark:hover:bg-[#252D27] border border-[#D9D2C3] dark:border-[#394139] hover:border-[#A4472D]/40 dark:hover:border-[#E3A56E]/40 transition-all shadow-xs"
              >
                <GithubIcon className="w-4 h-4 text-[#20251F] dark:text-[#F1EDE3]" />
                <span>GitHub</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                href="https://www.linkedin.com/in/md-saimon-hasan-emon-17739a324/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-[#20251F] dark:text-[#F1EDE3] bg-[#EEE9DE] hover:bg-[#D9D2C3] dark:bg-[#1F2520] dark:hover:bg-[#252D27] border border-[#D9D2C3] dark:border-[#394139] hover:border-[#A4472D]/40 dark:hover:border-[#E3A56E]/40 transition-all shadow-xs"
              >
                <LinkedinIcon className="w-4 h-4 text-[#A4472D] dark:text-[#E3A56E]" />
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
            {/* Engineer Profile Card */}
            <div className="relative group flex items-center gap-4 p-3.5 rounded-xl bg-[#FFFCF5] dark:bg-[#1F2520] border border-[#D9D2C3] dark:border-[#394139] shadow-xs hover:border-[#A4472D]/30 dark:hover:border-[#E3A56E]/30 transition-all">
              <div className="relative w-14 h-14 rounded-lg overflow-hidden border border-[#A4472D]/30 dark:border-[#E3A56E]/30 flex-shrink-0 group-hover:scale-105 transition-transform">
                <Image
                  src="/assets/profile/saimon_emon.jpg"
                  alt="MD. Saimon Hasan Emon"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] font-mono tracking-wider text-[#626A60] dark:text-[#B2B7AB]">
                  SOFTWARE ENGINEER
                </div>
                <div className="text-sm font-semibold text-[#20251F] dark:text-[#F1EDE3] truncate">
                  MD. Saimon Hasan Emon
                </div>
                <div className="text-xs text-[#28664F] dark:text-[#8EC5A5] font-mono flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#28664F] dark:bg-[#8EC5A5]"></span>
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
