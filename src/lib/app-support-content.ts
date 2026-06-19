export type Definition = {
  term: string;
  definition: string;
};

export type ResourceLink = {
  title: string;
  href: string;
  note: string;
  licenseNote: string;
};

export type ExerciseSupportPage = {
  slug: string;
  name: string;
  whatItIs: string;
  targetArea: string;
  whyItMatters: string;
  steps: string[];
  commonMistakes: string[];
  easierVersion: string;
  harderVersion: string;
  beginnerTerms: Definition[];
  safetyNotes: string[];
  appSummary: string;
};

const coreTerms: Record<string, Definition> = {
  brace: {
    term: "Brace",
    definition: "Lightly tighten the midsection as if preparing for a cough while still breathing."
  },
  core: {
    term: "Core",
    definition: "The muscles around the trunk and pelvis that help control posture and movement."
  },
  neutralSpine: {
    term: "Neutral spine",
    definition: "A comfortable spine position that keeps the natural curves without forcing a hard arch or tuck."
  },
  hinge: {
    term: "Hinge",
    definition: "A hip-led movement where the hips move back while the spine stays controlled."
  },
  rangeOfMotion: {
    term: "Range of motion",
    definition: "The pain-free distance a joint or body part moves during an exercise."
  },
  glutes: {
    term: "Glutes",
    definition: "The buttock muscles that help extend and stabilize the hips."
  },
  controlledReps: {
    term: "Controlled reps",
    definition: "Repetitions performed with steady speed, body control, and no bouncing."
  },
  isometric: {
    term: "Isometric",
    definition: "A muscle action where you hold a position without visibly moving."
  },
  fullExtension: {
    term: "Full extension",
    definition: "Finishing a movement by straightening the working joint without locking or forcing it."
  }
};

export const glossaryTerms: Definition[] = [
  coreTerms.hinge,
  coreTerms.brace,
  coreTerms.core,
  coreTerms.neutralSpine,
  coreTerms.glutes,
  {
    term: "Hip flexors",
    definition: "Muscles on the front of the hip that help lift the thigh and can feel tight after lots of sitting."
  },
  {
    term: "Posterior chain",
    definition: "The back-side muscles including glutes, hamstrings, back muscles, and calves."
  },
  {
    term: "Tempo",
    definition: "The planned speed of a rep, such as lowering slowly and standing up smoothly."
  },
  coreTerms.rangeOfMotion,
  {
    term: "Eccentric",
    definition: "The lowering or lengthening part of a rep, such as descending into a squat."
  },
  {
    term: "Concentric",
    definition: "The lifting or shortening part of a rep, such as standing up from a squat."
  },
  coreTerms.isometric,
  {
    term: "Mobility",
    definition: "The ability to move a joint through usable range with control."
  },
  {
    term: "Stability",
    definition: "The ability to keep control of a position while another part of the body moves."
  },
  {
    term: "Activation",
    definition: "A light exercise used to help a muscle group feel engaged before harder work."
  },
  {
    term: "Unilateral",
    definition: "Using one side at a time, such as a split squat or single-arm row."
  },
  {
    term: "Bilateral",
    definition: "Using both sides together, such as a squat or pushup."
  },
  coreTerms.controlledReps,
  coreTerms.fullExtension
];

