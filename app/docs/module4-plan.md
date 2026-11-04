# Module 4 — Marketing Engine + Content System

## Build Discipline Complete

Planning was completed before coding.

### Required Feature
- Upgraded homepage
- /marketing page
- Brand system
- Target persona
- Landing page copy
- 10 social posts
- 3 video scripts
- 14-day campaign calendar
- 2 A/B tests
- Saved marketing assets
- Supabase persistence

### Testing
- 2 A/B tests
- 3 software tests
- 1 documented iteration after testing

### DevOps
- Minimum 5 meaningful commits
- Minimum 2 Vercel deployments
- Minimum 5 coding prompts
## Human Judgment / Decision Note

### Decision 1 — Keep the Marketing System Focused

I chose to build the marketing experience as a single `/marketing` dashboard instead of separating the content library, campaign calendar, A/B testing, and saved assets into different routes.

Reason:
This keeps the user experience simple, reduces navigation complexity, and makes the module easier to test within the available development time.

Trade-off:
A larger production system could benefit from separate pages, but that would add unnecessary complexity for this module.

### Decision 2 — Use Supabase Persistence Instead of Local State Only

Saved marketing assets are stored in Supabase rather than only in React state.

Reason:
Local state disappears after refreshing the browser, while Supabase allows saved assets to persist across sessions and provides clear evidence that the application uses a real backend.

Trade-off:
This required configuring Row Level Security policies, but I kept RLS enabled instead of disabling security.

### Decision 3 — Use Simple A/B Test Hypotheses

The A/B testing section compares alternative headlines and calls to action without claiming real conversion results.

Reason:
No real traffic or statistically valid user sample was available during this module.

Trade-off:
The dashboard documents hypotheses rather than pretending simulated results are real performance data. Actual conversion results would require real users and sufficient traffic.

### Decision 4 — Prioritize Clarity Over Extra Features

I prioritized a credible homepage, usable marketing dashboard, saved content, validation feedback, testing, and persistence instead of adding advanced analytics, external marketing APIs, or automated social media publishing.

Reason:
These features directly satisfy the module requirements and can be tested reliably.

Trade-off:
The system is intentionally smaller, but the implemented features are functional, testable, and complete.
