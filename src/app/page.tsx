import { AboutIntro } from "@/components/sections/AboutIntro";
import { Capabilities } from "@/components/sections/Capabilities";
import { ContactSection } from "@/components/sections/ContactSection";
import { Experience } from "@/components/sections/Experience";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <AboutIntro />
      <Capabilities />
      <Experience />
      <ContactSection />
    </>
  );
}
