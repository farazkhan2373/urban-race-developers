import React from 'react';
import { Home, Users, Car } from 'lucide-react';

const HeroComponent = () => {
  return (
    <section className="bg-gradient-to-br from-[#1b2638] to-[#2d3748] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Premium <span className="text-yellow-400">Apartments</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Discover exceptional living spaces crafted by UrbanRace Developers
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-[#1b2638] font-semibold">
          <div className="flex items-center gap-2 bg-white bg-opacity-10 px-4 py-2 rounded-full">
            <Home className="w-4 h-4" />
            <span>Luxury Living</span>
          </div>
          <div className="flex items-center gap-2 bg-white bg-opacity-10 px-4 py-2 rounded-full">
            <Users className="w-4 h-4" />
            <span>Community Focused</span>
          </div>
          <div className="flex items-center gap-2 bg-white bg-opacity-10 px-4 py-2 rounded-full">
            <Car className="w-4 h-4" />
            <span>Prime Locations</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;