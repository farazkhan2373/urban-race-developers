// Apartments Section
// Mock data for apartments
const apartments = [
  {
    id: 1,
    name: 'Skyline Residences',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    description: 'Luxurious 2-3 BHK apartments with modern amenities and panoramic city views.'
  },
  {
    id: 2,
    name: 'Green Valley Homes',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    description: 'Eco-friendly residential complex surrounded by lush greenery and parks.'
  },
  {
    id: 3,
    name: 'Urban Heights',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    description: 'Premium high-rise apartments in the heart of the city with world-class facilities.'
  },
  {
    id: 4,
    name: 'Sunset Villas',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    description: 'Elegant villas with private gardens and exclusive community amenities.'
  },
  {
    id: 5,
    name: 'Metro Park Apartments',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    description: 'Convenient location near metro stations with modern living spaces.'
  },
  {
    id: 6,
    name: 'Riverside Manor',
    image: 'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    description: 'Serene riverside living with breathtaking water views and premium amenities.'
  },
  {
    id: 7,
    name: 'Crystal Palace',
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    description: 'Luxury apartments with crystal-clear architecture and top-tier facilities.'
  },
  {
    id: 8,
    name: 'Golden Gate Residency',
    image: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    description: 'Premium gated community with 24/7 security and recreational facilities.'
  }
];

const ApartmentSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1b2638] mb-4">Our Premium Apartments</h2>
          <p className="text-gray-600 text-lg">Discover your perfect home from our collection of premium apartments</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {apartments.map((apartment) => (
            <div key={apartment.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative overflow-hidden">
                <img 
                  src={apartment.image} 
                  alt={apartment.name}
                  className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1b2638] mb-3">{apartment.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{apartment.description}</p>
                <button className="w-full bg-[#1b2638] text-white py-2 rounded-lg hover:bg-opacity-90 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApartmentSection;