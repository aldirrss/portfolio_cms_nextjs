"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);

  const phases = [
    "INITIALIZING SYSTEM...",
    "LOADING MODULES...",
    "COMPILING EXPERIENCE...",
    "LAUNCHING PORTFOLIO...",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + 2;
      });
    }, 40);

    const phaseInterval = setInterval(() => {
      setPhase((p) => Math.min(p + 1, phases.length - 1));
    }, 550);

    return () => {
      clearInterval(interval);
      clearInterval(phaseInterval);
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-dark-900"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5 }}
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      {/* Scan line */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="scan-line" />
      </div>

      {/* Corner decorations */}
      {["top-4 left-4", "top-4 right-4", "bottom-4 left-4", "bottom-4 right-4"].map((pos, i) => (
        <div key={i} className={`absolute ${pos} w-8 h-8`}>
          <div className="w-full h-0.5 bg-neon-cyan opacity-60" />
          <div className={`w-0.5 h-full bg-neon-cyan opacity-60 ${i % 2 === 0 ? "ml-0" : "ml-auto"}`} />
        </div>
      ))}

      <div className="relative flex flex-col items-center gap-8 z-10">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="relative"
        >
          <div className="w-20 h-20 rounded-2xl border border-neon-purple/50 flex items-center justify-center bg-dark-800"
            style={{ boxShadow: "0 0 30px rgba(191,0,255,0.4), 0 0 60px rgba(0,255,255,0.1)" }}>
            <span className="font-display text-3xl font-black gradient-text">AL</span>
          </div>
          <div className="absolute -inset-1 rounded-2xl border border-neon-cyan/20 animate-pulse" />
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <div className="font-display text-2xl font-bold gradient-text tracking-widest">ALDI ROSID</div>
          <div className="font-mono text-xs text-neon-cyan/60 mt-1 tracking-[0.3em]">PORTFOLIO v2.0</div>
        </motion.div>

        {/* Loading bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="w-72 space-y-3"
        >
          <div className="h-0.5 bg-dark-600 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{
                background: "linear-gradient(90deg, #bf00ff, #00ffff)",
                width: `${progress}%`,
                transition: "width 0.04s linear",
                boxShadow: "0 0 10px rgba(0,255,255,0.8)",
              }}
            />
          </div>
          
          <div className="flex justify-between items-center">
            <motion.span
              key={phase}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-mono text-[10px] text-neon-cyan/60 tracking-widest"
            >
              {phases[phase]}
            </motion.span>
            <span className="font-mono text-[10px] text-neon-purple/80">{progress}%</span>
          </div>
        </motion.div>

        {/* Spinning ring */}
        <div className="relative w-12 h-12">
          <div className="loader-ring" />
          <div
            className="absolute inset-0 rounded-full"
            style={{
              border: "3px solid transparent",
              borderBottomColor: "var(--neon-cyan)",
              animation: "spin 0.7s linear infinite reverse",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
