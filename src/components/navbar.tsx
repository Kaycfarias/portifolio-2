"use client";

import SectionButton from "./ui/secbutton";
import { AnimatedThemeToggler } from "./toggle-theme";

const navigation = [
  { name: "Home", href: "#Home" },
  { name: "About", href: "#About" },
  { name: "Skills", href: "#Skills" },
  { name: "Projects", href: "#Projects" },
  { name: "Contact", href: "#Contact" },
];

export default function Navbar() {
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
            <AnimatedThemeToggler />
          </div>
        </div>
      </nav>
    </>
  );
}
