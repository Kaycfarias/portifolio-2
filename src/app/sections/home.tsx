import GradientText from "@/components/GradientText";
import TextType from "@/components/TextType";
import { Button } from "@/components/ui/button";
import Section from "@/components/ui/Section";
import { ChevronsDown, FileDown } from "lucide-react";

export default function HomePage() {
  return (
    <Section id="Home">
      <div className="flex flex-col w-full h-full items-center justify-center ">
        <TextType
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xlfont-bold text-center"
          text={["hello world!", "Welcome to my website!"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
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
        <Button variant={"outline"} className="mt-4">
          {" "}
          <FileDown /> Download my CV
        </Button>
      </div>
      <ChevronsDown
        size={64}
        className="mx-auto animate-bounce relative bottom-25"
      />
    </Section>
  );
}
