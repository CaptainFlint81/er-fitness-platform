import type { FeatureCard } from "@/types/platform";
import type { ExpertReviewFields } from "@/types/content";

export type EducationCategory =
  | "Body Education"
  | "Training Styles"
  | "Adaptive Fitness"
  | "Special Conditions"
  | "Injury Education"
  | "Nutrition"
  | "Recovery"
  | "Additional Sections";

export type EducationArticleSection = {
  title: string;
  body: string;
  bullets: string[];
};

export type EducationTopic = ExpertReviewFields & {
  slug: string;
  title: string;
  category: EducationCategory;
  summary: string;
  focus: string;
  essentials: string[];
  safety: string;
  relatedWorkoutCategory: string;
  relatedProgram: string;
  relatedHref: string;
  trackingPrompt: string;
  tags: string[];
  description: string;
  benefits: string[];
  commonMistakes: string[];
  sourceReferences: Array<{ title: string; href: string; notes: string }>;
  reviewFlags: string[];
  articleSections: EducationArticleSection[];
  mediaPlan: {
    imageSlots: string[];
    videoSlots: string[];
    licensingNotes: string;
  };
};

type TopicSeed = Omit<EducationTopic, "description" | "benefits" | "commonMistakes" | "sourceReferences" | "reviewStatus" | "reviewerType" | "reviewDate" | "reviewedBy" | "reviewNotes" | "reviewFlags" | "articleSections" | "mediaPlan"> &
  Partial<Pick<EducationTopic, "benefits" | "commonMistakes" | "sourceReferences" | "reviewStatus" | "reviewerType" | "reviewDate" | "reviewedBy" | "reviewNotes" | "reviewFlags" | "articleSections" | "mediaPlan">>;

const defaultEducationReferences = [
  {
    title: "MedlinePlus Exercise and Physical Fitness",
    href: "https://medlineplus.gov/exerciseandphysicalfitness.html",
    notes: "Public NIH reference for exercise basics and safety context."
  },
  {
    title: "Physical Activity Guidelines for Americans",
    href: "https://odphp.health.gov/our-work/nutrition-physical-activity/physical-activity-guidelines/current-guidelines",
    notes: "Federal physical activity guidance for general education context."
  },
  {
    title: "ACE Exercise Library",
    href: "https://www.acefitness.org/resources/everyone/exercise-library/",
    notes: "External exercise demonstration library; link only unless media is licensed."
  }
];

const educationCategoryDescriptions: Record<EducationCategory, string> = {
  "Body Education": "Anatomy, function, training considerations, and recovery basics for specific body areas.",
  "Training Styles": "How major training methods work, what they develop, and how to choose the right app category.",
  "Adaptive Fitness": "Inclusive education for athletes who need modified setups, equipment, progressions, or support.",
  "Special Conditions": "Condition-aware education that explains training considerations and professional-care boundaries.",
  "Injury Education": "Safety-first education for common injury regions, return-to-training phases, and app tracking notes.",
  Nutrition: "Goal-based nutrition education for performance, body composition, strength, endurance, and general health.",
  Recovery: "Education for sleep, warmups, cooldowns, mobility, stretching, breathing, and active recovery.",
  "Additional Sections": "Lifestyle and behavior education for work, youth, women, aging, psychology, habits, goals, and consistency."
};

