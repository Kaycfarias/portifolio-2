"use client";

import { createContext, useEffect, useRef, useState } from "react";

export const navigation = [
  { name: "Home", href: "#Home" },
  { name: "About", href: "#About" },
  { name: "Skills", href: "#Skills" },
  { name: "Projects", href: "#Projects" },
  { name: "Contact", href: "#Contact" },
];

interface NavContextType {
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}

export const NavContext = createContext<NavContextType>(undefined!);

export default function NavProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [activeSection, setActiveSection] = useState(navigation[0].name);
  const previousActiveSection = useRef(activeSection);

  useEffect(() => {
    const elementId = document.getElementById(activeSection);
    if (elementId && previousActiveSection.current !== activeSection) {
      window.scrollTo({
        top: elementId.offsetTop,
        behavior: "smooth",
      });
    }
    previousActiveSection.current = activeSection;
  }, [activeSection]);

  return (
    <NavContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </NavContext.Provider>
  );
}
