import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Coffee, Users, Calendar } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Award, label: "Years Experience", value: "5+" },
    { icon: Coffee, label: "Projects Completed", value: "100+" },
    { icon: Users, label: "Happy Clients", value: "50+" },
    { icon: Calendar, label: "Lines of Code", value: "10K+" }
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About <span className="text-primary">Ifeanyi</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Hi! I'm <strong className="text-foreground">Ifeanyi Obiania</strong>, a passionate frontend and WordPress developer 
                with over 5 years of experience creating digital solutions that make a difference. 
                I specialize in building responsive, user-friendly websites that not only look great 
                but also deliver exceptional performance.
              </p>
              
              <p>
                My journey in web development started with a curiosity about how websites work, 
                and it has evolved into a deep passion for crafting beautiful, functional digital experiences. 
                I love the challenge of turning complex problems into simple, elegant solutions.
              </p>
              
              <p>
                Whether it's developing a React application from scratch or creating a custom WordPress theme, 
                I bring the same level of dedication and attention to detail to every project. 
                My goal is always to exceed expectations and deliver work that drives real results for my clients.
              </p>
            </div>
            
            <div className="mt-8">
              <Button variant="hero" size="lg" className="group">
                Download Resume
                <Award className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </Button>
            </div>
          </div>
          
          {/* Stats & Image */}
          <div className="space-y-8">
            {/* Profile Image Placeholder */}
            <Card className="p-8 bg-card/80 backdrop-blur-sm border-border shadow-glass text-center animate-scale-in">
              <div className="w-48 h-48 mx-auto bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mb-6 shadow-glow">
                <span className="text-6xl font-bold text-primary-foreground">IO</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Ifeanyi Obiania</h3>
              <p className="text-muted-foreground">Frontend & WordPress Developer</p>
            </Card>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card 
                  key={stat.label}
                  className="p-6 bg-card/80 backdrop-blur-sm border-border shadow-glass hover:shadow-glow transition-all duration-300 text-center group animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;