const bodyTopics: TopicSeed[] = [
  {
    slug: "body-neck",
    title: "Neck",
    category: "Body Education",
    summary: "Learn how the neck supports head position, breathing mechanics, posture, and upper-body training control.",
    focus: "Cervical position, gentle range of motion, posture endurance, and symptom-aware loading.",
    essentials: ["Keep movement controlled instead of forcing range.", "Train posture endurance with low-intensity holds and breathing.", "Avoid loading through pain, tingling, numbness, or dizziness."],
    safety: "Neck pain with nerve symptoms, dizziness, headache changes, or trauma needs professional assessment.",
    relatedWorkoutCategory: "Mobility",
    relatedProgram: "Desk Posture Reset",
    relatedHref: "/recovery",
    trackingPrompt: "Track mobility completion, neck symptoms, posture breaks, and recovery notes.",
    tags: ["neck", "posture", "mobility", "recovery"]
  },
  {
    slug: "body-shoulders",
    title: "Shoulders",
    category: "Body Education",
    summary: "Learn shoulder structure, pressing and pulling mechanics, scapular control, and how shoulder work connects to chest and back training.",
    focus: "Scapular motion, overhead tolerance, pressing setup, pulling balance, and recovery volume.",
    essentials: ["Pair pressing with rows and rear-delt work.", "Respect overhead range and avoid shrugging through fatigue.", "Use warmups that prepare the rotator cuff and shoulder blade."],
    safety: "Sharp shoulder pain, instability, night pain, or strength loss should be reviewed by a qualified professional.",
    relatedWorkoutCategory: "Iron Forge",
    relatedProgram: "Shoulder Prep Protocol",
    relatedHref: "/workouts",
    trackingPrompt: "Track pressing volume, shoulder readiness, warmup completion, and next-day response.",
    tags: ["shoulders", "pressing", "rotator cuff", "upper body"]
  },
  {
    slug: "body-front-delts",
    title: "Front Delts",
    category: "Body Education",
    summary: "Learn how the anterior deltoids assist pressing, shoulder flexion, and overhead movements.",
    focus: "Pressing volume, shoulder flexion strength, incline work, and balanced shoulder programming.",
    essentials: ["Front delts already receive heavy work from pressing.", "Use direct front-delt work conservatively when pressing volume is high.", "Balance with side delts, rear delts, and upper-back training."],
    safety: "Reduce volume when front shoulder irritation appears during pressing or raising movements.",
    relatedWorkoutCategory: "Iron Forge",
    relatedProgram: "Upper Strength A",
    relatedHref: "/workouts",
    trackingPrompt: "Track pressing sets, shoulder fatigue, direct delt work, and pain-free range.",
    tags: ["front delts", "shoulders", "pressing", "hypertrophy"]
  },
  {
    slug: "body-side-delts",
    title: "Side Delts",
    category: "Body Education",
    summary: "Learn how lateral deltoids create shoulder width and support arm elevation in training.",
    focus: "Controlled lateral raises, cable work, shoulder-friendly range, and hypertrophy volume.",
    essentials: ["Keep raises controlled and avoid swinging through the lower back.", "Use lighter loads with clean shoulder motion.", "Progress volume gradually because side delts recover differently than large muscle groups."],
    safety: "Back off when lateral raises create pinching, sharp pain, or loss of control.",
    relatedWorkoutCategory: "Iron Forge",
    relatedProgram: "Hypertrophy Template",
    relatedHref: "/workouts/builder",
    trackingPrompt: "Track lateral raise volume, pump work, shoulder comfort, and weekly progression.",
    tags: ["side delts", "shoulders", "hypertrophy", "lateral raise"]
  },
  {
    slug: "body-rear-delts",
    title: "Rear Delts",
    category: "Body Education",
    summary: "Learn how rear delts support shoulder balance, pulling mechanics, and posture.",
    focus: "Horizontal abduction, face pulls, reverse flyes, rowing balance, and shoulder health.",
    essentials: ["Use rear-delt work to support pressing balance.", "Train with controlled scapular motion instead of momentum.", "Combine rear-delt work with upper-back and rotator cuff preparation."],
    safety: "Avoid forcing end range when the shoulder feels unstable or irritated.",
    relatedWorkoutCategory: "Iron Forge",
    relatedProgram: "Upper Strength A",
    relatedHref: "/workouts",
    trackingPrompt: "Track rear-delt sets, row balance, shoulder comfort, and posture notes.",
    tags: ["rear delts", "shoulders", "upper back", "posture"]
  },
  {
    slug: "body-rotator-cuff",
    title: "Rotator Cuff",
    category: "Body Education",
    summary: "Learn how the rotator cuff helps center the shoulder joint during pressing, pulling, carrying, and overhead work.",
    focus: "External rotation, internal rotation control, scapular coordination, and warmup quality.",
    essentials: ["Treat cuff work as skillful control, not maximal loading.", "Use warmups before pressing and overhead work.", "Pair cuff work with scapular and upper-back training."],
    safety: "Weakness, catching, instability, or pain after trauma needs professional evaluation.",
    relatedWorkoutCategory: "Mobility",
    relatedProgram: "Shoulder Prep",
    relatedHref: "/recovery",
    trackingPrompt: "Track cuff prep, shoulder readiness, exercise selection, and symptom response.",
    tags: ["rotator cuff", "shoulder", "prehab", "warmup"]
  },
  {
    slug: "body-biceps",
    title: "Biceps",
    category: "Body Education",
    summary: "Learn how biceps contribute to elbow flexion, pulling strength, arm training, and shoulder stability.",
    focus: "Curl variations, pulling volume, tendon tolerance, and balanced arm programming.",
    essentials: ["Vary grip and elbow position across the week.", "Do not let heavy curls replace pulling fundamentals.", "Progress slowly when elbows or forearms feel irritated."],
    safety: "Sudden biceps pain, bruising, or strength loss should be assessed promptly.",
    relatedWorkoutCategory: "Iron Forge",
    relatedProgram: "Upper Hypertrophy",
    relatedHref: "/workouts",
    trackingPrompt: "Track curl volume, pulling work, elbow comfort, and grip fatigue.",
    tags: ["biceps", "arms", "pulling", "hypertrophy"]
  },
  {
    slug: "body-triceps",
    title: "Triceps",
    category: "Body Education",
    summary: "Learn how triceps drive pressing strength, elbow extension, lockout control, and arm size.",
    focus: "Pressing support, overhead work, pushdowns, elbow position, and recovery balance.",
    essentials: ["Use both pressing and isolation patterns.", "Match overhead work to shoulder and elbow tolerance.", "Track elbow irritation when increasing lockout volume."],
    safety: "Sharp elbow pain during extension work is a signal to reduce load and reassess technique.",
    relatedWorkoutCategory: "Iron Forge",
    relatedProgram: "Upper Strength A",
    relatedHref: "/workouts",
    trackingPrompt: "Track pressing lockout work, triceps isolation, elbow comfort, and weekly volume.",
    tags: ["triceps", "arms", "pressing", "lockout"]
  },
  {
    slug: "body-brachialis",
    title: "Brachialis",
    category: "Body Education",
    summary: "Learn how the brachialis supports elbow flexion and adds strength across neutral-grip pulling and curling.",
    focus: "Hammer curls, neutral grip rows, elbow flexion strength, and forearm-friendly loading.",
    essentials: ["Neutral-grip curls emphasize the brachialis.", "Use controlled reps and avoid wrist collapse.", "Balance arm isolation with pulling movements."],
    safety: "Reduce volume when elbow or forearm tightness builds across sessions.",
    relatedWorkoutCategory: "Iron Forge",
    relatedProgram: "Upper Hypertrophy",
    relatedHref: "/workouts",
    trackingPrompt: "Track hammer curl sets, neutral-grip pulling, elbow comfort, and forearm fatigue.",
    tags: ["brachialis", "arms", "elbow flexion", "hammer curl"]
  },
  {
    slug: "body-forearms",
    title: "Forearms",
    category: "Body Education",
    summary: "Learn how forearms support gripping, wrist control, pulling, carrying, and upper-body endurance.",
    focus: "Wrist flexion, extension, pronation, supination, carries, and tendon tolerance.",
    essentials: ["Build forearms through both direct work and loaded carries.", "Progress grip volume gradually to avoid tendon overload.", "Train wrist control in multiple positions."],
    safety: "Persistent wrist or elbow tendon pain needs load reduction and careful progression.",
    relatedWorkoutCategory: "Performance Lab",
    relatedProgram: "Loaded Carry Intervals",
    relatedHref: "/workouts",
    trackingPrompt: "Track grip time, carries, wrist work, and forearm soreness.",
    tags: ["forearms", "grip", "carries", "wrist"]
  },
  {
    slug: "body-grip",
    title: "Grip",
    category: "Body Education",
    summary: "Learn grip types, carry strength, pulling support, and how hand position affects performance.",
    focus: "Crush grip, support grip, pinch grip, carries, hangs, and recovery management.",
    essentials: ["Train grip specifically instead of relying only on straps.", "Use straps strategically when back work is the priority.", "Give hands and forearms time to adapt."],
    safety: "Numbness, tingling, or persistent hand pain should not be ignored.",
    relatedWorkoutCategory: "Performance Lab",
    relatedProgram: "Carry and Hang Progression",
    relatedHref: "/workouts",
    trackingPrompt: "Track carry distance, hang time, grip assistance, and hand comfort.",
    tags: ["grip", "hands", "forearms", "performance"]
  },
  {
    slug: "body-chest",
    title: "Chest",
    category: "Body Education",
    summary: "Learn how the chest contributes to pressing, adduction, push-up strength, and upper-body hypertrophy.",
    focus: "Pressing angles, shoulder position, push-up mechanics, range control, and recovery.",
    essentials: ["Use horizontal, incline, and bodyweight pressing as appropriate.", "Keep shoulder blades controlled during pressing.", "Balance chest work with rows and rear-delt training."],
    safety: "Chest pain, pressure, or shortness of breath requires immediate medical attention.",
    relatedWorkoutCategory: "Iron Forge",
    relatedProgram: "Upper Strength A",
    relatedHref: "/workouts",
    trackingPrompt: "Track press variations, push-up volume, shoulder comfort, and recovery.",
    tags: ["chest", "pressing", "push-up", "hypertrophy"]
  },
  {
    slug: "body-lats",
    title: "Lats",
    category: "Body Education",
    summary: "Learn how lats support pulling, shoulder extension, trunk control, and upper-body strength.",
    focus: "Pulldowns, rows, pull-ups, scapular control, and shoulder-friendly pulling.",
    essentials: ["Train both vertical and horizontal pulling.", "Control the shoulder blade instead of yanking reps.", "Use grip variations to manage elbow and shoulder comfort."],
    safety: "Stop if pulling creates sharp shoulder pain or radiating symptoms.",
    relatedWorkoutCategory: "Iron Forge",
    relatedProgram: "Pull Strength Session",
    relatedHref: "/workouts",
    trackingPrompt: "Track pull-up volume, row volume, grip selection, and shoulder response.",
    tags: ["lats", "back", "pulling", "rows"]
  },
  {
    slug: "body-rhomboids",
    title: "Rhomboids",
    category: "Body Education",
    summary: "Learn how rhomboids support scapular retraction, rowing mechanics, and posture.",
    focus: "Mid-back control, row technique, shoulder blade motion, and postural endurance.",
    essentials: ["Use rows that let the shoulder blades move cleanly.", "Avoid turning every row into a lower-back movement.", "Pair mid-back work with rear delts and lower traps."],
    safety: "Persistent upper-back pain with numbness or breathing issues needs professional care.",
    relatedWorkoutCategory: "Iron Forge",
    relatedProgram: "Upper Pull Session",
    relatedHref: "/workouts",
    trackingPrompt: "Track row variations, mid-back control, posture notes, and soreness.",
    tags: ["rhomboids", "upper back", "rows", "posture"]
  },
  {
    slug: "body-traps",
    title: "Traps",
    category: "Body Education",
    summary: "Learn how upper, middle, and lower traps support posture, carries, overhead work, and shoulder mechanics.",
    focus: "Shrugs, carries, lower-trap control, scapular upward rotation, and neck comfort.",
    essentials: ["Train traps beyond only heavy shrugs.", "Use carries for support strength and posture.", "Include lower-trap work for shoulder mechanics."],
    safety: "Neck symptoms during trap training should lead to lighter loading and technique review.",
    relatedWorkoutCategory: "Performance Lab",
    relatedProgram: "Loaded Carry Intervals",
    relatedHref: "/workouts",
    trackingPrompt: "Track carry work, shrug volume, neck comfort, and shoulder control.",
    tags: ["traps", "upper back", "carries", "posture"]
  },
  {
    slug: "body-spinal-erectors",
    title: "Spinal Erectors",
    category: "Body Education",
    summary: "Learn how spinal erectors support hinging, squatting, posture, bracing, and loaded movement.",
    focus: "Hip hinge mechanics, trunk bracing, back extension tolerance, and fatigue management.",
    essentials: ["Train bracing before chasing load.", "Use hinge patterns with controlled spinal position.", "Respect fatigue because erectors support many lower-body lifts."],
    safety: "Back pain with leg symptoms, weakness, bowel or bladder changes, or trauma needs urgent professional care.",
    relatedWorkoutCategory: "Iron Forge",
    relatedProgram: "Hinge Strength Session",
    relatedHref: "/workouts",
    trackingPrompt: "Track hinge volume, back fatigue, bracing quality, and next-day response.",
    tags: ["spinal erectors", "lower back", "hinge", "bracing"]
  },
  {
    slug: "body-abs",
    title: "Abs",
    category: "Body Education",
    summary: "Learn how abdominal muscles support trunk flexion, bracing, breathing, and force transfer.",
    focus: "Anti-extension, trunk flexion, breathing, bracing, and progressive core training.",
    essentials: ["Train abs for control as well as fatigue.", "Pair bracing work with breathing mechanics.", "Progress from stable positions to dynamic positions."],
    safety: "Avoid pushing through abdominal pain, dizziness, or pressure symptoms.",
    relatedWorkoutCategory: "Bodyweight Warrior",
    relatedProgram: "Core Control Circuit",
    relatedHref: "/workouts",
    trackingPrompt: "Track core exercises, bracing quality, breathing control, and fatigue.",
    tags: ["abs", "core", "bracing", "bodyweight"]
  },
  {
    slug: "body-obliques",
    title: "Obliques",
    category: "Body Education",
    summary: "Learn how obliques support rotation, side bending, anti-rotation, and athletic trunk control.",
    focus: "Side planks, carries, chops, anti-rotation, and sport transfer.",
    essentials: ["Train rotation and anti-rotation.", "Use carries to challenge side-body control.", "Progress slowly with twisting under load."],
    safety: "Sharp rib, abdominal, or back pain during rotation should stop the session.",
    relatedWorkoutCategory: "Performance Lab",
    relatedProgram: "Anti-Rotation Core",
    relatedHref: "/workouts",
    trackingPrompt: "Track side plank time, carries, rotational work, and trunk comfort.",
    tags: ["obliques", "core", "rotation", "athletic performance"]
  },
  {
    slug: "body-tva",
    title: "TVA",
    category: "Body Education",
    summary: "Learn how the transverse abdominis contributes to trunk stiffness, breathing, bracing, and spinal support.",
    focus: "Deep core coordination, breathing, bracing drills, and low-intensity control.",
    essentials: ["Practice breathing without losing trunk position.", "Use low-load drills before heavy bracing.", "Connect TVA work to squats, hinges, carries, and daily posture."],
    safety: "Use professional guidance for postpartum, hernia, pelvic floor, or pressure-related concerns.",
    relatedWorkoutCategory: "Mobility",
    relatedProgram: "Breathing and Brace Reset",
    relatedHref: "/recovery",
    trackingPrompt: "Track breathing drills, bracing practice, symptoms, and workout carryover.",
    tags: ["tva", "deep core", "breathing", "bracing"]
  },
  {
    slug: "body-glutes",
    title: "Glutes",
    category: "Body Education",
    summary: "Learn how glutes support hip extension, pelvic control, sprinting, lifting, and lower-body power.",
    focus: "Hip thrusts, squats, hinges, unilateral work, abduction, and athletic transfer.",
    essentials: ["Train both heavy hip extension and single-leg control.", "Use full hip motion without compensating through the lower back.", "Balance glute work with hamstrings, quads, adductors, and core."],
    safety: "Hip or back pain during glute work should trigger a technique and load review.",
    relatedWorkoutCategory: "Iron Forge",
    relatedProgram: "Lower Hypertrophy",
    relatedHref: "/workouts",
    trackingPrompt: "Track glute volume, hip comfort, single-leg work, and strength progress.",
    tags: ["glutes", "hips", "lower body", "power"]
  },
  {
    slug: "body-quads",
    title: "Quads",
    category: "Body Education",
    summary: "Learn how quads drive knee extension, squatting, lunging, jumping, and running support.",
    focus: "Squats, lunges, step-ups, knee control, tempo, and tendon tolerance.",
    essentials: ["Use knee-dominant patterns through tolerable range.", "Control knee tracking during squats and lunges.", "Progress volume gradually when knees are sensitive."],
    safety: "Swelling, instability, locking, or sharp knee pain needs professional assessment.",
    relatedWorkoutCategory: "Iron Forge",
    relatedProgram: "Lower Hypertrophy",
    relatedHref: "/workouts",
    trackingPrompt: "Track squat and lunge volume, knee response, range, and soreness.",
    tags: ["quads", "knees", "squats", "lower body"]
  },
  {
    slug: "body-hamstrings",
    title: "Hamstrings",
    category: "Body Education",
    summary: "Learn how hamstrings support hip extension, knee flexion, sprinting, hinging, and posterior-chain strength.",
    focus: "Hinges, leg curls, eccentric control, sprint readiness, and mobility balance.",
    essentials: ["Train hip-hinge and knee-flexion patterns.", "Use eccentric work carefully before sprinting or high-speed drills.", "Balance flexibility with strength at long muscle lengths."],
    safety: "Sudden hamstring pain or bruising should stop training and be assessed.",
    relatedWorkoutCategory: "Performance Lab",
    relatedProgram: "Posterior Chain Session",
    relatedHref: "/workouts",
    trackingPrompt: "Track hinge work, hamstring curls, sprint exposure, and soreness response.",
    tags: ["hamstrings", "posterior chain", "sprinting", "hinge"]
  },
  {
    slug: "body-adductors",
    title: "Adductors",
    category: "Body Education",
    summary: "Learn how adductors support hip stability, cutting, squatting depth, and change of direction.",
    focus: "Groin strength, Copenhagen progressions, lateral lunges, and hip control.",
    essentials: ["Build adductor capacity progressively.", "Use side-to-side patterns for athletic control.", "Avoid aggressive stretching before strength is restored."],
    safety: "Groin pain that worsens with cutting or squeezing should be managed conservatively.",
    relatedWorkoutCategory: "Performance Lab",
    relatedProgram: "Lateral Strength Session",
    relatedHref: "/workouts",
    trackingPrompt: "Track adductor work, lateral movement, groin comfort, and sport exposure.",
    tags: ["adductors", "groin", "hips", "lateral movement"]
  },
  {
    slug: "body-abductors",
    title: "Abductors",
    category: "Body Education",
    summary: "Learn how hip abductors support single-leg balance, pelvis control, running, and knee alignment.",
    focus: "Glute medius, side steps, single-leg strength, hip control, and running mechanics.",
    essentials: ["Train side-body hip control with bands, steps, and single-leg work.", "Keep pelvis level during unilateral exercises.", "Use abductors to support knee tracking, not as a replacement for full lower-body training."],
    safety: "Persistent side-hip pain should be assessed, especially if walking or sleep is affected.",
    relatedWorkoutCategory: "Performance Lab",
    relatedProgram: "Single-Leg Stability",
    relatedHref: "/workouts",
    trackingPrompt: "Track side-step volume, single-leg balance, hip symptoms, and running response.",
    tags: ["abductors", "glute medius", "hips", "balance"]
  },
  {
    slug: "body-calves",
    title: "Calves",
    category: "Body Education",
    summary: "Learn how calf muscles support jumping, running, ankle stiffness, and lower-leg endurance.",
    focus: "Straight-knee calf raises, loaded carries, running tolerance, and ankle control.",
    essentials: ["Train calves through controlled full range.", "Use gradual progression for running and jumping volume.", "Combine strength work with ankle mobility and foot control."],
    safety: "Calf swelling, sharp pain, or warmth should be medically assessed.",
    relatedWorkoutCategory: "Performance Lab",
    relatedProgram: "Lower-Leg Capacity",
    relatedHref: "/workouts",
    trackingPrompt: "Track calf raises, running volume, soreness, and ankle comfort.",
    tags: ["calves", "lower leg", "running", "jumping"]
  },
  {
    slug: "body-soleus",
    title: "Soleus",
    category: "Body Education",
    summary: "Learn how the soleus supports bent-knee calf strength, running durability, and ankle stiffness.",
    focus: "Bent-knee calf raises, endurance sets, running load, and Achilles support.",
    essentials: ["Use bent-knee calf work to bias the soleus.", "Build endurance with controlled higher-rep sets.", "Track running changes when adding soleus volume."],
    safety: "Achilles or deep calf pain should be progressed carefully and reviewed if persistent.",
    relatedWorkoutCategory: "Performance Lab",
    relatedProgram: "Running Prep Lower Leg",
    relatedHref: "/workouts",
    trackingPrompt: "Track bent-knee calf raises, running minutes, Achilles comfort, and recovery.",
    tags: ["soleus", "calves", "running", "achilles"]
  },
  {
    slug: "body-tibialis-anterior",
    title: "Tibialis Anterior",
    category: "Body Education",
    summary: "Learn how the tibialis anterior supports foot lift, deceleration, shin tolerance, and running mechanics.",
    focus: "Toe raises, dorsiflexion control, shin conditioning, and gait support.",
    essentials: ["Add tibialis work gradually when running volume increases.", "Pair shin work with calf and foot strength.", "Use controlled reps instead of bouncing through range."],
    safety: "Shin pain that worsens with impact should be managed conservatively and assessed if persistent.",
    relatedWorkoutCategory: "Performance Lab",
    relatedProgram: "Lower-Leg Capacity",
    relatedHref: "/workouts",
    trackingPrompt: "Track toe raises, running impact, shin comfort, and weekly progression.",
    tags: ["tibialis anterior", "shin", "running", "ankle"]
  },
  {
    slug: "body-hands",
    title: "Hands",
    category: "Body Education",
    summary: "Learn how hand position, finger strength, and wrist alignment affect lifting, carries, climbing, and daily function.",
    focus: "Hand strength, grip positions, wrist stacking, dexterity, and recovery.",
    essentials: ["Match grip style to the exercise goal.", "Avoid excessive wrist extension under heavy load.", "Use gradual exposure for hangs, carries, and grip tools."],
    safety: "Numbness, swelling, loss of sensation, or finger injury should be assessed.",
    relatedWorkoutCategory: "Performance Lab",
    relatedProgram: "Grip Capacity",
    relatedHref: "/workouts",
    trackingPrompt: "Track grip work, hand comfort, wrist position, and carry progress.",
    tags: ["hands", "grip", "wrist", "carries"]
  },
  {
    slug: "body-feet",
    title: "Feet",
    category: "Body Education",
    summary: "Learn how feet provide contact, balance, propulsion, and sensory feedback for lifting and locomotion.",
    focus: "Foot tripod, toe control, arch awareness, balance, walking, running, and jumping.",
    essentials: ["Build foot strength with simple control drills.", "Use footwear that fits the activity and athlete.", "Progress impact and barefoot work gradually."],
    safety: "Foot pain that changes walking, running, or balance should be reviewed.",
    relatedWorkoutCategory: "Mobility",
    relatedProgram: "Foot and Ankle Control",
    relatedHref: "/recovery",
    trackingPrompt: "Track foot drills, walking tolerance, balance work, and footwear notes.",
    tags: ["feet", "balance", "running", "mobility"]
  },
  {
    slug: "body-ankles",
    title: "Ankles",
    category: "Body Education",
    summary: "Learn how ankles support squat depth, running mechanics, balance, jumping, and directional change.",
    focus: "Dorsiflexion, plantarflexion, ankle stiffness, calf strength, balance, and mobility.",
    essentials: ["Train mobility and strength together.", "Use balance drills after sprains or instability.", "Increase jumping and running exposure gradually."],
    safety: "Swelling, instability, bruising, or inability to bear weight needs professional evaluation.",
    relatedWorkoutCategory: "Mobility",
    relatedProgram: "Foot and Ankle Control",
    relatedHref: "/recovery",
    trackingPrompt: "Track ankle mobility, balance work, calf strength, and impact tolerance.",
    tags: ["ankles", "mobility", "balance", "running"]
  },
  {
    slug: "body-back",
    title: "Back",
    category: "Body Education",
    summary: "Learn how the back connects lats, rhomboids, traps, spinal erectors, posture, pulling strength, and trunk support.",
    focus: "Vertical pulls, horizontal rows, hinge support, scapular control, spinal endurance, and balanced upper-body programming.",
    essentials: ["Train vertical and horizontal pulling patterns.", "Balance heavy rows with posture, mobility, and recovery.", "Use bracing and hip-hinge mechanics to protect the lower back during loaded work."],
    safety: "Back pain with numbness, weakness, radiating symptoms, trauma, or bowel/bladder changes needs medical evaluation.",
    relatedWorkoutCategory: "Iron Forge",
    relatedProgram: "Back Strength Builder",
    relatedHref: "/workouts",
    trackingPrompt: "Track row and pull volume, hinge fatigue, grip limits, and next-day back response.",
    tags: ["back", "lats", "rhomboids", "traps", "spinal erectors"]
  },
  {
    slug: "body-arms",
    title: "Arms",
    category: "Body Education",
    summary: "Learn how biceps, triceps, brachialis, forearms, elbows, wrists, and grip work together for pulling, pressing, and carrying.",
    focus: "Elbow flexion, elbow extension, wrist position, forearm endurance, grip, and arm-volume recovery.",
    essentials: ["Train arms through both compound lifts and focused isolation work.", "Keep wrists and elbows stacked under load.", "Progress arm volume gradually when elbows or wrists are sensitive."],
    safety: "Persistent elbow pain, numbness, tingling, or grip loss should be reviewed before increasing volume.",
    relatedWorkoutCategory: "Iron Forge",
    relatedProgram: "Arm and Grip Builder",
    relatedHref: "/workouts",
    trackingPrompt: "Track curl, pressdown, carry, grip, elbow comfort, and pump response.",
    tags: ["arms", "biceps", "triceps", "forearms", "grip"]
  },
  {
    slug: "body-core",
    title: "Core",
    category: "Body Education",
    summary: "Learn how the core supports bracing, breathing, anti-extension, anti-rotation, posture, carries, and athletic movement.",
    focus: "Abs, obliques, TVA, trunk stiffness, rib-pelvis stacking, breathing, and transfer to lifting and sport.",
    essentials: ["Train the core to resist motion and produce motion when appropriate.", "Use breathing and bracing together instead of holding tension all day.", "Progress from stable floor drills to loaded carries and athletic rotation."],
    safety: "Back pain, pelvic pressure symptoms, post-surgical concerns, or pregnancy-related symptoms need qualified guidance.",
    relatedWorkoutCategory: "Mobility",
    relatedProgram: "Core Control Progression",
    relatedHref: "/exercises",
    trackingPrompt: "Track bracing drills, carries, anti-rotation work, breathing quality, and back comfort.",
    tags: ["core", "abs", "obliques", "TVA", "bracing"]
  },
  {
    slug: "body-hips",
    title: "Hips",
    category: "Body Education",
    summary: "Learn how hips connect glutes, adductors, abductors, hip flexors, rotation, gait, squats, hinging, and athletic direction change.",
    focus: "Hip extension, abduction, adduction, rotation, single-leg control, mobility, and pelvis position.",
    essentials: ["Train hip strength in multiple directions.", "Pair mobility drills with strength and balance.", "Use single-leg work to expose side-to-side control gaps."],
    safety: "Hip catching, sharp groin pain, numbness, instability, or worsening symptoms should be assessed before progressing.",
    relatedWorkoutCategory: "Performance Lab",
    relatedProgram: "Hip Control Builder",
    relatedHref: "/workouts",
    trackingPrompt: "Track hip mobility, split squats, lateral work, adductor tolerance, and gait or sport response.",
    tags: ["hips", "glutes", "adductors", "abductors", "mobility"]
  }
];

