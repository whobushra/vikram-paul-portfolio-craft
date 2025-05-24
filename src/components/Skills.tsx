
const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      skills: ["Python", "C#", ".NET Core", "JavaScript", "Node.js", "React.js"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Cloud & DevOps",
      skills: ["Azure Cloud", "Azure DevOps", "Kubernetes (AKS)", "Docker", "CI/CD"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Architecture & Messaging",
      skills: ["Microservices", "Event-Driven Design", "Apache Kafka", "Redis", "DDD"],
      gradient: "from-teal-500 to-green-500"
    },
    {
      title: "Databases & Monitoring",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Elasticsearch", "ELK Stack"],
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Technical <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive skill set spanning modern technologies, cloud platforms, and enterprise architecture patterns.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${category.gradient} rounded-2xl mb-6`}>
                <div className="w-6 h-6 bg-white rounded-lg"></div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className={`px-4 py-2 bg-gradient-to-r ${category.gradient} text-white rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200 cursor-default`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-3xl shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Leadership & Soft Skills</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["Team Leadership", "Agile Methodologies", "Technical Mentorship", "Cross-functional Collaboration", "Performance Optimization", "System Design"].map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
