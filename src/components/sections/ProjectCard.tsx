import { ProjectInfoTable } from "@/components/sections/ProjectInfoTable";
import { Badge } from "@/components/ui/Badge";
import { TextLink } from "@/components/ui/TextLink";
import type { IProject } from "@/types/content";

interface IProjectCardProps {
  project: IProject;
}

/** Text-only project entry: title on the left, details on the right (stacked on mobile). */
export function ProjectCard({ project }: IProjectCardProps) {
  return (
    <article className="grid gap-6 border-t border-divider pt-10 lg:grid-cols-2 lg:gap-12 lg:pt-12">
      <div className="flex flex-col items-start gap-4">
        {project.badge && <Badge label={project.badge} />}
        <h3 className="text-2xl leading-snug lg:text-[32px]">{project.title}</h3>
      </div>

      <div className="flex flex-col gap-6">
        <p className="text-base leading-relaxed text-muted lg:text-lg">{project.description}</p>
        <ProjectInfoTable rows={project.info} />
        {project.links.length > 0 && (
          <div className="flex flex-wrap gap-6 pt-2">
            {project.links.map((link) => (
              <TextLink key={link.label} href={link.href} label={link.label} withArrow />
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
