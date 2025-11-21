"use client";

import { InView } from "react-intersection-observer";
import { NavContext } from "@/app/context/NavContext";
import { useContext } from "react";

interface SectionProps {
  id: string;
  children: React.ReactNode;
}

export default function Section({ id, children }: Readonly<SectionProps>) {
  const useNav = useContext(NavContext);
  return (
    <InView
      as="div"
      id={id}
      threshold={0.6}
      onChange={(inView) => {
        if (inView) {
          useNav.setActiveSection(id);
        }
      }}
      className="mx-auto max-w-6xl"
      style={{
        height: "calc(100svh - 3.5rem)", // Adjust height to account for the navbar
      }}
    >
      {children}
    </InView>
  );
}
