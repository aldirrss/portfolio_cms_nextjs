import {
  FaExchangeAlt,
  FaGithub
} from "react-icons/fa";
import {
  SiCss,
  SiDocker,
  SiFastapi,
  SiFirebase,
  SiGitlab,
  SiGithubactions,
  SiGraphql,
  SiJavascript,
  SiLinux,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiOdoo,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiQwik,
  SiReact,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import type { IconType } from "react-icons";

export interface TechItem {
  name: string;
  icon: IconType;
  desc: string;
}

export interface TechCategory {
  id: string;
  category: string;
  color: string;
  order: number;
  techs: TechItem[];
}

export const techStack: TechCategory[] = [
  {
    id: "odoo",
    category: "ERP / Odoo",
    color: "#ff00ff",
    order: 1,
    techs: [
      { name: "Odoo", icon: SiOdoo, desc: "ERP Platform" },
      { name: "QWeb", icon: SiQwik, desc: "Template Engine" },
      { name: "OWL", icon: SiJavascript, desc: "JS Framework" },
    ],
  },
  {
    id: "frontend",
    category: "Frontend",
    color: "#00ffff",
    order: 2,
    techs: [
      { name: "React", icon: SiReact, desc: "UI Library" },
      { name: "Next.js", icon: SiNextdotjs, desc: "React Framework" },
      { name: "TypeScript", icon: SiTypescript, desc: "Type Safety" },
      { name: "Tailwind", icon: SiTailwindcss, desc: "CSS Framework" },
      { name: "HTML/CSS", icon: SiCss, desc: "Markup and Styling" },
    ],
  },
  {
    id: "backend",
    category: "Backend",
    color: "#bf00ff",
    order: 3,
    techs: [
      { name: "Node.js", icon: SiNodedotjs, desc: "Runtime" },
      { name: "Python", icon: SiPython, desc: "Language" },
      { name: "FastAPI", icon: SiFastapi, desc: "API Framework" },
      { name: "GraphQL", icon: SiGraphql, desc: "Query Language" },
      { name: "REST API", icon: FaExchangeAlt, desc: "Architecture" },
    ],
  },
  {
    id: "database",
    category: "Database",
    color: "#0080ff",
    order: 4,
    techs: [
      { name: "PostgreSQL", icon: SiPostgresql, desc: "Relational DB" },
      { name: "MySQL", icon: SiMysql, desc: "Relational DB" },
      { name: "Redis", icon: SiRedis, desc: "Cache / Queue" },
      { name: "Firebase", icon: SiFirebase, desc: "BaaS" },
      { name: "Prisma", icon: SiPrisma, desc: "ORM" },
    ],
  },
  {
    id: "devops",
    category: "DevOps",
    color: "#ff00ff",
    order: 5,
    techs: [
      { name: "Docker", icon: SiDocker, desc: "Containers" },
      { name: "GitHub CI ", icon: FaGithub, desc: "CI/CD" },
      { name: "GitLab CI ", icon: SiGitlab, desc: "CI/CD" },
      { name: "Nginx", icon: SiNginx, desc: "Web Server" },
      { name: "Linux", icon: SiLinux, desc: "OS" },
    ],
  },
];

/** Flat list of all skills (for About page badge cloud) */
export const allSkillBadges: string[] = [
  "React", "Next.js", "TypeScript", "Python", "Odoo", "Node.js",
  "PostgreSQL", "Docker", "Redis", "GraphQL", "REST API", "Git",
  "Linux", "Nginx", "AWS", "Figma",
];

/** Animated skill bars shown on the About page */
export interface SkillBar {
  name: string;
  level: number; // 0-100
  color: string;
}

export const skillBars: SkillBar[] = [
  { name: "React / Next.js",    level: 95, color: "#00ffff" },
  { name: "TypeScript",         level: 90, color: "#bf00ff" },
  { name: "Odoo / Python",      level: 88, color: "#0080ff" },
  { name: "Node.js / Express",  level: 85, color: "#00ffff" },
  { name: "PostgreSQL",         level: 82, color: "#bf00ff" },
  { name: "Docker / DevOps",    level: 78, color: "#0080ff" },
];
