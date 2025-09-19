'use client'


const AboutInfo = () => {
  return (
    <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="relative">
              <img 
                src="/img/about-page-images/about-us-800x600-2.png" 
                alt="Modern office building" 
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#1b2638] text-white p-6 rounded-lg">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>

            {/* Right Information */}
            <div>
              <h2 className="text-4xl font-bold text-[#1b2638] mb-6">
                Leading Real Estate Development Company
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Established in 2009, we have grown from a small construction company to one of the leading 
                real estate developers in the region. Our journey has been marked by consistent growth, 
                innovative projects, and unwavering commitment to quality.
              </p>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                With over 50 successful projects completed and more than 10,000 satisfied customers, 
                we have established ourselves as a trusted name in residential and commercial development. 
                Our expertise spans across luxury apartments, commercial complexes, and integrated townships.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-[#1b2638]">50+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-[#1b2638]">10K+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  )
}

export default AboutInfo
