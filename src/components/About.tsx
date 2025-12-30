import { motion, type Variants } from "framer-motion";
import { Target, Lightbulb, Users, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on delivering results that matter",
    },
    {
      icon: Lightbulb,
      title: "Creative Thinking",
      description: "Finding innovative solutions to complex problems",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborative approach to building great products",
    },
    {
      icon: Zap,
      title: "Adaptable",
      description: "Quick to learn and embrace new technologies",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto">
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
              About Me
            </motion.span>
            <motion.h2
              className="font-display font-bold text-3xl md:text-5xl text-foreground mt-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Blending passion with{" "}
              <span className="text-gradient">purpose</span>
            </motion.h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a self-driven and adaptable Information Technology student
                at Kongu Engineering College, committed to growth, innovation,
                and making valuable contributions to teams and organizations
                through modern software solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                My journey in tech has led me to explore full-stack development,
                database management, and cybersecurity. I'm passionate about
                creating user-centered digital experiences that solve real-world
                problems.
              </p>

              {/* Languages */}
              <motion.div
                className="bg-card rounded-2xl p-6 shadow-card"
                whileHover={{ scale: 1.02, boxShadow: "var(--shadow-card-hover)" }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-display font-semibold text-foreground mb-4">
                  Languages I Speak
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["English", "Tamil", "Urdu", "Hindi", "Arabic (Basic)"].map(
                    (lang, index) => (
                      <motion.span
                        key={lang}
                        className="bg-muted px-4 py-2 rounded-full text-sm font-medium text-foreground"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--primary) / 0.1)" }}
                      >
                        {lang}
                      </motion.span>
                    )
                  )}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Grid */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className={`bg-card rounded-2xl p-6 shadow-card ${
                    index === 1 || index === 2 ? "mt-8" : ""
                  }`}
                  whileHover={{
                    scale: 1.05,
                    y: -8,
                    boxShadow: "var(--shadow-card-hover)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <item.icon size={24} className="text-primary-foreground" />
                  </motion.div>
                  <h3 className="font-display font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