const trainingStyleTopics: TopicSeed[] = [
  ["bodybuilding", "Bodybuilding", "Muscle-focused training using exercise selection, volume, proximity to failure, recovery, and nutrition alignment.", "Hypertrophy splits, pump work, weak-point training, posing awareness, and progression.", "Iron Forge", "Hypertrophy Template"],
  ["powerlifting", "Powerlifting", "Strength sport education for squat, bench press, deadlift, technique practice, peaking, and recovery.", "Main lift skill, accessory selection, load management, and meet-style readiness.", "Iron Forge", "Strength Template"],
  ["olympic-lifting", "Olympic Lifting", "Explosive barbell lifting education for snatch, clean, jerk, mobility, timing, and technical progressions.", "Speed, positions, overhead mobility, front rack tolerance, and coaching feedback.", "Performance Lab", "Power and Skill Primer"],
  ["strongman", "Strongman", "Event-based strength education for carries, loads, presses, pulls, bracing, and unconventional implements.", "Carries, grip, trunk stiffness, event practice, and conditioning.", "Performance Lab", "Loaded Carry Intervals"],
  ["tactical-fitness", "Tactical Fitness", "Readiness-focused training for strength, endurance, carries, work capacity, durability, and recovery.", "Hybrid programming, loaded movement, conditioning, and field-ready nutrition.", "Performance Lab", "Tactical Conditioning"],
  ["military-conditioning", "Military Conditioning", "Conditioning education for calisthenics, running, rucking, carries, intervals, and recovery standards.", "Bodyweight volume, aerobic base, impact management, and readiness testing.", "Performance Lab", "Military Conditioning Base"],
  ["endurance", "Endurance", "Aerobic education for pacing, energy systems, zone training, long-session fueling, and recovery.", "Zone 2, threshold work, long efforts, recovery, and nutrition timing.", "Performance Lab", "Zone 2 Engine"],
  ["running", "Running", "Running education for mileage, gait basics, strength support, recovery, footwear, and gradual progression.", "Base building, intervals, lower-leg capacity, and injury-aware volume.", "Performance Lab", "Running Base Builder"],
  ["sprinting", "Sprinting", "Speed education for acceleration, mechanics, power, hamstring readiness, rest, and exposure dosing.", "Acceleration positions, warmups, posterior-chain strength, and recovery spacing.", "Performance Lab", "Sprint Prep Session"],
  ["hiit", "HIIT", "High-intensity interval education for effort selection, work-rest ratios, movement quality, and recovery cost.", "Intervals, conditioning density, fatigue management, and appropriate exercise choice.", "Performance Lab", "Conditioning Template"],
  ["functional-fitness", "Functional Fitness", "Mixed-modal education for strength, skill, conditioning, carries, gymnastics basics, and movement capacity.", "Movement variety, session density, scaling, and recovery awareness.", "Performance Lab", "Functional Capacity Session"],
  ["athletic-performance", "Athletic Performance", "Sport-support education for power, speed, agility, strength, mobility, and durability.", "Explosive work, strength foundations, movement quality, and sport transfer.", "Performance Lab", "Athlete Power Session"],
  ["agility", "Agility", "Agility education for deceleration, lateral movement, reaction, footwork, hip control, and change-of-direction quality.", "Deceleration mechanics, lateral shuffles, cutting control, reactive drills, and safe surface selection.", "Performance Lab", "Agility Footwork Session"],
  ["conditioning", "Conditioning", "Conditioning education for work capacity, intervals, aerobic support, repeat-effort quality, and recovery cost.", "Energy systems, work-rest ratios, movement selection, breathing recovery, and fatigue management.", "Performance Lab", "Conditioning Template"],
  ["explosive-training", "Explosive Training", "Explosive training education for jumps, throws, sprint starts, Olympic-lift derivatives, intent, and low-volume power practice.", "Landing mechanics, power output, full recovery, technical quality, and readiness checks.", "Performance Lab", "Power Primer"],
  ["football", "Football", "Football performance education for strength, acceleration, change of direction, contact prep, and conditioning.", "Power, sprint repeats, neck and shoulder resilience, and recovery.", "Performance Lab", "Field Athlete Session"],
  ["wrestling", "Wrestling", "Wrestling fitness education for strength endurance, grip, neck control, hips, conditioning, and weight management.", "Grip, trunk strength, mat conditioning, mobility, and safe fueling.", "Performance Lab", "Combat Conditioning"],
  ["combat-sports", "Combat Sports", "Combat sports education for conditioning, rotational power, grip, neck, shoulders, hips, and recovery.", "Rounds, power endurance, mobility, impact management, and tactical nutrition.", "Performance Lab", "Combat Conditioning"],
  ["calisthenics", "Calisthenics", "Bodyweight skill education for pushing, pulling, core control, mobility, and progressive leverage.", "Push-ups, pull-ups, dips, holds, skill progressions, and joint tolerance.", "Bodyweight Warrior", "Bodyweight Skill Builder"],
  ["mobility", "Mobility", "Mobility education for active range, joint control, warmups, cooldowns, and movement options.", "Controlled range, strength at end range, breathing, and daily practice.", "Mobility", "Mobility Reset"],
  ["flexibility", "Flexibility", "Flexibility education for stretching tolerance, positions, breathing, and long-term range development.", "Static holds, active flexibility, consistency, and recovery timing.", "Mobility", "Stretching Practice"],
  ["balance", "Balance", "Balance education for sensory input, foot and ankle control, single-leg strength, and fall-risk reduction.", "Static balance, dynamic balance, ankle control, and progressive challenge.", "Mobility", "Balance Builder"],
  ["recovery", "Recovery", "Recovery education for fatigue management, readiness, sleep, cooldowns, mobility, and low-intensity movement.", "Readiness checks, active recovery, sleep routines, and stress load.", "Mobility", "Recovery Week Reset"],
  ["longevity", "Longevity", "Longevity education for strength, aerobic base, mobility, balance, muscle retention, and sustainable routines.", "Consistency, joint-friendly strength, walking, recovery, and active aging.", "Mobility", "Longevity Base"]
].map(([slug, title, summary, focus, relatedWorkoutCategory, relatedProgram]) => ({
  slug: `style-${slug}`,
  title,
  category: "Training Styles" as const,
  summary,
  focus,
  essentials: ["Learn the goal of the style before choosing exercises.", "Match volume and intensity to recovery capacity.", "Use the app to track consistency, progression, and readiness."],
  safety: "Scale the style to the athlete, equipment, training age, and any symptoms or medical restrictions.",
  relatedWorkoutCategory,
  relatedProgram,
  relatedHref: relatedWorkoutCategory === "Mobility" ? "/recovery" : "/workouts",
  trackingPrompt: `Track ${title.toLowerCase()} sessions, effort, recovery, and progress notes.`,
  tags: [title.toLowerCase(), "training style", relatedWorkoutCategory.toLowerCase()]
}));

