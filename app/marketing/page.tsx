"use client";

import { useEffect, useState } from "react";
import { supabase } from "../core/lib/supabase";

type SavedAsset = {
id: number;
title: string;
type: string;
created_at: string;
};

const socialPosts = [
{
platform: "Instagram",
title: "Stop losing track of internship applications",
caption:
"InternPath helps students organize applications, research companies, and stay on top of deadlines in one place.",
},
{
platform: "LinkedIn",
title: "Your internship search deserves a system",
caption:
"Track opportunities, compare companies, and manage your internship journey with InternPath.",
},
{
platform: "TikTok",
title: "POV: you finally organize your internship search",
caption:
"No more spreadsheets, random tabs, or forgotten deadlines. InternPath keeps everything together.",
},
{
platform: "Instagram",
title: "3 things every internship applicant should track",
caption:
"Application status, deadlines, and company research. InternPath helps you manage all three.",
},
{
platform: "LinkedIn",
title: "Turn internship searching into a process",
caption:
"InternPath gives students a structured way to research, apply, and follow up on opportunities.",
},
{
platform: "TikTok",
title: "Internship search chaos vs. InternPath",
caption:
"Before: 20 tabs and no idea what happened. After: one dashboard with your entire search.",
},
{
platform: "Instagram",
title: "Research smarter before you apply",
caption:
"Compare companies, opportunities, and market context before sending your next application.",
},
{
platform: "LinkedIn",
title: "A better way to manage internship applications",
caption:
"InternPath combines research, tracking, and planning tools for students building their careers.",
},
{
platform: "TikTok",
title: "The internship tracker students actually need",
caption:
"Applications, research, deadlines, and planning — organized in one place.",
},
{
platform: "Instagram",
title: "Make every internship application count",
caption:
"Stay organized, make better decisions, and spend less time managing spreadsheets with InternPath.",
},
];

const videoScripts = [
{
title: "The Internship Search Problem",
hook: "How many internship tabs do you have open right now?",
message:
"InternPath helps students organize applications, research companies, and manage deadlines from one dashboard.",
cta: "Organize your internship search with InternPath.",
},
{
title: "From Chaos to Organized",
hook: "Your internship search should not live in five different spreadsheets.",
message:
"With InternPath, you can track opportunities, compare companies, and manage your application process in one place.",
cta: "Start building a smarter internship search.",
},
{
title: "Before You Apply",
hook: "Before you send another internship application, do this.",
message:
"Research the company, compare the opportunity, track the deadline, and organize your next steps with InternPath.",
cta: "Make your next application more organized.",
},
];

const campaignDays = [
["Day 1", "Instagram", "Problem awareness", "Introduce internship-search chaos"],
["Day 2", "LinkedIn", "Product education", "Explain InternPath value"],
["Day 3", "TikTok", "Awareness", "Short-form problem/solution video"],
["Day 4", "Instagram", "Education", "Application tracking tips"],
["Day 5", "LinkedIn", "Credibility", "Explain research workflow"],
["Day 6", "TikTok", "Engagement", "Before vs. after InternPath"],
["Day 7", "Instagram", "Product", "Show dashboard benefits"],
["Day 8", "LinkedIn", "Education", "Internship organization advice"],
["Day 9", "TikTok", "Awareness", "Internship mistakes video"],
["Day 10", "Instagram", "Research", "Company research tips"],
["Day 11", "LinkedIn", "Product", "Application management workflow"],
["Day 12", "TikTok", "Engagement", "Student pain-point video"],
["Day 13", "Instagram", "Conversion", "Highlight Plus plan benefits"],
["Day 14", "LinkedIn", "Conversion", "Final campaign CTA"],
];

const abTests = [
{
name: "Homepage Headline",
versionA: "Organize Your Internship Search in One Place",
versionB: "Find, Track, and Manage Internships Smarter",
hypothesis:
"Version B may communicate more specific benefits because it describes three concrete actions.",
},
{
name: "Marketing CTA",
versionA: "Start Organizing Your Applications",
versionB: "Explore InternPath",
hypothesis:
"Version A may be clearer because it explains the action the user will take.",
},
];

