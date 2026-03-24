"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { profile } from "@/data/profile";
import { skillBars, allSkillBadges } from "@/data/techStack";

export default function AboutSection({ showHeader = false }: { showHeader?: boolean }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-dark-800" />
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeader && (
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }} className="text-center mb-16">
            <div className="font-mono text-xs text-neon-purple/60 tracking-[0.4em] mb-3 uppercase">01. ABOUT</div>
            <h2 className="section-title gradient-text">About Me</h2>
            <div className="mt-3 mx-auto w-16 h-0.5 bg-gradient-to-r from-neon-purple to-neon-cyan" />
          </motion.div>
        )}

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }} className="space-y-6">
            <div className="glass-card p-8 hover-glow">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="font-mono text-xs text-slate-500 ml-2">about.md</div>
              </div>
              <div className="font-mono text-sm space-y-4 text-slate-300 leading-relaxed">
                {profile.bio.map((line, i) => (
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

            {/* Skill badges */}
            <div>
              <div className="font-mono text-xs text-slate-500 tracking-widest mb-4 uppercase">
                <span className="font-mono text-xs tracking-widest uppercase flex-shrink-0 text-[24px] font-bold gradient-text">
                  // Technologies
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {allSkillBadges.map((badge, i) => (
                  <motion.span key={badge}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + i * 0.03 }}
                    className="px-3 py-1 rounded-md font-mono text-xs border border-neon-purple/20 text-slate-400 hover:border-neon-cyan/50 hover:text-neon-cyan transition-all cursor-default"
                    style={{ background: "rgba(191,0,255,0.03)" }} data-hover>
                    {badge}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skill bars + Quick info */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}>
            <div className="font-mono text-xs text-slate-500 tracking-widest mb-6 uppercase">
              <span className="font-mono text-xs tracking-widest uppercase flex-shrink-0 text-[24px] font-bold gradient-text">
                // Core Competencies
              </span>
            </div>
            <div className="space-y-6">
              {skillBars.map((skill, i) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-mono text-sm text-slate-300">{skill.name}</span>
                    <span className="font-mono text-xs" style={{ color: skill.color }}>{skill.level}%</span>
                  </div>
                  <div className="h-1.5 bg-dark-600 rounded-full overflow-hidden progress-bar">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1.2, delay: 0.4 + i * 0.1, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})`, boxShadow: `0 0 10px ${skill.color}60` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Quick info */}
            <div className="mt-8 grid grid-cols-2 gap-4">
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
