"use client";

import { useContext } from "react";
import { NavContext } from "@/app/context/NavContext";
import styled from "styled-components";

const StyledButton = styled.button`
  & {
    background-image: linear-gradient(90deg, #40ffaa, #4079ff);
    background-repeat: no-repeat;
    background-size: 0 3px;
    background-position: left bottom;
    transition: background-size 0.2s ease-in-out;
    cursor: pointer;
    text-decoration: none;
    font-weight: 900;
  }
`;

const scrollTo = (id: string) => {
  const element = document.getElementById(id);
  if (!element) return;

  const y = element.offsetTop;

  window.scrollTo({ top: y, behavior: "smooth" });
};

export default function SectionButton({
  id,
  children,
  className,
}: Readonly<{
  id: string;
  href: string;
  children: React.ReactNode;
  className?: string;
}>) {
  const { activeSection } = useContext(NavContext);
  return (
    <StyledButton
      as="a"
      style={{
        backgroundSize: activeSection === id ? "100% 3px" : "0 3px",
      }}
      className={className}
      onClick={() => scrollTo(id)}
    >
      {children}
    </StyledButton>
  );
}
