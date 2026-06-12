export type ContentPackArea =
  | "Workout & Exercise"
  | "Training Principles"
  | "Nutrition"
  | "Recovery"
  | "Adaptive Fitness"
  | "Injury Education"
  | "Yoga"
  | "Pilates"
  | "Tai Chi"
  | "Community Guidance"
  | "Media Rights";

export type ContentReference = {
  title: string;
  source: string;
  href: string;
  notes: string;
};

export type ContentPackMedia = {
  title: string;
  area: ContentPackArea;
  mediaType: "External video" | "External image sequence" | "Reference library" | "Public toolkit";
  routeHref: string;
  sourceHref: string;
  source: string;
  license: string;
  summary: string;
  sequenceFrames: string[];
  tags: string[];
  references: ContentReference[];
};

export type ContentPackLesson = {
  title: string;
  area: ContentPackArea;
  routeHref: string;
  level: "Beginner" | "All Levels" | "Intermediate" | "Safety Review";
  summary: string;
  teach: string[];
  apply: string[];
  track: string[];
  safety: string;
  tags: string[];
  references: ContentReference[];
};

export type PublicMaterialRecord = {
  title: string;
  area: ContentPackArea;
  materialType: "Guideline" | "Article" | "Video library" | "Exercise plan" | "Toolkit" | "Rehab handout" | "Reference library";
  href: string;
  source: string;
  summary: string;
  useFor: string[];
  rights: string;
  tags: string[];
};

export type OpenWorkoutSystemRecord = {
  title: string;
  area: ContentPackArea;
  level: "Beginner" | "All Levels" | "Older Adult" | "Adaptive" | "Recovery";
  routeHref: string;
  summary: string;
  weeklyStructure: string[];
  sessionTemplate: string[];
  progression: string[];
  safety: string;
  sourceHref: string;
  source: string;
  rights: string;
  references: ContentReference[];
  tags: string[];
};

export type TopicDiscoveryRecord = {
  title: string;
  area: ContentPackArea;
  routeHref: string;
  discoverySourceTitle: string;
  discoverySourceUrl: string;
  reviewStatus: "Discovery only" | "Cross-checked";
  attributionNotes: string;
  originalSummary: string;
  terminology: string[];
  relatedConcepts: string[];
  crossChecks: ContentReference[];
  tags: string[];
};

const references = {
  cdcPhysicalActivityBasics: {
    title: "Physical Activity Basics and Your Health",
    source: "CDC",
    href: "https://www.cdc.gov/physical-activity-basics/about/index.html",
    notes: "CDC overview of physical activity benefits, recommendations, and ways to add activity."
  },
  cdcRecommendations: {
    title: "What You Can Do to Meet Physical Activity Recommendations",
    source: "CDC",
    href: "https://www.cdc.gov/physical-activity-basics/guidelines/index.html",
    notes: "CDC summary of physical activity recommendations by age and population."
  },
  cdcChronicDisabilities: {
    title: "Chronic Conditions & Disabilities Activity",
    source: "CDC",
    href: "https://www.cdc.gov/physical-activity-basics/guidelines/chronic-health-conditions-and-disabilities.html",
    notes: "CDC activity recommendations and examples for adults with chronic conditions and disabilities."
  },
  cdcOlderAdults: {
    title: "Older Adults: Adding Activity Recommendations",
    source: "CDC",
    href: "https://www.cdc.gov/physical-activity-basics/adding-older-adults/index.html",
    notes: "CDC guidance for adding activity as an older adult."
  },
  cdcAddingAdults: {
    title: "Adding Physical Activity as an Adult",
    source: "CDC",
    href: "https://www.cdc.gov/physical-activity-basics/adding-adults/index.html",
    notes: "CDC adult activity examples, weekly schedules, planning links, and doctor-check guidance."
  },
  cdcBenefits: {
    title: "Benefits of Physical Activity",
    source: "CDC",
    href: "https://www.cdc.gov/physical-activity-basics/benefits/index.html",
    notes: "CDC summary of immediate and long-term physical activity benefits."
  },
  cdcIntensity: {
    title: "How to Measure Physical Activity Intensity",
    source: "CDC",
    href: "https://www.cdc.gov/physical-activity-basics/measuring/index.html",
    notes: "CDC moderate- and vigorous-intensity examples and measurement guidance."
  },
  physicalActivityGuidelines: {
    title: "Physical Activity Guidelines for Americans",
    source: "ODPHP / HHS",
    href: "https://odphp.health.gov/our-work/nutrition-physical-activity/physical-activity-guidelines/current-guidelines",
    notes: "Evidence-based federal physical activity guidance."
  },
  nhsExerciseHub: {
    title: "Exercise",
    source: "NHS",
    href: "https://www.nhs.uk/live-well/exercise/",
    notes: "NHS exercise guidelines, strength and flexibility exercises, and fitness studio videos."
  },
  nhsStrengthFlexVideos: {
    title: "Strength and Flex exercise plan: How-to videos",
    source: "NHS",
    href: "https://www.nhs.uk/live-well/exercise/strength-and-flex-exercise-plan-how-to-videos/",
    notes: "Free NHS how-to videos for warmups, posture, standing press-ups, squats, stretches, sit-to-stand, pull-ups, and related movements."
  },
  nhsBalance: {
    title: "Balance exercises",
    source: "NHS",
    href: "https://www.nhs.uk/live-well/exercise/balance-exercises/",
    notes: "Free NHS balance exercise page."
  },
  nhsSitting: {
    title: "Sitting exercises",
    source: "NHS",
    href: "https://www.nhs.uk/live-well/exercise/sitting-exercises/",
    notes: "Free NHS sitting exercise page."
  },
  nhsStrength: {
    title: "Strength exercises",
    source: "NHS",
    href: "https://www.nhs.uk/live-well/exercise/strength-exercises/",
    notes: "Free NHS strength exercise page."
  },
  nhsPilatesYoga: {
    title: "Pilates and yoga exercise videos",
    source: "NHS",
    href: "https://www.nhs.uk/live-well/exercise/pilates-and-yoga/",
    notes: "Free NHS Pilates and yoga video collection."
  },
  nhsWheelchair: {
    title: "Fitness advice for wheelchair users",
    source: "NHS",
    href: "https://www.nhs.uk/live-well/exercise/wheelchair-users-fitness-advice/",
    notes: "NHS fitness advice for wheelchair users."
  },
  moveYourWay: {
    title: "Move Your Way tools, videos, and fact sheets",
    source: "ODPHP / HHS",
    href: "https://odphp.health.gov/moveyourway",
    notes: "Public activity campaign with videos, fact sheets, and weekly planning tools."
  },
  moveYourWayActivityPlanner: {
    title: "Move Your Way Activity Planner",
    source: "ODPHP / HHS",
    href: "https://odphp.health.gov/moveyourway/activity-planner",
    notes: "HHS weekly activity planner for goals, chosen activities, motivation tips, and printable tracking."
  },
  medlineExercise: {
    title: "Exercise and Physical Fitness",
    source: "NIH / MedlinePlus",
    href: "https://medlineplus.gov/exerciseandphysicalfitness.html",
    notes: "Government health topic page for exercise basics, types, safety, videos, and tutorials."
  },
  aceExerciseLibrary: {
    title: "ACE Exercise Library",
    source: "American Council on Exercise",
    href: "https://www.acefitness.org/resources/everyone/exercise-library/",
    notes: "Exercise demonstrations with detailed descriptions and photos; link only unless licensed."
  },
  aceExerciseVideos: {
    title: "ACE Exercise Video Library",
    source: "American Council on Exercise",
    href: "https://www.acefitness.org/resources/everyone/exercise-library/video/",
    notes: "Exercise video collection hosted externally by ACE and YouTube."
  },
  aceSquat: {
    title: "Bodyweight Squat",
    source: "American Council on Exercise",
    href: "https://www.acefitness.org/resources/everyone/exercise-library/135/bodyweight-squat/",
    notes: "Exercise demonstration page with photos and step-by-step form guidance."
  },
  acePushUp: {
    title: "Bent-Knee Push-Up",
    source: "American Council on Exercise",
    href: "https://www.acefitness.org/resources/everyone/exercise-library/13/bent-knee-push-up/",
    notes: "Beginner push-up demonstration page with photos and step-by-step form guidance."
  },
  aceCarry: {
    title: "Farmer's Carry",
    source: "American Council on Exercise",
    href: "https://www.acefitness.org/resources/everyone/exercise-library/359/farmer-s-carry/",
    notes: "Loaded carry demonstration page with setup and execution notes."
  },
  aceLunge: {
    title: "Forward Lunge",
    source: "American Council on Exercise",
    href: "https://www.acefitness.org/resources/everyone/exercise-library/94/forward-lunge/",
    notes: "Lunge demonstration page with setup and movement description."
  },
  aaosKnee: {
    title: "Knee Conditioning Program",
    source: "AAOS OrthoInfo",
    href: "https://orthoinfo.aaos.org/en/recovery/knee-conditioning-program/",
    notes: "Orthopaedic education and exercise handout; use under professional guidance."
  },
  aaosShoulder: {
    title: "Rotator Cuff and Shoulder Conditioning Program",
    source: "AAOS OrthoInfo",
    href: "https://orthoinfo.aaos.org/en/recovery/rotator-cuff-and-shoulder-conditioning-program/",
    notes: "Shoulder conditioning program reviewed by orthopaedic specialists."
  },
  aaosSpine: {
    title: "Spine Conditioning Program",
    source: "AAOS OrthoInfo",
    href: "https://orthoinfo.aaos.org/en/recovery/spine-conditioning-program/",
    notes: "Spine conditioning program; use under doctor or physical therapist supervision."
  },
  myPlate: {
    title: "What Is MyPlate?",
    source: "USDA MyPlate",
    href: "https://www.myplate.gov/eat-healthy/what-is-myplate",
    notes: "USDA consumer nutrition framework for food groups and balanced meals."
  },
  dietaryGuidelines: {
    title: "Dietary Guidelines for Americans",
    source: "USDA / HHS",
    href: "https://www.dietaryguidelines.gov/",
    notes: "Federal dietary guidance and resources."
  },
  nccihYoga: {
    title: "Yoga: Effectiveness and Safety",
    source: "NIH / NCCIH",
    href: "https://www.nccih.nih.gov/health/yoga-effectiveness-and-safety",
    notes: "NIH research summary covering yoga uses, benefits, and safety cautions."
  },
  nccihTaiChi: {
    title: "Tai Chi: What You Need To Know",
    source: "NIH / NCCIH",
    href: "https://www.nccih.nih.gov/health/tai-chi-what-you-need-to-know",
    notes: "NIH research summary covering tai chi, balance, chronic disease considerations, and safety."
  },
  nchpad: {
    title: "National Center on Health, Physical Activity and Disability",
    source: "NCHPAD",
    href: "https://www.nchpad.org/",
    notes: "CDC-funded inclusive health, physical activity, and disability resource center."
  },
  nchpadVideoLibrary: {
    title: "NCHPAD Video Library",
    source: "NCHPAD",
    href: "https://www.youtube.com/@NCHPAD",
    notes: "Adaptive health and wellness videos hosted by NCHPAD on YouTube."
  },
  moveYourWayCommunity: {
    title: "Move Your Way Community Resources",
    source: "ODPHP / HHS",
    href: "https://odphp.health.gov/our-work/nutrition-physical-activity/move-your-way-community-resources",
    notes: "Community campaign resources, materials, and implementation tools."
  },
  moveYourWayPlaybook: {
    title: "Move Your Way Community Playbook",
    source: "ODPHP / HHS",
    href: "https://odphp.health.gov/our-work/nutrition-physical-activity/move-your-way-community-resources/community-playbook",
    notes: "Planning, implementation, and evaluation framework for community physical activity efforts."
  }
} satisfies Record<string, ContentReference>;

