/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projects, projectCategories } from "@/data/projects";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCodeBranch,
  FaBook,
  FaInfoCircle,
} from "react-icons/fa";

export default function ProjectsSection({
  showHeader = false,
}: {
  showHeader?: boolean;
}) {
  const [filter, setFilter] = useState("all");
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  const sortedOrderDesc = [...filtered].sort((o) => o.order).reverse();

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-dark-800/40" />
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple/40 to-transparent" />

      <div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {showHeader && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="font-mono text-xs text-neon-purple/60 tracking-[0.4em] mb-3 uppercase">
              03. PROJECTS
            </div>
            <h2 className="section-title gradient-text">Featured Work</h2>
            <div className="mt-3 mx-auto w-16 h-0.5 bg-gradient-to-r from-neon-purple to-neon-cyan" />
          </motion.div>
        )}

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {projectCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              data-hover
              className={`px-5 py-2 rounded-lg font-mono text-xs tracking-widest transition-all duration-300 ${
                filter === cat.id
                  ? "bg-neon-purple/20 border border-neon-purple/60 text-neon-cyan"
                  : "border border-slate-700 text-slate-400 hover:border-neon-purple/30 hover:text-slate-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {sortedOrderDesc.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="glass-card overflow-hidden group hover-glow relative"
                data-hover
              >
                {project.featured && (
                  <div
                    className="absolute top-3 right-3 z-20 px-2 py-0.5 rounded font-mono text-[10px] tracking-widest"
                    style={{
                      background: `${project.color}20`,
                      border: `1px solid ${project.color}40`,
                      color: project.color,
                    }}
                  >
                    FEATURED
                  </div>
                )}

                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div
                    className="absolute inset-0 opacity-60 transition-opacity duration-300 group-hover:opacity-40"
                    style={{
                      background: `linear-gradient(to bottom, ${project.color}10, rgba(13,20,36,0.8))`,
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={`/projects/${project.slug}`}
                      data-hover
                      className="px-4 py-2 rounded-lg font-mono text-xs bg-dark-800/90 border border-neon-cyan/40 text-neon-cyan hover:bg-neon-cyan/10 transition-all"
                    >
                      <FaInfoCircle className="inline mr-1" />
                      Details
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg font-mono text-xs bg-dark-800/90 border border-neon-purple/40 text-neon-purple hover:bg-neon-purple/10 transition-all"
                    >
                      <FaCodeBranch className="inline mr-1" />
                      Code
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <div className="font-display text-lg font-bold mb-2 text-slate-100 group-hover:text-white transition-colors">
                    {project.title}
                  </div>
                  <p className="font-mono text-xs text-slate-400 leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.slice().map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded font-mono text-[10px]"
                        style={{
                          background: `${project.color}08`,
                          border: `1px solid ${project.color}25`,
                          color: project.color,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                    {/* {project.tags.length > 4 && (
                      <span className="px-2 py-0.5 rounded font-mono text-[10px] border border-slate-700 text-slate-500">
                        +{project.tags.length - 4}
                      </span>
                    )} */}
                  </div>
                  <div className="flex gap-3 pt-3 border-t border-slate-800">
                    {project.liveUrl && (
                      <>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-[11px] text-neon-cyan hover:text-white transition-colors"
                        >
                          <FaExternalLinkAlt className="inline mr-1" />
                          Demo
                        </a>
                        <span className="text-slate-700">|</span>
                      </>
                    )}
                    {project.githubUrl && (
                      <>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-[11px] text-neon-purple hover:text-white transition-colors"
                        >
                          <FaGithub className="inline mr-1" />
                          GitHub
                        </a>
                        <span className="text-slate-700">|</span>
                      </>
                    )}
                    {project.documentationUrl && (
                      <>
                        <a
                          href={project.documentationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-[11px] text-neon-purple hover:text-white transition-colors"
                        >
                          <FaBook className="inline mr-1" />
                          Docs
                        </a>
                        <span className="text-slate-700">|</span>
                      </>
                    )}
                  </div>
                </div>

                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
                  }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://lemacore.com/catalog"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
            data-hover
          >
            ◈ View All on Catalog
          </a>
        </motion.div>
      </div>
    </section>
  );
}
