/* eslint-disable @typescript-eslint/no-unused-vars, @next/next/no-img-element */
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Project, ProjectScreenshot } from "@/data/projects";

interface ProjectDetailSectionProps {
  project: Project;
  categoryLabel: string;
  initialScreenshots: ProjectScreenshot[];
}

const SCREENSHOT_PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='675' viewBox='0 0 1200 675'%3E%3Crect width='1200' height='675' fill='%230b1220'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%2394a3b8' font-family='monospace' font-size='36'%3EScreenshot unavailable%3C/text%3E%3C/svg%3E";

function getSafeImageSrc(src: string, fallback: string): string {
  const candidate = src.trim();
  if (!candidate) return fallback;

  // Allow local assets served from Next.js public directory.
  if (candidate.startsWith("/")) {
    return candidate;
  }

  try {
    const parsed = new URL(candidate);
    if (parsed.protocol === "http:" || parsed.protocol === "https:") {
      return candidate;
    }
    return fallback;
  } catch {
    return fallback;
  }
}

export default function ProjectDetailSection({
  project,
  categoryLabel,
  initialScreenshots,
}: ProjectDetailSectionProps) {
  const [screenshots, setScreenshots] =
    useState<ProjectScreenshot[]>(initialScreenshots);
  const [activeImage, setActiveImage] = useState<{
    title: string;
    src: string;
  } | null>(null);

  const mainImageSrc = useMemo(
    () => getSafeImageSrc(project.imageUrl, project.imageUrl),
    [project.imageUrl],
  );

  const openImageDialog = (title: string, src: string) => {
    setActiveImage({ title, src });
  };

  const closeImageDialog = () => {
    setActiveImage(null);
  };

  return (
    <>
      <section className="relative py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-dark-900" />
        <div className="absolute inset-0 grid-bg opacity-10" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              href="/projects"
              className="btn-secondary inline-flex items-center gap-2"
            >
              ← Back to Projects
            </Link>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
            <div className="lg:col-span-7 space-y-6">
              <button
                type="button"
                onClick={() => openImageDialog(project.title, mainImageSrc)}
                className="relative rounded-2xl overflow-hidden border border-neon-purple/20 glass-card w-full text-left"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={mainImageSrc}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 58vw"
                  />
                </div>
              </button>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-3 py-1 rounded-md border border-neon-cyan/30 text-neon-cyan bg-neon-cyan/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="glass-card p-6">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-100 mb-4">
                  Description
                </h2>
                <p className="font-mono text-sm text-slate-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-2xl sm:text-3xl font-bold gradient-text">
                  Screenshots
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {!screenshots.length ? (
                    <p className="text-slate-400">No screenshots available.</p>
                  ) : (
                    screenshots.map((shot, idx) => {
                      const safeScreenshotSrc = getSafeImageSrc(
                        shot.imageUrl,
                        SCREENSHOT_PLACEHOLDER,
                      );

                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() =>
                            openImageDialog(shot.title, safeScreenshotSrc)
                          }
                          className="relative rounded-lg overflow-hidden border border-neon-purple/20 glass-card w-full text-left"
                        >
                          <div className="relative aspect-[16/10]">
                            <img
                              src={safeScreenshotSrc}
                              alt={shot.title}
                              className="absolute inset-0 h-full w-full object-cover"
                              loading="lazy"
                              referrerPolicy="no-referrer"
                              onError={(event) => {
                                event.currentTarget.src =
                                  SCREENSHOT_PLACEHOLDER;
                              }}
                            />
                          </div>
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-sm text-white font-mono">
                              {shot.title}
                            </span>
                          </div>
                        </button>
                      );
                    })
                  )}
                </div>
              </div>
            </div>

            <aside className="lg:col-span-5 space-y-5">
              <div className="glass-card p-6">
                <div className="font-mono text-xs text-neon-purple/70 tracking-[0.35em] uppercase mb-3">
                  Project Detail
                </div>
                <h3 className="font-display text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
                  {project.title}
                </h3>

                <div className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-2">
                  Category
                </div>
                <div className="inline-flex px-3 py-1 rounded-md border border-neon-purple/30 text-neon-purple text-sm font-mono mb-6">
                  {categoryLabel}
                </div>

                <div className="space-y-3">
                  <a
                    href={project.liveUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-between px-4 py-3 rounded-lg border font-mono text-xs tracking-widest transition-all ${
                      project.liveUrl
                        ? "border-neon-cyan/40 text-neon-cyan hover:bg-neon-cyan/10"
                        : "border-slate-700 text-slate-500 pointer-events-none"
                    }`}
                  >
                    <span>LIVE URL</span>
                    <span>↗</span>
                  </a>

                  <a
                    href={project.githubUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-between px-4 py-3 rounded-lg border font-mono text-xs tracking-widest transition-all ${
                      project.githubUrl
                        ? "border-neon-purple/40 text-neon-purple hover:bg-neon-purple/10"
                        : "border-slate-700 text-slate-500 pointer-events-none"
                    }`}
                  >
                    <span>GITHUB URL</span>
                    <span>◈</span>
                  </a>

                  <a
                    href={project.documentationUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-between px-4 py-3 rounded-lg border font-mono text-xs tracking-widest transition-all ${
                      project.documentationUrl
                        ? "border-neon-cyan/40 text-neon-cyan hover:bg-neon-cyan/10"
                        : "border-slate-700 text-slate-500 pointer-events-none"
                    }`}
                  >
                    <span>DOCUMENTATION URL</span>
                    <span>📘</span>
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {activeImage && (
        <div
          className="fixed inset-0 z-[120] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeImageDialog}
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.title}
        >
          <div
            className="w-full max-w-6xl glass-card p-4 sm:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 mb-4">
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-100">
                  {activeImage.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={closeImageDialog}
                className="h-10 px-3 rounded-lg border border-slate-700 hover:border-neon-cyan/40 text-slate-300 hover:text-neon-cyan transition-all"
              >
                Close
              </button>
            </div>

            <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-neon-cyan/25">
              <img
                src={activeImage.src}
                alt={activeImage.title}
                className="absolute inset-0 h-full w-full object-contain bg-dark-900"
                loading="eager"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
