import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroWorkspace from "@/assets/hero-workspace.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-hero-gradient">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${heroWorkspace})` }}
      />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-primary-glow/20 rounded-full animate-float" />
      <div className="absolute bottom-32 right-32 w-16 h-16 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-6 text-center text-primary-foreground relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Frontend & WordPress
            <span className="block bg-gradient-to-r from-primary-glow to-accent bg-clip-text text-transparent">
              Developer
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">
            Creating beautiful, responsive websites and powerful WordPress solutions that drive results
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="lg" className="group">
              View My Work
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button variant="glass" size="lg">
              Get In Touch
              <Mail className="w-5 h-5" />
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a 
              href="#" 
              className="p-3 bg-card/20 backdrop-blur-sm rounded-full hover:bg-card/30 transition-all duration-300 hover:scale-110 border border-primary-glow/20"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="p-3 bg-card/20 backdrop-blur-sm rounded-full hover:bg-card/30 transition-all duration-300 hover:scale-110 border border-primary-glow/20"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="p-3 bg-card/20 backdrop-blur-sm rounded-full hover:bg-card/30 transition-all duration-300 hover:scale-110 border border-primary-glow/20"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-primary-foreground/70" />
      </div>
    </section>
  );
};

export default Hero;