export type PrincipleTopic = {
  slug: string;
  title: string;
  category: "Featured Concept" | "Training Principle" | "Nutrition Principle";
  level: string;
  summary: string;
  keyPoints: string[];
  application: string;
  safety: string;
  tags: string[];
};

export const trainingNutritionPrinciplesNotice =
  "Educational Notice: This section is for educational purposes only. Training and nutrition methods may not be appropriate for every user. Consult your physician, healthcare provider, registered dietitian, physical therapist, or qualified professional before beginning any new training, nutrition, recovery, or wellness method.";

export const featuredPrinciples: PrincipleTopic[] = [
  {
    slug: "dc-training",
    title: "Doggcrapp Training / DC Training",
    category: "Featured Concept",
    level: "Advanced",
    summary:
      "Doggcrapp Training, also known as DC Training, is an advanced bodybuilding-style method built around progressive overload, logbook tracking, low volume, high intensity, rest-pause sets, exercise rotation, frequent muscle stimulation, and extreme or loaded stretching.",
    keyPoints: [
      "Also known as DC Training.",
      "Uses a logbook to push measurable progression over time.",
      "Typically uses low exercise volume with very high effort.",
      "Commonly uses rest-pause sets and rotating exercise selections.",
      "Often includes extreme or loaded stretching after trained muscles.",
      "Best suited for experienced lifters with strong form and recovery habits."
    ],
    application:
      "Use this as education before attempting any DC-style template. Experienced lifters should understand load selection, failure proximity, recovery demands, and exercise substitutions before trying it.",
    safety:
      "Safety warning: not recommended for beginners, injured users, users with poor technique, or users without reliable sleep, food intake, and recovery habits. Do not attempt loaded stretching or high-intensity rest-pause work without appropriate experience and professional guidance when needed.",
    tags: ["DC Training", "Doggcrapp Training", "advanced bodybuilding", "rest-pause", "logbook"]
  },
  {
    slug: "muscle-confusion",
    title: "Muscle Confusion",
    category: "Featured Concept",
    level: "All Levels",
    summary:
      "Muscle confusion is a popular fitness term, but muscles do not literally get confused. The accurate concept is structured exercise variation, progressive overload, and periodization.",
    keyPoints: [
      "Changing exercises can manage joints, skill practice, and muscle emphasis.",
      "Changing rep ranges can train different strength and hypertrophy qualities.",
      "Changing tempo can improve control and make lighter loads useful.",
      "Changing intensity, volume, rest periods, or training blocks can manage fatigue.",
      "Random workouts are not the same as intelligent variation.",
      "Structured progression beats chaos."
    ],
    application:
      "Use variation when it supports a clear goal: better technique, renewed progression, better recovery, or a planned training block. Keep enough consistency to measure progress.",
    safety:
      "Avoid changing every variable at once. Random hard workouts can hide overuse, poor recovery, or stalled progression.",
    tags: ["muscle confusion", "exercise variation", "periodization", "progressive overload"]
  },
  {
    slug: "carb-backloading",
    title: "Carb Backloading",
    category: "Featured Concept",
    level: "Optional",
    summary:
      "Carb backloading is a nutrition timing approach where carbohydrates are kept lower earlier in the day and eaten mostly later, often after resistance training.",
    keyPoints: [
      "It is an educational concept, not a guaranteed fat-loss or muscle-gain method.",
      "Total calories matter more than timing alone.",
      "Protein intake, training consistency, sleep, and recovery matter more than timing alone.",
      "Some users may prefer more carbohydrates after lifting for appetite, routine, or performance recovery.",
      "It is optional and not required for bulking, cutting, recomp, or strength progress."
    ],
    application:
      "Consider it only as a preference-based meal timing structure after total calories, protein, hydration, food quality, training consistency, and recovery are already handled.",
    safety:
      "Users with diabetes, blood sugar issues, eating disorders, metabolic conditions, or medical dietary restrictions should consult a qualified healthcare professional before trying it.",
    tags: ["carb backloading", "meal timing", "carbohydrates", "nutrition principles"]
  }
];

