"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Shield, RefreshCw, Database, Terminal, Cpu } from "lucide-react";
import { systemsOverview } from "@/data/systems";

export function SystemsBlueprint() {
  const [activeTopologyMode, setActiveTopologyMode] = useState<"standard" | "locust" | "fault">("standard");

  const topologyAsciiMaps = {
    standard: `                      Clients
                   Web / Mobile
                         │ (HTTP / WebSocket)
                         ▼
                   ┌──────────┐
                   │ FastAPI  │ (Token Bucket Rate Limiting)
                   └────┬─────┘
                        │
       ┌────────────────┼────────────────┐
       ▼                ▼                ▼
     Redis          RabbitMQ          PostgreSQL
 (Distributed      (Durable Task    (B-Tree Indexes
  Locks SETNX)       Queues)        Pessimistic Locks)
                        │
                        ▼
                     Workers
                 (Async Compute)
                        │
                        ▼
                      MinIO
                 (S3 Object Store)`,

    locust: `            Locust Load Cluster (1000+ QPS)
          50 Virtual Users Concurrency
                         │
                         ▼
                 ┌───────────────┐
                 │ FastAPI (ASGI)│ ──> P95: 14ms (Audited)
                 └───────┬───────┘
                         │
       ┌─────────────────┴─────────────────┐
       ▼                                   ▼
  Redis Cache (98.6%)              PostgreSQL Engine
  (Sub-millisecond)          (SELECT FOR UPDATE Locking)
       │                                   │
       ▼                                   ▼
 [0 Cache Stampedes]              [Mathematical Zero-Drift]`,

    fault: `             Host Network Partition Event
            Worker Node Crash Simulation
                         │
                         ▼
                 ┌───────────────┐
                 │ RabbitMQ (DLX)│ ──> Dead-Letter Queue
                 └───────┬───────┘
                         │
       ┌─────────────────┴─────────────────┐
       ▼                                   ▼
  Idempotency Check                  Canonical Locking
  (Redis Key Lock)                  (Lock A -> Lock B)
       │                                   │
       ▼                                   ▼
 [Automatic Retry x3]               [0 Cyclic Deadlocks]`
  };

  return (
    <section id="systems" className="scroll-mt-20 py-20 lg:py-28 relative border-t border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
        >
          <div>
            <div className="text-xs font-mono font-semibold tracking-wider text-[#163e91] dark:text-blue-400 uppercase">
              {systemsOverview.kicker}
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#18191f] dark:text-[#f1f5f9] tracking-tight mt-1">
              {systemsOverview.title}
            </h2>
            <p className="mt-2 text-base text-[#5e606a] dark:text-slate-400 max-w-2xl font-sans">
              {systemsOverview.subtitle}
            </p>
          </div>

          <Link
            href="/systems"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-[#18191f] hover:text-[#163e91] dark:text-slate-300 dark:hover:text-white bg-[#fbf9f4] hover:bg-[#f0ece1] dark:bg-[#151d30] dark:hover:bg-[#111726] border border-[rgba(24,25,31,0.12)] dark:border-white/[0.08] hover:border-[#163e91]/40 dark:hover:border-blue-500/40 transition-all self-start md:self-auto group shadow-sm"
          >
            <span>Explore Architecture Topologies</span>
            <ArrowRight className="w-4 h-4 text-[#163e91] dark:text-blue-400 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Blueprint Visual & Principles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Blueprint Terminal Block (7 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 rounded-xl bg-[#fbf9f4] dark:bg-[#151d30] border border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] p-3.5 sm:p-5 lg:p-6 shadow-sm dark:shadow-2xl overflow-hidden hover:border-[#163e91]/30 dark:hover:border-blue-500/30 transition-all"
          >
            {/* Top Bar with Mode Switchers */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-3 sm:pb-4 border-b border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] mb-3 sm:mb-4 text-xs font-mono">
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-[#163e91] dark:text-blue-400 flex-shrink-0" />
                <span className="text-[#163e91] dark:text-blue-400 font-semibold text-[11px] sm:text-xs">$ topology --mode={activeTopologyMode}</span>
              </div>

              {/* Mode Selector Buttons */}
              <div className="grid grid-cols-3 sm:flex items-center gap-1 bg-[#f0ece1] dark:bg-[#070A0F] p-1 rounded-lg border border-[rgba(24,25,31,0.06)] dark:border-white/[0.06] w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setActiveTopologyMode("standard")}
                  className={`text-center px-2 py-1 rounded text-[10px] sm:text-[11px] font-mono transition-all cursor-pointer whitespace-nowrap ${
                    activeTopologyMode === "standard"
                      ? "bg-[#163e91] text-white dark:bg-blue-600 font-bold shadow-xs"
                      : "text-[#5e606a] dark:text-slate-400 hover:text-[#18191f] dark:hover:text-white"
                  }`}
                >
                  Standard
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTopologyMode("locust")}
                  className={`text-center px-2 py-1 rounded text-[10px] sm:text-[11px] font-mono transition-all cursor-pointer whitespace-nowrap ${
                    activeTopologyMode === "locust"
                      ? "bg-amber-600 text-white dark:bg-amber-600 font-bold shadow-xs"
                      : "text-[#5e606a] dark:text-slate-400 hover:text-[#18191f] dark:hover:text-white"
                  }`}
                >
                  Locust 1k
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTopologyMode("fault")}
                  className={`text-center px-2 py-1 rounded text-[10px] sm:text-[11px] font-mono transition-all cursor-pointer whitespace-nowrap ${
                    activeTopologyMode === "fault"
                      ? "bg-emerald-700 text-white dark:bg-emerald-600 font-bold shadow-xs"
                      : "text-[#5e606a] dark:text-slate-400 hover:text-[#18191f] dark:hover:text-white"
                  }`}
                >
                  Fault DLX
                </button>
              </div>
            </div>

            {/* Ascii Blueprint Map with Animated Transition */}
            <div className="bg-[#10141d] dark:bg-[#070A0F] rounded-lg p-2.5 sm:p-4 lg:p-5 font-mono overflow-x-auto border border-slate-800 dark:border-white/[0.05] shadow-inner min-h-[250px] sm:min-h-[280px] w-full flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.pre
                  key={activeTopologyMode}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className={`select-all font-mono text-[8px] min-[360px]:text-[9px] min-[400px]:text-[10px] sm:text-xs md:text-[12.5px] leading-[1.3] sm:leading-relaxed whitespace-pre w-fit mx-auto ${
                    activeTopologyMode === "locust"
                      ? "text-amber-400 dark:text-amber-300"
                      : activeTopologyMode === "fault"
                      ? "text-emerald-400 dark:text-emerald-300"
                      : "text-blue-400 dark:text-blue-300"
                  }`}
                >
                  {topologyAsciiMaps[activeTopologyMode]}
                </motion.pre>
              </AnimatePresence>
            </div>

            <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 text-[11px] sm:text-xs font-mono text-[#5e606a] dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400 flex-shrink-0" />
                Zero Deadlocks (Canonical)
              </span>
              <span className="flex items-center gap-1.5">
                <RefreshCw className="w-3.5 h-3.5 text-[#163e91] dark:text-blue-400 flex-shrink-0" />
                Idempotency Check-and-Set
              </span>
              <span className="flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400 flex-shrink-0" />
                Zero-Drift Balance Conservation
              </span>
            </div>
          </motion.div>

          {/* Core Principles List (5 cols) */}
          <div id="invariants" className="scroll-mt-24 lg:col-span-5 flex flex-col gap-4">
            <div className="text-xs font-mono uppercase text-[#5e606a] dark:text-slate-400 font-semibold tracking-wider flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-[#163e91] dark:text-blue-400" />
              <span>Engineering Principles</span>
            </div>

            <div className="space-y-3">
              {systemsOverview.principles.map((principle, pIdx) => (
                <motion.div
                  key={principle.name}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: pIdx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ x: 4 }}
                  className="p-4 rounded-lg bg-[#fbf9f4] dark:bg-[#151d30] border border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] hover:border-[#163e91]/40 dark:hover:border-blue-500/40 transition-all shadow-sm cursor-default group"
                >
                  <div className="flex items-center gap-2 text-sm font-display font-semibold text-[#18191f] dark:text-[#f1f5f9]">
                    <CheckCircle2 className="w-4 h-4 text-[#163e91] dark:text-blue-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="group-hover:text-[#163e91] dark:group-hover:text-blue-400 transition-colors">{principle.name}</span>
                  </div>
                  <p className="mt-1.5 text-xs text-[#5e606a] dark:text-slate-300/80 leading-relaxed pl-6 font-sans">
                    {principle.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
