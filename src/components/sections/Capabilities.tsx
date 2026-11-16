import { Chip } from "@/components/ui/Chip";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PROFILE, SKILLS } from "@/content/site";

export function Capabilities() {
  return (
    <section className="py-16 lg:pt-[120px] lg:pb-20">
      <Container className="grid gap-6 lg:grid-cols-2 lg:gap-12">
        <SectionTitle>My capabilities</SectionTitle>
        <div className="flex flex-col gap-6 lg:gap-8">
          <p className="text-base leading-relaxed text-muted lg:text-lg">
            {PROFILE.capabilitiesIntro}
          </p>
          <ul className="flex flex-wrap gap-3 lg:gap-4" aria-label="Skills">
            {SKILLS.map((skill) => (
              <Chip key={skill} label={skill} />
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
