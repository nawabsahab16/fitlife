
import React, { useState, useEffect, useRef } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Search, Filter, Dumbbell, Play, ArrowRight, ChevronLeft, Award, Clock, X } from 'lucide-react';
import { Exercise } from '@/lib/exerciseData';
import { toast } from '@/hooks/use-toast';
import { Card, CardContent } from '@/components/ui/card';

// Sample exercise data import
import exerciseData from '@/lib/exerciseData';

const Exercises = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMuscleGroup, setSelectedMuscleGroup] = useState<string>('');
  const [selectedEquipment, setSelectedEquipment] = useState<string>('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('');
  const [filteredExercises, setFilteredExercises] = useState<Exercise[]>(exerciseData);
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const detailsRef = useRef<HTMLDivElement>(null);
  
  // Get unique values for filters
  const muscleGroups = ['All', ...Array.from(new Set(exerciseData.map(exercise => exercise.muscleGroup)))];
  const equipmentTypes = ['All', ...Array.from(new Set(exerciseData.map(exercise => exercise.equipment)))];
  const difficultyLevels = ['All', 'Beginner', 'Intermediate', 'Advanced'];
  
  useEffect(() => {
    let filtered = [...exerciseData];
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(exercise => 
        exercise.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        exercise.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by muscle group
    if (selectedMuscleGroup && selectedMuscleGroup !== 'All') {
      filtered = filtered.filter(exercise => exercise.muscleGroup === selectedMuscleGroup);
    }
    
    // Filter by equipment
    if (selectedEquipment && selectedEquipment !== 'All') {
      filtered = filtered.filter(exercise => exercise.equipment === selectedEquipment);
    }
    
    // Filter by difficulty
    if (selectedDifficulty && selectedDifficulty !== 'All') {
      filtered = filtered.filter(exercise => exercise.difficulty === selectedDifficulty);
    }
    
    setFilteredExercises(filtered);
  }, [searchTerm, selectedMuscleGroup, selectedEquipment, selectedDifficulty]);

  useEffect(() => {
    // Simulate loading state for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleExerciseClick = (exercise: Exercise) => {
    setSelectedExercise(exercise);
    
    if (detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    toast({
      title: `${exercise.name} selected`,
      description: `View details and instructions for this ${exercise.difficulty} level exercise.`,
      duration: 3000,
    });
  };

  const closeExerciseDetails = () => {
    setSelectedExercise(null);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-700';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-700';
      case 'Advanced':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const watchVideo = (url: string) => {
    window.open(url, '_blank');
  };

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedMuscleGroup('');
    setSelectedEquipment('');
    setSelectedDifficulty('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/30">
      <NavBar />
      <main className="flex-1 pt-16">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-slide-down">
              <div className="inline-block p-3 rounded-full bg-primary/10 text-primary mb-4">
                <Dumbbell size={32} className="animate-pulse" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-3 leading-tight">
                Explore Our <span className="text-gradient">Exercise Library</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Discover tailored workouts for every fitness level. Filter by muscle group, equipment, or difficulty to find your perfect routine.
              </p>
            </div>

            {/* Selected Exercise Details */}
            {selectedExercise && (
              <div ref={detailsRef} className="bg-white shadow-lg rounded-2xl overflow-hidden mb-12 animate-fade-in border border-border/40">
                <div className="relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
                  <img 
                    src={selectedExercise.image} 
                    alt={selectedExercise.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="px-3 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm rounded-full">
                        {selectedExercise.muscleGroup}
                      </span>
                      <span className="px-3 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm rounded-full">
                        {selectedExercise.equipment}
                      </span>
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                        selectedExercise.difficulty === 'Beginner' 
                          ? 'bg-green-400/20 text-green-50' 
                          : selectedExercise.difficulty === 'Intermediate'
                            ? 'bg-yellow-400/20 text-yellow-50' 
                            : 'bg-red-400/20 text-red-50'
                      }`}>
                        {selectedExercise.difficulty}
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold">{selectedExercise.name}</h2>
                  </div>
                  <button 
                    onClick={closeExerciseDetails} 
                    className="absolute top-4 right-4 bg-black/60 text-white p-2 rounded-full hover:bg-black/80 transition-colors"
                    aria-label="Close details"
                  >
                    <X size={24} />
                  </button>
                </div>
                
                <div className="p-6 md:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-3 flex items-center">
                          <span className="mr-2">About This Exercise</span>
                          <div className={`ml-auto px-3 py-1 text-xs font-medium rounded-full inline-flex items-center ${
                            selectedExercise.difficulty === 'Beginner' 
                              ? 'bg-green-100 text-green-700' 
                              : selectedExercise.difficulty === 'Intermediate'
                                ? 'bg-yellow-100 text-yellow-700' 
                                : 'bg-red-100 text-red-700'
                          }`}>
                            <Award size={14} className="mr-1" />
                            {selectedExercise.difficulty}
                          </div>
                        </h3>
                        <p className="text-muted-foreground">{selectedExercise.description}</p>
                      </div>
                      
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-4 flex items-center">
                          <span>Step-by-Step Instructions</span>
                        </h3>
                        <ol className="space-y-4">
                          {selectedExercise.instructions.map((instruction, index) => (
                            <li key={index} className="flex items-start">
                              <span className="flex items-center justify-center bg-primary/10 text-primary rounded-full w-8 h-8 font-semibold mr-3 flex-shrink-0">
                                {index + 1}
                              </span>
                              <span className="text-muted-foreground pt-1">{instruction}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                      
                      {selectedExercise.videoUrl && (
                        <div className="mb-6">
                          <button 
                            onClick={() => watchVideo(selectedExercise.videoUrl!)} 
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                          >
                            <Play size={18} />
                            Watch Video Demonstration
                          </button>
                        </div>
                      )}
                    </div>
                    
                    <div>
                      <Card className="bg-muted/30 border border-border/60">
                        <CardContent className="p-6">
                          <h3 className="text-lg font-semibold mb-4">Exercise Details</h3>
                          <div className="space-y-4">
                            <div>
                              <p className="text-sm text-muted-foreground">Muscle Group</p>
                              <p className="font-medium">{selectedExercise.muscleGroup}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Equipment Needed</p>
                              <p className="font-medium">{selectedExercise.equipment}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Difficulty Level</p>
                              <p className="font-medium">{selectedExercise.difficulty}</p>
                            </div>
                            
                            <div className="pt-4 border-t border-border/40">
                              <h4 className="font-medium mb-2">Recommended</h4>
                              <div className="space-y-2">
                                <p className="text-sm text-muted-foreground">
                                  <Clock size={14} className="inline mr-1" /> 
                                  {selectedExercise.difficulty === 'Beginner' ? '2-3 sets of 10-12 reps' : 
                                   selectedExercise.difficulty === 'Intermediate' ? '3-4 sets of 8-10 reps' : 
                                   '4-5 sets of 6-8 reps'}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  <Clock size={14} className="inline mr-1" /> 
                                  Rest: {selectedExercise.difficulty === 'Beginner' ? '60-90 seconds' : 
                                       selectedExercise.difficulty === 'Intermediate' ? '90-120 seconds' : 
                                       '2-3 minutes'}
                                </p>
                              </div>
                            </div>
                          </div>
                          
                          <button 
                            onClick={closeExerciseDetails} 
                            className="mt-6 w-full py-2 px-4 rounded-lg border border-primary/30 hover:bg-primary/5 transition-colors text-primary font-medium flex items-center justify-center"
                          >
                            <ChevronLeft size={18} className="mr-1" />
                            Back to Library
                          </button>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Filter and Exercise Cards */}
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden mb-12 border border-border/40">
              <div className="p-6 md:p-8">
                <div className="mb-8 bg-muted/30 p-6 md:p-8 rounded-xl border border-border/40">
                  <h2 className="text-xl font-bold mb-4">Find Your Perfect Workout</h2>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
                    <div className="relative lg:col-span-5">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <input
                        type="text"
                        placeholder="Search exercises by name or description..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-lg bg-white border border-input focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:col-span-7">
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Filter className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <select
                          value={selectedMuscleGroup}
                          onChange={(e) => setSelectedMuscleGroup(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 rounded-lg bg-white border border-input appearance-none focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none"
                        >
                          <option value="">Muscle Group</option>
                          {muscleGroups.map((group) => (
                            <option key={group} value={group}>{group}</option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                      
                      <div className="relative">
                        <select
                          value={selectedEquipment}
                          onChange={(e) => setSelectedEquipment(e.target.value)}
                          className="w-full px-4 py-3 rounded-lg bg-white border border-input appearance-none focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none"
                        >
                          <option value="">Equipment</option>
                          {equipmentTypes.map((equipment) => (
                            <option key={equipment} value={equipment}>{equipment}</option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                      
                      <div className="relative">
                        <select
                          value={selectedDifficulty}
                          onChange={(e) => setSelectedDifficulty(e.target.value)}
                          className="w-full px-4 py-3 rounded-lg bg-white border border-input appearance-none focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none"
                        >
                          <option value="">Difficulty</option>
                          {difficultyLevels.map((level) => (
                            <option key={level} value={level}>{level}</option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {isLoading ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                      <div key={item} className="flex flex-col rounded-xl overflow-hidden border border-border/40 h-[360px]">
                        <div className="aspect-video bg-muted animate-pulse w-full"></div>
                        <div className="p-5 flex-grow flex flex-col">
                          <div className="flex gap-2 mb-3">
                            <div className="h-6 w-16 bg-muted animate-pulse rounded-full"></div>
                            <div className="h-6 w-24 bg-muted animate-pulse rounded-full"></div>
                          </div>
                          <div className="h-7 w-3/4 bg-muted animate-pulse rounded mb-2"></div>
                          <div className="h-4 bg-muted animate-pulse rounded mb-1 w-full"></div>
                          <div className="h-4 bg-muted animate-pulse rounded mb-3 w-4/5"></div>
                          <div className="mt-auto flex justify-between items-center">
                            <div className="h-4 w-24 bg-muted animate-pulse rounded"></div>
                            <div className="h-4 w-20 bg-muted animate-pulse rounded"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : filteredExercises.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredExercises.map((exercise, index) => (
                      <div 
                        key={exercise.id} 
                        className="group bg-white border border-border/60 hover:border-primary/50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer animate-fade-in"
                        style={{ animationDelay: `${index * 0.05}s` }}
                        onClick={() => handleExerciseClick(exercise)}
                      >
                        <div className="aspect-video w-full overflow-hidden relative">
                          <img 
                            src={exercise.image} 
                            alt={exercise.name} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                            <button className="px-3 py-1.5 bg-white/20 backdrop-blur-sm text-white rounded-lg text-sm font-medium">
                              View Details
                            </button>
                          </div>
                        </div>
                        <div className="p-5">
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                              {exercise.muscleGroup}
                            </span>
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getDifficultyColor(exercise.difficulty)}`}>
                              {exercise.difficulty}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{exercise.name}</h3>
                          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                            {exercise.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">
                              {exercise.equipment}
                            </span>
                            <span className="text-primary text-sm font-medium group-hover:translate-x-1 transition-transform duration-300 flex items-center">
                              View details <ArrowRight size={14} className="ml-1" />
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16 bg-muted/20 rounded-xl">
                    <div className="inline-block p-3 rounded-full bg-muted mb-4">
                      <Dumbbell size={32} className="text-muted-foreground" />
                    </div>
                    <p className="text-muted-foreground text-lg mb-4">No exercises match your search criteria.</p>
                    <button 
                      onClick={resetFilters}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors font-medium"
                    >
                      Reset filters
                    </button>
                  </div>
                )}
                
                {filteredExercises.length > 0 && !isLoading && (
                  <div className="mt-8 text-center text-sm text-muted-foreground">
                    Showing {filteredExercises.length} of {exerciseData.length} exercises
                  </div>
                )}
              </div>
            </div>

            <div className="bg-white shadow-md rounded-2xl overflow-hidden border border-border/40">
              <div className="p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-6">Exercise Benefits Guide</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                        </svg>
                      </span>
                      Physical Benefits
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span><strong>Improved Strength</strong>: Regular resistance training increases muscle mass and strength</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span><strong>Weight Management</strong>: Exercise helps maintain a healthy body weight</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span><strong>Heart Health</strong>: Reduces risk of cardiovascular disease</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span><strong>Bone Density</strong>: Weight-bearing exercises improve bone health</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span><strong>Better Sleep</strong>: Regular exercise can improve sleep quality</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                        </svg>
                      </span>
                      Mental Benefits
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span><strong>Stress Relief</strong>: Exercise reduces stress hormones</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span><strong>Mood Enhancement</strong>: Releases endorphins that improve mood</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span><strong>Improved Focus</strong>: Regular exercise enhances cognitive function</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span><strong>Anxiety Reduction</strong>: Can help reduce symptoms of anxiety</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span><strong>Better Self-Esteem</strong>: Accomplishing fitness goals builds confidence</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-10 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                      <h3 className="text-xl font-bold mb-2">Ready to start your fitness journey?</h3>
                      <p className="text-muted-foreground">Create a personalized workout plan based on your goals and fitness level.</p>
                    </div>
                    <button className="px-6 py-3 button-gradient rounded-full font-medium whitespace-nowrap">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Exercises;
