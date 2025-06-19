
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import StrikingEffects from '@/components/StrikingEffects';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Modern shopping experience with seamless checkout and inventory management",
      category: "web",
      image: "bg-gradient-to-br from-blue-500 to-purple-600",
      tech: ["React", "TypeScript", "Stripe", "Tailwind"],
      status: "live"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description: "Secure financial management with biometric authentication",
      category: "mobile",
      image: "bg-gradient-to-br from-green-500 to-teal-600",
      tech: ["React Native", "Node.js", "PostgreSQL", "JWT"],
      status: "development"
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description: "Real-time data visualization with advanced filtering and insights",
      category: "dashboard",
      image: "bg-gradient-to-br from-orange-500 to-red-600",
      tech: ["Vue.js", "D3.js", "Express", "MongoDB"],
      status: "live"
    },
    {
      id: 4,
      title: "Social Media Platform",
      description: "Connect and share with advanced privacy controls and AI moderation",
      category: "web",
      image: "bg-gradient-to-br from-pink-500 to-purple-600",
      tech: ["Next.js", "GraphQL", "Prisma", "AWS"],
      status: "live"
    },
    {
      id: 5,
      title: "Fitness Tracking App",
      description: "Comprehensive workout tracking with personalized recommendations",
      category: "mobile",
      image: "bg-gradient-to-br from-cyan-500 to-blue-600",
      tech: ["Flutter", "Firebase", "TensorFlow", "Material"],
      status: "development"
    },
    {
      id: 6,
      title: "Project Management Tool",
      description: "Collaborative workspace with advanced project tracking and team communication",
      category: "dashboard",
      image: "bg-gradient-to-br from-indigo-500 to-purple-600",
      tech: ["Angular", "NestJS", "Redis", "Docker"],
      status: "live"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'dashboard', label: 'Dashboards' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <StrikingEffects />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent animate-fade-in">
              Our Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Showcasing our finest digital masterpieces, each crafted with precision and passion
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
                className={`transition-all duration-300 ${
                  activeFilter === filter.id 
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white' 
                    : 'hover:bg-purple-600/10'
                }`}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="group overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`h-48 ${project.image} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'live' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                    }`}>
                      {project.status === 'live' ? 'Live' : 'In Development'}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-4">
                      <Button size="sm" variant="secondary">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View
                      </Button>
                      <Button size="sm" variant="secondary">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-purple-500/10 text-purple-400 rounded text-xs font-medium border border-purple-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
