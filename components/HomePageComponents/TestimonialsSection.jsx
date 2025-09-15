// Testimonials Section

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Property Owner",
      content: "Excellent service and quality construction. Our dream home became a reality with their professional approach.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      role: "Investor",
      content: "Great investment opportunity with guaranteed returns. The team is very professional and responsive.",
      rating: 5
    },
    {
      name: "Amit Patel",
      role: "Home Buyer",
      content: "Outstanding customer service and transparent dealings. Highly recommended for anyone looking to buy property.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-[#1b2638] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-300 text-lg">Hear from our satisfied customers</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-800 mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div>
                <h4 className="font-bold text-lg">{testimonial.name}</h4>
                <p className="text-gray-800 font-semibold">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;