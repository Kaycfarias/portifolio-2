import CircularText from "@/components/CircularText";
import TextType from "@/components/TextType";
import Section from "@/components/ui/Section";
import Image from "next/image";

export default function AboutPage() {
  return (
    <Section id="About">
      <div className="flex flex-col w-full h-full items-center justify-center gap-8 px-4">
        <TextType
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center"
          text={["About Me"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          loop={false}
        />
        <div className="relative flex flex-col items-center justify-center">
          <div className="relative flex items-center justify-center border rounded-full backdrop-blur-xl overflow-hidden">
            <div className="absolute flex flex-col items-center justify-center">
              <Image
                src="/kaycfarias.jpg"
                alt="Kayc Farias - Full Stack Developer"
                width={235}
                height={235}
                priority
                className="rounded-full border inset-0"
              />
            </div>
            <CircularText
              text="KAYC*FULL STACK*DEVELOPER*"
              onHover="speedUp"
              spinDuration={20}
              className="absolute z-10 rounded-full"
            />
          </div>
        </div>

        <div className="max-w-2xl text-center space-y-4">
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Full Stack Developer apaixonado por criar experiências web modernas
            e performáticas. Especializado em React, Next.js, e tecnologias
            JavaScript/TypeScript.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              React & Next.js
            </span>
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              TypeScript
            </span>
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              TailwindCSS
            </span>
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Node.js
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}
