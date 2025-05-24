
const Projects = () => {
  const projects = [
    {
      title: "Enterprise AI Hub",
      description: "Built platform to create and orchestrate AI agents across departments.",
      tech: ["React.js", "Node.js", "Python", "Azure OpenAI", "AKS", "MongoDB"],
      image: "/lovable-uploads/7dc5f48c-b330-44ea-9571-a6770dace420.png",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "AnyTrac – IoT Retail Tracker",
      description: "Led IoT-based article tracking for 2,500+ stores with 60% cost reduction.",
      tech: ["Raspberry Pi", "Python", "Azure DevOps", "MySQL"],
      image: "/lovable-uploads/7dc5f48c-b330-44ea-9571-a6770dace420.png",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Reliance Scholarships Platform",
      description: "SPA using React + Redis serving 250K+ users with 4x faster load times.",
      tech: ["React.js", "Redis", "Node.js", "Azure DevOps"],
      image: "/lovable-uploads/7dc5f48c-b330-44ea-9571-a6770dace420.png",
      gradient: "from-teal-500 to-green-500"
    },
    {
      title: "AJIO Catalog Automation",
      description: "Kafka-based onboarding for 20K+ products daily with 90% automation.",
      tech: ["Apache Kafka", "Redis", "Elasticsearch", "ELK"],
      image: "/lovable-uploads/7dc5f48c-b330-44ea-9571-a6770dace420.png",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Key <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recent projects showcasing scalable solutions, technical leadership, and enterprise impact.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
