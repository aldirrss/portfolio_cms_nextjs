// src/data/projects.ts
// ─────────────────────────────────────────────────────────────
// Project portfolio entries.
// category: "fullstack" | "odoo" | "ai"
// ─────────────────────────────────────────────────────────────

export type ProjectCategory = "fullstack" | "odoo" | "android";

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
  documentationUrl: string;
  screenshots: ProjectScreenshot[];
  featured: boolean;
  color: string;
  order: number;
}

export interface ProjectScreenshot {
  title: string;
  imageUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "hijab-android-app",
    order: 1,
    title: "Hijab Android App",
    description:
      "Designed and developed an Android application for managing inventory and sales of a hijab retail business. The app features product catalog management, order processing, customer tracking, and sales analytics. Built with Kotlin and integrated with a Laravel backend for seamless data synchronization.",
    imageUrl:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
    tags: ["Kotlin", "PHP", "Laravel", "MySQL", "Rest API", "Payments Gateway", "Midtrans"],
    category: "android",
    liveUrl: "",
    githubUrl: "",
    documentationUrl: "https://docs.hijab-android-app.com",
    screenshots: [],
    featured: false,
    color: "#bf00ff",
  },
  {
    id: 2,
    slug: "rent-car-android-app",
    order: 2,
    title: "Rent Car Android App",
    description:
      "Developed a comprehensive Android application for a car rental service, enabling users to browse available vehicles, make reservations, and manage their bookings. The app includes features such as real-time availability, secure payment processing, and user profile management. Built using Kotlin with a Laravel backend for robust data handling and synchronization.",
    imageUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    tags: ["Kotlin", "PHP", "Laravel", "MySQL", "Rest API", "Face Recognition"],
    category: "android",
    liveUrl: "",
    githubUrl: "",
    documentationUrl: "https://docs.rent-car-android-app.com",
    screenshots: [],
    featured: false,
    color: "#00ffff",
  },
  {
    id: 3,
    slug: "vapestore-android-app",
    order: 3,
    title: "VapeStore Android App",
    description:
      "Designed and developed an Android application for a vape store, featuring product browsing, shopping cart functionality, and secure checkout. Integrated with a Node.js backend for real-time inventory management and order processing.",
    imageUrl:
      "https://aldi.alrasyid.live/_next/image?url=%2Fassets%2Fproject%2Fthumb7.png&w=1920&q=75",
    tags: ["Kotlin", "PHP", "Laravel", "MySQL", "Rest API"],
    category: "android",
    liveUrl: "",
    githubUrl: "",
    documentationUrl: "https://docs.vapestore-android-app.com",
    screenshots: [],
    featured: false,
    color: "#0080ff",
  },
  {
    id: 4,
    slug: "atlet-management-laravel",
    order: 4,
    title: "Atlet Management System",
    description:
      "Comprehensive athlete management system built with Laravel, providing features for athlete registration, event scheduling, performance tracking, and reporting. The system includes a user-friendly admin dashboard for managing athletes and events, as well as a public-facing interface for event information and athlete profiles.",
    imageUrl:
      "https://aldi.alrasyid.live/_next/image?url=%2Fassets%2Fproject%2Fthumb6.png&w=1920&q=75",
    tags: ["Laravel", "PHP", "MySQL", "Blade", "JavaScript", "HTML/CSS"],
    category: "fullstack",
    liveUrl: "",
    githubUrl: "",
    documentationUrl: "https://docs.atlet-management-laravel.com",
    screenshots: [],
    featured: false,
    color: "#bf00ff",
  },
  {
    id: 5,
    slug: "kos-management-laravel",
    order: 5,
    title: "Kos Management System",
    description:
      "Comprehensive student housing management system built with Laravel, providing features for room allocation, payment processing, maintenance requests, and reporting. The system includes a user-friendly admin dashboard for managing properties and tenants, as well as a tenant-facing interface for submitting requests and viewing account information.",
    imageUrl:
      "https://aldi.alrasyid.live/_next/image?url=%2Fassets%2Fproject%2Fthumb5.png&w=1920&q=75",
    tags: ["Laravel", "PHP", "MySQL", "Blade", "JavaScript", "HTML/CSS"],
    category: "fullstack",
    liveUrl: "",
    githubUrl: "",
    documentationUrl: "https://docs.kos-management-laravel.com",
    screenshots: [],
    featured: false,
    color: "#00ffff",
  },
  {
    id: 6,
    slug: "dinas-budaya-laravel",
    order: 6,
    title: "Dinas Budaya Laravel",
    description:
      "Web application for managing cultural heritage data and events, built with Laravel. Features include user authentication, content management, and reporting.",
    imageUrl:
      "https://aldi.alrasyid.live/_next/image?url=%2Fassets%2Fproject%2Fthumb4.png&w=1920&q=75",
    tags: ["Laravel", "PHP", "MySQL", "Blade", "JavaScript", "HTML/CSS"],
    category: "fullstack",
    liveUrl: "",
    githubUrl: "",
    documentationUrl: "https://docs.dinas-budaya-laravel.com",
    screenshots: [],
    featured: false,
    color: "#ff00ff",
  },
  {
    id: 7,
    slug: "ppdb-management-odoo",
    order: 7,
    title: "PPDB Management System",
    description:
      "Web application for managing student admission processes, built with Odoo. Features include user authentication, application tracking, and reporting.",
    imageUrl:
      "https://aldi.alrasyid.live/_next/image?url=%2Fassets%2Fproject%2Fthumb3.png&w=1920&q=75",
    tags: ["Odoo", "Python", "PostgreSQL", "JavaScript", "OWL", "QWeb"],
    category: "odoo",
    liveUrl: "",
    githubUrl: "",
    documentationUrl: "https://docs.ppdb-management-odoo.com",
    screenshots: [],
    featured: false,
    color: "#bf00ff",
  },
  {
    id: 8,
    slug: "clinic-management-odoo",
    order: 8,
    title: "Clinic Management System",
    description:
      "Web application for managing clinic operations, built with Odoo. Features include patient management, appointment scheduling, and reporting.",
    imageUrl:
      "https://aldi.alrasyid.live/_next/image?url=%2Fassets%2Fproject%2Fthumb2.png&w=1920&q=75",
    tags: ["Odoo", "Python", "PostgreSQL", "JavaScript", "OWL", "QWeb"],
    category: "odoo",
    liveUrl: "",
    githubUrl: "https://github.com/aldirrss/clinic_management.git",
    documentationUrl: "https://docs.clinic-management-odoo.com",
    screenshots: [],
    featured: true,
    color: "#00ffff",
  },
  {
    id: 9,
    slug: "restaurant-fairy-kale",
    order: 9,
    title: "Restaurant Fairy Kale",
    description:
      "Web application for managing restaurant operations, built with Odoo. Features include menu management, order processing, and reporting.",
    imageUrl:
      "https://aldi.alrasyid.live/_next/image?url=%2Fassets%2Fproject%2Fthumb1.png&w=1920&q=75",
    tags: ["Odoo", "Python", "PostgreSQL", "JavaScript", "OWL", "QWeb", "Docker"],
    category: "odoo",
    liveUrl: "",
    githubUrl: "",
    documentationUrl: "https://docs.restaurant-fairy-kale.com",
    screenshots: [],
    featured: true,
    color: "#0080ff",
  },
  {
    id: 10,
    slug: "agriculture-management-odoo",
    order: 10,
    title: "Agriculture Management System",
    description:
      "Web application for managing agricultural operations, built with Odoo. Features include crop tracking, inventory management, and reporting.",
    imageUrl:
      "/images/projects/10/thumbnail.png",
    tags: ["Odoo", "Python", "PostgreSQL", "JavaScript", "OWL", "QWeb"],
    category: "odoo",
    liveUrl: "https://demo.lemacore.com",
    githubUrl: "",
    documentationUrl: "https://docs.agriculture-management-odoo.com",
    screenshots: [
      {
        title: "Login Page",
        imageUrl:
          "/images/projects/10/img1.png",
      },
    ],
    featured: true,
    color: "#00ff80",
  }
];

/** Returns the 3 most-recently-ordered featured projects for the home page */
export function getFeaturedProjects(limit = 3): Project[] {
  return projects
    .filter((p) => p.featured) // all projects are candidates; adjust filter as needed
    .sort((a, b) => a.order - b.order)
    .slice(0, limit);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectScreenshots(project: Project): ProjectScreenshot[] {
  return project.screenshots ?? [];
}

export const projectCategories = [
  { id: "all",       label: "All" },
  { id: "odoo",      label: "Odoo" },
  { id: "fullstack", label: "Full-Stack" },
  { id: "android",   label: "Android" },
] as const;
