"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import SectionButton from "./ui/secbutton";
import { AnimatedThemeToggler } from "./toggle-theme";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Home", href: "#Home" },
  { name: "About", href: "#About" },
  { name: "Skills", href: "#Skills" },
  { name: "Projects", href: "#Projects" },
  { name: "Contact", href: "#Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav
        className={`
          fixed w-full z-50 
          flex flex-col justify-center items-center
          border-b
          ${isOpen ? "backdrop-blur-md" : "backdrop-blur-sm"}`}
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
                  id={item.name}
                  name={item.name}
                />
              ))}
            </div>
            <AnimatedThemeToggler />
            <button
              className="sm:hidden text-2xl p-1"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {/* <AnimatePresence> */}
          {isOpen && (
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
                  onClick={() => setIsOpen(false)}
                >
                  <SectionButton
                    id={item.name}
                    name={item.name}
                    className="block w-full text-left p-1"
                  />
                </div>
              ))}
            </motion.div>
          )}
        {/* </AnimatePresence> */}
      </nav>
    </>
  );
}
