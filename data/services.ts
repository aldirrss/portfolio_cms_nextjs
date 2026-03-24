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
    title: "Full-Stack ERP Development",
    description:
      "End-to-end ERP and business platforms built with Python, Node.js, and robust API architecture. From workflow modeling to secure backend services, I deliver production-ready solutions.",
    tags: ["Python", "Node.js", "PostgreSQL", "REST / GraphQL"],
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
    title: "ERP Interface Engineering",
    description:
      "Building clean, functional ERP interfaces for dashboards, operational workflows, and approval pipelines with usability and speed in mind.",
    tags: ["Odoo Views", "QWeb/OWL", "Workflow UX", "a11y"],
    color: "#bf00ff",
  },
];
