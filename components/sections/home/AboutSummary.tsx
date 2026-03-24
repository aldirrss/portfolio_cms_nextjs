"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { profile } from "@/data/profile";

const highlights = [
  { icon: "⚡", value: profile.stats[0].value, label: profile.stats[0].label, color: "#00ffff" },
  { icon: "◈",  value: profile.stats[1].value, label: profile.stats[1].label, color: "#bf00ff" },
  { icon: "◉",  value: profile.stats[2].value, label: profile.stats[2].label, color: "#0080ff" },
];

export default function AboutSummary() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });
  const aboutSummaryEnd = profile.bio.findIndex((line) =>
    line.includes("Specialized in **Odoo development**")
  );
  const aboutSummaryLines = aboutSummaryEnd === -1 ? profile.bio : profile.bio.slice(0, aboutSummaryEnd + 1);

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-dark-800" />
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section label ── */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }} className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-neon-purple/20 bg-neon-purple/5">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-purple animate-pulse" />
              <span className="font-mono text-[11px] text-neon-purple/80 tracking-[0.3em] uppercase">
                ABOUT ME
              </span>
            </div>
          </motion.div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold gradient-text leading-tight">
            Crafting ERP
            <br />
            <span className="text-white dark:text-white">Solutions</span>
          </h2>
          {/* Updated headline / quote */}
          <p className="mt-5 font-mono text-sm italic text-neon-cyan/70 max-w-lg mx-auto leading-relaxed">
            &ldquo;{profile.headline}&rdquo;
          </p>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-gradient-to-r from-neon-purple to-neon-cyan" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* ── Bio text (full width on mobile, left half on desktop) ── */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }} className="space-y-5">
            <div className="glass-card p-8 hover-glow">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="font-mono text-xs text-slate-500 ml-2">about_summary.md</div>
              </div>
              <div className="font-mono text-sm space-y-4 text-slate-400 leading-relaxed">
                {aboutSummaryLines.map((line, i) => (
                  <p key={i}>
                    <span className="text-neon-cyan">{">"}</span>{" "}
                    <span dangerouslySetInnerHTML={{
                      __html: line.replace(/\*\*(.+?)\*\*/g, (_, t) =>
                        `<span class="font-semibold" style="color:${i % 2 === 0 ? "var(--neon-purple)" : "var(--neon-cyan)"}">${t}</span>`
                      ),
                    }} />
                  </p>
                ))}
              </div>
            </div>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2">
              {profile.featuredBadges.map((b) => (
                <span key={b}
                  className="px-3 py-1 rounded-md font-mono text-xs border border-neon-purple/20 text-slate-400 hover:border-neon-cyan/40 hover:text-neon-cyan transition-all"
                  style={{ background: "rgba(191,0,255,0.03)" }}>
                  {b}
                </span>
              ))}
            </div>

            <Link href="/about" data-hover>
              <motion.span whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="btn-secondary inline-flex items-center gap-2 mt-6">
                Read Full Bio →
              </motion.span>
            </Link>
          </motion.div>

          {/* ── Stat cards (replaced photo) ── */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-5">

            {highlights.map((h, i) => (
              <motion.div key={h.label}
                initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="glass-card p-6 hover-glow flex items-center gap-5">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl"
                  style={{ background: `${h.color}10`, border: `1px solid ${h.color}25`, boxShadow: `0 0 20px ${h.color}15` }}>
                  {h.icon}
                </div>
                <div>
                  <div className="font-display text-3xl font-black gradient-text">{h.value}</div>
                  <div className="font-mono text-xs text-slate-500 tracking-widest mt-0.5 uppercase">{h.label}</div>
                </div>
                <div className="ml-auto w-px h-12 opacity-20"
                  style={{ background: `linear-gradient(to bottom, transparent, ${h.color}, transparent)` }} />
              </motion.div>
            ))}

            {/* Quick info grid */}
            <div className="grid grid-cols-2 gap-4 mt-2">
              {profile.quickInfo.map((item) => (
                <div key={item.label} className="glass-card p-4 hover-glow">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-neon-cyan text-sm">{item.icon}</span>
                    <span className="font-mono text-[10px] text-slate-500 tracking-widest uppercase">{item.label}</span>
                  </div>
                  <div className="font-mono text-sm text-slate-200">{item.value}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent" />
    </section>
  );
}
