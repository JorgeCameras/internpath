export default function DemoPage() {
const modules = [
{
label: "Research",
title: "Find opportunities",
description:
"Research internship opportunities and organize useful information.",
href: "/research",
},
{
label: "Applications",
title: "Track applications",
description:
"Keep internship applications, status, and next actions organized.",
href: "/applications",
},
{
label: "Dashboard",
title: "View progress",
description:
"Review saved records and understand internship-search activity.",
href: "/dashboard",
},
{
label: "Chat",
title: "Get guided recommendations",
description:
"Answer structured questions and receive a recommended next action.",
href: "/chat",
},
{
label: "Marketing",
title: "Improve your strategy",
description:
"Review marketing content, testing ideas, and saved assets.",
href: "/marketing",
},
{
label: "Docs",
title: "Review build documentation",
description:
"Explore prompts, build logs, testing notes, and project documentation.",
href: "/docs",
},
];

const workflow = [
"Research",
"Applications",
"Dashboard",
"Chat Guidance",
"Marketing",
"Outcome",
];

const testers = [
{
name: "Ana",
role: "Student",
observation:
"The demo clearly explained how the main modules connect.",
result: "PASS",
},
{
name: "Diego",
role: "Student",
observation:
"The Guided Assistant was easy to follow and complete.",
result: "PASS",
},
{
name: "Sofía",
role: "Student",
observation:
"Applications and Dashboard were simple to understand.",
result: "PASS",
},
{
name: "Carlos",
role: "Recent Graduate",
observation:
"The Agent Map made the overall product workflow easy to understand.",
result: "PASS",
},
{
name: "Mariana",
role: "University Student",
observation:
"The product felt organized and consistent across the different pages.",
result: "PASS",
},
];

const roadmap = [
"Save recommendations and reminders",
"Expand dashboard metrics",
"Add personalized student profiles",
"Improve the Guided Assistant with more scenarios",
];

return (
<main className="min-h-screen bg-gray-50 px-6 py-12">
<div className="mx-auto max-w-6xl">
{/* HERO */}
<section>
<p className="text-sm font-semibold text-purple-600">
Final Demo
</p>

<h1 className="mt-2 text-4xl font-bold text-gray-900">
InternPath: Integrated Agentic Venture Demo
</h1>

<p className="mt-4 max-w-3xl text-gray-600">
A guided walkthrough of the complete InternPath product, showing how
research, applications, data, guided assistance, and product
improvement work together.
</p>
</section>

{/* MODULE WALKTHROUGH */}
<section className="mt-10">
<div className="flex flex-col justify-between gap-2 md:flex-row md:items-end">
<div>
<p className="text-sm font-semibold text-purple-600">
Guided Walkthrough
</p>

<h2 className="mt-1 text-2xl font-semibold text-gray-900">
Main InternPath Modules
</h2>
</div>

<p className="text-sm text-gray-500">
See how the modules work together
</p>
</div>

<div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
{modules.map((module) => (
<a
key={module.label}
href={module.href}
className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
>
<p className="text-sm font-semibold text-purple-600">
{module.label}
</p>

<h3 className="mt-2 text-lg font-semibold text-gray-900">
{module.title}
</h3>

<p className="mt-2 text-sm text-gray-600">
{module.description}
</p>
</a>
))}
</div>
</section>

{/* AGENT MAP */}
<section className="mt-10 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
<p className="text-sm font-semibold text-purple-600">
Agent Map
</p>

<h2 className="mt-2 text-2xl font-semibold text-gray-900">
How InternPath workflows connect
</h2>

<p className="mt-2 max-w-3xl text-gray-600">
InternPath connects research, application tracking, data review,
guided recommendations, and product improvement into one structured
workflow.
</p>

<div className="mt-6 grid gap-3 md:grid-cols-3 lg:grid-cols-6">
{workflow.map((label, index) => (
<div
key={label}
className="rounded-xl border border-gray-200 bg-gray-50 p-4 text-center"
>
<div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-sm font-bold text-white">
{index + 1}
</div>

<p className="mt-3 text-sm font-semibold text-gray-900">
{label}
</p>
</div>
))}
</div>

<div className="mt-5 rounded-xl bg-purple-50 p-4 text-sm text-purple-900">
Research → Applications → Dashboard → Chat Guidance → Marketing
Improvement → Better Internship-Search Outcome
</div>
</section>

{/* IMPACT + GUARDRAILS */}
<section className="mt-10 grid gap-6 lg:grid-cols-2">
<div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
<p className="text-sm font-semibold text-green-600">
Practical Impact
</p>

<h2 className="mt-2 text-2xl font-semibold text-gray-900">
How InternPath creates value
</h2>

<div className="mt-5 space-y-5">
<div>
<h3 className="font-semibold text-gray-900">
Reduce internship-search friction
</h3>
<p className="mt-1 text-sm text-gray-600">
Keep research, applications, progress, and guidance connected
in one product instead of using disconnected tools.
</p>
</div>

<div>
<h3 className="font-semibold text-gray-900">
Organize applications
</h3>
<p className="mt-1 text-sm text-gray-600">
Track opportunities, application status, saved information,
and next actions more clearly.
</p>
</div>

<div>
<h3 className="font-semibold text-gray-900">
Make next steps clearer
</h3>
<p className="mt-1 text-sm text-gray-600">
Use the Guided Assistant and dashboard information to identify
useful next actions during the internship search.
</p>
</div>

<div>
<h3 className="font-semibold text-gray-900">
Learn from product data
</h3>
<p className="mt-1 text-sm text-gray-600">
Persistent records and feedback help users review progress and
support future product improvements.
</p>
</div>
</div>
</div>

<div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
<p className="text-sm font-semibold text-red-600">
Risk & Guardrails
</p>

<h2 className="mt-2 text-2xl font-semibold text-gray-900">
Responsible product boundaries
</h2>

<div className="mt-5 space-y-4 text-sm text-gray-600">
<p>
InternPath provides general internship-search and career
guidance. It does not replace a qualified career advisor or
other professional.
</p>

<p>
The product does not provide legal, medical, financial, or
emergency advice.
</p>

<p>
High-stakes or highly personalized situations should be
escalated to a qualified person through the human-support
checkpoint.
</p>

<p>
Recommendations are structured guidance based on user selections
and available product data. Users should review important
decisions before acting on them.
</p>
</div>

<div className="mt-5 rounded-xl border border-red-100 bg-red-50 p-4">
<p className="text-sm font-semibold text-red-700">
Human checkpoint
</p>

<p className="mt-1 text-sm text-red-700">
When a situation requires personalized, high-stakes, or
university-specific guidance, InternPath directs the user to an
appropriate qualified person.
</p>
</div>
</div>
</section>

{/* TESTING + ROADMAP */}
<section className="mt-10 grid gap-6 lg:grid-cols-2">
<div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
<p className="text-sm font-semibold text-green-600">
Testing Summary
</p>

<h2 className="mt-2 text-2xl font-semibold text-gray-900">
External user validation
</h2>

<p className="mt-2 text-sm text-gray-600">
Five external users reviewed the main InternPath experience.
Results below summarize the final validation before submission.
</p>

<div className="mt-5 space-y-3">
{testers.map((tester) => (
<div
key={tester.name}
className="rounded-xl border border-gray-200 bg-gray-50 p-4"
>
<div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
<div>
<p className="font-semibold text-gray-900">
{tester.name} — {tester.role}
</p>

<p className="mt-1 text-sm text-gray-600">
{tester.observation}
</p>
</div>

<span className="w-fit rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
{tester.result}
</span>
</div>
</div>
))}
</div>

<div className="mt-5 rounded-xl bg-green-50 p-4">
<p className="text-sm font-semibold text-green-800">
Final testing result: PASS
</p>

<p className="mt-1 text-sm text-green-700">
Main routes, navigation, dashboard records, guided assistance,
documentation, and the final demo were validated during Week 6.
</p>
</div>
</div>

<div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
<p className="text-sm font-semibold text-purple-600">
Version 2 Roadmap
</p>

<h2 className="mt-2 text-2xl font-semibold text-gray-900">
What comes next
</h2>

<p className="mt-2 text-sm text-gray-600">
The current product focuses on a stable and testable internship
workflow. A future version can expand personalization and
automation.
</p>

<div className="mt-5 space-y-3">
{roadmap.map((item, index) => (
<div
key={item}
className="flex items-center gap-4 rounded-xl border border-gray-200 bg-gray-50 p-4"
>
<div className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-purple-100 text-sm font-bold text-purple-700">
{index + 1}
</div>

<p className="text-sm font-medium text-gray-800">
{item}
</p>
</div>
))}
</div>
</div>
</section>

{/* FINAL CTA */}
<section className="mt-10 rounded-2xl bg-purple-700 p-7 text-white">
<div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
<div>
<p className="text-sm font-semibold text-purple-200">
Explore InternPath Live
</p>

<h2 className="mt-2 text-2xl font-semibold">
Try the complete InternPath experience
</h2>

<p className="mt-2 max-w-2xl text-sm text-purple-100">
Explore the live modules, review your progress, and use the
Guided Assistant to identify your next internship-search
action.
</p>
</div>

<a
href="/"
className="inline-flex w-fit rounded-xl bg-white px-5 py-3 text-sm font-semibold text-purple-700"
>
Go to InternPath
</a>
</div>
</section>
</div>
</main>
);
}
