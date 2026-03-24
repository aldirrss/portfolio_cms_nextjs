// src/data/profile.ts
// ─────────────────────────────────────────────────────────────
// All personal / branding data.
// In a real app, fetch this from your API or CMS.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Aldi Rosid",
  initials: "AL",
  role: "Full-Stack Developer & Odoo Engineer",
  location: "Jakarta, Indonesia",
  timezone: "WIB (UTC+7)",
  email: "aldi@lemacore.com",
  cvUrl: "https://drive.google.com/file/d/151DPU4S5J-QPFdrnJJ0y5haEXE-Dqhkz/view?usp=sharing",
  avatarUrl:
    "/avatar.png",

  /** Short punchy headline shown in the About Summary on the home page */
  headline: "Full-Stack Developer specializing in ERP backend solutions, Odoo engineering, and enterprise integrations.",

  /** Multi-line bio shown in the full About page */
  bio: [
    "I'm a **Full-Stack Developer** with 4+ years of experience building ERP backends, integration services, and scalable business applications.",
    "Specialized in **Odoo development**, crafting custom modules, integrations, and automation workflows that transform business operations.",
    "Passionate about **clean architecture**, performance optimization, and designing reliable backend systems for real operational workflows.",
    "When I'm not coding, you can find me exploring the latest tech trends, contributing to open-source projects, or sharing insights on my blog.",
  ],

  /** Rotating job titles in the hero typing animation */
  typingRoles: [
    "Odoo Developer",
    2000,
    "Full-Stack Developer",
    2000,
    "ERP Backend Engineer",
    2000,
    "Odoo Engineer",
    2000,
    "System Integration Specialist",
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
  featuredBadges: ["Odoo", "Python", "PostgreSQL", "ERP Integration", "API Automation", "Docker"],

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
