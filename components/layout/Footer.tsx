"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { SocialRow } from "@/components/ui/SocialIcons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative py-8 border-t border-neon-purple/10 bg-dark-900">
      <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-neon-purple/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center bg-dark-800 border border-neon-purple/30"
              style={{ boxShadow: "0 0 10px rgba(191,0,255,0.2)" }}>
              <span className="font-display text-xs font-bold gradient-text">{profile.initials}</span>
            </div>
            <span className="font-mono text-xs text-slate-500">
              © {year} {profile.name}. All rights reserved.
            </span>
          </div>

          {/* Social icons */}
          <SocialRow
            socials={profile.socials as unknown as { href: string; icon: string; label: string; color: string }[]}
            size="sm"
          />

          {/* Built with + back to top */}
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-slate-600 hidden sm:block">
              Built with <span className="text-neon-cyan">Next.js</span> +{" "}
              <span className="text-neon-purple">Framer Motion</span>
            </span>
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              data-hover
              className="w-9 h-9 rounded-lg border border-neon-cyan/20 flex items-center justify-center hover:border-neon-cyan/50 transition-all hover:bg-neon-cyan/5">
              <span className="text-neon-cyan text-sm">↑</span>
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
