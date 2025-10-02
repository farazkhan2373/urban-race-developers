import React from 'react';
import { Phone, Mail } from 'lucide-react';

const ContactInfoComponent = () => {
  return (
    <section className="text-[#1b2638] py-10 md:py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Find Your Dream Home?</h2>
        <p className="text-xl text-[#1b2638] mb-8">
          Our team is here to help you every step of the way
        </p>
        <div className="flex flex-col items-center md:flex-row justify-center gap-8">
          <div className="flex items-center gap-3">
            <Phone className="w-6 h-6 text-[#1b2638]" />
            <div>
              <p className="font-medium">Call Us</p>
              <p className="text-[#1b2638] font-bold">+91 90307 49957</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-6 h-6 text-[#1b2638]" />
            <div>
              <p className="font-medium">Email Us</p>
              <p className="text-[#1b2638] font-bold">info@urbanracedevelopers.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoComponent;