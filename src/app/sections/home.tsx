import GradientText from "@/components/gradient-text";
import TextType from "@/components/text-type";
import { Button } from "@/components/ui/button";
import Section from "@/components/ui/section";
import { ChevronsDown, FileDown } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function HomePage() {
  const t = useTranslations("HomeSection");
  return (
    <Section className="h-[calc(100dvh-3.5rem)] w-full" id="Home">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <TextType
          className="lg:text-6xlfont-bold text-center text-3xl sm:text-4xl md:text-5xl"
          text={[t("enuciete1"), t("enuciete2"), t("enuciete3")]}
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
          className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <p>{t("title")}</p>
        </GradientText>
        <code className="text-md sm:text-lg md:text-2xl lg:text-3xl">
          {"<"}
          {t("subtitle")}
          {" />"}
        </code>
        <Button asChild variant={"outline"} className="mt-4">
          <Link href="/Kayc_Farias_Curriculo.pdf" download={true}>
            {" "}
            <FileDown /> {t("download")}
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
        className="absolute bottom-14 mx-auto animate-bounce"
      />
    </Section>
  );
}
