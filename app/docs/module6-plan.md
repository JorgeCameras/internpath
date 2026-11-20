# Module 6 — Integrated Agentic Venture + Impact & Viability

## Goal

Integrate the existing InternPath modules into one final venture experience and create a public `/demo` page that demonstrates how the product works, creates practical value, and manages obvious risks.

## Required Live Page

`/demo`

## Required Features

- Full navigation
- Dashboard displaying records
- Docs page with prompt library and build logs
- Guided `/demo` walkthrough
- Agent Map
- Five total external users
- Practical Impact section
- Risk and Guardrails section
- Testing Summary
- Version 2 Roadmap
- Final call to action

## Architecture

User → InternPath Frontend → Integrated Pages / Modules → Supabase → Records / Outputs

Development flow:

GitHub → Vercel → Public Deployment

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Supabase
- GitHub
- Vercel

## Testing Plan

- Five external users total
- Full-site regression test
- Document one real issue
- Correct the issue
- Commit the improvement
- Redeploy
- Retest and mark PASS

## Scope Cuts

- No paid AI APIs
- No live job scraping
- No automated email system
- No authentication redesign
- No complex analytics platform
- No unnecessary dependencies
- No major redesign of unrelated pages

## Acceptance Criteria

- `/demo` loads successfully
- Navigation works
- `/dashboard` displays records
- `/docs` contains prompt and build information
- `/demo` contains all required Week 6 sections
- `/chat` remains functional
- Supabase-backed features remain functional
- Final implementation follows the approved mockup
- Application is ready for Vercel deployment
