"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { techStack } from "@/data/techStack";

export default function TechStackSection({ showHeader = false }: { showHeader?: boolean }) {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });
  const sorted = [...techStack].sort((a, b) => a.order - b.order);

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-dark-900" />
      <div className="absolute inset-0 grid-bg opacity-15" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {showHeader && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="font-mono text-xs text-neon-cyan/60 tracking-[0.4em] mb-3 uppercase">
              02. TECH STACK
            </div>
            <h2 className="section-title gradient-text">Technologies</h2>
            <div className="mt-3 mx-auto w-16 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-purple" />
          </motion.div>
        )}

        <div className="space-y-10">
          {sorted.map((cat, catIdx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIdx * 0.1 }}
            >
              {/* Category label + divider */}
              <div className="flex items-center gap-4 mb-4">
                <span
                  className="font-mono text-xs tracking-widest uppercase flex-shrink-0"
                  style={{ color: cat.color }}
                >
                  {"// " + cat.category}
                </span>
                <div className="flex-1 h-px" style={{ background: `${cat.color}20` }} />
              </div>

              {/* Grid of tech cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {cat.techs.map((tech, techIdx) => {
                  const Icon = tech.icon;

                  return (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: catIdx * 0.1 + techIdx * 0.06, duration: 0.35 }}
                    whileHover={{ scale: 1.06, y: -5 }}
                    className="glass-card p-4 flex flex-col items-center text-center group cursor-default tech-card transition-all duration-300 relative overflow-hidden"
                    style={{ borderColor: "rgba(191,0,255,0.08)" }}
                    data-hover
                  >
                    {/* Icon wrapper */}
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110 flex-shrink-0"
                      style={{
                        background: `${cat.color}12`,
                        border: `1px solid ${cat.color}28`,
                        boxShadow: `0 0 14px ${cat.color}18`,
                      }}
                    >
                      <Icon
                        size={22}
                        style={{
                          color: cat.color,
                          filter: `drop-shadow(0 0 5px ${cat.color}90)`,
                        }}
                      />
                    </div>

                    {/* Tech name */}
                    <span
                      className="font-mono text-sm font-semibold text-slate-200
                                 group-hover:text-white transition-colors leading-tight"
                    >
                      {tech.name}
                    </span>

                    {/* Description */}
                    <span
                      className="font-mono text-[10px] text-slate-500 mt-0.5
                                 group-hover:text-slate-400 transition-colors"
                    >
                      {tech.desc}
                    </span>

                    {/* Hover radial glow */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0
                                 group-hover:opacity-100 transition-opacity duration-300
                                 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at 50% 40%, ${cat.color}0c, transparent 70%)`,
                      }}
                    />

                    {/* Bottom accent line on hover */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-px opacity-0
                                 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${cat.color}, transparent)`,
                      }}
                    />
                  </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Credential badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9 }}
          className="flex justify-center mt-14 gap-3 flex-wrap"
        >
          {["React Expert", "Odoo Certified", "Full Stack", "5+ Years"].map((tag) => (
            <div
              key={tag}
              className="px-4 py-1.5 rounded-full font-mono text-xs
                         border border-neon-purple/20 text-neon-purple/60"
              style={{ background: "rgba(191,0,255,0.03)" }}
            >
              {tag}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
