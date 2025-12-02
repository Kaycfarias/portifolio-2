"use client";

import { createContext, useState } from "react";

interface ScrollContextType {
  isScrolling: boolean;
  setIsScrolling: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ScrollContext = createContext<ScrollContextType>(undefined!);

export default function ScrollProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isScrolling, setIsScrolling] = useState(false);

  return (
    <ScrollContext.Provider value={{ isScrolling, setIsScrolling }}>
      {children}
    </ScrollContext.Provider>
  );
}
