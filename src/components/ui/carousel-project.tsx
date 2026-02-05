import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "use-intl";
import { LogoGithub } from "../icons";
import { Badge } from "./badge";
import { Button } from "./button";
import { Card, CardContent, CardFooter, CardTitle } from "./card";

interface CarouselProjectProps {
  project: {
    id: string;
    name: string;
    image_path: string;
    technologies: string[];
    link: string;
    repo_url: string;
  };
}

const CarouselProject = ({ project }: CarouselProjectProps) => {
  const t = useTranslations("ProjectsSection");
  return (
    <Card className="border-border/50 bg-card/30 h-full w-full overflow-hidden border p-0 backdrop-blur-md">
      {project.image_path && (
        <div className="relative aspect-video w-full overflow-hidden">
          <Link href={project.link} target="_blank" rel="noopener noreferrer">
            <Image
              src={project.image_path}
              alt={project.name}
              fill
              className="object-cover object-top"
            />
          </Link>
        </div>
      )}
      <CardTitle className="items-center text-xl font-bold">
        <Button
          asChild
          variant="link"
          className="group p-0 text-lg font-bold hover:underline"
        >
          <Link href={project.link} target="_blank" rel="noopener noreferrer">
            {project.name}
            <ExternalLink className="hidden group-hover:block" />
          </Link>
        </Button>
      </CardTitle>
      <CardContent className="px-4">
        <p className="text-muted-foreground pb-2 text-sm">{t(project.id + ".description")}</p>
        {project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <Badge key={techIndex} variant={"secondary"}>
                {tech}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex gap-3 px-4 pb-4">
        {project.repo_url && (
          <Button asChild variant="outline" size="sm">
            <Link
              href={project.repo_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LogoGithub />
              View the Code
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default CarouselProject;
