"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { getFeaturedProjects } from "@/data/projects";

const featured = getFeaturedProjects(3);

export default function FeaturedProjects() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-dark-800" />
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple/30 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
        >
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-neon-blue/20 bg-neon-blue/5">
                <span className="w-1.5 h-1.5 rounded-full bg-neon-blue animate-pulse" />
                <span className="font-mono text-[11px] text-neon-blue/80 tracking-[0.3em] uppercase">
                  Featured Projects
                </span>
              </div>
            </motion.div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold gradient-text">
              Selected Work
            </h2>
          </div>
          {/* <Link href="/projects" data-hover>
            <motion.span
              whileHover={{ scale: 1.03 }}
              className="btn-secondary inline-flex items-center gap-2 text-sm"
            >
              See All Projects →
            </motion.span>
          </Link> */}
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card overflow-hidden group hover-glow relative"
              data-hover
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 opacity-60 group-hover:opacity-30 transition-opacity duration-300"
                  style={{ background: `linear-gradient(to bottom, ${project.color}10, rgba(13,20,36,0.85))` }}
                />
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link href={`/projects/${project.slug}`} data-hover
                    className="px-3 py-1.5 rounded-lg font-mono text-xs bg-dark-800/90 border border-neon-blue/40 text-neon-blue hover:bg-neon-blue/10 transition-all">
                    ◎ Details
                  </Link>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg font-mono text-xs bg-dark-800/90 border border-neon-cyan/40 text-neon-cyan hover:bg-neon-cyan/10 transition-all">
                    ↗ Live
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg font-mono text-xs bg-dark-800/90 border border-neon-purple/40 text-neon-purple hover:bg-neon-purple/10 transition-all">
                    ◈ Code
                  </a>
                </div>
              </div>

              <div className="p-6">
                <div className="font-display text-base font-bold text-slate-100 mb-2 group-hover:text-white transition-colors">
                  {project.title}
                </div>
                <p className="font-mono text-xs text-slate-400 leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded font-mono text-[10px]"
                      style={{ background: `${project.color}08`, border: `1px solid ${project.color}25`, color: project.color }}>
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-0.5 rounded font-mono text-[10px] border border-slate-700 text-slate-500">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link href="/projects" data-hover>
            <motion.span whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="btn-secondary inline-flex items-center gap-2 text-sm">
              View All Projects →
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
