// Vite + React + Tailwind setup
// Assuming Tailwind is already configured in your Vite project

import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add("scroll-smooth");
  }, []);

  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Navbar */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-gray-900/70 backdrop-blur-md rounded-full shadow-lg shadow-gray-900/20 px-6 py-3 z-50">
        <ul className="flex gap-8 text-lg font-medium">
          <li><a href="#home" className="hover:text-gray-300 transition-colors">Home</a></li>
          <li><a href="#about" className="hover:text-gray-300 transition-colors">About</a></li>
          <li><a href="#experience" className="hover:text-gray-300 transition-colors">Experience</a></li>
          <li><a href="#projects" className="hover:text-gray-300 transition-colors">Projects</a></li>
          <li><a href="#contact" className="hover:text-gray-300 transition-colors">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 md:pt-40 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between min-h-screen">
        {/* Drawing Placeholder */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img 
            src="/src/assets/images/face.png" 
            alt="Nathan's Portrait" 
            className="w-48 h-64 object-cover rounded-xl shadow-lg shadow-gray-900/30"
          />
        </div>

        {/* Text Area */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-12 md:mt-0">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Welcome!</h1>

          {/* Wavy Line (SVG or CSS) */}
          <svg className="my-6" height="40" viewBox="0 0 400 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 20C50 0 100 40 150 20C200 0 250 40 300 20C350 0 400 40 400 20" stroke="white" strokeWidth="3" fill="none"/>
          </svg>

          <p className="text-xl italic text-gray-300">— Nathan Dhami</p>
        </div>
      </section>

      {/* Placeholder Sections */}
      <section id="about" className="min-h-screen bg-gray-800/50 px-6 md:px-20 py-20">About Section</section>
      <section id="experience" className="min-h-screen px-6 md:px-20 py-20">Experience Section</section>
      <section id="projects" className="min-h-screen bg-gray-800/50 px-6 md:px-20 py-20">Projects Section</section>
      <section id="contact" className="min-h-screen px-6 md:px-20 py-20">Contact Section</section>
    </div>
  );
}
