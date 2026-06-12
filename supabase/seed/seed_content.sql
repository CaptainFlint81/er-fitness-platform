-- Seed data that does not require auth users.

insert into public.chat_channels (slug, name, description)
values
  ('general-fitness', 'General Fitness', 'Daily training, goals, questions, and accountability.'),
  ('bodybuilding', 'Bodybuilding', 'Hypertrophy, posing, splits, and progress talk.'),
  ('powerlifting', 'Powerlifting', 'Squat, bench, deadlift, meet prep, and strength programming.'),
  ('tactical-fitness', 'Tactical Fitness', 'Hybrid readiness, work capacity, carries, and conditioning.'),
  ('endurance', 'Endurance', 'Running, zone 2, intervals, pacing, and recovery.'),
  ('nutrition', 'Nutrition', 'Macros, hydration, groceries, meal plans, and consistency.'),
  ('recovery', 'Recovery', 'Mobility, cooldowns, breathing, posture, and longevity.'),
  ('injured-athlete', 'Injured Athlete', 'Return-to-training questions and recovery education.'),
  ('yoga', 'Yoga', 'Beginner through advanced flows and mobility practice.'),
  ('pilates', 'Pilates', 'Core control, mat routines, posture, and athlete movement quality.'),
  ('tai-chi', 'Tai Chi', 'Forms, balance, breathing, and mindful movement.')
on conflict (slug) do update
set name = excluded.name,
    description = excluded.description;

insert into public.food_library (name, category, serving_label, calories, protein_g, carbs_g, fats_g, tags)
values
  ('Chicken breast', 'Lean protein', '100g', 165, 31, 0, 3.6, array['protein', 'cut', 'recomp']),
  ('Greek yogurt', 'Protein snack', '100g', 59, 10, 4, 0.4, array['protein', 'snack', 'lean-bulk']),
  ('Oats', 'Carb base', '100g', 389, 13, 68, 7, array['carbs', 'breakfast', 'bulk']),
  ('Salmon', 'Protein and fats', '100g', 208, 25, 0, 13, array['protein', 'fats', 'recovery']),
  ('Rice', 'Carb base', '100g cooked', 130, 2.7, 28, 0.3, array['carbs', 'endurance', 'tactical']),
  ('Black beans', 'Plant protein', '100g', 132, 9, 24, 0.5, array['plant-protein', 'fiber', 'general-fitness'])
on conflict do nothing;

insert into public.achievements (code, title, description, category, xp_value)
values
  ('day-30-builder', 'Day 30 Builder', 'Completed a 30 day transformation milestone.', 'transformations', 500),
  ('nutrition-streak', 'Nutrition Streak', 'Logged nutrition consistently.', 'nutrition', 350),
  ('recovery-reset', 'Recovery Reset', 'Completed a recovery protocol streak.', 'recovery', 300),
  ('community-coach', 'Community Coach', 'Shared useful tips with the community.', 'community', 450),
  ('pet-xp-booster', 'Pet XP Booster', 'Earned pet XP through challenges.', 'pets', 250)
on conflict (code) do update
set title = excluded.title,
    description = excluded.description,
    category = excluded.category,
    xp_value = excluded.xp_value;

