

const Team = () => {

     const teamMembers = [
    {
      name: "Rajesh Kumar",
      position: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      description: "15+ years of experience in real estate development and strategic planning."
    },
    {
      name: "Priya Sharma",
      position: "Head of Operations",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      description: "Expert in project management and operational excellence with 12 years of industry experience."
    },
    {
      name: "Amit Patel",
      position: "Chief Financial Officer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      description: "Financial strategist with extensive experience in real estate investments and portfolio management."
    },
    {
      name: "Sneha Reddy",
      position: "Head of Design",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      description: "Creative visionary leading architectural design and innovation in residential and commercial projects."
    }
  ];

  return (
    <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1b2638] mb-4">Our Leadership Team</h2>
            <p className="text-gray-600 text-lg">Meet the experienced professionals driving our success</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="relative mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
                  />
                </div>
                <h4 className="text-xl font-bold text-[#1b2638] mb-2">{member.name}</h4>
                <p className="text-[#1b2638] font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Team