export const exerciseSupportPages: ExerciseSupportPage[] = [
  {
    slug: "pushup",
    name: "Pushup",
    whatItIs: "A bodyweight pressing exercise performed from hands and toes while the trunk stays rigid.",
    targetArea: "Chest, shoulders, triceps, core, and shoulder blade control.",
    whyItMatters: "Pushups teach upper-body pushing strength, trunk tension, and repeatable pressing mechanics for app workout logs.",
    steps: [
      "Place hands slightly wider than shoulder width and step the feet back.",
      "Brace the core and keep the body in one long line from head to heels.",
      "Lower the chest toward the floor with elbows angled slightly back.",
      "Press the floor away until the arms return to a strong top position.",
      "Log clean reps only when the body line and depth stay consistent."
    ],
    commonMistakes: [
      "Letting the hips sag or pike up.",
      "Flaring elbows straight out to the sides.",
      "Cutting every rep shorter as fatigue builds."
    ],
    easierVersion: "Use an incline pushup or wall pushup and keep the same body-line rules.",
    harderVersion: "Use a slower lowering tempo, pause near the bottom, or elevate the feet.",
    beginnerTerms: [coreTerms.brace, coreTerms.core, coreTerms.rangeOfMotion],
    safetyNotes: [
      "Stop if wrist, shoulder, chest, or neck pain appears.",
      "Use handles, fists, or an incline if wrist extension is uncomfortable.",
      "Keep breathing instead of holding the breath for every rep."
    ],
    appSummary: "Track pushups by clean reps, variation, rest time, and perceived difficulty."
  },
  {
    slug: "wall-pushup",
    name: "Wall Pushup",
    whatItIs: "A beginner pushup variation using a wall to reduce load.",
    targetArea: "Chest, shoulders, triceps, and trunk position awareness.",
    whyItMatters: "Wall pushups make pressing practice accessible while teaching the same line and elbow habits used later.",
    steps: [
      "Stand facing a wall with hands at chest height.",
      "Step back until the arms are straight and the body leans slightly forward.",
      "Brace gently and lower the chest toward the wall.",
      "Press through the palms until the arms straighten again.",
      "Move the feet farther back only when control stays steady."
    ],
    commonMistakes: [
      "Shrugging the shoulders toward the ears.",
      "Dropping the head toward the wall.",
      "Standing so close that the exercise becomes too easy to practice control."
    ],
    easierVersion: "Stand closer to the wall and use smaller range.",
    harderVersion: "Use a countertop, bench, or lower incline before moving to floor pushups.",
    beginnerTerms: [coreTerms.brace, coreTerms.neutralSpine, coreTerms.controlledReps],
    safetyNotes: [
      "Use a stable wall surface that will not slide.",
      "Keep the hands at a comfortable width.",
      "Avoid forcing depth if the shoulders feel pinchy."
    ],
    appSummary: "Track wall pushups by reps, wall distance, and comfort level."
  },
  {
    slug: "knee-pushup",
    name: "Knee Pushup",
    whatItIs: "A floor pushup variation performed from the knees to lower the load.",
    targetArea: "Chest, shoulders, triceps, core, and pressing pattern control.",
    whyItMatters: "Knee pushups bridge the gap between incline pushups and full pushups.",
    steps: [
      "Set hands slightly wider than shoulder width and place knees on the floor.",
      "Create a straight line from head through hips to knees.",
      "Lower the chest while keeping elbows angled slightly back.",
      "Press back to the top without letting the hips fold.",
      "Use a pad under the knees if needed."
    ],
    commonMistakes: [
      "Bending at the hips instead of moving as one unit.",
      "Stopping the rep before the chest lowers meaningfully.",
      "Letting the shoulders shrug forward at the bottom."
    ],
    easierVersion: "Use a higher incline pushup.",
    harderVersion: "Use a full pushup or slow three-second lowering.",
    beginnerTerms: [coreTerms.core, coreTerms.rangeOfMotion, coreTerms.controlledReps],
    safetyNotes: [
      "Keep knees comfortable with padding.",
      "Scale range if wrist or shoulder discomfort appears.",
      "Stop for sharp pain, numbness, or unusual symptoms."
    ],
    appSummary: "Track knee pushups by reps, depth, tempo, and readiness to progress."
  },
  {
    slug: "air-squat",
    name: "Air Squat",
    whatItIs: "A bodyweight squat using both legs with no external load.",
    targetArea: "Quads, glutes, hamstrings, calves, hips, and trunk control.",
    whyItMatters: "Air squats teach the basic sit-and-stand pattern used in many app workouts.",
    steps: [
      "Stand with feet about shoulder width and toes slightly turned out.",
      "Brace gently and reach the hips back while bending the knees.",
      "Lower to a comfortable depth with heels staying down.",
      "Drive through the whole foot to stand tall.",
      "Keep reps smooth and repeatable."
    ],
    commonMistakes: [
      "Knees collapsing inward.",
      "Heels lifting off the floor.",
      "Rounding the back to chase extra depth."
    ],
    easierVersion: "Use a chair squat to control depth.",
    harderVersion: "Use a slower tempo, pause at the bottom, or hold a light weight.",
    beginnerTerms: [coreTerms.brace, coreTerms.glutes, coreTerms.rangeOfMotion],
    safetyNotes: [
      "Use pain-free depth and a stable stance.",
      "Hold a support if balance is uncertain.",
      "Stop if knee, hip, or back pain increases."
    ],
    appSummary: "Track air squats by reps, depth quality, and tempo."
  },
  {
    slug: "chair-squat",
    name: "Chair Squat",
    whatItIs: "A squat pattern using a chair as a depth target and confidence guide.",
    targetArea: "Quads, glutes, hips, and basic lower-body coordination.",
    whyItMatters: "Chair squats make lower-body training approachable and give beginners a clear target.",
    steps: [
      "Stand in front of a stable chair with feet about shoulder width.",
      "Reach hips back and bend the knees until the chair is lightly touched.",
      "Keep the chest controlled and feet planted.",
      "Stand by pressing through the whole foot.",
      "Use the hands only as much as needed for balance."
    ],
    commonMistakes: [
      "Dropping heavily onto the chair.",
      "Rocking forward with momentum to stand.",
      "Letting knees cave inward."
    ],
    easierVersion: "Use a higher chair or place hands on a stable support.",
    harderVersion: "Pause just above the chair without sitting.",
    beginnerTerms: [coreTerms.glutes, coreTerms.controlledReps, coreTerms.rangeOfMotion],
    safetyNotes: [
      "Use a chair that will not slide.",
      "Avoid collapsing into the seat.",
      "Choose a height that keeps the movement comfortable."
    ],
    appSummary: "Track chair squats by reps, chair height, support used, and control."
  },
  {
    slug: "lunge",
    name: "Lunge",
    whatItIs: "A single-leg dominant lower-body exercise performed by stepping or splitting the stance.",
    targetArea: "Quads, glutes, hamstrings, calves, balance, and hip control.",
    whyItMatters: "Lunges build side-to-side strength awareness and help the app track unilateral progress.",
    steps: [
      "Stand tall and step one foot forward or backward into a split stance.",
      "Brace and lower both knees with the front foot planted.",
      "Keep the front knee tracking in line with the toes.",
      "Push through the front foot to return or repeat in place.",
      "Train both sides evenly and log each side."
    ],
    commonMistakes: [
      "Taking too narrow of a stance and losing balance.",
      "Letting the front knee collapse inward.",
      "Pushing only through the toes."
    ],
    easierVersion: "Use a supported split squat while holding a wall or rail.",
    harderVersion: "Use reverse lunges, walking lunges, or light dumbbells.",
    beginnerTerms: [
      {
        term: "Unilateral",
        definition: "Training one side at a time so each side has to do its own work."
      },
      coreTerms.brace,
      coreTerms.glutes
    ],
    safetyNotes: [
      "Hold support if balance limits control.",
      "Use shorter range if knees or hips feel irritated.",
      "Avoid fast reps until the pattern is stable."
    ],
    appSummary: "Track lunges by reps per side, variation, support, and balance notes."
  },
  {
    slug: "plank",
    name: "Plank",
    whatItIs: "An isometric trunk exercise held from elbows or hands.",
    targetArea: "Core, shoulders, glutes, and full-body tension.",
    whyItMatters: "Planks teach bracing and body-line control for pushups, hinges, carries, and floor work.",
    steps: [
      "Set elbows under shoulders or hands under shoulders.",
      "Step feet back and create a long line from head to heels.",
      "Brace the core, lightly squeeze the glutes, and keep breathing.",
      "Hold until form starts to change.",
      "Log the time only for clean holds."
    ],
    commonMistakes: [
      "Letting hips sag.",
      "Holding the breath.",
      "Looking forward and straining the neck."
    ],
    easierVersion: "Use an elevated plank or knee plank.",
    harderVersion: "Use longer holds, shoulder taps, or long-lever planks.",
    beginnerTerms: [coreTerms.isometric, coreTerms.brace, coreTerms.neutralSpine],
    safetyNotes: [
      "End the set before shaking changes posture.",
      "Use an incline if the lower back feels strained.",
      "Avoid pushing through shoulder or wrist pain."
    ],
    appSummary: "Track planks by hold time, position, and form quality."
  },
  {
    slug: "side-plank",
    name: "Side Plank",
    whatItIs: "An isometric side-body hold from the elbow, hand, knees, or feet.",
    targetArea: "Obliques, side hips, shoulders, and lateral trunk stability.",
    whyItMatters: "Side planks train side-to-side trunk control that supports lifting, running, and daily movement.",
    steps: [
      "Lie on one side with elbow under shoulder.",
      "Stack or stagger the feet and lift the hips.",
      "Create a straight line from head to feet or knees.",
      "Breathe while keeping ribs and pelvis controlled.",
      "Repeat the same hold time on both sides."
    ],
    commonMistakes: [
      "Letting hips roll backward or forward.",
      "Shrugging into the shoulder.",
      "Choosing a hold that is too long to control."
    ],
    easierVersion: "Bend the knees and hold from the lower knee.",
    harderVersion: "Hold from the feet, raise the top leg, or add controlled reaches.",
    beginnerTerms: [coreTerms.isometric, coreTerms.core, coreTerms.controlledReps],
    safetyNotes: [
      "Keep the shoulder comfortable and stable.",
      "Use a knee-supported version if the lower back or shoulder feels overloaded.",
      "Stop for sharp pain or tingling."
    ],
    appSummary: "Track side planks by seconds per side, variation, and side-to-side differences."
  },
  {
    slug: "leg-raise",
    name: "Leg Raise",
    whatItIs: "A floor core exercise where the legs move while the trunk stays controlled.",
    targetArea: "Lower abs, hip flexors, and pelvic control.",
    whyItMatters: "Leg raises teach beginners how to control the pelvis during trunk training.",
    steps: [
      "Lie on the back with hands at the sides or under the hips.",
      "Brace gently and keep the lower back comfortable.",
      "Raise and lower the legs through a range you can control.",
      "Move slowly and avoid swinging.",
      "Stop the set when the back starts arching."
    ],
    commonMistakes: [
      "Lowering farther than the core can control.",
      "Swinging the legs.",
      "Holding the breath."
    ],
    easierVersion: "Use bent-knee raises or one-leg-at-a-time lowers.",
    harderVersion: "Use straighter legs, slower tempo, or a reverse crunch finish.",
    beginnerTerms: [coreTerms.core, coreTerms.brace, coreTerms.rangeOfMotion],
    safetyNotes: [
      "Avoid forcing the lower back flat if it causes discomfort.",
      "Use smaller range if hip flexors cramp.",
      "Stop for back pain or pinching."
    ],
    appSummary: "Track leg raises by reps, knee angle, range, and back comfort."
  },
  {
    slug: "dead-bug",
    name: "Dead Bug",
    whatItIs: "A floor core drill where opposite arm and leg move while the trunk stays quiet.",
    targetArea: "Core, hip control, shoulder control, and coordination.",
    whyItMatters: "Dead bugs teach bracing with limb movement, a key skill for beginner strength work.",
    steps: [
      "Lie on the back with arms up and knees bent over hips.",
      "Brace gently while keeping ribs from flaring.",
      "Slowly lower one arm and the opposite leg.",
      "Return to the start and alternate sides.",
      "Use a range that keeps the trunk still."
    ],
    commonMistakes: [
      "Moving too fast.",
      "Arching the back as the leg lowers.",
      "Letting the ribs flare upward."
    ],
    easierVersion: "Move only the arms or only the legs.",
    harderVersion: "Straighten the moving leg or pause near the floor.",
    beginnerTerms: [coreTerms.brace, coreTerms.neutralSpine, coreTerms.controlledReps],
    safetyNotes: [
      "Keep the range small if the back arches.",
      "Move slowly enough to breathe.",
      "Stop for back or hip pain."
    ],
    appSummary: "Track dead bugs by reps per side, range, and trunk-control notes."
  },
  {
    slug: "hip-hinge",
    name: "Hip Hinge",
    whatItIs: "A hip-led movement pattern used for deadlifts, good mornings, kettlebell work, and safe picking-up mechanics.",
    targetArea: "Glutes, hamstrings, back extensors, and trunk control.",
    whyItMatters: "The hinge teaches beginners to move from the hips without turning every lower-body movement into a squat.",
    steps: [
      "Stand tall with feet about hip width.",
      "Brace lightly and push the hips back.",
      "Keep the spine controlled as the torso tips forward.",
      "Feel tension in the hamstrings without rounding the back.",
      "Drive the hips forward to stand tall."
    ],
    commonMistakes: [
      "Rounding the back to reach lower.",
      "Squatting down instead of moving the hips back.",
      "Locking the knees completely."
    ],
    easierVersion: "Practice with hands on hips or a dowel along the back.",
    harderVersion: "Add a kettlebell deadlift or slow tempo hinge.",
    beginnerTerms: [coreTerms.hinge, coreTerms.neutralSpine, coreTerms.glutes],
    safetyNotes: [
      "Keep the movement pain-free and controlled.",
      "Use a short range until the pattern is clear.",
      "Avoid loading the hinge until setup is consistent."
    ],
    appSummary: "Track hip hinges by reps, range, load if any, and hamstring/back comfort."
  },
  {
    slug: "glute-bridge",
    name: "Glute Bridge",
    whatItIs: "A floor exercise where the hips lift while the feet and upper back stay supported.",
    targetArea: "Glutes, hamstrings, hips, and trunk control.",
    whyItMatters: "Glute bridges teach hip extension and help beginners feel the glutes working.",
    steps: [
      "Lie on the back with knees bent and feet flat.",
      "Brace lightly and press through the heels.",
      "Lift the hips until the body forms a line from shoulders to knees.",
      "Pause briefly without over-arching the back.",
      "Lower slowly and repeat."
    ],
    commonMistakes: [
      "Over-arching the lower back.",
      "Feet too far away from the hips.",
      "Letting knees cave inward."
    ],
    easierVersion: "Use a smaller range or hold the top for shorter time.",
    harderVersion: "Use single-leg bridges, longer pauses, or a band around the knees.",
    beginnerTerms: [coreTerms.glutes, coreTerms.brace, coreTerms.fullExtension],
    safetyNotes: [
      "Keep the lower back comfortable.",
      "Stop if hamstrings cramp repeatedly.",
      "Avoid pushing the hips beyond a natural top position."
    ],
    appSummary: "Track glute bridges by reps, hold time, variation, and glute engagement."
  },
  {
    slug: "superman",
    name: "Superman",
    whatItIs: "A prone floor exercise where the arms and legs lift gently from the ground.",
    targetArea: "Back extensors, glutes, shoulders, and posterior chain awareness.",
    whyItMatters: "Supermans teach back-side activation with low equipment needs.",
    steps: [
      "Lie face down with arms extended or bent.",
      "Brace gently and keep the neck long.",
      "Lift arms and legs slightly without forcing height.",
      "Pause briefly, then lower with control.",
      "Use small reps that feel smooth."
    ],
    commonMistakes: [
      "Throwing the limbs upward quickly.",
      "Cranking the neck up.",
      "Over-arching the lower back."
    ],
    easierVersion: "Lift only arms or only legs, or use alternating arm/leg lifts.",
    harderVersion: "Use longer pauses or slow alternating holds.",
    beginnerTerms: [
      {
        term: "Posterior chain",
        definition: "The back-side muscles including glutes, hamstrings, and back muscles."
      },
      coreTerms.controlledReps,
      coreTerms.rangeOfMotion
    ],
    safetyNotes: [
      "Keep the lift small if the back feels compressed.",
      "Stop for back pain, dizziness, or numbness.",
      "Use bird dog instead if prone extension is uncomfortable."
    ],
    appSummary: "Track supermans by reps, hold time, and back comfort."
  },
  {
    slug: "reverse-snow-angel",
    name: "Reverse Snow Angel",
    whatItIs: "A prone shoulder-control drill that sweeps the arms while lying face down.",
    targetArea: "Upper back, rear shoulders, shoulder blades, and posture muscles.",
    whyItMatters: "Reverse snow angels help beginners practice shoulder motion without heavy load.",
    steps: [
      "Lie face down with arms by the sides and palms facing down or slightly out.",
      "Keep the neck long and ribs controlled.",
      "Lift the hands slightly and sweep arms overhead in a wide arc.",
      "Return slowly to the starting position.",
      "Keep the movement small if the shoulders feel tight."
    ],
    commonMistakes: [
      "Shrugging shoulders toward the ears.",
      "Forcing overhead range.",
      "Moving quickly and losing shoulder blade control."
    ],
    easierVersion: "Move one arm at a time or keep the hands on the floor.",
    harderVersion: "Add longer pauses or very light hand weights only after control is easy.",
    beginnerTerms: [
      {
        term: "Mobility",
        definition: "Moving through usable range with control."
      },
      coreTerms.controlledReps,
      coreTerms.rangeOfMotion
    ],
    safetyNotes: [
      "Do not force painful overhead motion.",
      "Keep the face and neck relaxed.",
      "Stop for shoulder pinching, numbness, or tingling."
    ],
    appSummary: "Track reverse snow angels by reps, range, and shoulder comfort."
  },
  {
    slug: "bird-dog",
    name: "Bird Dog",
    whatItIs: "A hands-and-knees core drill using opposite arm and leg reach.",
    targetArea: "Core, glutes, shoulders, back control, and coordination.",
    whyItMatters: "Bird dogs teach trunk control while the limbs move, with low equipment and beginner-friendly setup.",
    steps: [
      "Start on hands and knees with hands under shoulders and knees under hips.",
      "Brace gently and reach one arm and the opposite leg long.",
      "Keep hips and ribs from rotating.",
      "Pause briefly, then return with control.",
      "Alternate sides or finish all reps on one side."
    ],
    commonMistakes: [
      "Arching the back to lift higher.",
      "Rotating the hips open.",
      "Rushing the reach and return."
    ],
    easierVersion: "Move only one arm or one leg at a time.",
    harderVersion: "Add longer pauses or draw elbow to knee between reaches.",
    beginnerTerms: [coreTerms.brace, coreTerms.neutralSpine, coreTerms.controlledReps],
    safetyNotes: [
      "Use padding under knees if needed.",
      "Keep range smaller if the back moves.",
      "Stop for wrist, shoulder, or back pain."
    ],
    appSummary: "Track bird dogs by reps per side, pause length, and trunk control."
  },
  {
    slug: "cat-cow",
    name: "Cat-Cow",
    whatItIs: "A gentle spine mobility drill moving between rounded and extended positions.",
    targetArea: "Spine, ribs, hips, neck awareness, and breathing.",
    whyItMatters: "Cat-cow helps beginners explore comfortable spinal motion before workouts or recovery sessions.",
    steps: [
      "Start on hands and knees.",
      "Exhale and gently round the back upward.",
      "Inhale and gently extend the spine without forcing the neck.",
      "Move slowly between positions.",
      "Stay within a comfortable range."
    ],
    commonMistakes: [
      "Forcing end range.",
      "Moving too fast to feel the position.",
      "Locking the elbows hard."
    ],
    easierVersion: "Use smaller motion or perform seated pelvic tilts.",
    harderVersion: "Pair with controlled breathing and longer pauses.",
    beginnerTerms: [
      {
        term: "Mobility",
        definition: "Comfortable, controlled movement through range."
      },
      coreTerms.rangeOfMotion,
      coreTerms.neutralSpine
    ],
    safetyNotes: [
      "Avoid painful range.",
      "Use wrist or knee padding if needed.",
      "Stop for dizziness, numbness, or unusual symptoms."
    ],
    appSummary: "Track cat-cow by duration, breathing pace, and comfort."
  },
  {
    slug: "hamstring-stretch",
    name: "Hamstring Stretch",
    whatItIs: "A gentle stretch for the back of the thigh.",
    targetArea: "Hamstrings, hips, calves, and posterior chain comfort.",
    whyItMatters: "Hamstring stretching can support cooldowns and mobility days when kept comfortable and controlled.",
    steps: [
      "Choose a seated, standing, or lying position.",
      "Extend one leg while keeping the spine controlled.",
      "Hinge gently until a mild stretch is felt in the back of the thigh.",
      "Hold while breathing normally.",
      "Switch sides and compare comfort."
    ],
    commonMistakes: [
      "Rounding aggressively to reach the foot.",
      "Bouncing into the stretch.",
      "Chasing numbness or tingling."
    ],
    easierVersion: "Bend the knee slightly or use a towel behind the thigh.",
    harderVersion: "Use longer holds or active contract-relax only if comfortable.",
    beginnerTerms: [coreTerms.hinge, coreTerms.rangeOfMotion, {
      term: "Posterior chain",
      definition: "The back-side muscles including hamstrings, glutes, and back muscles."
    }],
    safetyNotes: [
      "A stretch should feel mild, not sharp.",
      "Stop for nerve-like symptoms such as tingling or numbness.",
      "Do not bounce."
    ],
    appSummary: "Track hamstring stretching by side, hold time, and comfort."
  },
  {
    slug: "hip-flexor-stretch",
    name: "Hip Flexor Stretch",
    whatItIs: "A gentle stretch for the front of the hip, often performed half-kneeling.",
    targetArea: "Hip flexors, quads, glutes, and pelvis control.",
    whyItMatters: "Hip flexor stretching can pair with glute and core work to support comfortable posture and movement.",
    steps: [
      "Set up in a half-kneeling position with padding under the back knee.",
      "Brace lightly and tuck the pelvis only enough to feel control.",
      "Shift forward slightly until a mild front-hip stretch appears.",
      "Hold while breathing and keeping the ribs stacked.",
      "Switch sides."
    ],
    commonMistakes: [
      "Over-arching the lower back.",
      "Lunging too far forward.",
      "Forcing the back knee into discomfort."
    ],
    easierVersion: "Perform standing with the back foot on the floor and smaller range.",
    harderVersion: "Add a gentle same-side arm reach if it stays comfortable.",
    beginnerTerms: [
      {
        term: "Hip flexors",
        definition: "Front-of-hip muscles that help lift the thigh."
      },
      coreTerms.brace,
      coreTerms.glutes
    ],
    safetyNotes: [
      "Use knee padding.",
      "Keep the stretch mild.",
      "Stop if back or hip pain increases."
    ],
    appSummary: "Track hip flexor stretching by side, hold time, and posture notes."
  },
  {
    slug: "calf-stretch",
    name: "Calf Stretch",
    whatItIs: "A lower-leg stretch performed against a wall, step, or floor position.",
    targetArea: "Calves, ankles, Achilles area, and lower-leg comfort.",
    whyItMatters: "Calf mobility supports squats, lunges, walking, running, and warmups.",
    steps: [
      "Place hands on a wall and step one foot back.",
      "Keep the back heel down and toes pointing forward.",
      "Lean forward until a mild calf stretch is felt.",
      "Hold while breathing, then bend the back knee slightly for a lower-calf variation.",
      "Switch sides."
    ],
    commonMistakes: [
      "Turning the back foot far outward.",
      "Bouncing.",
      "Forcing the heel down through pain."
    ],
    easierVersion: "Use a shorter stance and smaller lean.",
    harderVersion: "Use a step stretch only if balance and comfort are solid.",
    beginnerTerms: [coreTerms.rangeOfMotion, {
      term: "Mobility",
      definition: "Usable, controlled joint movement."
    }],
    safetyNotes: [
      "Hold a stable surface.",
      "Avoid aggressive step stretching if the Achilles area is irritated.",
      "Stop for sharp pain."
    ],
    appSummary: "Track calf stretching by side, hold time, knee position, and comfort."
  },
  {
    slug: "shoulder-rolls",
    name: "Shoulder Rolls",
    whatItIs: "A simple shoulder and upper-back mobility drill using slow circular motion.",
    targetArea: "Shoulders, upper back, neck awareness, and posture reset.",
    whyItMatters: "Shoulder rolls are easy warmup or desk-break movements that help users check tension.",
    steps: [
      "Sit or stand tall with arms relaxed.",
      "Roll shoulders up, back, down, and around slowly.",
      "Repeat forward circles if comfortable.",
      "Keep the neck relaxed and breathing easy.",
      "Use small circles if range is limited."
    ],
    commonMistakes: [
      "Moving fast and shrugging hard.",
      "Holding the breath.",
      "Forcing circles through pinching."
    ],
    easierVersion: "Use smaller circles or one shoulder at a time.",
    harderVersion: "Pair with light band pull-aparts or posture breathing.",
    beginnerTerms: [{
      term: "Range of motion",
      definition: "How far the shoulders move comfortably."
    }, coreTerms.controlledReps],
    safetyNotes: [
      "Keep motion gentle.",
      "Stop for neck pain, tingling, or shoulder pinching.",
      "Do not force the shoulders down or back."
    ],
    appSummary: "Track shoulder rolls by duration, direction, and tension rating."
  },
  {
    slug: "hip-circles",
    name: "Hip Circles",
    whatItIs: "A standing mobility drill that moves the hips through controlled circles.",
    targetArea: "Hips, glutes, hip flexors, balance, and lower-body warmup.",
    whyItMatters: "Hip circles help beginners feel hip range before squats, lunges, and mobility sessions.",
    steps: [
      "Stand tall and hold support if needed.",
      "Lift one knee slightly and draw a slow circle with the thigh.",
      "Keep the trunk quiet and range comfortable.",
      "Repeat in both directions.",
      "Switch sides."
    ],
    commonMistakes: [
      "Twisting the whole body instead of moving the hip.",
      "Using range that causes pinching.",
      "Moving too fast for balance."
    ],
    easierVersion: "Keep the foot on the floor and make small pelvis circles.",
    harderVersion: "Use unsupported standing hip circles with slower tempo.",
    beginnerTerms: [{
      term: "Mobility",
      definition: "Controlled movement through a comfortable joint range."
    }, coreTerms.core, coreTerms.rangeOfMotion],
    safetyNotes: [
      "Use a wall or rail for balance.",
      "Avoid hip pinching.",
      "Stop for pain or dizziness."
    ],
    appSummary: "Track hip circles by reps per side, direction, support, and comfort."
  },
  {
    slug: "march-in-place",
    name: "March in Place",
    whatItIs: "A low-impact cardio and warmup movement performed by alternating knee lifts.",
    targetArea: "Hip flexors, calves, quads, balance, breathing, and light conditioning.",
    whyItMatters: "Marching in place is an accessible warmup, beginner cardio option, and recovery-day movement.",
    steps: [
      "Stand tall with room around you.",
      "Lift one knee, lower it, then lift the other knee.",
      "Swing arms naturally or hold support if needed.",
      "Keep breathing steady and pace conversational.",
      "Track time, steps, or perceived effort."
    ],
    commonMistakes: [
      "Holding the breath.",
      "Marching faster than balance allows.",
      "Landing heavily on each step."
    ],
    easierVersion: "Use a slower pace, lower knee height, or chair-supported marching.",
    harderVersion: "Increase time, arm swing, or pace while staying low impact.",
    beginnerTerms: [{
      term: "Low impact",
      definition: "Movement that keeps at least one foot near the ground and limits jumping forces."
    }, coreTerms.controlledReps],
    safetyNotes: [
      "Use support if balance is uncertain.",
      "Stop for dizziness, chest pain, or unusual shortness of breath.",
      "Keep the area clear of trip hazards."
    ],
    appSummary: "Track marching by time, step count, effort, and balance support."
  }
];

