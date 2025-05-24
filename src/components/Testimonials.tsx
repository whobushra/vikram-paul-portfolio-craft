
const Testimonials = () => {
  const testimonials = [
    {
      quote: "Vikram consistently leads with clarity and drives results. His mentoring transformed our junior team's efficiency by 40% and reduced post-deployment bugs significantly.",
      author: "Sarah Chen",
      role: "Product Manager, Jio Platforms",
      avatar: "SC"
    },
    {
      quote: "His expertise in microservices architecture and DevOps practices helped us achieve seamless scalability for our enterprise platform serving millions of users.",
      author: "Rajesh Kumar",
      role: "Engineering Director",
      avatar: "RK"
    },
    {
      quote: "Vikram's technical leadership in AI workflow orchestration enabled us to automate complex business processes and improve operational efficiency by 60%.",
      author: "Priya Sharma",
      role: "CTO, Tech Startup",
      avatar: "PS"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Colleagues</span> Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Testimonials from team members and industry leaders who have experienced the impact of my technical leadership.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="mb-6">
                <svg className="w-8 h-8 text-blue-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.author}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
