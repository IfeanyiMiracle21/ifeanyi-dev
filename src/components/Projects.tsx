import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Smartphone, Globe } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern React-based e-commerce solution with advanced filtering, cart management, and payment integration.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Stripe API"],
      type: "frontend",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
      github: "#",
      live: "#"
    },
    {
      title: "Corporate WordPress Site",
      description: "Custom WordPress theme with advanced ACF integration, SEO optimization, and mobile-first design.",
      tech: ["WordPress", "PHP", "MySQL", "ACF"],
      type: "wordpress",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      github: "#",
      live: "#"
    },
    {
      title: "Portfolio Dashboard",
      description: "Interactive dashboard built with React and modern UI components, featuring real-time data visualization.",
      tech: ["React", "Chart.js", "REST API", "CSS Grid"],
      type: "frontend",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      github: "#",
      live: "#"
    },
    {
      title: "Restaurant WordPress Site",
      description: "Custom WordPress site with online reservation system, menu management, and location integration.",
      tech: ["WordPress", "WooCommerce", "PHP", "JavaScript"],
      type: "wordpress",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=400&fit=crop",
      github: "#",
      live: "#"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work in frontend development and WordPress solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="overflow-hidden bg-card/80 backdrop-blur-sm border-border shadow-glass hover:shadow-glow transition-all duration-300 group animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.type === 'frontend' 
                      ? 'bg-primary/20 text-primary border border-primary/30' 
                      : 'bg-accent/20 text-accent border border-accent/30'
                  }`}>
                    {project.type === 'frontend' ? (
                      <div className="flex items-center space-x-1">
                        <Smartphone className="w-3 h-3" />
                        <span>Frontend</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-1">
                        <Globe className="w-3 h-3" />
                        <span>WordPress</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                  <Button variant="default" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;