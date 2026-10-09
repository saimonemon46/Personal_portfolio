import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProofStrip } from "@/components/ProofStrip";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { SystemsBlueprint } from "@/components/SystemsBlueprint";
import { DsaPatterns } from "@/components/DsaPatterns";
import { SkillsGrid } from "@/components/SkillsGrid";
import { Achievements } from "@/components/Achievements";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f6f4ee] dark:bg-[#0b0f19] text-[#18191f] dark:text-[#f1f5f9] transition-colors duration-200">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProofStrip />
        <FeaturedProjects />
        <ExperienceTimeline />
        <SystemsBlueprint />
        <DsaPatterns />
        <SkillsGrid />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
