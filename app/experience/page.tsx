import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ExperienceSection from "@/components/sections/ExperienceSection";

export const metadata: Metadata = {
  title: "Experience",
  description: "Aldi Rosid's professional career timeline — roles, companies, and key achievements over 5+ years in software development.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Career"
        title="Experience"
        subtitle="My professional journey — from freelance web developer to senior fullstack engineer and Odoo consultant."
      />
      <ExperienceSection />
    </>
  );
}
