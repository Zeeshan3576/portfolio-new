import { ProjectCard } from "@/components/sections/ProjectCard";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PROFILE, PROJECTS } from "@/content/site";

export function FeaturedProjects() {
  return (
    <section id="work" className="scroll-mt-4 border-t border-divider py-16 lg:py-20">
      <Container className="flex flex-col gap-12 lg:gap-20">
        <div className="flex flex-col gap-4">
          <SectionTitle>Featured projects</SectionTitle>
          <p className="max-w-[580px] text-base leading-relaxed text-muted">
            {PROFILE.projectsIntro}
          </p>
        </div>
        <div className="flex flex-col gap-16 lg:gap-20">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
