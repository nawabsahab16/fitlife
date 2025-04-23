import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const CallToAction = () => {
  const ctaRef = useRef<HTMLDivElement>(null);
  
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
    
    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }
    
    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);

  return (
    <section className="py-24 bg-white overflow-hidden" ref={ctaRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80 z-0"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2675&q=80')] bg-cover bg-center opacity-15 mix-blend-overlay z-0"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 md:p-16">
            <div className="opacity-0 translate-y-4 transition-all duration-700">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Life Through Fitness?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-md">
                Join thousands who have already changed their lives with our personalized approach to health and fitness.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  'Personalized Workout Plans',
                  'Comprehensive Nutrition Tracking',
                  'Expert-Designed Exercise Library',
                  'Progress Tracking Tools'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-white mr-3 flex-shrink-0" />
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Link 
                to="/bmi-calculator" 
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary font-medium rounded-full shadow-lg hover:bg-gray-100 transition-colors"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            
            <div className="opacity-0 translate-y-4 transition-all duration-700 delay-200 lg:translate-x-12">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden transform rotate-1">
                <img 
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" 
                  alt="Person tracking fitness goals" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Start Your Journey Today</h3>
                  <p className="text-muted-foreground mb-4">
                    Calculate your BMI, create a personalized workout plan, and track your progress all in one place.
                  </p>
                  <div className="flex space-x-2">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <div className="h-2 w-2 rounded-full bg-secondary"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
