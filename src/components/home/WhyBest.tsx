
import React, { useEffect, useRef } from 'react';
import { Weight, Salad, Dumbbell } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const WhyBest = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.card-animate');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-slide-up');
                card.classList.remove('opacity-0');
              }, index * 100);
            });
          
            const heading = entry.target.querySelector('.heading-animate');
            if (heading) {
              heading.classList.add('animate-slide-up');
              heading.classList.remove('opacity-0');
            }
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-gray-50" id="why-best" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 opacity-0 heading-animate">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why We're The <span className="text-gradient">Best</span></h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our comprehensive fitness platform offers everything you need to achieve your health and fitness goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {[
            {
              icon: <Weight className="h-10 w-10 text-primary" />,
              title: "Accurate BMI Calculations",
              description: "Our advanced BMI calculator provides precise measurements and personalized insights to help you understand your body composition and set realistic goals.",
              features: [
                "Body fat percentage estimation",
                "Weight range recommendations",
                "Visual progress tracking",
                "Age and gender adjusted results"
              ]
            },
            {
              icon: <Salad className="h-10 w-10 text-primary" />,
              title: "Personalized Nutrition",
              description: "Access tailored nutritional guidance based on your goals, dietary preferences, and current health status.",
              features: [
                "Customized meal plans",
                "Calorie and macro tracking",
                "Food alternatives suggestions",
                "Dietary restriction support"
              ]
            },
            {
              icon: <Dumbbell className="h-10 w-10 text-primary" />,
              title: "Comprehensive Exercise Library",
              description: "Browse through hundreds of exercises categorized by difficulty, muscle groups, and equipment requirements.",
              features: [
                "Video demonstrations",
                "Proper form instructions",
                "Beginner to advanced progressions",
                "Alternative exercises suggestions"
              ]
            }
          ].map((item, index) => (
            <Card key={index} className="border-none shadow-lg opacity-0 card-animate transition-all duration-700" style={{ transitionDelay: `${index * 100}ms` }}>
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 p-3 rounded-full mb-4">
                  {item.icon}
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {item.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="mr-2 mt-1 bg-primary/20 rounded-full p-1">
                        <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                          <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                        </svg>
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBest;
