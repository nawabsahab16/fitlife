
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Activity, Calculator, Apple, Dumbbell } from 'lucide-react';

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    
    const featureElements = document.querySelectorAll('.feature-card');
    featureElements.forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      featureElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  const features = [
    {
      icon: <Calculator className="h-12 w-12 text-primary" />,
      title: "BMI Calculator",
      description: "Calculate your Body Mass Index to understand your current health status and set realistic fitness goals.",
      link: "/bmi-calculator"
    },
    {
      icon: <Apple className="h-12 w-12 text-primary" />,
      title: "Nutrition Database",
      description: "Access detailed nutritional information for thousands of food items to make informed dietary choices.",
      link: "/nutrition"
    },
    {
      icon: <Dumbbell className="h-12 w-12 text-primary" />,
      title: "Exercise Library",
      description: "Explore a comprehensive collection of exercises categorized by muscle groups and difficulty levels.",
      link: "/exercises"
    },
    {
      icon: <Activity className="h-12 w-12 text-primary" />,
      title: "Personalized Plans",
      description: "Get customized workout and nutrition plans tailored to your specific goals and fitness level.",
      link: "/"
    }
  ];

  return (
    <section className="py-16 bg-muted/30 dark:bg-gray-900" ref={featuresRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 opacity-0 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Everything You Need For Your <span className="text-gradient">Fitness Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our comprehensive tools and resources are designed to support every aspect of your health and fitness goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card opacity-0 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6 flex flex-col h-full">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{feature.description}</p>
                <Link 
                  to={feature.link} 
                  className="text-primary font-medium hover:underline inline-flex items-center"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ArrowRight = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 20 20" 
    fill="currentColor" 
    className={className}
  >
    <path 
      fillRule="evenodd" 
      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" 
      clipRule="evenodd" 
    />
  </svg>
);

export default Features;
