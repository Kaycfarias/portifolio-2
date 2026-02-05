"use client";

import AboutPage from "@/app/sections/about";
import ContactPage from "@/app/sections/contact";
import HomePage from "@/app/sections/home";
import ProjectsPage from "@/app/sections/projects";
import SkillsPage from "@/app/sections/skills";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div id="page" className="relative top-14">
      <HomePage />
      <AboutPage />
      <SkillsPage />
      <ProjectsPage />
      <ContactPage />
      <Footer />
    </div>
  );
}
