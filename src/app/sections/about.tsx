import CircularText from "@/components/CircularText";
import TextType from "@/components/TextType";
import Section from "@/components/ui/Section";
import Image from "next/image";

export default function AboutPage() {
  return (
    <Section id="About">
      <div className="flex flex-col w-full h-full items-center">
        <TextType
          className="pt-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xlfont-bold text-center"
          text={["About Me"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          loop={false}
        />
        <div className="flex flex-col items-center justify-center w-full h-full">
          <div className="relative flex items-center justify-center border rounded-full backdrop-blur-xl">
            <div className="absolute flex flex-col items-center justify-center">
              <Image
                src="/kaycfarias.jpg"
                alt="Description"
                width={235}
                height={235}
                className="rounded-full inset-0"
              />
            </div>
            <CircularText
              text="KAYC*FULL STACK*DEVELOPER*"
              onHover="speedUp"
              spinDuration={20}
              className="absolute z-10"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
