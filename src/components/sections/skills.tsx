import { Check } from "lucide-react";

const skills = [
  // Programming Languages
  "Python",
  "Rust",
  "Bash",

  // Web Frameworks & API Development
  "Flask",
  "FastAPI",
  "Django",
  "RESTful APIs",

  // Databases
  "MongoDB",
  "PostgreSQL",

  // DevOps & CI/CD
  "Docker",
  "Git & GitHub",
  "CI/CD Pipelines",
  "Cloud Deployment",

  // Systems & Tools
  "Linux",
  "AWS",
  "GCP",
  "Azure",

];


const Skills = () => {
  return (
    <section id="skills" className="py-20 sm:py-32 bg-secondary fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-center text-primary sm:text-4xl mb-12 font-headline hover-underline-animation">
          My Skillset
        </h2>
        <div className="max-w-4xl mx-auto">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
            {skills.map((skill) => (
              <li key={skill} className="flex items-center text-lg text-muted-foreground transition-transform duration-300 ease-in-out hover:text-primary hover:scale-105">
                <Check className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
