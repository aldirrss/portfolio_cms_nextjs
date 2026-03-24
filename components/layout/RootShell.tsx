"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CommandPalette from "@/components/ui/CommandPalette";
import LoadingScreen from "@/components/ui/LoadingScreen";

export default function RootShell({ children }: { children: React.ReactNode }) {
  const [loading, setLoading]   = useState(true);
  const [cmdOpen, setCmdOpen]   = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setCmdOpen((p) => !p);
      }
      if (e.key === "Escape") setCmdOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <div className="relative min-h-screen bg-dark-900 flex flex-col">
      <Navbar onCmdOpen={() => setCmdOpen(true)} />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
      {cmdOpen && <CommandPalette onClose={() => setCmdOpen(false)} />}
    </div>
  );
}
