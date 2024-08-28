import About from "@/components/About";
import Hero from "@/components/Hero";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="space-y-10">
      <Hero />
      <Separator />
      <About />
      <Separator />
    </main>
  );
}