export const beginnerGuidePages = [
  {
    slug: "workout-progress",
    title: "Workout Progress",
    description: "How beginners can notice progress without chasing max effort every session.",
    sections: [
      {
        title: "What progress can look like",
        items: [
          "More clean reps with the same exercise.",
          "The same workout feeling easier at the same pace.",
          "Better control, balance, range, or confidence.",
          "More consistent weekly completion."
        ]
      },
      {
        title: "How the app supports it",
        items: [
          "Workout logs record reps, time, variation, notes, and perceived difficulty.",
          "Weekly views show whether training is becoming more consistent.",
          "Exercise links open exact website lessons when form cues are needed."
        ]
      }
    ],
    safety: "Progress does not require pain, extreme soreness, or personal records every week."
  },
  {
    slug: "weekly-progression",
    title: "Weekly Progression",
    description: "A simple way to make training harder over time without jumping too fast.",
    sections: [
      {
        title: "Beginner progression options",
        items: [
          "Add one or two reps per set.",
          "Add one short set.",
          "Add five to ten seconds to a hold or cardio interval.",
          "Use a slightly harder variation only after the current version is controlled."
        ]
      },
      {
        title: "What to avoid",
        items: [
          "Changing exercise, reps, sets, and speed all at once.",
          "Ignoring sleep, soreness, or unusual symptoms.",
          "Treating every week as a test week."
        ]
      }
    ],
    safety: "Use smaller progress jumps when returning after a layoff, illness, injury, or high-stress week."
  },
  {
    slug: "reps-sets-time",
    title: "Reps, Sets, and Time",
    description: "Plain-English explanation of the numbers beginners see in workouts.",
    sections: [
      {
        title: "Core terms",
        items: [
          "A rep is one complete repetition of an exercise.",
          "A set is a group of reps before a rest.",
          "Time is used for holds, circuits, mobility flows, cardio, and recovery work.",
          "Rest is part of the workout, not a mistake."
        ]
      },
      {
        title: "How to log clearly",
        items: [
          "Record the variation used, not just the exercise name.",
          "Separate left and right side work when an exercise is unilateral.",
          "Use notes for pain-free range, equipment, and form cues."
        ]
      }
    ],
    safety: "Stop a timed set before form falls apart. Clean work is more useful than forced duration."
  },
  {
    slug: "body-progress",
    title: "Body Progress",
    description: "A beginner-safe way to track body changes without turning the app into a medical tool.",
    sections: [
      {
        title: "What can be tracked",
        items: [
          "Progress photos taken with consistent lighting and posture.",
          "Body measurements if the user chooses to record them.",
          "Energy, confidence, clothing fit, and workout consistency notes.",
          "Body weight only when it supports a healthy relationship with progress."
        ]
      },
      {
        title: "Healthy tracking habits",
        items: [
          "Use trends instead of reacting to one day.",
          "Pair body tracking with strength, mobility, and habit progress.",
          "Keep private data private unless the user chooses to share."
        ]
      }
    ],
    safety: "Body tracking is optional and educational. It is not diagnosis, treatment, or medical nutrition therapy."
  },
  {
    slug: "fitness-terms",
    title: "Fitness Terms",
    description: "Beginner vocabulary that makes workouts and form popups easier to understand.",
    sections: [
      {
        title: "How to use terms",
        items: [
          "Open the glossary when an exercise cue is unfamiliar.",
          "Read cues as practical instructions, not as a test of expertise.",
          "Use the app note field when a term still feels unclear during training."
        ]
      },
      {
        title: "Most useful starting terms",
        items: [
          "Brace, core, hinge, neutral spine, range of motion, tempo, mobility, stability, and controlled reps.",
          "Unilateral means one side at a time; bilateral means both sides together.",
          "Eccentric is lowering, concentric is lifting, and isometric is holding."
        ]
      }
    ],
    safety: "If a cue causes pain or confusion, choose the easier version and review the safety notes."
  }
];

