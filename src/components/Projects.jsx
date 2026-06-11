import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Online Help Desk",
      desc: "Web-based platform helping students access notes, study materials and resources efficiently.",
      tech: ["React", "Java", "MySQL"],
      status: "PROJECT 01",
    },

    {
      title: "E-Commerce Web App",
      desc: "Full-stack commerce platform with cart, checkout and product management.",
      tech: ["React", "Node.js", "MongoDB"],
      status: "COMING SOON",
    },

    {
      title: "Task Management System",
      desc: "Collaborative task board with deadlines and team workflow management.",
      tech: ["React", "Spring Boot", "MySQL"],
      status: "COMING SOON",
    },

    {
      title: "Portfolio Website",
      desc: "Modern portfolio built with React, Tailwind CSS and Framer Motion.",
      tech: ["React", "Tailwind", "Framer Motion"],
      status: "PROJECT 02",
    },
  ];

  return (
    <section id="projects"className="min-h-screen bg-black text-white px-8 py-20">
      <p className="text-cyan-400 tracking-[5px] font-semibold mb-2">
        // WORK
      </p>

      <h2 className="text-5xl md:text-7xl font-bold text-cyan-400 mb-4">
        Featured Projects
      </h2>

      <p className="text-gray-400 mb-12">
        Selected projects showcasing my development journey.
      </p>

      <div className="space-y-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 0 30px #00ffff55",
            }}
            className="border border-cyan-500/30 rounded-3xl p-8 bg-[#07111f]"
          >
            <p className="text-cyan-400 font-semibold mb-3">
              // {project.status}
            </p>

            <h3 className="text-3xl font-bold mb-4">
              {project.title}
            </h3>

            <p className="text-gray-300 mb-6">
              {project.desc}
            </p>

            <div className="flex flex-wrap gap-3">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="border border-cyan-500/50 px-4 py-2 rounded-full text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}