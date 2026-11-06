import Navbar from "@/components/Navbar";

export default function ChatPage() {
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
<section className="rounded-2xl border bg-white p-6 shadow-sm lg:col-span-2">
<div className="rounded-xl bg-gray-50 p-4">
<p className="font-semibold text-gray-900">InternPath</p>

<p className="mt-2 text-gray-700">
Hi! I am the InternPath Guided Assistant. I will ask you three
questions and help you identify your next step.
</p>
</div>

<div className="mt-6 rounded-xl border border-dashed p-8 text-center">
<p className="font-medium text-gray-900">
Guided intake flow coming next
</p>

<p className="mt-2 text-sm text-gray-500">
The next development step will add the three intake questions.
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
0 of 3 questions completed
</p>
</div>
</aside>
</div>
</div>
</main>
</>
);
}
