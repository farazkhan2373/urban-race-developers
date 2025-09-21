'use client'
import React, { useState } from 'react';

// Contact Modal Component (keeping this in main file as requested)
const ContactModal = ({ isOpen, onClose, apartmentName }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = () => {
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please fill in all required fields');
      return;
    }
    
    // Handle form submission here
    console.log('Contact form submitted:', formData);
    alert(`Thank you for your interest in ${apartmentName}! We will contact you soon.`);
    onClose();
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-[#1b2638]">Contact Us</h3>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>
        
        <div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1b2638]"
              placeholder="Your Name"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1b2638]"
              placeholder="your@email.com"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Phone *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1b2638]"
              placeholder="Your Phone Number"
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1b2638]"
              placeholder={`I'm interested in ${apartmentName}...`}
            ></textarea>
          </div>
          
          <div className="flex gap-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="flex-1 px-4 py-2 bg-[#1b2638] text-white rounded-lg hover:bg-opacity-90"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Import your components here (you'll need to replace these with actual imports)
import HeroApartment from '@/components/ApartmentPageComponents/HeroApartment';
import Villa97 from '@/components/ApartmentPageComponents/Villa97';
import MappleWest from '@/components/ApartmentPageComponents/MappleWest';
import EagleHeights from '@/components/ApartmentPageComponents/EagleHeights';
import ContactInfo from '@/components/ApartmentPageComponents/ContactInfo';

// import Villa97Component from './components/Villa97Component';
// import MapleWestComponent from './components/MapleWestComponent';
// import EagleHeightsComponent from './components/EagleHeightsComponent';
// import ContactInfoComponent from './components/ContactInfoComponent';

const ApartmentsPage = () => {
  const [selectedApartment, setSelectedApartment] = useState(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = (apartmentName) => {
    setSelectedApartment(apartmentName);
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
    setSelectedApartment(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 mt-24">
       <HeroApartment />
      
      {/* Apartments Section - Our Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1b2638] mb-4">Our Projects</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Each project represents our commitment to quality, innovation, and creating homes that inspire
            </p>
          </div>

          <div className="space-y-16">
            {/* Villa 97 Component */}
          <Villa97 openContactModal={openContactModal} />
            
            {/* Maple West Component */}
           
            <MappleWest openContactModal={openContactModal} />
            
            {/* Eagle Heights Component */}
             <EagleHeights openContactModal={openContactModal} />
          </div>
        </div>
      </section>

       {/* Ready To find you dream home section */}
       <ContactInfo />

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={closeContactModal} 
        apartmentName={selectedApartment} 
      />
    </div>
  );
};

export default ApartmentsPage;