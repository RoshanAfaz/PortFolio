import { motion, type Variants } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Sparkles, ArrowDown, Download } from "lucide-react";
import profileAvatar from "@/assets/profile.png";

const TypeWriter = ({ words, className }: { words: string[]; className?: string }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentText.length < word.length) {
            setCurrentText(word.slice(0, currentText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <span className={className}>
      {currentText}
      <motion.span
        className="inline-block w-[3px] h-[1em] bg-primary ml-1 align-middle"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
    </span>
  );
};

const Hero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  };

  const typingWords = [
    "Full Stack Developer",
    "React Developer",
    "Backend Engineer",
    "Problem Solver",
  ];

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating decorative shapes */}
      <motion.div
        className="absolute top-40 left-20 w-4 h-4 bg-primary/40 rounded-full hidden lg:block"
        animate={floatingAnimation}
      />
      <motion.div
        className="absolute top-60 right-32 w-6 h-6 bg-primary/30 rounded-lg rotate-45 hidden lg:block"
        animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1 } }}
      />
      <motion.div
        className="absolute bottom-40 left-40 w-3 h-3 bg-primary/50 rounded-full hidden lg:block"
        animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 2 } }}
      />

      <div className="container mx-auto">
        <motion.div
          className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-6 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column: Photo */}
          <motion.div
            variants={itemVariants}
            className="w-full md:w-1/3 flex justify-center md:justify-start mt-0 md:mt-24"
          >
            <motion.div
              className="relative w-full max-w-sm"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Glow ring - Modified for rect */}
              <motion.div
                className="absolute -inset-1 rounded-2xl gradient-primary opacity-70 blur-sm"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              {/* Photo */}
              <img
                src={profileAvatar}
                alt="Roshan Afaz - Full Stack Developer"
                className="relative w-full aspect-[4/5] rounded-2xl object-cover object-center border-4 border-background shadow-xl"
              />
              {/* Status indicator */}
              <motion.div
                className="absolute bottom-4 right-4 w-6 h-6 bg-green-500 rounded-full border-4 border-background"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>

          {/* Right Column: Content */}
          <div className="w-full md:w-2/3 flex flex-col items-center md:items-start text-center md:text-left">
            {/* Status Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-muted px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground font-medium">
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.div
              variants={itemVariants}
              className="mb-4"
            >
              <span className="text-lg md:text-xl text-muted-foreground">Hi, I am</span>
              <motion.h1
                className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-foreground mt-2"
                whileHover={{ scale: 1.02, originX: 0 }}
              >
                Roshan{" "}
                <span className="text-gradient">Afaz</span>
              </motion.h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="font-display font-medium text-xl md:text-2xl lg:text-3xl text-muted-foreground leading-relaxed mb-4"
            >
              A passionate{" "}
              <span className="text-foreground">
                <TypeWriter words={typingWords} />
              </span>
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="font-display text-lg md:text-xl text-muted-foreground mb-6"
            >
              creating impactful solutions
            </motion.p>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed"
            >
              Self-driven Information Technology student committed to growth,
              innovation, and making valuable contributions through modern
              software solutions.
            </motion.p>

            {/* Location */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 text-muted-foreground mb-10"
            >
              <MapPin size={18} className="text-primary" />
              <span>Namakkal, India</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center md:items-start gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="hero" size="xl" asChild>
                  <a href="#contact">Get In Touch</a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="heroOutline" size="xl" asChild>
                  <a href="#projects">View Projects</a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="xl" asChild>
                  <a
                    href="/cv.pdf"
                    download="Roshan_Afaz_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download size={18} />
                    Download CV
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border max-w-xl mx-auto"
        >
          {[
            { value: "3+", label: "Projects" },
            { value: "5+", label: "Languages" },
            { value: "2+", label: "Certifications" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
            >
              <motion.div
                className="font-display font-bold text-3xl md:text-4xl text-foreground"
                whileHover={{ scale: 1.1, color: "hsl(var(--primary))" }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-muted-foreground mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown size={24} className="text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
