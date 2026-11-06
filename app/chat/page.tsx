"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { supabase } from "@/app/core/lib/supabase";

export default function ChatPage() {
const [stage, setStage] = useState("");
const [help, setHelp] = useState("");
const [urgency, setUrgency] = useState("");

const [saveMessage, setSaveMessage] = useState("");
const [isSaving, setIsSaving] = useState(false);
const [savedInteractionId, setSavedInteractionId] = useState<string | null>(
null
);

const [feedbackMessage, setFeedbackMessage] = useState("");
const [selectedFeedback, setSelectedFeedback] = useState("");

const completed = [stage, help, urgency].filter(Boolean).length;

function getRecommendation() {
if (!stage || !help || !urgency) return null;

if (help === "Preparing for an interview") {
return {
title: "Prepare for your interview",
text: "Review the company, prepare examples of your experience, and practice common interview questions. Use InternPath to keep your interview information organized.",
};
}

if (help === "Preparing an application") {
return {
title: "Prepare a strong application",
text: "Review the internship requirements, update your resume, and make sure your application clearly matches the role before submitting it.",
};
}

if (help === "Organizing applications") {
return {
title: "Organize your applications",
text: "Use InternPath to track each application, its current status, deadlines, and next actions so you do not lose important opportunities.",
};
}

return {
title: "Start exploring opportunities",
text: "Use the Research and Applications sections of InternPath to identify internships that match your interests and organize the opportunities you want to pursue.",
};
}

const recommendation = getRecommendation();

const showHumanCheckpoint =
urgency === "Within 48 hours" &&
(help === "Preparing an application" ||
help === "Preparing for an interview");

async function saveInteraction() {
if (!recommendation) return;

setSaveMessage("");
setFeedbackMessage("");
setSelectedFeedback("");
setIsSaving(true);

const { data, error } = await supabase
.from("chat_interactions")
.insert([
{
stage,
help_type: help,
urgency,
recommendation: recommendation.title,
feedback: null,
},
])
.select("id")
.single();

setIsSaving(false);

if (error) {
console.error(error);
setSaveMessage("Could not save interaction.");
return;
}

setSavedInteractionId(data.id);
setSaveMessage("Interaction saved successfully.");
}

async function submitFeedback(value: "Helpful" | "Not helpful") {
if (!savedInteractionId) {
setFeedbackMessage("Save the interaction before submitting feedback.");
return;
}

setFeedbackMessage("");

const { error } = await supabase
.from("chat_interactions")
.update({
feedback: value,
})
.eq("id", savedInteractionId);

if (error) {
console.error(error);
setFeedbackMessage("Could not save feedback.");
return;
}

setSelectedFeedback(value);
setFeedbackMessage("Feedback saved successfully.");
}

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

{recommendation && (
<div className="rounded-xl border border-purple-200 bg-purple-50 p-5">
<p className="text-sm font-semibold text-purple-600">
Your recommendation
</p>

<h2 className="mt-2 text-lg font-bold text-purple-950">
{recommendation.title}
</h2>

<p className="mt-2 text-sm text-purple-900">
{recommendation.text}
</p>

<button
onClick={saveInteraction}
disabled={isSaving}
className="mt-4 rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-60"
>
{isSaving ? "Saving..." : "Save interaction"}
</button>

{saveMessage && (
<p
className={`mt-3 text-sm font-medium ${
saveMessage.includes("successfully")
? "text-green-700"
: "text-red-700"
}`}
>
{saveMessage}
</p>
)}

{savedInteractionId && (
<div className="mt-5 border-t border-purple-200 pt-4">
<p className="text-sm font-semibold text-purple-950">
Was this recommendation helpful?
</p>

<div className="mt-3 flex gap-3">
<button
onClick={() => submitFeedback("Helpful")}
className={`rounded-lg border px-4 py-2 text-sm font-medium ${
selectedFeedback === "Helpful"
? "border-green-600 bg-green-100 text-green-800"
: "border-gray-300 bg-white text-gray-700 hover:border-green-500"
}`}
>
👍 Helpful
</button>

<button
onClick={() => submitFeedback("Not helpful")}
className={`rounded-lg border px-4 py-2 text-sm font-medium ${
selectedFeedback === "Not helpful"
? "border-red-600 bg-red-100 text-red-800"
: "border-gray-300 bg-white text-gray-700 hover:border-red-500"
}`}
>
👎 Not helpful
</button>
</div>

{feedbackMessage && (
<p
className={`mt-3 text-sm font-medium ${
feedbackMessage.includes("successfully")
? "text-green-700"
: "text-red-700"
}`}
>
{feedbackMessage}
</p>
)}
</div>
)}
</div>
)}

{showHumanCheckpoint && (
<div className="rounded-xl border border-amber-300 bg-amber-50 p-5">
<p className="font-semibold text-amber-900">
Human support recommended
</p>

<p className="mt-2 text-sm text-amber-800">
Because your situation is urgent, consider contacting a
university career advisor, professor, recruiter, or another
appropriate person for personalized support.
</p>
</div>
)}

<div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
<p className="font-semibold text-gray-900">Guardrail</p>

<p className="mt-2 text-sm text-gray-600">
InternPath provides general internship-search guidance only.
It cannot provide legal, medical, financial, or emergency
advice. For those situations, contact an appropriate
qualified professional.
</p>
</div>
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

<div className="rounded-2xl border bg-white p-5 shadow-sm">
<h2 className="font-semibold text-gray-900">
Human checkpoint
</h2>

<p className="mt-2 text-sm text-gray-600">
If your situation requires personalized, professional, or
university-specific guidance, talk to a qualified person.
</p>
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
