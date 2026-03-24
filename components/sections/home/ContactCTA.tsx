"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { profile } from "@/data/profile";
import { SocialRow } from "@/components/ui/SocialIcons";

export default function ContactCTA() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-dark-900" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full opacity-[0.06] pointer-events-none"
        style={{ background: "radial-gradient(circle, #bf00ff, transparent)" }} />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full opacity-[0.06] pointer-events-none"
        style={{ background: "radial-gradient(circle, #00ffff, transparent)" }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent" />
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-green-500/20 bg-green-500/5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            <span className="font-mono text-xs text-green-400 tracking-widest">AVAILABLE FOR NEW PROJECTS</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl font-black mb-6 leading-tight">
            <span className="text-white">Have a project</span>
            <br />
            <span className="gradient-text">in mind?</span>
          </h2>

          <p className="font-mono text-sm text-slate-400 leading-relaxed max-w-xl mx-auto mb-10">
            Whether it&apos;s a new web application, an Odoo customization, or a complex integration —
            I&apos;d love to hear about it. Let&apos;s turn your vision into reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <Link href="/contact" data-hover>
              <motion.span whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="btn-primary inline-flex items-center gap-2 text-sm">
                ✉ Start a Conversation
              </motion.span>
            </Link>
            <a href={`mailto:${profile.email}`} data-hover>
              <motion.span whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="btn-secondary inline-flex items-center gap-2 text-sm">
                → {profile.email}
              </motion.span>
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center gap-4 pt-10 border-t border-slate-800"
          >
            <span className="font-mono text-xs text-slate-500 tracking-widest">FIND ME ON</span>
            <SocialRow
              socials={profile.socials as unknown as { href: string; icon: string; label: string; color: string }[]}
              size="md"
              showLabel
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
