import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
  id="home"
  className="min-h-screen bg-black flex items-center justify-center text-center px-6"
>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="inline-block border-2 border-cyan-400 rounded-full px-6 py-2 text-cyan-400 mb-6">
          ● AVAILABLE FOR OPPORTUNITIES
        </div>

        <h1 className="text-7xl font-extrabold text-white">
          NIDA
        </h1>

        <h1 className="text-7xl font-extrabold text-cyan-400 mb-4">
          KHAN
        </h1>

        <h2 className="text-3xl font-semibold text-white mb-3">
          B.Tech AI Student
        </h2>

        <p className="tracking-[8px] text-cyan-300 mb-10">
          BUILDING FUTURE WITH CODE
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
  href="#projects"
  className="bg-cyan-400 text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
>
  View Projects
</a>

          <a
  href="/Nida_Khan_Resume.pdf"
  download
  className="border-2 border-cyan-400 px-8 py-3 rounded-full hover:bg-cyan-400 hover:text-black transition"
>
  Download Resume
</a>

          <a
  href="#contact"
  className="border-2 border-cyan-400 px-8 py-3 rounded-full hover:bg-cyan-400 hover:text-black transition"
>
  Contact Me
</a>
        </div>
      </motion.div>
    </section>
  );
}