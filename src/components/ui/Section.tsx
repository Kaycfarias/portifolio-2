"use client";

import { useInView } from "react-intersection-observer";
import { useContext } from "react";

import { NavContext } from "@/app/context/NavContext";
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
  const { setActiveSection } = useContext(NavContext);

  const { ref } = useInView({
    threshold: 0.5,
    onChange: (inView) => {
      if (inView) {
        setActiveSection(id);
      }
    },
  });

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "mx-auto max-w-6xl min-h-[calc(100dvh-3.5rem)]",
        "px-4 sm:px-6 lg:px-8",
        "flex flex-col",
        className
      )}
    >
      {children}
    </section>
  );
}
