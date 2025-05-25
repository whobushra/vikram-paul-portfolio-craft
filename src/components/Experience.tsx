
import { Calendar, MapPin, ArrowRight } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Reliance Jio (Jio Platforms)",
      position: "Senior Software Engineer / Manager",
      duration: "Jul 2020 – Present",
      location: "Mumbai, India",
      achievements: [
        "Led scalable platform development using Redis and React.js; improved system responsiveness by 40–60%.",
        "Re-architected monolithic systems into microservices using DDD; reduced technical debt by 30%.",
        "Prototyped AI solutions with LangChain, RAG, and MCP; laid foundation for chat-based enterprise AI.",
        "Standardized secure SDLC across teams; improved release speed and security by 30%.",
        "Mentored engineers, reducing bugs and raising code quality by 40%."
      ],
      gradient: "from-blue-500 to-purple-500",
      current: true
    },
    {
      company: "Reliance Jio",
      position: "Software Engineer – II / Deputy Manager",
      duration: "Jan 2019 – Jun 2020",
      location: "India",
      achievements: [
        "Built backend services emphasizing security, testing, and clean deployments.",
        "Delivered Kafka, Redis, RabbitMQ-based PoCs; enabled event-driven microservice transition.",
        "Improved DevOps pipelines; streamlined CI/CD for faster rollouts."
      ],
      gradient: "from-purple-500 to-pink-500",
      current: false
    },
    {
      company: "Reliance Jio",
      position: "Software Engineer / Assistant Manager",
      duration: "Jul 2017 – Dec 2018",
      location: "India",
      achievements: [
        "Optimized database schemas and built high-performance transactional APIs.",
        "Designed clean, versioned REST APIs with scalable architecture.",
        "Collaborated with UI and integration teams across multiple product verticals."
      ],
      gradient: "from-teal-500 to-green-500",
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Professional <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            7+ years of progressive leadership in enterprise software engineering, from building scalable APIs to architecting AI-powered platforms.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

          {experiences.map((exp, index) => (
            <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* Timeline dot */}
              <div className={`absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r ${exp.gradient} rounded-full border-4 border-white shadow-lg z-10`}>
                {exp.current && (
                  <div className="absolute inset-1 bg-white rounded-full animate-pulse"></div>
                )}
              </div>

              {/* Experience card */}
              <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-8 md:text-right' : 'md:ml-8'} md:w-1/2`}>
                <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${exp.gradient} rounded-2xl flex items-center justify-center text-white`}>
                      <ArrowRight className="w-6 h-6" />
                    </div>
                    {exp.current && (
                      <span className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Current
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {exp.position}
                  </h3>
                  
                  <h4 className="text-lg font-semibold text-blue-600 mb-4">
                    {exp.company}
                  </h4>

                  <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {exp.location}
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start">
                        <div className={`w-2 h-2 bg-gradient-to-r ${exp.gradient} rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                        <span className="text-gray-700 leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">7+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
            <div className="text-gray-600">Leadership Roles</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-teal-600 mb-2">60%</div>
            <div className="text-gray-600">Performance Improvement</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
