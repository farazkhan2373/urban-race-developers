import React from 'react'

const Stats = () => {
  return (
   <section className="py-16 bg-[#1b2638] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-gray-300">Years of Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-gray-300">Completed Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-gray-300">Happy Families</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-gray-300">RERA Compliant</div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Stats
