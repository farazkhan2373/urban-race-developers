// Map Section
import { 
  MapPin,
  
} from 'lucide-react';

const MapSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1b2638] mb-4">Find Us</h2>
          <p className="text-gray-600 text-lg">Visit our office or get in touch with us</p>
        </div>

        <div className="bg-gray-200 h-96 rounded-lg overflow-hidden">
          {/* Placeholder for map - In a real app, you would integrate with Google Maps or similar */}
          <div className="w-full h-full bg-gray-300 flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} className="text-[#1b2638] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#1b2638] mb-2">Our Location</h3>
              <p className="text-gray-600">123 Business District, Hyderabad, Telangana 500001</p>
              <p className="text-gray-600 mt-2">Map integration would be here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;