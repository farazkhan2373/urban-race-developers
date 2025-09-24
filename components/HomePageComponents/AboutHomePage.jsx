// About Section Component
import { 
 
  Building,
  Users,
  Award
 
} from 'lucide-react';
import Image from 'next/image';


const AboutHomePage = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#1b2638] mb-6">About Our Company</h2>
            <p className="text-gray-600 text-lg mb-2 leading-relaxed">
              At Urban Race Developers, we don’t just build structures  we build dreams, lifestyles, and thriving communities.
            </p>
            <p className="text-gray-600 text-lg mb-2 leading-relaxed">
              Founded with a vision to redefine modern living, we are a passionate team of developers, engineers, and innovators committed to delivering quality residential apartments that blend style, comfort, and functionality. Every project we undertake is driven by a promise timely delivery, uncompromised quality, and transparent dealings so that our customers can trust us with one of their most important life decisions: buying a home.
            </p>
            <p className="text-gray-600 text-lg mb-2 leading-relaxed">
              With  successfully completed project and two ongoing developments, Urban Race Developers is quickly earning a reputation as a trusted name in real estate. Our projects are located in prime areas, thoughtfully designed, and built with the highest standards of construction  ensuring lasting value for generations.nt life decisions: buying a home.
            </p>
            <p className="text-gray-600 text-lg mb-2 leading-relaxed">
              We believe in creating more than just apartments; we create spaces where families grow, friendships flourish, and memories are made.
              </p>
            
            {/* <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-[#1b2638] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Building size={24} />
                </div>
                <div className="text-2xl font-bold text-[#1b2638]">50+</div>
                <div className="text-gray-600">Projects</div>
              </div>
              <div className="text-center">
                <div className="bg-[#1b2638] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users size={24} />
                </div>
                <div className="text-2xl font-bold text-[#1b2638]">10K+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="bg-[#1b2638] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award size={24} />
                </div>
                <div className="text-2xl font-bold text-[#1b2638]">25+</div>
                <div className="text-gray-600">Awards</div>
              </div>
            </div> */}
          </div>

          <div className="relative">
            <img 
              src="/img/about-page-images/about-us-800x600-1.png"
              width={600}
              height={500}
              alt="About Us"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            {/* <div className="absolute -bottom-6 -right-6 bg-[#1b2638] text-white p-6 rounded-lg">
              <div className="text-3xl font-bold">15+</div>
              <div>Years Experience</div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHomePage;