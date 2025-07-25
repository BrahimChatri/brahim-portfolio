const About = () => {
  return (
    <section id="about" className="py-20 sm:py-32 fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-8 font-headline text-center hover-underline-animation">
            About Me
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm a backend-focused software engineer passionate about building reliable, secure, and scalable systems. Currently contributing to open-source projects to sharpen my skills and collaborate with others.
            </p>
            <p>
              I write clean, maintainable code and take pride in deploying robust APIs using Python, Rust, and modern frameworks like Django, Flask, and FastAPI. I'm eager to grow, learn from others, and work on projects that make a real impact.
            </p>
            <p>
              I'm also exploring cloud deployment tools and DevOps to level up my engineering capabilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
