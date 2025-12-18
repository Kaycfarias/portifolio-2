import TextType from "@/components/TextType";
import Section from "@/components/ui/Section";
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
import Link from "next/link";

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
  return (
    <Section id="Skills">
      <TextType
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center"
        text={["Skills"]}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter="|"
        loop={false}
      />
      <div className="w-full max-w-5xl">
        <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 sm:gap-6">
          {skills.map((skill, index) => (
            <li key={index}>
              <Link
                href={skill.page}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center gap-3 border border-border/50 rounded-xl backdrop-blur-md bg-card/30 p-4 sm:p-6 hover:scale-105 hover:border-primary/50 hover:bg-card/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
              >
                <div className="transition-transform duration-300 group-hover:scale-110">
                  {skill.icon}
                </div>
                <span className="text-xs sm:text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
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
