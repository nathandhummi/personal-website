// Vite + React + Tailwind setup
// Assuming Tailwind is already configured in your Vite project

import { useEffect, useRef, useState } from "react";

export default function App() {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [basePosition, setBasePosition] = useState(0);
  const sliderRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    document.documentElement.classList.add("scroll-smooth");
    startAnimation();
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const startAnimation = () => {
    let startTime = null;
    const duration = 50000; // 50 seconds
    const totalDistance = sliderRef.current ? -sliderRef.current.scrollWidth / 2 : 0;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = (elapsed % duration) / duration;
      
      if (sliderRef.current && !isDragging) {
        const position = basePosition + (totalDistance * progress);
        sliderRef.current.style.transform = `translateX(${position}px)`;
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    setIsDragging(true);
    setStartX(e.pageX);
    if (sliderRef.current) {
      const transform = window.getComputedStyle(sliderRef.current).getPropertyValue('transform');
      const matrix = new DOMMatrix(transform);
      setTranslateX(matrix.m41);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (sliderRef.current) {
      const transform = window.getComputedStyle(sliderRef.current).getPropertyValue('transform');
      const matrix = new DOMMatrix(transform);
      setBasePosition(matrix.m41);
      startAnimation();
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = x - startX;
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(${translateX + walk}px)`;
    }
  };

  return (
    <div className="min-h-screen font-sans text-gray-800">
      {/* Navbar */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white/70 backdrop-blur-md rounded-full shadow-lg shadow-gray-200/30 px-6 py-3 z-50">
        <ul className="flex gap-8 text-lg font-medium">
          <li><a href="#home" className="hover:text-gray-600 transition-colors">Home</a></li>
          <li><a href="#about" className="hover:text-gray-600 transition-colors">About</a></li>
          <li><a href="#experience" className="hover:text-gray-600 transition-colors">Experience</a></li>
          <li><a href="#projects" className="hover:text-gray-600 transition-colors">Projects</a></li>
          <li><a href="#contact" className="hover:text-gray-600 transition-colors">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="px-6 md:px-20 flex flex-col md:flex-row items-center justify-between min-h-screen">
        {/* Image Section with Pokemon */}
        <div className="w-full md:w-1/2 flex justify-center relative">
          {/* Main portrait */}
          <img 
            src="/src/assets/images/body.png" 
            alt="Nathan's Portrait" 
            className="w-100 h-120 relative animate-float delay-0"
          />
          
          {/* Pokemon */}
          <img 
            src="/src/assets/images/empoleon.png"
            alt="Empoleon"
            className="absolute w-48 h-48 top-40 left-4 transform -translate-y-1/4 z-20 pokemon-animate delay-pokemon-1"
          />
          <img 
            src="/src/assets/images/aggron.png"
            alt="Aggron"
            className="absolute w-48 h-48 top-40 right-52 transform -translate-y-1/4 z-20 pokemon-animate delay-pokemon-4"
          />
          <img 
            src="/src/assets/images/gallade.png"
            alt="Gallade"
            className="absolute w-48 h-48 bottom-80 left-0 z-20 pokemon-animate delay-pokemon-2"
          />
          <img 
            src="/src/assets/images/flygon.png"
            alt="Flygon"
            className="absolute w-48 h-48 bottom-20 left-6 z-20 pokemon-animate delay-pokemon-5"
          />
          <img 
            src="/src/assets/images/luxray.png"
            alt="Luxray"
            className="absolute w-48 h-48 bottom-20 right-44 z-20 pokemon-animate delay-pokemon-3"
          />
          <img 
            src="/src/assets/images/aurorus.png"
            alt="Aurorus"
            className="absolute w-48 h-48 bottom-80 right-52 transform translate-x-1/4 z-20 pokemon-animate delay-pokemon-6"
          />
        </div>

        {/* Text Area */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-12 md:mt-0">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 animate-float delay-0">
            Welcome!
          </h1>

          <p className="text-xl mb-4 animate-float delay-1">
            I'm glad you found me! Feel free to grab a seat and stay awhile.
          </p>

          <p className="text-lg italic text-gray-600 animate-float delay-2">
            — Nathan Dhami
          </p>
        </div>
      </section>

      {/* Sonic Divider */}
      <div className="w-full flex justify-center -mb-20 relative z-30 mt-20">
        <img 
          src="/src/assets/images/sonic.gif" 
          alt="Sonic Running" 
          className="w-32 h-32 object-contain"
        />
      </div>

      {/* About Section */}
      <section id="about" className="pt-32 min-h-screen px-6 md:px-20 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 flex items-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">About Me</span>
            <span className="ml-2">👋</span>
          </h2>
          
          <p className="text-lg text-gray-700 mb-12 leading-relaxed">
            Hey there! 
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            I'm a senior at UCLA majoring in Cognitive Science with a minor in Data Science Engineering. I'm interested in how people think, how systems behave, and how we can design better experiences where the two meet.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Outside of school, I spend my time at the gym, skateboarding, and exploring photography. I also have a deep appreciation for The Good Place and the immersive soundscapes of Tame Impala.
          </p>
          <p className="text-lg text-gray-700 mb-12 leading-relaxed">
            Lately, I've been especially drawn to human-computer interaction — how we can create tools and interfaces that feel natural, intuitive, and impactful. Whether it's through code, data, or design, I'm always looking for ways to make tech a little more human.
          </p>
        </div>

        {/* Image Slider - Full Width */}
        <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw] overflow-hidden h-64 mb-12">
          
          {/* Sliding Container */}
          <div 
            ref={sliderRef}
            className="flex gap-6 px-6 cursor-grab select-none"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            <img draggable="false" src="/src/assets/images/slider/apartment.jpg" alt="Apartment" className="h-64 w-auto object-cover rounded-lg pointer-events-none" />
            <img draggable="false" src="/src/assets/images/slider/bigbear.jpg" alt="Me at Big Bear" className="h-64 w-auto object-cover rounded-lg pointer-events-none" />
            <img draggable="false" src="/src/assets/images/slider/brandopose.jpg" alt="Friend Posing" className="h-64 w-auto object-cover rounded-lg pointer-events-none" />
            <img draggable="false" src="/src/assets/images/slider/cat.jpeg" alt="Cat with Wine" className="h-64 w-auto object-cover rounded-lg pointer-events-none" />
            <img draggable="false" src="/src/assets/images/slider/garden.jpg" alt="Friend Staring at Japanese Garden" className="h-64 w-auto object-cover rounded-lg pointer-events-none" />
            <img draggable="false" src="/src/assets/images/slider/hike.jpg" alt="Hiking" className="h-64 w-auto object-cover rounded-lg pointer-events-none" />
            <img draggable="false" src="/src/assets/images/slider/joshuatree.jpg" alt="Rocks at Joshua Tree" className="h-64 w-auto object-cover rounded-lg pointer-events-none" />
            <img draggable="false" src="/src/assets/images/slider/me.jpg" alt="Me!" className="h-64 w-auto object-cover rounded-lg pointer-events-none" />
            <img draggable="false" src="/src/assets/images/slider/sf.jpg" alt="Friends in SF" className="h-64 w-auto object-cover rounded-lg pointer-events-none" />
            <img draggable="false" src="/src/assets/images/slider/signal.jpg" alt="Traffic Signal" className="h-64 w-auto object-cover rounded-lg pointer-events-none" />
            <img draggable="false" src="/src/assets/images/slider/theboys.jpg" alt="Me and Friends at Carnival" className="h-64 w-auto object-cover rounded-lg pointer-events-none" />
            <img draggable="false" src="/src/assets/images/slider/window.jpg" alt="Window of UCLA Building" className="h-64 w-auto object-cover rounded-lg pointer-events-none" />

            {/* Duplicate images for seamless loop */}
            <img draggable="false" src="/src/assets/images/slider/apartment.jpg" alt="Apartment" className="h-64 w-auto object-cover rounded-lg pointer-events-none" />
            <img draggable="false" src="/src/assets/images/slider/bigbear.jpg" alt="Me at Big Bear" className="h-64 w-auto object-cover rounded-lg pointer-events-none" />
            <img draggable="false" src="/src/assets/images/slider/brandopose.jpg" alt="Friend Posing" className="h-64 w-auto object-cover rounded-lg pointer-events-none" />
            <img draggable="false" src="/src/assets/images/slider/cat.jpeg" alt="Cat with Wine" className="h-64 w-auto object-cover rounded-lg pointer-events-none" />
            <img draggable="false" src="/src/assets/images/slider/garden.jpg" alt="Friend Staring at Japanese Garden" className="h-64 w-auto object-cover rounded-lg pointer-events-none" />
            <img draggable="false" src="/src/assets/images/slider/hike.jpg" alt="Hiking" className="h-64 w-auto object-cover rounded-lg pointer-events-none" />
            <img draggable="false" src="/src/assets/images/slider/joshuatree.jpg" alt="Rocks at Joshua Tree" className="h-64 w-auto object-cover rounded-lg pointer-events-none" />
            <img draggable="false" src="/src/assets/images/slider/me.jpg" alt="Me!" className="h-64 w-auto object-cover rounded-lg pointer-events-none" />
            <img draggable="false" src="/src/assets/images/slider/sf.jpg" alt="Friends in SF" className="h-64 w-auto object-cover rounded-lg pointer-events-none" />
            <img draggable="false" src="/src/assets/images/slider/signal.jpg" alt="Traffic Signal" className="h-64 w-auto object-cover rounded-lg pointer-events-none" />
            <img draggable="false" src="/src/assets/images/slider/theboys.jpg" alt="Me and Friends at Carnival" className="h-64 w-auto object-cover rounded-lg pointer-events-none" />
            <img draggable="false" src="/src/assets/images/slider/window.jpg" alt="Window of UCLA Building" className="h-64 w-auto object-cover rounded-lg pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Placeholder Sections */}
      <section id="experience" className="min-h-screen px-6 md:px-20 py-20">Experience Section</section>
      <section id="projects" className="min-h-screen px-6 md:px-20 py-20">Projects Section</section>
      <section id="contact" className="min-h-screen px-6 md:px-20 py-20">Contact Section</section>
    </div>
  );
}
