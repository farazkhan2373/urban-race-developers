// Contact Form Section
'use client'
import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin,
} from 'lucide-react';
import ContactForm from '../LeadForm/ContactForm';


const ContactHomePage = () => {
 

  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1b2638] mb-4">Get In Touch</h2>
          <p className="text-gray-600 text-lg">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <ContactForm/>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#1b2638] mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#1b2638] text-white p-3 rounded-lg">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600">1-24/172/A, (Plot no 172) Snehita Hills, Phase 1, Appa Junction, Hyderabad, Telangana 500091.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#1b2638] text-white p-3 rounded-lg">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">+91 90307 49957</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#1b2638] text-white p-3 rounded-lg">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">info@urbanracedevelopers.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="bg-[#1b2638] text-white p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-4">Office Hours</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHomePage