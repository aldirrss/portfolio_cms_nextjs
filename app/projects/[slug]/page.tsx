import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetailSection from "@/components/sections/projects/ProjectDetailSection";
import {
	getProjectBySlug,
	getProjectScreenshots,
	projectCategories,
	type Project,
} from "@/data/projects";

interface ProjectDetailPageProps {
	params: Promise<{ slug: string }>;
}

function getCategoryLabel(project: Project): string {
	const category = projectCategories.find((item) => item.id === project.category);
	return category?.label ?? project.category;
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
	const { slug } = await params;
	const project = getProjectBySlug(slug);

	if (!project) {
		return {
			title: "Project Not Found",
		};
	}

	return {
		title: `${project.title} | Project Detail`,
		description: project.description,
	};
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
	const { slug } = await params;
	const project = getProjectBySlug(slug);

	if (!project) {
		notFound();
	}

	const screenshots = getProjectScreenshots(project);
	const categoryLabel = getCategoryLabel(project);

	return (
		<ProjectDetailSection
			project={project}
			categoryLabel={categoryLabel}
			initialScreenshots={screenshots}
		/>
	);
}
