import { HeroSection } from "./components/HeroSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { TechStackSection } from "./components/TechStackSection";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { SiteFooter } from "./components/SiteFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <HeroSection />
      <ProjectsSection />
      <TechStackSection />
      <AboutSection />
      <ContactSection />
      <SiteFooter />
    </div>
  );
}
