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

## Module 1 – Generative Core Agent

### Purpose
InternPath Core Agent converts unstructured internship information into a structured application summary that helps students track and manage internship opportunities.

### Inputs
The user can paste:
- Internship descriptions
- Application notes
- Email information
- Job opportunity details

### Outputs
The Core Agent extracts and organizes:
- Company
- Role
- Location
- Deadline
- Key Skills
- Suggested Stage
- Next Step
- Priority

### Product Specification
The goal of this module is to transform unstructured internship information into a clear and actionable summary. The output should help students quickly understand the most important application details and decide what to do next.

If information is missing, the system displays "Not specified" instead of inventing information.

### Architecture and Stack
- Next.js
- React
- TypeScript
- Tailwind CSS
- Supabase
- Vercel

### Human Judgment
I selected the fields based on what is most useful when managing internship applications. Deadline, application stage, next step, and priority were included because they directly support follow-up and decision-making.

I also decided that missing information should be shown as "Not specified" instead of being generated or assumed.

### Data Flow
Internship information → Generate Core → Structured Output → Save Output → Supabase → Dashboard Preview

### Testing
Testing and iteration evidence is documented in:
`docs/test-log.md`

Planning and prompt decisions are documented in:
`docs/prompt-log.md`

### Live Page
`/core`