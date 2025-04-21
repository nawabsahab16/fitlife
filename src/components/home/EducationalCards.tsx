
import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Weight, LeafyGreen, Dumbbell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const EducationalCards = () => {
  

  const cardData = [
    {
      title: "Understanding BMI",
      description: "Body Mass Index is an important indicator of your overall health status.",
      icon: <Weight className="h-12 w-12 text-primary" />,
      content: [
        "BMI provides a reliable indicator of body fatness for most people",
        "It is used to screen for weight categories that may lead to health problems",
        "A healthy BMI range is typically between 18.5 to 24.9",
        "Regular BMI monitoring helps track progress towards fitness goals"
      ],
      link: "/bmi-calculator"
    },
    {
      title: "Nutrition Essentials",
      description: "Proper nutrition is the foundation of good health and optimal physical performance.",
      icon: <LeafyGreen className="h-12 w-12 text-primary" />,
      content: [
        "Balanced nutrition provides energy and supports body functions",
        "Macronutrients (proteins, carbs, fats) and micronutrients are essential",
        "Proper hydration is critical for overall health and exercise performance",
        "Nutrient timing can optimize workout results and recovery"
      ],
      link: "/nutrition"
    },
    {
      title: "Exercise Fundamentals",
      description: "Regular physical activity is essential for maintaining health and improving fitness.",
      icon: <Dumbbell className="h-12 w-12 text-primary" />,
      content: [
        "Combining cardio, strength training, and flexibility exercises is optimal",
        "Progressive overload principle helps continuously improve fitness",
        "Proper form prevents injuries and maximizes workout effectiveness",
        "Rest and recovery are essential components of any exercise program"
      ],
      link: "/exercises"
    }
  ];

  return (
    <section className="py-12 bg-background dark:bg-gray-800" ref={sectionRef}>
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-8 opacity-0 heading-animate">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
            Knowledge Center
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Fitness <span className="text-gradient">Education</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Understanding the science behind fitness helps you make informed decisions about your health journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cardData.map((card, index) => (
            <Card 
              key={index} 
              className="border border-border/40 shadow-lg hover:shadow-xl transition-shadow opacity-0 card-animate dark:bg-gray-900"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardHeader className="pb-2">
                <div className="mb-4">{card.icon}</div>
                <CardTitle className="text-xl text-foreground">{card.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{card.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {card.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="mr-2 mt-1 bg-primary/20 rounded-full p-1">
                        <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                          <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                        </svg>
                      </div>
                      <span className="text-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link to={card.link}>Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationalCards;
