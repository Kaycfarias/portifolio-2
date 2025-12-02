"use client";

import { useOnInView } from "react-intersection-observer";

import { NavContext } from "@/app/context/NavContext";
import { useContext } from "react";

import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({
  id,
  children,
  className,
}: Readonly<SectionProps>) {
  const useNav = useContext(NavContext);

  const trackingRef = useOnInView(
    (inView, entry) => {
      if (inView) {
        useNav.setActiveSection(id);
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
      className={`mx-auto max-w-6xl min-h-[calc(100dvh-3.5rem)] ${cn(
        className
      )}`}
    >
      {children}
    </div>
  );
}
