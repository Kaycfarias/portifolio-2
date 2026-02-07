import GradientText from "@/components/gradient-text";
import { Button } from "@/components/ui/button";
import Section from "@/components/ui/section";
import { ChevronsDown, FileDown } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: "smooth",
    });
  }
};

export default function Home() {
  const t = useTranslations("HomeSection");
  return (
    <Section className="h-[calc(100dvh-3.5rem)] w-full" id="Home">
      <div className="flex h-full w-full flex-col items-center justify-center">
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
        onClick={() => scrollToSection("About")}
        size={64}
        className="absolute bottom-14 mx-auto animate-bounce"
      />
    </Section>
  );
}
