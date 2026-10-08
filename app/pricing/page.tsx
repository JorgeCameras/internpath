"use client";

import { useEffect, useMemo, useState } from "react";
import { supabase } from "../core/lib/supabase";

type Scenario = "Conservative" | "Base" | "Aggressive";
type Segment = "Casual Applicants" | "Active Applicants";

type SavedScenario = {
id: number;
name: string;
segment: string;
scenario: string;
potential_customers: number;
conversion_rate: number;
monthly_price: number;
monthly_revenue: number;
annual_revenue: number;
created_at: string;
};

const scenarioDefaults = {
Conservative: {
customers: 5000,
conversion: 5,
price: 99,
},
Base: {
customers: 10000,
conversion: 10,
price: 99,
},
Aggressive: {
customers: 20000,
conversion: 15,
price: 199,
},
};

export default function PricingPage() {
const [segment, setSegment] =
useState<Segment>("Active Applicants");

const [scenario, setScenario] =
useState<Scenario>("Base");

const [customers, setCustomers] = useState(10000);
const [conversion, setConversion] = useState(10);
const [price, setPrice] = useState(99);

const [message, setMessage] = useState("");
const [savedScenarios, setSavedScenarios] =
useState<SavedScenario[]>([]);

const paidCustomers = useMemo(() => {
return Math.round(customers * (conversion / 100));
}, [customers, conversion]);

const monthlyRevenue = useMemo(() => {
return paidCustomers * price;
}, [paidCustomers, price]);

const annualRevenue = monthlyRevenue * 12;

const loadSavedScenarios = async () => {
const { data, error } = await supabase
.from("pricing_scenarios")
.select("*")
.order("created_at", { ascending: false });

if (error) {
console.error(error);
return;
}

setSavedScenarios(data || []);
};

useEffect(() => {
loadSavedScenarios();
}, []);

const saveScenario = async () => {
if (customers <= 0 || conversion <= 0 || price < 0) {
setMessage("Please enter valid positive values before saving.");
return;
}

const { error } = await supabase
.from("pricing_scenarios")
.insert({
id: Date.now(),
name: `${scenario} Scenario`,
segment,
scenario,
potential_customers: customers,
conversion_rate: conversion,
monthly_price: price,
monthly_revenue: monthlyRevenue,
annual_revenue: annualRevenue,
});

if (error) {
console.error(error);
setMessage("Save failed. Please try again.");
return;
}

setMessage("Pricing scenario saved successfully.");
await loadSavedScenarios();
};

const changeScenario = (newScenario: Scenario) => {
setScenario(newScenario);

const defaults = scenarioDefaults[newScenario];

setCustomers(defaults.customers);
setConversion(defaults.conversion);
setPrice(defaults.price);

setMessage(`${newScenario} scenario loaded.`);
};

const validateInputs = () => {
if (customers <= 0 || conversion <= 0 || price < 0) {
setMessage(
"Please enter valid positive values before calculating revenue."
);
return false;
}

setMessage("Revenue calculated successfully.");
return true;
};

const tiers = [
{
name: "Free",
price: "$0",
description: "Get started with the essentials.",
features: [
"Application tracking",
"Basic status management",
"Research dashboard",
"Limited saved research",
"Basic organization tools",
],
},
{
name: "Plus",
price: "$99 MXN",
description: "For active applicants who want more tools.",
features: [
"Everything in Free",
"Unlimited saved research",
"Advanced application tracking",
"Competitor and market research tools",
"Deadline reminders",
"Enhanced dashboard insights",
],
},
{
name: "Pro",
price: "$199 MXN",
description: "For students who want the full experience.",
features: [
"Everything in Plus",
"Advanced analytics",
"Priority recommendations",
"AI-assisted opportunity organization",
"Premium internship insights",
"Advanced planning tools",
],
},
];

const isError =
message.startsWith("Please") ||
message.startsWith("Save failed");

return (
<main className="min-h-screen bg-white px-6 py-12 text-slate-900">
<div className="mx-auto max-w-6xl">
<section className="mb-10">
<p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
Pricing
</p>

<h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
Pricing & Revenue Simulator
</h1>

<p className="mt-4 max-w-3xl text-lg text-slate-600">
Explore how different pricing, customer segments, and assumptions
could impact InternPath&apos;s growth.
</p>
</section>

<section className="mb-12 grid gap-6 md:grid-cols-3">
{tiers.map((tier) => (
<div
key={tier.name}
className={`rounded-2xl border p-6 ${
tier.name === "Plus"
? "border-blue-300 bg-blue-50"
: "border-slate-200"
}`}
>
<h2 className="text-2xl font-bold">{tier.name}</h2>

<p className="mt-2 text-3xl font-bold">{tier.price}</p>

<p className="mt-2 text-sm text-slate-600">
{tier.description}
</p>

<ul className="mt-5 space-y-2">
{tier.features.map((feature) => (
<li
key={feature}
className="flex gap-2 text-sm text-slate-700"
>
<span className="font-bold text-blue-600">✓</span>
{feature}
</li>
))}
</ul>
</div>
))}
</section>

<section className="grid gap-6 lg:grid-cols-2">
<div className="rounded-2xl border border-slate-200 p-6">
<h2 className="text-2xl font-bold">
Revenue Simulator
</h2>

<p className="mt-2 text-sm text-slate-600">
Adjust the inputs below to estimate monthly and annual revenue.
</p>

<div className="mt-6">
<label className="text-sm font-medium">
Customer Segment
</label>

<select
value={segment}
onChange={(e) =>
setSegment(e.target.value as Segment)
}
className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3"
>
<option>Casual Applicants</option>
<option>Active Applicants</option>
</select>
</div>

<div className="mt-6">
<p className="text-sm font-medium">
Scenario
</p>

<div className="mt-2 grid grid-cols-3 gap-2">
{(
[
"Conservative",
"Base",
"Aggressive",
] as Scenario[]
).map((item) => (
<button
key={item}
onClick={() => changeScenario(item)}
className={`rounded-lg px-3 py-3 text-sm font-medium ${
scenario === item
? "bg-blue-600 text-white"
: "border border-slate-300 bg-white"
}`}
>
{item}
</button>
))}
</div>
</div>

<div className="mt-6 grid gap-4 md:grid-cols-3">
<div>
<label className="text-sm font-medium">
Potential Customers
</label>

<input
type="number"
value={customers}
onChange={(e) =>
setCustomers(Number(e.target.value))
}
className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3"
/>
</div>

<div>
<label className="text-sm font-medium">
Conversion Rate (%)
</label>

<input
type="number"
value={conversion}
onChange={(e) =>
setConversion(Number(e.target.value))
}
className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3"
/>
</div>

<div>
<label className="text-sm font-medium">
Monthly Price
</label>

<input
type="number"
value={price}
onChange={(e) =>
setPrice(Number(e.target.value))
}
className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3"
/>
</div>
</div>

<button
onClick={validateInputs}
className="mt-6 w-full rounded-lg bg-blue-600 px-5 py-3 font-medium text-white"
>
Calculate Revenue
</button>

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
</div>

<div>
<div className="grid gap-4 md:grid-cols-3">
<div className="rounded-2xl border border-slate-200 p-5">
<p className="text-sm text-slate-500">
Paid Customers
</p>

<p className="mt-2 text-2xl font-bold">
{paidCustomers.toLocaleString("en-US")}
</p>
</div>

<div className="rounded-2xl border border-slate-200 p-5">
<p className="text-sm text-slate-500">
Monthly Revenue
</p>

<p className="mt-2 text-2xl font-bold">
$
{monthlyRevenue.toLocaleString("en-US")} MXN
</p>
</div>

<div className="rounded-2xl border border-slate-200 p-5">
<p className="text-sm text-slate-500">
Annual Revenue
</p>

<p className="mt-2 text-2xl font-bold">
$
{annualRevenue.toLocaleString("en-US")} MXN
</p>
</div>
</div>

<div className="mt-6 rounded-2xl border border-slate-200 p-6">
<h2 className="text-2xl font-bold">
Assumptions Table
</h2>

<div className="mt-5 overflow-hidden rounded-lg border border-slate-200">
<table className="w-full text-sm">
<tbody>
<tr className="border-b">
<td className="p-3 font-medium">
Customer Segment
</td>
<td className="p-3">
{segment}
</td>
</tr>

<tr className="border-b">
<td className="p-3 font-medium">
Scenario
</td>
<td className="p-3">
{scenario}
</td>
</tr>

<tr className="border-b">
<td className="p-3 font-medium">
Potential Customers
</td>
<td className="p-3">
{customers.toLocaleString("en-US")}
</td>
</tr>

<tr className="border-b">
<td className="p-3 font-medium">
Conversion Rate
</td>
<td className="p-3">
{conversion}%
</td>
</tr>

<tr className="border-b">
<td className="p-3 font-medium">
Monthly Price
</td>
<td className="p-3">
${price} MXN
</td>
</tr>

<tr className="border-b">
<td className="p-3 font-medium">
Paid Customers
</td>
<td className="p-3">
{paidCustomers.toLocaleString("en-US")}
</td>
</tr>

<tr className="border-b">
<td className="p-3 font-medium">
Monthly Revenue
</td>
<td className="p-3">
$
{monthlyRevenue.toLocaleString("en-US")} MXN
</td>
</tr>

<tr>
<td className="p-3 font-medium">
Annual Revenue
</td>
<td className="p-3">
$
{annualRevenue.toLocaleString("en-US")} MXN
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</section>

<section className="mt-8 rounded-2xl border border-slate-200 p-6">
<div className="flex flex-wrap items-center justify-between gap-4">
<div>
<h2 className="text-2xl font-bold">
Saved Pricing Scenarios
</h2>

<p className="mt-1 text-sm text-slate-600">
Save and compare different pricing projections.
</p>
</div>

<button
onClick={saveScenario}
className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white"
>
Save Current Scenario
</button>
</div>

{savedScenarios.length === 0 ? (
<div className="mt-6 rounded-lg bg-slate-50 p-6 text-sm text-slate-500">
No saved pricing scenarios yet.
</div>
) : (
<div className="mt-6 overflow-x-auto">
<table className="w-full min-w-[900px] text-left text-sm">
<thead>
<tr className="border-b bg-slate-50">
<th className="p-3">
Name
</th>
<th className="p-3">
Segment
</th>
<th className="p-3">
Scenario
</th>
<th className="p-3">
Customers
</th>
<th className="p-3">
Conversion
</th>
<th className="p-3">
Price
</th>
<th className="p-3">
Monthly Revenue
</th>
<th className="p-3">
Annual Revenue
</th>
</tr>
</thead>

<tbody>
{savedScenarios.map((saved) => (
<tr
key={saved.id}
className="border-b"
>
<td className="p-3">
{saved.name}
</td>

<td className="p-3">
{saved.segment}
</td>

<td className="p-3">
{saved.scenario}
</td>

<td className="p-3">
{Number(
saved.potential_customers
).toLocaleString("en-US")}
</td>

<td className="p-3">
{saved.conversion_rate}%
</td>

<td className="p-3">
${saved.monthly_price} MXN
</td>

<td className="p-3">
$
{Number(
saved.monthly_revenue
).toLocaleString("en-US")}{" "}
MXN
</td>

<td className="p-3">
$
{Number(
saved.annual_revenue
).toLocaleString("en-US")}{" "}
MXN
</td>
</tr>
))}
</tbody>
</table>
</div>
)}
</section>
</div>
</main>
);
}