
export interface Exercise {
  name: string;
  sets: number;
  reps: string;
  rest: string;
}

export interface WorkoutDay {
  day: string;
  focus: string;
  exercises: Exercise[];
}

export interface WorkoutPlan {
  id: string;
  title: string;
  category: string;
  level: string;
  duration: string;
  description: string;
  days: WorkoutDay[];
}

const workoutPlansData: WorkoutPlan[] = [
  // WEIGHT LOSS PLANS
  {
    id: "weight-loss-beginner",
    title: "Beginner Fat Burn",
    category: "weight-loss",
    level: "beginner",
    duration: "4 weeks",
    description: "A beginner-friendly workout plan focused on burning calories and building basic fitness with a mix of cardio and light resistance training.",
    days: [
      {
        day: "Monday",
        focus: "Full Body + Cardio",
        exercises: [
          { name: "Bodyweight Squats", sets: 3, reps: "12-15", rest: "45 sec" },
          { name: "Push-ups (or Modified Push-ups)", sets: 3, reps: "8-12", rest: "45 sec" },
          { name: "Plank", sets: 3, reps: "20-30 sec hold", rest: "45 sec" },
          { name: "Walking Lunges", sets: 2, reps: "10 each leg", rest: "45 sec" },
          { name: "Brisk Walking or Light Jogging", sets: 1, reps: "20 minutes", rest: "N/A" }
        ]
      },
      {
        day: "Tuesday",
        focus: "Cardio",
        exercises: [
          { name: "Brisk Walking", sets: 1, reps: "10 min", rest: "N/A" },
          { name: "Jumping Jacks", sets: 3, reps: "30 sec", rest: "30 sec" },
          { name: "Mountain Climbers", sets: 3, reps: "30 sec", rest: "30 sec" },
          { name: "High Knees", sets: 3, reps: "30 sec", rest: "30 sec" },
          { name: "Cool Down Walking", sets: 1, reps: "5 min", rest: "N/A" }
        ]
      },
      {
        day: "Wednesday",
        focus: "Rest Day",
        exercises: [
          { name: "Light Stretching", sets: 1, reps: "10-15 min", rest: "N/A" },
          { name: "Walking", sets: 1, reps: "15-20 min", rest: "N/A" }
        ]
      },
      {
        day: "Thursday",
        focus: "Full Body Strength",
        exercises: [
          { name: "Bodyweight Squats", sets: 3, reps: "12-15", rest: "45 sec" },
          { name: "Glute Bridges", sets: 3, reps: "12-15", rest: "45 sec" },
          { name: "Modified Push-ups", sets: 3, reps: "8-12", rest: "45 sec" },
          { name: "Bent Over Dumbbell Rows", sets: 3, reps: "12", rest: "45 sec" },
          { name: "Bicycle Crunches", sets: 3, reps: "10 each side", rest: "45 sec" }
        ]
      },
      {
        day: "Friday",
        focus: "Cardio & Core",
        exercises: [
          { name: "Jumping Jacks", sets: 1, reps: "3 min", rest: "N/A" },
          { name: "Bodyweight Lunges", sets: 3, reps: "10 each leg", rest: "45 sec" },
          { name: "Plank", sets: 3, reps: "20-30 sec", rest: "30 sec" },
          { name: "Russian Twists", sets: 3, reps: "10 each side", rest: "30 sec" },
          { name: "Brisk Walking", sets: 1, reps: "15 min", rest: "N/A" }
        ]
      },
      {
        day: "Saturday",
        focus: "Active Recovery",
        exercises: [
          { name: "Walking/Light Hiking", sets: 1, reps: "30-45 min", rest: "N/A" },
          { name: "Full Body Stretching", sets: 1, reps: "15 min", rest: "N/A" }
        ]
      },
      {
        day: "Sunday",
        focus: "Rest Day",
        exercises: [
          { name: "Complete Rest", sets: 1, reps: "N/A", rest: "N/A" }
        ]
      }
    ]
  },
  {
    id: "weight-loss-intermediate",
    title: "Intermediate Fat Burner",
    category: "weight-loss",
    level: "intermediate",
    duration: "6 weeks",
    description: "A balanced plan combining HIIT cardio sessions with targeted resistance training to accelerate fat loss while preserving muscle mass.",
    days: [
      {
        day: "Monday",
        focus: "Lower Body + HIIT",
        exercises: [
          { name: "Squats", sets: 4, reps: "12-15", rest: "45 sec" },
          { name: "Romanian Deadlifts", sets: 3, reps: "12", rest: "45 sec" },
          { name: "Walking Lunges", sets: 3, reps: "12 each leg", rest: "45 sec" },
          { name: "HIIT: 30s Sprint / 30s Walk", sets: 8, reps: "30 sec each", rest: "N/A" }
        ]
      },
      {
        day: "Tuesday",
        focus: "Upper Body Push + Core",
        exercises: [
          { name: "Push-ups", sets: 3, reps: "10-15", rest: "45 sec" },
          { name: "Dumbbell Shoulder Press", sets: 3, reps: "12", rest: "45 sec" },
          { name: "Tricep Dips", sets: 3, reps: "12", rest: "45 sec" },
          { name: "Plank", sets: 3, reps: "45 sec hold", rest: "30 sec" },
          { name: "Russian Twists", sets: 3, reps: "20 total", rest: "30 sec" }
        ]
      },
      {
        day: "Wednesday",
        focus: "Cardio",
        exercises: [
          { name: "Steady State Cardio (Running, Cycling, etc.)", sets: 1, reps: "30-40 min", rest: "N/A" }
        ]
      },
      {
        day: "Thursday",
        focus: "Upper Body Pull + HIIT",
        exercises: [
          { name: "Dumbbell Rows", sets: 3, reps: "12 each arm", rest: "45 sec" },
          { name: "Lat Pulldowns", sets: 3, reps: "12", rest: "45 sec" },
          { name: "Bicep Curls", sets: 3, reps: "12", rest: "45 sec" },
          { name: "Tabata: 20s Burpees / 10s Rest", sets: 8, reps: "20 sec work", rest: "10 sec" }
        ]
      },
      {
        day: "Friday",
        focus: "Full Body Circuit",
        exercises: [
          { name: "Circuit: Squats", sets: 3, reps: "15", rest: "15 sec" },
          { name: "Circuit: Push-ups", sets: 3, reps: "12", rest: "15 sec" },
          { name: "Circuit: Jumping Jacks", sets: 3, reps: "30", rest: "15 sec" },
          { name: "Circuit: Mountain Climbers", sets: 3, reps: "20 total", rest: "15 sec" },
          { name: "Circuit: Bodyweight Rows", sets: 3, reps: "12", rest: "60 sec after circuit" }
        ]
      },
      {
        day: "Saturday",
        focus: "Low Intensity Cardio",
        exercises: [
          { name: "Brisk Walking/Light Hiking", sets: 1, reps: "45-60 min", rest: "N/A" }
        ]
      },
      {
        day: "Sunday",
        focus: "Rest Day",
        exercises: [
          { name: "Light Stretching", sets: 1, reps: "10-15 min", rest: "N/A" },
          { name: "Complete Rest", sets: 1, reps: "N/A", rest: "N/A" }
        ]
      }
    ]
  },
  {
    id: "weight-loss-advanced",
    title: "Advanced Shred",
    category: "weight-loss",
    level: "advanced",
    duration: "8 weeks",
    description: "An intense fat-burning program featuring complex movements, heavy compound lifts, and challenging metabolic conditioning to maximize calorie burn and muscle definition.",
    days: [
      {
        day: "Monday",
        focus: "Lower Body + Metabolic Conditioning",
        exercises: [
          { name: "Barbell Back Squats", sets: 4, reps: "10-12", rest: "60 sec" },
          { name: "Romanian Deadlifts", sets: 4, reps: "10-12", rest: "60 sec" },
          { name: "Walking Lunges with Dumbbells", sets: 3, reps: "12 each leg", rest: "60 sec" },
          { name: "Leg Press", sets: 3, reps: "12-15", rest: "60 sec" },
          { name: "Metabolic Finisher: 40 sec Kettlebell Swings / 20 sec Rest", sets: 5, reps: "40 sec work", rest: "20 sec" }
        ]
      },
      {
        day: "Tuesday",
        focus: "Upper Body + HIIT",
        exercises: [
          { name: "Bench Press", sets: 4, reps: "8-10", rest: "60 sec" },
          { name: "Bent Over Rows", sets: 4, reps: "10-12", rest: "60 sec" },
          { name: "Shoulder Press", sets: 3, reps: "10-12", rest: "60 sec" },
          { name: "Pull-ups / Assisted Pull-ups", sets: 3, reps: "8-10", rest: "60 sec" },
          { name: "HIIT: 40 sec Burpees / 20 sec Rest", sets: 6, reps: "40 sec work", rest: "20 sec" }
        ]
      },
      {
        day: "Wednesday",
        focus: "Active Recovery + Core",
        exercises: [
          { name: "Steady State Cardio (Low Intensity)", sets: 1, reps: "20-30 min", rest: "N/A" },
          { name: "Plank Circuit", sets: 3, reps: "45 sec each variation", rest: "30 sec" },
          { name: "Hanging Leg Raises", sets: 3, reps: "12-15", rest: "60 sec" },
          { name: "Russian Twists with Weight", sets: 3, reps: "15 each side", rest: "45 sec" }
        ]
      },
      {
        day: "Thursday",
        focus: "Full Body Strength",
        exercises: [
          { name: "Deadlifts", sets: 4, reps: "8-10", rest: "90 sec" },
          { name: "Incline Dumbbell Press", sets: 3, reps: "10-12", rest: "60 sec" },
          { name: "Front Squats", sets: 3, reps: "10-12", rest: "60 sec" },
          { name: "Lat Pulldowns", sets: 3, reps: "10-12", rest: "60 sec" },
          { name: "Dips", sets: 3, reps: "10-12", rest: "60 sec" }
        ]
      },
      {
        day: "Friday",
        focus: "Metabolic Resistance Training",
        exercises: [
          { name: "Circuit: Kettlebell Swings", sets: 4, reps: "15", rest: "15 sec" },
          { name: "Circuit: Push-ups", sets: 4, reps: "15", rest: "15 sec" },
          { name: "Circuit: Dumbbell Thrusters", sets: 4, reps: "12", rest: "15 sec" },
          { name: "Circuit: Renegade Rows", sets: 4, reps: "8 each arm", rest: "15 sec" },
          { name: "Circuit: Box Jumps", sets: 4, reps: "10", rest: "90 sec after full circuit" }
        ]
      },
      {
        day: "Saturday",
        focus: "HIIT + Core",
        exercises: [
          { name: "Warm-up: Light Jog", sets: 1, reps: "5 min", rest: "N/A" },
          { name: "HIIT Sprints: 30 sec Sprint / 30 sec Walk", sets: 10, reps: "30 sec each", rest: "N/A" },
          { name: "Ab Circuit: Plank", sets: 3, reps: "60 sec", rest: "30 sec" },
          { name: "Ab Circuit: Mountain Climbers", sets: 3, reps: "30 sec", rest: "30 sec" },
          { name: "Ab Circuit: Bicycle Crunches", sets: 3, reps: "30 sec", rest: "30 sec" }
        ]
      },
      {
        day: "Sunday",
        focus: "Rest Day",
        exercises: [
          { name: "Complete Rest or Light Walking", sets: 1, reps: "N/A", rest: "N/A" },
          { name: "Stretching or Yoga", sets: 1, reps: "15-20 min if desired", rest: "N/A" }
        ]
      }
    ]
  },
  
  // MUSCLE BUILDING PLANS
  {
    id: "muscle-building-beginner",
    title: "Beginner Muscle Builder",
    category: "muscle-building",
    level: "beginner",
    duration: "8 weeks",
    description: "A foundational program designed to build muscle using basic compound movements and progressive overload, perfect for those new to strength training.",
    days: [
      {
        day: "Monday",
        focus: "Full Body",
        exercises: [
          { name: "Squats", sets: 3, reps: "10-12", rest: "90 sec" },
          { name: "Push-ups", sets: 3, reps: "As many as possible", rest: "90 sec" },
          { name: "Dumbbell Rows", sets: 3, reps: "10-12 each arm", rest: "90 sec" },
          { name: "Dumbbell Shoulder Press", sets: 3, reps: "10-12", rest: "90 sec" },
          { name: "Plank", sets: 3, reps: "30 sec hold", rest: "60 sec" }
        ]
      },
      {
        day: "Tuesday",
        focus: "Rest Day",
        exercises: [
          { name: "Light Stretching", sets: 1, reps: "15 min", rest: "N/A" }
        ]
      },
      {
        day: "Wednesday",
        focus: "Full Body",
        exercises: [
          { name: "Romanian Deadlifts", sets: 3, reps: "10-12", rest: "90 sec" },
          { name: "Dumbbell Bench Press", sets: 3, reps: "10-12", rest: "90 sec" },
          { name: "Lat Pulldowns", sets: 3, reps: "10-12", rest: "90 sec" },
          { name: "Lunges", sets: 3, reps: "10 each leg", rest: "90 sec" },
          { name: "Russian Twists", sets: 3, reps: "10 each side", rest: "60 sec" }
        ]
      },
      {
        day: "Thursday",
        focus: "Rest Day",
        exercises: [
          { name: "Light Cardio", sets: 1, reps: "20 min", rest: "N/A" }
        ]
      },
      {
        day: "Friday",
        focus: "Full Body",
        exercises: [
          { name: "Goblet Squats", sets: 3, reps: "12-15", rest: "90 sec" },
          { name: "Incline Push-ups", sets: 3, reps: "10-12", rest: "90 sec" },
          { name: "Bent Over Dumbbell Rows", sets: 3, reps: "10-12", rest: "90 sec" },
          { name: "Lateral Raises", sets: 3, reps: "12-15", rest: "60 sec" },
          { name: "Bicycle Crunches", sets: 3, reps: "10-12 each side", rest: "60 sec" }
        ]
      },
      {
        day: "Saturday",
        focus: "Active Recovery",
        exercises: [
          { name: "Walking", sets: 1, reps: "30 min", rest: "N/A" },
          { name: "Full Body Stretching", sets: 1, reps: "15 min", rest: "N/A" }
        ]
      },
      {
        day: "Sunday",
        focus: "Rest Day",
        exercises: [
          { name: "Complete Rest", sets: 1, reps: "N/A", rest: "N/A" }
        ]
      }
    ]
  },
  {
    id: "muscle-building-intermediate",
    title: "Intermediate Hypertrophy",
    category: "muscle-building",
    level: "intermediate",
    duration: "10 weeks",
    description: "A split-based program with higher volume and variety targeting specific muscle groups to stimulate growth through a blend of compound and isolation exercises.",
    days: [
      {
        day: "Monday",
        focus: "Chest & Triceps",
        exercises: [
          { name: "Barbell Bench Press", sets: 4, reps: "8-10", rest: "90 sec" },
          { name: "Incline Dumbbell Press", sets: 3, reps: "10-12", rest: "90 sec" },
          { name: "Chest Flyes", sets: 3, reps: "12-15", rest: "60 sec" },
          { name: "Tricep Dips", sets: 3, reps: "10-12", rest: "60 sec" },
          { name: "Tricep Pushdowns", sets: 3, reps: "12-15", rest: "60 sec" }
        ]
      },
      {
        day: "Tuesday",
        focus: "Back & Biceps",
        exercises: [
          { name: "Pull-ups or Lat Pulldowns", sets: 4, reps: "8-10", rest: "90 sec" },
          { name: "Barbell Rows", sets: 3, reps: "10-12", rest: "90 sec" },
          { name: "Seated Cable Rows", sets: 3, reps: "10-12", rest: "90 sec" },
          { name: "Barbell Bicep Curls", sets: 3, reps: "10-12", rest: "60 sec" },
          { name: "Hammer Curls", sets: 3, reps: "12-15", rest: "60 sec" }
        ]
      },
      {
        day: "Wednesday",
        focus: "Rest or Light Cardio",
        exercises: [
          { name: "Light Cardio", sets: 1, reps: "20-30 min", rest: "N/A" },
          { name: "Stretching", sets: 1, reps: "15 min", rest: "N/A" }
        ]
      },
      {
        day: "Thursday",
        focus: "Legs",
        exercises: [
          { name: "Barbell Back Squats", sets: 4, reps: "8-10", rest: "120 sec" },
          { name: "Romanian Deadlifts", sets: 3, reps: "10-12", rest: "90 sec" },
          { name: "Leg Press", sets: 3, reps: "12-15", rest: "90 sec" },
          { name: "Leg Extensions", sets: 3, reps: "12-15", rest: "60 sec" },
          { name: "Leg Curls", sets: 3, reps: "12-15", rest: "60 sec" },
          { name: "Standing Calf Raises", sets: 4, reps: "15-20", rest: "60 sec" }
        ]
      },
      {
        day: "Friday",
        focus: "Shoulders & Abs",
        exercises: [
          { name: "Seated Dumbbell Shoulder Press", sets: 4, reps: "8-10", rest: "90 sec" },
          { name: "Lateral Raises", sets: 3, reps: "12-15", rest: "60 sec" },
          { name: "Front Raises", sets: 3, reps: "12-15", rest: "60 sec" },
          { name: "Face Pulls", sets: 3, reps: "15-20", rest: "60 sec" },
          { name: "Hanging Leg Raises", sets: 3, reps: "10-15", rest: "60 sec" },
          { name: "Plank", sets: 3, reps: "45-60 sec hold", rest: "45 sec" }
        ]
      },
      {
        day: "Saturday",
        focus: "Arms & Weak Points",
        exercises: [
          { name: "Close Grip Bench Press", sets: 3, reps: "8-10", rest: "90 sec" },
          { name: "EZ Bar Curls", sets: 3, reps: "10-12", rest: "60 sec" },
          { name: "Skull Crushers", sets: 3, reps: "10-12", rest: "60 sec" },
          { name: "Preacher Curls", sets: 3, reps: "10-12", rest: "60 sec" },
          { name: "Weakness-Specific Exercise", sets: 3, reps: "10-15", rest: "60 sec" }
        ]
      },
      {
        day: "Sunday",
        focus: "Rest Day",
        exercises: [
          { name: "Complete Rest", sets: 1, reps: "N/A", rest: "N/A" }
        ]
      }
    ]
  },
  {
    id: "muscle-building-advanced",
    title: "Advanced Mass Gainer",
    category: "muscle-building",
    level: "advanced",
    duration: "12 weeks",
    description: "An intensive program featuring heavy compound lifts, advanced techniques like drop sets and supersets, and specialized training splits to maximize hypertrophy for experienced lifters.",
    days: [
      {
        day: "Monday",
        focus: "Chest & Triceps",
        exercises: [
          { name: "Barbell Bench Press", sets: 5, reps: "5,5,3,3,8", rest: "2-3 min" },
          { name: "Incline Dumbbell Press", sets: 4, reps: "8-10", rest: "90 sec" },
          { name: "Weighted Dips", sets: 3, reps: "8-10", rest: "90 sec" },
          { name: "Cable Flyes", sets: 3, reps: "12-15", rest: "60 sec" },
          { name: "Tricep Pushdowns Superset with Overhead Extensions", sets: 3, reps: "12 each", rest: "60 sec after superset" }
        ]
      },
      {
        day: "Tuesday",
        focus: "Back & Biceps",
        exercises: [
          { name: "Deadlifts", sets: 5, reps: "5,5,3,3,5", rest: "2-3 min" },
          { name: "Weighted Pull-ups", sets: 4, reps: "6-8", rest: "90 sec" },
          { name: "T-Bar Rows", sets: 3, reps: "8-10", rest: "90 sec" },
          { name: "Seated Cable Rows", sets: 3, reps: "10-12", rest: "75 sec" },
          { name: "EZ Bar Curl Drop Sets", sets: 3, reps: "8-10, drop weight, 8-10", rest: "90 sec" },
          { name: "Incline Hammer Curls", sets: 3, reps: "10-12", rest: "60 sec" }
        ]
      },
      {
        day: "Wednesday",
        focus: "Active Recovery",
        exercises: [
          { name: "Mobility Work", sets: 1, reps: "15 min", rest: "N/A" },
          { name: "Light Cardio", sets: 1, reps: "20 min", rest: "N/A" },
          { name: "Stretching", sets: 1, reps: "15 min", rest: "N/A" }
        ]
      },
      {
        day: "Thursday",
        focus: "Legs",
        exercises: [
          { name: "Barbell Back Squats", sets: 5, reps: "5,5,3,3,8", rest: "2-3 min" },
          { name: "Leg Press", sets: 4, reps: "8-10", rest: "90 sec" },
          { name: "Romanian Deadlifts", sets: 3, reps: "8-10", rest: "90 sec" },
          { name: "Walking Lunges", sets: 3, reps: "10-12 each leg", rest: "90 sec" },
          { name: "Leg Extensions superset with Leg Curls", sets: 3, reps: "12-15 each", rest: "90 sec after superset" },
          { name: "Standing Calf Raises", sets: 4, reps: "15-20", rest: "60 sec" }
        ]
      },
      {
        day: "Friday",
        focus: "Shoulders & Abs",
        exercises: [
          { name: "Seated Barbell Military Press", sets: 5, reps: "5,5,3,3,8", rest: "2-3 min" },
          { name: "Arnold Press", sets: 3, reps: "8-10", rest: "90 sec" },
          { name: "Lateral Raise Triple Set (light, medium, heavy weights)", sets: 3, reps: "12,10,8", rest: "90 sec after set" },
          { name: "Face Pulls", sets: 3, reps: "15-20", rest: "60 sec" },
          { name: "Barbell Shrugs", sets: 3, reps: "10-12", rest: "60 sec" },
          { name: "Weighted Hanging Leg Raises", sets: 3, reps: "10-12", rest: "60 sec" },
          { name: "Cable Crunches", sets: 3, reps: "12-15", rest: "60 sec" }
        ]
      },
      {
        day: "Saturday",
        focus: "Arms & Weak Points",
        exercises: [
          { name: "Close Grip Bench Press", sets: 4, reps: "6-8", rest: "90 sec" },
          { name: "Barbell Curls", sets: 4, reps: "8-10", rest: "90 sec" },
          { name: "Skull Crushers", sets: 3, reps: "10-12", rest: "75 sec" },
          { name: "Incline Dumbbell Curls", sets: 3, reps: "10-12", rest: "75 sec" },
          { name: "Cable Tricep Kickbacks", sets: 3, reps: "12-15", rest: "60 sec" },
          { name: "Weakness-Specific Exercise 1", sets: 3, reps: "8-12", rest: "60 sec" },
          { name: "Weakness-Specific Exercise 2", sets: 3, reps: "8-12", rest: "60 sec" }
        ]
      },
      {
        day: "Sunday",
        focus: "Rest Day",
        exercises: [
          { name: "Complete Rest", sets: 1, reps: "N/A", rest: "N/A" }
        ]
      }
    ]
  },
  
  // STRENGTH PLANS
  {
    id: "strength-beginner",
    title: "Beginner Strength Foundations",
    category: "strength",
    level: "beginner",
    duration: "8 weeks",
    description: "A structured introduction to strength training focusing on proper form and technique with the fundamental compound lifts.",
    days: [
      {
        day: "Monday",
        focus: "Full Body A",
        exercises: [
          { name: "Barbell Back Squat", sets: 3, reps: "5", rest: "2-3 min" },
          { name: "Bench Press", sets: 3, reps: "5", rest: "2-3 min" },
          { name: "Bent Over Barbell Rows", sets: 3, reps: "5", rest: "2-3 min" },
          { name: "Glute Bridges", sets: 2, reps: "10", rest: "90 sec" },
          { name: "Plank", sets: 2, reps: "30 sec hold", rest: "60 sec" }
        ]
      },
      {
        day: "Tuesday",
        focus: "Rest Day",
        exercises: [
          { name: "Light Walking", sets: 1, reps: "20 min", rest: "N/A" },
          { name: "Stretching", sets: 1, reps: "10 min", rest: "N/A" }
        ]
      },
      {
        day: "Wednesday",
        focus: "Full Body B",
        exercises: [
          { name: "Deadlift", sets: 3, reps: "5", rest: "2-3 min" },
          { name: "Overhead Press", sets: 3, reps: "5", rest: "2-3 min" },
          { name: "Lat Pulldowns", sets: 3, reps: "8", rest: "2 min" },
          { name: "Lunges", sets: 2, reps: "8 each leg", rest: "90 sec" },
          { name: "Russian Twists", sets: 2, reps: "10 each side", rest: "60 sec" }
        ]
      },
      {
        day: "Thursday",
        focus: "Rest Day",
        exercises: [
          { name: "Light Walking", sets: 1, reps: "20 min", rest: "N/A" },
          { name: "Stretching", sets: 1, reps: "10 min", rest: "N/A" }
        ]
      },
      {
        day: "Friday",
        focus: "Full Body A",
        exercises: [
          { name: "Barbell Back Squat", sets: 3, reps: "5", rest: "2-3 min" },
          { name: "Bench Press", sets: 3, reps: "5", rest: "2-3 min" },
          { name: "Bent Over Barbell Rows", sets: 3, reps: "5", rest: "2-3 min" },
          { name: "Glute Bridges", sets: 2, reps: "10", rest: "90 sec" },
          { name: "Plank", sets: 2, reps: "30 sec hold", rest: "60 sec" }
        ]
      },
      {
        day: "Saturday",
        focus: "Active Recovery",
        exercises: [
          { name: "Light Cardio", sets: 1, reps: "20-30 min", rest: "N/A" },
          { name: "Mobility Work", sets: 1, reps: "15 min", rest: "N/A" }
        ]
      },
      {
        day: "Sunday",
        focus: "Rest Day",
        exercises: [
          { name: "Complete Rest", sets: 1, reps: "N/A", rest: "N/A" }
        ]
      }
    ]
  },
  {
    id: "strength-intermediate",
    title: "Intermediate Power Builder",
    category: "strength",
    level: "intermediate",
    duration: "10 weeks",
    description: "A balanced program with higher intensity strength work following periodization principles to continuously drive strength gains across all major lifts.",
    days: [
      {
        day: "Monday",
        focus: "Squat Day",
        exercises: [
          { name: "Barbell Back Squats", sets: 5, reps: "5,3,3,3,5", rest: "3 min" },
          { name: "Romanian Deadlifts", sets: 3, reps: "8", rest: "2 min" },
          { name: "Bulgarian Split Squats", sets: 3, reps: "8 each leg", rest: "90 sec" },
          { name: "Leg Extensions", sets: 3, reps: "12", rest: "60 sec" },
          { name: "Standing Calf Raises", sets: 3, reps: "15", rest: "60 sec" }
        ]
      },
      {
        day: "Tuesday",
        focus: "Bench Press Day",
        exercises: [
          { name: "Barbell Bench Press", sets: 5, reps: "5,3,3,3,5", rest: "3 min" },
          { name: "Incline Dumbbell Press", sets: 3, reps: "8", rest: "2 min" },
          { name: "Dips", sets: 3, reps: "8-10", rest: "90 sec" },
          { name: "Tricep Pushdowns", sets: 3, reps: "12", rest: "60 sec" },
          { name: "Face Pulls", sets: 3, reps: "15", rest: "60 sec" }
        ]
      },
      {
        day: "Wednesday",
        focus: "Rest Day",
        exercises: [
          { name: "Light Cardio", sets: 1, reps: "20 min", rest: "N/A" },
          { name: "Stretching", sets: 1, reps: "15 min", rest: "N/A" }
        ]
      },
      {
        day: "Thursday",
        focus: "Deadlift Day",
        exercises: [
          { name: "Deadlifts", sets: 5, reps: "5,3,3,3,5", rest: "3 min" },
          { name: "Pull-ups", sets: 3, reps: "6-8", rest: "2 min" },
          { name: "Bent Over Rows", sets: 3, reps: "8", rest: "90 sec" },
          { name: "Lat Pulldowns", sets: 3, reps: "10", rest: "60 sec" },
          { name: "Barbell Bicep Curls", sets: 3, reps: "10", rest: "60 sec" }
        ]
      },
      {
        day: "Friday",
        focus: "Overhead Press Day",
        exercises: [
          { name: "Overhead Press", sets: 5, reps: "5,3,3,3,5", rest: "3 min" },
          { name: "Push Press", sets: 3, reps: "6", rest: "2 min" },
          { name: "Lateral Raises", sets: 3, reps: "12", rest: "60 sec" },
          { name: "Rear Delt Flyes", sets: 3, reps: "15", rest: "60 sec" },
          { name: "Weighted Planks", sets: 3, reps: "45 sec hold", rest: "60 sec" }
        ]
      },
      {
        day: "Saturday",
        focus: "Accessory Day",
        exercises: [
          { name: "Front Squats", sets: 3, reps: "8", rest: "2 min" },
          { name: "Close Grip Bench Press", sets: 3, reps: "8", rest: "2 min" },
          { name: "Cable Rows", sets: 3, reps: "10", rest: "90 sec" },
          { name: "Dumbbell Lunges", sets: 3, reps: "10 each leg", rest: "90 sec" },
          { name: "Ab Wheel Rollouts", sets: 3, reps: "8-10", rest: "60 sec" }
        ]
      },
      {
        day: "Sunday",
        focus: "Rest Day",
        exercises: [
          { name: "Complete Rest", sets: 1, reps: "N/A", rest: "N/A" }
        ]
      }
    ]
  },
  {
    id: "strength-advanced",
    title: "Advanced Powerlifting Program",
    category: "strength",
    level: "advanced",
    duration: "12 weeks",
    description: "A specialized powerlifting program with block periodization designed to maximize strength in the squat, bench press, and deadlift for competitive or advanced lifters.",
    days: [
      {
        day: "Monday",
        focus: "Squat",
        exercises: [
          { name: "Barbell Back Squats", sets: 5, reps: "5,3,2,1,3", rest: "3-5 min" },
          { name: "Pause Squats", sets: 3, reps: "5", rest: "2-3 min" },
          { name: "Leg Press", sets: 3, reps: "8", rest: "2 min" },
          { name: "Glute-Ham Raises", sets: 3, reps: "8-10", rest: "90 sec" },
          { name: "Ab Wheel Rollouts", sets: 3, reps: "10-12", rest: "90 sec" }
        ]
      },
      {
        day: "Tuesday",
        focus: "Bench Press",
        exercises: [
          { name: "Barbell Bench Press", sets: 5, reps: "5,3,2,1,3", rest: "3-5 min" },
          { name: "Close Grip Bench Press", sets: 3, reps: "5", rest: "2-3 min" },
          { name: "Weighted Dips", sets: 3, reps: "5-8", rest: "2 min" },
          { name: "Dumbbell Rows", sets: 3, reps: "8", rest: "90 sec" },
          { name: "Tricep Extensions", sets: 3, reps: "10-12", rest: "60 sec" }
        ]
      },
      {
        day: "Wednesday",
        focus: "Recovery",
        exercises: [
          { name: "Mobility Work", sets: 1, reps: "20 min", rest: "N/A" },
          { name: "Light Prowler Pushes", sets: 5, reps: "40 yards", rest: "60 sec" },
          { name: "Band Pull-aparts", sets: 3, reps: "20", rest: "30 sec" }
        ]
      },
      {
        day: "Thursday",
        focus: "Deadlift",
        exercises: [
          { name: "Deadlifts", sets: 5, reps: "5,3,2,1,3", rest: "3-5 min" },
          { name: "Deficit Deadlifts", sets: 3, reps: "5", rest: "2-3 min" },
          { name: "Barbell Rows", sets: 3, reps: "8", rest: "2 min" },
          { name: "Weighted Pull-ups", sets: 3, reps: "5-8", rest: "2 min" },
          { name: "Hanging Leg Raises", sets: 3, reps: "10", rest: "90 sec" }
        ]
      },
      {
        day: "Friday",
        focus: "Upper Body Accessory",
        exercises: [
          { name: "Overhead Press", sets: 4, reps: "6", rest: "2 min" },
          { name: "Incline Bench Press", sets: 3, reps: "8", rest: "90 sec" },
          { name: "Cable Rows", sets: 3, reps: "10", rest: "90 sec" },
          { name: "Lateral Raises", sets: 3, reps: "12", rest: "60 sec" },
          { name: "Face Pulls", sets: 3, reps: "15", rest: "60 sec" },
          { name: "Bicep Curls", sets: 3, reps: "12", rest: "60 sec" }
        ]
      },
      {
        day: "Saturday",
        focus: "Lower Body Accessory",
        exercises: [
          { name: "Front Squats", sets: 3, reps: "8", rest: "2 min" },
          { name: "Romanian Deadlifts", sets: 3, reps: "8", rest: "2 min" },
          { name: "Walking Lunges", sets: 3, reps: "10 each leg", rest: "90 sec" },
          { name: "Leg Curls", sets: 3, reps: "12", rest: "60 sec" },
          { name: "Standing Calf Raises", sets: 4, reps: "15", rest: "60 sec" }
        ]
      },
      {
        day: "Sunday",
        focus: "Rest Day",
        exercises: [
          { name: "Complete Rest", sets: 1, reps: "N/A", rest: "N/A" }
        ]
      }
    ]
  },
  
  // GENERAL FITNESS PLANS
  {
    id: "general-fitness-beginner",
    title: "Beginner Total Body Fitness",
    category: "general-fitness",
    level: "beginner",
    duration: "6 weeks",
    description: "A balanced program combining strength, cardio, and flexibility training to improve overall fitness and establish healthy exercise habits.",
    days: [
      {
        day: "Monday",
        focus: "Full Body Strength",
        exercises: [
          { name: "Bodyweight Squats", sets: 3, reps: "12-15", rest: "60 sec" },
          { name: "Push-ups (or Modified Push-ups)", sets: 3, reps: "8-12", rest: "60 sec" },
          { name: "Dumbbell Rows", sets: 3, reps: "12 each arm", rest: "60 sec" },
          { name: "Glute Bridges", sets: 3, reps: "15", rest: "60 sec" },
          { name: "Plank", sets: 3, reps: "30 sec hold", rest: "30 sec" }
        ]
      },
      {
        day: "Tuesday",
        focus: "Cardio",
        exercises: [
          { name: "Brisk Walking", sets: 1, reps: "10 min", rest: "N/A" },
          { name: "Interval: 1 min Fast Walking / 1 min Jogging", sets: 10, reps: "2 min total per set", rest: "N/A" },
          { name: "Cool Down Walk", sets: 1, reps: "5 min", rest: "N/A" }
        ]
      },
      {
        day: "Wednesday",
        focus: "Active Recovery & Flexibility",
        exercises: [
          { name: "Light Walking", sets: 1, reps: "15 min", rest: "N/A" },
          { name: "Full Body Stretching Routine", sets: 1, reps: "15-20 min", rest: "N/A" },
          { name: "Foam Rolling", sets: 1, reps: "10 min", rest: "N/A" }
        ]
      },
      {
        day: "Thursday",
        focus: "Full Body Strength",
        exercises: [
          { name: "Lunges", sets: 3, reps: "10 each leg", rest: "60 sec" },
          { name: "Dumbbell Shoulder Press", sets: 3, reps: "10-12", rest: "60 sec" },
          { name: "Bodyweight Rows or Lat Pulldowns", sets: 3, reps: "12", rest: "60 sec" },
          { name: "Bird Dogs", sets: 3, reps: "10 each side", rest: "45 sec" },
          { name: "Russian Twists", sets: 3, reps: "10 each side", rest: "45 sec" }
        ]
      },
      {
        day: "Friday",
        focus: "Cardio & Core",
        exercises: [
          { name: "Brisk Walking", sets: 1, reps: "5 min", rest: "N/A" },
          { name: "Circuit: Jumping Jacks", sets: 3, reps: "30 sec", rest: "15 sec" },
          { name: "Circuit: Mountain Climbers", sets: 3, reps: "30 sec", rest: "15 sec" },
          { name: "Circuit: High Knees", sets: 3, reps: "30 sec", rest: "15 sec" },
          { name: "Circuit: Plank", sets: 3, reps: "30 sec", rest: "15 sec" },
          { name: "Cool Down Walking", sets: 1, reps: "5 min", rest: "N/A" }
        ]
      },
      {
        day: "Saturday",
        focus: "Recreational Activity",
        exercises: [
          { name: "Fun Physical Activity (hiking, swimming, biking, etc.)", sets: 1, reps: "30-60 min", rest: "N/A" }
        ]
      },
      {
        day: "Sunday",
        focus: "Rest Day",
        exercises: [
          { name: "Complete Rest", sets: 1, reps: "N/A", rest: "N/A" },
          { name: "Light Stretching (Optional)", sets: 1, reps: "10 min", rest: "N/A" }
        ]
      }
    ]
  },
  {
    id: "general-fitness-intermediate",
    title: "Balanced Fitness Program",
    category: "general-fitness",
    level: "intermediate",
    duration: "8 weeks",
    description: "A well-rounded program that balances strength training, cardiovascular health, and functional fitness to improve performance across all aspects of physical fitness.",
    days: [
      {
        day: "Monday",
        focus: "Upper Body Strength",
        exercises: [
          { name: "Push-ups", sets: 3, reps: "12-15", rest: "60 sec" },
          { name: "Dumbbell Bench Press", sets: 3, reps: "10-12", rest: "60 sec" },
          { name: "Bent Over Rows", sets: 3, reps: "10-12", rest: "60 sec" },
          { name: "Lat Pulldowns", sets: 3, reps: "10-12", rest: "60 sec" },
          { name: "Lateral Raises", sets: 3, reps: "12-15", rest: "45 sec" },
          { name: "Tricep Dips", sets: 3, reps: "10-12", rest: "45 sec" }
        ]
      },
      {
        day: "Tuesday",
        focus: "Cardio & Core",
        exercises: [
          { name: "Warm-up Jog", sets: 1, reps: "5 min", rest: "N/A" },
          { name: "High Intensity Intervals: 30 sec Sprint / 90 sec Jog", sets: 6, reps: "2 min total per set", rest: "N/A" },
          { name: "Plank", sets: 3, reps: "45 sec hold", rest: "30 sec" },
          { name: "Russian Twists", sets: 3, reps: "15 each side", rest: "30 sec" },
          { name: "Bicycle Crunches", sets: 3, reps: "20 total", rest: "30 sec" },
          { name: "Cool Down Walk", sets: 1, reps: "5 min", rest: "N/A" }
        ]
      },
      {
        day: "Wednesday",
        focus: "Lower Body Strength",
        exercises: [
          { name: "Squats", sets: 3, reps: "12-15", rest: "60 sec" },
          { name: "Romanian Deadlifts", sets: 3, reps: "10-12", rest: "60 sec" },
          { name: "Walking Lunges", sets: 3, reps: "10 each leg", rest: "60 sec" },
          { name: "Leg Press", sets: 3, reps: "12-15", rest: "60 sec" },
          { name: "Calf Raises", sets: 3, reps: "15-20", rest: "45 sec" },
          { name: "Glute Bridges", sets: 3, reps: "15", rest: "45 sec" }
        ]
      },
      {
        day: "Thursday",
        focus: "Active Recovery",
        exercises: [
          { name: "Light Cardio (Walking, Cycling, etc.)", sets: 1, reps: "20-30 min", rest: "N/A" },
          { name: "Full Body Stretching", sets: 1, reps: "15 min", rest: "N/A" },
          { name: "Foam Rolling", sets: 1, reps: "10 min", rest: "N/A" }
        ]
      },
      {
        day: "Friday",
        focus: "Functional Circuit",
        exercises: [
          { name: "Circuit: Kettlebell Swings", sets: 3, reps: "15", rest: "15 sec" },
          { name: "Circuit: Push-ups", sets: 3, reps: "10-12", rest: "15 sec" },
          { name: "Circuit: Goblet Squats", sets: 3, reps: "12-15", rest: "15 sec" },
          { name: "Circuit: Renegade Rows", sets: 3, reps: "8 each arm", rest: "15 sec" },
          { name: "Circuit: Mountain Climbers", sets: 3, reps: "20 total", rest: "15 sec" },
          { name: "Rest between full circuits", sets: 3, reps: "N/A", rest: "90 sec after each circuit" }
        ]
      },
      {
        day: "Saturday",
        focus: "Cardio & Mobility",
        exercises: [
          { name: "Steady State Cardio (Running, Cycling, Swimming)", sets: 1, reps: "30-40 min", rest: "N/A" },
          { name: "Mobility Work", sets: 1, reps: "15 min", rest: "N/A" }
        ]
      },
      {
        day: "Sunday",
        focus: "Rest Day",
        exercises: [
          { name: "Complete Rest", sets: 1, reps: "N/A", rest: "N/A" }
        ]
      }
    ]
  },
  {
    id: "general-fitness-advanced",
    title: "Elite Functional Fitness",
    category: "general-fitness",
    level: "advanced",
    duration: "12 weeks",
    description: "A comprehensive program that pushes the limits of strength, power, endurance, and mobility to achieve peak overall fitness and athletic performance.",
    days: [
      {
        day: "Monday",
        focus: "Strength & Power",
        exercises: [
          { name: "Barbell Back Squats", sets: 5, reps: "5", rest: "2 min" },
          { name: "Bench Press", sets: 5, reps: "5", rest: "2 min" },
          { name: "Weighted Pull-ups", sets: 4, reps: "6-8", rest: "90 sec" },
          { name: "Barbell Shoulder Press", sets: 4, reps: "6-8", rest: "90 sec" },
          { name: "Box Jumps", sets: 4, reps: "5", rest: "90 sec" },
          { name: "Weighted Ab Wheel Rollouts", sets: 3, reps: "10-12", rest: "60 sec" }
        ]
      },
      {
        day: "Tuesday",
        focus: "Metabolic Conditioning",
        exercises: [
          { name: "Warm-up", sets: 1, reps: "5-10 min", rest: "N/A" },
          { name: "AMRAP in 20 min: 5 Pull-ups, 10 Push-ups, 15 Air Squats", sets: 1, reps: "As many rounds as possible", rest: "N/A" },
          { name: "Cool Down", sets: 1, reps: "5-10 min", rest: "N/A" }
        ]
      },
      {
        day: "Wednesday",
        focus: "Olympic Lifting & Gymnastics",
        exercises: [
          { name: "Clean and Jerk Technique", sets: 5, reps: "3", rest: "2 min" },
          { name: "Snatch Technique", sets: 5, reps: "3", rest: "2 min" },
          { name: "Handstand Push-ups (or Progression)", sets: 4, reps: "6-8", rest: "90 sec" },
          { name: "Ring Dips", sets: 4, reps: "8-10", rest: "90 sec" },
          { name: "Toes to Bar", sets: 3, reps: "10-12", rest: "60 sec" }
        ]
      },
      {
        day: "Thursday",
        focus: "Active Recovery",
        exercises: [
          { name: "Light Cardio", sets: 1, reps: "20-30 min", rest: "N/A" },
          { name: "Mobility Work", sets: 1, reps: "20 min", rest: "N/A" },
          { name: "Foam Rolling", sets: 1, reps: "15 min", rest: "N/A" }
        ]
      },
      {
        day: "Friday",
        focus: "Strength & Endurance",
        exercises: [
          { name: "Deadlifts", sets: 5, reps: "5", rest: "2 min" },
          { name: "Front Squats", sets: 4, reps: "6", rest: "90 sec" },
          { name: "Weighted Lunges", sets: 3, reps: "8 each leg", rest: "60 sec" },
          { name: "Farmer's Carries", sets: 3, reps: "40 yards", rest: "60 sec" },
          { name: "400m Run", sets: 4, reps: "400m", rest: "2 min" }
        ]
      },
      {
        day: "Saturday",
        focus: "Mixed Modal Training",
        exercises: [
          { name: "Warm-up", sets: 1, reps: "5-10 min", rest: "N/A" },
          { name: "For Time: 21-15-9 reps of Thrusters and Pull-ups", sets: 1, reps: "As fast as possible", rest: "N/A" },
          { name: "Then: 3 Rounds of 400m Run + 15 Kettlebell Swings", sets: 3, reps: "As fast as possible", rest: "N/A" },
          { name: "Cool Down", sets: 1, reps: "5-10 min", rest: "N/A" }
        ]
      },
      {
        day: "Sunday",
        focus: "Rest Day",
        exercises: [
          { name: "Complete Rest", sets: 1, reps: "N/A", rest: "N/A" },
          { name: "Light Stretching (Optional)", sets: 1, reps: "10-15 min", rest: "N/A" }
        ]
      }
    ]
  }
];

export default workoutPlansData;
