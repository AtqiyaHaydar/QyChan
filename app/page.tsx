"use client"

import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Hero from "@/components/Hero";
import { Separator } from "@/components/ui/separator";
import OrganizationalExperience from "@/components/OrganizationalExperience";
import Achievements from "@/components/Achievements";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
      easing: 'ease-in-out', 
    });
  }, []);

  return (
    <main className="space-y-8">
      <Hero />
      <About />
      <Separator data-aos="fade-right" />
      <WorkExperience />
      <OrganizationalExperience />
      <Separator data-aos="fade-right" />
      <Achievements />
      <Separator data-aos="fade-right" />
      <Projects />
      <Footer />
    </main>
  );
}
