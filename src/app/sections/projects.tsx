import { LogoGithub } from "@/components/icons";
import TextType from "@/components/text-type";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import CarouselProject from "@/components/ui/carousel-project";

import Section from "@/components/ui/section";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

import { useTranslations } from "use-intl";

import { projects } from "@/portfolio-config";

const useCarouselState = (api: CarouselApi | undefined) => {
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap() + 1);
    };

    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  return { current, count };
};

export default function Projects() {
  const t = useTranslations("ProjectsSection");

  const [api, setApi] = React.useState<CarouselApi>();
  const { current, count } = useCarouselState(api);

  return (
    <Section id="Projects">
      <div className="flex h-full w-full flex-col items-center justify-center gap-10">
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
        <div className="w-full max-w-2xl">
          <Carousel setApi={setApi} className="h-full w-full space-y-4">
            <CarouselContent className="rounded-xl">
              {projects.map((project, index) => (
                <CarouselItem key={index} className="pb-1">
                  <CarouselProject project={project} />
                </CarouselItem>
              ))}
              <CarouselItem className="pb-1">
                <div className="flex h-full w-full flex-col items-center justify-center rounded-2xl border">
                  <span>{t("carousel-end.enunciate")}</span>
                  <Button asChild variant={"outline"}>
                    <Link
                      href="https://github.com/Kaycfarias/?tab=repositories"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LogoGithub />
                      {t("carousel-end.button")}
                    </Link>
                  </Button>
                </div>
              </CarouselItem>
            </CarouselContent>
            <div className="text-muted-foreground flex items-center justify-between space-x-1 text-center text-sm">
              <ButtonGroup>
                {Array.from({ length: count }, (_, index) => (
                  <Button
                    variant={"outline"}
                    onClick={() => api?.scrollTo(index)}
                    key={index}
                    className={cn(
                      "size-8 text-center",
                      current === index + 1
                        ? "text-primary"
                        : "text-muted-foreground",
                    )}
                  >
                    {index + 1}
                  </Button>
                ))}
              </ButtonGroup>
              <ButtonGroup>
                <CarouselPrevious variant={"outline"} className="size-8" />
                <CarouselNext variant={"outline"} className="size-8" />
              </ButtonGroup>
            </div>
          </Carousel>
        </div>
      </div>
    </Section>
  );
}
