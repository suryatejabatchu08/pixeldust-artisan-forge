
import Navbar from '@/components/Navbar';
import StrikingEffects from '@/components/StrikingEffects';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Award, Coffee, Code2 } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Users className="h-8 w-8" />, value: "50+", label: "Happy Clients" },
    { icon: <Code2 className="h-8 w-8" />, value: "100+", label: "Projects Completed" },
    { icon: <Award className="h-8 w-8" />, value: "15+", label: "Awards Won" },
    { icon: <Coffee className="h-8 w-8" />, value: "1000+", label: "Cups of Coffee" }
  ];

  const team = [
    {
      name: "Alex Chen",
      role: "Creative Director",
      specialty: "UI/UX Design & Strategy",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Sarah Johnson",
      role: "Lead Developer",
      specialty: "Full-Stack Development",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Marcus Rivera",
      role: "Technical Architect", 
      specialty: "System Design & Performance",
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <StrikingEffects />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent animate-fade-in">
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              We are digital artisans who believe that great design and flawless code can change the world
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-br from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                  Our Story
                </h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    Founded in 2020, Pixel Dust Artisan Forge emerged from a simple belief: that every pixel matters, every interaction should delight, and every user deserves an exceptional digital experience.
                  </p>
                  <p>
                    Our team of passionate designers and developers combines artistic vision with technical excellence to create digital solutions that not only look stunning but perform flawlessly across all platforms.
                  </p>
                  <p>
                    We don't just build websites and applications; we craft digital experiences that tell stories, solve problems, and create meaningful connections between brands and their audiences.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg p-8 backdrop-blur-sm border border-border/40">
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="flex justify-center mb-3 text-purple-400">
                          {stat.icon}
                        </div>
                        <div className="text-2xl font-bold mb-1">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The creative minds behind every pixel-perfect creation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card 
                key={index} 
                className="group border-0 bg-card/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${member.color} mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full rounded-full bg-black/20 flex items-center justify-center text-white text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <div className="text-purple-400 font-medium mb-3">{member.role}</div>
                  <p className="text-muted-foreground text-sm">{member.specialty}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we create
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Pixel Perfection",
                description: "Every detail matters. We obsess over the smallest elements to create experiences that feel polished and professional."
              },
              {
                title: "User-Centric Design",
                description: "We design for real people with real needs, ensuring every interaction is intuitive and delightful."
              },
              {
                title: "Innovation & Magic",
                description: "We blend cutting-edge technology with creative vision to deliver solutions that surprise and inspire."
              }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
