'use client'

import Image from "next/image"


const AboutInfo = () => {
  return (
    <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
           

            {/* Left Information */}
            <div>
              <h2 className="text-4xl font-bold text-[#1b2638] mb-6">
                We are Urban Race Developers
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
               At Urban Race Developers, we don’t just build structures  we build dreams, lifestyles, and thriving communities.
              </p>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Founded with a vision to redefine modern living, we are a passionate team of developers, engineers, and innovators committed to delivering quality residential apartments that blend style, comfort, and functionality. Every project we undertake is driven by a promise timely delivery, uncompromised quality, and transparent dealings so that our customers can trust us with one of their most important life decisions: buying a home.
              </p>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
               With  successfully completed project and ongoing developments, Urban Race Developers is quickly earning a reputation as a trusted name in real estate. Our projects are located in prime areas, thoughtfully designed, and built with the highest standards of construction  ensuring lasting value for generations.nt life decisions: buying a home.
              </p>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              We believe in creating more than just apartments; we create spaces where families grow, friendships flourish, and memories are made.
              </p>
              {/* <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-[#1b2638]">50+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-[#1b2638]">10K+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
              </div> */}
            </div>

             {/* Right Image */}
            <div className="relative">
              <img 
                src="/img/about-page-images/about-us-800x600-2.png" 
                alt="Modern office building" 
                width={600}
                height={500}
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
              {/* <div className="absolute -bottom-6 -right-6 bg-[#1b2638] text-white p-6 rounded-lg">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm">Years Experience</div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

  )
}

export default AboutInfo
