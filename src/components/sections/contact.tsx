import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail,Instagram } from "lucide-react";
import Link from "next/link";

const XIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
  </svg>
)

const UpworkIcon = () => (
    <svg role="img" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current">
        <path d="M24.75 17.542c-1.469 0-2.849-0.62-4.099-1.635l0.302-1.432 0.010-0.057c0.276-1.521 1.13-4.078 3.786-4.078 1.99 0 3.604 1.615 3.604 3.604 0 1.984-1.615 3.599-3.604 3.599zM24.75 6.693c-3.385 0-6.016 2.198-7.083 5.818-1.625-2.443-2.865-5.38-3.583-7.854h-3.646v9.484c-0.005 1.875-1.521 3.391-3.396 3.396-1.875-0.005-3.391-1.526-3.396-3.396v-9.484h-3.646v9.484c0 3.885 3.161 7.068 7.042 7.068 3.885 0 7.042-3.182 7.042-7.068v-1.589c0.708 1.474 1.578 2.974 2.635 4.297l-2.234 10.495h3.729l1.62-7.615c1.417 0.906 3.047 1.479 4.917 1.479 4 0 7.25-3.271 7.25-7.266 0-4-3.25-7.25-7.25-7.25z"/>
    </svg>
)

const socialLinks = [
  { name: "GitHub", href: "https://github.com/BrahimChatri", icon: <Github /> },
  { name: "LinkedIn", href: "https://linkedin.com/in/brahim-chatri", icon: <Linkedin /> },
  { name: "Upwork", href: "https://www.upwork.com/freelancers/~01d94524fc1206422d", icon: <UpworkIcon /> },
  { name: "Instagram", href: "https://www.instagram.com/brahim_chatri", icon: <Instagram /> },
  { name: "Twitter", href: "https://x.com/dev_brahim", icon: <XIcon /> },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 sm:py-32 bg-secondary fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline hover-underline-animation">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision. If you're looking for a dedicated engineer or just want to say hi, my inbox is always open.
          </p>
          <div className="mt-8 flex justify-center">
             <Button asChild size="lg" className="h-12 px-6 text-lg transition-transform duration-300 ease-in-out hover:scale-105">
                <Link href="mailto:brahim.chatri.dev@gmail.com">
                    <Mail className="mr-2 h-5 w-5"/>
                    Contact Me
                </Link>
            </Button>
          </div>
           <div className="mt-10 flex justify-center gap-6">
            {socialLinks.map((social) => (
              <Button key={social.name} asChild variant="outline" size="icon" className="h-12 w-12 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:shadow-primary/30">
                <Link href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                  {social.icon}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
