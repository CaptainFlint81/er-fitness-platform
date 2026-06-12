# Every Routine Fitness Companion Platform

Next.js, React, TypeScript, Tailwind CSS, and Supabase-ready education companion for the Every Routine Fitness (E.R. Fitness) app.

The website teaches. The app tracks. Backend integration and billing are not active yet.

## Platform Scope

Implemented routes:

- Homepage with full E.R. Fitness branding, hero artwork, app screen mockups, CTAs, and app-to-web mirror map
- Education knowledge base with dynamic pages for body education, training styles, adaptive fitness, special conditions, injury education, nutrition, recovery, and habit systems
- Exercise library with setup, execution, common mistakes, regressions, progressions, body areas, and app tracking prompts
- Routine library with trackable routine templates and related education links
- Workout library and workout builder
- Nutrition center with food library and goal-based education
- Recovery and longevity
- Injured athlete education area
- Yoga, Pilates, and Tai Chi
- Media library with uploads, categories, muscle groups, and report controls
- Transformation center with milestone timeline
- Community feed, blog/journals, and chat channel foundations
- Discover and unified search
- User profiles with banner, bio, goal, pet, XP, streak, badges, titles, transformation wall, history, media, and posts
- Pets, challenges, achievements, and leaderboards
- Admin dashboard for moderation queue, reports, content review, user review, and safety architecture
- Premium foundation with billing inactive
- Disclaimer, privacy draft, and terms draft

## Content Platform Features

Reusable components included:

- `PostCard`
- `BlogCard`
- `ProfileCard`
- `MediaCard`
- `CommentThread`
- `UploadPanel`
- `SearchFilters`
- `CategoryTabs`
- `ReportButton`
- `VisibilitySelector`
- `SocialShareBar`

Supported content structures:

- Transformation story
- Workout tip
- Nutrition tip
- Recovery tip
- Question
- Progress update
- Instructional article
- Uploaded workout video
- Uploaded progress photo
- External social link or embed

Workflow and moderation foundations:

- Draft, scheduled, published, flagged, and archived status models
- Public, followers, group, and private visibility models
- Comments, likes/reactions, shares, saves, follows, and favorite creators
- Report content, report user, report comment, and report media buttons
- Moderation queue and admin dashboard

## Supabase-Ready Architecture

Environment variables are listed in `.env.example`.

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

Planned Supabase table areas:

- `profiles`
- `content_posts`
- `blog_posts`
- `media_assets`
- `comments`
- `reactions`
- `follows`
- `saved_content`
- `reports`
- `moderation_queue`
- workout, nutrition, recovery, transformation, leaderboard, achievement, pet, and premium tables

The current UI uses static Supabase-ready datasets in:

- `src/lib/platform-data.ts`
- `src/lib/content-data.ts`
- `src/types/content.ts`
- `src/types/platform.ts`

## Setup

```bash
npm install
npm run dev
```

Open:

```bash
http://localhost:3000
```

Optional checks:

```bash
npm run typecheck
npm run build
```

## Localization

The site is localization-ready without translating the full content library yet.

- Default locale: `en`
- Supported locale prefixes: `/en`, `/es`, `/fr`, `/de`, `/pt`, `/it`, `/nl`, `/pl`, `/uk`, `/ar`, `/hi`, `/zh`, `/ja`, `/ko`, `/vi`, `/tl`, `/id`, `/th`, `/tr`, `/ru`
- Existing unprefixed routes still work, including `/legal`, `/legal/privacy`, `/legal/terms`, and `/legal/disclaimer`.
- Locale-prefixed routes are handled in `src/proxy.ts` and rewritten to the existing App Router pages.
- Locale config and path helpers live in `src/lib/i18n/config.ts`.
- Core message dictionaries live in `src/lib/i18n/messages.ts`.
- Client persistence, browser-language fallback, and localized path helpers live in `src/lib/i18n/client.ts`.
- The shared selector is `src/components/LanguageSwitcher.tsx` and is mounted in the header and footer.

Current translation scope is intentionally limited to core navigation, footer labels, legal links, and disclaimer gate controls. Large education articles, workouts, nutrition lessons, media records, and community content should remain English until reviewed translations are added.

To add translations later:

1. Add or update keys in `englishMessages` first.
2. Add locale overrides only for reviewed translations.
3. Let missing keys fall back to English.
4. Keep route paths stable; translate labels, not route slugs, unless a dedicated localized-slug plan is added.
5. Re-run `npm run typecheck`, `npm run lint`, and `npm run build`.

## Deployment

Recommended deployment path:

1. Create a production Supabase project.
2. Add the public Supabase URL and anon key to hosting environment variables.
3. Implement row-level security policies before accepting real uploads or community content.
4. Add storage buckets for profile media, workout media, progress photos, progress videos, and creator uploads.
5. Replace static datasets with Supabase queries and server actions or route handlers.
6. Deploy the Next.js app to Vercel or another Next-compatible host.
7. Keep billing disabled until premium entitlement, legal, moderation, and support workflows are complete.

## Notes

- The full logo is used from `public/brand/er-fitness-full-logo.svg`.
- The cropped mobile app icon is not used as the main brand.
- Generated hero artwork is copied into `public/brand/fitness-ecosystem-hero.png`.
- Medical/legal/clinical copy is an education draft and should be reviewed before production launch.
