"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function ChatPage() {
const [stage, setStage] = useState("");
const [help, setHelp] = useState("");
const [urgency, setUrgency] = useState("");

const completed = [stage, help, urgency].filter(Boolean).length;

return (
<>
<Navbar />

<main className="min-h-screen bg-gray-50 px-6 py-12">
<div className="mx-auto max-w-6xl">
<section className="mb-8">
<p className="mb-2 text-sm font-semibold text-purple-600">
Module 5
</p>

<h1 className="text-4xl font-bold text-gray-900">
InternPath Guided Assistant
</h1>

<p className="mt-3 max-w-2xl text-gray-600">
Answer three quick questions about your internship search and
receive a recommended next step.
</p>
</section>

<div className="grid gap-6 lg:grid-cols-3">
<section className="space-y-5 rounded-2xl border bg-white p-6 shadow-sm lg:col-span-2">
<div className="rounded-xl bg-gray-50 p-4">
<p className="font-semibold text-gray-900">InternPath</p>

<p className="mt-2 text-gray-700">
Hi! I am the InternPath Guided Assistant. Answer these three
questions so I can help you identify your next step.
</p>
</div>

<QuestionCard
number={1}
question="What stage are you currently in?"
options={[
"Just starting",
"Researching companies",
"Applying",
"Interviewing",
]}
selected={stage}
onSelect={setStage}
/>

{stage && (
<QuestionCard
number={2}
question="What do you need help with today?"
options={[
"Finding internships",
"Organizing applications",
"Preparing an application",
"Preparing for an interview",
]}
selected={help}
onSelect={setHelp}
/>
)}

{help && (
<QuestionCard
number={3}
question="How urgent is your situation?"
options={[
"Just exploring",
"This week",
"Within 48 hours",
]}
selected={urgency}
onSelect={setUrgency}
/>
)}

{completed === 3 && (
<div className="rounded-xl border border-purple-200 bg-purple-50 p-5">
<p className="font-semibold text-purple-900">
Intake complete
</p>

<p className="mt-2 text-sm text-purple-800">
Your answers are ready. The next development step will add
recommendation logic.
</p>
</div>
)}
</section>

<aside className="space-y-6">
<div className="rounded-2xl border bg-white p-5 shadow-sm">
<h2 className="font-semibold text-gray-900">
Guided Assistant
</h2>

<p className="mt-2 text-sm text-gray-600">
This tool provides structured internship-search guidance and
is not a human career advisor.
</p>
</div>

<div className="rounded-2xl border bg-white p-5 shadow-sm">
<h2 className="font-semibold text-gray-900">Progress</h2>

<p className="mt-2 text-sm text-gray-500">
{completed} of 3 questions completed
</p>

<div className="mt-4 h-2 overflow-hidden rounded-full bg-gray-100">
<div
className="h-full bg-purple-600 transition-all"
style={{ width: `${(completed / 3) * 100}%` }}
/>
</div>
</div>
</aside>
</div>
</div>
</main>
</>
);
}

function QuestionCard({
number,
question,
options,
selected,
onSelect,
}: {
number: number;
question: string;
options: string[];
selected: string;
onSelect: (value: string) => void;
}) {
return (
<div className="rounded-xl border p-5">
<p className="text-sm font-semibold text-purple-600">
Question {number} of 3
</p>

<h2 className="mt-2 font-semibold text-gray-900">{question}</h2>

<div className="mt-4 flex flex-wrap gap-3">
{options.map((option) => (
<button
key={option}
onClick={() => onSelect(option)}
className={`rounded-lg border px-4 py-2 text-sm transition ${
selected === option
? "border-purple-600 bg-purple-600 text-white"
: "border-gray-300 bg-white text-gray-700 hover:border-purple-400"
}`}
>
{option}
</button>
))}
</div>
</div>
);
}
