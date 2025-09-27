import React from 'react';
import { MapPin, Phone } from 'lucide-react';

const MapleWestComponent = ({ openContactModal }) => {
  const apartment = {
    id: 2,
    name: 'Maple West',
    emoji: '🌿',
    status: 'Ongoing Project',
    image: '/img/apartments-images/mapple-west.jpeg',
    shortDescription: 'Discover the pinnacle of sophisticated urban living at Maple West, a landmark development by UrbanRace Developers. We\'ve redefined luxury to create residences that are as aesthetically stunning as they are functionally superior. Each home is a testament to meticulous design, blending elegant architecture with intuitive layouts to create living spaces that are both stylish and supremely practical.',
    longDescription: 'At Maple West, your home extends beyond your apartment. Residents enjoy exclusive access to a curated selection of world-class amenities, beautifully sculpted landscapes, and a vibrant community built on a foundation of comfort and elegance. This is more than a residence; it\'s a statement of refined living.',
    locationDescription: 'Located strategically near the Outer Ring Road (ORR), Maple West offers a rare combination of serene living and unmatched urban accessibility. Our prime location places you just a 10-minute drive from Gachibowli and the Financial District, putting you at the heart of Hyderabad\'s commercial hub.',
    connectivity: [
      'Top-tier Educational Institutions: Premier schools and leading engineering and medical colleges are all within a short commute.',
      'Prime Shopping and Leisure: Enjoy proximity to a variety of upscale shopping and entertainment destinations.',
      'Global Access: With Rajiv Gandhi International Airport just a 20-minute drive away, both domestic and international travel are effortlessly convenient.'
    ],
    closingText: 'Maple West is designed for a balanced, modern life, offering the perfect blend of metropolitan access and everyday luxury. Experience a new standard of convenience and elevate your daily living.',
    features: ['Modern Amenities', 'Landscaped Gardens', 'Prime Location', 'Contemporary Design'],
    location: 'Hyderabad'
  };

  return (
    <div id='mapple-west' className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-12 items-center py-16">
      {/* Image Section */}
      <div className="flex-1 w-full">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-8">
          <img 
            src={apartment.image} 
            alt={apartment.name}
            className="w-full h-64 md:h-80 lg:h-[550px] object-cover transform hover:scale-105 transition-transform duration-500"
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
        <div>
            <p className="text-gray-600 leading-relaxed">
              {apartment.closingText}
            </p>
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

      {/* Content Section */}
      <div className="flex-1 w-full">
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">{apartment.emoji}</span>
              <h3 className="text-3xl md:text-4xl font-bold text-[#1b2638]">
                Elevating Your Lifestyle: Introducing {apartment.name}
              </h3>
            </div>
            <div className="flex items-center gap-2 text-gray-600 mb-4">
              <MapPin className="w-4 h-4" />
              <span>{apartment.location}</span>
            </div>
          </div>

          <div>
            <p className="text-gray-600 leading-relaxed">
              {apartment.shortDescription}
            </p>
          </div>

          <div>
            <p className="text-gray-600 leading-relaxed">
              {apartment.longDescription}
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-[#1b2638] mb-3">Unparalleled Connectivity and Convenience</h4>
            <p className="text-gray-600 leading-relaxed mb-4">
              {apartment.locationDescription}
            </p>
            <p className="text-gray-600 leading-relaxed mb-3">Enjoy seamless connectivity to:</p>
            <div className="space-y-2 mb-4">
              {apartment.connectivity.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-[#1b2638] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default MapleWestComponent;