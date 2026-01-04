import GradientText from "@/components/GradientText";
import TextType from "@/components/TextType";
import { Button } from "@/components/ui/button";
import Section from "@/components/ui/Section";
import { ChevronsDown, FileDown } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <Section className="w-full h-[calc(100dvh-3.5rem)]" id="Home">
      <div className="flex flex-col h-full w-full items-center justify-center">
        <TextType
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xlfont-bold text-center"
          text={[
            "hello world!",
            "Turning ideas into code.",
            "Welcome to my portfolio.",
          ]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor
          startOnVisible
          cursorCharacter="|"
          loop={false}
        />
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center"
        >
          <p>Hi, I&apos;m Kayc Farias</p>
        </GradientText>
        <code className="text-md sm:text-lg md:text-2xl lg:text-3xl">
          {"</Full Stack Developer>"}
        </code>
        <Button asChild variant={"outline"} className="mt-4">
          <Link href="/Kayc_Farias_Curriculo.pdf" download={true}>
            {" "}
            <FileDown /> Download my CV
          </Link>
        </Button>
      </div>
      <ChevronsDown
        onClick={() =>
          window.scrollTo({
            top: document.getElementById("About")?.offsetTop,
            behavior: "smooth",
          })
        }
        size={64}
        className="mx-auto animate-bounce absolute bottom-14"
      />
    </Section>
  );
}