const pilatesEducationReferences = [
  {
    title: "NHS Better Health Home Workout Videos",
    href: "https://www.nhs.uk/better-health/get-active/home-workout-videos/",
    notes: "Public NHS exercise video hub used as a reference for accessible home exercise education."
  },
  {
    title: "MedlinePlus Exercise and Physical Fitness",
    href: "https://medlineplus.gov/exerciseandphysicalfitness.html",
    notes: "Public NIH reference for exercise basics, movement variety, and safety context."
  },
  {
    title: "Physical Activity Guidelines for Americans",
    href: "https://odphp.health.gov/our-work/nutrition-physical-activity/physical-activity-guidelines/current-guidelines",
    notes: "Federal physical activity guidance used for general activity, strengthening, and balance context."
  }
];

const phaseTwoTrainingStyleTopics = [
  {
    slug: "football-lineman",
    title: "Football Lineman",
    summary: "Position-specific education for line play strength, first-step power, leverage, contact tolerance, and repeat-effort conditioning.",
    focus: "Heavy lower-body strength, trunk stiffness, neck and shoulder resilience, short acceleration, and recovery from contact exposure.",
    relatedProgram: "Lineman Strength Block",
    tags: ["football", "lineman", "strength", "power"]
  },
  {
    slug: "football-linebacker",
    title: "Football Linebacker",
    summary: "Position-specific education for acceleration, deceleration, tackling preparation, lateral movement, and repeat sprint capacity.",
    focus: "Change of direction, reactive agility, contact prep, grip, neck work, and conditioning that preserves speed quality.",
    relatedProgram: "Linebacker Field Session",
    tags: ["football", "linebacker", "agility", "conditioning"]
  },
  {
    slug: "football-receiver",
    title: "Football Receiver",
    summary: "Position-specific education for route speed, acceleration, deceleration, jump timing, landing control, and soft-tissue durability.",
    focus: "Sprint mechanics, hamstring readiness, footwork, single-leg strength, landing mechanics, and recovery between high-speed exposures.",
    relatedProgram: "Receiver Speed Session",
    tags: ["football", "receiver", "speed", "jumping"]
  },
  {
    slug: "football-running-back",
    title: "Football Running Back",
    summary: "Position-specific education for acceleration, cutting, balance through contact, lower-body strength, and repeated high-intensity efforts.",
    focus: "Short sprint starts, hip control, trunk stiffness, grip, loaded carries, deceleration, and conditioning with full-quality reps.",
    relatedProgram: "Running Back Power Session",
    tags: ["football", "running back", "power", "agility"]
  },
  {
    slug: "wrestling-conditioning",
    title: "Wrestling Conditioning",
    summary: "Education for mat-specific work capacity, round structure, repeated scrambles, breathing recovery, and fatigue-resistant technique.",
    focus: "Intervals, sprawls, carries, grip circuits, trunk endurance, and recovery spacing that protects movement quality.",
    relatedProgram: "Wrestling Conditioning Circuit",
    tags: ["wrestling", "conditioning", "work capacity"]
  },
  {
    slug: "wrestling-grip",
    title: "Wrestling Grip",
    summary: "Education for hand fighting, support grip, pinch grip, wrist control, carries, towel work, and forearm recovery.",
    focus: "Grip variety, elbow tolerance, pulling support, carries, hangs, and progressive volume management.",
    relatedProgram: "Wrestling Grip Builder",
    tags: ["wrestling", "grip", "forearms"]
  },
  {
    slug: "wrestling-neck",
    title: "Wrestling Neck",
    summary: "Education for symptom-aware neck strength, posture, isometrics, contact preparation, and professional-care boundaries.",
    focus: "Low-intensity isometrics, controlled range, trunk position, shoulder support, and red-flag symptom awareness.",
    relatedProgram: "Wrestling Neck Prep",
    tags: ["wrestling", "neck", "injury prevention"]
  },
  {
    slug: "wrestling-endurance",
    title: "Wrestling Endurance",
    summary: "Education for aerobic base, repeated hard efforts, recovery between rounds, and fuel-aware training that supports wrestling demands.",
    focus: "Zone 2 support, threshold work, repeat intervals, breathing recovery, hydration, and bodyweight-management boundaries.",
    relatedProgram: "Wrestling Endurance Base",
    tags: ["wrestling", "endurance", "aerobic base"]
  },
  {
    slug: "combat-conditioning",
    title: "Combat Conditioning",
    summary: "Combat-sport conditioning education for round pacing, power endurance, footwork fatigue, and recovery between high-intensity exchanges.",
    focus: "Work-rest ratios, bag or shadow intervals, carries, rotational power, breathing control, and technical quality under fatigue.",
    relatedProgram: "Combat Conditioning Rounds",
    tags: ["combat sports", "conditioning", "rounds"]
  },
  {
    slug: "combat-agility",
    title: "Combat Agility",
    summary: "Education for stance movement, angle changes, lateral steps, reaction, deceleration, and balance for combat-sport athletes.",
    focus: "Footwork quality, hip control, reactive drills, low-volume speed exposure, and surface-aware progression.",
    relatedProgram: "Combat Footwork Session",
    tags: ["combat sports", "agility", "footwork"]
  },
  {
    slug: "combat-mobility",
    title: "Combat Mobility",
    summary: "Education for hips, ankles, thoracic rotation, shoulders, and recovery mobility that supports grappling and striking positions.",
    focus: "Active range, end-range strength, breathing, cooldowns, and sport-specific positions that do not force joints.",
    relatedProgram: "Combat Mobility Reset",
    tags: ["combat sports", "mobility", "hips"]
  },
  {
    slug: "endurance-running",
    title: "Endurance Running",
    summary: "Running education for gradual mileage, easy pace control, lower-leg capacity, strength support, and recovery habits.",
    focus: "Aerobic base, long runs, walking regressions, shoe and surface notes, strength training, and lower-leg response tracking.",
    relatedProgram: "Endurance Running Base",
    tags: ["endurance", "running", "aerobic"]
  },
  {
    slug: "endurance-stamina",
    title: "Stamina Development",
    summary: "Education for building sustained effort across cardio, circuits, field sports, and general fitness without turning every session maximal.",
    focus: "Volume tolerance, breathing control, pacing, repeatability, and recovery that makes future sessions better.",
    relatedProgram: "Stamina Builder",
    tags: ["endurance", "stamina", "conditioning"]
  },
  {
    slug: "endurance-pacing",
    title: "Pacing",
    summary: "Education for controlling effort across intervals, long sessions, sport practices, and recovery days.",
    focus: "Rate of perceived exertion, talk-test awareness, heart-rate zones when available, and app notes that prevent overreaching.",
    relatedProgram: "Pacing Practice",
    tags: ["endurance", "pacing", "recovery"]
  },
  {
    slug: "explosive-jumps",
    title: "Explosive Jumps",
    summary: "Education for low-volume jump training, landing mechanics, tissue readiness, and power development.",
    focus: "Snap-downs, box jumps, broad jumps, pogo hops, landing quality, full rest, and conservative progression.",
    relatedProgram: "Jump Power Primer",
    tags: ["explosive training", "jumps", "power"]
  },
  {
    slug: "explosive-sprints",
    title: "Explosive Sprints",
    summary: "Education for acceleration exposures, sprint mechanics, warmups, hamstring readiness, and full-recovery speed practice.",
    focus: "Starts, posture, arm drive, ground contact, rest intervals, surface selection, and readiness checks.",
    relatedProgram: "Sprint Power Primer",
    tags: ["explosive training", "sprints", "speed"]
  },
  {
    slug: "explosive-power-development",
    title: "Power Development",
    summary: "Education for developing force quickly through jumps, throws, sprints, Olympic-lift derivatives, and intent-focused strength work.",
    focus: "Quality over fatigue, low rep counts, full recovery, technical consistency, and readiness-sensitive programming.",
    relatedProgram: "Power Development Block",
    tags: ["explosive training", "power", "athletic performance"]
  },
  {
    slug: "pilates",
    title: "Pilates",
    summary: "Pilates education for breath-led movement, trunk control, posture awareness, mobility, and low-impact strength practice.",
    focus: "Breathing, alignment, core control, controlled range, movement quality, and appropriate progressions.",
    relatedWorkoutCategory: "Mobility",
    relatedProgram: "Pilates Foundations",
    relatedHref: "/recovery",
    tags: ["pilates", "core control", "mobility"],
    sourceReferences: pilatesEducationReferences
  },
  {
    slug: "pilates-breathing",
    title: "Pilates Breathing",
    summary: "Education for coordinating breath with controlled movement, rib position, trunk support, and recovery pacing.",
    focus: "Lateral rib expansion, steady exhales, low-tension bracing, and breath timing during mat-based movement.",
    relatedWorkoutCategory: "Mobility",
    relatedProgram: "Pilates Breath Practice",
    relatedHref: "/recovery",
    tags: ["pilates", "breathing", "core control"],
    sourceReferences: pilatesEducationReferences
  },
  {
    slug: "pilates-posture",
    title: "Pilates Posture",
    summary: "Education for posture awareness, spinal position, shoulder control, pelvic placement, and daily movement carryover.",
    focus: "Neutral spine options, shoulder blade control, head position, hip alignment, and fatigue-aware posture cues.",
    relatedWorkoutCategory: "Mobility",
    relatedProgram: "Pilates Posture Reset",
    relatedHref: "/recovery",
    tags: ["pilates", "posture", "alignment"],
    sourceReferences: pilatesEducationReferences
  },
  {
    slug: "pilates-core-control",
    title: "Pilates Core Control",
    summary: "Education for trunk control, pelvic stability, anti-extension awareness, and slow precise movement.",
    focus: "Deep abdominal coordination, rib-pelvis stacking, controlled limbs, and regressions that keep the back comfortable.",
    relatedWorkoutCategory: "Mobility",
    relatedProgram: "Pilates Core Control",
    relatedHref: "/recovery",
    tags: ["pilates", "core", "stability"],
    sourceReferences: pilatesEducationReferences
  },
  {
    slug: "pilates-movement-quality",
    title: "Pilates Movement Quality",
    summary: "Education for slow controlled reps, smooth transitions, range ownership, and movement precision over intensity.",
    focus: "Tempo, control, breath timing, range selection, low-impact loading, and stopping before form breaks down.",
    relatedWorkoutCategory: "Mobility",
    relatedProgram: "Pilates Movement Quality",
    relatedHref: "/recovery",
    tags: ["pilates", "movement quality", "control"],
    sourceReferences: pilatesEducationReferences
  }
] satisfies Array<{
  slug: string;
  title: string;
  summary: string;
  focus: string;
  relatedWorkoutCategory?: string;
  relatedProgram: string;
  relatedHref?: string;
  tags: string[];
  sourceReferences?: TopicSeed["sourceReferences"];
}>;

