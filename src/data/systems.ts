export interface SystemArchitecture {
  id: string;
  title: string;
  tagline: string;
  category: string;
  problemSpace: string;
  topologyAscii: string;
  components: {
    name: string;
    role: string;
    failureHandling: string;
  }[];
  concurrencyModel: string;
  recoveryStrategy: string;
}

export const systemsOverview = {
  kicker: "Engineering Approach",
  title: "How I approach engineering problems.",
  subtitle:
    "I build systems that remain predictable under concurrency, asynchronous pipelines, and real-world failure modes.",
  principles: [
    {
      name: "System Design",
      detail: "Clean service boundaries, decoupled asynchronous workloads, and explicit state machines.",
    },
    {
      name: "Data Integrity",
      detail: "Mathematical balance conservation (Σ Debits = Σ Credits), pessimistic row locks, and strict invariants.",
    },
    {
      name: "Reliability",
      detail: "Atomic idempotency keys, dead-letter exchanges (DLX), circuit breakers, and automated regression tests.",
    },
    {
      name: "Performance",
      detail: "Empirical load benchmarking, query optimization, non-blocking I/O, and bottleneck profiling.",
    },
  ],
};

export const architectureTopologies: SystemArchitecture[] = [
  {
    id: "zerodrift-core",
    title: "ZeroDrift: Double-Entry Financial Ledger Core",
    tagline: "Deadlock-free concurrent payment routing with canonical global lock acquisition",
    category: "Fintech & Concurrency",
    problemSpace:
      "Simultaneous transfers between mutual accounts (A → B and B → A) trigger Coffman circular wait deadlocks and balance drift under high load.",
    topologyAscii: `
  [ Client Gateway ]
         │ (UUIDv4 Idempotency Token)
         ▼
  [ FastAPI Ingest ] ─── (Check-and-Set) ───► [ Redis Cache & Locks ]
         │
         ▼ (Canonical Lock: min(A,B) → max(A,B))
  [ PostgreSQL Row Locks (SELECT FOR UPDATE) ]
         │
         ├─── Debits Ledger Entry
         └─── Credits Ledger Entry (Invariant: ΣDebits + ΣCredits = 0)
         │
         ▼
  [ Transaction Finality: < 15ms ]
`,
    components: [
      {
        name: "FastAPI Ingestion Node",
        role: "Validates incoming JSON payload schemas and verifies client-supplied UUIDv4 idempotency keys.",
        failureHandling: "Replays previous response if identical key is encountered within 24 hours.",
      },
      {
        name: "Redis Lock Manager",
        role: "Maintains temporary acquisition leases to prevent duplicate API submissions in transit.",
        failureHandling: "Keys expire with TTL preventing permanent deadlocks if worker aborts.",
      },
      {
        name: "PostgreSQL Database Engine",
        role: "Acquires row-level pessimistic locks in sorted primary key sequence before mutating balances.",
        failureHandling: "Strict ACID rollback on any invariant violation or query timeout.",
      },
      {
        name: "Circuit Breaker Guardian",
        role: "Monitors downstream database response latency and fails fast if connection pool starves.",
        failureHandling: "Trips to Open state in <1ms, shedding excess traffic gracefully.",
      },
    ],
    concurrencyModel: "Deterministic Canonical Lock Ordering with Row-Level Exclusive Locks",
    recoveryStrategy: "Automatic rollback on ledger imbalance + dead-letter audit log persistence",
  },
  {
    id: "async-media-pipeline",
    title: "Distributed Asynchronous Media Processing Pipeline",
    tagline: "Decoupled video & image transcoding with RabbitMQ queues and MinIO S3",
    category: "Distributed Workflows",
    problemSpace:
      "Direct in-request media transcoding causes HTTP 504 gateway timeouts and exhausts web server connection pools.",
    topologyAscii: `
  [ Client Browser ]
         │ 1. Request Upload URL
         ▼
  [ FastAPI Gateway ] ── 2. Presigned URL ──► [ MinIO (S3 Object Storage) ]
         │                                               │
         │ 3. Enqueue Job Envelope                       │ 4. Client Streams Raw File
         ▼                                               ▼
  [ RabbitMQ Durable Exchange ]                  [ Raw Media Bucket ]
         │                                               │
         ▼ (Prefetch = 1, Explicit ACKs)                 ▼
  [ Python Worker Fleet ] ───────────────────────► [ FFmpeg Processing ]
         │                                               │
         ├── 5. Update Status Table                      ▼
         ▼                                     [ Artifacts Bucket ]
  [ PostgreSQL Metadata Store ]
`,
    components: [
      {
        name: "FastAPI Gateway",
        role: "Generates short-lived pre-signed S3 upload URLs and pushes job payloads to queue.",
        failureHandling: "Stateless horizontal scaling behind Nginx reverse proxy.",
      },
      {
        name: "RabbitMQ Message Broker",
        role: "Durable queue broker distributing transcoding tasks with manual consumer acknowledgments.",
        failureHandling: "Unacknowledged tasks return to queue on worker crash; poisoned messages route to DLX.",
      },
      {
        name: "Python Compute Workers",
        role: "Consumes jobs, downloads raw streams, executes FFmpeg transcoding, and uploads artifacts.",
        failureHandling: "Graceful SIGTERM handlers drain active transcoding jobs before shutdown.",
      },
      {
        name: "MinIO S3 Storage",
        role: "Stores raw source files and processed output files with versioning and pre-signed access.",
        failureHandling: "Object lifecycle policies clean up expired intermediate chunks.",
      },
    ],
    concurrencyModel: "Competing Consumers pattern with bounded prefetch count per worker process",
    recoveryStrategy: "Dead-Letter Exchange (DLX) with exponential retry backoff and admin notification",
  },
  {
    id: "jitsi-bare-metal",
    title: "Bare-Metal Real-Time Media & Recording Cluster",
    tagline: "Sub-200ms WebRTC media routing for 1 Presenter + 500 Viewers with headless recording",
    category: "Real-Time Streaming",
    problemSpace:
      "Enterprise SaaS meeting bills balloon at scale, while standard RTMP/HLS streams introduce 15-second delay.",
    topologyAscii: `
  [ Presenter 1080p Screen & Audio ]
         │ (Sub-50ms WebRTC Ingest)
         ▼
  [ Jitsi Videobridge (JVB) SFU ]
         │
         ├─── Sub-200ms Selective Forwarding ───► [ 500 Listen-Only Viewers ]
         │                                        (1.3 - 2.0 Gbps Aggregate Egress)
         ▼
  [ Headless Jibri Recording Bot ]
         │ (Virtual Chrome Framebuffer + ALSA Sink)
         ▼
  [ Local NVMe Disk Storage (Studio MP4) ]
`,
    components: [
      {
        name: "Jitsi Videobridge (JVB)",
        role: "Selective Forwarding Unit (SFU) distributing WebRTC packets without re-encoding.",
        failureHandling: "Dynamic packet loss concealment and adaptive bitrate throttling.",
      },
      {
        name: "Prosody XMPP Server",
        role: "Manages client authentication, room state, and participant signaling.",
        failureHandling: "Clustered session state with reconnect token caching.",
      },
      {
        name: "Headless Jibri Recording Bot",
        role: "Renders full-resolution presentation slides inside headless Chrome to produce studio MP4s.",
        failureHandling: "Automated watchdog daemon restarts crashed browser sessions within 5 seconds.",
      },
    ],
    concurrencyModel: "Event-driven UDP packet routing over high-throughput 10 Gbps bare-metal uplink",
    recoveryStrategy: "Healthcheck automation with automated recording restart and buffer preservation",
  },
];