insert into public.content_categories (slug, name, group_name, description, sort_order)
values
  ('bodyweight-warrior', 'Bodyweight Warrior', 'workout_system', 'Bodyweight, calisthenics, travel routines, and minimal-equipment training.', 10),
  ('iron-forge', 'Iron Forge', 'workout_system', 'Strength, hypertrophy, bodybuilding, and powerlifting training.', 20),
  ('performance-lab', 'Performance Lab', 'workout_system', 'Athletic, tactical, endurance, and conditioning performance work.', 30),
  ('injured-athlete', 'Injured Athlete', 'recovery_system', 'Education and return-to-training support for injured athletes.', 10),
  ('mobility', 'Mobility', 'recovery_system', 'Mobility, warmups, cooldowns, posture, breathing, and range work.', 20),
  ('yoga', 'Yoga', 'recovery_system', 'Yoga flows, breath work, mobility, and recovery routines.', 30),
  ('pilates', 'Pilates', 'recovery_system', 'Pilates core control, posture, mat routines, and movement quality.', 40),
  ('tai-chi', 'Tai Chi', 'recovery_system', 'Tai chi forms, balance practice, breathing, and joint-friendly recovery.', 50),
  ('bulk', 'Bulk', 'nutrition_system', 'Calorie surplus nutrition planning.', 10),
  ('lean-bulk', 'Lean Bulk', 'nutrition_system', 'Controlled surplus nutrition planning.', 20),
  ('cut', 'Cut', 'nutrition_system', 'Calorie deficit nutrition planning.', 30),
  ('recomp', 'Recomp', 'nutrition_system', 'Body recomposition nutrition planning.', 40),
  ('powerlifting', 'Powerlifting', 'nutrition_system', 'Strength and meet-prep nutrition planning.', 50),
  ('tactical', 'Tactical', 'nutrition_system', 'Readiness and field-friendly nutrition planning.', 60),
  ('endurance', 'Endurance', 'nutrition_system', 'Endurance fueling and recovery nutrition planning.', 70),
  ('blogs', 'Blogs', 'community_content', 'Long-form creator and member articles.', 10),
  ('journals', 'Journals', 'community_content', 'Training, nutrition, recovery, and transformation journals.', 20),
  ('transformations', 'Transformations', 'community_content', 'Progress stories and transformation updates.', 30),
  ('tips', 'Tips', 'community_content', 'Workout, nutrition, and recovery tips.', 40),
  ('questions', 'Questions', 'community_content', 'Member questions and discussion prompts.', 50),
  ('progress-updates', 'Progress Updates', 'community_content', 'Short member progress updates.', 60),
  ('photos', 'Photos', 'media_gallery', 'Photo uploads and photo gallery content.', 10),
  ('videos', 'Videos', 'media_gallery', 'Video uploads and video gallery content.', 20),
  ('transformation-galleries', 'Transformation Galleries', 'media_gallery', 'Transformation photo and video galleries.', 30),
  ('workout-galleries', 'Workout Galleries', 'media_gallery', 'Workout and exercise demonstration galleries.', 40),
  ('nutrition-galleries', 'Nutrition Galleries', 'media_gallery', 'Nutrition and meal-prep galleries.', 50),
  ('recovery-galleries', 'Recovery Galleries', 'media_gallery', 'Recovery, mobility, yoga, pilates, and tai chi galleries.', 60),
  ('users-search', 'Users', 'search_target', 'Search target for community profiles.', 10),
  ('workouts-search', 'Workouts', 'search_target', 'Search target for workouts and saved routines.', 20),
  ('exercises-search', 'Exercises', 'search_target', 'Search target for exercise records.', 30),
  ('articles-search', 'Articles', 'search_target', 'Search target for blogs, journals, and guides.', 40),
  ('videos-search', 'Videos', 'search_target', 'Search target for uploaded videos.', 50),
  ('photos-search', 'Photos', 'search_target', 'Search target for uploaded photos.', 60),
  ('nutrition-search', 'Nutrition', 'search_target', 'Search target for nutrition plans and foods.', 70),
  ('recovery-search', 'Recovery', 'search_target', 'Search target for recovery systems and protocols.', 80)
on conflict (slug) do update
set name = excluded.name,
    group_name = excluded.group_name,
    description = excluded.description,
    sort_order = excluded.sort_order,
    is_active = true;

insert into public.badges (code, title, description, category, rarity, icon_key, xp_value)
values
  ('bodyweight-warrior-starter', 'Bodyweight Warrior Starter', 'Completed a first Bodyweight Warrior routine.', 'workouts', 'standard', 'dumbbell', 150),
  ('iron-forge-builder', 'Iron Forge Builder', 'Completed an Iron Forge strength session.', 'workouts', 'rare', 'anvil', 250),
  ('performance-lab-engine', 'Performance Lab Engine', 'Completed a conditioning or endurance session.', 'workouts', 'rare', 'activity', 250),
  ('transformation-wall', 'Transformation Wall', 'Added a milestone to a transformation wall.', 'transformations', 'standard', 'image', 200),
  ('community-helper', 'Community Helper', 'Posted a helpful tip or answer.', 'community', 'standard', 'message-square', 175)
