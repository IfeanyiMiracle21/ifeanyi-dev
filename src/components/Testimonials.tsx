import { Card } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "Ifeanyi delivered an exceptional WordPress site for our company. His attention to detail and ability to translate our vision into reality was outstanding. The site performs beautifully and has significantly improved our online presence.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen", 
      role: "Marketing Director, Digital Solutions",
      content: "Working with Ifeanyi was a pleasure. He built us a React-based dashboard that exceeded our expectations. Fast, responsive, and exactly what we needed. I'll definitely be working with him again.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, Creative Agency",
      content: "Ifeanyi's WordPress development skills are top-notch. He created a custom theme that perfectly matches our brand and is incredibly easy to manage. Professional, reliable, and talented.",
      rating: 5,
      avatar: "ER"
    },
    {
      name: "David Thompson",
      role: "E-commerce Manager",
      content: "The React e-commerce platform Ifeanyi built for us has transformed our business. Clean code, great performance, and excellent user experience. Highly recommended!",
      rating: 5,
      avatar: "DT"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Client Testimonials
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take my word for it - here's what my clients say about working with me
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="p-8 bg-card/80 backdrop-blur-sm border-border shadow-glass hover:shadow-glow transition-all duration-300 group relative animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 -left-3 p-2 bg-primary rounded-full shadow-glow">
                <Quote className="w-4 h-4 text-primary-foreground" />
              </div>
              
              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              {/* Content */}
              <blockquote className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center shadow-soft">
                  <span className="text-sm font-bold text-primary-foreground">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-lg text-muted-foreground mb-4">
            Ready to join these satisfied clients?
          </p>
          <Card className="inline-block p-6 bg-primary/5 border-primary/20 shadow-glow">
            <p className="text-primary font-semibold">
              Let's discuss your project today!
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;