trainingStyleTopics.push(
  ...phaseTwoTrainingStyleTopics.map((topic) => ({
    slug: `style-${topic.slug}`,
    title: topic.title,
    category: "Training Styles" as const,
    summary: topic.summary,
    focus: topic.focus,
    essentials: [
      "Start with the performance demand before choosing drills.",
      "Use progressions that preserve movement quality under fatigue.",
      "Track readiness, symptoms, recovery, and transfer to practice or sport."
    ],
    safety: "Sport performance content should be scaled to training age, coaching support, equipment, contact exposure, and medical restrictions.",
    relatedWorkoutCategory: topic.relatedWorkoutCategory ?? "Performance Lab",
    relatedProgram: topic.relatedProgram,
    relatedHref: topic.relatedHref ?? "/workouts",
    trackingPrompt: `Track ${topic.title.toLowerCase()} work, effort, quality, recovery, and sport carryover notes.`,
    tags: [...topic.tags, "training style", (topic.relatedWorkoutCategory ?? "Performance Lab").toLowerCase()],
    sourceReferences: topic.sourceReferences
  }))
);

const adaptiveTopics: TopicSeed[] = [
  ["wheelchair-users", "Wheelchair Users", "Upper-body strength, shoulder care, trunk control, transfers, cardio options, and accessible equipment setup.", "Wheelchair-friendly exercise selection, pressure management, shoulder balance, and recovery."],
  ["amputees", "Amputees", "Training education for limb difference, residual-limb tolerance, balance, equipment setup, and progressive loading.", "Asymmetry management, prosthetic or non-prosthetic options, skin checks, and load progression."],
  ["prosthetic-users", "Prosthetic Users", "Fitness education for prosthetic fit, gait support, strength balance, impact tolerance, and app tracking.", "Prosthetic comfort, alignment, balance drills, progressive conditioning, and recovery notes."],
  ["limited-mobility", "Limited Mobility", "Exercise education for restricted range, chair-based options, supported strength work, and daily consistency.", "Range-appropriate training, support points, fatigue management, and practical habit design."],
  ["adaptive-athletes", "Adaptive Athletes", "Performance education for athletes using modified equipment, classification-aware training, recovery, and sport transfer.", "Individualized progressions, adaptive tools, strength, conditioning, and skill practice."],
  ["seniors", "Seniors", "Education for strength, balance, mobility, walking, muscle retention, fall-risk reduction, and confidence.", "Joint-friendly strength, balance, low-impact conditioning, and recovery habits."],
  ["neurological-conditions", "Neurological Conditions", "Fitness education for coordination, fatigue, balance, gait, strength, and condition-aware pacing.", "Symptom-aware sessions, rest breaks, balance support, and professional guidance."]
].map(([slug, title, summary, focus]) => ({
  slug: `adaptive-${slug}`,
  title,
  category: "Adaptive Fitness" as const,
  summary,
  focus,
  essentials: ["Start with the athlete's available range and support needs.", "Use modifications that preserve training intent.", "Track symptoms, fatigue, setup notes, and successful adaptations."],
  safety: "Coordinate with qualified medical, rehab, or coaching professionals when medical status, equipment fit, balance, or neurological symptoms affect training.",
  relatedWorkoutCategory: "Mobility",
  relatedProgram: "Adaptive Movement Session",
  relatedHref: "/recovery",
  trackingPrompt: `Track ${title.toLowerCase()} modifications, assistance level, fatigue, and confidence.`,
  tags: [title.toLowerCase(), "adaptive fitness", "accessibility"]
}));

