"use client";

import { createContext, useState } from "react";

import { navigation } from "../page";

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

  return (
    <NavContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </NavContext.Provider>
  );
}