export const beginnerGuideIndex = {
  title: "Beginner Fitness Guide",
  description: "A plain-English starting point for guided workouts, weekly progression, workout logs, rep and time tracking, body progress, and fitness terms.",
  sections: [
    "Start with movements you can control.",
    "Progress one variable at a time.",
    "Use logs to learn, not to punish yourself.",
    "Read safety notes before increasing difficulty.",
    "Use direct exercise pages when the app opens a form cue."
  ]
};

export const workoutPathPages = [
  {
    slug: "beginner-fitness",
    title: "Beginner Fitness",
    goal: "Build a consistent base with strength, light cardio, mobility, and recovery habits.",
    difficulty: "Beginner",
    estimatedTime: "25 to 35 minutes",
    equipment: "Bodyweight, chair, optional light dumbbells",
    sampleExercises: ["chair-squat", "wall-pushup", "march-in-place", "dead-bug", "cat-cow"],
    progression: "Start with two or three weekly sessions. Add reps or time before moving to harder variations.",
    safetyNotes: [
      "Keep effort conversational during the first week.",
      "Stop for sharp pain, dizziness, numbness, or unusual symptoms.",
      "Use easier versions until form feels repeatable."
    ],
    premiumPreview: "Premium planning can later turn this path into reminders, week-by-week checklists, and adaptive progression."
  },
  {
    slug: "beginner-weight-loss",
    title: "Beginner Weight Loss",
    goal: "Support calorie awareness, basic strength, low-impact movement, and sustainable consistency.",
    difficulty: "Beginner",
    estimatedTime: "25 to 40 minutes",
    equipment: "Bodyweight, chair, walking space",
    sampleExercises: ["march-in-place", "air-squat", "wall-pushup", "plank", "calf-stretch"],
    progression: "Add five minutes of easy movement or one set to strength work before increasing intensity.",
    safetyNotes: [
      "Weight-loss education is general and not medical nutrition therapy.",
      "Avoid extreme restriction or punishment workouts.",
      "Choose low-impact options when joints need a gentler day."
    ],
    premiumPreview: "Premium tools can later connect meal planning, habit streaks, and weekly movement targets."
  },
  {
    slug: "beginner-bodyweight",
    title: "Beginner Bodyweight",
    goal: "Learn foundational bodyweight strength patterns with no gym required.",
    difficulty: "Beginner",
    estimatedTime: "20 to 35 minutes",
    equipment: "Bodyweight, wall, chair or bench",
    sampleExercises: ["wall-pushup", "chair-squat", "glute-bridge", "bird-dog", "side-plank"],
    progression: "Move from wall to incline to floor variations only after clean reps are consistent.",
    safetyNotes: [
      "Use surfaces that do not slide.",
      "Log variation names clearly.",
      "Stop sets when technique changes."
    ],
    premiumPreview: "Premium routines can later auto-select easier and harder versions based on log history."
  },
  {
    slug: "beginner-mobility",
    title: "Beginner Mobility",
    goal: "Build daily joint motion, posture awareness, breathing, and easy recovery habits.",
    difficulty: "Beginner",
    estimatedTime: "10 to 20 minutes",
    equipment: "Mat or open floor, optional chair",
    sampleExercises: ["cat-cow", "hip-circles", "shoulder-rolls", "hamstring-stretch", "hip-flexor-stretch"],
    progression: "Increase consistency first, then add longer holds or extra rounds.",
    safetyNotes: [
      "Mobility should not be forced.",
      "Use mild stretch levels.",
      "Stop for sharp pain or nerve-like symptoms."
    ],
    premiumPreview: "Premium mobility plans can later personalize morning, cooldown, and recovery-day flows."
  },
  {
    slug: "low-impact",
    title: "Low Impact",
    goal: "Train fitness with less jumping and lower landing forces.",
    difficulty: "Beginner to easy intermediate",
    estimatedTime: "20 to 35 minutes",
    equipment: "Bodyweight, chair, optional bands",
    sampleExercises: ["march-in-place", "chair-squat", "wall-pushup", "glute-bridge", "calf-stretch"],
    progression: "Increase time or rounds while keeping landings quiet and breathing controlled.",
    safetyNotes: [
      "Low impact does not mean no effort; increase gradually.",
      "Use support if balance is uncertain.",
      "Pick seated or supported versions when needed."
    ],
    premiumPreview: "Premium filters can later build low-impact sessions around equipment, joint comfort, and time."
  },
  {
    slug: "recovery-day",
    title: "Recovery Day",
    goal: "Keep light movement in the week without turning rest into another hard workout.",
    difficulty: "Easy",
    estimatedTime: "8 to 25 minutes",
    equipment: "Mat, chair, walking space",
    sampleExercises: ["cat-cow", "shoulder-rolls", "hip-circles", "march-in-place", "hamstring-stretch"],
    progression: "Progress by showing up consistently, not by making recovery intense.",
    safetyNotes: [
      "Stay below workout intensity.",
      "Use recovery notes for soreness, sleep, and energy.",
      "Skip movements that worsen symptoms."
    ],
    premiumPreview: "Premium recovery can later connect readiness notes to the next workout recommendation."
  },
  {
    slug: "leg-day-starter",
    title: "Leg Day Starter",
    goal: "Build beginner lower-body strength with squat, hinge, bridge, and stretch patterns.",
    difficulty: "Beginner",
    estimatedTime: "25 to 40 minutes",
    equipment: "Bodyweight, chair, optional light dumbbell",
    sampleExercises: ["chair-squat", "air-squat", "hip-hinge", "glute-bridge", "calf-stretch"],
    progression: "Add reps first, then range, then load if technique remains steady.",
    safetyNotes: [
      "Use a chair target if squat depth is uncertain.",
      "Keep hinge range small until the pattern is clear.",
      "Do not force knee or hip range."
    ],
    premiumPreview: "Premium planning can later rotate squat, hinge, lunge, and recovery emphasis across weeks."
  },
  {
    slug: "arm-day-starter",
    title: "Arm Day Starter",
    goal: "Build pressing, shoulder control, and beginner upper-body endurance.",
    difficulty: "Beginner",
    estimatedTime: "20 to 35 minutes",
    equipment: "Wall, floor, optional light dumbbells or bands",
    sampleExercises: ["wall-pushup", "knee-pushup", "pushup", "shoulder-rolls", "reverse-snow-angel"],
    progression: "Lower the pushup incline or add reps only after shoulder comfort and body line are consistent.",
    safetyNotes: [
      "Use wrist-friendly hand positions.",
      "Avoid shoulder pinching ranges.",
      "Stop before form breaks."
    ],
    premiumPreview: "Premium paths can later add equipment-based arm accessories and form reminders."
  },
  {
    slug: "back-day-starter",
    title: "Back Day Starter",
    goal: "Teach posterior-chain awareness, posture control, and beginner back-side strength.",
    difficulty: "Beginner",
    estimatedTime: "20 to 35 minutes",
    equipment: "Mat, optional band",
    sampleExercises: ["hip-hinge", "superman", "reverse-snow-angel", "bird-dog", "cat-cow"],
    progression: "Improve control and hold quality before adding external load.",
    safetyNotes: [
      "Avoid over-arching the lower back.",
      "Use small ranges for prone exercises.",
      "Stop for back pain, numbness, or tingling."
    ],
    premiumPreview: "Premium paths can later add rows, band work, and progressive pulling templates."
  },
  {
    slug: "core-starter",
    title: "Core Starter",
    goal: "Build trunk control with holds, reaches, and low-impact floor drills.",
    difficulty: "Beginner",
    estimatedTime: "12 to 25 minutes",
    equipment: "Mat or floor space",
    sampleExercises: ["dead-bug", "plank", "side-plank", "leg-raise", "bird-dog"],
    progression: "Add seconds or reps while keeping breathing and trunk position controlled.",
    safetyNotes: [
      "Stop holds before the lower back takes over.",
      "Use bent-knee versions when needed.",
      "Keep breathing during all core work."
    ],
    premiumPreview: "Premium core plans can later adjust hold times and variations based on logs."
  }
];