const specialConditionTopics: TopicSeed[] = [
  ["multiple-sclerosis", "Multiple Sclerosis", "Education for fatigue-aware exercise, heat sensitivity, balance, strength, aerobic work, and symptom tracking.", "Pacing, cooling strategies, balance support, and recovery planning."],
  ["parkinsons", "Parkinson's", "Education for movement amplitude, balance, strength, gait, coordination, and consistency.", "Large controlled movement, fall-risk awareness, rhythm, strength, and mobility."],
  ["arthritis", "Arthritis", "Education for joint-friendly strength, range of motion, warmups, flare management, and consistency.", "Load selection, warmups, range tolerance, and low-impact conditioning."],
  ["fibromyalgia", "Fibromyalgia", "Education for pacing, low-intensity starts, recovery, sleep, symptom tracking, and gradual progression.", "Energy management, gentle conditioning, strength tolerance, and recovery notes."],
  ["joint-replacement", "Joint Replacement", "Education for post-clearance strength, mobility, gait, balance, range limits, and long-term function.", "Professional clearance, safe range, strength rebuilding, and gradual exposure."],
  ["chronic-pain", "Chronic Pain", "Education for pacing, graded exposure, confidence, recovery, and tracking pain response without fear-based training.", "Baseline setting, gradual progression, flare planning, and consistency."],
  ["balance-impairment", "Balance Impairment", "Education for supported balance, foot and ankle control, strength, environmental setup, and fall-risk reduction.", "Support options, progression levels, vision and surface changes, and safety."]
].map(([slug, title, summary, focus]) => ({
  slug: `condition-${slug}`,
  title,
  category: "Special Conditions" as const,
  summary,
  focus,
  essentials: ["Use professional guidance and condition-specific restrictions.", "Choose repeatable sessions before increasing difficulty.", "Track symptoms, fatigue, balance, medication timing if relevant, and recovery."],
  safety: "This page is educational and does not replace medical care. Stop for unusual symptoms and follow clinician guidance.",
  relatedWorkoutCategory: "Mobility",
  relatedProgram: "Condition-Aware Movement",
  relatedHref: "/recovery",
  trackingPrompt: `Track ${title.toLowerCase()} symptoms, session difficulty, recovery, and consistency.`,
  tags: [title.toLowerCase(), "special condition", "recovery"]
}));

