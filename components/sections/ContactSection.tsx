"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { profile } from "@/data/profile";
import { SocialRow } from "@/components/ui/SocialIcons";

export default function ContactSection({ showHeader = false }: { showHeader?: boolean }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-dark-800/50" />
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, #bf00ff, transparent)" }} />
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, #00ffff, transparent)" }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple/40 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeader && (
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }} className="text-center mb-16">
            <div className="font-mono text-xs text-neon-purple/60 tracking-[0.4em] mb-3 uppercase">05. CONTACT</div>
            <h2 className="section-title gradient-text">Get In Touch</h2>
            <div className="mt-3 mx-auto w-16 h-0.5 bg-gradient-to-r from-neon-purple to-neon-cyan" />
            <p className="mt-4 text-slate-400 font-mono text-sm max-w-lg mx-auto">
              Have a project in mind or want to collaborate? Let&apos;s build something amazing together.
            </p>
          </motion.div>
        )}

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact form */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }} className="lg:col-span-3">
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="font-mono text-xs text-slate-500 ml-2">contact.form</div>
              </div>

              {sent ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="py-16 text-center">
                  <div className="text-4xl mb-4">✅</div>
                  <div className="font-display text-xl font-bold gradient-text mb-2">Message Sent!</div>
                  <p className="font-mono text-sm text-slate-400">
                    Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block font-mono text-[10px] text-slate-500 tracking-widest uppercase mb-2">// Name</label>
                    <input type="text" required value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full bg-dark-700 border border-slate-700 hover:border-neon-purple/40 focus:border-neon-cyan/60 text-slate-200 font-mono text-sm rounded-lg px-4 py-3 outline-none transition-all placeholder-slate-600" />
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] text-slate-500 tracking-widest uppercase mb-2">// Email</label>
                    <input type="email" required value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full bg-dark-700 border border-slate-700 hover:border-neon-purple/40 focus:border-neon-cyan/60 text-slate-200 font-mono text-sm rounded-lg px-4 py-3 outline-none transition-all placeholder-slate-600" />
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] text-slate-500 tracking-widest uppercase mb-2">// Message</label>
                    <textarea required rows={5} value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell me about your project..."
                      className="w-full bg-dark-700 border border-slate-700 hover:border-neon-purple/40 focus:border-neon-cyan/60 text-slate-200 font-mono text-sm rounded-lg px-4 py-3 outline-none transition-all placeholder-slate-600 resize-none" />
                  </div>
                  <motion.button type="submit" disabled={sending}
                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    className="btn-primary w-full relative overflow-hidden" data-hover>
                    <span className="relative z-10">
                      {sending ? (
                        <span className="flex items-center justify-center gap-2">
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : "✉ Send Message"}
                    </span>
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }} className="lg:col-span-2 space-y-6">
            {/* Direct contact */}
            <div className="glass-card p-6">
              <div className="font-mono text-[10px] text-slate-500 tracking-widest uppercase mb-4">// Direct Contact</div>
              <div className="space-y-4">
                {[
                  { icon: "✉", label: "Email",    value: profile.email,    href: `mailto:${profile.email}`, color: "#00ffff" },
                  { icon: "◉", label: "Location", value: profile.location, href: "#",                       color: "#bf00ff" },
                  { icon: "⏱", label: "Timezone", value: profile.timezone, href: "#",                       color: "#0080ff" },
                ].map((item) => (
                  <a key={item.label} href={item.href} className="flex items-center gap-3 group" data-hover>
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110"
                      style={{ background: `${item.color}10`, border: `1px solid ${item.color}25` }}>
                      <span style={{ color: item.color }} className="text-sm">{item.icon}</span>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] text-slate-500 tracking-widest">{item.label}</div>
                      <div className="font-mono text-sm text-slate-200 group-hover:text-white transition-colors">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div className="glass-card p-6">
              <div className="font-mono text-[10px] text-slate-500 tracking-widest uppercase mb-5">// Social Media</div>
              <SocialRow
                socials={profile.socials as unknown as { href: string; icon: string; label: string; color: string }[]}
                size="lg"
                showLabel
                className="flex-col !items-start gap-4"
              />
            </div>

            {/* Availability */}
            <div className="glass-card p-4 flex items-center gap-3" style={{ borderColor: "rgba(0,255,0,0.15)" }}>
              <div className="relative">
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30" />
              </div>
              <div>
                <div className="font-mono text-xs text-green-400">Available for projects</div>
                <div className="font-mono text-[10px] text-slate-500">Response within 24 hours</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
