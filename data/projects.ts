// src/data/projects.ts
// ─────────────────────────────────────────────────────────────
// Project portfolio entries.
// category: "fullstack" | "odoo" | "ai"
// ─────────────────────────────────────────────────────────────

export type ProjectCategory = "fullstack" | "odoo" | "ai";

export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  category: ProjectCategory;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  color: string;
  order: number;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "nexacommerce",
    order: 1,
    title: "NexaCommerce",
    description:
      "Full-featured e-commerce platform with real-time inventory, AI-powered recommendations, and seamless payment gateway integration. Built for scale with microservices architecture.",
    imageUrl:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Redis", "Docker"],
    category: "fullstack",
    liveUrl: "https://demo.com",
    githubUrl: "https://github.com",
    featured: true,
    color: "#bf00ff",
  },
  {
    id: 2,
    slug: "odoo-fleet-manager",
    order: 2,
    title: "Odoo Fleet Manager",
    description:
      "Custom Odoo module for comprehensive fleet management — vehicle tracking, maintenance scheduling, fuel consumption analytics, and driver management with OWL components.",
    imageUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    tags: ["Odoo 16", "Python", "OWL", "QWeb", "PostgreSQL"],
    category: "odoo",
    liveUrl: "https://demo.com",
    githubUrl: "https://github.com",
    featured: true,
    color: "#00ffff",
  },
  {
    id: 3,
    slug: "devboard-analytics",
    order: 3,
    title: "DevBoard Analytics",
    description:
      "Real-time developer analytics dashboard integrating GitHub, Jira, and Slack APIs. Visualize team velocity, PR cycle times, and deployment frequency.",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tags: ["React", "D3.js", "Node.js", "GraphQL", "WebSocket"],
    category: "fullstack",
    liveUrl: "https://demo.com",
    githubUrl: "https://github.com",
    featured: false,
    color: "#0080ff",
  },
  {
    id: 4,
    slug: "hrconnect-erp",
    order: 4,
    title: "HRConnect ERP",
    description:
      "End-to-end HR module built on Odoo with payroll automation, leave management, performance appraisal, and custom reporting — serving 500+ employees.",
    imageUrl:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop",
    tags: ["Odoo 17", "Python", "XML-RPC", "PostgreSQL", "Nginx"],
    category: "odoo",
    liveUrl: "https://demo.com",
    githubUrl: "https://github.com",
    featured: false,
    color: "#bf00ff",
  },
  {
    id: 5,
    slug: "cloudvault-storage",
    order: 5,
    title: "CloudVault Storage",
    description:
      "Secure file storage and sharing platform with end-to-end encryption, real-time collaboration, version history, and S3-compatible API. Handles petabytes of data.",
    imageUrl:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop",
    tags: ["Next.js", "AWS S3", "FastAPI", "Redis", "Docker"],
    category: "fullstack",
    liveUrl: "https://demo.com",
    githubUrl: "https://github.com",
    featured: false,
    color: "#00ffff",
  },
  {
    id: 6,
    slug: "ai-code-review-bot",
    order: 6,
    title: "AI Code Review Bot",
    description:
      "GitHub bot leveraging OpenAI GPT-4 for automated code reviews. Catches bugs, suggests improvements, ensures style consistency, and generates PR summaries.",
    imageUrl:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
    tags: ["Node.js", "OpenAI", "GitHub API", "TypeScript", "Webhooks"],
    category: "ai",
    liveUrl: "https://demo.com",
    githubUrl: "https://github.com",
    featured: false,
    color: "#ff00ff",
  },
];

/** Returns the 3 most-recently-ordered featured projects for the home page */
export function getFeaturedProjects(limit = 3): Project[] {
  return projects
    .filter((p) => p.featured) // all projects are candidates; adjust filter as needed
    .sort((o) => o.order)
    .slice(0, limit);
}

export const projectCategories = [
  { id: "all",       label: "All" },
  { id: "fullstack", label: "Full-Stack" },
  { id: "odoo",      label: "Odoo" },
  { id: "ai",        label: "AI/ML" },
] as const;
