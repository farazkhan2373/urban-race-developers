import React from 'react';
import { MapPin, Phone } from 'lucide-react';

const Villa97Component = ({ openContactModal }) => {
  const apartment = {
    id: 1,
    name: 'Villa 97 – Moinabad',
    emoji: '🏡',
    status: 'Completed Project',
    image: '/img/apartments-images/villa-97.webp',
    shortDescription: 'Villa 97 at Moinabad is a bespoke luxury villa designed with elegance and comfort, offering a private retreat amidst nature.',
    longDescription: 'Villa 97 is an exclusive individual villa by UrbanRace Developers, crafted as a one-of-a-kind residence in Moinabad. This project reflects timeless architecture, spacious interiors, and premium finishes that elevate everyday living. Surrounded by greenery and designed for those who value privacy and sophistication, Villa 97 stands as a completed milestone that showcases UrbanRace Developers\' attention to detail and quality craftsmanship.',
    features: ['Private Garden', 'Premium Finishes', 'Spacious Interiors', '24/7 Security'],
    location: 'Moinabad, Hyderabad'
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-0 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
      {/* Mobile version Heading */}
      <div className='md:hidden'>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">{apartment.emoji}</span>
              <h3 className="text-3xl md:text-4xl font-bold text-[#1b2638]">
                {apartment.name}
              </h3>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>{apartment.location}</span>
            </div>
          </div>

      {/* Image Section */}  
      <div className="flex-1 w-full">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          <img 
            src={apartment.image} 
            alt={apartment.name}
            className="w-full h-64 md:h-80 lg:h-[600px] object-cover transform hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              apartment.status === 'Completed Project' 
                ? 'bg-green-500 text-white' 
                : 'bg-yellow-500 text-white'
            }`}>
              {apartment.status}
            </span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 w-full">
        <div className="space-y-6">
          <div className='hidden md:block'>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">{apartment.emoji}</span>
              <h3 className="text-3xl md:text-4xl font-bold text-[#1b2638]">
                {apartment.name}
              </h3>
            </div>
            <div className="flex items-center gap-2 text-gray-600 ">
              <MapPin className="w-4 h-4" />
              <span>{apartment.location}</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-[#1b2638] mb-2">Overview</h4>
            <p className="text-gray-600 leading-relaxed">
              {apartment.shortDescription}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-[#1b2638] mb-2">About This Project</h4>
            <p className="text-gray-600 leading-relaxed">
              {apartment.longDescription}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-[#1b2638] mb-3">Key Features</h4>
            <div className="grid grid-cols-2 gap-2">
              {apartment.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#1b2638] rounded-full"></div>
                  <span className="text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              onClick={() => openContactModal(apartment.name)}
              className="cursor-pointer flex-1 bg-[#1b2638] text-white py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors font-medium flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Villa97Component;