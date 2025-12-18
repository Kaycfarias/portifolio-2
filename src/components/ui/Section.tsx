"use client";

import { useInView } from "react-intersection-observer";
import { useContext } from "react";

import { NavContext } from "@/app/context/NavContext";
import { cn } from "@/lib/utils";
import FadeContent from "../animation/fade-content";

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
    <FadeContent
      duration={750}
      easing="ease-out"
      initialOpacity={0}
    >
      <section
        id={id}
        ref={ref}
        className={cn(
          "mx-auto max-w-6xl min-h-[calc(100dvh-3.5rem)] ",
          "px-4 sm:px-6 lg:px-8",
          "flex flex-col h-full w-full items-center justify-center gap-10",
          className
        )}
      >
        {children}
        <div className="h-14" />
      </section>
    </FadeContent>
  );
}
