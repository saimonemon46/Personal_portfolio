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
    <div className="w-full rounded-xl bg-[#FFFCF5] dark:bg-[#151916] border border-[#D9D2C3] dark:border-[#394139] shadow-lg overflow-hidden transition-all duration-300 hover:border-[#A4472D]/40 dark:hover:border-[#E3A56E]/40 group">
      {/* Console titlebar */}
      <div className="px-4 py-3 bg-[#EEE9DE] dark:bg-[#1F2520] border-b border-[#D9D2C3] dark:border-[#394139] flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#8A5A17]/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28664F]/80 inline-block" />
          </div>
          <span className="text-[#626A60] dark:text-[#B2B7AB] pl-2 text-[11px]">production_traffic_topology.sys</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#28664F]/10 text-[#28664F] dark:text-[#8EC5A5] border border-[#28664F]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#28664F] animate-pulse" />
            {isBursting ? "BURST SPIKE" : "ONLINE"}
          </span>
        </div>
      </div>

      {/* Telemetry nodes bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[#D9D2C3] dark:bg-[#394139] border-b border-[#D9D2C3] dark:border-[#394139]">
        <div className="bg-[#FFFCF5] dark:bg-[#1F2520] p-3 text-center sm:text-left transition-colors hover:bg-[#EEE9DE] dark:hover:bg-[#252D27]">
          <div className="text-[10px] uppercase font-mono text-[#626A60] dark:text-[#B2B7AB]">Throughput</div>
          <div className="text-sm font-mono font-bold text-[#20251F] dark:text-[#F1EDE3] flex items-center justify-center sm:justify-start gap-1 mt-0.5">
            <Activity className={`w-3.5 h-3.5 ${isBursting ? "text-[#8A5A17] dark:text-[#E6BD76] animate-pulse" : "text-[#A4472D] dark:text-[#E3A56E]"}`} />
            <span className={isBursting ? "text-[#8A5A17] dark:text-[#E6BD76]" : ""}>{isBursting ? "1,248 qps" : "480 qps"}</span>
          </div>
        </div>
        <div className="bg-[#FFFCF5] dark:bg-[#1F2520] p-3 text-center sm:text-left transition-colors hover:bg-[#EEE9DE] dark:hover:bg-[#252D27]">
          <div className="text-[10px] uppercase font-mono text-[#626A60] dark:text-[#B2B7AB]">P95 Latency</div>
          <div className="text-sm font-mono font-bold text-[#20251F] dark:text-[#F1EDE3] flex items-center justify-center sm:justify-start gap-1 mt-0.5">
            <Zap className={`w-3.5 h-3.5 ${isBursting ? "text-[#8A5A17] dark:text-[#E6BD76]" : "text-[#28664F] dark:text-[#8EC5A5]"}`} />
            <span className={isBursting ? "text-[#8A5A17] dark:text-[#E6BD76]" : ""}>{isBursting ? "14 ms" : "8 ms"}</span>
          </div>
        </div>
        <div className="bg-[#FFFCF5] dark:bg-[#1F2520] p-3 text-center sm:text-left transition-colors hover:bg-[#EEE9DE] dark:hover:bg-[#252D27]">
          <div className="text-[10px] uppercase font-mono text-[#626A60] dark:text-[#B2B7AB]">Cache Hit</div>
          <div className="text-sm font-mono font-bold text-[#20251F] dark:text-[#F1EDE3] flex items-center justify-center sm:justify-start gap-1 mt-0.5">
            <Layers className="w-3.5 h-3.5 text-[#8A5A17] dark:text-[#E6BD76]" />
            <span>98.6%</span>
          </div>
        </div>
        <div className="bg-[#FFFCF5] dark:bg-[#1F2520] p-3 text-center sm:text-left transition-colors hover:bg-[#EEE9DE] dark:hover:bg-[#252D27]">
          <div className="text-[10px] uppercase font-mono text-[#626A60] dark:text-[#B2B7AB]">Deadlocks</div>
          <div className="text-sm font-mono font-bold text-[#28664F] dark:text-[#8EC5A5] flex items-center justify-center sm:justify-start gap-1 mt-0.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#28664F] dark:text-[#8EC5A5]" />
            <span>0 (ZeroDrift)</span>
          </div>
        </div>
      </div>

      {/* SVG Architecture Diagram */}
      <div className="p-4 sm:p-6 bg-[#F4F0E6] dark:bg-[#151916] relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-50 pointer-events-none" />

        {/* Subtle scan beam effect during burst */}
        {isBursting && (
          <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#A4472D] dark:via-[#E3A56E] to-transparent animate-beam-scan pointer-events-none" />
        )}

        <div className="relative">
          <svg
            viewBox="0 0 540 240"
            className="w-full h-auto drop-shadow-sm select-none"
            aria-label="System Architecture Flowchart"
          >
            <defs>
              <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Connecting Flow Paths */}
            {/* Client -> FastAPI */}
            <path
              id="path-client-fastapi"
              d="M 85 70 L 155 70"
              strokeWidth="2"
              fill="none"
              className="stroke-[#A4472D] dark:stroke-[#E3A56E] animate-dash-flow opacity-80"
            />
            {/* FastAPI -> Redis */}
            <path
              id="path-fastapi-redis"
              d="M 195 98 L 195 160 L 305 160"
              strokeWidth="2"
              fill="none"
              className="stroke-[#8A5A17] dark:stroke-[#E6BD76] animate-dash-flow opacity-80"
            />
            {/* FastAPI -> RabbitMQ */}
            <path
              id="path-fastapi-rabbitmq"
              d="M 235 70 L 305 70"
              strokeWidth="2"
              fill="none"
              className="stroke-[#A4472D] dark:stroke-[#E3A56E] animate-dash-flow opacity-80"
            />
            {/* RabbitMQ -> Workers */}
            <path
              id="path-rabbitmq-workers"
              d="M 385 70 L 455 70"
              strokeWidth="2"
              fill="none"
              className="stroke-[#A4472D] dark:stroke-[#E3A56E] animate-dash-flow opacity-80"
            />
            {/* Workers -> MinIO / Postgres */}
            <path
              id="path-workers-storage"
              d="M 495 98 L 495 132"
              strokeWidth="2"
              fill="none"
              className="stroke-[#28664F] dark:stroke-[#8EC5A5] animate-dash-flow opacity-80"
            />

            {/* Animated Data Packets Flowing Along Paths */}
            {/* Packet 1: Client to FastAPI */}
            <circle r={isBursting ? "4" : "3"} className="fill-[#A4472D] dark:fill-[#E3A56E]" filter="url(#glowFilter)">
              <animateMotion
                path="M 85 70 L 155 70"
                dur={packetDuration}
                repeatCount="indefinite"
              />
            </circle>

            {/* Packet 2: FastAPI to RabbitMQ */}
            <circle r={isBursting ? "4" : "3"} className="fill-[#A4472D] dark:fill-[#E3A56E]" filter="url(#glowFilter)">
              <animateMotion
                path="M 235 70 L 305 70"
                dur={packetDuration}
                repeatCount="indefinite"
                begin="0.3s"
              />
            </circle>

            {/* Packet 3: RabbitMQ to Workers */}
            <circle r={isBursting ? "4" : "3"} className="fill-[#A4472D] dark:fill-[#E3A56E]" filter="url(#glowFilter)">
              <animateMotion
                path="M 385 70 L 455 70"
                dur={packetDuration}
                repeatCount="indefinite"
                begin="0.6s"
              />
            </circle>

            {/* Packet 4: Workers to Storage */}
            <circle r={isBursting ? "4" : "3"} className="fill-[#28664F] dark:fill-[#8EC5A5]" filter="url(#glowFilter)">
              <animateMotion
                path="M 495 98 L 495 132"
                dur={packetDuration}
                repeatCount="indefinite"
                begin="0.9s"
              />
            </circle>

            {/* Packet 5: FastAPI to Redis Cache */}
            <circle r={isBursting ? "4" : "3"} className="fill-[#8A5A17] dark:fill-[#E6BD76]" filter="url(#glowFilter)">
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
                strokeWidth="1.5"
                className="fill-[#FFFCF5] dark:fill-[#1F2520] stroke-[#A4472D] dark:stroke-[#E3A56E] transition-all hover:stroke-width-2"
              />
              <text x="22" y="65" className="fill-[#20251F] dark:fill-[#F1EDE3] font-mono text-[11px] font-bold">
                Client
              </text>
              <text x="18" y="82" className="fill-[#626A60] dark:fill-[#B2B7AB] font-sans text-[9px]">
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
                strokeWidth={isBursting ? "2.5" : "1.5"}
                className={`fill-[#FFFCF5] dark:fill-[#1F2520] transition-all hover:stroke-width-2 ${
                  isBursting
                    ? "stroke-[#8A5A17] dark:stroke-[#E6BD76]"
                    : "stroke-[#A4472D] dark:stroke-[#E3A56E]"
                }`}
              />
              <text x="165" y="65" className="fill-[#A4472D] dark:fill-[#E3A56E] font-mono text-[11px] font-bold">
                FastAPI
              </text>
              <text x="162" y="82" className="fill-[#626A60] dark:fill-[#B2B7AB] font-sans text-[9px]">
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
                strokeWidth="1.5"
                className="fill-[#FFFCF5] dark:fill-[#1F2520] stroke-[#A4472D] dark:stroke-[#E3A56E] transition-all hover:stroke-width-2"
              />
              <text x="312" y="65" className="fill-[#20251F] dark:fill-[#F1EDE3] font-mono text-[11px] font-bold">
                RabbitMQ
              </text>
              <text x="312" y="82" className="fill-[#626A60] dark:fill-[#B2B7AB] font-sans text-[9px]">
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
                strokeWidth={isBursting ? "2.5" : "1.5"}
                className="fill-[#FFFCF5] dark:fill-[#1F2520] stroke-[#28664F] dark:stroke-[#8EC5A5] transition-all hover:stroke-width-2"
              />
              <text x="463" y="65" className="fill-[#28664F] dark:fill-[#8EC5A5] font-mono text-[11px] font-bold">
                Workers
              </text>
              <text x="463" y="82" className="fill-[#626A60] dark:fill-[#B2B7AB] font-sans text-[9px]">
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
                strokeWidth="1.5"
                className="fill-[#FFFCF5] dark:fill-[#1F2520] stroke-[#8A5A17] dark:stroke-[#E6BD76] transition-all hover:stroke-width-2"
              />
              <text x="323" y="155" className="fill-[#8A5A17] dark:fill-[#E6BD76] font-mono text-[11px] font-bold">
                Redis
              </text>
              <text x="313" y="172" className="fill-[#626A60] dark:fill-[#B2B7AB] font-sans text-[9px]">
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
                strokeWidth="1.5"
                className="fill-[#FFFCF5] dark:fill-[#1F2520] stroke-[#28664F] dark:stroke-[#8EC5A5] transition-all hover:stroke-width-2"
              />
              <text x="464" y="155" className="fill-[#28664F] dark:fill-[#8EC5A5] font-mono text-[11px] font-bold">
                Postgres
              </text>
              <text x="462" y="172" className="fill-[#626A60] dark:fill-[#B2B7AB] font-sans text-[9px]">
                MinIO (S3)
              </text>
            </g>
          </svg>
        </div>

        {/* Live Simulator Control Bar */}
        <div className="mt-3 pt-3 border-t border-[#D9D2C3] dark:border-[#394139] flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleSimulateBurst}
            disabled={isBursting}
            className="w-full sm:w-auto px-3.5 py-1.5 rounded-md text-xs font-mono font-medium flex items-center justify-center gap-2 bg-[#A4472D]/10 hover:bg-[#A4472D]/20 dark:bg-[#E3A56E]/15 dark:hover:bg-[#E3A56E]/25 text-[#A4472D] dark:text-[#E3A56E] border border-[#A4472D]/30 dark:border-[#E3A56E]/30 transition-all active:scale-95 disabled:opacity-50 group/btn cursor-pointer"
          >
            <Zap className={`w-3.5 h-3.5 text-[#A4472D] dark:text-[#E3A56E] ${isBursting ? "animate-bounce" : "group-hover/btn:scale-110"} transition-transform`} />
            <span>{isBursting ? "Simulating Traffic Spike..." : "Simulate Burst Traffic (1.2k QPS)"}</span>
          </button>
          <div className="text-[11px] font-mono text-[#626A60] dark:text-[#B2B7AB] text-center sm:text-right truncate w-full sm:w-auto">
            {activeNode ? (
              <span className="text-[#A4472D] dark:text-[#E3A56E] font-semibold">{activeNode}</span>
            ) : (
              <span>
                <span className="text-[#28664F] dark:text-[#8EC5A5] animate-pulse inline-block mr-1">●</span>
                {logMessage}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
