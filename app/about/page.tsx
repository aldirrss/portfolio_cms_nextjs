import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import AboutSection from "@/components/sections/AboutSection";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Aldi Rosid — Full-Stack Developer and Odoo Engineer with 5+ years of experience delivering ERP backend solutions.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Me"
        title="Who I Am"
        subtitle="A Full-Stack Developer focused on ERP backend architecture, Odoo engineering, and reliable enterprise systems."
      />
      <AboutSection />
    </>
  );
}
