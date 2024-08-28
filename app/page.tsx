import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Hero from "@/components/Hero";
import { Separator } from "@/components/ui/separator";
import OrganizationalExperience from "@/components/OrganizationalExperience";

export default function Home() {
  return (
    <main className="space-y-8">
      <Hero />
      <About />
      <Separator />
      <WorkExperience />
      <OrganizationalExperience />
    </main>
  );
}
