import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="border-t border-cyan-500/20 bg-black py-8 text-center"
    >
      <p className="text-gray-400">
        © 2026 Nida Khan | Built with React, Tailwind CSS &
        Framer Motion
      </p>
    </motion.footer>
  );
}