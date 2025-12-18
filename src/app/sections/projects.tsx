import TextType from "@/components/TextType";
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

import Section from "@/components/ui/Section";
import React from "react";

const projects = [
  {
    name: "BeWear E-commerce",
    description:
      "A modern and fully-featured e-commerce platform for fashion products, built using the latest web technologies.",
    image_path: "/bewear-store.png",
    tecnologies: [
      "Nextjs",
      "Typescript",
      "Tailwindcss",
      "Nodejs",
      "Expressjs",
      "PostgreSQL",
      "Drizzle ORM",
      "Betther auth",
      "Vercel",
    ],
    link: "https://store.kaycfarias.dev/",
    repo_url: "https://github.com/Kaycfarias/ecommerce-bewear",
  },
  {
    name: "Portifolio website",
    description:
      "My personal portfolio website to showcase my projects and skills.",
    image_path: "/portifolio-site.png",
    tecnologies: [
      "Nextjs",
      "Typescript",
      "Tailwindcss",
      "Vercel",
      "Shadcn UI",
      "Styled Components",
      "Framer Motion",
      "React",
    ],
    link: "https://kaycfarias.dev/",
    repo_url: "https://github.com/Kaycfarias/portifolio-2",
  },
  {
    name: "Project 3",
    description: "Description of Project 3",
    image_path: "",
    tecnologies: [],
    link: "",
    repo_url: "",
  },
];

export default function ProjectsPage() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Section id="Projects">
      <div className="flex flex-col items-center justify-center h-full w-full gap-10">
        <TextType
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center"
          text={["Projects"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor
          startOnVisible
          cursorCharacter="|"
          loop={false}
        />
        <div className="w-full max-w-2xl">
          <Carousel setApi={setApi} className="w-full h-full space-y-4">
            <CarouselContent className="rounded-xl">
              {projects.map((project, index) => (
                <CarouselItem key={index} className="">
                  <CarouselProject project={project} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-between items-center text-muted-foreground text-center text-sm space-x-1">
              <ButtonGroup>
                {Array.from({ length: count }).map((_, index) => (
                  <Button
                    variant={"outline"}
                    onClick={() => api?.scrollTo(index)}
                    key={index}
                    className={`text-center size-8 ${
                      current === index + 1
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
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
