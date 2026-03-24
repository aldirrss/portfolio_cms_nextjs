import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import TechStackSection from "@/components/sections/TechStackSection";

export const metadata: Metadata = {
  title: "Tech Stack",
  description: "The technologies, tools, and frameworks Aldi Rosid uses to build exceptional digital experiences.",
};

export default function StackPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tech Stack"
        title="My Toolkit"
        subtitle="Tools and technologies I rely on every day to build fast, scalable, and maintainable software."
      />
      <TechStackSection />
    </>
  );
}
