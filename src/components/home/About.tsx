import React, { useEffect, useRef } from 'react';
import { Shield, Heart, Award } from 'lucide-react';

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    
    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section className="py-24 bg-background" ref={aboutRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 opacity-0 translate-y-4 transition-all duration-700">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
              About FitLife
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              We're on a mission to make fitness <span className="text-gradient">accessible to everyone</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              FitLife was created with a simple goal: to provide accurate, science-backed fitness and nutrition information to help people make informed decisions about their health.
            </p>
            <p className="text-muted-foreground">
              Our team of fitness professionals, nutritionists, and technology experts work together to deliver the most comprehensive and user-friendly fitness experience available online.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {[
                { 
                  icon: <Shield className="h-8 w-8 text-primary mb-2" />,
                  title: "Science-Backed",
                  description: "All our content and recommendations are based on peer-reviewed research"
                },
                { 
                  icon: <Heart className="h-8 w-8 text-primary mb-2" />,
                  title: "User-Focused",
                  description: "Designed with your goals and needs at the center of everything we do"
                },
                { 
                  icon: <Award className="h-8 w-8 text-primary mb-2" />,
                  title: "Expert-Created",
                  description: "Developed by certified fitness and nutrition professionals"
                }
              ].map((item, index) => (
                <div key={index} className="p-4 rounded-xl bg-muted/30">
                  {item.icon}
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative opacity-0 translate-y-4 transition-all duration-700 delay-300">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 mix-blend-multiply"></div>
              <img 
                src="https://images.unsplash.com/photo-1571019613914-85f342c6a11e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
                alt="Fitness enthusiasts working out" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 glass-panel rounded-xl p-4 max-w-xs shadow-lg">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Trusted by fitness professionals</p>
                  <p className="text-sm text-muted-foreground">Our platform is used by personal trainers and gyms worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
