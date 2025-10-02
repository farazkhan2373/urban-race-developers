import Image from "next/image"

const AboutBanner = () => {
  return (
    <section className="relative h-[60vh] flex items-center justify-center mt-20">
      {/* Desktop Background Image */}
      <div className="absolute inset-0 hidden md:block">
        <img 
          src="/img/about-page-images/about-desk-banner-1920x500.webp" 
          alt="Modern office building" 
          
          className="w-full h-full object-cover"
          
        />
      </div>
      
      {/* Mobile Background Image */}
      <div className="absolute inset-0 block md:hidden">
        <img 
          src="/img/about-page-images/about-mobile-banner-800x600.webp" 
          alt="Modern office building" 
          
          className="w-full h-full object-cover object-center"
          
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10 text-white px-4 w-full max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">About Us</h1>
        <p className="text-lg md:text-xl lg:text-2xl max-w-3xl leading-relaxed">
          Building dreams, creating communities, and shaping the future of real estate development
        </p>
      </div>
    </section>
  )
}

export default AboutBanner