import Link from "next/link";
import { useTranslations } from "use-intl/react";

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

const ICON_SIZE = 75;

interface Skill {
  name: string;
  icon: React.ReactNode;
  url: string;
}

const SKILLS: Skill[] = [
  {
    name: "Nextjs",
    icon: <LogoNextjs width={ICON_SIZE} height={ICON_SIZE} />,
    url: "https://nextjs.org/",
  },
  {
    name: "React",
    icon: <LogoReact width={ICON_SIZE} height={ICON_SIZE} />,
    url: "https://react.dev/",
  },
  {
    name: "Typescript",
    icon: <Typescript width={ICON_SIZE} height={ICON_SIZE} />,
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "Javascript",
    icon: <LogoJavascript width={ICON_SIZE} height={ICON_SIZE} />,
    url: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
  },
  {
    name: "Python",
    icon: <LogoPython width={ICON_SIZE} height={ICON_SIZE} />,
    url: "https://www.python.org/",
  },
  {
    name: "Nodejs",
    icon: <LogoNodejs width={ICON_SIZE} height={ICON_SIZE} />,
    url: "https://nodejs.org",
  },
  {
    name: "Express.js",
    icon: <LogoExpress width={ICON_SIZE} height={ICON_SIZE} />,
    url: "https://expressjs.com/",
  },
  {
    name: "Html",
    icon: <LogoHtml5 width={ICON_SIZE} height={ICON_SIZE} />,
    url: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
  },
  {
    name: "Css",
    icon: <LogoCss3 width={ICON_SIZE} height={ICON_SIZE} />,
    url: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
  },
  {
    name: "Tailwindcss",
    icon: <LogoTailwind width={ICON_SIZE} height={ICON_SIZE} />,
    url: "https://tailwindcss.com/",
  },
  {
    name: "Sass",
    icon: <LogoSass width={ICON_SIZE} height={ICON_SIZE} />,
    url: "https://sass-lang.com/",
  },
  {
    name: "Git",
    icon: <LogoGit width={ICON_SIZE} height={ICON_SIZE} />,
    url: "https://git-scm.com/",
  },
  {
    name: "GitHub",
    icon: <LogoGithub width={ICON_SIZE} height={ICON_SIZE} />,
    url: "https://github.com/",
  },
  {
    name: "PHP",
    icon: <LogoPHP width={ICON_SIZE} height={ICON_SIZE} />,
    url: "https://www.php.net/",
  },
  {
    name: "SQL",
    icon: <LogoSql width={ICON_SIZE} height={ICON_SIZE} />,
    url: "https://www.w3schools.com/sql/",
  },
];

interface SkillCardProps {
  skill: Skill;
}

function SkillCard({ skill }: SkillCardProps) {
  return (
    <li>
      <Link
        href={skill.url}
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
  );
}

export default function Skills() {
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
          {SKILLS.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </ul>
      </div>
    </Section>
  );
}
