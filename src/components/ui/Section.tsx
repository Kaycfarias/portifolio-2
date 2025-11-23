"use client";

import { useOnInView } from "react-intersection-observer";
import { NavContext } from "@/app/context/NavContext";
import { useContext } from "react";

interface SectionProps {
  id: string;
  children: React.ReactNode;
}

export default function Section({ id, children }: Readonly<SectionProps>) {
  const useNav = useContext(NavContext);
  
  const trackingRef = useOnInView(
    (inView, entry) => {
      if (inView) {
        useNav.setActiveSection(id);
        console.log("Element appeared in view", entry);
      } else {
        console.log("Element left view", entry);
      }
    },
    {
      threshold: 0.1,
    }
  );

  return (
    <div
      id={id}
      ref={trackingRef}
      className="mx-auto max-w-6xl"
      style={{
        height: "calc(100dvh - 3.5rem)",
      }}
    >
      {children}
    </div>
  );
}
