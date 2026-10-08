export default function ProductPage() {
const tiers = [
{
name: "Free",
price: "$0",
description: "Get started with the essentials.",
features: [
"Internship application tracking",
"Basic status management",
"Research dashboard",
"Limited saved research",
"Basic application organization",
],
},
{
name: "Plus",
price: "$99 MXN",
description: "For active applicants who want more tools.",
features: [
"Everything in Free",
"Unlimited saved research",
"Advanced application tracking",
"Competitor and market research tools",
"Deadline reminders",
"Enhanced dashboard insights",
],
},
{
name: "Pro",
price: "$199 MXN",
description: "For students who want the full experience.",
features: [
"Everything in Plus",
"Advanced analytics",
"Priority recommendations",
"AI-assisted opportunity organization",
"Premium internship insights",
"Advanced planning tools",
],
},
];

return (
<main className="min-h-screen bg-white px-6 py-12 text-slate-900">
<div className="mx-auto max-w-6xl">
<section className="mb-12">
<p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-600">
Product
</p>

<h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
A Smarter Way to Find Your Next Internship
</h1>

<p className="mt-4 max-w-2xl text-lg text-slate-600">
InternPath helps students research opportunities, organize
applications, and stay on track. Choose the plan that fits your
goals and get the tools you need to succeed.
</p>

<div className="mt-6 flex flex-wrap gap-3">
<a
href="/pricing"
className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white"
>
View Pricing
</a>

<a
href="#feature-map"
className="rounded-lg border border-slate-300 px-5 py-3 font-medium"
>
See Feature Map
</a>
</div>
</section>

<section className="mb-12">
<h2 className="text-3xl font-bold">Pricing Tiers</h2>
<p className="mt-2 text-slate-600">
Choose the plan that fits your internship journey.
</p>

<div className="mt-6 grid gap-6 md:grid-cols-3">
{tiers.map((tier) => (
<div
key={tier.name}
className="rounded-2xl border border-slate-200 p-6 shadow-sm"
>
<h3 className="text-2xl font-bold">{tier.name}</h3>

<div className="mt-3 text-3xl font-bold">{tier.price}</div>

<p className="mt-2 text-slate-600">{tier.description}</p>

<ul className="mt-5 space-y-3">
{tier.features.map((feature) => (
<li key={feature} className="flex gap-2 text-sm">
<span className="font-bold text-blue-600">✓</span>
<span>{feature}</span>
</li>
))}
</ul>
</div>
))}
</div>
</section>

<section
id="feature-map"
className="mb-12 rounded-2xl border border-slate-200 p-6"
>
<h2 className="text-3xl font-bold">Feature Map</h2>

<p className="mt-2 text-slate-600">
A simple view of how InternPath features are organized.
</p>

<div className="mt-6 grid gap-4 md:grid-cols-4">
{[
["Applications", "Track and manage your applications"],
["Research", "Find and compare opportunities"],
["Insights", "Understand progress and trends"],
["AI Support", "Get guidance and organize faster"],
].map(([title, description]) => (
<div
key={title}
className="rounded-xl border border-slate-200 bg-slate-50 p-5"
>
<h3 className="font-semibold">{title}</h3>
<p className="mt-2 text-sm text-slate-600">{description}</p>
</div>
))}
</div>
</section>

<section className="rounded-2xl border border-slate-200 p-6">
<h2 className="text-3xl font-bold">Customer Segments</h2>

<p className="mt-2 text-slate-600">
InternPath is designed for students with different internship
search needs.
</p>

<div className="mt-6 grid gap-6 md:grid-cols-2">
<div className="rounded-xl bg-green-50 p-6">
<h3 className="text-xl font-bold">Casual Applicants</h3>
<p className="mt-2 text-slate-700">
Students applying to a limited number of internships who mainly
need organization and basic research tools.
</p>
</div>

<div className="rounded-xl bg-violet-50 p-6">
<h3 className="text-xl font-bold">Active Applicants</h3>
<p className="mt-2 text-slate-700">
Students applying to many competitive internships who need
deeper research, tracking, analytics, and more structured
support.
</p>
</div>
</div>
</section>
</div>
</main>
);
}
