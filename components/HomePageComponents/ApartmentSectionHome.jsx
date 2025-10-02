import React from 'react';

// Mock data for apartments
const apartments = [
  {
    id: 1,
    name: 'Villa 97 – Moinabad',
    image: '/img/apartments-images/villa-97.webp',
    description: 'Bespoke luxury villa designed with elegance and comfort.'
  },
  {
    id: 2,
    name: 'Maple West',
    image: '/img/apartments-images/mapple-west.webp',
    description: 'Premium apartments crafted for modern living with world-class amenities.'
  },
  {
    id: 3,
    name: 'Eagle Heights',
    image: '/img/apartments-images/eagle-heights.webp',
    description: 'High-rise luxury apartments with panoramic views and cutting-edge design.'
  }
];

const ApartmentSection = () => {
  return (
    <section className="py-10 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1b2638] mb-4">Our Premium Apartments</h2>
          <p className="text-gray-600 text-lg">Discover your perfect home from our collection of premium apartments</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {apartments.map((apartment) => (
            <div key={apartment.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative overflow-hidden">
                <img 
                  src={apartment.image} 
                  alt={apartment.name}
                  className="w-full h-64 md:h-56 lg:h-64 object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#1b2638] mb-4">{apartment.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">{apartment.description}</p>
                <a href='/apartments' className="block text-center w-full bg-[#1b2638] text-white py-3 rounded-lg hover:bg-opacity-90 transition-colors text-lg font-medium">
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApartmentSection;