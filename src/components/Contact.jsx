import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white px-6 md:px-20 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-cyan-400 tracking-widest mb-2">
          // CONTACT
        </p>

        <h2 className="text-5xl md:text-7xl font-bold text-cyan-400 mb-16">
          Let's Connect
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Left Side */}

          <div className="space-y-6">

            <div className="bg-[#07111f] border border-cyan-500/30 rounded-3xl p-6">
              <h3 className="text-cyan-400 text-xl font-bold mb-2">
                Email
              </h3>

              <a
                href="mailto:nidakhan11255@gmail.com"
                className="text-gray-300 hover:text-cyan-400 transition"
              >
                nidakhan11255@gmail.com
              </a>
            </div>

            <div className="bg-[#07111f] border border-cyan-500/30 rounded-3xl p-6">
              <h3 className="text-cyan-400 text-xl font-bold mb-2">
                GitHub
              </h3>

              <a
                href="https://github.com/nida12595"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyan-400 transition"
              >
                github.com/nida12595
              </a>
            </div>

            <div className="bg-[#07111f] border border-cyan-500/30 rounded-3xl p-6">
              <h3 className="text-cyan-400 text-xl font-bold mb-2">
                LinkedIn
              </h3>

              <a
                href="https://linkedin.com/in/nidakhan22"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyan-400 transition"
              >
                linkedin.com/in/nidakhan22
              </a>
            </div>

          </div>

          {/* Right Side Form */}

          <div className="bg-[#07111f] border border-cyan-500/30 rounded-3xl p-8">

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-black border border-cyan-500/30 rounded-xl p-4 outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-black border border-cyan-500/30 rounded-xl p-4 outline-none"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-black border border-cyan-500/30 rounded-xl p-4 outline-none"
              />

              <textarea
                rows="5"
                placeholder="Message"
                className="w-full bg-black border border-cyan-500/30 rounded-xl p-4 outline-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-cyan-400 text-black py-4 rounded-xl font-bold hover:scale-105 transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>
      </motion.div>
    </section>
  );
}