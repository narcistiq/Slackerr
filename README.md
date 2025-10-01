# Slackerr
Job hunting is rough. Tracking it doesn’t have to be. Slackerr keeps your applications in one place so you can stay on top of the grind (or at least make it look like you are).

#Target User
Slackerr is a job application tracking app built for job seekers of all kinds, from students applying to internships to recent graduates. The app is especially helpful for people who are constantly applying to dozens (if not hundreds) of applications!

Applying for jobs is a repetitive, stressful, not to mention tedious task. It's easy for applicants to lose track of where they've applied, the status of their application, deadlines, as well as potential follow-ups. Slackerr helps make the process less painful by providing a centralized tracker for applications, interviews, and outcomes.

# Purpose & Problem Statement
Job hunting is a messy process. Applicants can apply to hundreds of openings and struggle to remember where they applied, miss deadlines, or lose track of follow-ups. Using spreadsheets or notes apps can be practical, but are typically not tailored to the process, unattractive, and can be hard to look at sometimes.

Slacker matters because it brings clarity and motivation to a process that usually feels overwhelming and discouraging, tracking data in one place and providing users with the necessary tools to keep clear view of their progress. Slackerr helps people stay organized without adding extra stress.

# Core Features
- Application Tracking: Add jobs manually or import them, then track status
- Application Filtering: Filter applications based on status, date, or alphabet
- Progress Dashboard: Visual summary of where you are in the process (e.g. charts for total applications, interview rates, etc.)
- Reminders & Deadlines: Notifications for follow-ups, upcoming interviews, or application deadlines

# Technical Overview
**Front end: React** 
- User interacts with the app through forms, buttons, and dashboards.
- Requests are sent to the backend using GraphQL.
- Displays updates based on respnses from the backend.

**Backend: Express.js + GraphQL**
- Receives GraphQL queries from the frontend to fetch data.
- Receives GraphQL mutations to update data.
- Handles data validation, business logic and queries.

# Database
**MongoDB:** Stores all user data, receives queries and mutations from the backend (GraphQL). NoSQL (non relational) data storage.