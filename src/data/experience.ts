export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  isCurrent: boolean;
  featuredMetric?: {
    value: string;
    label: string;
  };
  summary: string;
  achievements: string[];
  technologies: string[];
  certificateUrl?: string;
}

export const experiences: Experience[] = [
  {
    company: "Imjol",
    role: "Software Engineer",
    period: "Aug 2026 – Present",
    location: "Uttara, Dhaka, Bangladesh",
    isCurrent: true,
    featuredMetric: {
      value: "Full-Stack & Cloud",
      label: "Production Deployments",
    },
    summary:
      "Developing and scaling client web applications and backend microservices using Laravel, PHP, Next.js, React, and Node.js, backed by PostgreSQL and MySQL database solutions.",
    achievements: [
      "Architect and deliver high-performance backend REST APIs, service endpoints, and database schemas for active client projects.",
      "Manage Linux server environments, supporting deployment workflows, server provisioning, security configurations, and daemon supervision.",
      "Participate actively in engineering sprint planning, technical debt reduction, and architectural execution across web applications.",
      "Collaborate cross-functionally across frontend and backend boundaries to ensure sub-200ms API response latency and clean service decoupling.",
    ],
    technologies: [
      "Laravel",
      "PHP",
      "Next.js",
      "React",
      "Node.js",
      "PostgreSQL",
      "MySQL",
      "Linux",
      "Docker",
      "Git",
    ],
  },
  {
    company: "Leotech",
    role: "Software Developer Intern",
    period: "Jan 2026 – May 2026",
    location: "Panthapath, Dhaka, Bangladesh",
    isCurrent: false,
    featuredMetric: {
      value: "Full-Stack",
      label: "Fee & Academic Modules",
    },
    summary:
      "Contributed to full-stack web development for an enterprise education ERP system, implementing frontend interfaces, backend endpoints, and database workflows for core academic and student fee management modules.",
    achievements: [
      "Developed interactive frontend user interfaces and form workflows using JavaScript, HTML, and CSS for student fee collections and records.",
      "Built backend application logic in PHP to handle fee calculations, installment schedules, and student academic data processing.",
      "Maintained MySQL database queries and CRUD operations to manage student information and institutional fee structures.",
      "Collaborated with senior developers to debug issues, implement feature enhancements, and maintain stability across core ERP modules.",
    ],
    technologies: [
      "JavaScript",
      "PHP",
      "MySQL",
      "HTML5",
      "CSS3",
      "Full-Stack",
      "ERP Modules",
      "Git",
    ],
    certificateUrl:
      "https://drive.google.com/file/d/1_LDKtECfwbk1ma2Chs_J7LBz5KG9Ll9k/view?usp=drive_link",
  },
];
