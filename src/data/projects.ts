export interface ProjectScreenshot {
  url: string;
  caption: string;
  title: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
  detail?: string;
}

export interface CaseStudyBreakdown {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  filterCategory: "AI / ML" | "Distributed Systems" | "Backend" | "DevOps / Infra" | "Web Apps";
  tagline: string;
  tierTag?: string;
  honorBadge?: string;
  description: string;
  problem: string;
  solution: string;
  caseStudyBreakdown: CaseStudyBreakdown[];
  architectureHint?: string;
  stack: string[];
  metrics: ProjectMetric[];
  highlights: string[];
  screenshots: ProjectScreenshot[];
  githubUrl?: string;
  demoUrl?: string;
  videoUrl?: string;
  docUrl?: string;
  featured: boolean;
  order: number;
  deepDive: {
    overview: string;
    architectureDescription: string;
    keyDecisions: { title: string; explanation: string }[];
    concurrencyAndFailures?: string[];
    benchmarkOrValidation?: string;
  };
}

export const projects: Project[] = [
  {
    slug: "medisa",
    title: "MediSA: Ambient Clinical AI Triage Engine",
    category: "Healthcare AI · Grounded RAG",
    filterCategory: "AI / ML",
    tierTag: "Healthcare AI • IEEE & National Finalist",
    honorBadge: "ICADI 2026 IEEE Shortlist • MillionX Top 40",
    tagline: "Dynamic symptom extraction, local FAISS vector matching, and doctor recommendation.",
    description:
      "Most patients in developing healthcare systems describe complex medical symptoms in colloquial terms, leading to misdirection and dangerous triage delays. MediSA uses a grounded RAG architecture with local vector databases to accurately classify clinical conditions and recommend specialist departments.",
    problem:
      "Most patients in developing healthcare systems describe complex medical symptoms in colloquial terms, leading to misdirection and dangerous triage delays. Furthermore, transmitting unvetted patient health records to public third-party cloud APIs poses significant patient privacy and HIPAA/GDPR compliance risks.",
    solution:
      "Engineered a grounded RAG architecture using FastAPI, LangChain, LangGraph, and local FAISS vector databases. Evaluates colloquial Bengali and English symptom descriptions, normalizes them against clinical taxonomies, and routes patients to attending specialists in sub-80ms without cloud egress.",
    caseStudyBreakdown: [
      {
        label: "Grounded RAG",
        value: "Self-contained local FAISS vector retrieval ensuring sub-80ms response times without transmitting patient data to unverified external cloud endpoints.",
      },
      {
        label: "Clinical NLP",
        value: "Dual-language entity extraction parsing colloquial Bengali and English symptoms into structured clinical profiles and specialty routing.",
      },
      {
        label: "National Honors",
        value: "Recognized as a National Finalist at MillionX AI Buildathon (Top 40 out of 400+ teams nationwide) and presented at ICADI 2026 (IEEE International).",
      },
      {
        label: "Verification",
        value: "Validated against real-world clinical datasets with structured triage summaries delivered to attending physicians.",
      },
    ],
    architectureHint: "Colloquial Query → NLP Extraction → Local FAISS Vector Store → LangGraph State Machine → Specialist Routing",
    stack: ["FastAPI", "LangChain", "LangGraph", "FAISS", "Python", "MySQL", "Docker"],
    featured: true,
    order: 1,
    metrics: [
      { label: "Recognition", value: "Top 40", detail: "MillionX AI Buildathon (400+ Teams)" },
      { label: "Latency", value: "<80ms", detail: "Local Vector Similarity Match" },
      { label: "Global Stage", value: "IEEE ICADI", detail: "Shortlisted International Finalist" },
      { label: "Verified Screens", value: "7 UI Flows", detail: "Clinical Triage & Doctor Match" },
    ],
    highlights: [
      "Sub-80ms local FAISS vector retrieval ensuring patient confidentiality without external cloud endpoints",
      "Dual-language entity extraction parsing colloquial Bengali and English symptoms into clinical profiles",
      "Specialist doctor matching algorithm routing patients according to symptom urgency and clinical category",
      "National Finalist at MillionX AI Buildathon (Top 40 out of 400+ teams nationwide)",
      "Shortlisted at ICADI 2026 (IEEE International Congress on AI & Digital Health Innovation)",
    ],
    screenshots: [
      { url: "/assets/MediSA/1.png", title: "MediSA Main Dashboard Screen", caption: "Clinical triage overview and active clinical query console" },
      { url: "/assets/MediSA/2.png", title: "Patient Triage Flow", caption: "Step-by-step symptom assessment and severity categorization" },
      { url: "/assets/MediSA/3.png", title: "Doctor Recommendation", caption: "Specialty routing and physician availability matching" },
      { url: "/assets/MediSA/4.png", title: "Clinical Entity Extraction", caption: "NLP tokenization and entity extraction from colloquial text" },
      { url: "/assets/MediSA/5.png", title: "Patient Diagnostic Report", caption: "Structured medical summary ready for physician review" },
      { url: "/assets/MediSA/6.png", title: "Workflow Execution View", caption: "LangGraph state machine graph execution view" },
      { url: "/assets/MediSA/7.png", title: "Analytics & Taxonomy View", caption: "Vector search clusters and clinical taxonomy distribution" },
    ],
    githubUrl: "https://github.com/saimonemon46/MediSA",
    videoUrl: "https://youtu.be/N8_rTYncw5M",
    docUrl: "https://drive.google.com/file/d/1VZ1ycK-DhsUskuV7Fm8k_TMbMZBDXAyz/view?usp=sharing",
    deepDive: {
      overview:
        "MediSA was built to solve a critical point of friction in clinical triage: patient descriptions of symptoms are colloquial, emotionally charged, and frequently imprecise. By combining dual-language tokenization with local vector embeddings, MediSA structures raw patient input into actionable clinical summaries before handoff to human physicians.",
      architectureDescription:
        "The system operates with an edge-first philosophy. Rather than streaming raw medical disclosures to public third-party LLM providers, an offline FAISS vector database embeds curated clinical taxonomy, symptom-disease graphs, and hospital department listings. LangGraph manages the state machine governing follow-up inquiry questions and final doctor routing.",
      keyDecisions: [
        {
          title: "Local Vector Database over Cloud Endpoints",
          explanation: "Chosen to guarantee strict sub-80ms response times and ensure sensitive patient healthcare queries never leave the trusted local subnet.",
        },
        {
          title: "LangGraph Stateful Orchestration",
          explanation: "Replaced linear prompt chains with a cyclic state machine capable of asking clarifying diagnostic questions when confidence is low.",
        },
        {
          title: "Dual-Language Normalization",
          explanation: "Trained tokenizers to normalize Bengali phonetic colloquialisms into standardized ICD-10 medical terminology.",
        },
      ],
      concurrencyAndFailures: [
        "Stateless FastAPI instances deployed behind Nginx load balancers",
        "Deterministic fallback to general triage whenever confidence falls below 0.65",
        "Zero-retention ephemeral session memory for patient PII protection",
      ],
      benchmarkOrValidation:
        "Validated against 500+ curated clinical vignettes; achieved 92.4% specialty routing accuracy and sub-80ms embedding retrieval latency.",
    },
  },
  {
    slug: "distributed-media",
    title: "Distributed Media Processing Pipeline",
    category: "Distributed Systems · RabbitMQ & MinIO",
    filterCategory: "Distributed Systems",
    tierTag: "Distributed Systems • RabbitMQ & MinIO",
    honorBadge: "Decoupled Queue Broker • S3 Object Storage",
    tagline: "Scalable asynchronous media ingestion, RabbitMQ task queue, and MinIO S3 object storage.",
    description:
      "Handling heavy video/image file transformations directly in web request lifecycles leads to thread starvation and gateway timeouts. This system decouples client uploads from compute workers using an asynchronous distributed pipeline.",
    problem:
      "Handling heavy video and image transformations directly in web request-response lifecycles causes gateway timeouts (504s), connection pooling starvation, and complete API server exhaustion under concurrency.",
    solution:
      "Architected an event-driven distributed pipeline where upload endpoints write raw media directly to MinIO S3 object storage and publish lightweight job envelopes to RabbitMQ. Autonomous Python worker processes asynchronously transcode media, update PostgreSQL state, and generate pre-signed artifact URLs.",
    caseStudyBreakdown: [
      {
        label: "Broker Queue",
        value: "RabbitMQ message broker handles deterministic task publishing and acknowledgments, decoupling API endpoints from compute-intensive video processing.",
      },
      {
        label: "Blob Storage",
        value: "MinIO (S3-compatible object storage) stores raw media and processed artifacts with pre-signed download URLs, eliminating database blob bloat.",
      },
      {
        label: "Worker Fleet",
        value: "Independent Python worker processes consume jobs concurrently, executing state transitions and persisting metadata in PostgreSQL with transactional guarantees.",
      },
      {
        label: "Containerized",
        value: "Multi-container Docker Compose architecture with health checks, environment isolation, and automated PyTest verification.",
      },
    ],
    architectureHint: "Client Upload → FastAPI Gateway → RabbitMQ Exchange → Python Worker Fleet → MinIO (S3) → PostgreSQL",
    stack: ["Python", "FastAPI", "RabbitMQ", "MinIO (S3)", "PostgreSQL", "Docker Compose", "PyTest", "SQLAlchemy"],
    featured: true,
    order: 2,
    metrics: [
      { label: "Decoupling", value: "100% Async", detail: "Zero Blocking on HTTP Handlers" },
      { label: "Broker", value: "RabbitMQ", detail: "Durable Queues & Worker ACKs" },
      { label: "Storage", value: "MinIO S3", detail: "Pre-Signed Ephemeral Uploads" },
      { label: "Test Rigor", value: "85%+ PyTest", detail: "Automated Integration Suites" },
    ],
    highlights: [
      "Decoupled heavy FFmpeg media transcoding from HTTP API handlers via RabbitMQ durable queues",
      "MinIO S3-compatible object storage eliminating database blob bloat with pre-signed download URLs",
      "Independent Python worker processes with idempotent retry loops and dead-letter queue recovery",
      "Full Docker Compose infrastructure orchestration with health checks and volume persistence",
      "Comprehensive PyTest suite covering worker task acknowledgments, failed state recovery, and metadata consistency",
    ],
    screenshots: [
      { url: "/assets/media_processing/rabbitmq.png", title: "RabbitMQ Message Broker Queue Management Dashboard", caption: "Queue management console showing active worker delivery, task acknowledgments, and throughput" },
      { url: "/assets/media_processing/minio.png", title: "MinIO S3 Object Storage Console", caption: "Bucket hierarchy, raw media partitions, and processed transcoded artifacts console" },
    ],
    githubUrl: "https://github.com/saimonemon46/Distributed_Media_Processing",
    deepDive: {
      overview:
        "In modern web applications, media processing (video compression, resolution scaling, thumbnail generation) is orders of magnitude slower than typical HTTP timeouts. This project implements a production-grade async pipeline that guarantees HTTP request responses in under 25ms regardless of file size.",
      architectureDescription:
        "FastAPI acts purely as an ingestion gateway, issuing short-lived pre-signed S3 upload URLs to clients. Once MinIO confirms object receipt, FastAPI publishes a JSON task payload to a durable RabbitMQ exchange with manual consumer acknowledgments. A containerized worker pool consumes jobs concurrently, reporting state updates to PostgreSQL.",
      keyDecisions: [
        {
          title: "RabbitMQ over In-Memory BackgroundTasks",
          explanation: "In-memory background tasks die when web server pods restart or scale down. RabbitMQ persists messages to disk with explicit consumer ACKs.",
        },
        {
          title: "MinIO Object Storage over Filesystem Volumes",
          explanation: "Using local server disk creates node affinity and prevents horizontal autoscaling. S3-compliant object storage provides infinite elasticity.",
        },
        {
          title: "Dead Letter Exchanges (DLX)",
          explanation: "Corrupted media files that repeatedly fail transcoding are automatically routed to a DLX after 3 retries, avoiding poison-pill queue blockages.",
        },
      ],
      concurrencyAndFailures: [
        "Worker concurrency configured per CPU core with bounded prefetch counts (prefetch=1)",
        "PostgreSQL advisory locks preventing duplicate processing of identical hashes",
        "Graceful SIGTERM handlers allowing currently running transcoding jobs to finish before container teardown",
      ],
      benchmarkOrValidation:
        "Verified with 100+ concurrent multi-megabyte media uploads without a single dropped packet or API latency degradation.",
    },
  },
  {
    slug: "jitsi-cluster",
    title: "Bare-Metal Real-Time Media & Automated Recording Cluster",
    category: "DevOps & Real-Time Media · Bare-Metal",
    filterCategory: "DevOps / Infra",
    tierTag: "DevOps & Real-Time Media • Bare-Metal Cluster",
    honorBadge: "1 Host + 500 Attendees • <200ms WebRTC",
    tagline: "Self-hosted Jitsi Meet cluster with headless Jibri automated screen recording bots.",
    description:
      "Architected a production migration proposal and infrastructure deployment moving from 8x8 JaaS to a private, bare-metal Jitsi Meet cluster. Designed for 1 Presenter + 500 listen-only attendees with automated server-side recording.",
    problem:
      "Commercial SaaS meeting platforms (like 8x8 JaaS or Zoom) impose prohibitive per-minute pricing at scale, while standard HLS streaming introduces unacceptable 15-second broadcast latency.",
    solution:
      "Engineered an on-premise bare-metal Jitsi Meet cluster utilizing Jitsi Videobridge (JVB) for ultra-low latency WebRTC routing and containerized headless Jibri recording bots utilizing virtual ALSA audio sinks and 10 Gbps uplinks.",
    caseStudyBreakdown: [
      {
        label: "Low Latency",
        value: "Real-time WebRTC media routing through Jitsi Videobridge (JVB) achieving <200ms latency, vastly outperforming traditional 15-second HLS/RTMP streams.",
      },
      {
        label: "Jibri Bot",
        value: "Automated headless Chrome recording bot with ALSA virtual audio capture. Locks onto the host's 1080p screen share slides into studio-grade MP4s on NVMe buffers.",
      },
      {
        label: "Bandwidth Math",
        value: "Calculated strict network capacity: 500 concurrent 1080p streams consume 1.3 to 2.0 Gbps outbound, requiring unmetered 10 Gbps bare-metal uplinks.",
      },
      {
        label: "Diagnostics",
        value: "Engineered shell diagnostic test suites (check-environment.sh, simulate-host-disconnect.sh, test-recorder.sh) for automated health auditing.",
      },
    ],
    architectureHint: "Host 1080p → WebRTC JVB → 500 Viewers (<200ms) + Jibri Chrome Bot → NVMe Buffer",
    stack: ["Jitsi Meet", "WebRTC", "Jitsi Videobridge (JVB)", "Headless Jibri", "Linux", "Bash", "Docker", "Bare-Metal"],
    featured: false,
    order: 4,
    metrics: [
      { label: "Attendees", value: "500+", detail: "Concurrent Listen-Only Viewers" },
      { label: "Latency", value: "<200ms", detail: "Real-Time WebRTC Media Path" },
      { label: "Throughput", value: "1.3–2.0 Gbps", detail: "Outbound Network Bandwidth" },
      { label: "Recording", value: "1080p MP4", detail: "Headless Chrome Virtual Sink" },
    ],
    highlights: [
      "Sub-200ms WebRTC routing via Jitsi Videobridge (JVB), replacing high-latency 15-second HLS/RTMP streams",
      "Automated headless Chrome Jibri recording bot capturing presenter 1080p slides into studio MP4s on NVMe buffers",
      "Network capacity planning: dimensioned 1.3 to 2.0 Gbps outbound bandwidth for 500 concurrent viewers on 10 Gbps uplinks",
      "Engineered shell diagnostic test suites (check-environment.sh, simulate-host-disconnect.sh, test-recorder.sh)",
    ],
    screenshots: [],
    githubUrl: "https://github.com/saimonemon46/Jitsi_SelfHost_custom_ServerSideRecorderBot.",
    deepDive: {
      overview:
        "This project was designed as a production migration blueprint to escape exorbitant enterprise SaaS licensing fees for university lecture broadcasts. By self-hosting Jitsi on high-spec bare-metal hardware with 10 Gbps uplinks, infrastructure costs were reduced by over 80% while retaining sub-second interactive latency.",
      architectureDescription:
        "The architecture separates media packet forwarding from user signaling. Prosody handles XMPP authentication and room presence, while Jitsi Videobridge (JVB) selectively forwards WebRTC audio/video packets without transcoding. A dedicated Jibri bot runs headless Google Chrome inside an X11 virtual framebuffer to capture full 1080p presentations.",
      keyDecisions: [
        {
          title: "WebRTC SFU over MCU",
          explanation: "Selective Forwarding Units (SFU) forward packets without re-encoding, reducing CPU utilization per viewer by an order of magnitude.",
        },
        {
          title: "Headless Jibri Recording",
          explanation: "Captures the exact composite presenter view directly into an MP4 file with zero client-side recording load.",
        },
      ],
      concurrencyAndFailures: [
        "Network buffer tuning (sysctl tcp_rmem / tcp_wmem) for high-bandwidth egress",
        "Automated watchdog scripts restarting frozen Jibri capture instances within 5 seconds",
      ],
      benchmarkOrValidation:
        "Simulated 500-attendee load tests demonstrating sustained 1.8 Gbps egress bandwidth with steady 45% CPU utilization.",
    },
  },
  {
    slug: "zerodrift",
    title: "ZeroDrift: High-Concurrency Payment & Ledger Core",
    category: "Fintech Systems · Clean Architecture",
    filterCategory: "Backend",
    tierTag: "Fintech Systems • Clean Architecture",
    honorBadge: "1,000+ QPS Locust • Zero Deadlocks • 100% Core Verification",
    tagline: "Enterprise double-entry financial transaction engine built with Clean Architecture, canonical lock ordering, and zero balance drift.",
    description:
      "Financial platforms (like bKash or Pathao Pay) face severe race conditions, balance drift, and deadlocks during high-traffic flash sales and bilateral transfers. ZeroDrift models an enterprise double-entry transaction core from first principles, enforcing strict mathematical balance conservation (∑ Debits + ∑ Credits = 0) and sub-15ms transaction finality under intense concurrent load.",
    problem:
      "Financial platforms (like bKash or Pathao Pay) face severe race conditions, balance drift, and deadlocks during high-traffic flash sales and bilateral transfers. Without canonical lock ordering and strict mathematical double-entry invariants, high concurrency results in Coffman circular waits and silent balance corruption.",
    solution:
      "Engineered ZeroDrift in Python 3.12 and FastAPI using Clean/Hexagonal Architecture. Enforces mathematical balance conservation (∑ Debits + ∑ Credits = 0), eliminates deadlocks via Canonical Global Lock Ordering (min(A,B) → max(A,B)) with SELECT FOR UPDATE, and uses Redis UUIDv4 check-and-set for atomic idempotency.",
    caseStudyBreakdown: [
      {
        label: "Deadlock Free",
        value: "Canonical Global Lock Ordering (min(IDA, IDB) → max(IDA, IDB)) with row-level pessimistic locking (SELECT ... FOR UPDATE) completely eliminates Coffman circular waits.",
      },
      {
        label: "Zero Drift",
        value: "Strict double-entry bookkeeping enforces mathematical balance conservation with zero-drift decimal precision, transaction state machines, and continuous invariant auditing.",
      },
      {
        label: "Idempotency & CB",
        value: "Atomic UUIDv4 check-and-set protocol prevents duplicate charges on mobile network retries; 3-State Circuit Breaker (Closed → Open → Half-Open) fails fast in <1ms during downstream outages.",
      },
      {
        label: "Verified Load",
        value: "Benchmarked under 1,000+ QPS via Locust load tests (0% error rate, sub-15ms latency), 50-thread concurrent race tests, and OS SIGTERM worker queue draining.",
      },
    ],
    architectureHint: "Transfer Request → Idempotency Check → Canonical Row Locks → Invariant Audit → Commit",
    stack: ["Python 3.12", "FastAPI", "PostgreSQL", "Redis", "Docker", "Locust", "PyTest", "Clean Architecture", "Pydantic v2"],
    featured: true,
    order: 3,
    metrics: [
      { label: "Load Benchmark", value: "1,000+ QPS", detail: "Locust Load Test (0% Error Rate)" },
      { label: "P95 Latency", value: "<15ms", detail: "Sub-15ms Transaction Finality" },
      { label: "Deadlocks", value: "0", detail: "Canonical Global Lock Ordering" },
      { label: "Circuit Breaker", value: "<1ms", detail: "Fast-Fail Downstream Outages" },
    ],
    highlights: [
      "Canonical Global Lock Ordering (min(IDA, IDB) → max(IDA, IDB)) with SELECT FOR UPDATE eliminating Coffman deadlocks",
      "Strict double-entry bookkeeping with mathematical balance conservation (Σ Debits + Σ Credits = 0)",
      "Atomic UUIDv4 check-and-set idempotency protocol preventing duplicate deductions during network retries",
      "3-State Circuit Breaker (Closed → Open → Half-Open) failing fast in <1ms during downstream dependency degradation",
      "Benchmarked at 1,000+ QPS via Locust load testing under high concurrency with 0% error rate",
    ],
    screenshots: [
      { url: "/assets/ledgercore/locust_load_test_report.png", title: "Locust Load Benchmark - 1000+ QPS Zero Failure Rate", caption: "1,000+ QPS sustained load report with zero failures and sub-15ms response times" },
      { url: "/assets/ledgercore/system_verification_dashboard.png", title: "System Verification Dashboard", caption: "Invariant checker confirming mathematical zero-drift balance consistency" },
      { url: "/assets/ledgercore/swagger_docs.png", title: "Swagger OpenAPI Documentation", caption: "Interactive Swagger documentation detailing financial endpoints, idempotency headers, and schemas" },
      { url: "/assets/ledgercore/test_coverage_report.png", title: "PyTest Test Coverage Report", caption: "Automated test suite verifying 50-thread race conditions, rollback semantics, and circuit breakers" },
    ],
    githubUrl: "https://github.com/saimonemon46/ZeroDrift-High-Concurrency-Payment-Ledger-Core",
    deepDive: {
      overview:
        "ZeroDrift is a production-grade double-entry ledger engine built from first principles to simulate the transaction guarantees required by mission-critical digital wallets like bKash, Stripe, or Pathao Pay. It guarantees absolute consistency, mathematical balance conservation, and immediate transaction finality under high concurrent load.",
      architectureDescription:
        "The application strictly adheres to Clean / Hexagonal Architecture: domain invariants are decoupled from database engines and web frameworks. All state changes require balanced multi-legged ledger entries wrapped in PostgreSQL transaction isolation. An in-memory circuit breaker monitors downstream database latency and trips to protect upstream services.",
      keyDecisions: [
        {
          title: "Canonical Global Lock Ordering",
          explanation: "If Account A transfers to Account B while Account B transfers to Account A simultaneously, naive row locking causes a classic Coffman circular deadlock. By enforcing min(A,B) followed by max(A,B) lock acquisition, circular wait conditions become mathematically impossible.",
        },
        {
          title: "Pessimistic Locking over Optimistic Retries",
          explanation: "Under high-contention accounts (such as a merchant account during a flash sale), optimistic locking experiences catastrophic retry storms. Row-level SELECT ... FOR UPDATE serializes access predictably without thrashing CPU cycles.",
        },
        {
          title: "Double-Entry Invariant Conservation",
          explanation: "Balances are never simply 'updated' as loose integers. Every mutation is a recorded credit and debit pair. A database check constraint enforces that the sum of entries for every transaction identifier equals zero.",
        },
      ],
      concurrencyAndFailures: [
        "Redis SETNX lock keys with TTL to handle network-dropped client retries safely",
        "Automated continuous invariant auditing query running asynchronously to detect ledger imbalance",
        "Clean SIGTERM handler flushing in-flight ledger verification logs before process exit",
      ],
      benchmarkOrValidation:
        "Benchmarked with Locust under 1,000+ QPS continuous traffic: 0 failed transactions, zero deadlocks observed, P95 latency maintained below 15ms.",
    },
  },
  {
    slug: "smartpark",
    title: "SmartPark AI: Autonomous Multi-Agent Dispatch",
    category: "Autonomous Multi-Agent AI · Live Production",
    filterCategory: "AI / ML",
    tierTag: "Autonomous Multi-Agent AI",
    honorBadge: "LIVE PRODUCTION ON VERCEL",
    tagline: "Autonomous multi-agent parking allocation system with real-time live map dashboard.",
    description:
      "Multi-agent parking allocation system with occupancy forecasting (ML), automatic slot assignment, and real-time live map dashboard deployed publicly on Vercel. Independent agent failure domains ensure uninterrupted slot assignment even if notification or external integration workers degrade.",
    problem:
      "Multi-agent parking allocation system with occupancy forecasting (ML), automatic slot assignment, and real-time live map dashboard deployed publicly on Vercel. Urban parking congestion causes severe delays, and monolithic systems break when external integration workers degrade.",
    solution:
      "Designed an autonomous multi-agent architecture where specialized AI agents handle occupancy forecasting, optimal slot assignment, and notifications with independent failure domains, deployed live on Vercel with real-time map telemetry.",
    caseStudyBreakdown: [
      {
        label: "Multi-Agent Coordination",
        value: "Coordinated agent workflows utilizing Groq LLM agents for slot assignment and real-time user guidance.",
      },
      {
        label: "Occupancy Forecasting",
        value: "Machine learning model predicts parking occupancy patterns to dynamically optimize slot distribution.",
      },
      {
        label: "Fault Tolerance",
        value: "Independent agent failure domains ensure uninterrupted slot assignment even if notification or external integration workers degrade.",
      },
      {
        label: "Public Deployment",
        value: "Deployed live on Vercel with real-time slot tracking, interactive map visualization, and sub-150ms API response times.",
      },
    ],
    architectureHint: "Driver Request → Agent Dispatcher → Allocation Agent + ML Forecaster → Live Vercel Map",
    stack: ["Python", "FastAPI", "Groq LLM Agents", "Occupancy Forecasting", "Live Vercel", "SQLite / Postgres", "JavaScript"],
    featured: false,
    order: 5,
    metrics: [
      { label: "Deployment", value: "Live Vercel", detail: "Public Production App" },
      { label: "Architecture", value: "Multi-Agent", detail: "Independent Failure Domains" },
      { label: "Response", value: "<150ms", detail: "Real-Time Slot Allocation" },
      { label: "Screens", value: "4 Live Flows", detail: "Map, Allocation, Diagnostics" },
    ],
    highlights: [
      "Decoupled multi-agent architecture preventing external notification failures from blocking slot reservations",
      "Occupancy forecasting using historical time-series data to predict parking availability trends",
      "Interactive live web dashboard deployed on Vercel with real-time slot state visualization",
      "Sub-150ms allocation API response times verified under simultaneous simulated booking bursts",
    ],
    screenshots: [
      { url: "/assets/Smart_parking/img1.png", title: "SmartPark Live Map Screen", caption: "Real-time interactive parking slot occupancy map" },
      { url: "/assets/Smart_parking/img2.png", title: "SmartPark Operations Dashboard", caption: "Administrative overview of lot capacity and booking velocity" },
      { url: "/assets/Smart_parking/img3.png", title: "Agent Dispatch Pipeline", caption: "Execution trace of autonomous multi-agent negotiation" },
      { url: "/assets/Smart_parking/img4.png", title: "Slot Allocation Engine", caption: "Automated closest-fit vehicle-to-slot matching logic" },
    ],
    githubUrl: "https://github.com/saimonemon46/Live_Parking_Agent",
    demoUrl: "https://live-parking-agent.vercel.app/",
    deepDive: {
      overview:
        "SmartPark AI addresses urban parking inefficiency using autonomous multi-agent systems. By decoupling slot assignment from external notifications and analytics, the core allocation engine continues to function with 100% reliability even when downstream APIs experience latency spikes.",
      architectureDescription:
        "Incoming booking requests are routed through a FastAPI dispatcher that delegates tasks to specialized sub-agents. The Allocation Agent computes the optimal physical slot based on vehicle dimensions, proximity, and predicted dwell time, while the Forecasting Agent projects future lot saturation.",
      keyDecisions: [
        {
          title: "Micro-agent Failure Domains",
          explanation: "If SMS notifications fail, the driver's slot assignment succeeds immediately rather than holding the HTTP thread.",
        },
        {
          title: "Real-Time WebSockets for Map Updates",
          explanation: "Live slot status is pushed to connected browsers without aggressive client polling.",
        },
      ],
      concurrencyAndFailures: [
        "Optimistic locking on parking slot records to prevent double-booking",
        "Graceful degradation when forecasting ML models are offline",
      ],
      benchmarkOrValidation:
        "Live on Vercel with hundreds of verified simulated bookings and zero conflicting slot collisions.",
    },
  },
  {
    slug: "frag",
    title: "FRAG: Federated Learning + Decentralized RAG",
    category: "AI & Distributed ML · Privacy-Preserving",
    filterCategory: "AI / ML",
    tierTag: "AI & Distributed ML",
    honorBadge: "Privacy-Preserving Federated Intelligence",
    tagline: "Privacy-preserving decentralized intelligence combining Federated Learning client updates with local vector-based retrieval pipelines.",
    description:
      "Privacy-preserving decentralized intelligence combining Federated Learning client updates with local vector-based retrieval pipelines for distributed enterprise datasets.",
    problem:
      "Enterprises cannot centralize proprietary internal documents due to strict compliance, GDPR, and data sovereignty laws.",
    solution:
      "Engineered FRAG to keep documents strictly on local client nodes while aggregating model weight gradients globally without exposing underlying text embeddings.",
    caseStudyBreakdown: [
      {
        label: "Federated Learning",
        value: "Decentralized client gradient updates trained across edge nodes without centralizing raw confidential training data.",
      },
      {
        label: "Decentralized RAG",
        value: "Local vector-based retrieval pipelines embedded across distributed enterprise nodes for privacy-preserving querying.",
      },
      {
        label: "Fault Tolerance",
        value: "Asynchronous aggregation algorithms handling edge node drops and intermittent network partitions.",
      },
    ],
    stack: ["Federated ML", "Vector Search", "Privacy AI", "Python", "FastAPI"],
    featured: false,
    order: 6,
    metrics: [
      { label: "Privacy", value: "Zero Central PII", detail: "Federated Client Nodes" },
      { label: "Decentralized", value: "Local Vector RAG", detail: "Sub-Node Indexing" },
    ],
    highlights: [
      "Federated gradient aggregation preserving enterprise data sovereignty",
      "Decentralized vector search running isolated within client perimeters",
    ],
    screenshots: [],
    githubUrl: "https://github.com/saimonemon46/FRAG",
    deepDive: {
      overview:
        "FRAG investigates the convergence of Federated Learning (FL) and Retrieval-Augmented Generation (RAG). By decentralizing the vector store to isolated client perimeters, data privacy is cryptographically maintained.",
      architectureDescription: "Client nodes train local adapter heads and query local FAISS indices, only exchanging encrypted parameter deltas with the central coordinator.",
      keyDecisions: [
        {
          title: "Differential Privacy Noise Injection",
          explanation: "Guarantees that reconstruction attacks cannot reverse-engineer sensitive corporate documents from gradient updates.",
        },
      ],
      concurrencyAndFailures: ["Robust to intermittent client disconnects during aggregation rounds"],
      benchmarkOrValidation: "Simulated 10-node federated network with 0 document leaks and 94% global query relevance.",
    },
  },
  {
    slug: "unimind",
    title: "Multimodal AI Student Helper (UniMind)",
    category: "Multimodal AI Platform · Vector RAG",
    filterCategory: "AI / ML",
    tierTag: "Multimodal AI Platform",
    honorBadge: "PaddleOCR & Qdrant Knowledge Retrieval",
    tagline: "End-to-end learning assistant extracting knowledge from handwritten notes and PDFs with Qdrant vector retrieval, MinIO S3 storage, and Groq Llama 3.1 RAG.",
    description:
      "End-to-end learning assistant extracting knowledge from handwritten notes (PaddleOCR) and PDFs with Qdrant vector retrieval, MinIO S3 storage, and Groq Llama 3.1 RAG.",
    problem:
      "University students struggle to search through hundreds of pages of unstructured handwritten classroom notes and dense academic textbooks before examinations.",
    solution:
      "Built a multimodal pipeline utilizing PaddleOCR for offline handwritten text recognition, chunked vector indexing inside Qdrant, MinIO S3 object storage, and low-latency Groq Llama 3.1 inference for instant conceptual query answering.",
    caseStudyBreakdown: [
      {
        label: "Multimodal Ingestion",
        value: "PaddleOCR neural extraction for handwritten university notes and PDF document parsers.",
      },
      {
        label: "Vector Search",
        value: "High-density Qdrant vector retrieval for semantic context ranking and chunked source citations.",
      },
      {
        label: "Hybrid Storage",
        value: "MinIO S3 object storage for lecture assets combined with Groq Llama 3.1 LLM generation.",
      },
    ],
    stack: ["FastAPI", "PaddleOCR", "Qdrant", "MinIO S3", "Next.js", "Python"],
    featured: false,
    order: 7,
    metrics: [
      { label: "OCR", value: "PaddleOCR", detail: "Handwritten Note Extraction" },
      { label: "Vectors", value: "Qdrant", detail: "High-Dimensional Embeddings" },
      { label: "Inference", value: "Groq Llama 3.1", detail: "Ultra-Fast LLM Generation" },
    ],
    highlights: [
      "Offline handwritten optical character recognition using PaddleOCR",
      "Semantic vector search with Qdrant for granular citation retrieval",
      "MinIO S3 storage for student document uploads and cached embeddings",
    ],
    screenshots: [],
    githubUrl: "https://github.com/saimonemon46/AI-Assistant-For-Student-",
    deepDive: {
      overview:
        "UniMind bridges the gap between messy analog student notebooks and modern generative AI. Students photograph handwritten notebook pages or upload syllabus PDFs; the system indexes every paragraph into a vector knowledge graph.",
      architectureDescription:
        "FastAPI coordinates the ingest pipeline: PaddleOCR extracts text lines, recursive character splitters chunk sections into 500-token blocks, and embeddings are stored in Qdrant. A Next.js frontend delivers an interactive study chat interface.",
      keyDecisions: [
        {
          title: "PaddleOCR over Generic Tesseract",
          explanation: "PaddleOCR demonstrated vastly superior accuracy on non-linear cursive and handwritten student script.",
        },
      ],
      concurrencyAndFailures: ["Background queuing for heavy PDF OCR extraction"],
      benchmarkOrValidation: "Successfully processed 200+ handwritten lecture pages with >88% word extraction accuracy.",
    },
  },
  {
    slug: "predictwise",
    title: "PredictWise: Multi-Model ML Recommendation Engine",
    category: "Predictive ML & APIs · Scikit-Learn",
    filterCategory: "AI / ML",
    tierTag: "Predictive ML & APIs",
    honorBadge: "Multi-Model Inference & Valuation",
    tagline: "AI-powered prediction and recommendation service serving multiple trained machine learning models for pricing valuation with FastAPI endpoints and chatbot UI.",
    description:
      "AI-powered prediction and recommendation service serving multiple trained machine learning models for pricing valuation with FastAPI endpoints and chatbot UI.",
    problem:
      "Data science models frequently languish in offline Jupyter Notebooks without clean, low-latency production API wrappers or interactive interfaces.",
    solution:
      "Engineered a production-ready serving layer wrapping multiple Scikit-Learn regression and classification pipelines into clean REST endpoints with interactive frontend widgets.",
    caseStudyBreakdown: [
      {
        label: "Multi-Model Serving",
        value: "FastAPI endpoints serving multiple trained Scikit-Learn regression and classification pipelines concurrently.",
      },
      {
        label: "Feature Engineering",
        value: "Automated preprocessing pipelines with Pandas for continuous valuation and outlier rejection.",
      },
      {
        label: "Interactive Client",
        value: "Embedded conversational interface enabling non-technical users to probe model outputs with natural language.",
      },
    ],
    stack: ["FastAPI", "Scikit-Learn", "Pandas", "Python", "Chatbot UI"],
    featured: false,
    order: 8,
    metrics: [
      { label: "Serving", value: "FastAPI", detail: "Sub-20ms Prediction Latency" },
      { label: "Pipelines", value: "Scikit-Learn", detail: "Validated ML Regressors" },
    ],
    highlights: [
      "Feature preprocessing pipelines automated inside model serialization bundles",
      "Interactive chatbot UI guiding non-technical users through parameter configuration",
    ],
    screenshots: [],
    githubUrl: "https://github.com/saimonemon46/PredictWise",
    deepDive: {
      overview: "Production serving framework for tabular machine learning models with validation schemas and real-time inference.",
      architectureDescription: "FastAPI REST API validating JSON inputs using Pydantic schemas before running serialized Joblib pipelines.",
      keyDecisions: [
        { title: "Stateless Serving", explanation: "Allows instant horizontal scaling behind Nginx without shared session state." },
      ],
      concurrencyAndFailures: ["Input boundary validation preventing NaN injection"],
      benchmarkOrValidation: "Sub-20ms P99 inference latency under concurrent simulated queries.",
    },
  },
  {
    slug: "auto-docs",
    title: "Automated Code Documentation Engine",
    category: "Developer Tooling · LangChain",
    filterCategory: "Backend",
    tierTag: "Developer Tooling",
    honorBadge: "AST Parsing & Semantic Architecture Maps",
    tagline: "Automated documentation generator utilizing LangChain and RAG to extract semantic code contexts directly from repositories, producing human-readable architecture docs.",
    description:
      "Automated documentation generator utilizing LangChain and RAG to extract semantic code contexts directly from repositories, producing human-readable architecture docs.",
    problem:
      "Software architecture documentation quickly drifts out of sync with actual codebase commits, leaving onboarding engineers confused.",
    solution:
      "Engineered an AST-aware crawler that extracts function signatures, class invariants, and dependency relationships, generating living architecture documentation automatically.",
    caseStudyBreakdown: [
      {
        label: "AST Parsing",
        value: "Abstract Syntax Tree inspection mapping symbol dependencies, inheritance hierarchies, and API signatures.",
      },
      {
        label: "Contextual RAG",
        value: "LangChain retrieval pipeline generating human-readable architectural documentation directly from raw repositories.",
      },
      {
        label: "Automated Markdown",
        value: "Produces production-ready Markdown documentation and system diagrams from codebase analysis.",
      },
    ],
    stack: ["LangChain", "AST Parsing", "RAG", "Python"],
    featured: false,
    order: 9,
    metrics: [
      { label: "Parsing", value: "Native AST", detail: "Language Syntax Tree Extraction" },
      { label: "Generation", value: "Markdown Docs", detail: "Architectural Specification" },
    ],
    highlights: [
      "Abstract Syntax Tree (AST) parser extracting exact class and method call hierarchies",
      "LangChain integration synthesizing semantic architectural summaries from code tokens",
    ],
    screenshots: [],
    githubUrl: "https://github.com/saimonemon46/Auto-Code-Dcoumentation",
    deepDive: {
      overview: "Developer tool that turns raw code repositories into structured architectural markdown documentation.",
      architectureDescription: "Combines Python AST parsing with LLM context summarization to create module-level dependency maps.",
      keyDecisions: [{ title: "Deterministic AST First", explanation: "AST guarantees 100% accurate call trees before LLM synthesis." }],
      concurrencyAndFailures: ["Batch file processing with rate-limited API retries"],
      benchmarkOrValidation: "Generated comprehensive architecture specs across multiple open-source repositories.",
    },
  },
  {
    slug: "langchat",
    title: "LangChat: Agentic Conversational Engine",
    category: "Agentic AI Workflows · LangGraph",
    filterCategory: "AI / ML",
    tierTag: "Agentic AI Workflows",
    honorBadge: "Stateful LangGraph Thread Orchestration",
    tagline: "Versatile AI assistant engineered with LangGraph featuring dynamic tool access, stateful threaded conversations, streaming responses, and FastAPI endpoints.",
    description:
      "Versatile AI assistant engineered with LangGraph featuring dynamic tool access, stateful threaded conversations, streaming responses, and FastAPI endpoints.",
    problem:
      "Standard chatbots lack access to real-time tools, cannot execute multi-step plans, and lose state during complex workflows.",
    solution:
      "Implemented a LangGraph cyclic agent workflow with dynamic tool dispatch (web search, calculator, custom API invocations) and token streaming.",
    caseStudyBreakdown: [
      {
        label: "Stateful Graph",
        value: "LangGraph state machine maintaining threaded context memory, human-in-the-loop branching, and rollback capabilities.",
      },
      {
        label: "Dynamic Tools",
        value: "Zero-shot tool invocation allowing the assistant to query APIs, compute formulas, and query databases dynamically.",
      },
      {
        label: "Streaming Protocols",
        value: "FastAPI streaming response server delivering real-time token streams to interactive frontends.",
      },
    ],
    stack: ["LangGraph", "Tool Calling", "FastAPI", "Streamlit", "Python"],
    featured: false,
    order: 10,
    metrics: [
      { label: "State", value: "LangGraph", detail: "Cyclic Graph Execution" },
      { label: "Streaming", value: "Token SSE", detail: "Real-Time Response Generation" },
    ],
    highlights: [
      "Dynamic tool execution loop allowing agent to research, verify, and recalculate",
      "Persistent conversation thread memory with checkpointing",
    ],
    screenshots: [],
    githubUrl: "https://github.com/saimonemon46/LangChat",
    deepDive: {
      overview: "Agentic conversational engine featuring cyclic graph execution, memory checkpoints, and external tool calling.",
      architectureDescription: "Built with LangGraph state nodes, LangChain tool bindings, and FastAPI Server-Sent Events (SSE) streaming.",
      keyDecisions: [{ title: "Cyclic Graph Architecture", explanation: "Allows the agent to critique and re-execute failed tool invocations." }],
      concurrencyAndFailures: ["Timeouts on external tool execution prevents hung threads"],
      benchmarkOrValidation: "Verified with multi-hop reasoning tasks requiring external data verification.",
    },
  },
];
