import { motion, type Variants } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C", "C++", "Python", "Java"],
    },
    {
      title: "Libraries & Frameworks",
      skills: ["React.js", "Node.js", "Express.js"],
    },
    {
      title: "Databases",
      skills: ["MySQL", "MongoDB"],
    },
  ];

  const interests = [
    "Full Stack Development",
    "Database Management Systems",
    "UI Design",
    "Cyber Security",
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section id="skills" className="py-24 px-6 bg-muted/30 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

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
              Skills & Expertise
            </motion.span>
            <motion.h2
              className="font-display font-bold text-3xl md:text-5xl text-foreground mt-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Technologies I work with
            </motion.h2>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                variants={cardVariants}
                className="bg-card rounded-2xl p-8 shadow-card"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "var(--shadow-card-hover)",
                }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-display font-semibold text-lg text-foreground mb-6 pb-4 border-b border-border">
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      className="flex items-center gap-3 group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: catIndex * 0.1 + skillIndex * 0.1,
                        duration: 0.4,
                      }}
                    >
                      <motion.div
                        className="w-2 h-2 rounded-full bg-primary"
                        whileHover={{ scale: 2 }}
                        transition={{ duration: 0.2 }}
                      />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors font-medium">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Areas of Interest */}
          <motion.div
            className="bg-card rounded-2xl p-8 shadow-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ boxShadow: "var(--shadow-card-hover)" }}
          >
            <h3 className="font-display font-semibold text-xl text-foreground mb-6 text-center">
              Areas of Interest
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {interests.map((interest, index) => (
                <motion.span
                  key={interest}
                  className="px-6 py-3 rounded-full border-2 border-primary/20 text-foreground font-medium cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{
                    scale: 1.1,
                    borderColor: "hsl(var(--primary))",
                    backgroundColor: "hsl(var(--primary) / 0.1)",
                  }}
                >
                  {interest}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
