import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education"className="min-h-screen bg-black text-white px-6 md:px-20 py-20">

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-cyan-400 tracking-widest mb-2">
          // JOURNEY
        </p>

        <h2 className="text-5xl md:text-7xl font-bold text-cyan-400 mb-16">
          Education & Goals
        </h2>
      </motion.div>

      <div className="relative border-l-4 border-cyan-500 pl-10 space-y-16">

        {/* Education */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -left-[54px] w-8 h-8 rounded-full bg-cyan-500"></div>

          <p className="text-cyan-400 mb-2">2023 - 2027</p>

          <h3 className="text-3xl font-bold mb-4">
            B.Tech CSE (AI)
          </h3>

          <div className="bg-gray-900 border border-cyan-500/30 rounded-2xl p-6">
            <h4 className="text-xl font-semibold mb-3">
              G. Pullaiah College of Engineering & Technology
            </h4>

            <p className="text-gray-300">
              Computer Science Engineering with Artificial Intelligence
              specialization. Building strong foundations in Software
              Development, Machine Learning, Data Structures,
              Cloud Computing and Modern Web Technologies.
            </p>
          </div>
        </motion.div>

        {/* Career Goals */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -left-[54px] w-8 h-8 rounded-full bg-cyan-500"></div>

          <p className="text-cyan-400 mb-2">// Future</p>

          <h3 className="text-3xl font-bold mb-4">
            Career Goals
          </h3>

          <div className="bg-gray-900 border border-cyan-500/30 rounded-2xl p-6">
            <p className="text-gray-300">
              Seeking opportunities as a Full Stack Developer and
              Artificial Intelligence Engineer where I can contribute,
              learn and build impactful software solutions while
              continuously improving my technical expertise.
            </p>
          </div>
        </motion.div>

        {/* Current Focus */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -left-[54px] w-8 h-8 rounded-full bg-cyan-500"></div>

          <p className="text-cyan-400 mb-2">// Present</p>

          <h3 className="text-3xl font-bold mb-4">
            Current Focus
          </h3>

          <div className="bg-gray-900 border border-cyan-500/30 rounded-2xl p-6">
            <p className="text-gray-300">
              Currently focusing on Full Stack Development,
              React.js, Java, Artificial Intelligence, Data Structures
              & Algorithms while building real-world projects and
              strengthening problem-solving skills.
            </p>
          </div>
        </motion.div>

        {/* Certifications */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -left-[54px] w-8 h-8 rounded-full bg-cyan-500"></div>

          <p className="text-cyan-400 mb-2">// Achievements</p>

          <h3 className="text-3xl font-bold mb-4">
            Certifications
          </h3>

          <div className="bg-gray-900 border border-cyan-500/30 rounded-2xl p-6">

            <div className="flex flex-wrap gap-3">

              <span className="border border-cyan-400 px-4 py-2 rounded-full">
                AWS Cloud Practitioner Essentials
              </span>

              <span className="border border-cyan-400 px-4 py-2 rounded-full">
                Social Networks (NPTEL)
              </span>

              <span className="border border-cyan-400 px-4 py-2 rounded-full">
                Blockchain & Its Applications (NPTEL)
              </span>

              <span className="border border-cyan-400 px-4 py-2 rounded-full">
                Principles of Management (NPTEL)
              </span>

              <span className="border border-cyan-400 px-4 py-2 rounded-full">
                Management Information System (NPTEL)
              </span>

              <span className="border border-cyan-400 px-4 py-2 rounded-full">
                AWS Data Engineering Virtual Internship
              </span>

              <span className="border border-cyan-400 px-4 py-2 rounded-full">
                TEDx GPCET PR & Marketing Team
              </span>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}