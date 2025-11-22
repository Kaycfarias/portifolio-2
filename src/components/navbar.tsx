"use client";

import SectionButton from "./ui/secbutton";
// import { useState } from "react";
// import { AnimatePresence, motion } from "motion/react";
import { AnimatedThemeToggler } from "./toggle-theme";

const navigation = [
  { name: "Home", href: "#Home" },
  { name: "About", href: "#About" },
  { name: "Skills", href: "#Skills" },
  { name: "Projects", href: "#Projects" },
  { name: "Contact", href: "#Contact" },
];

export default function Navbar() {
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="fixed backdrop-blur-[2px] border-b w-full flex flex-col justify-center items-center z-10">
        <div className="flex h-14 items-center justify-between px-4 w-full max-w-6xl">
          <h1 className="scroll-m-20 text-center text-3xl font-extrabold tracking-tight text-balance">
            @kayc
          </h1>
          <div className="flex items-center space-x-2">
            <div className="hidden sm:block space-x-4">
              {navigation.map((item) => (
                <SectionButton key={item.name} id={item.name} href={item.href}>
                  {item.name}
                </SectionButton>
              ))}
            </div>
            {/* <label>
              <div className="sm:hidden w-9 h-10 cursor-pointer flex flex-col items-center justify-center">
                <input
                  className="hidden peer"
                  type="checkbox"
                  checked={isOpen}
                  onChange={() => setIsOpen(!isOpen)}
                />
                <div className="w-[50%] h-[2px] bg-black rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] peer-checked:rotate-[-45deg]" />
                <div className="w-[50%] h-[2px] bg-black rounded-md transition-all duration-300 origin-center peer-checked:hidden" />
                <div className="w-[50%] h-[2px] bg-black rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] peer-checked:rotate-[45deg]" />
              </div>
            </label> */}
            <AnimatedThemeToggler />
          </div>
        </div>
        {/* <AnimatePresence>
          {isOpen && (
            <motion.div
              key="modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="sm:hidden w-full p-2"
            >
              <div className="flex justify-between space-x-4 bg-accent">
                {navigation.map((item) => (
                  <SectionButton
                    className=""
                    key={item.name}
                    id={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {item.name}
                  </SectionButton>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence> */}
      </nav>
    </>
  );
}
