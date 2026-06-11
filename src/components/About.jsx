import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-black text-white">
      <p className="text-cyan-400 tracking-widest font-semibold">
        // ABOUT
      </p>

      <h2 className="text-5xl font-bold mb-10">
        <span className="text-cyan-400">Who</span> I Am
      </h2>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="border border-cyan-500 rounded-3xl p-8 bg-[#08111f]"
      >
        <p className="text-xl leading-9">
          Hi, I'm <span className="text-cyan-400 font-bold">Nida Khan</span>,
          a passionate B.Tech AI student focused on building modern,
          scalable and user-friendly applications.
        </p>

        <p className="text-xl leading-9 mt-6">
          Currently learning React, Java, AI and Full Stack Development
          while building projects and improving problem solving skills.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <span className="border border-cyan-400 px-5 py-2 rounded-full">
            Full Stack
          </span>

          <span className="border border-cyan-400 px-5 py-2 rounded-full">
            AI & ML
          </span>

          <span className="border border-cyan-400 px-5 py-2 rounded-full">
            Clean Code
          </span>
        </div>
      </motion.div>
    </section>
  );
}