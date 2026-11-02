export interface EngineeringCapability {
  id: string;
  capability: string;
  category: "Distributed & Backend" | "Transactions & Storage" | "Applied AI" | "Web Applications";
  summary: string;
  technologies: string[];
  evidence: {
    name: string;
    type: "Project" | "Experience";
    href: string;
    metric: string;
  };
}

export const engineeringCapabilities: EngineeringCapability[] = [
  {
    id: "api-dev",
    capability: "High-Throughput Async API Architecture",
    category: "Distributed & Backend",
    summary: "Asynchronous ASGI web services with non-blocking I/O, token-bucket rate limiting, and strict Pydantic/OpenAPI schema validation.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Redis"],
    evidence: {
      name: "MediSA Diagnostic API",
      type: "Project",
      href: "/work/medisa",
      metric: "Sub-15ms P95 Latency • ASGI Ingest",
    },
  },
  {
    id: "tx-processing",
    capability: "High-Concurrency Transaction Processing",
    category: "Transactions & Storage",
    summary: "Pessimistic row-level locking (SELECT FOR UPDATE), SETNX distributed mutexes, and canonical lock ordering to eliminate deadlocks.",
    technologies: ["PostgreSQL", "Redis", "Docker", "Python"],
    evidence: {
      name: "ZeroDrift Ledger Core",
      type: "Project",
      href: "/work/zerodrift",
      metric: "0 Deadlocks • Balance Conservation Invariant",
    },
  },
  {
    id: "async-pipelines",
    capability: "Asynchronous Pipelines & Distributed Task Queues",
    category: "Distributed & Backend",
    summary: "Decoupled asynchronous worker fleets, durable AMQP messaging exchanges, Dead Letter Exchanges (DLX), and horizontal queue scaling.",
    technologies: ["RabbitMQ", "Docker", "Celery", "MinIO (S3)"],
    evidence: {
      name: "Distributed Media Engine",
      type: "Project",
      href: "/work/distributed-media",
      metric: "Durable AMQP • 0 Dropped Packets Under Burst",
    },
  },
  {
    id: "web-apps",
    capability: "Enterprise Web Applications & Multi-Tenant Systems",
    category: "Web Applications",
    summary: "Domain-driven multi-tenant architectures, authenticated enterprise portals, clean service layers, and production client deliveries.",
    technologies: ["Laravel", "PHP", "Next.js", "MySQL", "Tailwind CSS"],
    evidence: {
      name: "Leotech & Imjol",
      type: "Experience",
      href: "#experience",
      metric: "Production Client Software Shipped",
    },
  },
  {
    id: "ai-orchestration",
    capability: "Applied AI Orchestration & Grounded RAG",
    category: "Applied AI",
    summary: "Cyclic agentic state machines with conditional edge branching, high-speed vector similarity indexing, and citation-backed clinical grounding.",
    technologies: ["LangGraph", "FAISS", "LangChain", "OpenAI / Groq"],
    evidence: {
      name: "MediSA Clinical AI Agent",
      type: "Project",
      href: "/work/medisa",
      metric: "Factual Grounding • Strict Citation Verification",
    },
  },
  {
    id: "media-clusters",
    capability: "Bare-Metal Real-Time Media & Edge Telemetry",
    category: "Distributed & Backend",
    summary: "Headless WebRTC audio/video egress, automated meeting recorder bots, real-time telemetry processing, and edge inference pipelines.",
    technologies: ["WebRTC", "Jitsi Meet", "Docker", "Linux / Bash", "OpenCV"],
    evidence: {
      name: "Jitsi Media Cluster",
      type: "Project",
      href: "/work/jitsi-cluster",
      metric: "Headless Egress • Automated Multi-Stream Recording",
    },
  },
];

export interface SkillCategory {
  title: string;
  badge: string;
  description: string;
  skills: {
    name: string;
    description: string;
    highlight?: boolean;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend Engineering",
    badge: "Core Expertise",
    description: "High-throughput asynchronous APIs, domain-driven clean architectures, and distributed task brokers.",
    skills: [
      { name: "Python", description: "Advanced async programming, typing, data structures", highlight: true },
      { name: "FastAPI", description: "High-performance async ASGI REST frameworks", highlight: true },
      { name: "Laravel", description: "Production enterprise MVC web applications", highlight: true },
      { name: "PHP", description: "Enterprise backends, legacy system modernizations" },
      { name: "Node.js", description: "Event-driven runtime & backend microservices" },
      { name: "Django", description: "Full-featured web framework & ORM architectures" },
    ],
  },
  {
    title: "Data & Infrastructure",
    badge: "Scale & Storage",
    description: "Relational ACID integrity, distributed caching, object storage, and containerized deployments.",
    skills: [
      { name: "PostgreSQL", description: "B-Tree indexing, row locking, transaction isolation", highlight: true },
      { name: "Redis", description: "Distributed locks (SETNX), caching, pub/sub queues", highlight: true },
      { name: "RabbitMQ", description: "Durable message exchanges, task ACKs, DLX queues", highlight: true },
      { name: "MinIO (S3)", description: "Distributed object storage, pre-signed URLs" },
      { name: "MySQL", description: "Query optimization, composite indexing, schema design" },
      { name: "Docker & Compose", description: "Multi-service container orchestration, health checks", highlight: true },
      { name: "Linux & Bash", description: "Server administration, daemon supervision, shell scripts" },
      { name: "Nginx", description: "Reverse proxy, rate limiting, SSL/TLS termination" },
      { name: "Git & GitHub", description: "Version control, branching workflows, PR code reviews" },
    ],
  },
  {
    title: "AI & Information Retrieval",
    badge: "Applied Intelligence",
    description: "Grounded RAG pipelines, local vector stores, agentic state machines, and autonomous dispatch.",
    skills: [
      { name: "LangChain", description: "Retrieval chains, prompt engineering, document loaders", highlight: true },
      { name: "LangGraph", description: "Cyclic state graphs, agentic workflows, memory nodes", highlight: true },
      { name: "FAISS", description: "Local vector indexing, high-speed similarity search", highlight: true },
      { name: "Grounded RAG", description: "Domain-specific grounding with strict factual citations" },
      { name: "OpenAI / LLMs", description: "Groq, OpenAI, Llama 3.1 API integrations" },
      { name: "Celery", description: "Distributed background task workers & schedulers" },
      { name: "YOLOv8 & OpenCV", description: "Computer vision, object detection, image processing" },
    ],
  },
  {
    title: "Frontend & Interfaces",
    badge: "Web Applications",
    description: "Modern component-driven user interfaces, state management, and real-time dashboards.",
    skills: [
      { name: "Next.js", description: "App Router, SSR, Server Components, API routes", highlight: true },
      { name: "React", description: "Hooks, Context, component architecture, state management", highlight: true },
      { name: "JavaScript (ES6+)", description: "Modern asynchronous JavaScript, WebSockets" },
      { name: "Tailwind CSS", description: "Utility-first responsive layouts and custom design tokens" },
      { name: "HTML5 & CSS3", description: "Semantic markup, modern CSS grid/flexbox, accessibility" },
      { name: "Bootstrap", description: "Rapid administrative UI scaffolding" },
    ],
  },
];
