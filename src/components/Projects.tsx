import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Video, Languages, BookOpen, Car } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "ParkEasy",
      description:
        "A smart parking management system that streamlines the parking experience with real-time availability, automated booking, and seamless user management.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Python"],
      github: "https://github.com/RoshanAfaz/ParkEasy",
      icon: Car,
      color: "from-purple-500 to-indigo-500",
    },
    {
      title: "Video Dubbing Web Application",
      description:
        "A web application that extracts audio from video, transcribes and translates it into a target language, and generates a synchronized dubbed video for multi-language localization.",
      tech: ["React.js", "Node.js", "Python", "MongoDB"],
      github: "https://github.com/RoshanAfaz/VideoDubbingWebApplication",
      icon: Video,
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Language Translator App",
      description:
        "A Python Tkinter-based application using deep_translator to translate text between multiple languages through a simple and interactive GUI.",
      tech: ["Python", "Tkinter", "deep_translator"],
      github: "https://github.com/RoshanAfaz/languagetranslatorapp",
      icon: Languages,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "LinguaLearn",
      description:
        "A language learning web application with interactive lessons and translations, built using React and MongoDB for smooth performance.",
      tech: ["React.js", "MongoDB", "Node.js", "Express.js"],
      github: "https://github.com/RoshanAfaz/LinguaLearn",
      icon: BookOpen,
      color: "from-green-500 to-emerald-500",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      {/* Background gradient orbs */}
      <motion.div
        className="absolute top-1/4 -left-32 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"
        animate={{
          x: [-20, 20, -20],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          x: [20, -20, 20],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
      />

      <div className="container mx-auto relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="text-primary font-medium text-sm uppercase tracking-wider"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Featured Work
            </motion.span>
            <motion.h2
              className="font-display font-bold text-3xl md:text-5xl text-foreground mt-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Projects that showcase my skills
            </motion.h2>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="visible"
            animate="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                className="group bg-card rounded-2xl overflow-hidden shadow-card"
                whileHover={{
                  y: -12,
                  boxShadow: "var(--shadow-card-hover)",
                }}
                transition={{ duration: 0.4 }}
              >
                {/* Project Icon/Banner */}
                <motion.div
                  className={`h-32 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.div
                    initial={{ rotate: 0, scale: 1 }}
                    whileHover={{ rotate: 12, scale: 1.2 }}
                    transition={{ duration: 0.4 }}
                  >
                    <project.icon
                      size={48}
                      className="text-white/90 relative z-10"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />

                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                    animate={{ translateX: ["-100%", "200%"] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                      delay: index * 0.5,
                    }}
                  />
                </motion.div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display font-semibold text-lg text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="text-xs px-3 py-1 bg-muted rounded-full text-muted-foreground font-medium"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: techIndex * 0.05 }}
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "hsl(var(--primary) / 0.1)",
                          color: "hsl(var(--primary))",
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Links */}
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={16} />
                        View Code
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
