"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { experiences, education } from "@/data/experience";
import type { Experience } from "@/data/experience";

function TimelineCard({ exp }: { exp: Experience }) {
  return (
    <>
      <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
        <div>
          <h3 className="font-display text-base font-bold text-white">{exp.role}</h3>
          <div className="font-mono text-sm mt-0.5" style={{ color: exp.color }}>{exp.company}</div>
        </div>
        <div className="text-right flex-shrink-0">
          <div className="font-mono text-xs text-slate-400">{exp.period}</div>
          <div className="font-mono text-[10px] mt-1 px-2 py-0.5 rounded font-semibold inline-block"
            style={{ color: exp.color, background: `${exp.color}10`, border: `1px solid ${exp.color}25` }}>
            {exp.type}
          </div>
        </div>
      </div>
      <p className="font-mono text-xs text-slate-400 leading-relaxed mb-4">{exp.description}</p>
      <div className="flex flex-wrap gap-1.5">
        {exp.highlights.map((h) => (
          <span key={h} className="font-mono text-[10px] px-2 py-0.5 rounded"
            style={{ background: `${exp.color}08`, border: `1px solid ${exp.color}20`, color: exp.color + "cc" }}>
            {h}
          </span>
        ))}
      </div>
    </>
  );
}

function TimelineItem({ exp, index, inView }: { exp: Experience; index: number; inView: boolean }) {
  const isLeft = exp.side === "left";
  return (
    <div className="relative grid md:grid-cols-2 gap-4 md:gap-8">
      {/* Left pane */}
      <motion.div initial={{ opacity: 0, x: isLeft ? -40 : 0 }} animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className={`${isLeft ? "md:col-start-1" : "md:col-start-2 md:row-start-1"} hidden md:block`}>
        {isLeft
          ? <div className="glass-card p-6 hover-glow md:mr-8"><TimelineCard exp={exp} /></div>
          : <div className="hidden md:block" />}
      </motion.div>

      {/* Center dot */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 flex-col items-center z-10">
        <motion.div initial={{ scale: 0, opacity: 0 }} animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
          className="w-5 h-5 rounded-full border-2 flex items-center justify-center"
          style={{ borderColor: exp.color, background: "var(--dark-800)", boxShadow: `0 0 15px ${exp.color}60` }}>
          <div className="w-2 h-2 rounded-full" style={{ background: exp.color }} />
        </motion.div>
      </div>

      {/* Right pane */}
      <motion.div initial={{ opacity: 0, x: !isLeft ? 40 : 0 }} animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className={`${!isLeft ? "md:col-start-2" : "md:col-start-1 md:row-start-1"} hidden md:block`}>
        {!isLeft
          ? <div className="glass-card p-6 hover-glow md:ml-8"><TimelineCard exp={exp} /></div>
          : <div className="hidden md:block" />}
      </motion.div>

      {/* Mobile card */}
      <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 }} className="md:hidden col-span-2">
        <div className="glass-card p-6 hover-glow border-l-2" style={{ borderLeftColor: exp.color }}>
          <TimelineCard exp={exp} />
        </div>
      </motion.div>
    </div>
  );
}

export default function ExperienceSection({ showHeader = false }: { showHeader?: boolean }) {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });
  const sorted = [...experiences].sort((a, b) => b.order - a.order);

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-dark-900" />
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/40 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeader && (
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }} className="text-center mb-16">
            <div className="font-mono text-xs text-neon-cyan/60 tracking-[0.4em] mb-3 uppercase">04. EXPERIENCE</div>
            <h2 className="section-title gradient-text">Career Timeline</h2>
            <div className="mt-3 mx-auto w-16 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-purple" />
          </motion.div>
        )}

        {/* Timeline */}
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-purple/50 via-neon-cyan/30 to-transparent" />
          <div className="space-y-8">
            {sorted.map((exp, i) => (
              <TimelineItem key={exp.id} exp={exp} index={i} inView={inView} />
            ))}
          </div>
        </div>

        {/* Education */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }} className="mt-16">
          <div className="text-slate-500 tracking-widest mb-6 uppercase text-center">
            <span className="font-mono text-xs tracking-widest uppercase flex-shrink-0 text-[24px] font-bold gradient-text">
              // Education
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[...education].sort((a, b) => a.order - b.order).map((edu) => (
              <div key={edu.id} className="glass-card p-6 text-center hover-glow w-full sm:w-72">
                {edu.icon && <div className="text-3xl mb-3">{edu.icon}</div>}
                <h3 className="font-display text-sm font-bold text-white mb-1">{edu.degree}</h3>
                <div className="font-mono text-sm text-neon-cyan mb-2">{edu.institution}</div>
                <div className="font-mono text-xs text-slate-400">
                  {edu.period}{edu.gpa ? ` • GPA ${edu.gpa}` : ""}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
