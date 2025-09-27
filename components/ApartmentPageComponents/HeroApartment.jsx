import React from 'react';
import { Home, Users, Car } from 'lucide-react';

const HeroComponent = () => {
  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  return (
    <section className="bg-gradient-to-br from-[#1b2638] to-[#2d3748] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Premium <span className="text-yellow-400">Apartments</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Discover exceptional living spaces crafted by UrbanRace Developers
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-white font-semibold">
          <button 
            onClick={() => scrollToSection('villa-97')}
            className="flex items-center gap-2 bg-white bg-opacity-10 px-4 py-2 rounded-full hover:bg-opacity-20 transition-all duration-300 cursor-pointer"
          >
            <span>🏡</span>
            <span className='text-[#1b2638]'>Villa-97</span>
          </button>
          <button 
            onClick={() => scrollToSection('mapple-west')}
            className="flex items-center gap-2 bg-white bg-opacity-10 px-4 py-2 rounded-full hover:bg-opacity-20 transition-all duration-300 cursor-pointer"
          >
            <span>🌿</span>
            <span className='text-[#1b2638]'>Mapple West</span>
          </button>
          <button 
            onClick={() => scrollToSection('eagle-heights')}
            className="flex items-center gap-2 bg-white bg-opacity-10 px-4 py-2 rounded-full hover:bg-opacity-20 transition-all duration-300 cursor-pointer"
          >
             <span>🦅</span>
            <span className='text-[#1b2638]'>Eagle Heights</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;