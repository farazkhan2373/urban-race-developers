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
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              With over 15 years of experience in the real estate industry, we have been transforming 
              skylines and creating dream homes for thousands of families. Our commitment to quality, 
              innovation, and customer satisfaction has made us a trusted name in real estate development.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              From luxury apartments to affordable housing, from commercial complexes to residential 
              communities, we deliver projects that exceed expectations and create lasting value.
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
            <Image 
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