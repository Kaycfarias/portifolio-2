"use client";

import { Moon, Sun } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";

import { cn } from "@/lib/utils";

interface AnimatedThemeTogglerProps extends React.ComponentPropsWithoutRef<"button"> {
  duration?: number;
}

const getCircleCenter = (element: HTMLElement) => {
  const { top, left, width, height } = element.getBoundingClientRect();
  return {
    x: left + width / 2,
    y: top + height / 2,
  };
};

const getMaxRadius = (x: number, y: number) => {
  const maxX = Math.max(x, window.innerWidth - x);
  const maxY = Math.max(y, window.innerHeight - y);
  return Math.hypot(maxX, maxY);
};

const animateThemeTransition = (element: HTMLElement, duration: number) => {
  const { x, y } = getCircleCenter(element);
  const radius = getMaxRadius(x, y);

  document.documentElement.animate(
    {
      clipPath: [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${radius}px at ${x}px ${y}px)`,
      ],
    },
    {
      duration,
      easing: "ease-in-out",
      pseudoElement: "::view-transition-new(root)",
    },
  );
};

const updateThemeState = (isDark: boolean) => {
  const root = document.documentElement;
  if (isDark) {
    root.classList.replace("light", "dark");
    root.style.colorScheme = root.style.colorScheme.replace("light", "dark");
  } else {
    root.classList.replace("dark", "light");
    root.style.colorScheme = root.style.colorScheme.replace("dark", "light");
  }
  localStorage.setItem("theme", isDark ? "dark" : "light");
};

export const AnimatedThemeToggler = ({
  className,
  duration = 400,
  ...props
}: AnimatedThemeTogglerProps) => {
  const [isDark, setIsDark] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const syncThemeFromDOM = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    syncThemeFromDOM();

    const observer = new MutationObserver(syncThemeFromDOM);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = useCallback(async () => {
    if (!buttonRef.current) return;

    await document.startViewTransition(() => {
      flushSync(() => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        updateThemeState(newTheme);
      });
    }).ready;

    animateThemeTransition(buttonRef.current, duration);
  }, [isDark, duration]);

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      className={cn(className)}
      {...props}
    >
      {isDark ? <Sun /> : <Moon />}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};
