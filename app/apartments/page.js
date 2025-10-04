'use client'
import React, { useState } from 'react';

// Contact Modal Component (keeping this in main file as requested)
const ContactModal = ({ isOpen, onClose, apartmentName }) => {

  if (!isOpen) return null;

  return (
    <>
      <div className='fixed inset-0 bg-black opacity-80'  ></div>
      <div className="fixed inset-0  z-50 flex items-center justify-center p-4">
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
          
          <ContactForm/>

        </div>
      </div>
    </>
  );
};

// Import your components here (you'll need to replace these with actual imports)
import HeroApartment from '@/components/ApartmentPageComponents/HeroApartment';
import Villa97 from '@/components/ApartmentPageComponents/Villa97';
import MappleWest from '@/components/ApartmentPageComponents/MappleWest';
import EagleHeights from '@/components/ApartmentPageComponents/EagleHeights';
import ContactInfo from '@/components/ApartmentPageComponents/ContactInfo';
import ContactForm from '@/components/LeadForm/ContactForm';

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
    <div className="min-h-screen">
      <HeroApartment />

      {/* Our Projects */}
      <div className="text-center py-6 md:py-10">
        <h2 className="text-4xl font-bold text-[#1b2638] mb-4">Our Projects</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Each project represents our commitment to quality, innovation, and creating homes that inspire
        </p>
      </div>



      {/* Villa 97 Component */}
      <div id='villa-97' className='bg-gray-50 py-10 md:py-16'>
        <Villa97 openContactModal={openContactModal} />
      </div>

      {/* Maple West Component */}
      <div id='mapple-west' className='py-10 md:py-16'>
      <MappleWest openContactModal={openContactModal} />
      </div>

      {/* Eagle Heights Component */}
      <div id='eagle-heights' className='bg-gray-50 py-10 md:py-16'>
        <EagleHeights openContactModal={openContactModal} />
      </div>





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