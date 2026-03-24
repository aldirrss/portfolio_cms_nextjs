import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ProjectsSection from "@/components/sections/ProjectsSection";

export const metadata: Metadata = {
  title: "Projects",
  description: "A showcase of web applications, Odoo modules, and open-source tools built by Aldi Rosid.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="All Projects"
        subtitle="A curated selection of web applications, ERP customizations, and open-source work I've built over the years."
      />
      <ProjectsSection />
    </>
  );
}
