import { motion, type Variants } from "framer-motion";
import { Award, FileText, Globe, CheckCircle2 } from "lucide-react";

const Achievements = () => {
  const certifications = [
    {
      title: "Oracle Apex Cloud Developer",
      issuer: "Oracle",
      status: "Certified",
    },
    {
      title: "Java SE 17 Developer",
      issuer: "Oracle",
      status: "Hands-on Training Completed",
    },
  ];

  const papers = [
    {
      title: "Mechnotron 2024",
      venue: "Coimbatore Institute of Technology",
    },
    {
      title: "Mequest 2024",
      venue: "Ramakrishna Engineering College",
    },
  ];

  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Urdu", level: "Fluent" },
    { name: "Tamil", level: "Fluent" },
    { name: "Hindi", level: "Fluent" },
    { name: "Arabic", level: "Basic" },
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
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="achievements" className="py-24 px-6 relative overflow-hidden bg-muted/20">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Recognition & Skills</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mt-3">
              Achievements & <span className="text-gradient">Capabilities</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Certifications */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Award size={24} />
                </div>
                <h3 className="font-display font-bold text-xl">Certifications</h3>
              </div>
              {certifications.map((cert) => (
                <motion.div
                  key={cert.title}
                  variants={itemVariants}
                  className="bg-card p-5 rounded-2xl shadow-sm border border-border group hover:border-primary/30 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-primary mt-1 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1 uppercase tracking-tight font-medium">
                        {cert.issuer} • {cert.status}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Papers Presented */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <FileText size={24} />
                </div>
                <h3 className="font-display font-bold text-xl">Papers Presented</h3>
              </div>
              {papers.map((paper) => (
                <motion.div
                  key={paper.title}
                  variants={itemVariants}
                  className="bg-card p-5 rounded-2xl shadow-sm border border-border hover:border-primary/30 transition-all"
                  whileHover={{ y: -5 }}
                >
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {paper.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    {paper.venue}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Languages */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Globe size={24} />
                </div>
                <h3 className="font-display font-bold text-xl">Languages</h3>
              </div>
              <div className="bg-card p-6 rounded-2xl shadow-sm border border-border grid grid-cols-2 gap-4">
                {languages.map((lang) => (
                  <motion.div
                    key={lang.name}
                    variants={itemVariants}
                    className="flex flex-col"
                  >
                    <span className="font-semibold text-foreground">{lang.name}</span>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider font-bold opacity-70">
                      {lang.level}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
