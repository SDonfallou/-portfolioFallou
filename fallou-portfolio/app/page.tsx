import { HeroSection } from "./components/HeroSection";
import { IntroSection } from "./components/IntroSection";
import { ClientsSection } from "./components/ClientsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { TechStackSection } from "./components/TechStackSection";
import { CertificatesSection } from "./components/CertificatesSection";
import { ContactSection } from "./components/ContactSection";
import { SiteFooter } from "./components/SiteFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <HeroSection />
      <IntroSection />
      <ClientsSection />
      <ProjectsSection />
      <TechStackSection />
      <CertificatesSection />
      <ContactSection />
      <SiteFooter />
    </div>
  );
}
