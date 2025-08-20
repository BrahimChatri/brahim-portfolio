'use client';

import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { m } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-40 md:pb-24 flex items-center justify-center bg-background text-foreground p-4 overflow-hidden min-h-[calc(80vh-4rem)]">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" style={{ backgroundSize: '3rem 3rem' }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <m.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-7xl font-bold font-headline tracking-tight mb-4">
              <span className="text-lg md:text-xl text-primary font-medium">Hi, I'm</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Brahim</span>
            </h1>

            <h2 className="text-2xl md:text-4xl font-extrabold text-foreground/90 mb-6 tracking-wide">
              Self-taught Backend Software Engineer
            </h2>

            <TypeAnimation
              sequence={[
                'I specialize in building robust, scalable APIs and high-performance backend systems. My toolkit includes Python, Rust, and modern frameworks like Django and FastAPI, combined with expertise in cloud deployment and containerization.',
              ]}
              wrapper="p"
              speed={50}
              className="text-md md:text-lg text-muted-foreground max-w-xl mx-auto md:mx-0 h-24 md:h-auto"
              repeat={0}
              cursor={true}
            />
          </m.div>

          <m.div
            className="relative flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <m.div
              className="absolute w-full h-full max-w-[300px] max-h-[300px] md:max-w-[400px] md:max-h-[400px] bg-primary/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 10,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              }}
            ></m.div>
            <m.div
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Image
                src="/hero-image.jpg"
                alt="Brahim's profile photo"
                width={400}
                height={400}
                className="rounded-full border-4 border-primary/50 shadow-lg shadow-primary/20 w-[300px] h-[300px] object-cover"
                priority
                data-ai-hint="professional portrait"
              />
            </m.div>
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