const injuryTopics: TopicSeed[] = [
  "neck",
  "shoulder",
  "elbow",
  "wrist",
  "hand",
  "upper back",
  "lower back",
  "hip",
  "hamstring",
  "quad",
  "knee",
  "acl",
  "mcl",
  "pcl",
  "meniscus",
  "calf",
  "achilles",
  "ankle",
  "foot"
].map((name) => {
  const title = name.toUpperCase() === name ? name : name.replace(/\b\w/g, (char) => char.toUpperCase());
  return {
    slug: `injury-${name.replace(/\s+/g, "-")}`,
    title: `${title} Injury Education`,
    category: "Injury Education" as const,
    summary: `Learn safety-first education for ${name} irritation, common training triggers, recovery phases, and return-to-training decisions.`,
    focus: "Calm symptoms, restore control, rebuild strength, and return gradually with professional-care prompts.",
    essentials: ["Identify aggravating movements and reduce exposure first.", "Rebuild pain-free range and control before load.", "Track next-day response before progressing intensity or volume."],
    safety: "Severe pain, swelling, instability, numbness, weakness, trauma, fever, or worsening symptoms require professional care.",
    relatedWorkoutCategory: name.includes("ankle") || name.includes("foot") ? "Mobility" : "Injured Athlete",
    relatedProgram: "Return-to-Training Phase Plan",
    relatedHref: "/injured-athlete",
    trackingPrompt: `Track ${name} symptoms, tolerated exercises, recovery phase, and next-day response.`,
    tags: [name, "injury education", "return to training"]
  };
});

const nutritionTopics: TopicSeed[] = [
  ["bulk", "Bulk", "Education for calorie surplus, protein targets, high-quality carbs, training fuel, and weight-gain pacing."],
  ["lean-bulk", "Lean Bulk", "Education for controlled surplus, muscle gain, food quality, workout carbs, and weekly adjustment."],
  ["cut", "Cut", "Education for calorie deficit, protein retention, satiety, training performance, and adherence."],
  ["recomp", "Recomp", "Education for building strength while improving body composition through protein, consistency, and training quality."],
  ["powerlifting", "Powerlifting Nutrition", "Education for meet prep, training-day carbs, weight-class planning, hydration, and sodium."],
  ["bodybuilding", "Bodybuilding Nutrition", "Education for hypertrophy fueling, meal timing, prep phases, protein distribution, and consistency."],
  ["endurance", "Endurance Nutrition", "Education for carb timing, long-session fuel, electrolytes, recovery meals, and energy availability."],
  ["tactical", "Tactical Nutrition", "Education for portable meals, hydration, durable carbs, long shifts, and readiness."],
  ["general-fitness", "General Fitness Nutrition", "Education for balanced meals, protein habits, hydration, grocery structure, and sustainable routines."]
].map(([slug, title, summary]) => ({
  slug: `nutrition-${slug}`,
  title,
  category: "Nutrition" as const,
  summary,
  focus: "Calories, protein, carbohydrates, fats, hydration, grocery planning, and app-based nutrition tracking.",
  essentials: ["Choose the nutrition goal before changing calories.", "Prioritize protein, hydration, and repeatable meals.", "Use weekly trends instead of reacting to one day."],
  safety: "Nutrition advice is educational. Medical conditions, eating disorders, pregnancy, and clinical nutrition needs require qualified care.",
  relatedWorkoutCategory: title.includes("Endurance") ? "Performance Lab" : title.includes("Powerlifting") || title.includes("Bodybuilding") ? "Iron Forge" : "Nutrition",
  relatedProgram: "Goal-Based Meal Plan",
  relatedHref: "/nutrition",
  trackingPrompt: `Track ${title.toLowerCase()} calories, protein, hydration, meal notes, and weekly trend.`,
  tags: [title.toLowerCase(), "nutrition", "meal plan"]
}));

const recoveryTopics: TopicSeed[] = [
  ["sleep", "Sleep", "Education for sleep timing, consistency, environment, training recovery, appetite regulation, and readiness."],
  ["recovery", "Recovery", "Education for fatigue management, rest days, readiness, soreness, stress, and training adaptation."],
  ["warmups", "Warmups", "Education for preparing joints, tissues, temperature, skill, and nervous system before training."],
  ["cooldowns", "Cooldowns", "Education for downshifting after training, breathing, mobility, walking, and recovery notes."],
  ["mobility", "Mobility", "Education for active range, joint control, end-range strength, and movement options."],
  ["stretching", "Stretching", "Education for flexibility, breathing, position tolerance, timing, and long-term consistency."],
  ["breathing", "Breathing", "Education for downregulation, bracing, rib position, recovery, and stress management."],
  ["active-recovery", "Active Recovery", "Education for easy movement, low-intensity cardio, mobility, blood flow, and fatigue reduction."],
  ["hydration", "Hydration Education", "Education for daily fluids, sweat losses, electrolytes, heat exposure, training duration, and recovery planning."]
].map(([slug, title, summary]) => ({
  slug: `recovery-${slug}`,
  title,
  category: "Recovery" as const,
  summary,
  focus: "Readiness, consistency, low-friction routines, and recovery habits that support training.",
  essentials: ["Match recovery work to the stress of training.", "Use easy repeatable habits before complex routines.", "Track readiness and symptoms to guide progression."],
  safety: "Recovery practices should not be used to push through warning signs or medical symptoms.",
  relatedWorkoutCategory: "Mobility",
  relatedProgram: `${title} Reset`,
  relatedHref: "/recovery",
  trackingPrompt: `Track ${title.toLowerCase()} completion, readiness, symptoms, and next-session quality.`,
  tags: [title.toLowerCase(), "recovery", "readiness"]
}));

const additionalTopics: TopicSeed[] = [
  ["workplace-fitness", "Workplace Fitness", "Education for posture breaks, walking, desk mobility, low-equipment strength, stress reduction, and consistency at work."],
  ["youth-fitness", "Youth Fitness", "Education for age-appropriate movement, skill development, fun, strength basics, and safe progression."],
  ["womens-fitness", "Women's Fitness", "Education for strength, nutrition, recovery, pelvic health awareness, cycle-aware notes, and life-stage considerations."],
  ["active-aging", "Active Aging", "Education for muscle retention, balance, mobility, walking, strength, power, and independence."],
  ["fitness-psychology", "Fitness Psychology", "Education for motivation, identity, confidence, self-talk, stress, and behavior change."],
  ["habit-building", "Habit Building", "Education for cues, routines, rewards, environment design, streaks, and small repeatable actions."],
  ["goal-setting", "Goal Setting", "Education for outcome goals, process goals, milestones, measurement, and realistic timelines."],
  ["consistency-systems", "Consistency Systems", "Education for weekly planning, friction reduction, fallback workouts, accountability, and tracking loops."]
].map(([slug, title, summary]) => ({
  slug: `guide-${slug}`,
  title,
  category: "Additional Sections" as const,
  summary,
  focus: "Practical education that supports the habits behind training, nutrition, recovery, and long-term progress.",
  essentials: ["Define the behavior clearly.", "Choose the smallest repeatable next action.", "Use the app to track completion, notes, and streaks."],
  safety: "Adjust expectations around sleep, stress, medical status, age, and available support.",
  relatedWorkoutCategory: title.includes("Workplace") || title.includes("Aging") ? "Mobility" : "Dashboard",
  relatedProgram: "Consistency Plan",
  relatedHref: title.includes("Workplace") || title.includes("Aging") ? "/recovery" : "/dashboard",
  trackingPrompt: `Track ${title.toLowerCase()} actions, barriers, streaks, and weekly reflection.`,
  tags: [title.toLowerCase(), "habits", "education"]
}));

