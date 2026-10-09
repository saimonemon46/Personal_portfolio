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
