# Week 1 Prompt Log

## Prompt 1
Create a new `/core` page for InternPath using the existing Next.js and Tailwind structure. Add a textarea for internship information, a Generate Core button, and a structured output card.

## Prompt 2
Add simulated extraction logic for Company, Role, Location, Deadline, Key Skills, Suggested Stage, Next Step, and Priority. Clearly label the result as “Simulated AI Output.”

## Prompt 3
Connect the `/core` page to Supabase. Save generated outputs into the `core_outputs` table using the existing environment variables.

## Prompt 4
Add a Dashboard Preview section to `/core` that reads saved rows from Supabase and displays recent internship outputs.

## Prompt 5
Keep the implementation small, responsive, and consistent with the existing InternPath design. Do not add authentication, paid APIs, LinkedIn integration, notifications, employer accounts, or advanced analytics.

## Module 3 — Product Architecture + Pricing Simulator

### Prompt 1 — Product Architecture Page

Create the `/product` page for InternPath. Add a product feature map, three pricing tiers, two customer segments, and clear explanations of which features belong to each tier. Keep the design consistent with the current InternPath interface.

### Prompt 2 — Pricing Simulator

Create the `/pricing` page with three pricing tiers and an interactive pricing simulator. Add editable inputs for potential customers, conversion rate, and monthly price. Calculate paid customers, monthly revenue, and annual revenue.

### Prompt 3 — Pricing Scenarios

Add Conservative, Base, and Aggressive scenario toggles to the pricing simulator. Each scenario should update the customer assumptions, conversion rate, price, and calculated revenue immediately.

### Prompt 4 — Assumptions and Validation

Add an assumptions table that displays the active customer segment, scenario, potential customers, conversion rate, monthly price, paid customers, monthly revenue, and annual revenue. Add validation so invalid values do not crash the application.

### Prompt 5 — Supabase Persistence

Connect the pricing simulator to Supabase using the `pricing_scenarios` table. Add a Save Current Scenario action and display saved pricing scenarios below the calculator. Preserve the existing InternPath design and functionality.
## Module 4 — Marketing Engine + Content System

### Prompt 1 — Marketing Page Scaffold

Create a new `/marketing` page for the existing InternPath Next.js application.

Preserve the existing InternPath navigation, typography, spacing, and blue-and-white visual style.

The page should act as a centralized Marketing Engine + Content System dashboard for managing marketing content.

Include an initial page title, short description, and structure that can later contain brand identity, content, campaigns, A/B testing, and saved assets.

---

### Prompt 2 — Marketing Dashboard Content

Expand the `/marketing` page into a complete marketing dashboard.

Add:
- Brand positioning
- Target persona
- Value proposition
- Tone of voice
- 10 social media posts across Instagram, LinkedIn, and TikTok
- 3 short-form promotional video scripts
- A 14-day campaign calendar

Display summary cards showing:
- 10 Social Posts
- 3 Video Scripts
- 14 Campaign Days
- 2 A/B Tests

Keep the interface simple, professional, responsive, and consistent with the existing InternPath design.

---

### Prompt 3 — A/B Testing and Saved Assets

Add two A/B marketing experiments to the `/marketing` dashboard.

Test 1:
Homepage headline.

Version A:
"Organize Your Internship Search in One Place"

Version B:
"Find, Track, and Manage Internships Smarter"

Test 2:
Marketing CTA.

Version A:
"Start Organizing Your Applications"

Version B:
"Explore InternPath"

Include a short hypothesis for each experiment.

Also add Save Asset buttons to marketing content and a Saved Marketing Assets section.

Add clear green success feedback after a valid save and red validation feedback when an invalid empty asset is submitted.

---

### Prompt 4 — Supabase Persistence

Connect the Saved Marketing Assets feature to Supabase using a `marketing_assets` table.

The table contains:
- id
- title
- type
- created_at

Load saved assets when the `/marketing` page opens.

When a user saves a social post or video script, insert it into Supabase and refresh the Saved Marketing Assets section.

The saved content must remain visible after refreshing the browser.

Preserve Row Level Security and use explicit SELECT and INSERT policies instead of disabling security.

---

### Prompt 5 — Homepage Upgrade

Upgrade the InternPath homepage into a more credible product landing page.

Include:
- A clear product headline
- A concise value proposition
- A strong primary CTA
- A secondary CTA
- Product benefits
- A simple three-step workflow
- A final conversion section

Use the headline:
"Find, Track, and Manage Internships Smarter"

Use the primary CTA:
"Start Organizing Your Applications"

Preserve the existing InternPath navigation and blue-and-white visual identity.

The homepage should feel more polished and communicate the product's value immediately.
