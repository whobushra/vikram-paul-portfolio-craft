import { Button } from "@/components/ui/button";
import { Download, MessageSquare } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50 flex items-center justify-center px-4 py-20 pt-32">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                Senior Software Engineer & Technical Lead
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              I'm <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">Vikram Paul</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
              I build scalable, secure, and intelligent systems that power enterprise success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full transition-all duration-300"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Hire Me
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-500">
              <span className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                7+ Years Experience
              </span>
              <span className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                Fortune 100 Company
              </span>
              <span className="flex items-center">
                <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                Enterprise Platforms
              </span>
            </div>
          </div>
          
          {/* Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-400 via-purple-400 to-teal-400 rounded-full p-1">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/787e89f9-def9-4399-aaa0-0253945aab1e.png"
                    alt="Vikram Paul"
                    className="w-72 h-72 lg:w-80 lg:h-80 rounded-full object-cover object-top"
                  />
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg animate-bounce">
                7+
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-purple-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                <span className="text-xs text-center">Tech<br/>Lead</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
