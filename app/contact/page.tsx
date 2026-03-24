import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Aldi Rosid for project inquiries, collaboration, or just to say hello.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get In Touch"
        title="Contact Me"
        subtitle="Have a project in mind, a question, or just want to say hi? My inbox is always open."
      />
      <ContactSection />
    </>
  );
}
