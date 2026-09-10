"use client";

import { useEffect, useState } from "react";
import { supabase } from "./lib/supabase";

export default function CorePage() {
const [input, setInput] = useState("");
const [output, setOutput] = useState<any>(null);
const [savedOutputs, setSavedOutputs] = useState<any[]>([]);

const loadSavedOutputs = async () => {
const { data, error } = await supabase
.from("core_outputs")
.select("*")
.order("id", { ascending: false });

if (error) {
console.error(error);
return;
}

setSavedOutputs(data || []);
};

useEffect(() => {
loadSavedOutputs();
}, []);

const generateCore = () => {
const text = input.toLowerCase();

const result = {
company: text.includes("amazon")
? "Amazon"
: text.includes("google")
? "Google"
: text.includes("microsoft")
? "Microsoft"
: text.includes("nike")
? "Nike"
: text.includes("adidas")
? "Adidas"
: "Not specified",

role: text.includes("retail intern")
? "Retail Intern"
: text.includes("marketing intern")
? "Marketing Intern"
: text.includes("software engineering intern")
? "Software Engineering Intern"
: text.includes("product management intern")
? "Product Management Intern"
: "Not specified",

location: text.includes("mexico city")
? "Mexico City"
: text.includes("remote")
? "Remote"
: text.includes("hybrid")
? "Hybrid"
: "Not specified",

deadline: text.includes("october 20")
? "October 20"
: text.includes("october 15")
? "October 15"
: "Not specified",

skills:
text.includes("english") || text.includes("excel")
? ["English", "Excel", "Communication", "Analytical Thinking"]
.filter((skill) => text.includes(skill.toLowerCase()))
.join(", ") || "Not specified"
: "Not specified",

stage:
text.includes("already applied") || text.includes("applied online")
? "Applied"
: "Not specified",

nextStep:
text.includes("already applied") || text.includes("applied online")
? "Follow up on application"
: "Review application requirements",

priority: text.includes("deadline") ? "High" : "Medium",
};

setOutput(result);
};

const saveOutput = async () => {
if (!output) return;

const { error } = await supabase.from("core_outputs").insert([
{
input_text: input,
company: output.company,
role: output.role,
location: output.location,
deadline: output.deadline,
skills: output.skills,
stage: output.stage,
next_step: output.nextStep,
priority: output.priority,
},
]);

if (error) {
alert(error.message);
console.error(error);
return;
}

alert("Output saved successfully");
loadSavedOutputs();
};

return (
<main className="min-h-screen bg-white px-6 py-10">
<div className="mx-auto max-w-4xl">
<h1 className="text-4xl font-bold text-gray-900">
InternPath Core Agent
</h1>

<p className="mt-3 text-gray-600">
Turn internship information into a structured application summary.
</p>

<div className="mt-10">
<label className="mb-2 block font-semibold text-gray-900">
Internship Information
</label>

<textarea
value={input}
onChange={(e) => setInput(e.target.value)}
placeholder="Paste an internship description, email, or application notes here..."
className="min-h-40 w-full rounded-xl border border-gray-300 p-4"
/>

<button
onClick={generateCore}
className="mt-4 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white"
>
Generate Core
</button>
</div>

{output && (
<div className="mt-10 rounded-2xl border border-gray-200 p-6">
<p className="text-sm font-semibold text-blue-600">
Simulated AI Output
</p>

<h2 className="mt-2 text-2xl font-bold text-gray-900">
Core Extraction
</h2>

<div className="mt-6 grid gap-4 md:grid-cols-2">
<p>
<strong>Company:</strong> {output.company}
</p>
<p>
<strong>Role:</strong> {output.role}
</p>
<p>
<strong>Location:</strong> {output.location}
</p>
<p>
<strong>Deadline:</strong> {output.deadline}
</p>
<p>
<strong>Key Skills:</strong> {output.skills}
</p>
<p>
<strong>Suggested Stage:</strong> {output.stage}
</p>
<p>
<strong>Next Step:</strong> {output.nextStep}
</p>
<p>
<strong>Priority:</strong> {output.priority}
</p>
</div>

<button
onClick={saveOutput}
className="mt-6 rounded-xl bg-gray-900 px-6 py-3 font-semibold text-white"
>
Save Output
</button>
</div>
)}

<div className="mt-12">
<h2 className="text-2xl font-bold text-gray-900">
Dashboard Preview
</h2>

<p className="mt-2 text-gray-600">
Recently saved internship outputs.
</p>

<div className="mt-6 space-y-4">
{savedOutputs.length === 0 ? (
<p className="text-gray-500">No saved outputs yet.</p>
) : (
savedOutputs.map((item) => (
<div
key={item.id}
className="rounded-2xl border border-gray-200 p-5"
>
<div className="grid gap-3 md:grid-cols-2">
<p>
<strong>Company:</strong> {item.company}
</p>
<p>
<strong>Role:</strong> {item.role}
</p>
<p>
<strong>Location:</strong> {item.location}
</p>
<p>
<strong>Deadline:</strong> {item.deadline}
</p>
<p>
<strong>Stage:</strong> {item.stage}
</p>
<p>
<strong>Priority:</strong> {item.priority}
</p>
</div>
</div>
))
)}
</div>
</div>
</div>
</main>
);
}