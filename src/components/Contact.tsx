import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";

const Contact = () => {

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "afazfairoze@gmail.com",
      href: "mailto:afazfairoze@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9489023538",
      href: "tel:+919489023538",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Namakkal, India",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/roshan-afaz-b2996631b/",
    },
    {
      icon: Github,
      name: "GitHub",
      href: "https://github.com/RoshanAfaz",
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/3 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.3, 1],
          x: [-20, 20, -20],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/3 -right-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [20, -20, 20],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
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
              Get In Touch
            </motion.span>
            <motion.h2
              className="font-display font-bold text-3xl md:text-5xl text-foreground mt-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Let's work together
            </motion.h2>
            <motion.p
              className="text-muted-foreground mt-4 max-w-xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </motion.p>
          </motion.div>

          <motion.div
            className="bg-card rounded-3xl p-8 md:p-12 shadow-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            whileHover={{ boxShadow: "var(--shadow-card-hover)" }}
          >
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h3 className="font-display font-semibold text-xl text-foreground mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={item.label}
                      className="flex items-center gap-4"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <motion.div
                        className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center"
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "hsl(var(--primary) / 0.1)",
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <item.icon size={20} className="text-primary" />
                      </motion.div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {item.label}
                        </p>
                        {item.href ? (
                          <motion.a
                            href={item.href}
                            className="text-foreground font-medium hover:text-primary transition-colors"
                            whileHover={{ x: 4 }}
                          >
                            {item.value}
                          </motion.a>
                        ) : (
                          <p className="text-foreground font-medium">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Social Links */}
                <motion.div
                  className="mt-8 pt-8 border-t border-border"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <p className="text-sm text-muted-foreground mb-4">
                    Connect with me
                  </p>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center group"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        whileHover={{
                          scale: 1.15,
                          backgroundColor: "hsl(var(--primary))",
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <social.icon
                          size={20}
                          className="text-foreground group-hover:text-primary-foreground transition-colors"
                        />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* CTA */}
              <motion.div
                className="flex flex-col justify-center"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <motion.div
                  className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 text-center relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Animated particles */}
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-primary/30 rounded-full pointer-events-none"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + (i % 2) * 40}%`,
                      }}
                      animate={{
                        y: [-10, 10, -10],
                        opacity: [0.3, 0.7, 0.3],
                      }}
                      transition={{
                        duration: 2 + i * 0.3,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}

                  <motion.div
                    className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6"
                    animate={{
                      boxShadow: [
                        "0 0 20px hsl(38 92% 50% / 0.3)",
                        "0 0 40px hsl(38 92% 50% / 0.5)",
                        "0 0 20px hsl(38 92% 50% / 0.3)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    whileHover={{ rotate: 360 }}
                  >
                    <Send size={28} className="text-primary-foreground" />
                  </motion.div>
                  <h4 className="font-display font-semibold text-xl text-foreground mb-3">
                    Ready to collaborate?
                  </h4>
                  <p className="text-muted-foreground mb-6">
                    Drop me an email and let's create something amazing together!
                  </p>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=afazfairoze@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-base font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gradient-primary text-primary-foreground hover:shadow-glow hover:-translate-y-1 hover:scale-105 h-12 px-8 w-full"
                  >
                    <Mail size={18} className="mr-2" />
                    Send Email
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