export const verifiedContentReferences = Object.values(references);

export const contentPackMedia: ContentPackMedia[] = [
  {
    title: "Bodyweight Squat Photo Sequence",
    area: "Workout & Exercise",
    mediaType: "External image sequence",
    routeHref: "/exercises",
    sourceHref: references.aceSquat.href,
    source: references.aceSquat.source,
    license: "External ACE photos and copy are linked for reference only; do not copy into E.R. Fitness without permission.",
    summary: "Foundational lower-body pattern with external photos and step-by-step support for setup, bracing, descent, bottom position, and ascent.",
    sequenceFrames: ["Foot stance and tall posture", "Brace and hip hinge initiation", "Controlled descent", "Bottom position check", "Heel-driven ascent", "Knee cave or torso collapse error check"],
    tags: ["squat", "quads", "glutes", "beginner", "image sequence"],
    references: [references.aceSquat, references.aceExerciseLibrary, references.medlineExercise]
  },
  {
    title: "Bent-Knee Push-Up Photo Sequence",
    area: "Workout & Exercise",
    mediaType: "External image sequence",
    routeHref: "/exercises",
    sourceHref: references.acePushUp.href,
    source: references.acePushUp.source,
    license: "External ACE photos and copy are linked for reference only; do not copy into E.R. Fitness without permission.",
    summary: "Beginner push-up progression for teaching hand position, trunk line, descent control, press position, and regression quality.",
    sequenceFrames: ["Kneeling setup", "Hands under shoulders", "Brace and body line", "Lowering position", "Press to start", "Neck-forward or hip-sag error check"],
    tags: ["push-up", "chest", "triceps", "beginner", "image sequence"],
    references: [references.acePushUp, references.aceExerciseLibrary]
  },
  {
    title: "Farmer's Carry Photo Sequence",
    area: "Workout & Exercise",
    mediaType: "External image sequence",
    routeHref: "/workouts",
    sourceHref: references.aceCarry.href,
    source: references.aceCarry.source,
    license: "External ACE photos and copy are linked for reference only; do not copy into E.R. Fitness without permission.",
    summary: "Loaded carry teaching asset for grip, tall posture, controlled gait, trunk stiffness, and stopping before posture breaks.",
    sequenceFrames: ["Load selection", "Tall pickup", "Shoulders packed", "Controlled walk", "Turn and set down", "Leaning or rushing error check"],
    tags: ["carry", "grip", "core", "conditioning", "image sequence"],
    references: [references.aceCarry, references.aceExerciseLibrary]
  },
  {
    title: "Forward Lunge Photo Sequence",
    area: "Workout & Exercise",
    mediaType: "External image sequence",
    routeHref: "/workouts",
    sourceHref: references.aceLunge.href,
    source: references.aceLunge.source,
    license: "External ACE photos and copy are linked for reference only; do not copy into E.R. Fitness without permission.",
    summary: "Unilateral lower-body pattern for stride length, hip control, knee tracking, balance, and return-to-stand mechanics.",
    sequenceFrames: ["Standing setup", "Step length", "Descent control", "Bottom alignment", "Push back to stand", "Knee collapse or overstride error check"],
    tags: ["lunge", "single-leg", "balance", "quads", "image sequence"],
    references: [references.aceLunge, references.aceExerciseLibrary]
  },
  {
    title: "Plank School Video",
    area: "Workout & Exercise",
    mediaType: "External video",
    routeHref: "/exercises",
    sourceHref: references.aceExerciseVideos.href,
    source: references.aceExerciseVideos.source,
    license: "External ACE/YouTube video; link or embed only according to provider terms.",
    summary: "Core-position video resource for teaching trunk tension, shoulder position, breathing, and regression quality.",
    sequenceFrames: ["Forearm setup", "Rib and pelvis stack", "Shoulder pressure", "Breathing under tension", "Stop point", "Sagging or shrugging error check"],
    tags: ["plank", "core", "video", "bracing"],
    references: [references.aceExerciseVideos, references.medlineExercise]
  },
  {
    title: "Shoulder Conditioning Image Sequence",
    area: "Injury Education",
    mediaType: "External image sequence",
    routeHref: "/injured-athlete",
    sourceHref: references.aaosShoulder.href,
    source: references.aaosShoulder.source,
    license: "External AAOS educational images and copy are linked for reference only; do not copy into E.R. Fitness without permission.",
    summary: "Rotator cuff and shoulder conditioning reference for pendulum, arm stretch, rotation, rows, and scapular control.",
    sequenceFrames: ["Warmup first", "Gentle range", "Pain-free stretch", "Light band row", "Rotation control", "Stop for pain or uncertainty"],
    tags: ["shoulder", "rotator cuff", "rehab", "image sequence"],
    references: [references.aaosShoulder]
  },
  {
    title: "Knee Conditioning Image Sequence",
    area: "Injury Education",
    mediaType: "External image sequence",
    routeHref: "/injured-athlete",
    sourceHref: references.aaosKnee.href,
    source: references.aaosKnee.source,
    license: "External AAOS educational images and copy are linked for reference only; do not copy into E.R. Fitness without permission.",
    summary: "Knee conditioning reference for warmup, stretching, strength, flexibility, and pain-aware progression.",
    sequenceFrames: ["Low-impact warmup", "Heel cord stretch", "Quad stretch", "Half squat", "Calf raise", "Do not ignore pain"],
    tags: ["knee", "rehab", "return to training", "image sequence"],
    references: [references.aaosKnee]
  },
  {
    title: "Spine Conditioning Image Sequence",
    area: "Recovery",
    mediaType: "External image sequence",
    routeHref: "/recovery",
    sourceHref: references.aaosSpine.href,
    source: references.aaosSpine.source,
    license: "External AAOS educational images and copy are linked for reference only; do not copy into E.R. Fitness without permission.",
    summary: "Spine conditioning reference for safe warmups, trunk control, range tolerance, and professional-guidance boundaries.",
    sequenceFrames: ["Warmup", "Neutral spine setup", "Gentle stretch", "Core control", "Strength tolerance", "Stop for symptoms"],
    tags: ["spine", "back", "recovery", "image sequence"],
    references: [references.aaosSpine]
  },
  {
    title: "Move Your Way Video Set",
    area: "Community Guidance",
    mediaType: "External video",
    routeHref: "/community",
    sourceHref: references.moveYourWay.href,
    source: references.moveYourWay.source,
    license: "HHS-hosted public campaign resources; link and use according to HHS campaign terms.",
    summary: "Motivation, busy-day activity, family activity, older-adult pledge, and community activity videos for beginner-friendly education.",
    sequenceFrames: ["Motivation prompt", "Busy-day movement", "Older-adult pledge", "Family activity", "Pregnancy/postpartum activity", "Link to official HHS video page"],
    tags: ["video", "motivation", "community", "habit building"],
    references: [references.moveYourWay, references.physicalActivityGuidelines]
  },
  {
    title: "NCHPAD Adaptive Video Library",
    area: "Adaptive Fitness",
    mediaType: "External video",
    routeHref: "/adaptive-fitness",
    sourceHref: references.nchpadVideoLibrary.href,
    source: references.nchpadVideoLibrary.source,
    license: "External NCHPAD/YouTube videos; link or embed only according to provider terms.",
    summary: "Adaptive wellness and movement videos for disability-aware education, inclusive participation, and accessible programming ideas.",
    sequenceFrames: ["Accessible setup", "Seated or supported option", "Adaptive equipment note", "Pacing check", "Confidence check", "Provider or coach follow-up"],
    tags: ["adaptive", "disability", "video", "inclusive fitness"],
    references: [references.nchpad, references.nchpadVideoLibrary]
  }
];