export default function MarketingPage() {
const [savedAssets, setSavedAssets] = useState<SavedAsset[]>([]);
const [message, setMessage] = useState("");
const [loading, setLoading] = useState(false);

const loadSavedAssets = async () => {
const { data, error } = await supabase
.from("marketing_assets")
.select("*")
.order("created_at", { ascending: false });

if (error) {
console.error(error);
setMessage("Could not load saved marketing assets.");
return;
}

setSavedAssets(data || []);
};

useEffect(() => {
loadSavedAssets();
}, []);

const saveAsset = async (title: string, type: string) => {
if (!title.trim()) {
setMessage("Please select a valid marketing asset.");
return;
}

setLoading(true);
setMessage("");

const { error } = await supabase.from("marketing_assets").insert({
id: Date.now(),
title,
type,
created_at: new Date().toISOString(),
});

if (error) {
console.error(error);
setMessage("Save failed. Please try again.");
setLoading(false);
return;
}

setMessage("Marketing asset saved successfully.");
await loadSavedAssets();
setLoading(false);
};

const isError =
message.startsWith("Please") ||
message.startsWith("Save failed") ||
message.startsWith("Could not");

return (
<main className="min-h-screen bg-slate-50 px-6 py-12 text-slate-900">
<div className="mx-auto max-w-6xl">
<p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
Marketing
</p>

<h1 className="mt-2 text-4xl font-bold">
Marketing Engine + Content System
</h1>

<p className="mt-4 max-w-3xl text-slate-600">
Plan, create, test, and manage InternPath&apos;s marketing content in
one place.
</p>

<section className="mt-10 grid gap-4 md:grid-cols-4">
<div className="rounded-2xl border bg-white p-5">
<p className="text-3xl font-bold">10</p>
<p className="mt-1 text-slate-600">Social Posts</p>
</div>

<div className="rounded-2xl border bg-white p-5">
<p className="text-3xl font-bold">3</p>
<p className="mt-1 text-slate-600">Video Scripts</p>
</div>

<div className="rounded-2xl border bg-white p-5">
<p className="text-3xl font-bold">14</p>
<p className="mt-1 text-slate-600">Campaign Days</p>
</div>

<div className="rounded-2xl border bg-white p-5">
<p className="text-3xl font-bold">2</p>
<p className="mt-1 text-slate-600">A/B Tests</p>
</div>
</section>

<section className="mt-8 rounded-2xl border bg-white p-6">
<h2 className="text-2xl font-bold">Brand Identity</h2>

<div className="mt-5 grid gap-5 md:grid-cols-2">
<div>
<p className="font-semibold">Positioning</p>
<p className="mt-1 text-slate-600">
InternPath is an internship-search workspace that helps students
research opportunities, organize applications, and make better
career decisions.
</p>
</div>

<div>
<p className="font-semibold">Target Persona</p>
<p className="mt-1 text-slate-600">
University students ages 18–25 actively searching for internships
and managing multiple applications.
</p>
</div>

<div>
<p className="font-semibold">Value Proposition</p>
<p className="mt-1 text-slate-600">
Find, research, track, and manage internship opportunities from
one organized platform.
</p>
</div>

<div>
<p className="font-semibold">Tone of Voice</p>
<p className="mt-1 text-slate-600">
Clear, supportive, practical, student-focused, and professional.
</p>
</div>
</div>
</section>

<section className="mt-8">
<h2 className="text-2xl font-bold">Content Library</h2>
<p className="mt-1 text-slate-600">
Ready-to-use social media content for InternPath.
</p>

<div className="mt-5 grid gap-4 md:grid-cols-2">
{socialPosts.map((post, index) => (
<article key={index} className="rounded-2xl border bg-white p-5">
<span className="text-sm font-semibold text-blue-600">
{post.platform}
</span>

<h3 className="mt-2 font-bold">{post.title}</h3>

<p className="mt-2 text-sm text-slate-600">{post.caption}</p>

<button
onClick={() => saveAsset(post.title, "Social Post")}
disabled={loading}
className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white disabled:opacity-50"
>
Save Asset
</button>
</article>
))}
</div>
</section>

<section className="mt-8">
<h2 className="text-2xl font-bold">Video Scripts</h2>

<div className="mt-5 grid gap-4 md:grid-cols-3">
{videoScripts.map((script, index) => (
<article key={index} className="rounded-2xl border bg-white p-5">
<h3 className="font-bold">{script.title}</h3>

<p className="mt-3 text-sm">
<strong>Hook:</strong> {script.hook}
</p>

<p className="mt-3 text-sm text-slate-600">
{script.message}
</p>

<p className="mt-3 text-sm">
<strong>CTA:</strong> {script.cta}
</p>

<button
onClick={() => saveAsset(script.title, "Video Script")}
disabled={loading}
className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white disabled:opacity-50"
>
Save Asset
</button>
</article>
))}
</div>
</section>

<section className="mt-8 rounded-2xl border bg-white p-6">
<h2 className="text-2xl font-bold">14-Day Campaign Calendar</h2>

<div className="mt-5 overflow-x-auto">
<table className="w-full text-left text-sm">
<thead className="border-b">
<tr>
<th className="p-3">Day</th>
<th className="p-3">Channel</th>
<th className="p-3">Objective</th>
<th className="p-3">Content</th>
</tr>
</thead>

<tbody>
{campaignDays.map((day, index) => (
<tr key={index} className="border-b">
{day.map((value, valueIndex) => (
<td key={valueIndex} className="p-3">
{value}
</td>
))}
</tr>
))}
</tbody>
</table>
</div>
</section>

<section className="mt-8">
<h2 className="text-2xl font-bold">A/B Testing</h2>
<p className="mt-1 text-slate-600">
Compare alternative marketing messages before using them.
</p>

<div className="mt-5 grid gap-4 md:grid-cols-2">
{abTests.map((test, index) => (
<article key={index} className="rounded-2xl border bg-white p-6">
<h3 className="text-lg font-bold">{test.name}</h3>

<div className="mt-4 rounded-lg bg-slate-50 p-4">
<p className="text-xs font-semibold text-blue-600">
VERSION A
</p>
<p className="mt-1">{test.versionA}</p>
</div>

<div className="mt-3 rounded-lg bg-slate-50 p-4">
<p className="text-xs font-semibold text-green-600">
VERSION B
</p>
<p className="mt-1">{test.versionB}</p>
</div>

<p className="mt-4 text-sm text-slate-600">
<strong>Hypothesis:</strong> {test.hypothesis}
</p>
</article>
))}
</div>
</section>

<section className="mt-8 rounded-2xl border bg-white p-6">
<div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
<div>
<h2 className="text-2xl font-bold">Saved Marketing Assets</h2>
<p className="mt-1 text-slate-600">
Saved permanently using Supabase.
</p>
</div>

<button
onClick={() => saveAsset("", "")}
className="rounded-lg border px-4 py-2 text-sm font-semibold"
>
Test Empty Asset
</button>
</div>

{message && (
<div
className={`mt-4 rounded-lg border px-4 py-3 text-sm ${
isError
? "border-red-200 bg-red-50 text-red-700"
: "border-green-200 bg-green-50 text-green-700"
}`}
>
{message}
</div>
)}

<div className="mt-5">
{savedAssets.length === 0 ? (
<p className="text-sm text-slate-500">
No saved marketing assets yet.
</p>
) : (
<div className="grid gap-3 md:grid-cols-2">
{savedAssets.map((asset) => (
<div
key={asset.id}
className="rounded-lg border bg-slate-50 px-4 py-3"
>
<p className="font-semibold">{asset.title}</p>
<p className="mt-1 text-xs text-slate-500">{asset.type}</p>
</div>
))}
</div>
)}
</div>
</section>
</div>
</main>
);
}
