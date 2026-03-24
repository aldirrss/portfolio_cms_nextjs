"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";
type ThemeMode = "system" | Theme;

interface ThemeCtx {
  mode: ThemeMode;
  theme: Theme;
  setTheme: (mode: ThemeMode) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeCtx>({
  mode: "system",
  theme: "dark",
  setTheme: () => {},
  toggleTheme: () => {},
});

/** Returns the system preferred colour scheme */
function getSystemTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Start with undefined so we never flash the wrong theme
  const [mode, setMode] = useState<ThemeMode | null>(null);
  const [systemTheme, setSystemTheme] = useState<Theme>("dark");

  // On first mount, read saved preference OR fall back to system mode
  useEffect(() => {
    const savedMode = localStorage.getItem("theme-mode") as ThemeMode | null;

    setSystemTheme(getSystemTheme());
    setMode(savedMode ?? "system");
  }, []);

  // Keep system theme in sync while user chooses "system"
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? "dark" : "light");
    };

    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const theme: Theme = mode === "system" ? systemTheme : (mode ?? "dark");

  // Apply class to <html> whenever resolved theme changes
  useEffect(() => {
    if (!mode) return;
    const root = document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(theme);
    localStorage.setItem("theme-mode", mode);
    localStorage.removeItem("theme");
  }, [mode, theme]);

  const toggleTheme = () =>
    setMode((currentMode) => {
      const resolved = (currentMode ?? "system") === "system"
        ? systemTheme
        : (currentMode as Theme);
      return resolved === "dark" ? "light" : "dark";
    });

  // Don't render children until we know the correct theme (avoids flash)
  if (!mode) return null;

  return (
    <ThemeContext.Provider value={{ mode, theme, setTheme: setMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
