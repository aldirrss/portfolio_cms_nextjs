import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import RootShell from "@/components/layout/RootShell";

export const metadata: Metadata = {
  metadataBase: new URL("https://aldi.lemacore.com"),
  title: { default: "Aldi Rosid | Programmer", template: "%s | Aldi Rosid" },
  description:
    "Portfolio of Aldi Rosid Saputra — Full-Stack Developer specializing in ERP backend solutions, Odoo engineering, and enterprise integrations.",
  keywords: ["full-stack developer", "odoo developer", "odoo engineer", "erp backend", "python", "portfolio"],
  authors: [{ name: "Aldi Rosid Saputra" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aldi.lemacore.com",
    siteName: "Aldi Rosid Saputra",
    title: "Aldi Rosid | Programmer",
    description: "Building robust ERP backend solutions with Odoo, Python, and scalable integration architecture.",
  },
  twitter: { card: "summary_large_image", title: "Aldi Rosid | Programmer" },
  robots: { index: true, follow: true },
};

/** Injected before first paint — reads system or saved preference and sets the class
 *  immediately so there is zero flash of wrong theme. */
const themeScript = `
(function() {
  try {
    var mode = localStorage.getItem('theme-mode') || 'system';
    var theme = mode === 'system'
      ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
      : mode;
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(theme);
  } catch(e) {
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add('dark');
  }
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Run before any CSS is parsed to prevent theme flash */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#030712" />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <RootShell>{children}</RootShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
