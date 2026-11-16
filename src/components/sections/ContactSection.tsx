import { ContactForm } from "@/components/sections/ContactForm";
import { SocialButtons } from "@/components/sections/SocialButtons";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { COPYRIGHT_YEAR, PROFILE } from "@/content/site";

const INLINE_LINK_CLASSES =
  "border-b border-accent text-foreground transition-colors hover:text-accent";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-4 border-t border-divider py-16 lg:py-20">
      <Container className="grid gap-12 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-x-12 lg:gap-y-0">
        <div className="flex flex-col gap-6 lg:gap-8">
          <div className="flex flex-col gap-4">
            <SectionTitle>Let’s connect</SectionTitle>
            <div className="flex flex-col gap-2 text-base text-muted">
              <p>
                Say hello at{" "}
                <a href={`mailto:${PROFILE.email}`} className={INLINE_LINK_CLASSES}>
                  {PROFILE.email}
                </a>
              </p>
              <p>
                For more info, here’s my{" "}
                <a href={PROFILE.resumeHref} className={INLINE_LINK_CLASSES}>
                  resume
                </a>
              </p>
            </div>
          </div>
          <SocialButtons variant="plain" />
        </div>

        <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <ContactForm />
        </div>

        <footer className="text-base text-muted lg:col-start-1 lg:row-start-2 lg:self-end lg:pb-4">
          © {COPYRIGHT_YEAR} {PROFILE.name}
        </footer>
      </Container>
    </section>
  );
}
