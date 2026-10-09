"use client";

import { useState } from "react";
import { Activity, ShieldCheck, Zap, Layers } from "lucide-react";

export function ArchitectureVisual() {
  const [isBursting, setIsBursting] = useState(false);
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [logMessage, setLogMessage] = useState(
    "Steady state: Token-bucket rate limiter active (0 dropped packets)."
  );

  const handleSimulateBurst = () => {
    if (isBursting) return;
    setIsBursting(true);
    setLogMessage("Traffic spike: Ingesting 1,248 QPS across 4 worker threads...");

    setTimeout(() => {
      setLogMessage(
        "Spike absorbed: Redis distributed lock acquired (SETNX), 0 deadlocks, P95: 14ms."
      );
      setIsBursting(false);
    }, 2800);
  };

  const packetDuration = isBursting ? "0.7s" : "1.8s";

  return (
    <div className="w-full rounded-xl bg-[#0D1117] border border-white/[0.08] shadow-2xl overflow-hidden transition-all duration-300 hover:border-blue-500/40 group">
      {/* Console titlebar */}
      <div className="px-4 py-3 bg-[#070A0F]/90 border-b border-white/[0.08] flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="text-slate-400 pl-2 text-[11px]">production_traffic_topology.sys</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            {isBursting ? "BURST SPIKE" : "ONLINE"}
          </span>
        </div>
      </div>

      {/* Telemetry nodes bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/[0.05] border-b border-white/[0.08]">
        <div className="bg-[#0D1117] p-3 text-center sm:text-left transition-colors hover:bg-white/[0.02]">
          <div className="text-[10px] uppercase font-mono text-slate-400">Throughput</div>
          <div className="text-sm font-mono font-bold text-slate-100 flex items-center justify-center sm:justify-start gap-1 mt-0.5">
            <Activity className={`w-3.5 h-3.5 ${isBursting ? "text-amber-400 animate-pulse" : "text-blue-400"}`} />
            <span className={isBursting ? "text-amber-300" : ""}>{isBursting ? "1,248 qps" : "480 qps"}</span>
          </div>
        </div>
        <div className="bg-[#0D1117] p-3 text-center sm:text-left transition-colors hover:bg-white/[0.02]">
          <div className="text-[10px] uppercase font-mono text-slate-400">P95 Latency</div>
          <div className="text-sm font-mono font-bold text-slate-100 flex items-center justify-center sm:justify-start gap-1 mt-0.5">
            <Zap className={`w-3.5 h-3.5 ${isBursting ? "text-amber-400" : "text-emerald-400"}`} />
            <span className={isBursting ? "text-amber-300" : ""}>{isBursting ? "14 ms" : "8 ms"}</span>
          </div>
        </div>
        <div className="bg-[#0D1117] p-3 text-center sm:text-left transition-colors hover:bg-white/[0.02]">
          <div className="text-[10px] uppercase font-mono text-slate-400">Cache Hit</div>
          <div className="text-sm font-mono font-bold text-slate-100 flex items-center justify-center sm:justify-start gap-1 mt-0.5">
            <Layers className="w-3.5 h-3.5 text-emerald-400" />
            <span>98.6%</span>
          </div>
        </div>
        <div className="bg-[#0D1117] p-3 text-center sm:text-left transition-colors hover:bg-white/[0.02]">
          <div className="text-[10px] uppercase font-mono text-slate-400">Deadlocks</div>
          <div className="text-sm font-mono font-bold text-emerald-400 flex items-center justify-center sm:justify-start gap-1 mt-0.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>0 (ZeroDrift)</span>
          </div>
        </div>
      </div>

      {/* SVG Architecture Diagram */}
      <div className="p-4 sm:p-6 bg-[#0B0F17] relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />

        {/* Subtle scan beam effect during burst */}
        {isBursting && (
          <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-beam-scan pointer-events-none" />
        )}

        <div className="relative">
          <svg
            viewBox="0 0 540 240"
            className="w-full h-auto drop-shadow-md select-none"
            aria-label="System Architecture Flowchart"
          >
            <defs>
              <linearGradient id="blueGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#60A5FA" />
              </linearGradient>
              <linearGradient id="emeraldGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10B981" />
                <stop offset="100%" stopColor="#34D399" />
              </linearGradient>
              <linearGradient id="amberGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#FBBF24" />
              </linearGradient>
              <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Connecting Flow Paths */}
            {/* Client -> FastAPI */}
            <path
              id="path-client-fastapi"
              d="M 85 70 L 155 70"
              stroke="#3B82F6"
              strokeWidth="2"
              fill="none"
              className="animate-dash-flow"
            />
            {/* FastAPI -> Redis */}
            <path
              id="path-fastapi-redis"
              d="M 195 98 L 195 160 L 305 160"
              stroke="#F59E0B"
              strokeWidth="2"
              fill="none"
              className="animate-dash-flow"
            />
            {/* FastAPI -> RabbitMQ */}
            <path
              id="path-fastapi-rabbitmq"
              d="M 235 70 L 305 70"
              stroke="#3B82F6"
              strokeWidth="2"
              fill="none"
              className="animate-dash-flow"
            />
            {/* RabbitMQ -> Workers */}
            <path
              id="path-rabbitmq-workers"
              d="M 385 70 L 455 70"
              stroke="#3B82F6"
              strokeWidth="2"
              fill="none"
              className="animate-dash-flow"
            />
            {/* Workers -> MinIO / Postgres */}
            <path
              id="path-workers-storage"
              d="M 495 98 L 495 132"
              stroke="#10B981"
              strokeWidth="2"
              fill="none"
              className="animate-dash-flow"
            />

            {/* Animated Data Packets Flowing Along Paths */}
            {/* Packet 1: Client to FastAPI */}
            <circle r={isBursting ? "4" : "3"} fill="#60A5FA" filter="url(#glowFilter)">
              <animateMotion
                path="M 85 70 L 155 70"
                dur={packetDuration}
                repeatCount="indefinite"
              />
            </circle>

            {/* Packet 2: FastAPI to RabbitMQ */}
            <circle r={isBursting ? "4" : "3"} fill="#60A5FA" filter="url(#glowFilter)">
              <animateMotion
                path="M 235 70 L 305 70"
                dur={packetDuration}
                repeatCount="indefinite"
                begin="0.3s"
              />
            </circle>

            {/* Packet 3: RabbitMQ to Workers */}
            <circle r={isBursting ? "4" : "3"} fill="#93C5FD" filter="url(#glowFilter)">
              <animateMotion
                path="M 385 70 L 455 70"
                dur={packetDuration}
                repeatCount="indefinite"
                begin="0.6s"
              />
            </circle>

            {/* Packet 4: Workers to Storage */}
            <circle r={isBursting ? "4" : "3"} fill="#34D399" filter="url(#glowFilter)">
              <animateMotion
                path="M 495 98 L 495 132"
                dur={packetDuration}
                repeatCount="indefinite"
                begin="0.9s"
              />
            </circle>

            {/* Packet 5: FastAPI to Redis Cache */}
            <circle r={isBursting ? "4" : "3"} fill="#FBBF24" filter="url(#glowFilter)">
              <animateMotion
                path="M 195 98 L 195 160 L 305 160"
                dur={packetDuration}
                repeatCount="indefinite"
                begin="0.5s"
              />
            </circle>

            {/* NODE 1: Client Gateway */}
            <g
              className="cursor-pointer"
              onMouseEnter={() => setActiveNode("Client: External HTTP/WebSocket traffic entrypoint")}
              onMouseLeave={() => setActiveNode(null)}
            >
              <rect
                x="10"
                y="42"
                width="75"
                height="56"
                rx="6"
                fill="#0D1117"
                stroke="#3B82F6"
                strokeWidth="1.5"
                strokeOpacity="0.6"
                className="transition-all hover:stroke-[#60A5FA] hover:stroke-width-2"
              />
              <text x="20" y="65" fill="#60A5FA" fontFamily="var(--font-jetbrains-mono)" fontSize="11" fontWeight="700">
                Client
              </text>
              <text x="18" y="82" fill="#94A3B8" fontFamily="var(--font-inter)" fontSize="9">
                Web / API
              </text>
            </g>

            {/* NODE 2: FastAPI Gateway */}
            <g
              className="cursor-pointer"
              onMouseEnter={() => setActiveNode("FastAPI: Asynchronous ASGI gateway with Token Bucket rate limiting")}
              onMouseLeave={() => setActiveNode(null)}
            >
              <rect
                x="155"
                y="42"
                width="80"
                height="56"
                rx="6"
                fill="#0D1117"
                stroke={isBursting ? "#F59E0B" : "#3B82F6"}
                strokeWidth={isBursting ? "2.5" : "1.5"}
                strokeOpacity="0.9"
                className="transition-all hover:stroke-[#60A5FA]"
              />
              <text x="165" y="65" fill="#3B82F6" fontFamily="var(--font-jetbrains-mono)" fontSize="11" fontWeight="700">
                FastAPI
              </text>
              <text x="162" y="82" fill="#94A3B8" fontFamily="var(--font-inter)" fontSize="9">
                ASGI Ingest
              </text>
            </g>

            {/* NODE 3: RabbitMQ Task Broker */}
            <g
              className="cursor-pointer"
              onMouseEnter={() => setActiveNode("RabbitMQ: Durable AMQP broker decoupling HTTP from heavy async compute")}
              onMouseLeave={() => setActiveNode(null)}
            >
              <rect
                x="305"
                y="42"
                width="80"
                height="56"
                rx="6"
                fill="#0D1117"
                stroke="#3B82F6"
                strokeWidth="1.5"
                strokeOpacity="0.7"
                className="transition-all hover:stroke-[#93C5FD]"
              />
              <text x="312" y="65" fill="#93C5FD" fontFamily="var(--font-jetbrains-mono)" fontSize="11" fontWeight="700">
                RabbitMQ
              </text>
              <text x="312" y="82" fill="#94A3B8" fontFamily="var(--font-inter)" fontSize="9">
                Task Broker
              </text>
            </g>

            {/* NODE 4: Workers Fleet */}
            <g
              className="cursor-pointer"
              onMouseEnter={() => setActiveNode("Python Workers: Autonomous background processes with idempotent ACK handling")}
              onMouseLeave={() => setActiveNode(null)}
            >
              <rect
                x="455"
                y="42"
                width="78"
                height="56"
                rx="6"
                fill="#0D1117"
                stroke="#10B981"
                strokeWidth={isBursting ? "2.5" : "1.5"}
                strokeOpacity="0.8"
                className="transition-all hover:stroke-[#34D399]"
              />
              <text x="463" y="65" fill="#34D399" fontFamily="var(--font-jetbrains-mono)" fontSize="11" fontWeight="700">
                Workers
              </text>
              <text x="463" y="82" fill="#94A3B8" fontFamily="var(--font-inter)" fontSize="9">
                Async Fleet
              </text>
            </g>

            {/* NODE 5: Redis Cache & Distributed Lock */}
            <g
              className="cursor-pointer"
              onMouseEnter={() => setActiveNode("Redis: High-speed caching & distributed concurrency locks via SETNX")}
              onMouseLeave={() => setActiveNode(null)}
            >
              <rect
                x="305"
                y="132"
                width="80"
                height="56"
                rx="6"
                fill="#0D1117"
                stroke="#F59E0B"
                strokeWidth="1.5"
                strokeOpacity="0.7"
                className="transition-all hover:stroke-[#FBBF24]"
              />
              <text x="323" y="155" fill="#FBBF24" fontFamily="var(--font-jetbrains-mono)" fontSize="11" fontWeight="700">
                Redis
              </text>
              <text x="313" y="172" fill="#94A3B8" fontFamily="var(--font-inter)" fontSize="9">
                SETNX Lock
              </text>
            </g>

            {/* NODE 6: PostgreSQL / MinIO Storage */}
            <g
              className="cursor-pointer"
              onMouseEnter={() => setActiveNode("Postgres & MinIO: Relational persistence with pessimistic locks & S3 object blobs")}
              onMouseLeave={() => setActiveNode(null)}
            >
              <rect
                x="455"
                y="132"
                width="78"
                height="56"
                rx="6"
                fill="#0D1117"
                stroke="#10B981"
                strokeWidth="1.5"
                strokeOpacity="0.8"
                className="transition-all hover:stroke-[#34D399]"
              />
              <text x="464" y="155" fill="#34D399" fontFamily="var(--font-jetbrains-mono)" fontSize="11" fontWeight="700">
                Postgres
              </text>
              <text x="462" y="172" fill="#94A3B8" fontFamily="var(--font-inter)" fontSize="9">
                MinIO (S3)
              </text>
            </g>
          </svg>
        </div>

        {/* Live Simulator Control Bar */}
        <div className="mt-3 pt-3 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleSimulateBurst}
            disabled={isBursting}
            className="w-full sm:w-auto px-3.5 py-1.5 rounded-md text-xs font-mono font-medium flex items-center justify-center gap-2 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/30 transition-all active:scale-95 disabled:opacity-50 group/btn"
          >
            <Zap className={`w-3.5 h-3.5 text-blue-400 ${isBursting ? "animate-bounce" : "group-hover/btn:scale-110"} transition-transform`} />
            <span>{isBursting ? "Simulating Traffic Spike..." : "Simulate Burst Traffic (1.2k QPS)"}</span>
          </button>
          <div className="text-[11px] font-mono text-slate-400 text-center sm:text-right truncate w-full sm:w-auto">
            {activeNode ? (
              <span className="text-blue-300 font-semibold">{activeNode}</span>
            ) : (
              <span>
                <span className="text-emerald-400 animate-pulse inline-block mr-1">●</span>
                {logMessage}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
