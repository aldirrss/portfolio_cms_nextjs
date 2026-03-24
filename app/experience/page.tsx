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
        subtitle="A timeline of my professional journey, showcasing the roles I've held, companies I've worked with, and the impact I've made in the software development industry."
      />
      <ExperienceSection />
    </>
  );
}
