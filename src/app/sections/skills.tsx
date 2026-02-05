import {
  LogoCss3,
  LogoExpress,
  LogoGit,
  LogoGithub,
  LogoHtml5,
  LogoJavascript,
  LogoNextjs,
  LogoNodejs,
  LogoPHP,
  LogoPython,
  LogoReact,
  LogoSass,
  LogoSql,
  LogoTailwind,
  Typescript,
} from "@/components/icons";

import TextType from "@/components/text-type";
import Section from "@/components/ui/section";
import Link from "next/link";

import { useTranslations } from "use-intl/react";

const skills = [
  {
    name: "Nextjs",
    icon: <LogoNextjs width={75} height={75} />,
    page: "https://nextjs.org/",
  },
  {
    name: "React",
    icon: <LogoReact width={75} height={75} />,
    page: "https://react.dev/",
  },
  {
    name: "Typescript",
    icon: <Typescript width={75} height={75} />,
    page: "https://www.typescriptlang.org/",
  },
  {
    name: "Javascript",
    icon: <LogoJavascript width={75} height={75} />,
    page: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
  },
  {
    name: "Python",
    icon: <LogoPython width={75} height={75} />,
    page: "https://www.python.org/",
  },
  {
    name: "Nodejs",
    icon: <LogoNodejs width={75} height={75} />,
    page: "https://nodejs.org",
  },
  {
    name: "Express.js",
    icon: <LogoExpress width={75} height={75} />,
    page: "https://expressjs.com/",
  },
  {
    name: "Html",
    icon: <LogoHtml5 width={75} height={75} />,
    page: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
  },
  {
    name: "Css",
    icon: <LogoCss3 width={75} height={75} />,
    page: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
  },
  {
    name: "Tailwindcss",
    icon: <LogoTailwind width={75} height={75} />,
    page: "https://tailwindcss.com/",
  },
  {
    name: "Sass",
    icon: <LogoSass width={75} height={75} />,
    page: "https://sass-lang.com/",
  },
  {
    name: "Git",
    icon: <LogoGit width={75} height={75} />,
    page: "https://git-scm.com/",
  },
  {
    name: "GitHub",
    icon: <LogoGithub width={75} height={75} />,
    page: "https://github.com/",
  },
  {
    name: "PHP",
    icon: <LogoPHP width={75} height={75} />,
    page: "https://www.php.net/",
  },
  {
    name: "SQL",
    icon: <LogoSql width={75} height={75} />,
    page: "https://www.w3schools.com/sql/",
  },
];

export default function SkillsPage() {
  const t = useTranslations("SkillsSection");
  return (
    <Section id="Skills">
      <TextType
        className="text-center text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl"
        text={[t("title")]}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor
        startOnVisible
        cursorCharacter="|"
        loop={false}
      />
      <div className="w-full max-w-5xl">
        <ul className="grid grid-cols-3 gap-4 sm:grid-cols-4 sm:gap-6 md:grid-cols-5">
          {skills.map((skill, index) => (
            <li key={index}>
              <Link
                href={skill.page}
                target="_blank"
                rel="noopener noreferrer"
                className="group border-border/50 bg-card/30 hover:border-primary/50 hover:bg-card/50 hover:shadow-primary/10 flex flex-col items-center justify-center gap-3 rounded-xl border p-4 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-lg sm:p-6"
              >
                <div className="transition-transform duration-300 group-hover:scale-110">
                  {skill.icon}
                </div>
                <span className="text-muted-foreground group-hover:text-foreground text-xs font-medium transition-colors duration-300 sm:text-sm">
                  {skill.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
