
import React, { useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Marathon Runner",
    image: "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    quote: "FitLife completely transformed my marathon training. The personalized plans and nutrition tracking helped me shave 15 minutes off my personal best!",
    rating: 5
  },
  {
    id: 2,
    name: "Rahul Patel",
    role: "Fitness Enthusiast",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    quote: "As someone who struggled with consistency, the workout plans on FitLife have been a game-changer. I've gained 12 pounds of muscle in 3 months!",
    rating: 5
  },
  {
    id: 3,
    name: "Ananya Singh",
    role: "Yoga Instructor",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    quote: "The nutrition database is incredibly comprehensive. It's helped me optimize my diet for more energy and better recovery between yoga sessions.",
    rating: 4
  }
];

const Testimonials = () => {
  const testimonialRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
           
            const heading = entry.target.querySelector('.heading-animate');
            if (heading) {
              heading.classList.add('animate-slide-up');
              heading.classList.remove('opacity-0');
            }
            
           
            const carousel = entry.target.querySelector('.carousel-animate');
            if (carousel) {
              carousel.classList.add('animate-slide-up');
              carousel.classList.remove('opacity-0');
            }
            
            const stats = entry.target.querySelectorAll('.stat-animate');
            stats.forEach((stat, index) => {
              setTimeout(() => {
                stat.classList.add('animate-slide-up');
                stat.classList.remove('opacity-0');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (testimonialRef.current) {
      observer.observe(testimonialRef.current);
    }
    
    return () => {
      if (testimonialRef.current) {
        observer.unobserve(testimonialRef.current);
      }
    };
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-muted/20" ref={testimonialRef}>
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 opacity-0 heading-animate">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
            Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transformations That <span className="text-gradient">Inspire</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover how FitLife has helped thousands of people achieve their health and fitness goals.
          </p>
        </div>
        
        <div className="opacity-0 carousel-animate transition-all duration-700 delay-200">
          <Carousel
            opts={{
              loop: true,
              align: "center",
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2 pl-4">
                  <div className="p-1 h-full">
                    <div className="bg-white rounded-2xl shadow-md h-full p-6 md:p-8 flex flex-col border border-border/40">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-full overflow-hidden">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{testimonial.name}</h3>
                          <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                        </div>
                        <div className="ml-auto">
                          <Quote className="h-8 w-8 text-primary/20" />
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-6 flex-grow italic">"{testimonial.quote}"</p>
                      
                      <div className="flex items-center mt-auto">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="-left-12 bg-white" />
              <CarouselNext className="-right-12 bg-white" />
            </div>
          </Carousel>
        </div>
        
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { number: '94%', text: 'Customer Satisfaction', description: 'Our users report high satisfaction with their fitness results' },
            { number: '78%', text: 'Achieve Their Goals', description: 'Users who stick with our plans for 3+ months reach their targets' },
            { number: '25k+', text: 'Active Community', description: 'Join our thriving community of fitness enthusiasts worldwide' },
          ].map((stat, index) => (
            <div 
              key={index} 
              className="glass-panel rounded-2xl p-8 text-center hover:shadow-lg transition-shadow border border-border/40 bg-white opacity-0 stat-animate"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.number}</div>
              <h3 className="text-xl font-semibold mb-2">{stat.text}</h3>
              <p className="text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
