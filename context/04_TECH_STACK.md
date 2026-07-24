# Context Metadata

Document: Technology Stack
Version: 1.0
Status: Active
Applies To: Entire Project
Last Updated: YYYY-MM-DD

---

# PROXI — Technology Stack

## Purpose

This document defines the official technologies approved for Proxi.

The stack has been selected to prioritize:

- Scalability
- Performance
- Maintainability
- Developer Experience
- Type Safety
- Security

No technology should be introduced without approval.

---

# Technology Principles

Every technology should satisfy at least one of the following:

- Improve maintainability
- Improve scalability
- Improve performance
- Improve security
- Improve developer productivity

Avoid adding dependencies that duplicate existing functionality.

Keep the technology stack as small as practical.

---

# Frontend

Framework

Next.js (App Router)

Language

TypeScript

Reasons

- Production ready
- Excellent routing
- Server Components
- Strong ecosystem
- Excellent performance
- SEO support
- Large community

Requirements

- Use the App Router only.
- Prefer Server Components.
- Use Client Components only when interactivity requires them.
- Avoid unnecessary client-side rendering.

---

# Styling

Tailwind CSS

Purpose

- Utility-first styling
- Consistent spacing
- Fast development
- Responsive design

Requirements

- Avoid inline styles.
- Use Tailwind utilities.
- Create reusable utility patterns where appropriate.

---

# UI Components

shadcn/ui

Purpose

Reusable accessible components.

Requirements

- Customize to match the Proxi Design System.
- Do not use default styling unchanged.
- Extend components instead of rewriting them.

---

# Icons

Lucide React

Requirements

Use one icon library across the application.

Do not mix icon libraries.

---

# Animations

Framer Motion

Use only for:

- Page transitions
- Modals
- Dropdowns
- Hero animations
- Micro-interactions

Avoid unnecessary animations.

---

# Forms

React Hook Form

Validation

Zod

Requirements

- All forms must use schema validation.
- Validate on both client and server.
- Keep validation logic centralized.

---

# Backend

Next.js Route Handlers

Requirements

- REST APIs unless otherwise specified.
- Keep routes modular.
- Separate business logic from route handlers.

---

# Database

PostgreSQL

ORM

Prisma

Requirements

- Prisma is the single source of truth for database access.
- Avoid raw SQL unless necessary for performance.
- All schema changes must go through Prisma migrations.

---

# Authentication

Clerk

Purpose

User authentication and identity management.

Requirements

- Use Clerk for authentication only.
- Keep user profile data in PostgreSQL.
- Never duplicate authentication logic.

---

# File Storage

Cloudinary

Purpose

Profile photos

Portfolio images

Verification documents

Requirements

Optimize uploads.

Compress images.

Store URLs, not files, in the database.

---

# Maps & Location

Google Maps Platform

Future Features

- Geocoding
- Service area selection
- Location search

---

# Notifications

Resend

Purpose

Transactional emails

Examples

- Waitlist confirmation
- Booking confirmation
- Password reset

---

# State Management

React Context

Use for:

- Authentication state
- Theme
- User preferences

Use TanStack Query for:

- Server state
- API caching
- Background refetching

Avoid unnecessary global state.

---

# Data Fetching

TanStack Query

Requirements

- Cache server data.
- Handle retries appropriately.
- Keep fetching logic reusable.

---

# Deployment

Frontend

Vercel

Database

Neon PostgreSQL

Image CDN

Cloudinary

Requirements

Every deployment must pass:

- Type checking
- Linting
- Build verification

---

# Version Control

Git

Repository

GitHub

Requirements

- Feature branches.
- Meaningful commit messages.
- Pull requests for major features.
- Never commit secrets.

---

# Environment Variables

Store all secrets in environment variables.

Never hardcode:

- API keys
- Tokens
- Database URLs
- Secrets

Every variable should be documented.

---

# Performance

Prioritize

- Server rendering
- Code splitting
- Image optimization
- Lazy loading
- Route prefetching

Avoid unnecessary JavaScript.

---

# Security

Every feature must include:

- Input validation
- Output sanitization
- Authorization checks
- Rate limiting where appropriate
- Secure environment variables

Never trust client-side validation alone.

---

# Testing

Preferred

- Vitest
- React Testing Library
- Playwright

Critical features should be tested before release.

---

# Documentation

Document:

- Major architectural decisions
- Database changes
- New dependencies
- Breaking changes

Keep documentation synchronized with implementation.

---

# Future Integrations

The architecture should allow future integration with:

- Payment gateways
- Push notifications
- SMS providers
- AI recommendations
- Analytics platforms

Design for extensibility without implementing these features prematurely.

---

# Technology Constraints

Must Use

- TypeScript
- Next.js App Router
- Tailwind CSS
- shadcn/ui
- Prisma
- PostgreSQL
- Clerk
- Cloudinary
- React Hook Form
- Zod

Must Not Use

- JavaScript for application code
- Multiple CSS frameworks
- Multiple ORMs
- Multiple authentication systems
- Inline CSS
- Hardcoded secrets

---

# AI Instructions

When implementing code:

- Follow the approved technology stack.
- Do not replace technologies without explicit approval.
- Reuse existing libraries before introducing new dependencies.
- Keep implementations modular and type-safe.
- Prefer official documentation and best practices.
- If a requested solution conflicts with the approved stack, explain the trade-offs before implementing it.

---

# Related Context Files

- 03_DESIGN_SYSTEM.md
- 05_ARCHITECTURE.md
- 06_DATABASE.md
- 07_CODING_STANDARDS.md