export const mindBodyPages = [
  {
    slug: "recovery",
    title: "Recovery",
    overview: "Recovery pages teach low-intensity movement, cooldowns, readiness, sleep-adjacent habits, and return-to-training caution.",
    whatItIsFor: "Use this when the app needs a lighter day, cooldown, readiness reset, or explanation for why easy work matters.",
    beginnerRoutine: ["2 minutes easy march", "6 slow cat-cow reps", "8 shoulder rolls each direction", "30 seconds hamstring stretch per side", "2 minutes relaxed breathing"],
    safetyNotes: ["Recovery should feel easier than training.", "Stop for symptoms that feel unusual or worsening.", "Use professional guidance for injuries, medical conditions, or post-surgery activity."],
    freeContent: ["Cooldown basics", "Mobility starter flow", "Readiness notes", "Stretching safety reminders"],
    premiumPreview: "Premium recovery can later connect readiness logs, sleep notes, mobility streaks, and next-workout suggestions."
  },
  {
    slug: "mobility",
    title: "Mobility",
    overview: "Mobility is controlled movement through usable range, not forced stretching.",
    whatItIsFor: "Use mobility before workouts, during breaks, or on recovery days to practice joint control and body awareness.",
    beginnerRoutine: ["5 cat-cow reps", "5 hip circles per side", "10 shoulder rolls", "5 bodyweight hip hinges", "60 seconds easy marching"],
    safetyNotes: ["Keep every rep controlled.", "Avoid pinching or sharp pain.", "Use support for balance drills."],
    freeContent: ["Hip mobility starter", "Spine and shoulder reset", "Warmup movement menu", "Beginner terms for mobility cues"],
    premiumPreview: "Premium mobility can later filter routines by joint area, time available, and workout type."
  },
  {
    slug: "stretching",
    title: "Stretching",
    overview: "Stretching uses comfortable holds or gentle movement to explore muscle and joint range.",
    whatItIsFor: "Use stretching after training, on easy days, or when the app suggests a low-intensity flexibility block.",
    beginnerRoutine: ["30 seconds calf stretch per side", "30 seconds hamstring stretch per side", "30 seconds hip flexor stretch per side", "8 shoulder rolls", "Slow breathing between sides"],
    safetyNotes: ["A stretch should be mild, not painful.", "Do not bounce.", "Stop for numbness, tingling, or sharp pain."],
    freeContent: ["Lower-body cooldown", "Desk-friendly stretch reset", "Stretch intensity guide", "Safety notes for nerve-like symptoms"],
    premiumPreview: "Premium stretching can later save favorite flows and schedule cooldown reminders."
  },
  {
    slug: "yoga",
    title: "Yoga",
    overview: "Yoga content in E.R. Fitness focuses on beginner-friendly movement, breathing, balance, mobility, and recovery support.",
    whatItIsFor: "Use yoga pages when the app opens a mobility flow, gentle recovery session, or breath-and-control routine.",
    beginnerRoutine: ["Easy standing breath", "Cat-cow", "Supported low lunge position", "Gentle hamstring stretch", "Short rest on the mat"],
    safetyNotes: ["Use props or support when needed.", "Avoid forcing deep positions.", "This is fitness education, not treatment or therapy."],
    freeContent: ["Beginner flow outline", "Breathing and pacing notes", "Mobility-focused pose options", "Safety cues for common positions"],
    premiumPreview: "Premium yoga can later add saved flows, session reminders, and app progress notes."
  },
  {
    slug: "pilates",
    title: "Pilates",
    overview: "Pilates content focuses on trunk control, breathing, posture awareness, and precise low-impact movement.",
    whatItIsFor: "Use Pilates pages when the app opens core-control lessons, mat routines, or posture-focused recovery work.",
    beginnerRoutine: ["Breathing setup", "Dead bug variation", "Glute bridge", "Side plank from knees", "Easy cat-cow reset"],
    safetyNotes: ["Keep the lower back comfortable.", "Use smaller ranges when control changes.", "Avoid claims that Pilates treats medical conditions."],
    freeContent: ["Mat core starter", "Breathing cues", "Low-impact trunk control", "Beginner modification list"],
    premiumPreview: "Premium Pilates can later build saved mat routines and form reminders."
  },
  {
    slug: "tai-chi",
    title: "Tai Chi",
    overview: "Tai Chi content focuses on slow movement, balance, posture, breathing, and low-impact coordination.",
    whatItIsFor: "Use Tai Chi pages when the app suggests balance practice, gentle movement, or active recovery.",
    beginnerRoutine: ["Supported standing posture", "Slow weight shift", "Step-and-return practice", "Shoulder relaxation", "Easy breathing finish"],
    safetyNotes: ["Use a wall or chair for balance support.", "Keep steps small.", "This content does not assess fall risk or replace professional care."],
    freeContent: ["Balance starter sequence", "Weight-shift basics", "Breathing and posture cues", "Low-impact coordination notes"],
    premiumPreview: "Premium Tai Chi can later add guided sequence timers, balance notes, and saved practices."
  },
  {
    slug: "injured-athlete",
    title: "Injured Athlete",
    overview: "The injured athlete section gives conservative education for training around irritation, layoffs, and return-to-training decisions.",
    whatItIsFor: "Use this when the app needs to route pain, symptoms, or return-to-training questions to safety-first education.",
    beginnerRoutine: ["Review red-flag symptoms", "Choose pain-free range", "Use gentle mobility only", "Log symptoms and next-day response", "Seek qualified care when symptoms are concerning"],
    safetyNotes: ["This is not diagnosis, medical treatment, physical therapy, or rehab programming.", "Do not train through sharp pain or neurological symptoms.", "Follow clinician instructions when under care."],
    freeContent: ["Professional-care prompts", "Pain-aware progression basics", "Return-to-training checklist", "Exercise regression reminders"],
    premiumPreview: "Premium injured-athlete tools can later organize symptom notes and conservative re-entry checklists after professional clearance."
  }
];

