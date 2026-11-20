"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
{ label: "Home", href: "/" },
{ label: "Applications", href: "/applications" },
{ label: "Research", href: "/research" },
{ label: "Dashboard", href: "/dashboard" },
{ label: "Chat", href: "/chat" },
{ label: "Pricing", href: "/pricing" },
{ label: "Docs", href: "/docs" },
{ label: "Demo", href: "/demo" },
];

export default function Navbar() {
const [open, setOpen] = useState(false);

return (
<header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
<nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
<Link href="/" className="flex items-center gap-2">
<span className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-sm font-bold text-white">
IP
</span>

<span className="text-lg font-bold text-gray-900">
InternPath
</span>
</Link>

<div className="hidden items-center gap-6 md:flex">
{NAV_LINKS.map((link) => (
<Link
key={link.href}
href={link.href}
className="text-sm font-medium text-gray-600 transition hover:text-purple-600"
>
{link.label}
</Link>
))}
</div>

<div className="hidden md:block">
<Link
href="/applications"
className="rounded-xl bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-800"
>
Get started
</Link>
</div>

<button
type="button"
onClick={() => setOpen(!open)}
className="rounded-lg border border-gray-200 px-3 py-2 text-sm font-semibold text-gray-700 md:hidden"
>
Menu
</button>
</nav>

{open && (
<div className="border-t border-gray-200 bg-white px-6 py-4 md:hidden">
<div className="flex flex-col gap-3">
{NAV_LINKS.map((link) => (
<Link
key={link.href}
href={link.href}
onClick={() => setOpen(false)}
className="text-sm font-medium text-gray-700"
>
{link.label}
</Link>
))}

<Link
href="/applications"
onClick={() => setOpen(false)}
className="mt-2 rounded-xl bg-gray-900 px-4 py-2 text-center text-sm font-semibold text-white"
>
Get started
</Link>
</div>
</div>
)}
</header>
);
}
