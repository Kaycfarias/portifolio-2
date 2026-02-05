"use client";

import { useContext } from "react";
import { useInView } from "react-intersection-observer";

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
    threshold: 0.6,
    onChange: (inView) => {
      if (inView) {
        setActiveSection(id);
      }
    },
  });

  return (
    <FadeContent duration={1000} easing="ease-out" initialOpacity={0}>
      <section
        id={id}
        ref={ref}
        className={cn(
          "mx-auto min-h-[calc(100dvh-3.5rem)] max-w-6xl",
          "px-4 sm:px-6 lg:px-8",
          "flex h-full w-full flex-col items-center justify-center gap-10",
          className,
        )}
      >
        {children}
        <div className="h-14" />
      </section>
    </FadeContent>
  );
}