export const nutritionTopicPages = [
  {
    slug: "recipes",
    title: "Recipes",
    beginnerExplanation: "Recipes on E.R. Fitness are simple examples for learning meal structure, protein anchors, carb sources, fats, and vegetables.",
    calorieDisclaimer: "Calorie estimates are educational approximations. Actual needs and recipe values vary by ingredient, portion, brand, and preparation.",
    macroBasics: [
      "Protein helps build meals around lean meat, fish, eggs, dairy, beans, lentils, tofu, or other protein foods.",
      "Carbohydrates provide training fuel through foods such as rice, oats, potatoes, fruit, beans, and whole grains.",
      "Fats support satiety and food quality through foods such as olive oil, nuts, seeds, avocado, and fatty fish."
    ],
    mealBasics: [
      "Pick one protein anchor.",
      "Add one high-fiber carb or vegetable-heavy base.",
      "Add color from fruits or vegetables.",
      "Use fats intentionally rather than accidentally."
    ],
    recipeExamples: ["Greek yogurt oats with berries", "Chicken rice bowl with vegetables", "Black bean taco bowl", "Tuna potato plate", "Egg and vegetable scramble"],
    resources: [
      {
        title: "MyPlate Kitchen recipes",
        href: "https://www.myplate.gov/myplate-kitchen/recipes",
        note: "USDA recipe search and meal ideas.",
        licenseNote: "Official .gov resource; link out instead of copying full recipes or images."
      },
      {
        title: "Nutrition.gov recipes",
        href: "https://www.nutrition.gov/topics/shopping-cooking-and-meal-planning/recipes",
        note: "Federal nutrition portal with recipe and meal-planning links.",
        licenseNote: "Official .gov resource; use as an external reference."
      },
      {
        title: "NHLBI DASH eating plan",
        href: "https://www.nhlbi.nih.gov/health/dash-eating-plan",
        note: "NIH education on a flexible balanced eating pattern.",
        licenseNote: "Official .gov resource; link for education and avoid copying full publications."
      }
    ],
    premiumPreview: "Premium recipe tools can later save favorites, build grocery lists, and estimate meal patterns from user-selected portions."
  },
  {
    slug: "meal-prep",
    title: "Meal Prep",
    beginnerExplanation: "Meal prep means making future meals easier by preparing ingredients, portions, or full meals ahead of time.",
    calorieDisclaimer: "Prep plans can support calorie awareness, but they are not medical nutrition therapy or individualized diet prescriptions.",
    macroBasics: ["Prep protein in batches.", "Choose one or two carb bases.", "Keep vegetables easy to add.", "Use sauces and fats in measured, flexible amounts."],
    mealBasics: ["Cook once for multiple meals.", "Store foods safely.", "Build mix-and-match bowls.", "Keep backup shelf-stable options."],
    recipeExamples: ["Turkey bean chili", "Chicken vegetable rice containers", "Overnight oats", "Egg bites with vegetables", "Lentil soup portions"],
    resources: [
      {
        title: "MyPlate meal planning",
        href: "https://www.myplate.gov/tip-sheet/meal-planning",
        note: "USDA tips for planning meals.",
        licenseNote: "Official .gov resource."
      },
      {
        title: "FoodSafety.gov storage charts",
        href: "https://www.foodsafety.gov/food-safety-charts",
        note: "Government food storage and safety charts.",
        licenseNote: "Official .gov resource."
      }
    ],
    premiumPreview: "Premium meal prep can later generate grocery lists, batch-cooking schedules, and reusable meal templates."
  },
  {
    slug: "weight-loss",
    title: "Weight Loss Nutrition",
    beginnerExplanation: "Weight-loss nutrition starts with consistent meals, protein, fruits and vegetables, and realistic portions rather than extreme restriction.",
    calorieDisclaimer: "Calorie targets are estimates. People with medical conditions, pregnancy, eating-disorder history, or complex needs should use qualified professional guidance.",
    macroBasics: ["Protein supports satiety.", "Carbs can remain in the plan.", "Fats are useful but portion-dense.", "Fiber helps meals feel more filling."],
    mealBasics: ["Build a plate before cutting foods out.", "Keep high-calorie drinks and snacks visible in the log.", "Use trends, not single days.", "Pair nutrition with strength and recovery habits."],
    recipeExamples: ["High-protein yogurt bowl", "Lean turkey lettuce rice bowl", "Vegetable omelet with potatoes", "Bean and vegetable soup"],
    resources: [
      {
        title: "MyPlate healthy eating",
        href: "https://www.myplate.gov/eat-healthy",
        note: "USDA food group and plate method education.",
        licenseNote: "Official .gov resource."
      },
      {
        title: "CDC healthy weight",
        href: "https://www.cdc.gov/healthy-weight-growth/index.html",
        note: "CDC public education on healthy weight basics.",
        licenseNote: "Official .gov resource."
      }
    ],
    premiumPreview: "Premium weight-loss planning can later support habit streaks, flexible meal templates, and progress check-ins."
  },
  {
    slug: "muscle-gain",
    title: "Muscle Gain Nutrition",
    beginnerExplanation: "Muscle-gain nutrition supports training with enough total food, protein, carbs, sleep, and repeatable meals.",
    calorieDisclaimer: "Surplus estimates are educational and should be adjusted by trend, appetite, training response, and professional guidance when needed.",
    macroBasics: ["Protein supports muscle repair.", "Carbs support hard training.", "Fats help make meals energy-dense.", "Hydration supports session quality."],
    mealBasics: ["Add one planned snack.", "Use calorie-dense healthy add-ons.", "Keep protein across the day.", "Do not skip recovery meals after hard sessions."],
    recipeExamples: ["Rice bowl with chicken and avocado", "Greek yogurt granola bowl", "Peanut butter banana oats", "Salmon potato plate"],
    resources: [
      {
        title: "Nutrition.gov athletes and exercise",
        href: "https://www.nutrition.gov/topics/basic-nutrition/eating-exercise-and-sports",
        note: "Federal nutrition portal for exercise-related nutrition links.",
        licenseNote: "Official .gov resource."
      },
      {
        title: "MyPlate protein foods",
        href: "https://www.myplate.gov/eat-healthy/protein-foods",
        note: "USDA protein food group education.",
        licenseNote: "Official .gov resource."
      }
    ],
    premiumPreview: "Premium muscle-gain tools can later connect training logs with meal targets and weekly body-progress notes."
  },
  {
    slug: "high-protein",
    title: "High Protein",
    beginnerExplanation: "High-protein pages teach practical protein anchors without claiming one diet works for everyone.",
    calorieDisclaimer: "Protein targets are estimates. Users with kidney disease or medical nutrition needs should follow qualified professional guidance.",
    macroBasics: ["Use protein anchors at meals.", "Include plant and animal options if preferred.", "Balance protein with carbs, fats, and fiber.", "Spread protein across the day when practical."],
    mealBasics: ["Start breakfast with protein.", "Keep quick protein snacks available.", "Add beans, lentils, tofu, dairy, eggs, fish, poultry, or lean meats.", "Pair protein with colorful plants."],
    recipeExamples: ["Cottage cheese fruit bowl", "Tofu vegetable stir-fry", "Chicken bean chili", "Egg scramble wrap", "Tuna rice bowl"],
    resources: [
      {
        title: "MyPlate protein foods",
        href: "https://www.myplate.gov/eat-healthy/protein-foods",
        note: "USDA protein food group examples.",
        licenseNote: "Official .gov resource."
      },
      {
        title: "MedlinePlus dietary proteins",
        href: "https://medlineplus.gov/ency/article/002467.htm",
        note: "NIH consumer health encyclopedia entry on protein.",
        licenseNote: "Official .gov resource."
      }
    ],
    premiumPreview: "Premium high-protein tools can later create protein checklists and grocery filters."
  },
  {
    slug: "budget-meals",
    title: "Budget Meals",
    beginnerExplanation: "Budget meals focus on affordable staples, batch cooking, frozen produce, beans, eggs, oats, rice, potatoes, and planned leftovers.",
    calorieDisclaimer: "Budget meal examples are educational and not individualized nutrition prescriptions.",
    macroBasics: ["Beans and lentils can provide protein and carbs.", "Eggs, canned fish, yogurt, and tofu can be useful protein options.", "Rice, oats, potatoes, and pasta can be inexpensive carb bases.", "Frozen vegetables can reduce waste."],
    mealBasics: ["Plan around staples already on hand.", "Use leftovers intentionally.", "Buy versatile ingredients.", "Compare unit prices when possible."],
    recipeExamples: ["Bean and rice bowl", "Lentil soup", "Egg potato skillet", "Tuna pasta salad", "Oats with yogurt and fruit"],
    resources: [
      {
        title: "MyPlate healthy eating on a budget",
        href: "https://www.myplate.gov/tip-sheet/healthy-eating-budget",
        note: "USDA budget eating tips.",
        licenseNote: "Official .gov resource."
      },
      {
        title: "SNAP-Ed recipes",
        href: "https://snaped.fns.usda.gov/resources/nutrition-education-materials/recipes",
        note: "USDA SNAP-Ed recipe resource links.",
        licenseNote: "Official .gov resource; link out to recipes."
      }
    ],
    premiumPreview: "Premium budget tools can later build grocery lists from low-cost staple templates."
  },
  {
    slug: "cookbooks",
    title: "Cookbooks",
    beginnerExplanation: "The cookbook hub links to legal free resources and teaches users how to avoid stolen PDFs or copied recipe images.",
    calorieDisclaimer: "Cookbook nutrition data varies. Use estimates as education and verify labels or official recipe data when accuracy matters.",
    macroBasics: ["Look for protein anchors.", "Identify carb bases.", "Notice added fats and sauces.", "Add fruits or vegetables when the recipe lacks color."],
    mealBasics: ["Use legal sources.", "Do not rehost paid PDFs.", "Credit sources when sharing links.", "Save personal notes instead of copying copyrighted text."],
    recipeExamples: ["MyPlate recipe collections", "DASH eating plan resources", "SNAP-Ed recipe links", "Nutrition.gov recipe directories"],
    resources: [
      {
        title: "MyPlate Kitchen",
        href: "https://www.myplate.gov/myplate-kitchen",
        note: "USDA recipe and cookbook-style public resource.",
        licenseNote: "Official .gov resource; link only."
      },
      {
        title: "Nutrition.gov recipes",
        href: "https://www.nutrition.gov/topics/shopping-cooking-and-meal-planning/recipes",
        note: "Government portal for recipe resources.",
        licenseNote: "Official .gov resource; link only."
      },
      {
        title: "NHLBI DASH resources",
        href: "https://www.nhlbi.nih.gov/health/dash-eating-plan",
        note: "NIH DASH education and worksheets.",
        licenseNote: "Official .gov resource; link only."
      }
    ],
    premiumPreview: "Premium cookbooks can later organize legal bookmarks, user-created recipes, and grocery planning without rehosting copyrighted books."
  }
];

