// Services Overview Section
import { 
  Building,
  Users,
  Award
} from 'lucide-react';

const ServicesOverviewHome = () => {
  const services = [
    {
      icon: Building,
      title: "Construction & Development",
      description: "End-to-end construction services with quality assurance and timely delivery."
    },
    {
      icon: Users,
      title: "Property Management",
      description: "Professional property management services for residential and commercial properties."
    },
    {
      icon: Award,
      title: "Investment Advisory",
      description: "Expert guidance on real estate investments to maximize your returns."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1b2638] mb-4">Our Services</h2>
          <p className="text-gray-600 text-lg">Comprehensive real estate solutions tailored to your needs</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-[#1b2638] text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <service.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#1b2638] mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverviewHome;