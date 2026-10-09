# Saimon Hasan Emon — Next.js Portfolio Design & Implementation Spec

## 1. Goal

Build a recruiter-friendly but distinctive portfolio for **Saimon Hasan Emon** using Next.js, based entirely on the existing portfolio content while restructuring the presentation for a 10–20 second recruiter scan.

Primary design concept:

> **Systems Blueprint** — a portfolio that feels like a polished software-engineering product/interface rather than a generic developer landing page.

The homepage should communicate, in seconds:

1. Who Saimon is.
2. What role he targets.
3. Where he has worked.
4. What technical areas he is strongest in.
5. What he has actually built.
6. Why a recruiter should click the resume, GitHub, or projects.

The existing detailed technical material should remain available, but move into deeper project/system pages instead of competing with the recruiter summary.

---

## 2. Source Content

All portfolio content should originate from the existing portfolio:

- https://saimonemon.vercel.app/

Reference design direction:

- https://www.easintanvir.com/#home

The visual direction may take inspiration from the reference site's clarity, spacing, project presentation, and strong hierarchy, but should **not clone it**.

Generated visual draft:

- `/mnt/data/wide_vertical_screenshot_of_a_dark_modern_develop.png`

---

# 3. Design Concept: Systems Blueprint

The site should have a dark engineering-oriented visual language.

Instead of making every section a collection of generic rounded cards, use different visual structures:

```text
Hero
  ↓
Architecture / blueprint visual
  ↓
Proof strip
  ↓
Featured projects
  ↓
Experience timeline
  ↓
Systems architecture
  ↓
Grouped skills
  ↓
Achievements
  ↓
Education
  ↓
Strong contact CTA
```

The site's visual signature should be an **architecture diagram integrated into the hero and systems section**.

Example:

```text
                    PostgreSQL
                         ↑
                         │
Client → FastAPI → RabbitMQ → Workers
           │                    │
           ↓                    ↓
         Redis                MinIO
```

This immediately communicates backend + distributed systems without requiring a paragraph explaining the same thing.

---

# 4. Recruiter-First Information Hierarchy

The first screen should prioritize:

### Highest priority

- Name
- Role
- Current company
- Previous company
- Primary backend/system stack
- Resume
- GitHub
- LinkedIn

### Second priority

- 40% query-latency reduction
- 125+ DSA problems
- MillionX AI Buildathon result
- Three featured projects

### Third priority

- Detailed architecture
- Full technology list
- Detailed project explanations
- DSA patterns
- Engineering principles
- Personal learning material

The homepage should be a **summary**, while project pages and notes contain the technical depth.

---

# 5. Global Page Structure

```text
NAVBAR

HERO

PROOF STRIP

01 / SELECTED WORK
  - MediSA
  - Distributed Media Processing
  - ZeroDrift

02 / EXPERIENCE
  - Imjol
  - Leotech

03 / HOW I BUILD
  - Systems architecture
  - Engineering principles

SKILLS & TOOLS

04 / RECOGNITION

EDUCATION

CONTACT CTA

FOOTER
```

---

# 6. Navbar

## Content

```text
SE   Saimon Emon

Work   Experience   Systems   Skills   Contact

[ Resume ↓ ]
```

## Rules

- Sticky on desktop.
- Compact height: approximately 64–72px.
- Do not expose every possible page in the main navigation.
- Remove navigation items such as `Story`, `Algorithms`, `Invariants`, and `Behind Terminal` from the primary navbar.
- Keep the Resume action always visible on desktop.
- On mobile, show logo/name + Resume + hamburger/menu.

## Next.js component

```text
components/Navbar.tsx
```

---

# 7. Hero Section

## Layout

Two-column desktop layout.

### Left side

```text
MD. SAIMON HASAN EMON

Software Engineer
Backend & Distributed Systems

I build scalable APIs, data-intensive systems,
distributed workflows and applied AI applications.

Dhaka, Bangladesh
B.Sc. CSE · IUBAT
CGPA 3.84

Python  FastAPI  Laravel  PostgreSQL
Redis  RabbitMQ  Docker

[ Download Resume ] [ GitHub ] [ LinkedIn ]
```

### Right side

Use Saimon's portrait with a subtle engineering blueprint/architecture overlay.

Do not make the portrait dominate the entire first screen.

Overlay a simplified architecture diagram:

```text
                      PostgreSQL
                           ↑
                           │
Client → FastAPI → RabbitMQ → Workers
           │                    │
           ↓                    ↓
         Redis                MinIO
```

## Purpose

The hero should communicate both:

> **Who Saimon is**

and

> **What type of systems engineer he is**

without requiring a recruiter to scroll.

---

# 8. Proof Strip

Place immediately below the hero.

Use four high-value metrics:

```text
02
Professional Roles
Imjol · Leotech

125+
DSA Problems
75 GFG · 50+ LeetCode

40%
Query Latency Reduction
Leotech

TOP 40
MillionX AI Buildathon 2025
```

## Important credibility rule

Do not present benchmark metrics as production metrics unless they are actually production measurements.

For example, ZeroDrift numbers should explicitly say:

> **1,000+ QPS Locust benchmark**

rather than implying 1,000+ QPS was observed in production.

---

# 9. Featured Projects

## Section header

```text
01 / SELECTED WORK

Featured Projects                         View All Projects →
```

Show only three projects on the homepage.

Recommended order:

1. MediSA
2. Distributed Media Processing
3. ZeroDrift

All other projects should be accessible from `/work` or `/projects`.

---

## 9.1 MediSA

### Label

`AI Healthcare · RAG`

### Title

**MediSA**

### Description

AI-powered healthcare assistant using grounded retrieval, symptom extraction, doctor recommendation, and conversational assistance.

### Stack

```text
FastAPI
LangChain
LangGraph
FAISS
Docker
```

### Actions

```text
[ Live Demo ↗ ] [ GitHub ↗ ]
```

### Visual

Use one large, high-quality project screenshot as the card hero image.

### Deeper project page

```text
/projects/medisa
```

Include:

- Problem
- Solution
- Architecture
- RAG pipeline
- Retrieval flow
- Key features
- Tech stack
- Screenshots
- Engineering decisions
- Recognition/results

---

## 9.2 Distributed Media Processing

### Label

`Distributed Systems · Async Processing`

### Title

**Distributed Media Processing**

### Description

Asynchronous media ingestion pipeline separating upload requests from compute-heavy processing.

### Architecture hint

```text
FastAPI → RabbitMQ → Workers
              ↓
            MinIO
              ↓
         PostgreSQL
```

### Stack

```text
FastAPI
RabbitMQ
MinIO
PostgreSQL
Docker
PyTest
```

### Actions

```text
[ Live Demo ↗ ] [ GitHub ↗ ]
```

### Deeper page

```text
/projects/distributed-media
```

Explain:

- Queue-based decoupling
- Worker architecture
- Object storage
- Failure boundaries
- Processing state
- Retry behavior
- Docker topology
- Tests

---

## 9.3 ZeroDrift

### Label

`Fintech · Concurrency · PostgreSQL`

### Title

**ZeroDrift**

### Description

High-concurrency payment and ledger core designed around idempotency, pessimistic locking, deadlock prevention, circuit breaking, and transaction invariants.

### Visual concept

```text
Transfer A → Lock A → Lock B
Transfer B → Lock A → Lock B
```

### Stack

```text
FastAPI
PostgreSQL
Redis
```

Supporting concepts:

```text
SELECT FOR UPDATE
Idempotency
Redis
Circuit Breaker
Locust
```

### Benchmark label

**1,000+ QPS Locust benchmark**

### Deeper page

```text
/projects/zerodrift
```

Explain:

- Transaction boundaries
- Row locking
- Idempotency
- Race conditions
- Deadlock avoidance
- Circuit breaker
- Benchmark methodology

---

# 10. All Projects Page

Route:

```text
/work
```

or:

```text
/projects
```

Use a clean grid with filters.

Suggested filters:

```text
All
AI / ML
Backend
Distributed Systems
Web Apps
Education
Healthcare
```

Projects currently available from the source portfolio include:

- MediSA
- Distributed Media Processing
- ZeroDrift
- UniMind
- Jitsi Cluster / Live Class Platform
- SmartPark
- Library Management System
- Additional projects already listed on the source portfolio

Do not put all projects on the homepage.

---

# 11. Experience

## Section

```text
02 / EXPERIENCE

Work Experience
```

Use a timeline rather than large cards.

---

## 11.1 Imjol

### Role

**Software Engineer**

### Company

**Imjol**

### Date

**Aug 2026 – Present**

### Content

- Working on client web applications using Laravel, PHP, Next.js, React, and Node.js.
- Involved in backend development, API integration, database design, testing, and deployment.
- Working with Linux servers and real client systems.

### Tags

```text
Laravel
PHP
Next.js
React
MySQL
PostgreSQL
Linux
```

---

## 11.2 Leotech

### Role

**Software Developer Intern**

### Date

**Jan 2026 – May 2026**

### Content

- Worked on academic and fee-management modules for a private education ERP system.
- Optimized student billing queries using composite B-Tree indexes and N+1 elimination, reducing query latency by **40%**.
- Implemented transaction-safe operations using pessimistic row locking (`SELECT FOR UPDATE`) to prevent concurrent payment race conditions.

### Tags

```text
PHP
MySQL
Database Optimization
Transaction Management
```

### Visual emphasis

Make **40% latency reduction** the most visually prominent result in this entry.

---

# 12. Systems Section

This should be the portfolio's strongest unique visual feature.

## Header

```text
03 / HOW I BUILD

Build & Operate
Scalable Systems
```

### Supporting copy

> I build systems that remain predictable under failure, concurrency, and asynchronous workloads.

### Architecture diagram

Use a large interactive/static blueprint:

```text
                      Clients
                    Web / Mobile
                          │
                          ↓
                    ┌──────────┐
                    │ FastAPI  │
                    └────┬─────┘
                         │
        ┌────────────────┼────────────────┐
        ↓                ↓                ↓
      Redis          RabbitMQ          PostgreSQL
      Cache             │                 Data
                        ↓
                     Workers
                        │
                        ↓
                      MinIO
                  Object Storage
```

Additional systems represented in the source portfolio can include:

- Jitsi / WebRTC
- AI / RAG
- Payment processing
- Background jobs
- File storage

Do not claim unsupported production scale.

---

# 13. Systems / Engineering Principles

Instead of displaying these as a long essay on the homepage, use a short list:

```text
I care about:

• concurrency
• data integrity
• async processing
• database performance
• failure recovery
• clean service boundaries
```

Detailed engineering principles can live at:

```text
/notes
```

or:

```text
/systems
```

---

# 14. Skills & Tools

Do not use skill percentage bars.

Use four grouped categories.

## Backend

```text
Python
FastAPI
Django
Laravel
PHP
Node.js
```

## Frontend

```text
React
Next.js
JavaScript
HTML
CSS
Bootstrap
```

## Data & Infrastructure

```text
PostgreSQL
MySQL
Redis
RabbitMQ
MinIO
Docker
Linux
Nginx
Git
```

## AI & Others

```text
LangChain
LangGraph
FAISS
RAG
OpenAI
YOLOv8
Celery
```

Only show technologies that are actually supported by the existing portfolio/resume material.

---

# 15. Achievements

## Header

```text
04 / RECOGNITION

Achievements
```

Three compact blocks:

### MillionX AI Buildathon 2025

**Top 40 / National Finalist**

Recognition associated with MediSA.

### IEEE ICADI 2026

**Shortlisted / Participant**

Digital innovation conference participation.

### Problem Solving

**125+ DSA Problems**

75+ GeeksforGeeks + 50+ LeetCode.

Keep descriptions very short.

---

# 16. Education

Use one compact section.

```text
International University of Business Agriculture and Technology (IUBAT)

B.Sc. in Computer Science & Engineering

CGPA: 3.84

2023 – 2027
Dhaka, Bangladesh
```

Education should not consume more visual real estate than experience or projects.

---

# 17. Contact CTA

End the homepage with a strong statement.

Recommended copy:

> # Build something that survives production.

Supporting text:

> Open to full-time software engineering opportunities and interesting technical work.

Actions:

```text
[ Email ] [ LinkedIn ] [ GitHub ] [ Download Resume ]
```

This is stronger than a generic “Let's Connect” section and aligns with the systems-engineering visual identity.

---

# 18. Footer

Minimal:

```text
SAIMON EMON
Software Engineer · Backend & Systems

GitHub · LinkedIn · Email

© 2026 Saimon Hasan Emon
```

---

# 19. Visual Design System

## Background

```css
#070A0F
```

## Primary accent

```css
#3B82F6
```

## Secondary accent

```css
#22C55E
```

## Main text

```css
#F8FAFC
```

## Secondary text

```css
#94A3B8
```

## Border

```css
rgba(255,255,255,.08)
```

## Typography

Recommended:

- **Inter** for body copy
- **Space Grotesk** for section titles / major headings

Use large typography for section titles, but avoid excessive text density.

---

# 20. Visual Rules

## Do

- Use generous spacing.
- Use strong typography hierarchy.
- Use project screenshots prominently.
- Use diagrams to communicate systems concepts visually.
- Use subtle grid/background texture.
- Use restrained blue/green accents.
- Use motion only to reinforce hierarchy.
- Keep primary CTAs obvious.

## Do not

- Put every project on the homepage.
- Use skill percentage bars.
- Turn every section into a card.
- Use fake production-looking metrics.
- Use excessively large walls of text.
- Use a giant technology cloud.
- Make the hero portrait larger than the identity/content.
- Animate everything.

---

# 21. Motion Design

Use Framer Motion selectively.

Recommended animations:

### Hero

- Fade/slide in content on initial render.
- Subtle architecture line animation.

### Project cards

- Slight image scale on hover.
- Border/accent transition.

### Experience timeline

- Timeline node reveal on scroll.

### Systems architecture

- Subtle flow-line animation.

Avoid:

- spinning 3D objects
- aggressive parallax
- excessive text movement
- scroll-jacking

The site should feel engineered, not like a motion-design experiment.

---

# 22. Responsive Design

## Desktop

Target:

```text
1280px+
```

Hero:

```text
50 / 50 or 55 / 45 split
```

Projects:

```text
3-column grid
```

Skills:

```text
4-column grid
```

---

## Tablet

```text
768px – 1279px
```

Hero:

```text
2-column or compressed 1-column
```

Projects:

```text
2 columns
```

Skills:

```text
2 columns
```

---

## Mobile

Under 768px:

```text
single column
```

Hero order:

```text
Name
Role
Summary
Location / Education
Stack
Buttons
Portrait / architecture
```

Projects:

```text
1 column
```

Do not shrink the desktop UI until it fits. Reflow it intentionally.

---

# 23. Next.js Project Architecture

Recommended stack:

```text
Next.js
TypeScript
Tailwind CSS
Framer Motion
Lucide React
next/image
```

Directory structure:

```text
src/
├── app/
│   ├── page.tsx
│   ├── work/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── experience/
│   │   └── page.tsx
│   ├── systems/
│   │   └── page.tsx
│   └── notes/
│       └── page.tsx
│
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── ArchitectureVisual.tsx
│   ├── ProofStrip.tsx
│   ├── FeaturedProjects.tsx
│   ├── ProjectCard.tsx
│   ├── ExperienceTimeline.tsx
│   ├── SystemsBlueprint.tsx
│   ├── SkillsGrid.tsx
│   ├── Achievements.tsx
│   ├── Education.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
│
├── data/
│   ├── projects.ts
│   ├── experience.ts
│   ├── skills.ts
│   ├── achievements.ts
│   └── education.ts
│
└── lib/
    └── utils.ts

public/
├── projects/
│   ├── medisa/
│   ├── distributed-media/
│   └── zerodrift/
├── images/
└── icons/
```

---

# 24. Content/Data Separation

Do not hardcode project details inside JSX.

Example:

```ts
export const projects = [
  {
    slug: "medisa",
    title: "MediSA",
    category: "AI Healthcare",
    description:
      "AI-powered healthcare assistant using grounded retrieval and conversational assistance.",
    stack: [
      "FastAPI",
      "LangChain",
      "LangGraph",
      "FAISS"
    ],
    image: "/projects/medisa/hero.png",
    github: "...",
    demo: "..."
  }
];
```

Then render reusable cards:

```tsx
<ProjectCard project={project} />
```

This makes the portfolio easier to maintain when new projects are added.

---

# 25. Recommended Routes

```text
/
```

Recruiter-focused homepage.

```text
/work
```

All projects.

```text
/work/medisa
```

MediSA deep dive.

```text
/work/distributed-media
```

Distributed Media deep dive.

```text
/work/zerodrift
```

ZeroDrift deep dive.

```text
/experience
```

Expanded professional history.

```text
/systems
```

Architecture and engineering principles.

```text
/notes
```

DSA / engineering notes / technical writing.

---

# 26. What Moves Off the Homepage

Move these to deeper pages or notes:

- Long engineering story
- 9 PM–12 AM routine
- Individual explanations of all DSA patterns
- Engineering invariants essay
- Full technical architecture explanations
- Every screenshot for every project
- Every project currently listed
- Long personal narrative

The content is not bad. The placement is the problem.

Homepage = evidence.

Deep pages = explanation.

---

# 27. Recruiter 20-Second Test

A recruiter should be able to scan the following without scrolling too far:

```text
Saimon Hasan Emon
Software Engineer | Backend & Distributed Systems

Imjol · Ex-Leotech

Python · FastAPI · Laravel · PostgreSQL · Redis · RabbitMQ · Docker

2 roles
125+ DSA
40% query latency reduction
Top 40 AI Buildathon

MediSA
Distributed Media Processing
ZeroDrift
```

If these facts cannot be understood in approximately 15–20 seconds, reduce the visual density again.

---

# 28. Content Strategy

The portfolio should operate on two levels.

## Level 1 — Recruiter

Fast:

```text
Identity
Experience
Proof
Projects
Stack
Resume
Contact
```

## Level 2 — Engineer / Hiring Manager

Deep:

```text
Architecture
Concurrency
Database decisions
Async systems
Failure handling
Benchmark methodology
AI pipelines
Technical notes
```

This is the core strategy behind the redesign.

---

# 29. Final Design Direction

The portfolio should feel like:

> **A software engineer's control room / systems blueprint, presented with the simplicity of a premium product site.**

It should NOT feel like:

> A generic template full of gradients, floating icons, skill bars, and endless rounded cards.

The final experience should communicate:

```text
I am a software engineer.

I have real professional experience.

I optimize real systems.

I understand backend architecture.

I build distributed and AI-powered systems.

Here is the evidence.
```

That is the story the recruiter should understand before they ever reach the detailed technical material.
