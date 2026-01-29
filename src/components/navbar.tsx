"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import SectionButton from "./ui/secbutton";
import { AnimatedThemeToggler } from "./toggle-theme";
import { Menu, X } from "lucide-react";

const NAV_HEIGHT = 56; // h-14 Height of the navbar in pixels

const navigation = [
  { name: "Home", href: "#Home" },
  { name: "About", href: "#About" },
  { name: "Skills", href: "#Skills" },
  { name: "Projects", href: "#Projects" },
  { name: "Contact", href: "#Contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [pendingScrollTarget, setPendingScrollTarget] = useState<string | null>(
    "#Home",
  );

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const yPosition = element.offsetTop - NAV_HEIGHT;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
  };

  const handleMobileMenuItemClick = (sectionName: string) => {
    setPendingScrollTarget(sectionName);
    setIsMobileMenuOpen(false);
  };

  const handleAnimationComplete = () => {
    if (pendingScrollTarget) {
      scrollToSection(pendingScrollTarget);
      setPendingScrollTarget(null);
    }
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav
      className={`
        fixed w-full z-50 
        flex flex-col justify-center items-center
        border-b
        ${isMobileMenuOpen ? "backdrop-blur-md" : "backdrop-blur-sm"}`}
    >
      <div className="flex h-14 items-center justify-between px-4 w-full max-w-6xl">
        <h1 className="scroll-m-20 text-center text-3xl font-extrabold tracking-tight text-balance">
          @kayc
        </h1>
        <div className="flex items-center space-x-2">
          <div className="hidden sm:block space-x-4">
            {navigation.map((item) => (
              <SectionButton
                key={item.name}
                name={item.name}
                onClick={() => scrollToSection(item.name)}
              />
            ))}
          </div>
          <AnimatedThemeToggler />
          <button
            className="sm:hidden text-2xl p-1"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence onExitComplete={handleAnimationComplete}>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="sm:hidden w-full overflow-hidden"
          >
            {navigation.map((item) => (
              <div
                className="p-3"
                key={item.name}
                onClick={() => handleMobileMenuItemClick(item.name)}
              >
                <SectionButton
                  name={item.name}
                  className="block w-full text-left p-1"
                />
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
