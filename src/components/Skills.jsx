import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen bg-black text-white px-8 py-20">
      <p className="text-cyan-400 tracking-widest font-semibold">
        // TECH STACK
      </p>

      <h2 className="text-5xl font-bold mb-4">
        <span className="text-cyan-400">Skills</span> & Tools
      </h2>

      <p className="text-gray-400 mb-12">
        Technologies I use to build projects.
      </p>

      <div className="grid md:grid-cols-2 gap-8">

        {/* Frontend */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="border border-cyan-500 rounded-3xl p-6 bg-[#08111f]"
        >
          <h3 className="text-3xl font-bold text-cyan-400 mb-6">
            Frontend
          </h3>

          <div className="flex flex-wrap gap-3">
            {["HTML", "CSS", "JavaScript", "React", "Tailwind"].map(
              (skill) => (
                <span
                  key={skill}
                  className="border border-cyan-400 px-4 py-2 rounded-full"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </motion.div>

        {/* Backend */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="border border-cyan-500 rounded-3xl p-6 bg-[#08111f]"
        >
          <h3 className="text-3xl font-bold text-cyan-400 mb-6">
            Backend
          </h3>

          <div className="flex flex-wrap gap-3">
            {["Java", "Node.js", "MySQL"].map((skill) => (
              <span
                key={skill}
                className="border border-cyan-400 px-4 py-2 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="border border-cyan-500 rounded-3xl p-6 bg-[#08111f]"
        >
          <h3 className="text-3xl font-bold text-cyan-400 mb-6">
            Tools
          </h3>

          <div className="flex flex-wrap gap-3">
            {["Git", "GitHub", "VS Code"].map((tool) => (
              <span
                key={tool}
                className="border border-cyan-400 px-4 py-2 rounded-full"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Other */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="border border-cyan-500 rounded-3xl p-6 bg-[#08111f]"
        >
          <h3 className="text-3xl font-bold text-cyan-400 mb-6">
            Other
          </h3>

          <div className="flex flex-wrap gap-3">
            {[
              "Problem Solving",
              "OOP",
              "Responsive Design",
            ].map((item) => (
              <span
                key={item}
                className="border border-cyan-400 px-4 py-2 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}