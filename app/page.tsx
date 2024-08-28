import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Hero from "@/components/Hero";
import { Separator } from "@/components/ui/separator";
import OrganizationalExperience from "@/components/OrganizationalExperience";
import Achievements from "@/components/Achievements";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="space-y-8">
      <Hero />
      <About />
      <Separator />
      <WorkExperience />
      <OrganizationalExperience />
      <Separator />
      <Achievements />
      <Separator />
      <Projects />
      <Footer />
    </main>
  );
}
