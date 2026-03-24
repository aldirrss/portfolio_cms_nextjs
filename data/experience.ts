// src/data/experience.ts
// ─────────────────────────────────────────────────────────────
// Work experience timeline & education.
// ─────────────────────────────────────────────────────────────

export type TimelineSide = "left" | "right";

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  type: "Full-time" | "Part-time" | "Freelance" | "Contract" | "Internship";
  description: string;
  highlights: string[];
  color: string;
  side: TimelineSide;
  order: number;
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
  gpa?: string;
  icon?: string;
  order: number;
}

export const experiences: Experience[] = [
  {
    id: 1,
    order: 1,
    role: "Senior Fullstack Developer",
    company: "TechNova Solutions",
    period: "2022 — Present",
    type: "Full-time",
    description:
      "Leading development of enterprise SaaS platforms serving 10,000+ users. Architected microservices infrastructure reducing deployment time by 60%. Mentoring a team of 5 junior developers.",
    highlights: ["Next.js 14", "Node.js", "PostgreSQL", "Docker", "AWS"],
    color: "#bf00ff",
    side: "right",
  },
  {
    id: 2,
    order: 2,
    role: "Odoo Technical Consultant",
    company: "ERP Masters Indonesia",
    period: "2020 — 2022",
    type: "Full-time",
    description:
      "Developed and deployed custom Odoo modules for 15+ enterprise clients across manufacturing, retail, and logistics sectors. Integrated Odoo with third-party APIs and built automated reporting systems.",
    highlights: ["Odoo 14/15", "Python", "OWL", "XML-RPC", "PostgreSQL"],
    color: "#00ffff",
    side: "left",
  },
  {
    id: 3,
    order: 3,
    role: "Frontend Developer",
    company: "Pixelcraft Studio",
    period: "2019 — 2020",
    type: "Full-time",
    description:
      "Built responsive web applications and component libraries for a fintech startup. Implemented real-time features using WebSocket. Improved app performance by 40% through code optimization.",
    highlights: ["React", "TypeScript", "Redux", "WebSocket", "Styled Components"],
    color: "#0080ff",
    side: "right",
  },
  {
    id: 4,
    order: 4,
    role: "Web Developer",
    company: "Freelance",
    period: "2018 — 2019",
    type: "Freelance",
    description:
      "Delivered 20+ web projects for local businesses — e-commerce stores, company profiles, and custom web apps. Established foundation in full-stack development and client communication.",
    highlights: ["PHP", "Laravel", "MySQL", "Vue.js", "Bootstrap"],
    color: "#ff00ff",
    side: "left",
  },
];

export const education: Education[] = [
  {
    id: 1,
    order: 1,
    degree: "Natural Science Major",
    institution: "SMAN 1 Wates",
    period: "2016 — 2019",
    gpa: "",
    icon: "🎓",
  },
  {
    id: 2,
    order: 2,
    degree: "D3 Informatics Management",
    institution: "State Polytechnic of Malang",
    period: "2020 — 2023",
    gpa: "3.77",
    icon: "🎓",
  },
];
