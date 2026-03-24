import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import AboutSection from "@/components/sections/AboutSection";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Aldi Rosid — Fullstack & Odoo Developer with 5+ years of experience building scalable web applications and ERP systems.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Me"
        title="Who I Am"
        subtitle="A fullstack developer passionate about clean architecture, performance, and building things users actually love."
      />
      <AboutSection />
    </>
  );
}
