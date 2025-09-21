import React from 'react';
import { MapPin, Phone } from 'lucide-react';

const MapleWestComponent = ({ openContactModal }) => {
  const apartment = {
    id: 2,
    name: 'Maple West',
    emoji: '🌿',
    status: 'Ongoing Project',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Maple West is an upcoming premium apartment project crafted for modern living, with spacious designs and world-class amenities in a prime Hyderabad location.',
    longDescription: 'Maple West by UrbanRace Developers is set to redefine urban living in Hyderabad. Designed with a vision to create homes that inspire, Maple West offers stylish apartments that seamlessly blend functionality with elegance. Residents will enjoy a contemporary lifestyle with access to modern amenities, landscaped open spaces, and a community built on comfort and convenience. Positioned in a sought-after location, Maple West promises a lifestyle that is both aspirational and accessible.',
    features: ['Modern Amenities', 'Landscaped Gardens', 'Prime Location', 'Contemporary Design'],
    location: 'Hyderabad'
  };

  return (
    <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-12 items-center">
      {/* Image Section */}
      <div className="flex-1 w-full">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          <img 
            src={apartment.image} 
            alt={apartment.name}
            className="w-full h-64 md:h-80 lg:h-96 object-cover transform hover:scale-105 transition-transform duration-500"
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
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">{apartment.emoji}</span>
              <h3 className="text-3xl md:text-4xl font-bold text-[#1b2638]">
                {apartment.name}
              </h3>
            </div>
            <div className="flex items-center gap-2 text-gray-600 mb-4">
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

export default MapleWestComponent;