import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Code2, 
  Palette, 
  Globe, 
  Smartphone, 
  Database, 
  Search,
  ShoppingCart,
  Zap,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Frontend Development",
      description: "Modern, responsive web applications built with React, Next.js, and the latest frontend technologies.",
      features: ["React & Next.js", "TypeScript", "Responsive Design", "Performance Optimization"],
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      icon: Globe,
      title: "WordPress Development", 
      description: "Custom WordPress themes, plugins, and complete website solutions tailored to your business needs.",
      features: ["Custom Themes", "Plugin Development", "WooCommerce", "WordPress Maintenance"],
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Responsive designs that look and work perfectly across all devices, from mobile phones to desktops.",
      features: ["Mobile Optimization", "Cross-browser Testing", "Touch-friendly UI", "Progressive Web Apps"],
      gradient: "from-green-500 to-teal-500", 
      bgGradient: "from-green-50 to-teal-50"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Complete online store development with secure payment integration and inventory management.",
      features: ["WooCommerce Setup", "Payment Integration", "Inventory Management", "Order Processing"],
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50"
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Technical SEO implementation to improve your website's visibility and search engine rankings.",
      features: ["Technical SEO", "Performance Optimization", "Schema Markup", "Analytics Setup"],
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-50 to-purple-50"
    },
    {
      icon: Zap,
      title: "Website Maintenance",
      description: "Ongoing support, updates, and maintenance to keep your website secure and running smoothly.",
      features: ["Security Updates", "Performance Monitoring", "Content Updates", "Backup Management"],
      gradient: "from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50"
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            My Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive web development services to bring your digital vision to life. 
            From concept to deployment, I've got you covered.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="p-8 bg-card/80 backdrop-blur-sm border-border shadow-glass hover:shadow-glow transition-all duration-300 group relative overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.gradient} shadow-soft mb-6 group-hover:shadow-glow transition-all duration-300 group-hover:scale-110`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* CTA */}
              <Button 
                variant="ghost" 
                className="w-full group/btn border border-border hover:border-primary/50 hover:bg-primary/5"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <Card className="inline-block p-8 bg-hero-gradient text-primary-foreground shadow-glow">
            <h3 className="text-2xl font-bold mb-4">Need a custom solution?</h3>
            <p className="mb-6 max-w-md">
              Every project is unique. Let's discuss how I can help bring your specific vision to life.
            </p>
            <Button variant="secondary" size="lg" className="group">
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;