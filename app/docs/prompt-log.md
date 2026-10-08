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
