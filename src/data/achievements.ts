export type AchievementCategory = "honors" | "certifications";

export interface Achievement {
  id: string;
  title: string;
  badge: string;
  metric: string;
  context: string;
  description: string;
  category: AchievementCategory;
  linkText?: string;
  linkUrl?: string;
}

export const achievements: Achievement[] = [
  {
    id: "millionx",
    title: "MillionX AI Buildathon 2025",
    badge: "National Finalist",
    metric: "Top 40",
    context: "Nationwide AI Hackathon (400+ Teams)",
    category: "honors",
    description:
      "Selected as one of the Top 40 teams nationwide for MediSA, an ambient clinical AI triage system built with grounded RAG and local vector indexing.",
    linkText: "MediSA Project →",
    linkUrl: "/work/medisa",
  },
  {
    id: "ieee-icadi",
    title: "IEEE ICADI 2026",
    badge: "Shortlisted Finalist",
    metric: "Top 42",
    context: "International Congress on AI & Digital Health Innovation",
    category: "honors",
    description:
      "Shortlisted among 42 teams globally for healthcare triage innovation and privacy-preserving architecture presented to international researchers.",
    linkText: "View Certificate →",
    linkUrl: "https://drive.google.com/file/d/1VZ1ycK-DhsUskuV7Fm8k_TMbMZBDXAyz/view?usp=sharing",
  },
  {
    id: "dsa-mastery",
    title: "Algorithmic Problem Solving",
    badge: "Continuous Mastery",
    metric: "125+",
    context: "75 GeeksforGeeks (220 Score) · 50+ LeetCode",
    category: "honors",
    description:
      "Disciplined mastery of 16 core algorithmic patterns across dynamic programming, trees, heaps, binary search, and graph invariants.",
    linkText: "View DSA Notes →",
    linkUrl: "/notes",
  },
  {
    id: "amar-ischool-ml",
    title: "Applied Data Science & Machine Learning",
    badge: "Course Completed",
    metric: "Certified",
    context: "Amar iSchool · ID: 5RGWDCNV",
    category: "certifications",
    description:
      "Completed comprehensive coursework in applied data science, statistical modeling, feature engineering, and supervised/unsupervised machine learning pipelines.",
    linkText: "View Certificate →",
    linkUrl: "https://drive.google.com/file/d/1d5Pg71--whflPk95fSMosYSFIDW2AaQS/view?usp=sharing",
  },
  {
    id: "amar-ischool-nlp",
    title: "Building NLP Projects",
    badge: "Course Completed",
    metric: "Certified",
    context: "Amar iSchool · ID: FZLQ1PDQ",
    category: "certifications",
    description:
      "Completed hands-on curriculum building end-to-end Natural Language Processing systems, covering tokenization, embeddings, similarity indexing, and text pipelines.",
    linkText: "View Certificate →",
    linkUrl: "https://drive.google.com/file/d/1HJLqemQFNF-prHeu5PknyC3PL4LO2_q8/view?usp=sharing",
  },
  {
    id: "gp-academy-prompt",
    title: "Prompt Engineering",
    badge: "Certificate of Excellence",
    metric: "Certified",
    context: "Grameenphone Academy · Issued Oct 2025",
    category: "certifications",
    description:
      "Completed certified specialization in structured prompt engineering, few-shot prompting strategies, chain-of-thought workflows, and LLM behavior tuning.",
    linkText: "View Certificate →",
    linkUrl: "https://drive.google.com/file/d/1iozQOvfS_2sf94nl-T1Y49GWc84JD0xK/view?usp=sharing",
  },
  {
    id: "campusx-agentic-ai",
    title: "Agentic AI using LangGraph",
    badge: "Course Completed",
    metric: "Agentic AI",
    context: "CampusX · Nitish Singh (YouTube)",
    category: "certifications",
    description:
      "Completed comprehensive training on multi-agent architectures, cyclic graph workflows, state persistence, tool calling, human-in-the-loop patterns, and supervisor agent design with LangGraph.",
    linkText: "CampusX LangGraph Playlist →",
    linkUrl: "https://www.youtube.com/playlist?list=PLKnIA16_RmvYsvB8qkUQuJmJNuiCUJFPL",
  },
  {
    id: "campusx-100-ml",
    title: "100 Days of Machine Learning",
    badge: "Curriculum Completed",
    metric: "100 Days",
    context: "CampusX · Nitish Singh (YouTube)",
    category: "certifications",
    description:
      "Completed the rigorous 100-day deep dive covering mathematical foundations (linear algebra, calculus, probability), classical algorithms from scratch, and ML deployment pipelines.",
    linkText: "CampusX ML Playlist →",
    linkUrl: "https://www.youtube.com/playlist?list=PLKnIA16_Rmvbr7zKYQuBfsVkjoLcJgxHH",
  },
  {
    id: "campusx-100-dl",
    title: "100 Days of Deep Learning",
    badge: "Curriculum Completed",
    metric: "100 Days",
    context: "CampusX · Nitish Singh (YouTube)",
    category: "certifications",
    description:
      "Completed the intensive 100-day deep learning masterclass covering neural network architectures, backpropagation mathematics, CNNs, RNNs/LSTMs, and modern tensor frameworks.",
    linkText: "CampusX DL Playlist →",
    linkUrl: "https://www.youtube.com/playlist?list=PLKnIA16_RmvYuZauWaPlRTC54KxSNLtNn",
  },
];
