"use client";

import { useState } from "react";

export default function CorePage() {
const [input, setInput] = useState("");
const [output, setOutput] = useState<any>(null);

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

stage: text.includes("already applied") || text.includes("applied online")
? "Applied"
: "Not specified",

nextStep:
text.includes("already applied") || text.includes("applied online")
? "Follow up on application"
: "Review application requirements",

priority: text.includes("deadline")
? "High"
: "Medium",
};

setOutput(result);
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
<p><strong>Company:</strong> {output.company}</p>
<p><strong>Role:</strong> {output.role}</p>
<p><strong>Location:</strong> {output.location}</p>
<p><strong>Deadline:</strong> {output.deadline}</p>
<p><strong>Key Skills:</strong> {output.skills}</p>
<p><strong>Suggested Stage:</strong> {output.stage}</p>
<p><strong>Next Step:</strong> {output.nextStep}</p>
<p><strong>Priority:</strong> {output.priority}</p>
</div>

<button className="mt-6 rounded-xl bg-gray-900 px-6 py-3 font-semibold text-white">
Save Output
</button>
</div>
)}
</div>
</main>
);
}
