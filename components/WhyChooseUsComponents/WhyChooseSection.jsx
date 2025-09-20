

import React from 'react';
import { 
  Award,
  MapPin,
  DollarSign,
  Clock,
  Shield
} from 'lucide-react';

const WhyChooseSection = () => {
      const features = [
    {
      icon: Award,
      title: "Quality Construction",
      description: "We use premium materials and employ skilled craftsmen to ensure every project meets the highest construction standards and durability requirements."
    },
    {
      icon: MapPin,
      title: "Prime Locations",
      description: "Our properties are strategically located in well-connected areas with excellent infrastructure, schools, hospitals, and shopping centers nearby."
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "No hidden costs or surprise charges. We believe in complete transparency with detailed cost breakdowns and fair pricing for all our projects."
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "We are committed to delivering projects on schedule. Our efficient project management ensures timely completion without compromising quality."
    },
    // {
    //   icon: Shield,
    //   title: "RERA Compliance",
    //   description: "All our projects are RERA registered and compliant, ensuring legal transparency, buyer protection, and adherence to regulatory standards."
    // }
  ];
  return (
    <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1b2638] mb-4">What Sets Us Apart</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We combine years of experience with innovative approaches to deliver exceptional real estate solutions that exceed expectations
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-2 w-[350px]">
                <div className="bg-[#1b2638] text-white w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-[#1b2638] mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default WhyChooseSection
