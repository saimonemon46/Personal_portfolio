import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { systemsOverview, architectureTopologies } from "@/data/systems";
import { ArrowLeft, Shield, CheckCircle2 } from "lucide-react";

export default function SystemsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f6f4ee] dark:bg-[#0b0f19] text-[#18191f] dark:text-[#f1f5f9] transition-colors duration-200">
      <Navbar />

      <main className="flex-1 pt-28 sm:pt-36 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#5e606a] dark:text-slate-400 hover:text-[#18191f] dark:hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>

          {/* Header */}
          <div className="border-b border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] pb-8 mb-12">
            <div className="text-xs font-mono font-semibold tracking-wider text-[#163e91] dark:text-blue-400 uppercase">
              Architecture &amp; Reliability
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#18191f] dark:text-[#f1f5f9] tracking-tight mt-1">
              Systems Architecture
            </h1>
            <p className="mt-2 text-base text-[#5e606a] dark:text-slate-400 max-w-2xl font-sans">
              Predictable under failure, verified under concurrency, and decoupled by failure domains.
            </p>
          </div>

          {/* Core Principles Strip */}
          <div className="mb-14 p-6 sm:p-8 rounded-xl bg-[#fbf9f4] dark:bg-[#151d30] border border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] shadow-sm dark:shadow-xl">
            <h2 className="text-lg font-display font-bold text-[#18191f] dark:text-[#f1f5f9] mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#163e91] dark:text-blue-400" />
              <span>Core Architectural Principles</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {systemsOverview.principles.map((p) => (
                <div
                  key={p.name}
                  className="p-4 rounded-lg bg-[#f0ece1] dark:bg-[#070A0F] border border-[rgba(24,25,31,0.08)] dark:border-white/[0.05]"
                >
                  <div className="text-sm font-semibold text-[#163e91] dark:text-blue-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#163e91] dark:text-blue-400" />
                    <span>{p.name}</span>
                  </div>
                  <p className="mt-1.5 text-xs text-[#5e606a] dark:text-slate-400 leading-relaxed font-sans">
                    {p.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Topologies Detailed Breakdown */}
          <div className="space-y-16">
            {architectureTopologies.map((topo) => (
              <section
                key={topo.id}
                className="rounded-xl bg-[#fbf9f4] dark:bg-[#151d30] border border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] p-6 sm:p-8 shadow-sm dark:shadow-xl"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] mb-6">
                  <div>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-blue-500/10 text-[#163e91] dark:text-blue-400 border border-blue-500/20 font-semibold">
                      {topo.category}
                    </span>
                    <h2 className="text-2xl font-display font-bold text-[#18191f] dark:text-[#f1f5f9] mt-2">
                      {topo.title}
                    </h2>
                    <p className="text-xs sm:text-sm font-mono text-[#5e606a] dark:text-slate-400 mt-1">
                      {topo.tagline}
                    </p>
                  </div>
                </div>

                {/* Problem Space */}
                <div className="mb-6 p-4 rounded-lg bg-red-500/10 dark:bg-red-950/20 border border-red-500/20 text-xs sm:text-sm text-red-900 dark:text-red-200/90 leading-relaxed">
                  <span className="font-semibold font-mono text-red-600 dark:text-red-400 block mb-1">
                    $ PROBLEM_BOUNDARY:
                  </span>
                  {topo.problemSpace}
                </div>

                {/* ASCII Diagram */}
                <div className="mb-8 rounded-lg bg-[#10141d] dark:bg-[#070A0F] border border-slate-800 dark:border-white/[0.06] p-4 sm:p-6 overflow-x-auto">
                  <div className="text-[11px] font-mono text-slate-400 mb-2">
                    # Architectural Flow &amp; Data Pipeline
                  </div>
                  <pre className="font-mono text-xs text-blue-300 select-all leading-relaxed">
                    {topo.topologyAscii}
                  </pre>
                </div>

                {/* Components breakdown */}
                <div className="mb-6">
                  <h3 className="text-xs font-mono uppercase text-[#5e606a] dark:text-slate-400 tracking-wider mb-4">
                    Component Isolation &amp; Failure Modes
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {topo.components.map((comp) => (
                      <div
                        key={comp.name}
                        className="p-4 rounded-lg bg-[#f0ece1] dark:bg-[#070A0F] border border-[rgba(24,25,31,0.08)] dark:border-white/[0.05]"
                      >
                        <div className="text-sm font-semibold text-[#18191f] dark:text-slate-200">
                          {comp.name}
                        </div>
                        <p className="mt-1 text-xs text-[#5e606a] dark:text-slate-300 leading-relaxed font-sans">
                          {comp.role}
                        </p>
                        <div className="mt-2 pt-2 border-t border-[rgba(24,25,31,0.08)] dark:border-white/[0.04] text-[11px] font-mono text-emerald-700 dark:text-emerald-400/90 flex items-start gap-1">
                          <span className="text-[#5e606a] dark:text-slate-500">Recovery:</span>
                          <span>{comp.failureHandling}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer notes */}
                <div className="pt-4 border-t border-[rgba(24,25,31,0.08)] dark:border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-[#5e606a] dark:text-slate-400">
                  <div>
                    <span className="text-[#5e606a] dark:text-slate-500">Concurrency: </span>
                    <span className="text-[#18191f] dark:text-slate-300">{topo.concurrencyModel}</span>
                  </div>
                  <div>
                    <span className="text-[#5e606a] dark:text-slate-500">Recovery: </span>
                    <span className="text-emerald-700 dark:text-emerald-400">{topo.recoveryStrategy}</span>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
