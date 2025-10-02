// Map Section
import { 
  MapPin,
} from 'lucide-react';

const MapSection = () => {
  // Location information
  const location = {
    address: "NIRMANIKA - APARTMENT @ APPA JUNCTION, Hyderabad, Telangana",
    lat: 17.351973161376232,
    lng: 78.36206508085368
  };

  // Your custom Google Maps embed URL
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3808.2533063668798!2d78.36915599999999!3d17.351540000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDIxJzA1LjUiTiA3OMKwMjInMDkuMCJF!5e0!3m2!1sen!2sin!4v1758446524831!5m2!1sen!2sin";

  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1b2638] mb-4">Find Us</h2>
          <p className="text-gray-600 text-lg">Visit our office or get in touch with us</p>
        </div>

        <div className="bg-gray-200 h-96 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Our Location"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default MapSection;