
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { ArrowRight, Dumbbell, Loader2 } from "lucide-react";
import workoutPlansData, { WorkoutPlan } from '@/lib/workoutPlansData';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface WorkoutPlanGeneratorProps {
  triggerClassName?: string;
}

const formSchema = z.object({
  goal: z.enum(["weight-loss", "muscle-building", "strength", "general-fitness"], {
    required_error: "Please select a fitness goal.",
  }),
  level: z.enum(["beginner", "intermediate", "advanced"], {
    required_error: "Please select your fitness level.",
  }),
  focus: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const WorkoutPlanGenerator: React.FC<WorkoutPlanGeneratorProps> = ({ triggerClassName }) => {
  const [step, setStep] = useState<'form' | 'loading' | 'result'>('form');
  const [generatedPlan, setGeneratedPlan] = useState<WorkoutPlan | null>(null);
  const [open, setOpen] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      goal: undefined,
      level: undefined,
      focus: "",
    },
  });

  const onSubmit = (values: FormValues) => {
    setStep('loading');
  
    setTimeout(() => {
      
      const matchingPlans = workoutPlansData.filter(
        plan => plan.category === values.goal && plan.level === values.level
      );
      
      if (matchingPlans.length > 0) {

        const selectedPlan = matchingPlans[Math.floor(Math.random() * matchingPlans.length)];
        setGeneratedPlan(selectedPlan);
        setStep('result');
        
        toast({
          title: "Workout Plan Generated",
          description: "Your personalized plan is ready!",
        });
      } else {
        setStep('form');
        toast({
          title: "No matching plans found",
          description: "Please try different criteria",
          variant: "destructive",
        });
      }
    }, 2000);
  };

  const resetGenerator = () => {
    form.reset();
    setGeneratedPlan(null);
    setStep('form');
  };

  const handleDialogChange = (open: boolean) => {
    setOpen(open);
    if (!open) {
      resetGenerator();
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleDialogChange}>
      <DialogTrigger asChild>
        <Button className={triggerClassName}>
          Get Started
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl md:text-2xl font-bold text-center mb-2">
            {step === 'form' && "Create Your Custom Workout Plan"}
            {step === 'loading' && "Generating Your Plan"}
            {step === 'result' && "Your Personalized Workout Plan"}
          </DialogTitle>
        </DialogHeader>

        {step === 'form' && (
          <div className="py-4">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Dumbbell className="h-8 w-8 text-primary" />
              </div>
            </div>
            
            <p className="text-center text-muted-foreground mb-6">
              Answer a few questions and our AI will create a personalized workout plan tailored to your goals and fitness level.
            </p>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="goal"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="text-base font-medium">What is your main fitness goal?</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0 rounded-md border p-4">
                            <FormControl>
                              <RadioGroupItem value="weight-loss" />
                            </FormControl>
                            <FormLabel className="font-normal cursor-pointer flex-1">
                              Weight Loss
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0 rounded-md border p-4">
                            <FormControl>
                              <RadioGroupItem value="muscle-building" />
                            </FormControl>
                            <FormLabel className="font-normal cursor-pointer flex-1">
                              Muscle Building
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0 rounded-md border p-4">
                            <FormControl>
                              <RadioGroupItem value="strength" />
                            </FormControl>
                            <FormLabel className="font-normal cursor-pointer flex-1">
                              Strength
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0 rounded-md border p-4">
                            <FormControl>
                              <RadioGroupItem value="general-fitness" />
                            </FormControl>
                            <FormLabel className="font-normal cursor-pointer flex-1">
                              General Fitness
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="level"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="text-base font-medium">What is your current fitness level?</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0 rounded-md border p-4">
                            <FormControl>
                              <RadioGroupItem value="beginner" />
                            </FormControl>
                            <FormLabel className="font-normal cursor-pointer flex-1">
                              Beginner
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0 rounded-md border p-4">
                            <FormControl>
                              <RadioGroupItem value="intermediate" />
                            </FormControl>
                            <FormLabel className="font-normal cursor-pointer flex-1">
                              Intermediate
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0 rounded-md border p-4">
                            <FormControl>
                              <RadioGroupItem value="advanced" />
                            </FormControl>
                            <FormLabel className="font-normal cursor-pointer flex-1">
                              Advanced
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="focus"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-medium">Any specific areas you want to focus on? (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="E.g., arms, core, endurance..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full button-gradient">
                  Generate My Plan <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Form>
          </div>
        )}

        {step === 'loading' && (
          <div className="py-10 flex flex-col items-center justify-center">
            <div className="animate-pulse mb-6">
              <Loader2 className="h-12 w-12 text-primary animate-spin" />
            </div>
            <p className="text-center text-muted-foreground">
              Our AI is analyzing your goals and creating the perfect workout plan for you...
            </p>
          </div>
        )}

        {step === 'result' && generatedPlan && (
          <div className="py-4">
            <div className="bg-muted/30 rounded-lg p-4 mb-6">
              <h3 className="font-bold text-xl mb-1">{generatedPlan.title}</h3>
              <p className="text-muted-foreground text-sm mb-3">{generatedPlan.description}</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  {generatedPlan.level.charAt(0).toUpperCase() + generatedPlan.level.slice(1)}
                </span>
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  {generatedPlan.duration}
                </span>
              </div>
            </div>
            
            <div className="space-y-4">
              {generatedPlan.days.map((day, index) => (
                <div key={index} className="border rounded-lg overflow-hidden">
                  <div className="bg-muted/30 p-3 font-medium border-b">
                    {day.day} - {day.focus}
                  </div>
                  <div className="p-4">
                    <table className="w-full text-sm">
                      <thead className="text-left">
                        <tr className="border-b">
                          <th className="pb-2">Exercise</th>
                          <th className="pb-2 text-center">Sets</th>
                          <th className="pb-2 text-center">Reps</th>
                          <th className="pb-2 text-right">Rest</th>
                        </tr>
                      </thead>
                      <tbody>
                        {day.exercises.map((exercise, exIndex) => (
                          <tr key={exIndex} className={exIndex !== day.exercises.length - 1 ? "border-b" : ""}>
                            <td className="py-2">{exercise.name}</td>
                            <td className="py-2 text-center">{exercise.sets}</td>
                            <td className="py-2 text-center">{exercise.reps}</td>
                            <td className="py-2 text-right">{exercise.rest}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-between mt-6">
              <Button variant="outline" onClick={resetGenerator}>
                Create Another Plan
              </Button>
              <Button 
                className="button-gradient"
                onClick={() => {
                  toast({
                    title: "Plan Saved",
                    description: "Your workout plan has been saved successfully!",
                  });
                  setOpen(false);
                }}
              >
                Save Plan
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default WorkoutPlanGenerator;
