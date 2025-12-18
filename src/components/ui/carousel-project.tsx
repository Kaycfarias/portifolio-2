import Image from "next/image";
import { Card, CardContent, CardFooter, CardTitle } from "./card";
import { Button } from "./button";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { LogoGithub } from "../icons";
import { Badge } from "./badge";

interface CarouselProjectProps {
  project: {
    name: string;
    description: string;
    image_path: string;
    tecnologies: string[];
    link: string;
    repo_url: string;
  };
}

const CarouselProject = ({ project }: CarouselProjectProps) => {
  return (
    <Card className="overflow-hidden border border-border/50 bg-card/30 backdrop-blur-md p-0 w-full h-full">
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
      <CardTitle className="text-xl font-bold items-center">
        <Button
          asChild
          variant="link"
          className="p-0 text-lg font-bold hover:underline group"
        >
          <Link href={project.link} target="_blank" rel="noopener noreferrer">
            {project.name}
            <ExternalLink className="hidden group-hover:block" />
          </Link>
        </Button>
      </CardTitle>
      <CardContent className="px-4">
        <p className="text-sm text-muted-foreground pb-2">
          {project.description}
        </p>
        {project.tecnologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.tecnologies.map((tech, techIndex) => (
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
              <LogoGithub/>
              View the Code
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default CarouselProject;
