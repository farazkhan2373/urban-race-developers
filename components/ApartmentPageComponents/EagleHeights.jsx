import React from 'react';
import { MapPin, Phone } from 'lucide-react';

const EagleHeightsComponent = ({ openContactModal }) => {
  const apartment = {
    id: 3,
    name: 'Eagle Heights',
    emoji: '🦅',
    status: 'Ongoing Project',
    image: '/img/apartments-images/eagle-heights.webp',
    shortDescription: 'Eagle Heights is a project of UrbanRace Developers. It is a landmark, six-story serviced apartment complex that redefines high-rise living in one of Hyderabad\'s most desirable locations. Designed with contemporary architecture and thoughtful planning, it provides expansive floor plans, panoramic city views, and an exceptional lifestyle.',
    longDescription: 'With world-class amenities including a rooftop swimming pool, a state-of-the-art fitness center, landscaped leisure spaces, and dedicated concierge services, Eagle Heights establishes a new benchmark for urban luxury. Built to international standards, it is designed for families and professionals who value elegance, comfort, and convenience at the very heart of the city.',
    experienceDescription: 'Imagine waking up to breathtaking panoramic views of Hyderabad, stepping onto your expansive private balcony with a cup of coffee, and feeling the energy of the city below. This isn\'t just an apartment; it\'s a statement.',
    offeringDescription: 'At Eagle Heights, we don\'t just offer a place to stay—we offer an elevated way of life. Our spacious, thoughtfully designed serviced apartments are a sanctuary of comfort and style. Every detail has been meticulously crafted to provide an experience that is both luxurious and effortless.',
    whyChoose: [
      'Unmatched Urban Luxury: From the sleek, modern architecture to the high-end finishes in every apartment, we set a new standard for sophistication.',
      'Amenities That Impress: Enjoy exclusive access to our rooftop swimming pool, where you can unwind with a stunning cityscape as your backdrop. Stay active in our state-of-the-art fitness center or find your Zen in the serene, landscaped leisure spaces.',
      'Effortless Living: Our dedicated concierge services ensure every need is met, from arranging transportation to making reservations. Your comfort and convenience are our highest priority.',
      'Prime Location: Nestled in one of Hyderabad\'s most sought-after neighborhoods, you\'re at the very heart of the city\'s vibrant culture, dining, and business hubs.'
    ],
    closingText: 'Eagle Heights is more than a residence; it\'s a community designed for those who seek the best. Whether you\'re a professional looking for a stylish, convenient home base or a family seeking a blend of elegance and comfort, you\'ll find it here. Ready to elevate your everyday? Discover the difference at Eagle Heights.',
    features: ['Rooftop Swimming Pool', 'State-of-the-Art Fitness Center', 'Landscaped Leisure Spaces', 'Dedicated Concierge Services'],
    location: 'Heart of Hyderabad'
  };

  return (
    <>
      {/* Desktop Version */}
      <div className="max-w-7xl mx-auto hidden md:flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
        {/* Image Section */}
        <div className="flex-1 w-full">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-8">
            <img
              src={apartment.image}
              alt={apartment.name}
              className="w-full h-64 md:h-80 lg:h-[600px] object-cover transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${apartment.status === 'Completed Project'
                  ? 'bg-green-500 text-white'
                  : 'bg-yellow-500 text-white'
                }`}>
                {apartment.status}
              </span>
            </div>
          </div>
          <div>
            <p className="text-gray-600 leading-relaxed mb-6">
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
                  Experience the Urban Heights Lifestyle: {apartment.name}
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
              <p className="text-gray-600 leading-relaxed mb-4">
                {apartment.experienceDescription}
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                {apartment.offeringDescription}
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-[#1b2638] mb-3">Why choose Eagle Heights?</h4>
              <div className="space-y-2 mb-4">
                {apartment.whyChoose.map((item, idx) => (
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

      {/* Mobile Version */}
      <div className=" flex md:hidden px-4 flex-col lg:flex-row gap-8 lg:gap-12 items-center ">

        {/* Title */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            {/* <span className="text-3xl">{apartment.emoji}</span> */}
            <h3 className="text-3xl md:text-4xl font-bold text-[#1b2638]">
              Experience the Urban Heights Lifestyle: {apartment.name} {apartment.emoji}
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
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${apartment.status === 'Completed Project'
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
            <h4 className="text-lg font-semibold text-[#1b2638] mb-2">Overview</h4>
           

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
              <p className="text-gray-600 leading-relaxed mb-4">
                {apartment.experienceDescription}
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                {apartment.offeringDescription}
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-[#1b2638] mb-3">Why choose Eagle Heights?</h4>
              <div className="space-y-2 mb-4">
                {apartment.whyChoose.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[#1b2638] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

           <div>
            <p className="text-gray-600 leading-relaxed mb-6">
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
      </div>


    </>
  );
};

export default EagleHeightsComponent;