export const requiredAppLinkedRoutes = [
  "/",
  "/legal/privacy",
  "/legal/terms",
  "/legal/disclaimer",
  "/community",
  "/media",
  "/dashboard",
  "/leaderboards",
  "/community/blog",
  "/community/groups",
  "/community/chat",
  "/challenges",
  "/profile",
  "/content"
];

export const allAppSupportRoutes = [
  ...exerciseSupportPages.map((exercise) => `/exercises/${exercise.slug}`),
  "/guides/beginner",
  ...beginnerGuidePages.map((guide) => `/guides/beginner/${guide.slug}`),
  "/glossary",
  ...workoutPathPages.map((workout) => `/workouts/${workout.slug}`),
  ...mindBodyPages.map((page) => `/${page.slug}`),
  ...nutritionTopicPages.map((page) => `/nutrition/${page.slug}`)
];

export function findExercise(slug: string) {
  return exerciseSupportPages.find((exercise) => exercise.slug === slug);
}

export function findWorkoutPath(slug: string) {
  return workoutPathPages.find((workout) => workout.slug === slug);
}

export function findBeginnerGuide(slug: string) {
  return beginnerGuidePages.find((guide) => guide.slug === slug);
}

export function findMindBodyPage(slug: string) {
  return mindBodyPages.find((page) => page.slug === slug);
}

export function findNutritionTopic(slug: string) {
  return nutritionTopicPages.find((page) => page.slug === slug);
}

export type BeginnerGuidePage = (typeof beginnerGuidePages)[number];
export type WorkoutPathPage = (typeof workoutPathPages)[number];
export type MindBodyPage = (typeof mindBodyPages)[number];
export type NutritionTopicPage = (typeof nutritionTopicPages)[number];
