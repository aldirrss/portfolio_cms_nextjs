"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  gradient?: boolean;
}

export default function PageHeader({ eyebrow, title, subtitle, gradient = true }: PageHeaderProps) {
  return (
    <div className="relative pt-16 pb-12 text-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(191,0,255,0.5) 0%, transparent 70%)" }}
      />
      <div className="absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-neon-purple/40 to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-neon-purple/20 bg-neon-purple/5">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-purple animate-pulse" />
            <span className="font-mono text-[11px] text-neon-purple/80 tracking-[0.3em] uppercase">
              {eyebrow}
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-4 ${
            gradient ? "gradient-text" : "text-white"
          }`}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-mono text-sm text-slate-400 leading-relaxed max-w-xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 mx-auto w-20 h-0.5 bg-gradient-to-r from-neon-purple to-neon-cyan"
        />
      </div>
    </div>
  );
}
