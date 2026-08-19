InternPath

InternPath is a student-focused internship application tracking platform.

Purpose

InternPath helps university students organize internship applications, track their progress, and keep important application information in one place.

Tech Stack

Next.js
React
TypeScript
Tailwind CSS
Supabase
GitHub
Vercel
Claude as coding agent
Current Features

Responsive homepage
Navigation for Home, Applications, Research, Dashboard, Chat, Pricing, and Docs
Public deployment through Vercel
Supabase project configured for future database features
Development Setup

Install dependencies:

npm install

Run the development server:

npm run dev

Then open:

http://localhost:3000

Environment Variables

Create a .env.local file with:

NEXT_PUBLIC_SUPABASE_URL=

NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=

Do not upload .env.local to GitHub.

Deployment

The application is deployed with Vercel and connected to the GitHub repository.

Live Website

https://internpath-two.vercel.app