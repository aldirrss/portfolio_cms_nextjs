# ⚡ Aldi Rosid — IT Portfolio

A **premium, futuristic IT portfolio** built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion. Features a cyberpunk aesthetic with neon accents, glassmorphism, interactive particles, and smooth animations.

---

## 🚀 Live Preview Features

- **Animated particle canvas** — interactive, mouse-reactive particles
- **Typing animation** — cycles through skill titles
- **Custom neon cursor** — tracks mouse with smooth lag effect
- **Command palette** — VSCode-style ⌘K launcher
- **Loading screen** — animated boot sequence with progress bar
- **Sticky glassmorphism navbar** — with active section tracking
- **Smooth scroll navigation** — with animated section transitions
- **Theme switcher** — dark ↔ light mode
- **Project filter tabs** — filter by category with Framer Motion layout animations
- **Vertical timeline** — animated career history
- **Contact form** — with loading and success states
- **SEO optimized** — meta, OpenGraph, Twitter cards

---

## 🗂 Folder Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout + SEO metadata
│   ├── page.tsx            # Main page (orchestrates all sections)
│   └── globals.css         # Global styles, animations, design tokens
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky navbar with mobile menu
│   │   └── Footer.tsx      # Footer with back-to-top
│   │
│   ├── sections/
│   │   ├── HeroSection.tsx       # Fullscreen hero with particle canvas
│   │   ├── AboutSection.tsx      # Bio + animated skill progress bars
│   │   ├── TechStackSection.tsx  # Categorized tech cards with hover effects
│   │   ├── ProjectsSection.tsx   # Filterable project grid with lazy images
│   │   ├── ExperienceSection.tsx # Vertical timeline
│   │   └── ContactSection.tsx    # Contact form + social links
│   │
│   └── ui/
│       ├── ThemeProvider.tsx   # Dark/light theme context
│       ├── LoadingScreen.tsx   # Animated boot sequence
│       ├── CustomCursor.tsx    # Neon cursor with hover effects
│       └── CommandPalette.tsx  # ⌘K VSCode-style command launcher
│
public/
├── favicon.svg
└── cv.pdf                  # Place your CV here
```

---

## 🛠 Tech Stack

| Tool                            | Purpose                     |
| ------------------------------- | --------------------------- |
| **Next.js 15**                  | Framework (App Router)      |
| **TypeScript**                  | Type safety                 |
| **Tailwind CSS 3**              | Utility-first styling       |
| **Framer Motion**               | Animations & transitions    |
| **react-type-animation**        | Typing effect in hero       |
| **react-intersection-observer** | Scroll-triggered animations |
| **next-themes**                 | Theme switching             |
| **next/image**                  | Optimized image loading     |

---

## ⚙️ Getting Started

### 1. Clone / Download

```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production

```bash
npm run build
npm start
```

---

## 🎨 Customization Guide

### Update Personal Info

**Hero Section** — `src/components/sections/HeroSection.tsx`

- Change name, bio text, stats (years, projects, clients)
- Replace profile image URL with your own

**About Section** — `src/components/sections/AboutSection.tsx`

- Update bio paragraphs
- Adjust skill levels (0–100)
- Modify tech badges

**Projects** — `src/components/sections/ProjectsSection.tsx`

- Replace the `projects` array with your own projects
- Add/change image URLs, descriptions, tags, links

**Experience** — `src/components/sections/ExperienceSection.tsx`

- Update the `experiences` array with your career history

**Contact** — `src/components/sections/ContactSection.tsx`

- Update email, location, timezone
- Replace social media links

### Change Colors

Edit CSS variables in `src/app/globals.css`:

```css
:root {
  --neon-purple: #bf00ff; /* Primary neon */
  --neon-blue: #0080ff; /* Secondary */
  --neon-cyan: #00ffff; /* Accent */
  --neon-pink: #ff00ff; /* Highlight */
}
```

### Add Your CV

Place your CV PDF at `public/cv.pdf` — the Download CV button links directly to it.

### Update SEO Metadata

Edit `src/app/layout.tsx` — update `title`, `description`, `openGraph`, `twitter` fields.

---

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) for automatic deployments.

### Netlify

```bash
npm run build
# Upload the .next folder or connect via GitHub
```

### Self-hosted (PM2 + Nginx)

```bash
npm run build
pm2 start npm --name "portfolio" -- start
```

---

## 📋 Environment Variables

No required env vars for basic use. If you add a real contact form backend, create `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://yoursite.com
RESEND_API_KEY=your_resend_key  # for email sending
SMTP_HOST=smtp.your-provider.com
SMTP_PORT=587
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-password
SMTP_FROM="Portfolio Contact <no-reply@yourdomain.com>"
```

---

## ⌨️ Keyboard Shortcuts

| Shortcut        | Action                |
| --------------- | --------------------- |
| `⌘K` / `Ctrl+K` | Open Command Palette  |
| `Esc`           | Close Command Palette |
| `↑↓`            | Navigate commands     |
| `Enter`         | Execute command       |

---

## 📄 License

MIT — free to use, modify, and deploy for personal or commercial projects.

---

Built with ❤️ and ⚡ by Aldi Rosid
