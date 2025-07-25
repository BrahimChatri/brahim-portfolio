import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Flask Bank App",
    description:
      "A backend-focused banking system built with Flask and JSON-based storage. Implements user authentication, secure JWT sessions, money transfer features, and modular architecture using Flask Blueprints—all without a database.",
    tech: ["Flask", "Python", "JWT", "JSON Storage"],
    github: "https://github.com/BrahimChatri/flask-bank-app", 
    live: "#",
    image: "/bank.png",
    image_hint: "abstract dashboard or finance"
  },
  {
    title: "Task Manager – Flask + TailwindCSS (GUI Version)",
    description:
      "A clean, responsive task management web app using Flask for the backend and TailwindCSS for the UI. Allows users to register, log in, and manage their daily tasks with a modern design and local JSON-based data storage.",
    tech: ["Flask", "TailwindCSS", "Python", "JSON Storage"],
    github: "https://github.com/BrahimChatri/flask-task-manager", 
    live: "http://chestnutlobster.onpella.app/",
    image: "/home.png",
    image_hint: "checklist or minimal UI"
  },
  {
  title: "Restaurant Rating Finder",
  description:
    "A Python tool that uses Google Places API to search restaurants within a city, filtering out those with low ratings. Covers cities in a 5km grid, saving filtered and complete data into JSON and CSV formats for easy analysis.",
  tech: ["Python", "Google Places API", "CSV", "JSON"],
  github: "https://github.com/BrahimChatri/restaurants_finder",
  live: "#",
  image: "https://placehold.co/600x400.png",
  image_hint: "map search or restaurant listing"
},
{
  title: "Flask Email System (WIP)",
  description:
    "A learning project simulating a basic email system, built to explore backend concepts like JWT authentication, encryption, and modular Flask architecture. It includes user login, secure messaging, and MongoDB storage with a clean codebase and environment config.",
  tech: ["Flask", "JWT", "MongoDB", "bcrypt", "Pymongo", "Blueprints"],
  github: "https://github.com/yourusername/flask-email-system", 
  live: "#",
  image: "https://placehold.co/600x400.png",
  image_hint: "email interface or backend structure"
}
];


const Projects = () => {
  return (
    <section id="projects" className="py-20 sm:py-32 fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-center text-primary sm:text-4xl mb-12 font-headline hover-underline-animation">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col overflow-hidden bg-card shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-105 border-border hover:border-primary/50">
              <div className="relative">
                <Image src={project.image} alt={project.title} width={600} height={400} className="rounded-t-lg object-cover" data-ai-hint={project.image_hint} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <CardHeader className="flex-grow">
                <CardTitle className="mt-4">{project.title}</CardTitle>
                <CardDescription className="mt-2 text-muted-foreground">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-start items-center bg-card/50 p-4">
                 <div className="flex gap-2">
                    <Button asChild variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                      <Link href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5" />
                      </Link>
                    </Button>
                    <Button asChild variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                      <Link href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-5 w-5" />
                      </Link>
                    </Button>
                 </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