on conflict (code) do update
set title = excluded.title,
    description = excluded.description,
    category = excluded.category,
    rarity = excluded.rarity,
    icon_key = excluded.icon_key,
    xp_value = excluded.xp_value;

insert into public.titles (code, title, description, category, rarity)
values
  ('routine-architect', 'Routine Architect', 'Earned by creating complete workout routines.', 'workouts', 'standard'),
  ('volt-streaker', 'Volt Streaker', 'Earned by maintaining a training, nutrition, or recovery streak.', 'achievements', 'rare'),
  ('strength-educator', 'Strength Educator', 'Earned by publishing useful strength education content.', 'community', 'rare'),
  ('recovery-guide', 'Recovery Guide', 'Earned by completing and sharing recovery protocols.', 'recovery', 'standard')
on conflict (code) do update
set title = excluded.title,
    description = excluded.description,
    category = excluded.category,
    rarity = excluded.rarity;

insert into public.exercises (name, workout_system, movement_pattern, muscle_groups, equipment, difficulty, instructions, status, visibility)
values
  ('Tempo push-up', 'Bodyweight Warrior', 'push', array['Chest', 'Triceps', 'Core'], array['bodyweight'], 'beginner', 'Use controlled tempo and keep the trunk braced.', 'published', 'public'),
  ('Barbell bench press', 'Iron Forge', 'horizontal press', array['Chest', 'Shoulders', 'Triceps'], array['barbell', 'bench'], 'intermediate', 'Set upper back, control descent, and press with stable shoulder position.', 'published', 'public'),
  ('Loaded carry interval', 'Performance Lab', 'carry', array['Core', 'Traps', 'Legs'], array['dumbbells', 'kettlebells'], 'all levels', 'Walk with tall posture and steady breathing across intervals.', 'published', 'public')
on conflict (name, workout_system) do update
set movement_pattern = excluded.movement_pattern,
    muscle_groups = excluded.muscle_groups,
    equipment = excluded.equipment,
    difficulty = excluded.difficulty,
    instructions = excluded.instructions,
    status = excluded.status,
    visibility = excluded.visibility;

insert into public.recovery_protocols (system, title, description, duration_minutes, status, visibility)
values
  ('Injured Athlete', 'Return-to-training readiness check', 'Pain-free range, symptom response, load tolerance, fatigue, and professional-care prompts.', 12, 'published', 'public'),
  ('Mobility', 'Desk posture reset', 'Breathing, thoracic extension, hip flexor mobility, neck control, and an easy walk finish.', 12, 'published', 'public'),
  ('Yoga', 'Beginner mobility flow', 'Gentle flow for hips, spine, shoulders, and recovery breathing.', 20, 'published', 'public'),
  ('Pilates', 'Core control mat set', 'Controlled mat routine for trunk position, breathing, and posture.', 18, 'published', 'public'),
  ('Tai Chi', 'Balance and breath form', 'Slow joint-friendly form for balance, breathing, and recovery days.', 15, 'published', 'public')
on conflict (system, title) do update
set description = excluded.description,
    duration_minutes = excluded.duration_minutes,
    status = excluded.status,
    visibility = excluded.visibility;

insert into public.app_handoff_links (source_table, source_slug, label, action_type, website_href, app_route)
values
  ('app_screen', 'dashboard', 'Open education knowledge base', 'open', '/education', 'app://education'),
  ('app_screen', 'workout-log', 'Open exercise library', 'open', '/exercises', 'app://exercises'),
  ('app_screen', 'program-tracker', 'Open routine library', 'open', '/routines', 'app://routines'),
  ('app_screen', 'symptom-note', 'Open injured athlete education', 'open', '/injured-athlete', 'app://recovery/injured-athlete'),
  ('app_screen', 'nutrition-log', 'Open nutrition education', 'open', '/nutrition', 'app://nutrition'),
  ('app_screen', 'recovery-check-in', 'Open recovery education', 'open', '/recovery', 'app://recovery'),
  ('app_screen', 'media-upload', 'Open media galleries', 'open', '/media', 'app://media'),
  ('app_screen', 'search', 'Open website search', 'open', '/search', 'app://search')
on conflict (source_table, source_slug, action_type) do update
set label = excluded.label,
    website_href = excluded.website_href,
    app_route = excluded.app_route;

