"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const commands = [
  { id: "home",       label: "Go to Home",       icon: "⌂", section: "Navigation", href: "/" },
  { id: "about",      label: "Go to About",      icon: "◈", section: "Navigation", href: "/about" },
  { id: "stack",      label: "Go to Tech Stack", icon: "◉", section: "Navigation", href: "/stack" },
  { id: "projects",   label: "Go to Projects",   icon: "◫", section: "Navigation", href: "/projects" },
  { id: "experience", label: "Go to Experience", icon: "◎", section: "Navigation", href: "/experience" },
  { id: "contact",    label: "Go to Contact",    icon: "✉", section: "Navigation", href: "/contact" },
  { id: "github",     label: "Open GitHub",      icon: "◈", section: "Links", href: "https://github.com" },
  { id: "linkedin",   label: "Open LinkedIn",    icon: "◈", section: "Links", href: "https://linkedin.com" },
  { id: "cv",         label: "Download CV",      icon: "↓", section: "Actions", href: "/cv.pdf" },
  { id: "email",      label: "Send Email",       icon: "✉", section: "Actions", href: "mailto:alex@chen.dev" },
];

export default function CommandPalette({ onClose }: { onClose: () => void }) {
  const [query, setQuery]       = useState("");
  const [selected, setSelected] = useState(0);
  const inputRef                = useRef<HTMLInputElement>(null);
  const router                  = useRouter();

  const filtered = commands.filter(
    (c) =>
      c.label.toLowerCase().includes(query.toLowerCase()) ||
      c.section.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => { inputRef.current?.focus(); }, []);
  useEffect(() => { setSelected(0); }, [query]);

  const execute = (cmd: typeof commands[0]) => {
    if (cmd.href.startsWith("http") || cmd.href.startsWith("mailto")) {
      window.open(cmd.href, "_blank");
    } else if (cmd.href.endsWith(".pdf")) {
      window.location.href = cmd.href;
    } else {
      router.push(cmd.href);
    }
    onClose();
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown")  { e.preventDefault(); setSelected((s) => Math.min(s + 1, filtered.length - 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setSelected((s) => Math.max(s - 1, 0)); }
    else if (e.key === "Enter" && filtered[selected]) execute(filtered[selected]);
  };

  const grouped = filtered.reduce<Record<string, typeof commands>>((acc, cmd) => {
    if (!acc[cmd.section]) acc[cmd.section] = [];
    acc[cmd.section].push(cmd);
    return acc;
  }, {});

  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9000] flex items-start justify-center pt-[15vh] command-palette-overlay"
        onClick={onClose}>
        <motion.div initial={{ opacity: 0, scale: 0.95, y: -20 }} animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }} transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="w-full max-w-xl mx-4 glass-card overflow-hidden"
          style={{ boxShadow: "0 0 40px rgba(191,0,255,0.2), 0 0 80px rgba(0,255,255,0.05)" }}
          onClick={(e) => e.stopPropagation()}>

          <div className="flex items-center gap-3 px-4 py-3 border-b border-neon-purple/10">
            <span className="font-mono text-neon-cyan text-sm">⌘</span>
            <input ref={inputRef} type="text" placeholder="Type a command or search..."
              value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={handleKey}
              className="flex-1 bg-transparent text-slate-200 placeholder-slate-500 font-mono text-sm outline-none" />
            <span className="font-mono text-[10px] text-slate-500 border border-slate-700 rounded px-1.5 py-0.5 cursor-pointer hover:border-neon-cyan/40"
              onClick={onClose}>ESC</span>
          </div>

          <div className="max-h-80 overflow-y-auto py-2">
            {filtered.length === 0 ? (
              <div className="px-4 py-8 text-center font-mono text-sm text-slate-500">
                No commands found for &quot;{query}&quot;
              </div>
            ) : (
              Object.entries(grouped).map(([section, cmds]) => (
                <div key={section}>
                  <div className="px-4 py-1.5 font-mono text-[10px] text-slate-500 tracking-widest uppercase">{section}</div>
                  {cmds.map((cmd) => {
                    const globalIdx = filtered.indexOf(cmd);
                    return (
                      <div key={cmd.id}
                        className={`flex items-center gap-3 px-4 py-2.5 cursor-pointer transition-all ${
                          globalIdx === selected ? "bg-neon-purple/10 border-l-2 border-neon-purple" : "hover:bg-white/5 border-l-2 border-transparent"
                        }`}
                        onClick={() => execute(cmd)} onMouseEnter={() => setSelected(globalIdx)}>
                        <span className="text-neon-cyan font-mono text-sm w-5">{cmd.icon}</span>
                        <span className={`font-mono text-sm ${globalIdx === selected ? "text-white" : "text-slate-300"}`}>{cmd.label}</span>
                        {globalIdx === selected && (
                          <span className="ml-auto font-mono text-[10px] text-slate-500 border border-slate-700 rounded px-1.5 py-0.5">ENTER</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))
            )}
          </div>

          <div className="flex items-center gap-4 px-4 py-2 border-t border-neon-purple/10">
            {[["↑↓", "navigate"], ["↵", "select"], ["esc", "close"]].map(([key, label]) => (
              <div key={key} className="flex items-center gap-1.5">
                <span className="font-mono text-[10px] text-slate-500 border border-slate-700 rounded px-1 py-0.5">{key}</span>
                <span className="font-mono text-[10px] text-slate-600">{label}</span>
              </div>
            ))}
            <span className="ml-auto font-mono text-[10px] text-neon-purple/50 tracking-widest">COMMAND PALETTE</span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
