
import { Cloud, Code, Cpu, GitBranch, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Cloud,
      title: "Cloud-Native System Architecture",
      description: "Design and implement scalable, resilient cloud architectures using Azure, microservices, and event-driven patterns.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Code,
      title: "Scalable Backend Development",
      description: "Build high-performance backend systems with Python, .NET Core, and Node.js that handle millions of users.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Cpu,
      title: "AI Workflow & Agent Orchestration",
      description: "Develop intelligent platforms with AI agents, LangChain, and automation for enterprise-wide deployment.",
      gradient: "from-teal-500 to-green-500"
    },
    {
      icon: GitBranch,
      title: "Enterprise DevOps",
      description: "Implement CI/CD pipelines, Azure DevOps, Kubernetes orchestration, and monitoring with ELK stack.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Users,
      title: "Technical Leadership & Mentorship",
      description: "Lead cross-functional teams, mentor junior engineers, and drive technical excellence in agile environments.",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What I <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Do</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized services that drive enterprise success through cutting-edge technology and proven leadership.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
