"use client";

import { useContext } from "react";
import { NavContext } from "@/app/context/NavContext";

import styled from "styled-components";
import { cn } from "@/lib/utils";

const StyledButton = styled.button`
  & {
    background-image: linear-gradient(90deg, #40ffaa, #4079ff);
    background-repeat: no-repeat;
    background-size: 0 3px;
    background-position: left bottom;
    transition: background-size 0.3s ease-in-out;
    cursor: pointer;
    text-decoration: none;
    font-weight: 900;
  }
`;

export default function SectionButton({
  id,
  name,
  className,
}: Readonly<{
  id: string;
  name: string;
  className?: string;
}>) {
  const { activeSection } = useContext(NavContext);

  const scrollTo = (id: string) => {
      const element = document.getElementById(id);
      if (!element) return;

      const y = element.offsetTop;

      window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <StyledButton
      as="a"
      style={{
        backgroundSize: activeSection === id ? "100% 3px" : "0 3px",
      }}
      className={cn(className)}
      onClick={() => scrollTo(id)}
    >
      <span
        style={{
          transform:
            activeSection === id
              ? "translateY(-3px) scale(1.10)"
              : "translateY(0) scale(1)",
          transition: "transform 0.25s ease-out",
          display: "inline-block",
        }}
      >
        {name}
      </span>
    </StyledButton>
  );
}
