import Footer from "@/components/footer";
import AboutPage from "./sections/about";
import ContactPage from "./sections/contact";
import HomePage from "./sections/home";
import ProjectsPage from "./sections/projects";
import SkillsPage from "./sections/skills";

export const navigation = [
  { name: "Home", href: "#Home" },
  { name: "About", href: "#About" },
  { name: "Skills", href: "#Skills" },
  { name: "Projects", href: "#Projects" },
  { name: "Contact", href: "#Contact" },
];

export default function Home() {
  return (
    <div className="relative top-14 overflow-y-scroll">
      <HomePage />
      <AboutPage />
      <SkillsPage />
      <ProjectsPage />
      <ContactPage />
      <Footer />
    </div>
  );
}
