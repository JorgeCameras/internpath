export default function ResearchPage() {
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
placeholder="Example: Product Manager internships in Mexico"
className="w-full rounded-lg border px-4 py-3"
/>

<button className="mt-4 rounded-lg bg-blue-600 px-5 py-3 font-medium text-white">
Generate Research
</button>
</div>

<section className="mt-10">
<div>
<p className="text-sm font-medium text-blue-600">
Global Examples
</p>
<h2 className="mt-1 text-2xl font-bold">
Benchmark Companies
</h2>
</div>

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
</div>
</main>
);
}