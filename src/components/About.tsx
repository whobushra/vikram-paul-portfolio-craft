
const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Senior Software Engineer & Technical Lead with 7+ years of experience architecting scalable backend systems, leading agile teams, and delivering mission-critical platforms for millions of users.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Journey</h3>
              <p className="text-gray-600 leading-relaxed">
                Currently at <strong>Jio Platforms</strong> as Senior Software Engineer/Manager, where I lead development of scalable, low-latency software platforms using Redis and React.js, improving load time responsiveness by over 60%.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-teal-50 p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Leadership Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                Proven success in event-driven architectures, microservices, and cloud-native solutions with focus on cross-functional leadership, mentoring, and building high-performance engineering cultures.
              </p>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="text-center">
              <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-lg font-semibold mb-4">
                Key Expertise
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-6 bg-blue-50 rounded-2xl">
                <div className="text-3xl font-bold text-blue-600">2,500+</div>
                <div className="text-sm text-gray-600">Retail Stores Served</div>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-2xl">
                <div className="text-3xl font-bold text-purple-600">60%</div>
                <div className="text-sm text-gray-600">Cost Reduction</div>
              </div>
              <div className="text-center p-6 bg-teal-50 rounded-2xl">
                <div className="text-3xl font-bold text-teal-600">250K+</div>
                <div className="text-sm text-gray-600">Platform Users</div>
              </div>
              <div className="text-center p-6 bg-indigo-50 rounded-2xl">
                <div className="text-3xl font-bold text-indigo-600">90%</div>
                <div className="text-sm text-gray-600">Automation Rate</div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-2xl">
              <p className="text-gray-700 font-medium text-center">
                "Skilled in Python, .NET, Azure, Kafka, and Microservices with a track record of leading teams and delivering at scale."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
