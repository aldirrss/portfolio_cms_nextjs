"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { services } from "@/data/services";

export default function ServicesSection() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-dark-900" />
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="text-center mb-16">
          <div className="font-mono text-xs text-neon-cyan/60 tracking-[0.4em] mb-3 uppercase">// Services</div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold gradient-text mb-4">What I Do</h2>
          <div className="mt-3 mx-auto w-16 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-purple" />
          <p className="mt-5 text-slate-400 font-mono text-sm max-w-xl mx-auto">
            A complete toolkit for modern web development — from idea to production.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...services].sort((a, b) => a.order - b.order).map((svc, i) => (
            <motion.div key={svc.id}
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -6 }}
              className="glass-card p-6 group hover-glow relative overflow-hidden" data-hover>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(circle at top left, ${svc.color}08, transparent 60%)` }} />
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-2xl transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${svc.color}10`, border: `1px solid ${svc.color}25`, boxShadow: `0 0 20px ${svc.color}15` }}>
                {svc.icon}
              </div>
              <h3 className="font-display text-base font-bold mb-3 text-slate-100 group-hover:text-white transition-colors">{svc.title}</h3>
              <p className="font-mono text-xs text-slate-400 leading-relaxed mb-5">{svc.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {svc.tags.map((tag) => (
                  <span key={tag} className="font-mono text-[10px] px-2 py-0.5 rounded"
                    style={{ background: `${svc.color}08`, border: `1px solid ${svc.color}20`, color: svc.color + "cc" }}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${svc.color}, transparent)` }} />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-neon-purple/40 to-transparent" />
    </section>
  );
}
