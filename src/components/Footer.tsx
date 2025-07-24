import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { 
  ArrowUp, 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  MapPin, 
  Phone,
  Heart,
  Send,
  Code2,
  Globe
} from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigationLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    { name: "Frontend Development", icon: Code2 },
    { name: "WordPress Development", icon: Globe },
    { name: "Mobile-First Design", icon: Code2 },
    { name: "E-commerce Solutions", icon: Globe }
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:ifeanyi.obiania@gmail.com", label: "Email" }
  ];

  return (
    <footer className="relative bg-hero-gradient text-primary-foreground overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary-glow/10 rounded-full animate-float" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-primary-foreground/5 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Brand & Intro */}
          <div className="lg:col-span-2 animate-fade-in">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary-foreground/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-primary-foreground/10">
                <Code2 className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Ifeanyi Obiania</h3>
                <p className="text-primary-foreground/80 text-sm">Frontend & WordPress Developer</p>
              </div>
            </div>
            
            <p className="text-primary-foreground/90 mb-6 leading-relaxed max-w-md">
              Crafting beautiful, functional websites that make a difference. 
              Let's turn your ideas into amazing digital experiences.
            </p>
            
            {/* Newsletter Signup */}
            <Card className="p-4 bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 shadow-glass">
              <h4 className="font-semibold mb-3 text-primary-foreground">Stay Updated</h4>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button variant="secondary" size="sm" className="shrink-0 group">
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          </div>
          
          {/* Navigation */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h4 className="font-semibold mb-6 text-xl">Navigation</h4>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href.substring(1))}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors hover:translate-x-2 transform duration-200 block"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h4 className="font-semibold mb-6 text-xl">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name} className="flex items-center space-x-2 text-primary-foreground/80">
                  <service.icon className="w-4 h-4" />
                  <span className="text-sm">{service.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Contact Info Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
            <a 
              href="mailto:ifeanyi.obiania@gmail.com" 
              className="flex items-center justify-center md:justify-start space-x-3 p-4 bg-primary-foreground/10 backdrop-blur-sm rounded-lg border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-300 group"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>ifeanyi.obiania@gmail.com</span>
            </a>
            
            <div className="flex items-center justify-center md:justify-start space-x-3 p-4 bg-primary-foreground/10 backdrop-blur-sm rounded-lg border border-primary-foreground/20">
              <Phone className="w-5 h-5" />
              <span>+234 (0) 123-456-789</span>
            </div>
            
            <div className="flex items-center justify-center md:justify-start space-x-3 p-4 bg-primary-foreground/10 backdrop-blur-sm rounded-lg border border-primary-foreground/20">
              <MapPin className="w-5 h-5" />
              <span>Lagos, Nigeria</span>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-primary-foreground/20">
          {/* Copyright */}
          <div className="flex items-center space-x-2 text-primary-foreground/80 mb-4 md:mb-0">
            <span>© 2024 Made with</span>
            <Heart className="w-4 h-4 text-red-400 animate-pulse" />
            <span>by Ifeanyi Obiania</span>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="p-3 bg-primary-foreground/10 backdrop-blur-sm rounded-full border border-primary-foreground/20 hover:bg-primary-foreground/20 hover:scale-110 transition-all duration-300 group"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </a>
            ))}
          </div>
          
          {/* Back to Top */}
          <Button
            onClick={scrollToTop}
            variant="secondary"
            size="sm"
            className="group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              <span>Back to Top</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;