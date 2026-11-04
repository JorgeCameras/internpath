const benefits = [
{
title: "Track every application",
description:
"Keep internship opportunities, application stages, and deadlines organized in one place.",
},
{
title: "Research before you apply",
description:
"Compare companies, markets, and opportunities before making your next move.",
},
{
title: "Stay on top of deadlines",
description:
"Reduce missed follow-ups and keep your internship search moving forward.",
},
];

const steps = [
{
number: "01",
title: "Find opportunities",
description:
"Use InternPath to identify and organize internships worth pursuing.",
},
{
number: "02",
title: "Research and compare",
description:
"Review companies, roles, and market context before applying.",
},
{
number: "03",
title: "Track your progress",
description:
"Manage applications, interviews, offers, and follow-ups from one dashboard.",
},
];

export default function Home() {
return (
<main className="min-h-screen bg-white text-slate-900">
<section className="border-b bg-gradient-to-b from-blue-50 to-white px-6 py-20">
<div className="mx-auto max-w-6xl">
<div className="max-w-3xl">
<span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
Built for students navigating internships
</span>

<h1 className="mt-6 text-5xl font-bold leading-tight md:text-6xl">
Find, Track, and Manage Internships Smarter
</h1>

<p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
InternPath gives students one organized workspace to research
opportunities, manage applications, track deadlines, and make
better career decisions.
</p>

<div className="mt-8 flex flex-col gap-3 sm:flex-row">
<a
href="/core"
className="rounded-xl bg-blue-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
>
Start Organizing Your Applications
</a>

<a
href="/marketing"
className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-center font-semibold text-slate-700 transition hover:bg-slate-50"
>
Explore InternPath
</a>
</div>

<p className="mt-4 text-sm text-slate-500">
No complicated setup. Start organizing your internship search in
minutes.
</p>
</div>
</div>
</section>

<section className="px-6 py-16">
<div className="mx-auto max-w-6xl">
<div className="max-w-2xl">
<p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
Why InternPath
</p>

<h2 className="mt-2 text-3xl font-bold">
One place for your entire internship search
</h2>

<p className="mt-3 text-slate-600">
Replace scattered spreadsheets, tabs, and notes with a clearer
workflow built around the way students actually search for
internships.
</p>
</div>

<div className="mt-8 grid gap-5 md:grid-cols-3">
{benefits.map((benefit) => (
<article
key={benefit.title}
className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
>
<div className="mb-4 h-10 w-10 rounded-xl bg-blue-100" />

<h3 className="text-xl font-bold">{benefit.title}</h3>

<p className="mt-3 leading-7 text-slate-600">
{benefit.description}
</p>
</article>
))}
</div>
</div>
</section>

<section className="bg-slate-50 px-6 py-16">
<div className="mx-auto max-w-6xl">
<div className="grid gap-10 lg:grid-cols-2 lg:items-center">
<div>
<p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
Simple workflow
</p>

<h2 className="mt-2 text-3xl font-bold">
Turn internship searching into a process
</h2>

<p className="mt-4 leading-7 text-slate-600">
InternPath helps you move from discovering an opportunity to
researching it, applying, following up, and tracking the final
result.
</p>
</div>

<div className="space-y-4">
{steps.map((step) => (
<div
key={step.number}
className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5"
>
<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 font-bold text-white">
{step.number}
</div>

<div>
<h3 className="font-bold">{step.title}</h3>
<p className="mt-1 text-sm leading-6 text-slate-600">
{step.description}
</p>
</div>
</div>
))}
</div>
</div>
</div>
</section>

<section className="px-6 py-16">
<div className="mx-auto max-w-6xl">
<div className="rounded-3xl bg-slate-900 px-8 py-12 text-white md:px-12">
<div className="grid gap-8 lg:grid-cols-2 lg:items-center">
<div>
<p className="text-sm font-semibold uppercase tracking-wide text-blue-300">
Built around real student needs
</p>

<h2 className="mt-3 text-3xl font-bold">
Stop managing your internship search across five different
tools
</h2>

<p className="mt-4 max-w-xl leading-7 text-slate-300">
InternPath brings research, application tracking, planning,
and marketing insights together in one structured workspace.
</p>
</div>

<div className="grid gap-3 sm:grid-cols-3">
<div className="rounded-2xl bg-white/10 p-5">
<p className="text-3xl font-bold">1</p>
<p className="mt-1 text-sm text-slate-300">
Organized workspace
</p>
</div>

<div className="rounded-2xl bg-white/10 p-5">
<p className="text-3xl font-bold">4</p>
<p className="mt-1 text-sm text-slate-300">
Core tools
</p>
</div>

<div className="rounded-2xl bg-white/10 p-5">
<p className="text-3xl font-bold">24/7</p>
<p className="mt-1 text-sm text-slate-300">
Access to your workflow
</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="px-6 pb-20">
<div className="mx-auto max-w-6xl rounded-3xl border border-blue-100 bg-blue-50 px-8 py-12 text-center">
<p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
Ready to get organized?
</p>

<h2 className="mt-3 text-3xl font-bold">
Make your next internship application easier to manage
</h2>

<p className="mx-auto mt-4 max-w-2xl text-slate-600">
Start using InternPath to organize opportunities, research
companies, track progress, and stay on top of every next step.
</p>

<div className="mt-7">
<a
href="/core"
className="inline-block rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700"
>
Get Started
</a>
</div>
</div>
</section>
</main>
);
}
