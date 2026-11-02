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

    locust: `       Locust Load Benchmark (1,023.8 RPS)
        15,241 Total Transactions (0% Errors)
                         │
                         ▼
                 ┌───────────────┐
                 │ FastAPI (ASGI)│ ──> P95: 80ms (42ms Median)
                 └───────┬───────┘
                         │
       ┌─────────────────┴─────────────────┐
       ▼                                   ▼
  Redis Cache & Mutex               PostgreSQL Engine
  (Sub-millisecond)           (SELECT FOR UPDATE Locking)
       │                                   │
       ▼                                   ▼
 [0 Duplicate Charges]            [0.00 Mathematical Drift]`,

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
    <section id="systems" className="scroll-mt-20 py-20 lg:py-28 relative border-t border-[#D9D2C3] dark:border-[#394139] transition-colors overflow-hidden">
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
            <div className="text-xs font-mono font-semibold tracking-wider text-[#A4472D] dark:text-[#E3A56E] uppercase">
              {systemsOverview.kicker}
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#20251F] dark:text-[#F1EDE3] tracking-tight mt-1">
              {systemsOverview.title}
            </h2>
            <p className="mt-2 text-base text-[#626A60] dark:text-[#B2B7AB] max-w-2xl font-sans">
              {systemsOverview.subtitle}
            </p>
          </div>

          <Link
            href="/systems"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-[#20251F] hover:text-[#A4472D] dark:text-[#F1EDE3] dark:hover:text-[#E3A56E] bg-[#FFFCF5] hover:bg-[#EEE9DE] dark:bg-[#1F2520] dark:hover:bg-[#252D27] border border-[#D9D2C3] dark:border-[#394139] hover:border-[#A4472D]/40 dark:hover:border-[#E3A56E]/40 transition-all self-start md:self-auto group shadow-sm"
          >
            <span>Explore Architecture Topologies</span>
            <ArrowRight className="w-4 h-4 text-[#A4472D] dark:text-[#E3A56E] group-hover:translate-x-1 transition-transform" />
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
            className="lg:col-span-7 rounded-xl bg-[#FFFCF5] dark:bg-[#1F2520] border border-[#D9D2C3] dark:border-[#394139] p-3.5 sm:p-5 lg:p-6 shadow-sm overflow-hidden hover:border-[#A4472D]/40 dark:hover:border-[#E3A56E]/40 transition-all"
          >
            {/* Top Bar with Mode Switchers */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-3 sm:pb-4 border-b border-[#D9D2C3] dark:border-[#394139] mb-3 sm:mb-4 text-xs font-mono">
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-[#A4472D] dark:text-[#E3A56E] flex-shrink-0" />
                <span className="text-[#A4472D] dark:text-[#E3A56E] font-semibold text-[11px] sm:text-xs">
                  $ topology --mode={activeTopologyMode} <span className="text-[10px] text-[#626A60] dark:text-[#B2B7AB] font-normal hidden sm:inline">(Conceptual Architecture &amp; Benchmark)</span>
                </span>
              </div>

              {/* Mode Selector Buttons */}
              <div className="grid grid-cols-3 sm:flex items-center gap-1 bg-[#EEE9DE] dark:bg-[#151916] p-1 rounded-lg border border-[#D9D2C3] dark:border-[#394139] w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setActiveTopologyMode("standard")}
                  className={`text-center px-2 py-1 rounded text-[10px] sm:text-[11px] font-mono transition-all cursor-pointer whitespace-nowrap ${
                    activeTopologyMode === "standard"
                      ? "bg-[#A4472D] text-white dark:bg-[#E3A56E] dark:text-[#151916] font-bold shadow-xs"
                      : "text-[#626A60] dark:text-[#B2B7AB] hover:text-[#20251F] dark:hover:text-[#F1EDE3]"
                  }`}
                >
                  Standard
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTopologyMode("locust")}
                  className={`text-center px-2 py-1 rounded text-[10px] sm:text-[11px] font-mono transition-all cursor-pointer whitespace-nowrap ${
                    activeTopologyMode === "locust"
                      ? "bg-[#8A5A17] text-white dark:bg-[#E6BD76] dark:text-[#151916] font-bold shadow-xs"
                      : "text-[#626A60] dark:text-[#B2B7AB] hover:text-[#20251F] dark:hover:text-[#F1EDE3]"
                  }`}
                >
                  Locust 1k
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTopologyMode("fault")}
                  className={`text-center px-2 py-1 rounded text-[10px] sm:text-[11px] font-mono transition-all cursor-pointer whitespace-nowrap ${
                    activeTopologyMode === "fault"
                      ? "bg-[#28664F] text-white dark:bg-[#8EC5A5] dark:text-[#151916] font-bold shadow-xs"
                      : "text-[#626A60] dark:text-[#B2B7AB] hover:text-[#20251F] dark:hover:text-[#F1EDE3]"
                  }`}
                >
                  Fault DLX
                </button>
              </div>
            </div>

            {/* Ascii Blueprint Map with Animated Transition */}
            <div className="bg-[#EEE9DE]/80 dark:bg-[#151916] rounded-lg p-2.5 sm:p-4 lg:p-5 font-mono overflow-x-auto border border-[#D9D2C3] dark:border-[#394139] shadow-xs min-h-[250px] sm:min-h-[280px] w-full flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.pre
                  key={activeTopologyMode}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className={`select-all font-mono text-[8px] min-[360px]:text-[9px] min-[400px]:text-[10px] sm:text-xs md:text-[12.5px] leading-[1.3] sm:leading-relaxed whitespace-pre w-fit mx-auto ${
                    activeTopologyMode === "locust"
                      ? "text-[#8A5A17] dark:text-[#E6BD76] font-semibold"
                      : activeTopologyMode === "fault"
                      ? "text-[#28664F] dark:text-[#8EC5A5] font-semibold"
                      : "text-[#A4472D] dark:text-[#E3A56E] font-medium"
                  }`}
                >
                  {topologyAsciiMaps[activeTopologyMode]}
                </motion.pre>
              </AnimatePresence>
            </div>

            <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-[#D9D2C3] dark:border-[#394139] grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 text-[11px] sm:text-xs font-mono text-[#626A60] dark:text-[#B2B7AB]">
              <span className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#28664F] dark:text-[#8EC5A5] flex-shrink-0" />
                Zero Deadlocks (Canonical)
              </span>
              <span className="flex items-center gap-1.5">
                <RefreshCw className="w-3.5 h-3.5 text-[#A4472D] dark:text-[#E3A56E] flex-shrink-0" />
                Idempotency Check-and-Set
              </span>
              <span className="flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-[#8A5A17] dark:text-[#E6BD76] flex-shrink-0" />
                Zero-Drift Balance Conservation
              </span>
            </div>
          </motion.div>

          {/* Core Principles List (5 cols) */}
          <div id="invariants" className="scroll-mt-24 lg:col-span-5 flex flex-col gap-4">
            <div className="text-xs font-mono uppercase text-[#626A60] dark:text-[#B2B7AB] font-semibold tracking-wider flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-[#A4472D] dark:text-[#E3A56E]" />
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
                  className="p-4 rounded-lg bg-[#FFFCF5] dark:bg-[#1F2520] border border-[#D9D2C3] dark:border-[#394139] hover:border-[#A4472D]/40 dark:hover:border-[#E3A56E]/40 transition-all shadow-sm cursor-default group"
                >
                  <div className="flex items-center gap-2 text-sm font-display font-semibold text-[#20251F] dark:text-[#F1EDE3]">
                    <CheckCircle2 className="w-4 h-4 text-[#A4472D] dark:text-[#E3A56E] flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="group-hover:text-[#A4472D] dark:group-hover:text-[#E3A56E] transition-colors">{principle.name}</span>
                  </div>
                  <p className="mt-1.5 text-xs text-[#626A60] dark:text-[#B2B7AB] leading-relaxed pl-6 font-sans">
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
