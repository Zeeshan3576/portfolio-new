import { ExperienceItem } from "@/components/sections/ExperienceItem";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { EXPERIENCE } from "@/content/site";

export function Experience() {
  return (
    <section className="border-t border-divider py-16 lg:py-20">
      <Container className="grid gap-6 lg:grid-cols-2 lg:gap-12">
        <SectionTitle>My experience</SectionTitle>
        <ul className="ml-1.5 flex flex-col gap-12 border-l border-divider lg:gap-16">
          {EXPERIENCE.map((item) => (
            <ExperienceItem key={`${item.role}-${item.period}`} item={item} />
          ))}
        </ul>
      </Container>
    </section>
  );
}