insert into public.groups (slug, name, description, category, visibility, rules, tags, member_count, status)
values
  ('general-fitness', 'General Fitness', 'Daily training, health, routines, accountability, and general fitness discussion.', 'Open Community', 'public', array['Keep advice respectful and practical.', 'No harassment, spam, unsafe challenges, or medical claims.', 'Use reports for unsafe content or rule violations.'], array['general', 'accountability', 'questions'], 24880, 'published'),
  ('beginners', 'Beginners', 'A welcoming start point for new lifters, runners, and members building consistent routines.', 'Open Community', 'public', array['Be patient with basic questions.', 'Share beginner-safe options.', 'No shaming experience level.'], array['beginner', 'habits', 'support'], 18420, 'published'),
  ('bodybuilding', 'Bodybuilding', 'Hypertrophy, splits, posing, weak points, nutrition phases, and muscle-building education.', 'Training Style', 'public', array['Keep feedback constructive.', 'Label prep-specific advice clearly.', 'Avoid extreme claims.'], array['hypertrophy', 'muscle', 'posing'], 16740, 'published'),
  ('powerlifting', 'Powerlifting', 'Squat, bench, deadlift, meet prep, technique, peaking, and strength programming.', 'Strength Sport', 'public', array['Give technique feedback respectfully.', 'Include context for load and experience.', 'No unsafe max attempts as dares.'], array['squat', 'bench', 'deadlift'], 12150, 'published'),
  ('weight-loss', 'Weight Loss', 'Sustainable fat loss, food habits, training consistency, and progress support.', 'Nutrition Goal', 'public', array['No body shaming.', 'Avoid crash diet promotion.', 'Focus on sustainable habits.'], array['cut', 'habits', 'support'], 15200, 'published'),
  ('bulking', 'Bulking', 'Surplus planning, high-calorie meals, strength progression, and lean mass gain.', 'Nutrition Goal', 'public', array['Share realistic surplus strategies.', 'Respect different appetites and budgets.', 'Track performance and recovery context.'], array['bulk', 'calories', 'strength'], 8700, 'published'),
  ('cutting', 'Cutting', 'Deficit planning, satiety, protein, strength retention, and adherence.', 'Nutrition Goal', 'public', array['No extreme restriction advice.', 'Keep posts supportive.', 'Encourage professional help for clinical concerns.'], array['cut', 'protein', 'body composition'], 9200, 'published'),
  ('recomp', 'Recomp', 'Strength, protein, habit consistency, and body-composition progress without extreme phases.', 'Nutrition Goal', 'public', array['Use trend-based progress context.', 'Avoid scale-only judgments.', 'Share training and nutrition together.'], array['recomp', 'protein', 'progress'], 7900, 'published'),
  ('nutrition', 'Nutrition', 'Macros, hydration, food quality, meal timing, and practical nutrition questions.', 'Nutrition', 'public', array['Educational only, not medical nutrition care.', 'Include context with advice.', 'Be respectful of dietary needs.'], array['macros', 'hydration', 'meal planning'], 13260, 'published'),
  ('meal-prep', 'Meal Prep', 'Grocery lists, batch cooking, portable meals, prep photos, and weekly planning.', 'Nutrition', 'public', array['Share recipes with clear context.', 'Respect allergies and preferences.', 'Credit outside sources.'], array['meal prep', 'grocery', 'planning'], 10150, 'published'),
  ('bodyweight-training', 'Bodyweight Training', 'Calisthenics, push-ups, pull-ups, core control, skill progressions, and travel routines.', 'Training Style', 'public', array['Scale skills safely.', 'Avoid gatekeeping equipment access.', 'Share regressions with progressions.'], array['calisthenics', 'bodyweight', 'skills'], 11180, 'published'),
  ('hiit', 'HIIT', 'Intervals, work capacity, exercise selection, recovery cost, and conditioning plans.', 'Conditioning', 'public', array['Match intensity to readiness.', 'Do not glorify unsafe exhaustion.', 'Share work-rest details.'], array['intervals', 'conditioning', 'effort'], 8420, 'published'),
  ('running', 'Running', 'Run-walk plans, base building, pacing, lower-leg strength, and race preparation.', 'Endurance', 'public', array['Progress mileage gradually.', 'Include surface and shoe context.', 'Respect injury warning signs.'], array['running', 'pacing', 'lower leg'], 14320, 'published'),
  ('endurance', 'Endurance', 'Aerobic base, long sessions, cycling, rowing, zone training, fueling, and recovery.', 'Endurance', 'public', array['Share fueling context.', 'Respect recovery needs.', 'Avoid unsafe dehydration advice.'], array['zone 2', 'fueling', 'aerobic'], 9600, 'published'),
  ('tactical-fitness', 'Tactical Fitness', 'Carries, rucking, conditioning, durability, readiness, and hybrid strength.', 'Performance', 'public', array['Scale load and heat exposure.', 'No unsafe readiness challenges.', 'Share recovery and footwear context.'], array['rucking', 'carries', 'readiness'], 8800, 'published'),
  ('football-training', 'Football Training', 'Strength, speed, power, conditioning, contact prep, and position-ready training.', 'Sports', 'public', array['Keep sport context clear.', 'No unsafe contact drills.', 'Respect age and equipment differences.'], array['football', 'speed', 'power'], 6200, 'published'),
  ('wrestling-training', 'Wrestling Training', 'Grip, conditioning, hips, mat strength, weight management, and recovery.', 'Sports', 'public', array['No dangerous weight-cutting advice.', 'Keep technique respectful.', 'Prioritize recovery and safety.'], array['wrestling', 'grip', 'conditioning'], 5400, 'published'),
  ('combat-sports', 'Combat Sports', 'Rounds, rotational power, conditioning, shoulders, hips, neck, and recovery.', 'Sports', 'public', array['No unsafe sparring advice.', 'Respect coaching and medical boundaries.', 'Include recovery context.'], array['combat', 'conditioning', 'power'], 7100, 'published'),
  ('mobility', 'Mobility', 'Joint control, active range, warmups, cooldowns, flexibility, and daily movement.', 'Recovery', 'public', array['Do not force painful range.', 'Share controlled progressions.', 'Respect individual mobility limits.'], array['mobility', 'range', 'warmups'], 12420, 'published'),
  ('recovery-longevity', 'Recovery & Longevity', 'Sleep, fatigue, active recovery, readiness, sustainable routines, and long-term training.', 'Recovery', 'public', array['Avoid medical claims.', 'Encourage sustainable habits.', 'Respect age and recovery differences.'], array['sleep', 'recovery', 'longevity'], 11860, 'published'),
  ('injured-athlete', 'Injured Athlete', 'Safety-first education, return-to-training, symptom tracking, and conservative progressions.', 'Recovery', 'public', array['No diagnosis or treatment claims.', 'Stop for warning signs.', 'Encourage professional care when needed.'], array['injury', 'return to training', 'safety'], 9300, 'published'),
  ('adaptive-fitness', 'Adaptive Fitness', 'Inclusive training modifications, equipment options, support needs, and adaptive athletes.', 'Adaptive', 'public', array['Respect lived experience.', 'Offer options without assumptions.', 'Keep accessibility central.'], array['adaptive', 'inclusive', 'modifications'], 5300, 'published'),
  ('wheelchair-fitness', 'Wheelchair Fitness', 'Seated strength, shoulder care, transfers, cardio options, and accessible setups.', 'Adaptive', 'public', array['Respect accessibility needs.', 'Avoid one-size-fits-all advice.', 'Prioritize shoulder and skin safety.'], array['wheelchair', 'seated', 'accessibility'], 3100, 'published'),
  ('prosthetic-users', 'Prosthetic Users', 'Training with prosthetics, fit notes, balance, gait support, and progressive loading.', 'Adaptive', 'public', array['Respect prosthetic fit differences.', 'Encourage professional support for fit issues.', 'Share modifications clearly.'], array['prosthetic', 'balance', 'gait'], 2500, 'published'),
  ('multiple-sclerosis-support', 'Multiple Sclerosis Support', 'Fatigue-aware training, heat sensitivity, balance, pacing, and support.', 'Special Conditions', 'public', array['No medical claims.', 'Respect fatigue and heat sensitivity.', 'Encourage clinician guidance.'], array['multiple sclerosis', 'fatigue', 'pacing'], 2900, 'published'),
  ('arthritis-friendly-fitness', 'Arthritis Friendly Fitness', 'Joint-friendly strength, warmups, range of motion, flare planning, and consistency.', 'Special Conditions', 'public', array['Respect flare-ups.', 'No cure claims.', 'Share joint-friendly options.'], array['arthritis', 'joints', 'low impact'], 4300, 'published'),
  ('senior-fitness', 'Senior Fitness', 'Strength, balance, walking, mobility, confidence, and active aging routines.', 'Active Aging', 'public', array['Prioritize fall-risk awareness.', 'Share scalable options.', 'Respect different starting points.'], array['seniors', 'balance', 'active aging'], 7800, 'published'),
  ('yoga', 'Yoga', 'Yoga flows, breath, mobility, strength, recovery, and routine sharing.', 'Mind Body', 'public', array['Respect range limits.', 'Avoid forcing poses.', 'Offer modifications.'], array['yoga', 'breathing', 'mobility'], 9600, 'published'),
  ('pilates', 'Pilates', 'Core control, mat routines, posture, athlete movement quality, and recovery.', 'Mind Body', 'public', array['Prioritize control.', 'Offer regressions.', 'Respect pain and fatigue.'], array['pilates', 'core', 'posture'], 7200, 'published'),
  ('tai-chi', 'Tai Chi', 'Forms, balance, breathing, slow flow, joint-friendly movement, and recovery.', 'Mind Body', 'public', array['Move slowly and safely.', 'Use support when balance is limited.', 'Respect joint comfort.'], array['tai chi', 'balance', 'flow'], 4800, 'published'),
  ('transformation-stories', 'Transformation Stories', 'Long-form transformation stories, milestone reflections, and progress support.', 'Progress', 'public', array['No body shaming.', 'Respect privacy.', 'Celebrate process and consistency.'], array['transformation', 'story', 'milestones'], 10200, 'published'),
  ('progress-photos', 'Progress Photos', 'Progress photo sharing, visibility controls, encouragement, and transformation media.', 'Progress', 'public', array['Respect consent and privacy.', 'No harassment.', 'Use report tools for unsafe comments.'], array['photos', 'progress', 'media'], 8800, 'published'),
  ('pet-companion', 'Pet Companion', 'Pet XP, companion progress, streak boosts, challenges, and profile showcases.', 'Motivation', 'public', array['Keep posts fun and supportive.', 'No spam.', 'Share progress respectfully.'], array['pets', 'xp', 'streaks'], 6100, 'published'),
  ('challenges', 'Challenges', 'Daily, weekly, group, recovery, nutrition, and transformation challenges.', 'Motivation', 'public', array['No unsafe dares.', 'Scale challenges.', 'Celebrate completion honestly.'], array['challenges', 'streaks', 'xp'], 11900, 'published'),
  ('motivation', 'Motivation', 'Consistency, mindset, accountability, habit wins, and getting back on track.', 'Support', 'public', array['Be supportive.', 'Avoid shame-based motivation.', 'Respect mental health boundaries.'], array['motivation', 'habits', 'support'], 13600, 'published'),
  ('questions-help', 'Questions & Help', 'Ask training, nutrition, recovery, app, and community questions.', 'Support', 'public', array['Ask clearly.', 'Answer respectfully.', 'Do not present guesses as medical facts.'], array['questions', 'help', 'community'], 15260, 'published')
on conflict (slug) do update
set name = excluded.name,
    description = excluded.description,
    category = excluded.category,
    visibility = excluded.visibility,
    rules = excluded.rules,
    tags = excluded.tags,
    member_count = excluded.member_count,
    status = excluded.status;

insert into public.chat_rooms (group_id, slug, name, room_type, visibility, status)
select g.id, channel.slug, channel.name, 'topic', 'public', 'published'
from public.groups g
cross join (
  values
    ('general', 'General'),
    ('questions', 'Questions'),
    ('progress', 'Progress'),
    ('media', 'Media'),
    ('tips', 'Tips'),
    ('announcements', 'Announcements')
) as channel(slug, name)
on conflict (group_id, slug) do update
set name = excluded.name,
    room_type = excluded.room_type,
    visibility = excluded.visibility,
    status = excluded.status;
