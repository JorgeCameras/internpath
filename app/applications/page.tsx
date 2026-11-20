export default function ApplicationsPage() {
const applications = [
{
company: "Microsoft",
role: "Business Analyst Intern",
status: "Applied",
nextAction: "Follow up",
},
{
company: "Amazon",
role: "Operations Intern",
status: "Interview",
nextAction: "Prepare interview",
},
{
company: "Nike",
role: "Marketing Intern",
status: "Researching",
nextAction: "Review requirements",
},
{
company: "Spotify",
role: "Strategy Intern",
status: "Saved",
nextAction: "Complete application",
},
];

return (
<main className="min-h-screen bg-gray-50 px-6 py-12">
<div className="mx-auto max-w-6xl">
<p className="text-sm font-semibold text-purple-600">
Applications
</p>

<h1 className="mt-2 text-4xl font-bold text-gray-900">
Manage your internship applications
</h1>

<p className="mt-4 max-w-2xl text-gray-600">
Keep your opportunities, application status, and next actions
organized in one place.
</p>

<section className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
<div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
<div>
<p className="text-sm font-semibold text-purple-600">
Application Tracker
</p>

<h2 className="mt-1 text-2xl font-semibold text-gray-900">
Current opportunities
</h2>
</div>

<a
href="/dashboard"
className="text-sm font-semibold text-purple-600"
>
View Dashboard →
</a>
</div>

<div className="mt-6 grid gap-4">
{applications.map((application) => (
<div
key={`${application.company}-${application.role}`}
className="rounded-xl border border-gray-200 bg-gray-50 p-5"
>
<div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
<div>
<p className="font-semibold text-gray-900">
{application.company}
</p>

<p className="mt-1 text-sm text-gray-600">
{application.role}
</p>
</div>

<div className="flex flex-wrap items-center gap-3">
<span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
{application.status}
</span>

<span className="text-sm text-gray-600">
Next: {application.nextAction}
</span>
</div>
</div>
</div>
))}
</div>
</section>
</div>
</main>
);
}
