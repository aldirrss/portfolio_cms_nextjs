"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { SocialRow } from "@/components/ui/SocialIcons";
import { profile } from "@/data/profile";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ["#bf00ff", "#00ffff", "#0080ff", "#ff00ff"];
    const particles: Array<{
      x: number; y: number; vx: number; vy: number;
      size: number; opacity: number; color: string;
    }> = [];

    for (let i = 0; i < 120; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.6 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animId: number;
    let mouse = { x: -9999, y: -9999 };
    const onMouse = (e: MouseEvent) => { mouse = { x: e.clientX, y: e.clientY }; };
    window.addEventListener("mousemove", onMouse);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(191,0,255,${0.08 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      for (const p of particles) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) { p.vx += (dx / dist) * 0.05; p.vy += (dy / dist) * 0.05; }
        p.x += p.vx; p.y += p.vy;
        p.vx *= 0.99; p.vy *= 0.99;
        if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="hero-base-bg absolute inset-0 bg-dark-900" />
      <div className="hero-grid absolute inset-0 grid-bg opacity-20" />
      <div className="hero-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, rgba(191,0,255,0.4) 0%, rgba(0,128,255,0.2) 40%, transparent 70%)" }} />
      <canvas ref={canvasRef} id="particle-canvas" className="absolute inset-0" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="scan-line opacity-20" />
      </div>

      {/* Corner labels */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* ── Text column ── */}
          <div className="order-2 lg:order-1 flex-1 text-center lg:text-left">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-neon-cyan/20 bg-neon-cyan/5">
                <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
                <span className="font-mono text-xs text-neon-cyan tracking-widest">AVAILABLE FOR HIRE</span>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <div className="font-mono text-neon-purple/80 text-sm tracking-[0.3em] mb-3 uppercase">
                Hello, World! I&apos;m
              </div>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none mb-4">
                <span className="gradient-text">{profile.name.split(" ")[0].toUpperCase()}</span>
                <br />
                <span className="text-white">{profile.name.split(" ").slice(1).join(" ").toUpperCase()}</span>
              </h1>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 justify-center lg:justify-start mb-6 h-10">
              <span className="font-mono text-slate-400 text-sm">{">"}</span>
              <span className="font-mono text-base text-neon-cyan">
                <TypeAnimation sequence={profile.typingRoles as (string | number)[]} speed={50} repeat={Infinity} />
              </span>
              <span className="typing-cursor" />
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-slate-400 text-base leading-relaxed max-w-lg mb-10 mx-auto lg:mx-0">
              Building <span className="text-neon-cyan">scalable</span> ERP backends, integration flows,
              and business-critical systems. Passionate about clean code and{" "}
              <span className="text-neon-purple">elegant solutions</span>.
            </motion.p>

            {/* ── CTA buttons ── */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <motion.a href={profile.cvUrl} target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="btn-primary relative z-10 inline-flex items-center justify-center gap-2" data-hover>
                <span className="relative z-10">↓ Download CV</span>
              </motion.a>
              <motion.a href={`mailto:${profile.email}`} target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="btn-secondary inline-flex items-center justify-center gap-2">
                ✉ Contact Me
              </motion.a>
            </motion.div>

            {/* ── Social media icons ── */}
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col items-center lg:items-start gap-3 mb-8">
              <span className="font-mono text-[10px] text-slate-500 tracking-[0.3em] uppercase">
                Find me on
              </span>
              <SocialRow socials={profile.socials as unknown as { href: string; icon: string; label: string; color: string }[]} size="md" />
            </motion.div>

            {/* ── Stats ── */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
              className="flex gap-8 justify-center lg:justify-start">
              {profile.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="font-mono text-xs text-slate-500 tracking-widest mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Profile image ── */}
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="order-1 lg:order-2 relative flex-shrink-0">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <div className="absolute -inset-4 rounded-full border border-neon-purple/20 animate-pulse-slow" />
              <div className="absolute -inset-8 rounded-full border border-neon-cyan/10"
                style={{ animation: "spin 20s linear infinite" }} />
              {[0, 60, 120, 180, 240, 300].map((deg) => (
                <div key={deg} className="absolute w-2 h-2 rounded-full bg-neon-cyan"
                  style={{
                    top: `${50 - 52 * Math.cos((deg * Math.PI) / 180)}%`,
                    left: `${50 + 52 * Math.sin((deg * Math.PI) / 180)}%`,
                    transform: "translate(-50%, -50%)",
                    boxShadow: "0 0 6px var(--neon-cyan)", opacity: 0.7,
                  }} />
              ))}
              <div className="absolute inset-0 rounded-full"
                style={{ background: "linear-gradient(135deg, rgba(191,0,255,0.4), rgba(0,255,255,0.4))", padding: "3px" }}>
                <div className="w-full h-full rounded-full overflow-hidden bg-dark-800">
                  <Image src={profile.avatarUrl} alt={profile.name} width={320} height={320}
                    className="w-full h-full object-cover" priority />
                </div>
              </div>
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 glass rounded-xl px-3 py-2 border border-neon-purple/30"
                style={{ boxShadow: "0 0 20px rgba(191,0,255,0.2)" }}>
                <div className="font-mono text-xs text-neon-cyan">{profile.stats[0].value} Years</div>
                <div className="font-mono text-[10px] text-slate-500">experience</div>
              </motion.div>
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 glass rounded-xl px-3 py-2 border border-neon-cyan/30"
                style={{ boxShadow: "0 0 20px rgba(0,255,255,0.2)" }}>
                <div className="font-mono text-xs text-neon-purple">Programmer</div>
                <div className="font-mono text-[10px] text-slate-500">Odoo • Engineer</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="font-mono text-[10px] text-slate-500 tracking-widest">SCROLL</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
            className="w-0.5 h-8 bg-gradient-to-b from-neon-purple to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
