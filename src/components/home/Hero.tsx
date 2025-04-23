
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      { threshold: 0.1 }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background -z-10"></div>
      <div className="absolute top-20 left-0 right-0 h-[500px] bg-gradient-to-b from-primary/5 to-transparent -z-10 animate-glow-pulse"></div>

      <div 
        ref={heroRef}
        className="container mx-auto px-4 md:px-6 py-24 transition-all duration-1000 transform opacity-0 translate-y-10"
      >
        <div className="flex flex-col items-center text-center space-y-8 md:space-y-12">
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight">
              Transform Your Body, <span className="text-gradient">Transform Your Life</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Personalized fitness solutions to help you achieve your health goals with science-backed methods and expert guidance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            <Link
              to="/bmi-calculator"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full button-gradient font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Calculate Your BMI
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/exercises"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white/80 shadow-md hover:shadow-lg hover:bg-white transition-all duration-300"
            >
              Explore Workouts
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl pt-12">
            {[
              { number: '500+', text: 'Exercise Variations' },
              { number: '10k+', text: 'Nutrition Data Points' },
              { number: '250k+', text: 'Users Worldwide' },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="glass-panel rounded-2xl p-6 flex flex-col items-center justify-center animate-delayed-fade-in" 
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <span className="text-3xl md:text-4xl font-bold text-gradient">{stat.number}</span>
                <span className="text-muted-foreground">{stat.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

  
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent -z-10"></div>
    </div>
  );
};

export default Hero;
