import { HeroSection } from "./components/HeroSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { TechStackSection } from "./components/TechStackSection";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { SiteFooter } from "./components/SiteFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      <HeroSection />
      <ProjectsSection />
      <TechStackSection />
      <AboutSection />
      <ContactSection />
      <SiteFooter />
    </div>
  );
}
