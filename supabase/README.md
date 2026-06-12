# Supabase Foundation

This folder contains the backend plan for the E.R. Fitness companion platform.

Apply order:

```bash
supabase db push
supabase db reset
```

Or apply manually in the Supabase SQL editor:

1. `migrations/0001_platform_schema.sql`
2. `migrations/0002_rls_and_storage.sql`
3. `migrations/0003_phase2_platform_architecture.sql`
4. `migrations/0004_community_groups_chat.sql`
5. `seed/seed_content.sql`

Before production:

- Review every RLS policy with real auth flows.
- Confirm storage limits and MIME types.
- Add server-side moderation workflows for reports and external embeds.
- Add image/video processing for thumbnails and safety review.
- Add privacy/export/delete account workflows.
- Do not add billing or subscription models until legal, support, refund, entitlement, and moderation workflows are ready.
