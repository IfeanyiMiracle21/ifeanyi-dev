import { Card } from "@/components/ui/card";
import { Code2, Palette, Database, Smartphone, Globe, Zap } from "lucide-react";

const Skills = () => {
  const frontendSkills = [
    { name: "React & Next.js", icon: Code2, level: 95 },
    { name: "JavaScript/TypeScript", icon: Code2, level: 90 },
    { name: "HTML5 & CSS3", icon: Palette, level: 95 },
    { name: "Tailwind CSS", icon: Palette, level: 88 },
    { name: "Responsive Design", icon: Smartphone, level: 92 },
    { name: "API Integration", icon: Database, level: 85 }
  ];

  const wordpressSkills = [
    { name: "WordPress Development", icon: Globe, level: 90 },
    { name: "Custom Themes", icon: Palette, level: 88 },
    { name: "Plugin Development", icon: Zap, level: 82 },
    { name: "WooCommerce", icon: Database, level: 85 },
    { name: "PHP", icon: Code2, level: 80 },
    { name: "MySQL", icon: Database, level: 78 }
  ];

  const SkillCard = ({ skills, title, gradient }: { skills: any[], title: string, gradient: string }) => (
    <Card className="p-8 bg-card/80 backdrop-blur-sm border-border shadow-glass hover:shadow-glow transition-all duration-300 group">
      <div className={`w-full h-1 ${gradient} rounded-full mb-6`} />
      <h3 className="text-2xl font-bold mb-6 text-foreground group-hover:text-primary transition-colors">
        {title}
      </h3>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={skill.name} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-3">
                <skill.icon className="w-5 h-5 text-primary" />
                <span className="font-medium text-foreground">{skill.name}</span>
              </div>
              <span className="text-sm text-muted-foreground">{skill.level}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className={`h-2 ${gradient} rounded-full transition-all duration-1000 ease-out`}
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating exceptional digital experiences with cutting-edge technologies
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <SkillCard 
            skills={frontendSkills} 
            title="Frontend Development" 
            gradient="bg-gradient-to-r from-primary to-primary-glow"
          />
          <SkillCard 
            skills={wordpressSkills} 
            title="WordPress Development" 
            gradient="bg-gradient-to-r from-accent to-primary-glow"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;