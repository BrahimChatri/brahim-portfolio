'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Flask Bank App",
    description:
      "A backend-focused banking system built with Flask and JSON-based storage. Implements user authentication, secure JWT sessions, money transfer features, and modular architecture using Flask Blueprints—all without a database.",
    longDescription:
      "This comprehensive banking application demonstrates advanced backend development concepts. Built entirely with Flask, it features secure user authentication using JWT tokens, encrypted password storage, and a robust money transfer system. The application uses JSON files for data persistence, showcasing how to build a complete banking system without traditional databases. Key features include user registration and login, account balance management, secure money transfers between users, transaction history tracking, and a modular architecture using Flask Blueprints for better code organization. The project emphasizes security best practices, clean code architecture, and scalable design patterns.",
    tech: ["Flask", "Python", "JWT", "JSON Storage"],
    github: "https://github.com/BrahimChatri/flask-bank-app",
    live: "#",
    images: [
      { src: "/bank.png", alt: "Bank App Dashboard", hint: "abstract dashboard or finance" },
      { src: "/bank-login.png", alt: "Login Interface", hint: "login screen" },
      { src: "/bank-transfer.png", alt: "Transfer Interface", hint: "money transfer form" },
      { src: "/bank-transactions.png", alt: "Transaction History", hint: "transaction list" },
    ]
  },
  {
    title: "Task Manager – Flask + TailwindCSS (GUI Version)",
    description:
      "A clean, responsive task management web app using Flask for the backend and TailwindCSS for the UI. Allows users to register, log in, and manage their daily tasks with a modern design and local JSON-based data storage.",
    longDescription:
      "A modern, responsive task management application that combines the power of Flask backend with the elegance of TailwindCSS frontend. This project showcases full-stack development skills with a focus on user experience and clean design. The application features user authentication, task creation and management, priority levels, due dates, and status tracking. The interface is fully responsive and provides an intuitive user experience across all devices. The backend uses JSON-based storage for simplicity while maintaining data integrity and user session management. The project demonstrates modern web development practices including responsive design, clean UI/UX, and efficient state management.",
    tech: ["Flask", "TailwindCSS", "Python", "JSON Storage"],
    github: "https://github.com/BrahimChatri/flask-task-manager",
    live: "http://chestnutlobster.onpella.app/",
    images: [
      { src: "/home.png", alt: "Task Manager Dashboard", hint: "checklist or minimal UI" },
      { src: "/task-create.png", alt: "Create Task", hint: "task creation form" },
      { src: "/login.png", alt: "Login", hint: "login page" },
      { src: "/register.png", alt: "Register", hint: "register page" },
      { src: "/task-mobile.png", alt: "Mobile View", hint: "mobile responsive design" },
    ]
  },
  {
    title: "Restaurant Rating Finder",
    description:
      "A CLI Python tool that uses Google Places API to search restaurants within a city, filtering out those with low ratings. Covers cities in a 5km grid, saving filtered and complete data into JSON and CSV formats for easy analysis.",
    longDescription:
      "An intelligent restaurant discovery tool that leverages the Google Places API to help users find high-quality dining options. The application systematically searches through cities using a 5km grid system, filtering restaurants based on user-defined rating thresholds. It processes and analyzes restaurant data including ratings, reviews, cuisine types, and location information. The tool exports results in both JSON and CSV formats for further analysis or integration with other systems. This project demonstrates advanced API integration, data processing, and automation techniques. It's particularly useful for food enthusiasts, researchers, or businesses looking to analyze restaurant markets in specific areas.",
    tech: ["Python", "Google Places API", "CSV", "JSON"],
    github: "https://github.com/BrahimChatri/restaurants_finder",
    live: "#",
    images: [
      { src: "/Restaurant.png", alt: "Restaurant Search Interface", hint: "map search or restaurant listing" },

    ]
  },
  {
    title: "Flask Email System (WIP)",
    description:
      "A learning project simulating a basic email system, built to explore backend concepts like JWT authentication, encryption, and modular Flask architecture. It includes user login, secure messaging, and MongoDB storage with a clean codebase and environment config.",
    longDescription:
      "A comprehensive email system simulation that explores advanced backend development concepts. This project demonstrates modern web application architecture with a focus on security and scalability. The system includes user authentication using JWT tokens, encrypted message storage, and a modular Flask architecture using Blueprints. It features a MongoDB database for data persistence, bcrypt for password hashing, and secure session management. The application supports user registration, login, message composition, inbox management, and secure message encryption. The project showcases best practices in backend development including proper error handling, input validation, and clean code organization.",
    tech: ["Flask", "JWT", "MongoDB", "bcrypt", "Pymongo", "Blueprints"],
    github: "https://github.com/BrahimChatri/flask-email-system",
    live: "#",
    images: [
      { src: "https://placehold.co/600x400.png", alt: "Email Dashboard", hint: "email interface or backend structure" },
      { src: "https://placehold.co/600x400.png", alt: "Compose Email", hint: "email composition interface" },
      { src: "https://placehold.co/600x400.png", alt: "Inbox View", hint: "inbox interface" },
      { src: "https://placehold.co/600x400.png", alt: "User Authentication", hint: "login and registration" },
      { src: "https://placehold.co/600x400.png", alt: "Message Detail", hint: "email detail view" },
      { src: "https://placehold.co/600x400.png", alt: "System Architecture", hint: "system design diagram" }
    ]
  },
  {
    title: "Django Job Board API",
    description:
      "A comprehensive RESTful job board API built with Django REST Framework, featuring JWT authentication, encrypted user data, advanced job search/filtering, application tracking, and file uploads. Includes employer job management, candidate profiles, and real-time application status updates with complete CRUD operations.",
    longDescription:
      "A full-featured job board API that demonstrates enterprise-level backend development with Django REST Framework. This comprehensive system includes JWT-based authentication, AES-256 encryption for sensitive user data, and advanced search and filtering capabilities. The API supports complete CRUD operations for jobs, applications, and user profiles. Key features include employer job posting and management, candidate profile creation and management, application submission and tracking, file upload capabilities for resumes and documents, and real-time application status updates. The system uses PostgreSQL for robust data storage and includes comprehensive API documentation with Swagger. This project showcases advanced Django development, database design, API security, and scalable architecture patterns.",
    tech: ["Django", "Django REST Framework", "JWT", "PostgreSQL", "AES-256 Encryption", "Swagger"],
    github: "https://github.com/BrahimChatri/alx-project-nexus",
    live: "http://api.chatri.dev/swagger/",
    images: [
      { src: "/swagger-docs.png", alt: "API Documentation", hint: "job board dashboard or API documentation interface" },
      { src: "/job-board.png", alt: "dashboard frontend", hint: "job board dashboard" }
    ]
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModal();
    } else if (e.key === 'ArrowRight') {
      nextImage();
    } else if (e.key === 'ArrowLeft') {
      prevImage();
    }
  };

  return (
    <>
      <section id="projects" className="py-20 sm:py-32 fade-in">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-center text-primary sm:text-4xl mb-12 font-headline hover-underline-animation">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.title} className="flex flex-col overflow-hidden bg-card shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-105 border-border hover:border-primary/50">
                <div className="relative cursor-pointer" onClick={() => openModal(project)}>
                  <Image
                    src={project.images[0].src}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="rounded-t-lg object-cover transition-transform duration-300 hover:scale-105"
                    data-ai-hint={project.images[0].hint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-sm">
                    Click to view gallery
                  </div>
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
                    {project.live && project.live !== "#" && (
                      <Button asChild variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                        <Link href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-5 w-5" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
            onKeyDown={handleKeyDown}
            tabIndex={-1}
          >
            <m.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-background rounded-lg shadow-2xl max-w-7xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col lg:flex-row h-full">
                {/* Image Gallery Section */}
                <div className="lg:w-2/3 relative bg-black">
                  <div className="relative h-96 lg:h-full">
                    <Image
                      src={selectedProject.images[currentImageIndex].src}
                      alt={selectedProject.images[currentImageIndex].alt}
                      fill
                      className="object-contain"
                      priority
                    />

                    {/* Navigation Buttons */}
                    <Button
                      onClick={prevImage}
                      variant="ghost"
                      size="icon"
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white border border-white/20"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </Button>

                    <Button
                      onClick={nextImage}
                      variant="ghost"
                      size="icon"
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white border border-white/20"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </Button>

                    {/* Image Counter */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                      {currentImageIndex + 1} / {selectedProject.images.length}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-1/3 p-6 overflow-y-auto">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-primary">{selectedProject.title}</h3>
                    <Button
                      onClick={closeModal}
                      variant="ghost"
                      size="icon"
                      className="text-muted-foreground hover:text-primary"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProject.longDescription}
                    </p>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2 pt-4">
                      <Button asChild variant="default" className="flex-1">
                        <Link href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          View Code
                        </Link>
                      </Button>
                      {selectedProject.live && selectedProject.live !== "#" && (
                        <Button asChild variant="outline" className="flex-1">
                          <Link href={selectedProject.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