export const trainingPrinciples: PrincipleTopic[] = [
  ["progressive-overload", "Progressive Overload", "Gradually increase training demand through reps, load, range, tempo, sets, or density while technique stays reliable."],
  ["periodization", "Periodization", "Organize training into blocks so volume, intensity, exercise focus, and recovery are planned instead of random."],
  ["linear-progression", "Linear Progression", "Use simple repeatable increases, often by adding reps or load each session or week until progress needs more planning."],
  ["undulating-periodization", "Undulating Periodization", "Rotate rep ranges, intensity, or emphasis across days or weeks while keeping variation planned and measurable."],
  ["training-volume", "Training Volume", "Manage the total amount of work performed, often counted as hard sets, reps, time, or distance."],
  ["training-intensity", "Training Intensity", "Match load, effort, speed, or proximity to failure to the training goal and recovery capacity."],
  ["training-frequency", "Training Frequency", "Plan how often a movement, muscle group, or training quality is practiced across the week."],
  ["hypertrophy", "Hypertrophy", "Build muscle through enough hard sets, useful exercises, progressive tension, food, and recovery."],
  ["strength-training", "Strength Training", "Improve force production through skill practice, progressive loading, bracing, recovery, and specific exercise practice."],
  ["deload-weeks", "Deload Weeks", "Reduce training stress so fatigue can drop while routine and movement practice stay intact."],
  ["recovery", "Recovery", "Support adaptation with sleep, food, hydration, stress management, easy movement, and time between hard sessions."],
  ["mobility", "Mobility", "Build controllable movement through useful ranges for training, sport, and daily activity."],
  ["flexibility", "Flexibility", "Improve available range of motion with patient stretching and position practice that stays controlled."],
  ["core-stability", "Core Stability", "Train the trunk to control position, resist motion, breathe, and transfer force."],
  ["injury-aware-training", "Injury-Aware Training", "Use conservative exercise choices, symptom monitoring, professional-care prompts, and gradual return-to-training concepts."],
  ["beginner-progression", "Beginner Progression", "Build consistency, technique, basic strength, aerobic base, mobility, and confidence with simple repeatable plans."],
  ["advanced-progression", "Advanced Progression", "Use deliberate volume, intensity, exercise rotation, specialization blocks, deloads, and recovery monitoring."]
].map(([slug, title, summary]) => ({
  slug,
  title,
  category: "Training Principle",
  level:
    title === "Beginner Progression"
      ? "Beginner"
      : title === "Advanced Progression" || title === "Undulating Periodization"
        ? "Intermediate to Advanced"
        : "All Levels",
  summary,
  keyPoints: [
    "Keep the principle tied to a clear training goal.",
    "Track enough information to know whether the plan is working.",
    "Progress one major variable at a time before adding complexity."
  ],
  application:
    "Use this principle to make routines measurable, repeatable, and recoverable instead of random.",
  safety:
    "Do not use any training principle to justify pushing through sharp pain, worsening symptoms, poor technique, or inadequate recovery.",
  tags: ["training principles", title.toLowerCase(), "workout principles", "programming"]
}));

export const nutritionPrinciples: PrincipleTopic[] = [
  ["calories", "Calories", "Calories describe energy intake. Body-weight change is strongly influenced by calorie balance over time."],
  ["protein", "Protein", "Protein supports muscle repair, satiety, and training adaptation when paired with resistance training and enough total food."],
  ["carbohydrates", "Carbohydrates", "Carbohydrates can fuel training, support performance, refill glycogen, and make hard sessions easier to repeat."],
  ["fats", "Fats", "Dietary fats support calorie intake, food satisfaction, essential fatty acid intake, and normal dietary balance."],
  ["hydration", "Hydration", "Hydration supports training performance, temperature regulation, digestion, and recovery."],
  ["meal-timing", "Meal Timing", "Meal timing organizes when food is eaten around training, work, sleep, appetite, and recovery."],
  ["carb-cycling", "Carb Cycling", "Carb cycling changes carbohydrate intake across days, often using higher carbs on harder training days and lower carbs on easier days."],
  ["bulking", "Bulking", "Bulking uses a calorie surplus to support muscle gain, strength progress, and training recovery."],
  ["cutting", "Cutting", "Cutting uses a calorie deficit to support fat loss while training and protein help preserve performance and lean mass."],
  ["body-recomposition", "Body Recomposition", "Body recomposition aims to improve muscle and fat balance through consistent training, adequate protein, and controlled calories."],
  ["recovery-nutrition", "Recovery Nutrition", "Recovery nutrition focuses on enough total food, protein, carbohydrates when useful, fluids, and meal consistency."],
  ["nutrition-training-days", "Nutrition for Training Days", "Training-day nutrition emphasizes enough energy, protein, fluids, and carbohydrates where they support performance."],
  ["nutrition-rest-days", "Nutrition for Rest Days", "Rest-day nutrition supports recovery, hydration, protein consistency, and the larger weekly goal."]
].map(([slug, title, summary]) => ({
  slug,
  title,
  category: "Nutrition Principle",
  level: title === "Meal Timing" || title === "Carb Cycling" ? "Optional" : "All Levels",
  summary,
  keyPoints: [
    "Total calories, protein, consistency, sleep, and recovery matter more than isolated timing rules.",
    "Nutrition choices should fit the user's goal, schedule, preferences, and medical boundaries.",
    "Use trends and adherence instead of one-day perfection."
  ],
  application:
    "Use this principle to make meals easier to repeat while supporting training and recovery.",
  safety:
    "Users with diabetes, blood sugar issues, eating disorders, kidney disease, metabolic conditions, pregnancy, or medical dietary restrictions should consult a qualified healthcare professional before changing nutrition methods.",
  tags: ["nutrition principles", title.toLowerCase(), "macros", "meal planning"]
}));

export const allPrinciples = [
  ...featuredPrinciples,
  ...trainingPrinciples,
  ...nutritionPrinciples
];

export const principleTags = Array.from(
  new Set(allPrinciples.flatMap((topic) => [topic.title, topic.category, topic.level, ...topic.tags]))
).sort();
