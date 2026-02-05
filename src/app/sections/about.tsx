import CircularText from "@/components/circular-text";
import TextType from "@/components/text-type";
import Section from "@/components/ui/section";
import Image from "next/image";
import { useTranslations } from "use-intl";

export default function AboutPage() {
  const t = useTranslations("AboutSection");

  return (
    <Section id="About">
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
      <div className="relative flex flex-col items-center justify-center">
        <div className="relative flex items-center justify-center overflow-hidden rounded-full border backdrop-blur-xl">
          <div className="absolute flex flex-col items-center justify-center">
            <Image
              src="/kaycfarias.jpg"
              alt="Kayc Farias - Full Stack Developer"
              width={235}
              height={235}
              priority
              className="inset-0 rounded-full border"
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

      <div className="max-w-3xl space-y-8 px-4 text-center">
        <div className="space-y-4">
          <div className="bg-card text-muted-foreground inline-block rounded-lg border p-4 text-left font-mono text-sm">
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

          <p className="text-muted-foreground py-5 text-lg leading-relaxed sm:text-xl">
            {t("description")}
          </p>
        </div>
      </div>
    </Section>
  );
}
