import { motion, type Variants } from "framer-motion";
import { GraduationCap, Award, FileText } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Information Technology",
      institution: "Kongu Engineering College",
      period: "2023 – 2027",
      score: "CGPA: 7.13 (up to 5th semester)",
    },
    {
      degree: "XII Grade",
      institution: "SKV Matriculation Higher Secondary School, M. Kandampalayam",
      period: "2022 – 2023",
      score: "Percentage: 89%",
    },
  ];

  const certifications = [
    "Oracle APEX Cloud Developer",
    "Oracle SE 17 Hands-on Training",
  ];

  const papers = [
    {
      title: "Ethical AI",
      event: "Mechnotron 2024",
      venue: "Coimbatore Institute of Technology",
    },
    {
      title: "Video Dubbing Web Application",
      event: "Mequest 2024",
      venue: "Ramakrishna Engineering College",
    },
  ];

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section id="education" className="py-24 px-6 bg-muted/30 relative overflow-hidden">
      {/* Animated decorative elements */}
      <motion.div
        className="absolute top-20 right-20 w-4 h-4 bg-primary/30 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-6 h-6 bg-primary/20 rounded-lg rotate-45"
        animate={{
          rotate: [45, 135, 45],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 5, repeat: Infinity }}
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
              Background
            </motion.span>
            <motion.h2
              className="font-display font-bold text-3xl md:text-5xl text-foreground mt-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Education & Achievements
            </motion.h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <GraduationCap size={20} className="text-primary-foreground" />
                </motion.div>
                <h3 className="font-display font-semibold text-xl text-foreground">
                  Education
                </h3>
              </div>

              <div className="space-y-4">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="bg-card rounded-2xl p-6 shadow-card"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "var(--shadow-card-hover)",
                    }}
                  >
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h4 className="font-display font-semibold text-foreground">
                        {edu.degree}
                      </h4>
                      <motion.span
                        className="text-sm text-muted-foreground whitespace-nowrap"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                      >
                        {edu.period}
                      </motion.span>
                    </div>
                    <p className="text-muted-foreground mb-2">{edu.institution}</p>
                    <motion.span
                      className="inline-block bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full"
                      whileHover={{ scale: 1.05 }}
                    >
                      {edu.score}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certifications & Papers */}
            <div className="space-y-8">
              {/* Certifications */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Award size={20} className="text-primary-foreground" />
                  </motion.div>
                  <h3 className="font-display font-semibold text-xl text-foreground">
                    Certifications
                  </h3>
                </div>

                <motion.div
                  className="bg-card rounded-2xl p-6 shadow-card"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "var(--shadow-card-hover)",
                  }}
                >
                  <ul className="space-y-3">
                    {certifications.map((cert, index) => (
                      <motion.li
                        key={index}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <motion.div
                          className="w-2 h-2 rounded-full bg-primary"
                          whileHover={{ scale: 2 }}
                        />
                        <span className="text-muted-foreground">{cert}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <p className="text-sm text-muted-foreground mt-4 italic">
                    * Certification Status: Pending
                  </p>
                </motion.div>
              </motion.div>

              {/* Papers */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <FileText size={20} className="text-primary-foreground" />
                  </motion.div>
                  <h3 className="font-display font-semibold text-xl text-foreground">
                    Papers & Presentations
                  </h3>
                </div>

                <div className="space-y-4">
                  {papers.map((paper, index) => (
                    <motion.div
                      key={index}
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 }}
                      className="bg-card rounded-2xl p-6 shadow-card"
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "var(--shadow-card-hover)",
                        x: 8,
                      }}
                    >
                      <h4 className="font-display font-semibold text-foreground mb-1">
                        {paper.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {paper.event} • {paper.venue}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
