
import React from 'react';
import { 
  Building2,
  Target,
  Eye,
  Heart
} from 'lucide-react';

const MissonVission = () => {
      const values = [
    {
      icon: Building2,
      title: "Quality Excellence",
      description: "We maintain the highest standards in construction and development, ensuring every project meets exceptional quality benchmarks."
    },
    {
      icon: Target,
      title: "Customer Focus",
      description: "Our clients are at the center of everything we do. We listen, understand, and deliver solutions that exceed expectations."
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We conduct business with complete transparency, honesty, and ethical practices in all our dealings."
    }
  ];

  return (
     <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1b2638] mb-4">Our Foundation</h2>
            <p className="text-gray-600 text-lg">The principles that guide our every decision and action</p>
          </div>

          {/* Mission and Vision */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-[#1b2638] text-white p-3 rounded-lg mr-4">
                  <Target size={24} />
                </div>
                <h3 className="text-2xl font-bold text-[#1b2638]">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Deliver on-time, quality construction with attention to detail.
                Maintain transparent communication with our clients at every step.
                Develop spaces that are modern, functional, and future-ready.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-[#1b2638] text-white p-3 rounded-lg mr-4">
                  <Eye size={24} />
                </div>
                <h3 className="text-2xl font-bold text-[#1b2638]">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted and innovative real estate developer, delivering sustainable, modern, and community-focused residential spaces.
              </p>
            </div>
          </div>

          {/* Our Values */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-[#1b2638] mb-4">Our Values</h3>
              <p className="text-gray-600">The core principles that define who we are</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-[#1b2638] text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-[#1b2638] mb-4">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

  )
}

export default MissonVission
