# Module 5 — Public Chatbot / Guided Assistant

## Problem

Students searching for internships often know that they need to take action but are unsure what their next step should be. Internship searching includes researching companies, organizing applications, preparing documents, following up, and preparing for interviews.

When these tasks happen at the same time, students may become overwhelmed or lose track of what they should prioritize.

InternPath needs a simple guided assistant that can understand the student's current stage and provide a practical recommended next action.

## User

The primary user is a university student searching for internships or early-career opportunities.

The user may be:

- Starting an internship search.
- Researching companies.
- Preparing or submitting applications.
- Managing multiple applications.
- Preparing for an interview.
- Unsure about the next action to take.

## Success Criteria

The feature will be considered successful when:

- A public `/chat` page is available.
- The user can complete three intake questions.
- The assistant provides a recommendation based on the answers.
- A guardrail response handles unsupported requests.
- A human checkpoint tells the user when human support may be more appropriate.
- Interaction or test information can be stored.
- Users can provide thumbs-up or thumbs-down feedback.
- The page works after deployment.
- Three software tests are documented.
- Three external user tests are documented.

## UX Concept

The `/chat` page will use a guided conversation interface.

The page will include:

- InternPath navigation.
- Guided Assistant title and introduction.
- Chat-style messages.
- Three structured questions.
- Selectable answer buttons.
- Personalized recommendation.
- Guardrail response.
- Human-support checkpoint.
- Feedback controls.
- Saved interaction confirmation.

The design will follow the existing InternPath visual style and remain responsive on desktop and mobile.

## Scope Cut

The following features will not be built during Module 5:

- Paid AI APIs.
- Open-ended generative AI conversations.
- Voice interaction.
- Automated job applications.
- Real-time recruiter communication.
- Advanced analytics dashboards.
- Complex authentication changes.

The module will focus on a small, reliable, rule-based guided assistant.

## Product Specification

### Required Features

#### Chat Interface

Create a public `/chat` route with a guided conversation experience.

#### Intake Flow

The assistant will ask exactly three questions:

1. Current internship-search stage.
2. Type of help needed.
3. Level of urgency.

#### Response Logic

The system will generate a recommended next action based on the combination of answers.

#### Guardrail

Unsupported requests will display a safe response explaining the limits of the assistant.

#### Human Checkpoint

The assistant will recommend human support when a situation requires personalized, professional, or university-specific guidance.

#### Storage

Interaction/test summaries and feedback will be stored in Supabase.

#### Feedback

Users can rate the recommendation with thumbs up or thumbs down.

## Acceptance Criteria

The implementation is complete when:

- `/chat` loads publicly.
- All three questions work.
- The user can select answers.
- The recommendation changes based on user input.
- Guardrail behavior can be demonstrated.
- Human checkpoint behavior can be demonstrated.
- Interaction/test data can be stored.
- Feedback can be submitted.
- The app remains stable after refresh.
- The interface is responsive.
- Three software tests pass.
- Three external tests are documented.

## Architecture

### Frontend

Next.js and React will render the `/chat` page, questions, answer buttons, recommendations, guardrails, checkpoints, and feedback controls.

### Logic

TypeScript rule-based logic will evaluate the user's answers and return an appropriate recommendation.

### Backend

Supabase will store interaction summaries and feedback.

### Data Flow

User
→ `/chat`
→ Question 1
→ Question 2
→ Question 3
→ Response Logic
→ Recommendation / Guardrail / Human Checkpoint
→ Feedback
→ Supabase

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Supabase
- GitHub
- Vercel
- Environment Variables

## DevOps Plan

Development will use multiple meaningful commits.

Planned commits:

1. Add Module 5 planning documentation
2. Add chat page scaffold
3. Build guided intake flow
4. Add response logic and guardrails
5. Add Supabase interaction persistence
6. Add feedback rating
7. Document testing and iteration
8. Add Module 5 coding prompt log
9. Add Module 5 human judgment decisions

The project will also be deployed to Vercel multiple times throughout development.

## Software Test Plan

### Test 1 — Intake Flow

Action:
Complete all three questions.

Expected Result:
The assistant displays a recommendation after the third answer.

### Test 2 — Guardrail / Human Checkpoint

Action:
Trigger a flow that requires a guardrail or human checkpoint.

Expected Result:
The correct safety or human-support message appears and the application remains stable.

### Test 3 — Storage and Feedback

Action:
Complete a guided interaction and submit feedback.

Expected Result:
The interaction summary and feedback are saved successfully in Supabase.

## External User Testing Plan

Three external users will test the `/chat` page.

For each tester, document:

- User identifier.
- Task performed.
- What worked.
- What was confusing.
- Feedback provided.
- Change considered or implemented.

## Iteration Requirement

At least one real issue discovered during testing will be corrected.

The process will include:

1. Identify the issue.
2. Document the issue.
3. Fix the issue.
4. Commit the correction.
5. Redeploy the application.
6. Retest the feature.
7. Document the result.

## Coding Agent Prompt

Create Module 5 of the existing InternPath application.

Build a public `/chat` page called “InternPath Guided Assistant”.

Requirements:

1. Use the existing Next.js, React, TypeScript, and Tailwind CSS project.
2. Preserve the existing InternPath navigation and style.
3. Create a guided chat-style interface.
4. Ask exactly three intake questions.
5. Use selectable buttons for answers.
6. Generate a recommended next step from the user's selections.
7. Clearly identify the experience as a guided assistant.
8. Add a guardrail response for unsupported requests.
9. Add a human-support checkpoint.
10. Store interaction/test summaries in Supabase.
11. Add thumbs-up and thumbs-down feedback.
12. Add visible success and validation messages.
13. Keep the interface responsive.
14. Do not add paid APIs.
15. Do not modify unrelated InternPath pages.
16. Keep the implementation small and testable.
17. Ensure `/chat` can be deployed publicly through Vercel.
