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
# Module 5 — Coding Prompt Log

## Prompt 1 — Chat Page Scaffold

Create a public `/chat` page for the existing InternPath application.

Requirements:
- Use the existing Next.js, React, TypeScript, and Tailwind CSS project.
- Preserve the existing InternPath navigation and visual style.
- Add the title “InternPath Guided Assistant”.
- Add a short introduction.
- Add a placeholder for the guided intake flow.
- Add a progress card showing 0 of 3 questions completed.
- Do not add recommendation logic yet.

## Prompt 2 — Guided Intake Flow

Upgrade the `/chat` page with exactly three intake questions.

Questions:
1. Current internship-search stage.
2. Type of help needed.
3. Level of urgency.

Requirements:
- Use selectable buttons.
- Show questions progressively.
- Track completed questions.
- Update the progress indicator from 0 of 3 to 3 of 3.
- Show an intake-complete state after all three answers are selected.

## Prompt 3 — Recommendation Logic and Guardrails

Add recommendation logic to the InternPath Guided Assistant.

Requirements:
- Generate a recommended next action based on the selected answers.
- Add a visible guardrail explaining the limits of the assistant.
- Add a human-support checkpoint for urgent situations.
- Recommend contacting an appropriate human when personalized guidance is needed.
- Keep the interaction rule-based and do not use paid AI APIs.

## Prompt 4 — Supabase Interaction Persistence

Connect the `/chat` page to the existing Supabase project.

Requirements:
- Use the `chat_interactions` table.
- Save stage, help type, urgency, recommendation, feedback, and creation timestamp.
- Show a visible success message after saving.
- Show an error message if the save fails.
- Keep Row Level Security enabled.

## Prompt 5 — Feedback Rating

Add feedback controls to the saved guided-assistant interaction.

Requirements:
- Add Helpful and Not helpful buttons.
- Update the saved Supabase record with the selected feedback.
- Show a visible confirmation message after feedback is saved.
- Do not allow feedback before the interaction has been saved.

## Prompt 6 — User Testing Iteration

Improve the guided assistant based on external user testing.

User feedback:
The user wanted an easier way to begin another guided scenario after completing the first interaction.

Requirements:
- Add a “Start new interaction” button.
- Clear all three intake answers.
- Clear the recommendation state.
- Clear saved interaction information.
- Clear feedback messages and selected feedback.
- Return progress to 0 of 3 questions completed.