export const contentPackLessons: ContentPackLesson[] = [
  {
    title: "Beginner Movement Lesson",
    area: "Workout & Exercise",
    routeHref: "/workouts",
    level: "Beginner",
    summary: "Teach users how to choose movement categories, start below their limit, and build repeatable workouts before chasing intensity.",
    teach: ["Use aerobic, strength, balance, and flexibility categories.", "Start with exercises that match current range and control.", "Progress one variable at a time: reps, load, time, range, or density."],
    apply: ["Pick one squat or hinge, one push, one pull, one carry or core drill, and one cooldown.", "Keep the first week technically easy enough to repeat.", "Use exercise library image-sequence links before logging unfamiliar movements."],
    track: ["Workout completion", "RPE", "Movement notes", "Pain-free range", "Next-day response"],
    safety: "People with medical concerns, balance problems, or movement restrictions should consult a qualified professional and start with conservative options.",
    tags: ["beginner", "movement categories", "workout setup"],
    references: [references.medlineExercise, references.physicalActivityGuidelines, references.aceExerciseLibrary]
  },
  {
    title: "Progressive Overload and Programming Lesson",
    area: "Training Principles",
    routeHref: "/training-nutrition-principles",
    level: "All Levels",
    summary: "Make progression measurable while keeping technique, recovery, and safety boundaries visible.",
    teach: ["Progression can come from load, reps, sets, range, tempo, time, or density.", "Random variation is different from planned variation.", "Recovery determines whether progression becomes adaptation or accumulated fatigue."],
    apply: ["Keep one main lift or pattern stable for several weeks.", "Rotate accessories when they support joints, skill, or weak points.", "Deload when performance, readiness, or symptoms trend down."],
    track: ["Top sets", "Reps completed", "RPE", "Readiness", "Sleep", "Soreness"],
    safety: "Do not use progression rules to justify sharp pain, worsening symptoms, poor technique, or exhaustion-driven training.",
    tags: ["progressive overload", "periodization", "training principles"],
    references: [references.physicalActivityGuidelines, references.medlineExercise]
  },
  {
    title: "Training-Day Nutrition Lesson",
    area: "Nutrition",
    routeHref: "/nutrition",
    level: "All Levels",
    summary: "Teach calories, protein, carbs, fats, hydration, and plate structure as practical training-support tools.",
    teach: ["Calories set the broad energy direction.", "Protein supports muscle repair and satiety.", "Carbohydrates can support harder training and recovery.", "Hydration and food quality affect performance and consistency."],
    apply: ["Build meals around protein, produce, useful carbs, and planned fats.", "Place more carbs near hard sessions when performance needs support.", "Use weekly trends instead of reacting to a single day."],
    track: ["Calories", "Protein", "Hydration", "Training-day carbs", "Meal notes", "Weekly trend"],
    safety: "Medical nutrition needs, pregnancy, eating disorder history, diabetes, kidney disease, or blood sugar concerns require qualified professional guidance.",
    tags: ["nutrition", "macros", "meal plans", "hydration"],
    references: [references.myPlate, references.dietaryGuidelines, references.medlineExercise]
  },
  {
    title: "Recovery Readiness Lesson",
    area: "Recovery",
    routeHref: "/recovery",
    level: "All Levels",
    summary: "Teach warmups, cooldowns, mobility, active recovery, sleep, and readiness as the support system for training.",
    teach: ["Warmups prepare tissues and skill.", "Cooldowns can downshift intensity and organize recovery notes.", "Mobility work should build controllable range, not forced positions.", "Sleep and stress change training tolerance."],
    apply: ["Use 5 to 10 minutes of easy movement before harder sessions.", "Pair mobility drills with the joints needed for the workout.", "Use active recovery when fatigue is high but movement still feels helpful."],
    track: ["Readiness", "Sleep quality", "Warmup completion", "Cooldown completion", "Mobility notes", "Symptoms"],
    safety: "Recovery tools should not be used to push through warning signs or delay needed care.",
    tags: ["recovery", "warmup", "cooldown", "mobility"],
    references: [references.medlineExercise, references.physicalActivityGuidelines, references.aaosSpine]
  },
  {
    title: "Return-to-Training Lesson",
    area: "Injury Education",
    routeHref: "/injured-athlete",
    level: "Safety Review",
    summary: "Teach a conservative return path: calm symptoms, restore control, rebuild strength, and return gradually.",
    teach: ["Symptoms and medical red flags come before programming.", "Range and control should come before load.", "Next-day response matters more than how a movement felt during one set."],
    apply: ["Identify aggravating movements and reduce exposure.", "Use pain-free mobility and light isometrics only when appropriate.", "Progress load after repeated stable responses."],
    track: ["Symptom location", "Pain scale", "Tolerated exercises", "Next-day response", "Professional guidance notes"],
    safety: "Severe pain, swelling, instability, numbness, weakness, trauma, fever, or worsening symptoms require professional care.",
    tags: ["injury", "return to training", "professional care"],
    references: [references.aaosKnee, references.aaosShoulder, references.aaosSpine]
  },
  {
    title: "Adaptive Setup Lesson",
    area: "Adaptive Fitness",
    routeHref: "/adaptive-fitness",
    level: "All Levels",
    summary: "Teach inclusive setup choices for seated, supported, wheelchair-aware, prosthetic-aware, and limited-mobility sessions.",
    teach: ["Training intent matters more than copying a standard setup.", "Support points, equipment fit, fatigue, and transfer safety can change exercise choice.", "Users should be able to record what modification worked."],
    apply: ["Offer seated, supported, and standing versions when possible.", "Use time, range, assistance, or resistance as scalable variables.", "Keep skin, pressure, balance, heat, and fatigue notes visible for relevant users."],
    track: ["Setup used", "Assistance level", "Fatigue", "Confidence", "Symptoms", "Successful modification"],
    safety: "Coordinate with qualified medical, rehab, prosthetic, or coaching professionals when equipment fit, balance, neurological symptoms, or medical status affects training.",
    tags: ["adaptive fitness", "wheelchair", "prosthetic", "limited mobility"],
    references: [references.nchpad, references.nchpadVideoLibrary, references.physicalActivityGuidelines]
  },
  {
    title: "Yoga Safety and Practice Lesson",
    area: "Yoga",
    routeHref: "/yoga",
    level: "All Levels",
    summary: "Teach yoga as posture, breath, and attention practice with modifications, qualified instruction, and clear safety boundaries.",
    teach: ["Yoga styles vary from gentle to physically demanding.", "Practice quality depends on position choice, breath, and tolerable range.", "Users should avoid extreme poses when new or medically restricted."],
    apply: ["Start with simple breathing, spine, hip, and shoulder positions.", "Use blocks, straps, chairs, or reduced range when needed.", "Keep yoga in recovery plans when it supports readiness rather than fatigue."],
    track: ["Practice length", "Style", "Breathing quality", "Range notes", "Stress/readiness change"],
    safety: "New users, older adults, pregnant users, and users with medical conditions should use qualified guidance and avoid unsafe positions or hot-yoga risks when inappropriate.",
    tags: ["yoga", "breathing", "mobility", "safety"],
    references: [references.nccihYoga, references.medlineExercise]
  },
  {
    title: "Pilates Core Control Lesson",
    area: "Pilates",
    routeHref: "/pilates",
    level: "Beginner",
    summary: "Teach Pilates as controlled trunk, breath, posture, and range practice that can support athletic movement quality.",
    teach: ["Core work should train control and breathing, not only fatigue.", "Small range can be valuable when the trunk stays organized.", "Progressions should preserve rib, pelvis, and shoulder position."],
    apply: ["Start with breathing, dead-bug-style control, and supported mat work.", "Progress to longer levers or more complex sequences only after control is repeatable.", "Pair Pilates with strength training as a movement-quality support layer."],
    track: ["Control quality", "Breathing", "Back comfort", "Exercise level", "Session consistency"],
    safety: "Users with spine pain, pelvic health concerns, pregnancy, or pressure symptoms should use professional guidance before progressing.",
    tags: ["pilates", "core", "posture", "breathing"],
    references: [references.aceExerciseVideos, references.medlineExercise]
  },
  {
    title: "Tai Chi Balance Lesson",
    area: "Tai Chi",
    routeHref: "/tai-chi",
    level: "All Levels",
    summary: "Teach tai chi as slow movement, posture, breath, balance, and attention practice with conservative progressions.",
    teach: ["Tai chi uses slow gentle movement, physical postures, meditative attention, and controlled breathing.", "Balance benefits are strongest when practice is consistent and appropriately supervised.", "It is not a substitute for medical care."],
    apply: ["Begin with weight shifts, supported stance work, and short forms.", "Use seated or supported options when balance is limited.", "Pair tai chi with recovery or active-aging plans."],
    track: ["Practice minutes", "Balance confidence", "Support used", "Breathing", "Fall-risk notes"],
    safety: "Users with fall risk, Parkinson's disease, stroke history, pregnancy, or chronic disease should talk with qualified professionals and choose appropriate instruction.",
    tags: ["tai chi", "balance", "active aging", "breathing"],
    references: [references.nccihTaiChi, references.moveYourWay]
  },
  {
    title: "Community Guidance Lesson",
    area: "Community Guidance",
    routeHref: "/community",
    level: "All Levels",
    summary: "Teach members how to share useful, safe, source-aware fitness content without presenting personal experience as medical advice.",
    teach: ["Posts should separate personal experience from instruction.", "Community campaigns work best when they define goals, audience, materials, and evaluation.", "Creator posts need clear sources, media rights, and safety boundaries."],
    apply: ["Use tags for goal, body area, equipment, level, and source.", "Ask questions with context: goal, experience, constraints, and what has already been tried.", "Report unsafe medical claims, harassment, stolen media, or dangerous advice."],
    track: ["Source links", "Review status", "Reports", "Saves", "Helpful replies", "Moderation notes"],
    safety: "Do not post diagnosis, treatment claims, harassment, body shaming, unsafe challenges, or copied media without rights.",
    tags: ["community", "creator guidance", "moderation", "sources"],
    references: [references.moveYourWayCommunity, references.moveYourWayPlaybook, references.moveYourWay]
  },
  {
    title: "Media Rights and Source Lesson",
    area: "Media Rights",
    routeHref: "/media",
    level: "Safety Review",
    summary: "Teach the media policy behind this first content pack: link legitimate external media, store source metadata, and only copy assets with permission.",
    teach: ["External images and videos stay hosted by their providers unless licensing allows local storage.", "Every media record needs source, license, references, review status, and content path.", "Original E.R. Fitness media should include captions, alt text, transcripts, and reviewer fields."],
    apply: ["Use external links for ACE, AAOS, NIH, HHS, USDA, and NCHPAD resources.", "Create original thumbnails or licensed images for local cards.", "Add reviewer and last-reviewed fields before production launch."],
    track: ["Source", "License", "Review status", "Alt text", "Transcript", "Last reviewed"],
    safety: "Do not download or republish third-party images, videos, or full text unless the license explicitly permits it.",
    tags: ["media rights", "source metadata", "licensed content"],
    references: [references.aceExerciseLibrary, references.aaosKnee, references.moveYourWayCommunity]
  }
];

