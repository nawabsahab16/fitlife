
import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import WhyBest from '@/components/home/WhyBest';
import EnrollmentForm from '@/components/home/EnrollmentForm';
import About from '@/components/home/About';
import Testimonials from '@/components/home/Testimonials';
import PhotoGallery from '@/components/home/PhotoGallery';
import CallToAction from '@/components/home/CallToAction';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import EducationalCards from '@/components/home/EducationalCards';
import { ThemeProvider } from '@/components/theme-provider';
import ThemeToggle from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import { ArrowRight, Dumbbell } from 'lucide-react';

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <div className="fixed bottom-4 right-4 z-50">
          <ThemeToggle />
        </div>
        <main className="flex-grow flex flex-col">
          <Hero />
          <Features />
          <WhyBest />
          

          <section className="py-12 bg-primary/5">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2 space-y-4">
                  <div className="inline-block p-2 bg-primary/10 rounded-lg mb-2">
                    <Dumbbell className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    Get Your <span className="text-gradient">Personalized</span> Workout Plan
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    Our AI-powered workout planner creates custom routines tailored to your goals, fitness level, and preferences. Take the guesswork out of your training!
                  </p>
                  <div className="pt-4">
                    <Link to="/workout-plans">
                      <Button size="lg" className="button-gradient">
                        Create My Plan <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="md:w-1/2 bg-card rounded-lg shadow-lg p-6">
                  <div className="text-center mb-4">
                    <span className="text-sm text-muted-foreground bg-secondary/20 px-3 py-1 rounded-full">
                      Smart AI Technology
                    </span>
                    <h3 className="text-xl font-bold mt-2">How It Works</h3>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Select your fitness goal (weight loss, muscle gain, etc.)",
                      "Indicate your current fitness level",
                      "Specify any preferences or limitations",
                      "Get a complete weekly plan with exercises, sets, reps & rest times",
                      "Track your progress and adjust as needed"
                    ].map((step, i) => (
                      <li key={i} className="flex items-start">
                        <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">
                          {i + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
          
          <EnrollmentForm />
          <Testimonials />
          <EducationalCards />
          <PhotoGallery />
          <CallToAction />
          <About />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
