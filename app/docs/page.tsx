export default function DocsPage() {
const prompts = [
{
title: "Week 4 — Marketing Page Scaffold",
detail:
"Create the /marketing page structure with brand identity, content library, campaign calendar, A/B testing, and saved assets.",
},
{
title: "Week 4 — Supabase Persistence",
detail:
"Connect marketing assets to Supabase with persistent storage, validation feedback, and Row Level Security enabled.",
},
{
title: "Week 5 — Guided Intake Flow",
detail:
"Build a three-question guided assistant that generates a recommended next step based on the user's selections.",
},
{
title: "Week 5 — Feedback Rating",
detail:
"Add Helpful and Not Helpful feedback controls after the interaction has been saved.",
},
{
title: "Week 5 — User Testing Iteration",
detail:
"Add a Start new interaction option after external testing identified difficulty restarting the guided flow.",
},
{
title: "Week 6 — Integrated Demo",
detail:
"Create the final /demo page that connects the main InternPath modules, impact, guardrails, testing, and roadmap.",
},
];

const buildLog = [
"Created the Week 6 planning documentation and implementation criteria.",
"Created the /demo page scaffold.",
"Added the six-module guided walkthrough.",
"Added the Agent Map showing how the workflows connect.",
"Added Practical Impact and Risk & Guardrails sections.",
"Added Testing Summary, Version 2 Roadmap, and final CTA.",
"Added a working /dashboard page with visible internship records.",
];

const testingEvidence = [
"Week 4: marketing asset save flow tested successfully.",
"Week 4: Supabase persistence verified after refresh.",
"Week 4: invalid empty asset validation tested.",
"Week 5: guided assistant interaction save tested.",
"Week 5: feedback persistence tested.",
"Week 5: Start new interaction improvement implemented after external testing.",
"Week 6: final regression and five external-user tests will be documented before submission.",
];

return (
<main className="min-h-screen bg-gray-50 px-6 py-12">
<div className="mx-auto max-w-6xl">
<p className="text-sm font-semibold text-purple-600">
InternPath Documentation
</p>

<h1 className="mt-2 text-4xl font-bold text-gray-900">
Prompt Library & Build Logs
</h1>

<p className="mt-4 max-w-3xl text-gray-600">
This page documents the main coding prompts, development milestones,
testing evidence, and implementation decisions used to build
InternPath across the course modules.
</p>

<section className="mt-10">
<p className="text-sm font-semibold text-purple-600">
Prompt Library
</p>

<h2 className="mt-1 text-2xl font-semibold text-gray-900">
Documented coding prompts
</h2>

<div className="mt-5 grid gap-4 md:grid-cols-2">
{prompts.map((prompt, index) => (
<div
key={prompt.title}
className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
>
<div className="flex items-start gap-4">
<div className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-purple-100 text-sm font-bold text-purple-700">
{index + 1}
</div>

<div>
<h3 className="font-semibold text-gray-900">
{prompt.title}
</h3>

<p className="mt-2 text-sm text-gray-600">
{prompt.detail}
</p>
</div>
</div>
</div>
))}
</div>
</section>

<section className="mt-12 grid gap-6 lg:grid-cols-2">
<div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
<p className="text-sm font-semibold text-blue-600">
Build Log
</p>

<h2 className="mt-2 text-2xl font-semibold text-gray-900">
Incremental development
</h2>

<div className="mt-5 space-y-3">
{buildLog.map((item, index) => (
<div
key={item}
className="flex gap-3 rounded-xl bg-gray-50 p-4"
>
<span className="font-semibold text-purple-600">
{index + 1}.
</span>

<p className="text-sm text-gray-700">
{item}
</p>
</div>
))}
</div>
</div>

<div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
<p className="text-sm font-semibold text-green-600">
Testing Evidence
</p>

<h2 className="mt-2 text-2xl font-semibold text-gray-900">
Verified development checks
</h2>

<div className="mt-5 space-y-3">
{testingEvidence.map((item) => (
<div
key={item}
className="rounded-xl border border-gray-200 bg-gray-50 p-4"
>
<p className="text-sm text-gray-700">
✓ {item}
</p>
</div>
))}
</div>
</div>
</section>

<section className="mt-12 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
<p className="text-sm font-semibold text-purple-600">
Development Principles
</p>

<h2 className="mt-2 text-2xl font-semibold text-gray-900">
Build discipline
</h2>

<div className="mt-5 grid gap-4 md:grid-cols-3">
<div className="rounded-xl bg-gray-50 p-4">
<h3 className="font-semibold text-gray-900">
Incremental commits
</h3>
<p className="mt-2 text-sm text-gray-600">
Major features were implemented through separate meaningful
commits instead of one final upload.
</p>
</div>

<div className="rounded-xl bg-gray-50 p-4">
<h3 className="font-semibold text-gray-900">
Test before deployment
</h3>
<p className="mt-2 text-sm text-gray-600">
Main workflows are checked locally before being pushed and
deployed to production.
</p>
</div>

<div className="rounded-xl bg-gray-50 p-4">
<h3 className="font-semibold text-gray-900">
Security first
</h3>
<p className="mt-2 text-sm text-gray-600">
Supabase Row Level Security remains enabled and restricted
credentials are not exposed in the client application.
</p>
</div>
</div>
</section>

<section className="mt-12 rounded-2xl bg-purple-700 p-7 text-white">
<p className="text-sm font-semibold text-purple-200">
Final Build
</p>

<h2 className="mt-2 text-2xl font-semibold">
Review the integrated Week 6 demo
</h2>

<p className="mt-2 max-w-2xl text-sm text-purple-100">
The final demo brings together the core InternPath pages,
workflows, impact, guardrails, testing evidence, and planned
improvements.
</p>

<a
href="/demo"
className="mt-5 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-semibold text-purple-700"
>
Open Final Demo
</a>
</section>
</div>
</main>
);
}