export const openWorkoutSystemRecords: OpenWorkoutSystemRecord[] = [
  {
    title: "Public Adult Weekly Activity Template",
    area: "Workout & Exercise",
    level: "Beginner",
    routeHref: "/workouts",
    summary: "A conservative weekly activity structure based on CDC and HHS public guidance: spread aerobic work across the week and add two strength days.",
    weeklyStructure: ["3 to 5 aerobic days", "2 strength days for major muscle groups", "Optional mobility or balance practice", "At least 1 lighter recovery day"],
    sessionTemplate: ["5 minute easy warmup", "10 to 30 minutes moderate activity or shorter vigorous work if appropriate", "2 to 5 basic strength movements on strength days", "5 minute cooldown and notes"],
    progression: ["Start below current limit", "Add minutes before adding intensity", "Add sets or load only when form is repeatable", "Use the Move Your Way planner to track the week"],
    safety: "People with chronic conditions, disability, inactivity, symptoms, or uncertainty should follow clinician guidance and choose conservative intensity.",
    sourceHref: references.cdcAddingAdults.href,
    source: references.cdcAddingAdults.source,
    rights: "Public CDC guidance summarized in original E.R. Fitness language; link to source for full detail.",
    references: [references.cdcAddingAdults, references.physicalActivityGuidelines, references.moveYourWayActivityPlanner],
    tags: ["weekly plan", "aerobic", "strength", "beginner", "public health"]
  },
  {
    title: "Beginner Bodyweight Strength Template",
    area: "Workout & Exercise",
    level: "Beginner",
    routeHref: "/workouts",
    summary: "A no-equipment starter template that teaches movement patterns first: squat or sit-to-stand, push, hinge, row or pull option, carry or core, and cooldown.",
    weeklyStructure: ["2 nonconsecutive strength days", "2 to 4 easy aerobic days", "Daily light mobility if tolerated", "Technique review before progression"],
    sessionTemplate: ["Sit-to-stand or squat pattern", "Incline or bent-knee push-up", "Hip hinge or glute bridge", "Band row or towel row option", "Carry, dead bug, or plank regression"],
    progression: ["Increase range before speed", "Add reps before sets", "Add load after control is stable", "Stop sets before form breaks"],
    safety: "Use pain-free range, stable surfaces, and regressions. Stop for dizziness, chest pain, numbness, sharp pain, or unusual symptoms.",
    sourceHref: references.medlineExercise.href,
    source: references.medlineExercise.source,
    rights: "Original workout template using public NIH/MedlinePlus and linked exercise-demonstration references.",
    references: [references.medlineExercise, references.aceExerciseLibrary, references.cdcIntensity],
    tags: ["bodyweight", "strength", "no equipment", "starter plan", "movement patterns"]
  },
  {
    title: "NHS Strength and Flex Companion Template",
    area: "Workout & Exercise",
    level: "All Levels",
    routeHref: "/workouts",
    summary: "A linked companion plan for users who want free public how-to videos for warmups, posture, standing press-ups, squats, stretches, sit-to-stand, and related movements.",
    weeklyStructure: ["2 to 5 short practice days", "Alternate strength emphasis with mobility emphasis", "Use public video links for form review", "Keep effort moderate while learning"],
    sessionTemplate: ["Warmup video or easy march", "One lower-body exercise", "One upper-body push or pull", "One mobility or stretch block", "Cooldown and form note"],
    progression: ["Repeat the same video until it feels familiar", "Increase range gradually", "Add a second round only when recovery is good", "Use E.R. Fitness notes for cues and symptoms"],
    safety: "NHS materials stay external; users should choose exercises that match current ability and stop if symptoms appear.",
    sourceHref: references.nhsStrengthFlexVideos.href,
    source: references.nhsStrengthFlexVideos.source,
    rights: "External NHS Crown copyright material; link rather than republish unless terms permit.",
    references: [references.nhsStrengthFlexVideos, references.nhsExerciseHub],
    tags: ["free videos", "strength", "flexibility", "beginner", "NHS"]
  },
  {
    title: "Older Adult Multicomponent Template",
    area: "Recovery",
    level: "Older Adult",
    routeHref: "/recovery",
    summary: "A multicomponent active-aging structure that combines aerobic activity, muscle strengthening, balance practice, and conservative recovery.",
    weeklyStructure: ["Most days: comfortable walking or equivalent activity", "2 strength days", "2 to 4 balance practice days", "Mobility and easy recovery as needed"],
    sessionTemplate: ["Supported warmup", "Aerobic work matched to ability", "Sit-to-stand, calf raise, wall push, or band pull", "Supported balance drill", "Cooldown and confidence note"],
    progression: ["Use stable support first", "Add time before complexity", "Progress balance only when safe", "Restart lower after illness or travel"],
    safety: "Fall risk, chronic disease, medication changes, dizziness, or new symptoms require qualified guidance and conservative choices.",
    sourceHref: references.cdcOlderAdults.href,
    source: references.cdcOlderAdults.source,
    rights: "Public CDC guidance summarized in original E.R. Fitness language; link to source for full detail.",
    references: [references.cdcOlderAdults, references.cdcBenefits, references.nhsBalance],
    tags: ["older adults", "balance", "fall prevention", "strength", "active aging"]
  },
  {
    title: "Adaptive Seated Movement Template",
    area: "Adaptive Fitness",
    level: "Adaptive",
    routeHref: "/adaptive-fitness",
    summary: "A seated or supported template for users who need chair-based options, wheelchair-compatible activity, or disability-aware movement choices.",
    weeklyStructure: ["2 to 5 short movement days", "2 strength or resistance-band days if appropriate", "Frequent breaks", "Energy and symptom tracking"],
    sessionTemplate: ["Posture and breathing setup", "Seated march, roll, or arm movement", "Band press, row, or pull-apart option", "Grip or trunk-control option", "Cooldown and fatigue note"],
    progression: ["Add duration in small steps", "Use support before speed", "Progress one variable at a time", "Track fatigue, confidence, and next-day response"],
    safety: "Users with disability, chronic conditions, pressure risks, pain, or autonomic symptoms should use professional guidance and individualized setup.",
    sourceHref: references.cdcChronicDisabilities.href,
    source: references.cdcChronicDisabilities.source,
    rights: "Public CDC guidance summarized in original E.R. Fitness language with external NCHPAD/NHS links.",
    references: [references.cdcChronicDisabilities, references.nchpad, references.nhsSitting, references.nhsWheelchair],
    tags: ["adaptive", "seated", "chair-based", "wheelchair", "disability"]
  },
  {
    title: "Return-to-Training Re-entry Template",
    area: "Injury Education",
    level: "Recovery",
    routeHref: "/injured-athlete",
    summary: "A conservative re-entry template for users returning after irritation, layoff, or rehab clearance: start with low volume, track symptoms, and rebuild gradually.",
    weeklyStructure: ["2 easy movement days", "1 to 2 strength skill days", "1 mobility or recovery day", "Rest or professional-care follow-up as needed"],
    sessionTemplate: ["Pain-free warmup", "One low-risk pattern", "One gentle strength accessory", "Range-of-motion or mobility block", "Symptom and next-day response note"],
    progression: ["Increase only when symptoms stay calm", "Keep first week intentionally easy", "Add range before load", "Return to the prior step if symptoms rise"],
    safety: "This is not rehab or medical advice. Use clinician or physical therapist guidance for injuries, surgery, neurologic symptoms, swelling, or persistent pain.",
    sourceHref: references.aaosKnee.href,
    source: references.aaosKnee.source,
    rights: "Original E.R. Fitness re-entry framework; AAOS conditioning pages are linked only and not republished.",
    references: [references.aaosKnee, references.aaosShoulder, references.aaosSpine],
    tags: ["injury education", "return to training", "symptom tracking", "recovery", "AAOS"]
  },
  {
    title: "Yoga Mobility Starter Template",
    area: "Yoga",
    level: "Beginner",
    routeHref: "/yoga",
    summary: "A short yoga starter structure for breath, controlled range, mobility, and recovery support without presenting yoga as treatment.",
    weeklyStructure: ["2 to 4 short practices", "Keep practice easy enough to repeat", "Pair with recovery days", "Track stress, range, and comfort"],
    sessionTemplate: ["Breathing setup", "Gentle spine or hip mobility", "Supported standing or floor position", "Short relaxation", "Range and comfort note"],
    progression: ["Lengthen practice before deepening positions", "Use supports", "Avoid positions that provoke symptoms", "Choose qualified instruction for special conditions"],
    safety: "Pregnancy, spine issues, balance concerns, hot-yoga risk, pain, or chronic disease require appropriate professional guidance.",
    sourceHref: references.nccihYoga.href,
    source: references.nccihYoga.source,
    rights: "Public NIH/NCCIH reference summarized in original E.R. Fitness language; link to source.",
    references: [references.nccihYoga, references.medlineExercise, references.nhsPilatesYoga],
    tags: ["yoga", "mobility", "breathing", "recovery", "beginner"]
  },
  {
    title: "Tai Chi Balance Starter Template",
    area: "Tai Chi",
    level: "All Levels",
    routeHref: "/tai-chi",
    summary: "A tai chi starter structure for slow movement, posture, breathing, attention, and balance practice with supported options.",
    weeklyStructure: ["2 to 5 short practices", "Use supported stance if needed", "Pair with balance or recovery work", "Track confidence and support used"],
    sessionTemplate: ["Breathing and posture setup", "Supported weight shift", "Slow step or form segment", "Easy cooldown", "Balance confidence note"],
    progression: ["Reduce support only when safe", "Add minutes before complexity", "Practice short forms consistently", "Avoid fatigue that increases fall risk"],
    safety: "Users with fall risk, neurologic disease, pregnancy, dizziness, or chronic disease should use qualified instruction and medical guidance where appropriate.",
    sourceHref: references.nccihTaiChi.href,
    source: references.nccihTaiChi.source,
    rights: "Public NIH/NCCIH reference summarized in original E.R. Fitness language; link to source.",
    references: [references.nccihTaiChi, references.nhsBalance, references.cdcOlderAdults],
    tags: ["tai chi", "balance", "active aging", "breathing", "fall risk"]
  },
  {
    title: "Community Activity Challenge Template",
    area: "Community Guidance",
    level: "All Levels",
    routeHref: "/community",
    summary: "A safe public-health community challenge structure that uses source links, weekly goals, simple tracking, and clear boundaries against medical claims.",
    weeklyStructure: ["Pick one activity goal", "Choose beginner, standard, and adaptive options", "Use check-ins instead of pressure", "Close with reflection and source links"],
    sessionTemplate: ["Post the source and goal", "Share options by ability", "Ask members to log minutes or completion", "Encourage recovery and professional-care boundaries"],
    progression: ["Run short challenges first", "Review reports and safety feedback", "Keep inclusive alternatives visible", "Evaluate completion and helpfulness"],
    safety: "Community challenges must avoid diagnosis, treatment claims, body shaming, unsafe dares, stolen media, or pressure to train through symptoms.",
    sourceHref: references.moveYourWayCommunity.href,
    source: references.moveYourWayCommunity.source,
    rights: "HHS campaign resources linked and summarized; use according to HHS campaign guidance.",
    references: [references.moveYourWayCommunity, references.moveYourWayPlaybook, references.moveYourWayActivityPlanner],
    tags: ["community", "challenge", "public health", "inclusive", "moderation"]
  }
];

