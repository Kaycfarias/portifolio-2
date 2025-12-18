import CircularText from "@/components/CircularText";
import TextType from "@/components/TextType";
import Section from "@/components/ui/Section";
import Image from "next/image";

export default function AboutPage() {
  return (
    <Section id="About">
      <TextType
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center"
        text={["About Me"]}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor
        startOnVisible
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

      <div className="max-w-3xl text-center space-y-8 px-4">
        <div className="space-y-4">
          <div className="inline-block bg-card border rounded-lg p-4 text-left font-mono text-sm text-muted-foreground">
            <span className="text-pink-500">class</span>{" "}
            <span className="text-orange-400">KaycFarias</span> {"{"}
            <div className="pl-4">
              <div>
                <span className="text-muted-foreground">name</span>:{" "}
                <span className="text-blue-400">string</span> ={" "}
                <span className="text-green-500">&apos;Kayc Farias&apos;</span>;
              </div>
              <div>
                <span className="text-muted-foreground">city</span>:{" "}
                <span className="text-blue-400">string</span> ={" "}
                <span className="text-green-500">&apos;Sumaré-SP&apos;</span>;
              </div>
              <div>
                <span className="text-muted-foreground">currentRole</span>:{" "}
                <span className="text-blue-400">string</span> ={" "}
                <span className="text-green-500">
                  &apos;Software Engineering Student&apos;
                </span>
                ;
              </div>
            </div>
            <div>{"}"}</div>
          </div>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed py-5">
            I&apos;m a 21-year-old Software Engineering student since early 2024. My
            passion for technology and programming started early, at age 12,
            when I took a robotics course. Since then, I&apos;ve been dedicated to
            learning and improving my skills in the field, exploring various
            aspects of software development.
          </p>
        </div>
      </div>
    </Section>
  );
}
