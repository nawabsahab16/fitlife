
import React from 'react';
import { Helmet } from 'react-helmet';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/theme-provider';
import ThemeToggle from '@/components/ThemeToggle';
import WorkoutPlanGenerator from '@/components/WorkoutPlanGenerator';

const WorkoutPlans = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <Helmet>
        <title>Personalized Workout Plans | FitLife Gym</title>
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <div className="fixed bottom-4 right-4 z-50">
          <ThemeToggle />
        </div>
        <main className="flex-grow pt-16 pb-12">
          <section className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Personalized <span className="text-gradient">Workout Plans</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Get a customized workout plan tailored to your specific goals, fitness level, and preferences. Our AI-powered system creates the perfect routine just for you.
              </p>
            </div>

            <div className="max-w-3xl mx-auto bg-card rounded-lg shadow-lg overflow-hidden mb-12">
              <div className="p-6 md:p-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">AI Workout Plan Generator</h2>
                  <p className="text-muted-foreground">
                    Answer a few questions and our AI will create a personalized workout plan tailored to your goals and fitness level.
                  </p>
                </div>
                
                <WorkoutPlanGenerator triggerClassName="w-full md:w-auto button-gradient mt-4" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-card rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-3">Why Personalized Plans Matter</h3>
                <p className="text-muted-foreground mb-4">
                  Generic workout routines often fail because they don't account for your unique needs, limitations, and goals. Our AI-generated plans are specifically designed for your body, fitness level, and objectives.
                </p>
                <ul className="space-y-2">
                  {[
                    "Optimized for your specific goals",
                    "Adjusted for your current fitness level",
                    "Balanced to prevent injuries and burnout",
                    "Progressive to ensure continued results"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary mr-2">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-card rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-3">How It Works</h3>
                <ol className="space-y-4">
                  {[
                    "Select your primary fitness goal (weight loss, muscle building, etc.)",
                    "Indicate your current fitness level (beginner, intermediate, advanced)",
                    "Specify any preferences or limitations",
                    "Our AI generates a customized workout plan",
                    "Follow your plan and track your progress"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">
                        {i + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default WorkoutPlans;
