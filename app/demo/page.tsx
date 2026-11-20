export default function DemoPage() {
return (
<main className="min-h-screen bg-gray-50 px-6 py-12">
<div className="mx-auto max-w-6xl">
<p className="text-sm font-semibold text-purple-600">
Final Demo
</p>

<h1 className="mt-2 text-4xl font-bold text-gray-900">
InternPath: Integrated Agentic Venture Demo
</h1>

<p className="mt-4 max-w-2xl text-gray-600">
A guided walkthrough of the complete InternPath product, showing how
research, applications, data, guided assistance, and product
improvement work together.
</p>

<div className="mt-8">
<div className="mb-4 flex items-center justify-between">
<div>
<p className="text-sm font-semibold text-purple-600">
Guided Walkthrough
</p>

<h2 className="text-2xl font-semibold text-gray-900">
Main InternPath Modules
</h2>
</div>

<p className="text-sm text-gray-500">
See how the modules work together
</p>
</div>

<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
<a
href="/research"
className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
>
<p className="text-sm font-semibold text-purple-600">
Research
</p>

<h3 className="mt-2 text-lg font-semibold text-gray-900">
Find opportunities
</h3>

<p className="mt-2 text-sm text-gray-600">
Research internship opportunities and organize useful
information.
</p>
</a>

<a
href="/applications"
className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
>
<p className="text-sm font-semibold text-purple-600">
Applications
</p>

<h3 className="mt-2 text-lg font-semibold text-gray-900">
Track applications
</h3>

<p className="mt-2 text-sm text-gray-600">
Keep internship applications, status, and next actions
organized.
</p>
</a>

<a
href="/dashboard"
className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
>
<p className="text-sm font-semibold text-purple-600">
Dashboard
</p>

<h3 className="mt-2 text-lg font-semibold text-gray-900">
View progress
</h3>

<p className="mt-2 text-sm text-gray-600">
Review saved records and understand internship-search activity.
</p>
</a>

<a
href="/chat"
className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
>
<p className="text-sm font-semibold text-purple-600">
Chat
</p>

<h3 className="mt-2 text-lg font-semibold text-gray-900">
Get guided recommendations
</h3>

<p className="mt-2 text-sm text-gray-600">
Answer structured questions and receive a recommended next
action.
</p>
</a>

<a
href="/marketing"
className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
>
<p className="text-sm font-semibold text-purple-600">
Marketing
</p>

<h3 className="mt-2 text-lg font-semibold text-gray-900">
Improve your strategy
</h3>

<p className="mt-2 text-sm text-gray-600">
Review marketing content, testing ideas, and saved assets.
</p>
</a>

<a
href="/docs"
className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
>
<p className="text-sm font-semibold text-purple-600">
Docs
</p>

<h3 className="mt-2 text-lg font-semibold text-gray-900">
Review build documentation
</h3>

<p className="mt-2 text-sm text-gray-600">
Explore prompts, build logs, testing notes, and project
documentation.
</p>
</a>
</div>
</div>

<div className="mt-12 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
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
{[
["1", "Research"],
["2", "Applications"],
["3", "Dashboard"],
["4", "Chat Guidance"],
["5", "Marketing"],
["6", "Outcome"],
].map(([number, label]) => (
<div
key={label}
className="rounded-xl border border-gray-200 bg-gray-50 p-4 text-center"
>
<div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-sm font-semibold text-white">
{number}
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
</div>
</div>
</main>
);
}

