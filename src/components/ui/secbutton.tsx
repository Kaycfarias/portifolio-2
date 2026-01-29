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
  name,
  className,
  ...props
}: React.ComponentProps<"button"> & Readonly<{
  name: string;
  className?: string;
}>) {
  const { activeSection } = useContext(NavContext);

  return (
    <StyledButton
      style={{
        backgroundSize: activeSection === name ? "100% 3px" : "0 3px",
      }}
      className={cn(className)}
      {...props}
    >
      <span
        style={{
          transform:
            activeSection === name
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
