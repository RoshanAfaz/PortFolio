import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const Footer = () => {
  return (
    <motion.footer
      className="py-8 px-6 border-t border-border"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            className="text-muted-foreground text-sm flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
          >
            Developed with{" "}
            <Terminal size={14} className="text-primary" />{" "}
            by Roshan Afaz
          </motion.p>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
