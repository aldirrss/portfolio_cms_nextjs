"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/components/ui/ThemeProvider";

const navLinks = [
  { label: "Home",       href: "/" },
  { label: "About",      href: "/about" },
  { label: "Stack",      href: "/stack" },
  { label: "Projects",   href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Contact",    href: "/contact" },
];

export default function Navbar({ onCmdOpen }: { onCmdOpen?: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const themeMenuRef = useRef<HTMLDivElement>(null);
  const { theme, mode, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  useEffect(() => {
    if (!themeMenuOpen) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!themeMenuRef.current) return;
      if (!themeMenuRef.current.contains(event.target as Node)) {
        setThemeMenuOpen(false);
      }
    };

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setThemeMenuOpen(false);
    };

    window.addEventListener("mousedown", onPointerDown);
    window.addEventListener("keydown", onEscape);
    return () => {
      window.removeEventListener("mousedown", onPointerDown);
      window.removeEventListener("keydown", onEscape);
    };
  }, [themeMenuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const themeButtonLabel =
    mode === "system" ? "System" : mode === "light" ? "Light" : "Night";

  const themeButtonIcon =
    mode === "system" ? "◒" : theme === "dark" ? "◐" : "◑";

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled ? "glass border-b border-neon-purple/10 shadow-lg shadow-neon-purple/5" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2" data-hover>
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-dark-800 border border-neon-purple/40" style={{ boxShadow: "0 0 15px rgba(191,0,255,0.3)" }}>
                  <span className="font-display text-sm font-bold gradient-text">AL</span>
                </div>
                <span className="font-display text-sm font-semibold gradient-text hidden sm:block tracking-wider">ALDI ROSID</span>
              </motion.div>
            </Link>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link key={link.label} href={link.href} data-hover
                    className={`relative px-3 py-1.5 font-mono text-xs tracking-widest uppercase transition-all duration-200 rounded-md ${active ? "text-neon-cyan" : "text-slate-400 hover:text-slate-200"}`}
                  >
                    {active && (
                      <motion.div layoutId="nav-active"
                        className="absolute inset-0 rounded-md bg-neon-cyan/5 border border-neon-cyan/20"
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center gap-2">
              {onCmdOpen && (
                <button onClick={onCmdOpen} data-hover className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-700 hover:border-neon-purple/40 transition-all">
                  <span className="font-mono text-[10px] text-slate-500 tracking-widest">⌘K</span>
                </button>
              )}
              <div className="relative" ref={themeMenuRef}>
                <button
                  onClick={() => setThemeMenuOpen((v) => !v)}
                  data-hover
                  className="h-9 px-3 rounded-lg border border-slate-700 hover:border-neon-cyan/40 flex items-center justify-center gap-2 transition-all hover:bg-neon-cyan/5"
                  aria-label="Change theme"
                  aria-haspopup="menu"
                  aria-expanded={themeMenuOpen}
                >
                  <span className="text-sm leading-none">{themeButtonIcon}</span>
                  <span className="hidden sm:block font-mono text-[10px] text-slate-300 tracking-widest uppercase">{themeButtonLabel}</span>
                </button>

                <AnimatePresence>
                  {themeMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.98 }}
                      transition={{ duration: 0.16 }}
                      className="absolute right-0 mt-2 w-40 rounded-xl glass border border-slate-700/80 overflow-hidden"
                      role="menu"
                    >
                      <button
                        onClick={() => {
                          setTheme("system");
                          setThemeMenuOpen(false);
                        }}
                        className={`w-full px-3 py-2.5 text-left font-mono text-xs tracking-widest uppercase transition-colors ${
                          mode === "system"
                            ? "text-neon-blue bg-neon-blue/10"
                            : "text-slate-300 hover:bg-neon-blue/10 hover:text-neon-blue"
                        }`}
                        role="menuitem"
                      >
                        System
                      </button>
                      <div className="h-px w-full bg-slate-700/70" />
                      <button
                        onClick={() => {
                          setTheme("light");
                          setThemeMenuOpen(false);
                        }}
                        className={`w-full px-3 py-2.5 text-left font-mono text-xs tracking-widest uppercase transition-colors ${
                          mode === "light"
                            ? "text-neon-cyan bg-neon-cyan/10"
                            : "text-slate-300 hover:bg-neon-cyan/10 hover:text-neon-cyan"
                        }`}
                        role="menuitem"
                      >
                        Light
                      </button>
                      <button
                        onClick={() => {
                          setTheme("dark");
                          setThemeMenuOpen(false);
                        }}
                        className={`w-full px-3 py-2.5 text-left font-mono text-xs tracking-widest uppercase transition-colors ${
                          mode === "dark"
                            ? "text-neon-purple bg-neon-purple/10"
                            : "text-slate-300 hover:bg-neon-purple/10 hover:text-neon-purple"
                        }`}
                        role="menuitem"
                      >
                        Night
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-lg border border-slate-700" data-hover>
                {[0, 1, 2].map((i) => (
                  <span key={i} className={`block h-0.5 bg-slate-300 transition-all duration-300 ${mobileOpen ? i === 0 ? "w-5 rotate-45 translate-y-2" : i === 1 ? "w-0 opacity-0" : "w-5 -rotate-45 -translate-y-2" : "w-5"}`} />
                ))}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, x: "100%" }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: "100%" }} transition={{ type: "spring", damping: 25, stiffness: 200 }} className="fixed top-16 right-0 bottom-0 w-72 z-[99] glass border-l border-neon-purple/10">
            <div className="flex flex-col p-6 gap-2">
              {navLinks.map((link, i) => {
                const active = isActive(link.href);
                return (
                  <motion.div key={link.label} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                    <Link href={link.href} className={`block px-4 py-3 rounded-lg font-mono text-sm tracking-widest uppercase transition-all border ${active ? "text-neon-cyan bg-neon-cyan/5 border-neon-cyan/20" : "text-slate-300 hover:text-neon-cyan hover:bg-neon-cyan/5 border-transparent hover:border-neon-cyan/20"}`}>
                      <span className="text-neon-purple mr-2 text-xs">0{i + 1}.</span>{link.label}
                    </Link>
                  </motion.div>
                );
              })}
              {onCmdOpen && (
                <div className="mt-4 pt-4 border-t border-slate-700">
                  <button onClick={onCmdOpen} className="w-full text-left px-4 py-3 rounded-lg font-mono text-xs text-slate-500 border border-slate-700 hover:border-neon-purple/40 transition-all">Command Palette ⌘K</button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