export const contentPackStats = [
  { title: `${contentPackLessons.length} Deep Lessons`, description: "Original E.R. Fitness lesson articles connected to existing routes.", meta: "Original articles" },
  { title: `${contentPackMedia.length} Media Records`, description: "External videos and image-sequence references with source and license notes.", meta: "Linked media" },
  { title: `${openWorkoutSystemRecords.length} Public Systems`, description: "Practical workout, adaptive, recovery, mind-body, and community templates built from public sources.", meta: "Open info" },
  { title: `${verifiedContentReferences.length} Verified Sources`, description: "Government, clinical, adaptive, and exercise-demonstration references.", meta: "Cited links" }
];

export const publicMaterialRecords: PublicMaterialRecord[] = [
  {
    title: "Physical Activity Guidelines for Americans",
    area: "Training Principles",
    materialType: "Guideline",
    href: references.physicalActivityGuidelines.href,
    source: references.physicalActivityGuidelines.source,
    summary: "Federal evidence-based guidance for physical activity across ages and populations.",
    useFor: ["training principles", "weekly targets", "safe progression", "public-health baseline"],
    rights: "Public federal resource; link to source and avoid implying endorsement.",
    tags: ["guidelines", "public health", "activity targets"]
  },
  {
    title: "CDC Physical Activity Basics",
    area: "Workout & Exercise",
    materialType: "Article",
    href: references.cdcPhysicalActivityBasics.href,
    source: references.cdcPhysicalActivityBasics.source,
    summary: "CDC overview of benefits, recommendations, barriers, intensity, and ways to add movement.",
    useFor: ["beginner education", "activity benefits", "recommendation links", "search library"],
    rights: "Public CDC web resource; link to source and cite CDC as provider.",
    tags: ["CDC", "activity basics", "benefits"]
  },
  {
    title: "CDC Activity Recommendations",
    area: "Training Principles",
    materialType: "Guideline",
    href: references.cdcRecommendations.href,
    source: references.cdcRecommendations.source,
    summary: "CDC summary of recommendations for children, adults, older adults, chronic conditions, disabilities, and pregnancy/postpartum.",
    useFor: ["age-based education", "workout targets", "adaptive baselines", "community questions"],
    rights: "Public CDC web resource; link to source and cite CDC as provider.",
    tags: ["recommendations", "adults", "older adults", "disabilities"]
  },
  {
    title: "CDC Adult Weekly Activity Examples",
    area: "Workout & Exercise",
    materialType: "Exercise plan",
    href: references.cdcAddingAdults.href,
    source: references.cdcAddingAdults.source,
    summary: "CDC adult activity page with weekly examples that combine aerobic activity and muscle-strengthening days.",
    useFor: ["weekly workout templates", "beginner activity planning", "aerobic and strength mix", "doctor-check prompts"],
    rights: "Public CDC web resource; link to source and cite CDC as provider.",
    tags: ["weekly plan", "adults", "strength days", "aerobic activity"]
  },
  {
    title: "CDC Physical Activity Benefits",
    area: "Training Principles",
    materialType: "Article",
    href: references.cdcBenefits.href,
    source: references.cdcBenefits.source,
    summary: "CDC overview of immediate benefits, weight management context, bone and muscle strength, fall-risk reduction, and chronic-condition support.",
    useFor: ["benefit education", "member onboarding", "activity motivation", "public-health references"],
    rights: "Public CDC web resource; link to source and cite CDC as provider.",
    tags: ["benefits", "health education", "falls", "chronic conditions"]
  },
  {
    title: "CDC Measuring Physical Activity Intensity",
    area: "Training Principles",
    materialType: "Article",
    href: references.cdcIntensity.href,
    source: references.cdcIntensity.source,
    summary: "CDC guidance for explaining moderate and vigorous intensity with practical activity examples.",
    useFor: ["RPE education", "intensity labels", "workout filters", "safe progression"],
    rights: "Public CDC web resource; link to source and cite CDC as provider.",
    tags: ["intensity", "moderate", "vigorous", "RPE"]
  },
  {
    title: "Move Your Way Activity Planner",
    area: "Workout & Exercise",
    materialType: "Toolkit",
    href: references.moveYourWayActivityPlanner.href,
    source: references.moveYourWayActivityPlanner.source,
    summary: "HHS planner for selecting activities, setting weekly goals, getting motivation tips, and printing an activity plan.",
    useFor: ["weekly planning", "goal setting", "activity tracking", "beginner habit building"],
    rights: "HHS public campaign resource; link and use according to HHS campaign material guidance.",
    tags: ["activity planner", "weekly goals", "Move Your Way", "tracking"]
  },
  {
    title: "CDC Older Adult Activity Recommendations",
    area: "Recovery",
    materialType: "Guideline",
    href: references.cdcOlderAdults.href,
    source: references.cdcOlderAdults.source,
    summary: "CDC older-adult activity page covering aerobic activity, muscle strengthening, balance practice, chronic conditions, disability, and doctor-check reminders.",
    useFor: ["older adult plans", "balance education", "fall-risk context", "active aging"],
    rights: "Public CDC web resource; link to source and cite CDC as provider.",
    tags: ["older adults", "balance", "strength", "active aging"]
  },
  {
    title: "Move Your Way Consumer Materials",
    area: "Community Guidance",
    materialType: "Toolkit",
    href: references.moveYourWay.href,
    source: references.moveYourWay.source,
    summary: "HHS tools, videos, fact sheets, stories, and planning resources for becoming more active.",
    useFor: ["habit education", "community posts", "beginner activity", "family movement"],
    rights: "HHS campaign resource; use according to HHS campaign material guidance.",
    tags: ["Move Your Way", "videos", "fact sheets", "habits"]
  },
  {
    title: "Move Your Way Community Playbook",
    area: "Community Guidance",
    materialType: "Toolkit",
    href: references.moveYourWayPlaybook.href,
    source: references.moveYourWayPlaybook.source,
    summary: "Community implementation guide for planning, running, and evaluating physical activity campaigns.",
    useFor: ["group programs", "community challenges", "creator education", "evaluation planning"],
    rights: "HHS campaign resource; link and use according to HHS terms.",
    tags: ["community", "campaign", "toolkit", "evaluation"]
  },
  {
    title: "MedlinePlus Exercise and Physical Fitness",
    area: "Workout & Exercise",
    materialType: "Reference library",
    href: references.medlineExercise.href,
    source: references.medlineExercise.source,
    summary: "NIH health topic page for exercise basics, types of activity, safety, tools, videos, and related issues.",
    useFor: ["fitness basics", "exercise types", "safety education", "reference links"],
    rights: "Public NIH/MedlinePlus reference; link to source and avoid medical substitution.",
    tags: ["MedlinePlus", "fitness basics", "exercise types"]
  },
  {
    title: "ACE Exercise Library",
    area: "Workout & Exercise",
    materialType: "Reference library",
    href: references.aceExerciseLibrary.href,
    source: references.aceExerciseLibrary.source,
    summary: "Exercise library with demonstrations, descriptions, body-part filters, equipment filters, and photos.",
    useFor: ["exercise demos", "photo sequence references", "equipment filters", "form education"],
    rights: "External ACE content; link only unless permission or license is secured.",
    tags: ["ACE", "exercise demos", "photos", "equipment"]
  },
  {
    title: "ACE Exercise Video Library",
    area: "Workout & Exercise",
    materialType: "Video library",
    href: references.aceExerciseVideos.href,
    source: references.aceExerciseVideos.source,
    summary: "Exercise video records including plank, Pilates-inspired movements, balance, and combo exercises.",
    useFor: ["video references", "creator links", "movement education", "media library"],
    rights: "External ACE/YouTube content; link or embed only according to provider terms.",
    tags: ["video", "exercise demos", "Pilates", "balance"]
  },
  {
    title: "NHS Strength and Flex How-To Videos",
    area: "Workout & Exercise",
    materialType: "Video library",
    href: references.nhsStrengthFlexVideos.href,
    source: references.nhsStrengthFlexVideos.source,
    summary: "Free NHS videos for warmups, posture, standing press-ups, squats, stretches, sit-to-stand, pull-ups, and related movements.",
    useFor: ["beginner workouts", "movement video links", "warmups", "strength and flexibility"],
    rights: "External NHS Crown copyright material; link rather than republish unless terms permit.",
    tags: ["NHS", "free videos", "strength", "flexibility"]
  },
  {
    title: "NHS Exercise Hub",
    area: "Recovery",
    materialType: "Reference library",
    href: references.nhsExerciseHub.href,
    source: references.nhsExerciseHub.source,
    summary: "NHS exercise guidelines, strength/flexibility exercises, sitting exercises, balance exercises, running support, and fitness studio videos.",
    useFor: ["recovery links", "exercise hub", "fitness videos", "mobility education"],
    rights: "External NHS Crown copyright material; link rather than republish unless terms permit.",
    tags: ["NHS", "exercise", "videos", "mobility"]
  },
  {
    title: "NHS Sitting Exercises",
    area: "Adaptive Fitness",
    materialType: "Exercise plan",
    href: references.nhsSitting.href,
    source: references.nhsSitting.source,
    summary: "Free sitting exercise page for users who need chair-based movement options.",
    useFor: ["limited mobility", "chair-based options", "adaptive fitness", "recovery"],
    rights: "External NHS Crown copyright material; link rather than republish unless terms permit.",
    tags: ["sitting exercises", "chair-based", "adaptive"]
  },
  {
    title: "NHS Balance Exercises",
    area: "Tai Chi",
    materialType: "Exercise plan",
    href: references.nhsBalance.href,
    source: references.nhsBalance.source,
    summary: "Free balance exercise page that supports tai chi, active aging, and fall-risk education links.",
    useFor: ["balance", "active aging", "fall-risk education", "tai chi support"],
    rights: "External NHS Crown copyright material; link rather than republish unless terms permit.",
    tags: ["balance", "older adults", "tai chi"]
  },
  {
    title: "NHS Strength Exercises",
    area: "Workout & Exercise",
    materialType: "Exercise plan",
    href: references.nhsStrength.href,
    source: references.nhsStrength.source,
    summary: "Free strength exercise page for bodyweight and accessible strength education links.",
    useFor: ["strength basics", "home workouts", "older adult support", "exercise library"],
    rights: "External NHS Crown copyright material; link rather than republish unless terms permit.",
    tags: ["strength", "home workouts", "bodyweight"]
  },
  {
    title: "NHS Pilates and Yoga Videos",
    area: "Pilates",
    materialType: "Video library",
    href: references.nhsPilatesYoga.href,
    source: references.nhsPilatesYoga.source,
    summary: "Free NHS Pilates and yoga video collection for mind-body education links.",
    useFor: ["Pilates", "yoga", "video library", "recovery content"],
    rights: "External NHS Crown copyright material; link rather than republish unless terms permit.",
    tags: ["Pilates", "yoga", "videos"]
  },
  {
    title: "NHS Wheelchair User Fitness Advice",
    area: "Adaptive Fitness",
    materialType: "Article",
    href: references.nhsWheelchair.href,
    source: references.nhsWheelchair.source,
    summary: "Fitness advice for wheelchair users from the NHS exercise library.",
    useFor: ["wheelchair fitness", "adaptive education", "community questions", "inclusive content"],
    rights: "External NHS Crown copyright material; link rather than republish unless terms permit.",
    tags: ["wheelchair", "adaptive fitness", "NHS"]
  },
  {
    title: "CDC Chronic Conditions and Disabilities Activity",
    area: "Adaptive Fitness",
    materialType: "Guideline",
    href: references.cdcChronicDisabilities.href,
    source: references.cdcChronicDisabilities.source,
    summary: "CDC activity recommendations, examples, and professional-consultation guidance for adults with chronic conditions and disabilities.",
    useFor: ["adaptive baselines", "special conditions", "professional guidance", "safety notes"],
    rights: "Public CDC web resource; link to source and cite CDC as provider.",
    tags: ["CDC", "chronic conditions", "disabilities"]
  },
  {
    title: "NCHPAD Resource Center",
    area: "Adaptive Fitness",
    materialType: "Reference library",
    href: references.nchpad.href,
    source: references.nchpad.source,
    summary: "CDC-funded resource center for inclusive health promotion, disability, physical activity, nutrition, mindfulness, and accessibility.",
    useFor: ["adaptive resources", "inclusive health", "provider links", "video library"],
    rights: "External NCHPAD material; link or embed according to source terms.",
    tags: ["NCHPAD", "disability", "inclusive fitness"]
  },
  {
    title: "AAOS Knee Conditioning Program",
    area: "Injury Education",
    materialType: "Rehab handout",
    href: references.aaosKnee.href,
    source: references.aaosKnee.source,
    summary: "Orthopaedic knee conditioning program with warmup, stretching, strengthening, and pain guidance.",
    useFor: ["knee education", "rehab reference", "return-to-training", "professional review"],
    rights: "External AAOS content; link only unless permission or license is secured.",
    tags: ["knee", "AAOS", "rehab"]
  },
  {
    title: "AAOS Shoulder Conditioning Program",
    area: "Injury Education",
    materialType: "Rehab handout",
    href: references.aaosShoulder.href,
    source: references.aaosShoulder.source,
    summary: "Orthopaedic rotator cuff and shoulder conditioning program with reviewed exercise references.",
    useFor: ["shoulder education", "rotator cuff", "rehab reference", "professional review"],
    rights: "External AAOS content; link only unless permission or license is secured.",
    tags: ["shoulder", "rotator cuff", "AAOS"]
  },
  {
    title: "AAOS Spine Conditioning Program",
    area: "Recovery",
    materialType: "Rehab handout",
    href: references.aaosSpine.href,
    source: references.aaosSpine.source,
    summary: "Orthopaedic spine conditioning program for back education references and professional-guidance prompts.",
    useFor: ["spine education", "recovery", "back pain boundaries", "professional review"],
    rights: "External AAOS content; link only unless permission or license is secured.",
    tags: ["spine", "back", "AAOS"]
  },
  {
    title: "USDA MyPlate",
    area: "Nutrition",
    materialType: "Reference library",
    href: references.myPlate.href,
    source: references.myPlate.source,
    summary: "USDA food group and balanced plate framework for consumer nutrition education.",
    useFor: ["plate method", "food groups", "meal examples", "nutrition basics"],
    rights: "Public USDA resource; link to source and cite USDA as provider.",
    tags: ["USDA", "MyPlate", "food groups"]
  },
  {
    title: "Dietary Guidelines for Americans",
    area: "Nutrition",
    materialType: "Guideline",
    href: references.dietaryGuidelines.href,
    source: references.dietaryGuidelines.source,
    summary: "Federal dietary guidance and nutrient-resource links.",
    useFor: ["nutrition principles", "dietary guidance", "public reference", "meal planning context"],
    rights: "Public federal resource; link to source and avoid implying endorsement.",
    tags: ["dietary guidelines", "nutrition", "USDA", "HHS"]
  },
  {
    title: "NCCIH Yoga Effectiveness and Safety",
    area: "Yoga",
    materialType: "Article",
    href: references.nccihYoga.href,
    source: references.nccihYoga.source,
    summary: "NIH research summary covering yoga styles, possible benefits, chronic disease context, pregnancy notes, and safety cautions.",
    useFor: ["yoga safety", "mind-body education", "research notes", "disclaimer support"],
    rights: "Public NIH/NCCIH reference; link to source and avoid treatment claims.",
    tags: ["yoga", "NCCIH", "safety"]
  },
  {
    title: "NCCIH Tai Chi Overview",
    area: "Tai Chi",
    materialType: "Article",
    href: references.nccihTaiChi.href,
    source: references.nccihTaiChi.source,
    summary: "NIH research summary covering tai chi, balance, falls, chronic diseases, pregnancy, safety, and instructor considerations.",
    useFor: ["tai chi education", "balance", "active aging", "research notes"],
    rights: "Public NIH/NCCIH reference; link to source and avoid treatment claims.",
    tags: ["tai chi", "balance", "NCCIH"]
  }
];

export function getContentPackLessonsByArea(areas: ContentPackArea[]) {
  return contentPackLessons.filter((lesson) => areas.includes(lesson.area));
}

export function getContentPackMediaByArea(areas: ContentPackArea[]) {
  return contentPackMedia.filter((item) => areas.includes(item.area));
}

export function getPublicMaterialsByArea(areas: ContentPackArea[]) {
  return publicMaterialRecords.filter((item) => areas.includes(item.area));
}

export function getOpenWorkoutSystemsByArea(areas: ContentPackArea[]) {
  return openWorkoutSystemRecords.filter((item) => areas.includes(item.area));
}
