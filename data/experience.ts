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
    role: "Full-Stack Developer",
    company: "Self-Employed / Freelance",
    period: "2022 — 2024",
    type: "Freelance",
    description:
      "Develop elegant, business-oriented websites and dashboards with a focus on clarity, usability, and performance. Built using PHP (Laravel), enabling flexible and scalable customization.",
    highlights: ["PHP", "Laravel", "MySQL", "JavaScript", "HTML/CSS"],
    color: "#bf00ff",
    side: "right",
  },
  {
    id: 2,
    order: 2,
    role: "Android Developer Intern",
    company: "Pengadilan Negeri Kab. Kediri",
    period: "2022",
    type: "Internship",
    description:
      "Designed and developed an Android application for case management, enabling court staff to track case progress, manage schedules, and access legal documents on the go. The app improved efficiency and communication within the court system.",
    highlights: ["Kotlin", "MySQL", "PHP", "Laravel", "Mapbox", "Git", "MVVM Architecture"],
    color: "#00ffff",
    side: "left",
  },
  {
    id: 3,
    order: 3,
    role: "Odoo Developer",
    company: "PT IGP Internasional, Sansico Group",
    period: "Nov 2023 — Dec 2025",
    type: "Full-time",
    description:
      "Led the development and deployment of Odoo ERP solutions for a major retail client, including custom module development, third-party integrations, and performance optimizations. Delivered scalable ERP systems that streamlined operations across inventory, sales, and finance.",
    highlights: ["Odoo 17/18/19", "Python", "PostgreSQL", "XML", "QWeb", "OWL", "Git", "Linux", "Docker"],
    color: "#0080ff",
    side: "right",
  },
  {
    id: 4,
    order: 4,
    role: "Odoo Developer",
    company: "PT Bipo Teknologi Otomotif",
    period: "Dec 2025 — Present",
    type: "Full-time",
    description:
      "Spearheading Odoo ERP development for a leading automotive company, delivering custom modules, complex integrations, and workflow automations. Focused on building robust backend systems that support real operational workflows and drive business efficiency.",
    highlights: ["Odoo 18", "Odoo 8", "Python", "PostgreSQL", "XML", "QWeb", "OWL", "Git", "Linux"],
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
