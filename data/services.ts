// src/data/services.ts
// ─────────────────────────────────────────────────────────────
// Services offered. Each entry maps to a card on the home page.
// Replace with your own API fetch in production.
// ─────────────────────────────────────────────────────────────

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  tags: string[];
  color: string;
  order: number;
}

export const services: Service[] = [
  {
    id: "fullstack",
    order: 1,
    icon: "⚡",
    title: "Fullstack Web Development",
    description:
      "End-to-end web applications built with Next.js, React, and Node.js. From pixel-perfect UIs to robust APIs, I deliver complete, production-ready solutions.",
    tags: ["Next.js", "React", "Node.js", "REST / GraphQL"],
    color: "#00ffff",
  },
  {
    id: "odoo",
    order: 2,
    icon: "◎",
    title: "Odoo ERP Development",
    description:
      "Custom Odoo modules, integrations, and migrations. I tailor the ERP to fit your exact business workflow — from manufacturing to retail and HR.",
    tags: ["Odoo 16/17", "Python", "OWL", "XML-RPC"],
    color: "#bf00ff",
  },
  {
    id: "devops",
    order: 3,
    icon: "🐳",
    title: "DevOps & Deployment",
    description:
      "CI/CD pipelines, Docker containerization, cloud setup on AWS / VPS, and Nginx configuration. Reliable, scalable infrastructure for your applications.",
    tags: ["Docker", "GitHub Actions", "AWS", "Nginx"],
    color: "#0080ff",
  },
  {
    id: "api",
    order: 4,
    icon: "◈",
    title: "API Integration & Automation",
    description:
      "Connecting third-party services, building webhook systems, and automating repetitive business processes. I make your tools talk to each other.",
    tags: ["REST APIs", "Webhooks", "Zapier-like flows", "Cron jobs"],
    color: "#ff00ff",
  },
  {
    id: "database",
    order: 5,
    icon: "🗄",
    title: "Database Architecture",
    description:
      "Schema design, query optimization, and performance tuning for PostgreSQL. Migrations, indexing strategies, and data modeling for high-load systems.",
    tags: ["PostgreSQL", "Redis", "Prisma", "Query Tuning"],
    color: "#00ffff",
  },
  {
    id: "ui",
    order: 6,
    icon: "🎨",
    title: "UI/UX Implementation",
    description:
      "Translating Figma designs into pixel-perfect, animated, and fully responsive interfaces. Tailwind CSS, Framer Motion, and accessibility-first.",
    tags: ["Tailwind CSS", "Framer Motion", "Figma", "a11y"],
    color: "#bf00ff",
  },
];
