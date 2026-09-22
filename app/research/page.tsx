"use client";

import { useEffect, useMemo, useState } from "react";
import { supabase } from "../core/lib/supabase";

type SavedResearch = {
id: number;
topic: string;
market: string;
created_at: string;
};

export default function ResearchPage() {
const [search, setSearch] = useState("");
const [topic, setTopic] = useState("");
const [generatedTopic, setGeneratedTopic] = useState("");
const [savedResearch, setSavedResearch] = useState<SavedResearch[]>([]);
const [message, setMessage] = useState("");

const benchmarks = [
{
company: "Google",
focus: "Structured internship programs",
takeaway: "Clear role expectations and strong career branding",
},
{
company: "Microsoft",
focus: "Student career development",
takeaway: "Strong learning resources and intern support",
},
{
company: "Amazon",
focus: "High-volume internship hiring",
takeaway: "Clear competency-based recruiting process",
},
{
company: "Spotify",
focus: "Creative and technology internships",
takeaway: "Strong culture and employer branding",
},
{
company: "Meta",
focus: "Technical and business internships",
takeaway: "Highly structured recruiting and role specialization",
},
];

const competitors = [
{
name: "LinkedIn",
type: "Job Platform",
market: "Global",
strength: "Large professional network",
gap: "Application tracking is limited",
},
{
name: "Indeed",
type: "Job Platform",
market: "Global",
strength: "Large job database",
gap: "Limited internship research tools",
},
{
name: "Glassdoor",
type: "Research Platform",
market: "Global",
strength: "Company reviews and salary data",
gap: "Weak application organization",
},
{
name: "Handshake",
type: "Student Career Platform",
market: "Global",
strength: "University-focused recruiting",
gap: "Availability depends on institution",
},
{
name: "Simplify",
type: "Application Tool",
market: "Global",
strength: "Fast application workflows",
gap: "Limited benchmarking features",
},
{
name: "OCCMundial",
type: "Job Platform",
market: "Mexico",
strength: "Strong local job listings",
gap: "Limited internship comparison tools",
},
{
name: "Computrabajo",
type: "Job Platform",
market: "Mexico",
strength: "Large Mexican and LATAM presence",
gap: "Limited application tracking",
},
{
name: "Company Career Pages",
type: "Substitute",
market: "Global",
strength: "Direct access to official roles",
gap: "Research is fragmented across sites",
},
];

const loadSavedResearch = async () => {
const { data, error } = await supabase
.from("research_outputs")
.select("*")
.order("created_at", { ascending: false });

if (error) {
console.error(error);
return;
}

setSavedResearch(data || []);
};

useEffect(() => {
loadSavedResearch();
}, []);

const generateResearch = () => {
const cleanTopic = topic.trim();

if (!cleanTopic) {
setMessage("Please enter a research topic first.");
setGeneratedTopic("");
return;
}

setGeneratedTopic(cleanTopic);
setMessage("Research generated successfully.");
};

const saveResearch = async () => {
if (!generatedTopic) {
setMessage("Please generate a research topic before saving.");
return;
}

const { error } = await supabase.from("research_outputs").insert({
topic: generatedTopic,
market: "Mexico",
});

if (error) {
console.error(error);
setMessage(`Save failed: ${error.message}`);
return;
}

setMessage("Research saved successfully.");
await loadSavedResearch();
};

const filteredCompetitors = useMemo(() => {
const term = search.toLowerCase().trim();

if (!term) return competitors;

return competitors.filter((competitor) =>
[
competitor.name,
competitor.type,
competitor.market,
competitor.strength,
competitor.gap,
]
.join(" ")
.toLowerCase()
.includes(term)
);
}, [search]);

const isErrorMessage =
message.startsWith("Please") || message.startsWith("Save failed");

return (
<main className="min-h-screen px-6 py-10">
<div className="mx-auto max-w-6xl">
<p className="text-sm font-medium text-blue-600">
InternPath Research
</p>

<h1 className="mt-2 text-4xl font-bold">
Research + Benchmarking
</h1>

<p className="mt-3 max-w-2xl text-gray-600">
Research internship markets, compare competitors, review benchmarks,
and identify risks before applying.
</p>

<div className="mt-8 rounded-2xl border p-6">
<label className="mb-2 block font-medium">
Research Topic
</label>

<input
type="text"
value={topic}
onChange={(event) => setTopic(event.target.value)}
placeholder="Example: Product Manager internships in Mexico"
className="w-full rounded-lg border px-4 py-3"
/>

<div className="mt-4 flex flex-wrap gap-3">
<button
onClick={generateResearch}
className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white"
>
Generate Research
</button>

{generatedTopic && (
<button
onClick={saveResearch}
className="rounded-lg bg-gray-900 px-5 py-3 font-medium text-white"
>
Save Research
</button>
)}
</div>

{message && (
<div
className={`mt-3 rounded-lg border px-4 py-3 text-sm ${
isErrorMessage
? "border-red-200 bg-red-50 text-red-700"
: "border-green-200 bg-green-50 text-green-700"
}`}
>
{message}
</div>
)}

{generatedTopic && (
<div className="mt-5 rounded-xl border bg-gray-50 p-4">
<p className="text-xs font-medium uppercase text-gray-500">
Simulated Research Output
</p>

<p className="mt-1 font-semibold">
{generatedTopic}
</p>

<p className="mt-1 text-sm text-gray-600">
Showing benchmark, competitor, Mexico market, and risk analysis
for this research topic.
</p>
</div>
)}
</div>

<section className="mt-10">
<p className="text-sm font-medium text-blue-600">
Global Examples
</p>

<h2 className="mt-1 text-2xl font-bold">
Benchmark Companies
</h2>

<div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
{benchmarks.map((benchmark) => (
<div
key={benchmark.company}
className="rounded-2xl border p-5"
>
<h3 className="text-lg font-semibold">
{benchmark.company}
</h3>

<p className="mt-2 text-sm font-medium text-gray-700">
{benchmark.focus}
</p>

<p className="mt-3 text-sm text-gray-500">
{benchmark.takeaway}
</p>
</div>
))}
</div>
</section>

<section className="mt-12">
<p className="text-sm font-medium text-blue-600">
Market Comparison
</p>

<h2 className="mt-1 text-2xl font-bold">
Competitors & Substitutes
</h2>

<input
type="text"
value={search}
onChange={(event) => setSearch(event.target.value)}
placeholder="Search company, type, or market..."
className="mt-5 w-full rounded-lg border px-4 py-3"
/>

<div className="mt-5 overflow-x-auto rounded-2xl border">
<table className="w-full text-left text-sm">
<thead className="border-b bg-gray-50">
<tr>
<th className="px-4 py-3">Company</th>
<th className="px-4 py-3">Type</th>
<th className="px-4 py-3">Market</th>
<th className="px-4 py-3">Strength</th>
<th className="px-4 py-3">Gap</th>
</tr>
</thead>

<tbody>
{filteredCompetitors.map((competitor) => (
<tr
key={competitor.name}
className="border-b last:border-b-0"
>
<td className="px-4 py-3 font-medium">
{competitor.name}
</td>
<td className="px-4 py-3">{competitor.type}</td>
<td className="px-4 py-3">{competitor.market}</td>
<td className="px-4 py-3">{competitor.strength}</td>
<td className="px-4 py-3">{competitor.gap}</td>
</tr>
))}
</tbody>
</table>
</div>

<p className="mt-3 text-sm text-gray-500">
Showing {filteredCompetitors.length} of {competitors.length} results.
</p>
</section>

<section className="mt-12">
<p className="text-sm font-medium text-blue-600">
Mexico Localization
</p>

<h2 className="mt-1 text-2xl font-bold">
Mexico Internship Market Context
</h2>

<div className="mt-5 grid gap-4 md:grid-cols-3">
<div className="rounded-2xl border p-5">
<h3 className="font-semibold">Local Platforms</h3>
<p className="mt-2 text-sm text-gray-600">
OCCMundial and Computrabajo are important local sources for
internship and entry-level opportunities in Mexico.
</p>
</div>

<div className="rounded-2xl border p-5">
<h3 className="font-semibold">Language</h3>
<p className="mt-2 text-sm text-gray-600">
Many multinational internships in Mexico value English
proficiency in addition to Spanish communication skills.
</p>
</div>

<div className="rounded-2xl border p-5">
<h3 className="font-semibold">Hiring Context</h3>
<p className="mt-2 text-sm text-gray-600">
Students often combine university career portals, LinkedIn,
local job boards, and company career pages during their search.
</p>
</div>
</div>
</section>

<section className="mt-12">
<p className="text-sm font-medium text-blue-600">
Risk Analysis
</p>

<h2 className="mt-1 text-2xl font-bold">
Simple Risk Map
</h2>

<div className="mt-5 grid gap-4 md:grid-cols-2">
<div className="rounded-2xl border p-5">
<p className="text-sm font-medium">High Risk</p>
<h3 className="mt-1 font-semibold">
Fragmented internship information
</h3>
<p className="mt-2 text-sm text-gray-600">
Students may miss opportunities because information is spread
across many different platforms.
</p>
</div>

<div className="rounded-2xl border p-5">
<p className="text-sm font-medium">Medium Risk</p>
<h3 className="mt-1 font-semibold">
Inconsistent application tracking
</h3>
<p className="mt-2 text-sm text-gray-600">
Different platforms use different status systems, making it
difficult to maintain one clear application pipeline.
</p>
</div>

<div className="rounded-2xl border p-5">
<p className="text-sm font-medium">Medium Risk</p>
<h3 className="mt-1 font-semibold">
Limited local benchmarking
</h3>
<p className="mt-2 text-sm text-gray-600">
Global platforms may not always reflect the recruiting process
and internship landscape in Mexico.
</p>
</div>

<div className="rounded-2xl border p-5">
<p className="text-sm font-medium">Low Risk</p>
<h3 className="mt-1 font-semibold">
Duplicate research
</h3>
<p className="mt-2 text-sm text-gray-600">
Students may repeat the same research across multiple websites
if results are not saved in one place.
</p>
</div>
</div>
</section>

<section className="mt-12 pb-12">
<p className="text-sm font-medium text-blue-600">
Dashboard Widget
</p>

<h2 className="mt-1 text-2xl font-bold">
Saved Research
</h2>

{savedResearch.length === 0 ? (
<div className="mt-5 rounded-2xl border p-5">
<p className="text-sm text-gray-600">
No research saved yet.
</p>
</div>
) : (
<div className="mt-5 space-y-3">
{savedResearch.map((item) => (
<div
key={item.id}
className="rounded-2xl border p-5"
>
<p className="font-semibold">{item.topic}</p>

<p className="mt-1 text-sm text-gray-600">
Market: {item.market}
</p>

<p className="mt-1 text-xs text-gray-500">
Saved: {new Date(item.created_at).toLocaleString()}
</p>
</div>
))}
</div>
)}
</section>
</div>
</main>
);
}