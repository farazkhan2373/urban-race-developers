const AboutBanner = () => {
  return (
    <section className="relative h-[60vh] flex items-center justify-center mt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/img/about-page-images/about-desk-banner-1920x500.png" 
          alt="Modern office building" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10 text-white px-4 w-full max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
        <p className="text-xl md:text-2xl max-w-3xl leading-relaxed">
          Building dreams, creating communities, and shaping the future of real estate development
        </p>
      </div>
    </section>
  )
}

export default AboutBanner