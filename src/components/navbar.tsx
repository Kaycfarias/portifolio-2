"use client";

import { useState } from "react";
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
      <nav className="fixed backdrop-blur-[2px] border-b w-full flex flex-col justify-center items-center z-50">
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
            <AnimatedThemeToggler />
            <button
              className="sm:hidden text-2xl p-1"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="sm:hidden w-full border-t">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-3 hover:bg-accent"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
