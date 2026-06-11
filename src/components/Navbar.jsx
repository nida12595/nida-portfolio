import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-3xl font-bold text-cyan-400">
          NK.
        </h1>

        <div className="hidden md:flex gap-8 text-white">
          <a href="#about" className="hover:text-cyan-400">About</a>
          <a href="#skills" className="hover:text-cyan-400">Skills</a>
          <a href="#projects" className="hover:text-cyan-400">Projects</a>
          <a href="#education" className="hover:text-cyan-400">Education</a>
          <a href="#contact" className="hover:text-cyan-400">Contact</a>
        </div>

        <button className="md:hidden text-cyan-400">
          <Menu size={30} />
        </button>

      </div>
    </nav>
  );
}