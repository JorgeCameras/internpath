export default function DashboardPage() {
const records = [
{
company: "Microsoft",
role: "Business Analyst Intern",
status: "Applied",
nextStep: "Follow up",
},
{
company: "Amazon",
role: "Operations Intern",
status: "Interview",
nextStep: "Prepare interview",
},
{
company: "Nike",
role: "Marketing Intern",
status: "Researching",
nextStep: "Review role",
},
{
company: "Spotify",
role: "Strategy Intern",
status: "Saved",
nextStep: "Complete application",
},
];

return (
<main className="min-h-screen bg-gray-50 px-6 py-12">
<div className="mx-auto max-w-6xl">
<p className="text-sm font-semibold text-purple-600">
Internship Dashboard
</p>

<h1 className="mt-2 text-4xl font-bold text-gray-900">
Track your internship progress
</h1>

<p className="mt-4 max-w-2xl text-gray-600">
Review your internship-search activity, application status, and
recommended next actions in one place.
</p>

<div className="mt-8 grid gap-4 md:grid-cols-4">
<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
<p className="text-sm text-gray-500">Total Records</p>
<p className="mt-2 text-3xl font-bold text-gray-900">4</p>
</div>

<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
<p className="text-sm text-gray-500">Applied</p>
<p className="mt-2 text-3xl font-bold text-gray-900">1</p>
</div>

<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
<p className="text-sm text-gray-500">Interviewing</p>
<p className="mt-2 text-3xl font-bold text-gray-900">1</p>
</div>

<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
<p className="text-sm text-gray-500">Needs Action</p>
<p className="mt-2 text-3xl font-bold text-gray-900">3</p>
</div>
</div>

<section className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
<div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
<div>
<p className="text-sm font-semibold text-purple-600">
Application Records
</p>

<h2 className="mt-1 text-2xl font-semibold text-gray-900">
Current internship pipeline
</h2>
</div>

<a
href="/applications"
className="text-sm font-semibold text-purple-600 hover:text-purple-700"
>
View Applications →
</a>
</div>

<div className="mt-6 overflow-x-auto">
<table className="w-full text-left text-sm">
<thead>
<tr className="border-b border-gray-200 text-gray-500">
<th className="pb-3 pr-4 font-medium">Company</th>
<th className="pb-3 pr-4 font-medium">Role</th>
<th className="pb-3 pr-4 font-medium">Status</th>
<th className="pb-3 font-medium">Next Step</th>
</tr>
</thead>

<tbody>
{records.map((record) => (
<tr
key={`${record.company}-${record.role}`}
className="border-b border-gray-100"
>
<td className="py-4 pr-4 font-semibold text-gray-900">
{record.company}
</td>

<td className="py-4 pr-4 text-gray-600">
{record.role}
</td>

<td className="py-4 pr-4">
<span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-700">
{record.status}
</span>
</td>

<td className="py-4 text-gray-600">
{record.nextStep}
</td>
</tr>
))}
</tbody>
</table>
</div>
</section>
</div>
</main>
);
}