const professionalReviewFlagMatchers = [
  { flag: "injury", patterns: ["injury", "injured", "pain", "return-to-training", "sports injuries"] },
  { flag: "adaptive fitness", patterns: ["adaptive", "wheelchair", "prosthetic", "amputee", "limited mobility", "neurological", "disability"] },
  { flag: "youth fitness", patterns: ["youth", "teen", "child", "family", "parents"] },
  { flag: "women's fitness", patterns: ["women", "pregnancy", "postpartum", "pelvic", "female"] },
  { flag: "nutrition", patterns: ["nutrition", "calories", "protein", "carbohydrates", "fats", "hydration", "meal", "food", "diabetes"] },
  { flag: "recovery", patterns: ["recovery", "sleep", "cooldown", "warmup", "mobility", "stretching", "breathing"] },
  { flag: "medical-adjacent", patterns: ["condition", "medical", "symptom", "diagnosis", "disease", "nerve", "neurological", "dizziness", "numbness"] }
];

function inferReviewFlags(seed: TopicSeed) {
  const haystack = [
    seed.slug,
    seed.title,
    seed.category,
    seed.summary,
    seed.focus,
    seed.safety,
    ...seed.tags
  ].join(" ").toLowerCase();

  const categoryFlags: string[] = [];
  if (seed.category === "Injury Education") categoryFlags.push("injury", "medical-adjacent");
  if (seed.category === "Adaptive Fitness" || seed.category === "Special Conditions") categoryFlags.push("adaptive fitness", "medical-adjacent");
  if (seed.category === "Nutrition") categoryFlags.push("nutrition", "medical-adjacent");
  if (seed.category === "Recovery") categoryFlags.push("recovery");

  const matchedFlags = professionalReviewFlagMatchers
    .filter(({ patterns }) => patterns.some((pattern) => haystack.includes(pattern)))
    .map(({ flag }) => flag);

  return Array.from(new Set([...(seed.reviewFlags ?? []), ...categoryFlags, ...matchedFlags]));
}

function inferReviewerType(flags: string[]): ExpertReviewFields["reviewerType"] {
  if (flags.includes("nutrition")) return "nutrition professional";
  if (flags.includes("adaptive fitness")) return "adaptive fitness specialist";
  if (flags.includes("youth fitness")) return "youth fitness specialist";
  if (flags.includes("women's fitness")) return "women's fitness specialist";
  if (flags.includes("injury") || flags.includes("medical-adjacent") || flags.includes("recovery")) return "healthcare professional";

  return "editorial reviewer";
}

function withDescription(seed: TopicSeed): EducationTopic {
  const reviewFlags = inferReviewFlags(seed);
  const reviewerType = seed.reviewerType ?? inferReviewerType(reviewFlags);

  return {
    ...seed,
    description: `${seed.summary} Learn what the website teaches, then use E.R. Fitness to track related actions, notes, and progress.`,
    benefits: seed.benefits ?? [
      `Builds practical understanding of ${seed.title.toLowerCase()} before users choose exercises or routines.`,
      "Connects education to app tracking, progression notes, readiness, and symptom awareness.",
      "Supports safer decision-making by pairing training ideas with boundaries and source references."
    ],
    commonMistakes: seed.commonMistakes ?? [
      "Chasing intensity before learning the purpose of the topic.",
      "Ignoring pain, fatigue, readiness, or technique warnings.",
      "Treating general education as a substitute for qualified medical or coaching guidance."
    ],
    sourceReferences: seed.sourceReferences ?? defaultEducationReferences,
    reviewStatus: seed.reviewStatus ?? (reviewFlags.length ? "Awaiting Review" : "Source Linked"),
    reviewerType,
    reviewDate: seed.reviewDate ?? "Pending",
    reviewedBy: seed.reviewedBy ?? "Unassigned",
    reviewNotes:
      seed.reviewNotes ??
      (reviewFlags.length
        ? `Flagged for ${reviewFlags.join(", ")} expert review before publication as professional guidance.`
        : "Source-linked education draft ready for editorial review."),
    reviewFlags,
    articleSections: seed.articleSections ?? [
      {
        title: "How to Use This Topic",
        body: `${seed.title} should be treated as a decision-making guide, not a one-size-fits-all prescription. Start by matching the topic to the user's goal, current capacity, available equipment, and recovery status, then choose the least complex action that still trains the intended quality.`,
        bullets: [
          "Identify the main goal before adding volume or intensity.",
          "Choose exercises, routines, or habits that match current ability and available equipment.",
          "Use notes, readiness, symptoms, and performance trends to decide when to progress."
        ]
      },
      {
        title: "Programming and Progression",
        body: `Progress in ${seed.title.toLowerCase()} comes from repeatable practice, appropriate challenge, and recovery that supports adaptation. The safest default is to change one variable at a time: load, reps, time, range, speed, density, or complexity.`,
        bullets: [
          "Progress one variable at a time so the user can tell what changed.",
          "Keep technique and symptom response visible in the app notes.",
          "Deload, regress, or seek coaching when quality drops before the planned work is complete."
        ]
      },
      {
        title: "Media and Review Plan",
        body: `E.R. Fitness should pair this education with owned or properly licensed images, short demonstration clips, and source records before treating the page as publication-ready professional guidance.`,
        bullets: [
          "Add original images for setup, execution, and common mistakes.",
          "Add short videos for the main cue, regression, progression, and safety boundary.",
          "Keep medical, injury, adaptive, and nutrition topics marked for professional review."
        ]
      }
    ],
    mediaPlan: seed.mediaPlan ?? {
      imageSlots: ["overview diagram", "setup example", "common mistake", "progression/regression"],
      videoSlots: ["short explanation", "movement demo", "safety walkthrough"],
      licensingNotes: "Use E.R. Fitness-owned, contributor-licensed, public-domain, Creative Commons, or purchased/licensed media only."
    }
  };
}

export const educationTopics: EducationTopic[] = [
  ...bodyTopics,
  ...trainingStyleTopics,
  ...adaptiveTopics,
  ...specialConditionTopics,
  ...injuryTopics,
  ...nutritionTopics,
  ...recoveryTopics,
  ...additionalTopics
].map(withDescription);

export const expertReviewStatuses: ExpertReviewFields["reviewStatus"][] = [
  "E.R. Fitness Draft",
  "Source Linked",
  "Awaiting Review",
  "Reviewed"
];

export const expertReviewQueue = educationTopics
  .filter((topic) => topic.reviewStatus === "Awaiting Review" || topic.reviewFlags.length > 0)
  .map((topic) => ({
    title: topic.title,
    href: `/education/${topic.slug}`,
    category: topic.category,
    reviewStatus: topic.reviewStatus,
    reviewerType: topic.reviewerType,
    reviewDate: topic.reviewDate,
    reviewedBy: topic.reviewedBy,
    reviewNotes: topic.reviewNotes,
    reviewFlags: topic.reviewFlags
  }));

export const educationCategories: EducationCategory[] = [
  "Body Education",
  "Training Styles",
  "Adaptive Fitness",
  "Special Conditions",
  "Injury Education",
  "Nutrition",
  "Recovery",
  "Additional Sections"
];

export const educationCategoryCards: FeatureCard[] = educationCategories.map((category) => ({
  title: category,
  description: educationCategoryDescriptions[category],
  href: `/education#${category.toLowerCase().replace(/\s+/g, "-")}`,
  meta: `${educationTopics.filter((topic) => topic.category === category).length} pages`
}));

export const educationSearchTags = Array.from(
  new Set(educationTopics.flatMap((topic) => [topic.category, topic.relatedWorkoutCategory, ...topic.tags]))
).sort();

export function getEducationTopic(slug: string) {
  return educationTopics.find((topic) => topic.slug === slug);
}

export function getEducationTopicsByCategory(category: EducationCategory) {
  return educationTopics.filter((topic) => topic.category === category);
}

export function getEducationCardsByCategory(category: EducationCategory): FeatureCard[] {
  return getEducationTopicsByCategory(category).map((topic) => ({
    title: topic.title,
    description: topic.summary,
    href: `/education/${topic.slug}`,
    meta: topic.relatedWorkoutCategory
  }));
}

export function getRelatedEducationTopics(topic: EducationTopic) {
  return educationTopics
    .filter((item) => item.slug !== topic.slug && (item.category === topic.category || item.relatedWorkoutCategory === topic.relatedWorkoutCategory))
    .slice(0, 4);
}

export const educationAuditReport = {
  auditedAreas: [
    "routes",
    "pages",
    "incomplete-copy scan",
    "content blocks",
    "navigation menus",
    "categories",
    "search surfaces",
    "media systems"
  ],
  completedCoverage: educationCategories.map((category) => ({
    category,
    pages: educationTopics.filter((topic) => topic.category === category).length
  })),
  reviewQueue: [
    "Connect backend search to the schema-ready education filters.",
    "Replace website route handoffs with the native app link scheme after it is finalized.",
    "Route medical, legal, and clinical education copy through qualified professional review before public launch."
  ]
};
