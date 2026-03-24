// src/data/profile.ts
// ─────────────────────────────────────────────────────────────
// All personal / branding data.
// In a real app, fetch this from your API or CMS.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Aldi Rosid",
  initials: "AL",
  role: "Fullstack & Odoo Developer",
  location: "Jakarta, Indonesia",
  timezone: "WIB (UTC+7)",
  email: "aldi@lemacore.com",
  cvUrl: "https://drive.google.com/file/d/151DPU4S5J-QPFdrnJJ0y5haEXE-Dqhkz/view?usp=sharing",
  avatarUrl:
    "/avatar.png",

  /** Short punchy headline shown in the About Summary on the home page */
  headline: "Building software that makes a difference — one commit at a time.",

  /** Multi-line bio shown in the full About page */
  bio: [
    "I'm a **Fullstack Developer** with 5+ years of experience building scalable web applications and ERP systems.",
    "Specialized in **Odoo development**, crafting custom modules, integrations, and automation workflows that transform business operations.",
    "Passionate about **clean architecture**, performance optimization, and building interfaces that users actually love.",
    "When not coding, I contribute to **open source**, explore new tech stacks, and mentor junior developers in the community.",
  ],

  /** Rotating job titles in the hero typing animation */
  typingRoles: [
    "Odoo Developer",
    2000,
    "Fullstack Developer",
    2000,
    "Business Analyst System",
    2000,
    "Odoo Software Engineer",
    2000,
    "React / Next.js Expert",
    2000,
    "DevOps",
    2000,
  ] as (string | number)[],

  stats: [
    { value: "4+",  label: "Years Exp" },
    { value: "10+", label: "Projects" },
    { value: "4+", label: "Clients" },
  ],

  quickInfo: [
    { icon: "◈", label: "Location",   value: "Jakarta, Indonesia" },
    { icon: "◎", label: "Education",  value: "D3 Informatics Management" },
    { icon: "◉", label: "Experience", value: "4+ Years" },
    { icon: "◫", label: "Status",     value: "Available" },
  ],

  /** Top skill badges shown on the home About summary */
  featuredBadges: ["React", "Next.js", "Odoo", "TypeScript", "PostgreSQL", "Docker"],

  socials: [
    {
      id: "github",
      label: "GitHub",
      href: "https://github.com/aldirrss",
      icon: "github",
      color: "#bf00ff",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://linkedin.com/in/aldirosidsaputra",
      icon: "linkedin",
      color: "#00ffff",
    },
    {
      id: "instagram",
      label: "Instagram",
      href: "https://instagram.com/aldirrss",
      icon: "instagram",
      color: "#ff00ff",
    },
  ],
} as const;

export type Profile = typeof profile;
