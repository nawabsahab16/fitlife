export interface Exercise {
  id: number;
  name: string;
  muscleGroup: string;
  equipment: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  image: string;
  instructions: string[];
  videoUrl?: string;
}

const exerciseData: Exercise[] = [
  {
    id: 1,
    name: "Push-up",
    muscleGroup: "Chest",
    equipment: "Bodyweight",
    difficulty: "Beginner",
    description: "A compound exercise that primarily targets the chest, shoulders, and triceps.",
    image: "https://images.unsplash.com/photo-1518644961665-ed172691aaa1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFB1c2glMjB1cHxlbnwwfHwwfHx8MA%3D%3D",
    instructions: [
      "Start in a plank position with hands slightly wider than shoulder-width apart",
      "Lower your body until your chest nearly touches the floor",
      "Keep your body in a straight line from head to toe",
      "Push back up to the starting position",
      "Repeat for the desired number of repetitions"
    ]
  },
  {
    id: 2,
    name: "Squat",
    muscleGroup: "Legs",
    equipment: "Bodyweight",
    difficulty: "Beginner",
    description: "A fundamental lower body exercise that targets the quadriceps, hamstrings, and glutes.",
    image: "https://images.unsplash.com/photo-1649887974297-4be052375a67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U3F1YXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1770&q=80",
    instructions: [
      "Stand with feet slightly wider than hip-width apart",
      "Keep your chest up and spine neutral",
      "Bend your knees and hips to lower your body as if sitting in a chair",
      "Lower until thighs are parallel to the ground or as low as possible with good form",
      "Drive through your heels to return to the starting position"
    ],
    videoUrl: "https://www.youtube.com/watch?v=aclHkVaku9U"
  },
  {
    id: 3,
    name: "Plank",
    muscleGroup: "Core",
    equipment: "Bodyweight",
    difficulty: "Beginner",
    description: "An isometric core exercise that builds endurance and stability in the abdominals and back.",
    image: "https://plus.unsplash.com/premium_photo-1664528916907-4251f1ee7c3d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFBsYW5rfGVufDB8fDB8fHww",
    instructions: [
      "Start in a push-up position, then bend your elbows 90 degrees and rest your weight on your forearms",
      "Keep your body in a straight line from head to feet",
      "Engage your core muscles and hold the position",
      "Breathe normally and hold for as long as possible with good form",
      "Aim to increase holding time as you build strength"
    ]
  },
  {
    id: 4,
    name: "Dumbbell Bench Press",
    muscleGroup: "Chest",
    equipment: "Dumbbells",
    difficulty: "Intermediate",
    description: "A strength exercise that targets the chest, shoulders, and triceps using dumbbells.",
    image: "https://media.gettyimages.com/id/1173575654/photo/heres-to-a-better-looking-chest.jpg?s=612x612&w=0&k=20&c=wEJx8ecyyBsBfPH-pgl7hBXnmj26yu_fhiPH8VDmaoc=",
    instructions: [
      "Lie on a flat bench with a dumbbell in each hand at shoulder level",
      "Press the dumbbells up until your arms are fully extended",
      "Slowly lower the dumbbells back to the starting position",
      "Keep your feet flat on the floor and maintain a slight arch in your lower back",
      "Control the weight throughout the movement"
    ]
  },
  {
    id: 5,
    name: "Pull-up",
    muscleGroup: "Back",
    equipment: "Pull-up Bar",
    difficulty: "Intermediate",
    description: "A compound upper body exercise that primarily targets the back and biceps.",
    image: "https://images.unsplash.com/photo-1605296867424-35fc25c9212a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UHVsbCUyMHVwfGVufDB8fDB8fHww",
    instructions: [
      "Hang from a pull-up bar with hands slightly wider than shoulder-width apart",
      "Pull your body up until your chin is above the bar",
      "Lower your body back to the starting position under control",
      "Keep your core engaged throughout the movement",
      "For beginners, assisted pull-ups or negative pull-ups can be used as progression"
    ]
  },
  {
    id: 6,
    name: "Deadlift",
    muscleGroup: "Back",
    equipment: "Barbell",
    difficulty: "Advanced",
    description: "A compound strength exercise that works multiple muscle groups, particularly the back, glutes, and hamstrings.",
    image: "https://plus.unsplash.com/premium_photo-1661963174428-93d9a3024aa4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RGVhZGxpZnR8ZW58MHx8MHx8fDA%3D",
    instructions: [
      "Stand with feet hip-width apart, with the barbell over the middle of your feet",
      "Bend at the hips and knees to lower your hands to the bar, keeping your back straight",
      "Grip the bar with hands just outside your legs",
      "Lift the bar by driving through your heels and extending your hips and knees",
      "Stand up straight with the barbell, then reverse the movement to lower it back to the ground"
    ],
    videoUrl: "https://www.youtube.com/watch?v=ytGaGIn3SjE"
  },
  {
    id: 7,
    name: "Bicycle Crunch",
    muscleGroup: "Core",
    equipment: "Bodyweight",
    difficulty: "Beginner",
    description: "A dynamic core exercise that targets the rectus abdominis and obliques.",
    image: "https://media.gettyimages.com/id/1303653391/photo/young-woman-doing-bicycle-crunch-exercise.jpg?s=612x612&w=0&k=20&c=9cHjd_JNnQGoNihbMyKS4hvmTgafwLEHwHNV9_Mvmg8=",
    instructions: [
      "Lie on your back with hands behind your head and legs raised with knees bent at 90 degrees",
      "Bring one knee towards your chest while extending the other leg",
      "Rotate your torso to bring the opposite elbow towards the bent knee",
      "Return to the starting position and repeat on the other side",
      "Continue alternating sides in a cycling motion"
    ]
  },
  {
    id: 8,
    name: "Shoulder Press",
    muscleGroup: "Shoulders",
    equipment: "Dumbbells",
    difficulty: "Intermediate",
    description: "An upper body exercise that strengthens the shoulders, triceps, and upper chest.",
    image: "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    instructions: [
      "Sit or stand with dumbbells at shoulder height, palms facing forward",
      "Press the dumbbells upward until your arms are fully extended",
      "Pause briefly at the top of the movement",
      "Lower the dumbbells back to shoulder height under control",
      "Keep your core engaged throughout the exercise"
    ]
  },
  {
    id: 9,
    name: "Lunges",
    muscleGroup: "Legs",
    equipment: "Bodyweight",
    difficulty: "Beginner",
    description: "A unilateral lower body exercise that works the quadriceps, hamstrings, and glutes.",
    image: "https://images.unsplash.com/photo-1652363723009-3f2f4d85428e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8THVuZ2VzfGVufDB8fDB8fHww",
    instructions: [
      "Stand with feet hip-width apart",
      "Take a step forward with one leg",
      "Lower your body until both knees are bent at a 90-degree angle",
      "Push through the front heel to return to the starting position",
      "Repeat on the other leg, alternating sides"
    ]
  },
  {
    id: 10,
    name: "Tricep Dips",
    muscleGroup: "Arms",
    equipment: "Bench or Chair",
    difficulty: "Beginner",
    description: "An exercise that primarily targets the triceps, with secondary emphasis on the chest and shoulders.",
    image: "https://images.unsplash.com/photo-1598266663439-2056e6900339?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
    instructions: [
      "Sit on the edge of a bench or chair with hands gripping the edge beside your hips",
      "Slide your buttocks off the bench with legs extended",
      "Lower your body by bending your elbows to about 90 degrees",
      "Push back up to the starting position by straightening your arms",
      "Keep your shoulders down and back throughout the movement"
    ]
  },
  {
    id: 11,
    name: "Russian Twist",
    muscleGroup: "Core",
    equipment: "Bodyweight",
    difficulty: "Beginner",
    description: "A rotational core exercise that targets the obliques and deep abdominal muscles.",
    image: "https://media.gettyimages.com/id/1607183835/photo/group-of-young-woman-doing-russian-twists-abs-exercises-with-raised-legs-for-stomach-weight.jpg?s=612x612&w=0&k=20&c=UqioVJEyGGKZ3XNpDoGaF2flc802c2YQPRnztqAA790=",
    instructions: [
      "Sit on the floor with knees bent and feet elevated slightly",
      "Lean back slightly to engage your core, keeping your back straight",
      "Clasp your hands together or hold a weight in front of your chest",
      "Rotate your torso to the right, then to the left, touching the floor or weight beside you",
      "Continue alternating sides while maintaining balance"
    ]
  },
  {
    id: 12,
    name: "Barbell Row",
    muscleGroup: "Back",
    equipment: "Barbell",
    difficulty: "Intermediate",
    description: "A compound exercise that primarily targets the back muscles, especially the lats and rhomboids.",
    image: "https://media.gettyimages.com/id/1339044286/photo/a-strong-young-woman-doing-a-single-arm-landmine-row.jpg?s=612x612&w=0&k=20&c=0cZay0PWsZKn4efxCeJE9ixESZzQ3cOfZCqhfv4D2ag=",
    instructions: [
      "Stand with feet hip-width apart, knees slightly bent",
      "Hold a barbell with an overhand grip, hands wider than shoulder-width",
      "Hinge at the hips to bring your torso forward, back straight",
      "Pull the barbell toward your lower ribs, squeezing your shoulder blades together",
      "Lower the barbell with control and repeat"
    ]
  },
  {
    id: 13,
    name: "Kettlebell Swing",
    muscleGroup: "Full Body",
    equipment: "Kettlebell",
    difficulty: "Intermediate",
    description: "A dynamic full-body exercise that builds power and cardiovascular fitness while targeting the posterior chain.",
    image: "https://images.unsplash.com/photo-1604247584233-99c80a8aae2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    instructions: [
      "Stand with feet shoulder-width apart, holding a kettlebell with both hands",
      "Hinge at the hips, keeping your back flat and knees slightly bent",
      "Swing the kettlebell between your legs, then explosively drive your hips forward",
      "Allow the kettlebell to swing up to chest height through momentum",
      "Control the descent and repeat the movement in a continuous swing"
    ]
  },
  {
    id: 14,
    name: "Battle Ropes",
    muscleGroup: "Full Body",
    equipment: "Battle Ropes",
    difficulty: "Intermediate",
    description: "A high-intensity exercise that builds cardio, power, and endurance while targeting multiple muscle groups.",
    image: "https://images.unsplash.com/photo-1434596922112-19c563067271?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QmF0dGxlJTIwUm9wZXN8ZW58MHx8MHx8fDA%3D",
    instructions: [
      "Stand with feet shoulder-width apart, holding one end of the rope in each hand",
      "Keep a slight bend in your knees and engage your core",
      "Raise both arms simultaneously and create waves in the rope",
      "Maintain a consistent, powerful motion throughout the set",
      "Vary your patterns between alternating waves, slams, or spirals"
    ]
  },
  {
    id: 15,
    name: "Lat Pulldown",
    muscleGroup: "Back",
    equipment: "Cable Machine",
    difficulty: "Beginner",
    description: "An exercise that targets the latissimus dorsi muscles and helps build upper body strength.",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80",
    instructions: [
      "Sit at a lat pulldown machine with your thighs secured under the pad",
      "Grasp the bar with hands wider than shoulder-width apart",
      "Pull the bar down to your upper chest, keeping your back slightly arched",
      "Slowly return the bar to the starting position with controlled movement",
      "Focus on squeezing your back muscles throughout the exercise"
    ]
  },
  {
    id: 16,
    name: "Box Jump",
    muscleGroup: "Legs",
    equipment: "Box",
    difficulty: "Intermediate",
    description: "A plyometric exercise that builds explosive power in the lower body and improves athletic performance.",
    image: "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    instructions: [
      "Stand facing a sturdy box with feet shoulder-width apart",
      "Lower into a quarter squat position",
      "Swing arms back, then explosively swing them forward while jumping onto the box",
      "Land softly on the box with both feet, absorbing the impact by bending your knees",
      "Either step down or jump down (advanced) to return to starting position"
    ],
    videoUrl: "https://www.youtube.com/watch?v=52r_Ul5k03g"
  },
  {
    id: 17,
    name: "Front Squat",
    muscleGroup: "Legs",
    equipment: "Barbell",
    difficulty: "Intermediate",
    description: "A compound lower body exercise that emphasizes the quadriceps more than traditional back squats.",
    image: "https://media.gettyimages.com/id/855121672/photo/every-rep-makes-more-muscles.jpg?s=612x612&w=0&k=20&c=LdS-FgoNgPnmsDjxPGyaowqHxmh103JjKc_n46eataM=",
    instructions: [
      "Position the barbell on the front of your shoulders, with elbows high",
      "Create a 'shelf' with your shoulders to hold the bar in place",
      "Descend by bending your knees and pushing your hips back",
      "Keep your torso upright throughout the movement",
      "Push through your heels to return to the starting position"
    ]
  },
  {
    id: 18,
    name: "Medicine Ball Slam",
    muscleGroup: "Full Body",
    equipment: "Medicine Ball",
    difficulty: "Beginner",
    description: "A dynamic exercise that develops power, core strength, and serves as an excellent stress reliever.",
    image: "https://media.gettyimages.com/id/1325565788/photo/side-view-of-young-muscular-man-training-on-the-beach-shirtless-doing-squat-slam-with.jpg?s=612x612&w=0&k=20&c=St9qv1zZcSxpMhJM9KbWTDYsyeHrhydAoACH5ixwEnU=",
    instructions: [
      "Stand with feet shoulder-width apart, holding a medicine ball",
      "Raise the ball overhead, fully extending your body",
      "Forcefully throw the ball down to the ground, engaging your core and arms",
      "Catch the ball on the rebound (or pick it up)",
      "Immediately begin the next repetition in a fluid motion"
    ]
  },
  {
    id: 19,
    name: "Hanging Leg Raise",
    muscleGroup: "Core",
    equipment: "Pull-up Bar",
    difficulty: "Intermediate",
    description: "An effective core exercise that targets the lower abdominals and hip flexors.",
    image: "https://media.gettyimages.com/id/1149146477/photo/young-athletic-man-doing-an-ab-workout-and-pull-ups.jpg?s=612x612&w=0&k=20&c=acAnJHGGB8t3WTQN7xPQe2ePR9FQW_Y6l4Ix0I6-mtk=",
    instructions: [
      "Hang from a pull-up bar with hands shoulder-width apart",
      "Keep your shoulders engaged and core tight",
      "Raise your legs forward and upward until they're parallel to the ground (or higher)",
      "Lower your legs back down with control",
      "Avoid swinging or using momentum"
    ]
  },
  {
    id: 20,
    name: "Burpee",
    muscleGroup: "Full Body",
    equipment: "Bodyweight",
    difficulty: "Intermediate",
    description: "A high-intensity cardio exercise that works the entire body and builds endurance and strength.",
    image: "https://media.gettyimages.com/id/493913138/photo/burpee.jpg?s=612x612&w=0&k=20&c=ykIouyc-11EwnHLEILkdbcS1VUrzT4jEm88H4vkM1_Y=",
    instructions: [
      "Start in a standing position, then squat down and place hands on the floor",
      "Jump feet back into a plank position",
      "Perform a push-up (optional but recommended)",
      "Jump feet forward to return to the squat position",
      "Explosively jump up with arms overhead, then immediately begin the next rep"
    ],
    videoUrl: "https://www.youtube.com/watch?v=TU8QYVW0gDU"
  },
  {
    id: 21,
    name: "Mountain Climber",
    muscleGroup: "Core",
    equipment: "Bodyweight",
    difficulty: "Beginner",
    description: "A dynamic core exercise that also provides cardiovascular benefits and improves coordination.",
    image: "https://media.gettyimages.com/id/1323017008/photo/outdoor-porch-mountain-climbing-exercise-by-beautiful-female.jpg?s=612x612&w=0&k=20&c=Lz3U9zBVVuYJvw7gKNNXp0M_9opCwjeda6OeFYgn0H8=",
    instructions: [
      "Start in a high plank position with hands directly under shoulders",
      "Keep your core engaged and back flat",
      "Drive one knee toward your chest, then quickly switch legs",
      "Continue alternating legs in a running motion",
      "Maintain a consistent pace while keeping hips stable"
    ]
  },
  {
    id: 22,
    name: "Cable Crossover",
    muscleGroup: "Chest",
    equipment: "Cable Machine",
    difficulty: "Intermediate",
    description: "An isolation exercise that targets the pectoral muscles, particularly the inner chest.",
    image: "https://media.gettyimages.com/id/1607183930/photo/sporty-woman-exercising-on-multistation-at-gym-for-arm-and-shoulders-muscles-fitness.jpg?s=612x612&w=0&k=20&c=QRCNBVzPLr6i99CRo2IW3mc6MkzTL5e4j_6-T713l_Y=",
    instructions: [
      "Stand between two cable stations with handles positioned above head height",
      "Grab the handles and step forward, with one foot in front of the other for stability",
      "Keep a slight bend in your elbows as you pull the handles down and together",
      "Squeeze your chest muscles at the point of maximum contraction",
      "Slowly return to the starting position with controlled movement"
    ]
  },
  {
    id: 23,
    name: "Farmer's Walk",
    muscleGroup: "Full Body",
    equipment: "Dumbbells",
    difficulty: "Beginner",
    description: "A functional exercise that builds grip strength, core stability, and overall body strength.",
    image: "https://media.gettyimages.com/id/1255357281/photo/zaporizhzhia-ukraine-may-04-2023-an-athlete-performs-the-farmers-walk-exercise-as-part-of-the.jpg?s=612x612&w=0&k=20&c=m0SD8L4uVr0JFUaKW4hHw72TOqwFQuzmBfoxzLgETzE=",
    instructions: [
      "Hold a heavy dumbbell or kettlebell in each hand at your sides",
      "Stand tall with shoulders back and core engaged",
      "Walk forward with controlled steps maintaining an upright posture",
      "Focus on keeping your shoulders level and your core tight",
      "Continue for the desired distance or time"
    ]
  },
  {
    id: 24,
    name: "Face Pull",
    muscleGroup: "Shoulders",
    equipment: "Cable Machine",
    difficulty: "Beginner",
    description: "A shoulder exercise that targets the rear deltoids and rotator cuff muscles to improve posture and shoulder health.",
    image: "https://images.unsplash.com/photo-1597452485677-d661670d9640?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80",
    instructions: [
      "Set a cable pulley to slightly above head height with a rope attachment",
      "Grasp the ends of the rope with both hands, palms facing each other",
      "Step back to create tension in the cable and stand with feet shoulder-width apart",
      "Pull the rope towards your face, separating your hands as you pull",
      "Focus on squeezing your shoulder blades together and rotating your hands outward"
    ]
  }
];

export default exerciseData;

