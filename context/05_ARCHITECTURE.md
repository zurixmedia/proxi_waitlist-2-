# Context Metadata

Document: System Architecture
Version: 1.0
Status: Active
Applies To: Entire Project
Last Updated: YYYY-MM-DD

---

# PROXI — System Architecture

## Purpose

This document defines the overall architecture of Proxi.

It explains how the application's systems communicate, how responsibilities are divided, and how future features should integrate into the existing architecture.

Every implementation should follow this architecture unless explicitly updated.

---

# Architecture Philosophy

The architecture should prioritize:

- Simplicity
- Scalability
- Maintainability
- Security
- Separation of Concerns
- Reusability

Each layer should have a single responsibility.

Business logic should never be tightly coupled to the UI.

---

# Architecture Stages

The project is intentionally divided into two phases.

## Phase 1

Waitlist

Current implementation.

Purpose:

Validate demand.

Collect early users.

Introduce the brand.

Gather market data.

No marketplace functionality should be implemented during this phase.

---

## Phase 2

Marketplace

Future implementation.

Includes:

- Authentication
- Search
- Bookings
- Messaging
- Reviews
- Payments
- Profiles
- Dashboards

The architecture should already be prepared for these features without implementing them now.

---

                    PROXI SYSTEM

                 ┌─────────────────┐
                 │     Browser     │
                 └────────┬────────┘
                          │
                    Next.js Frontend
                          │
                 Route Handlers (API)
                          │
                  Business Services
                          │
                  Prisma ORM Layer
                          │
                     PostgreSQL
                          │
        ┌───────────┬────────────┬─────────────┐
        │           │            │             │

Clerk Auth Cloudinary Resend Google Maps
(Future) Images Emails (Future)

                 WAITLIST (CURRENT)

      User
        │
        ▼

Waitlist Page
│
▼
Form Validation
│
▼
API Route
│
▼
PostgreSQL Database
│
▼
Confirmation Email

# Current Architecture (Waitlist)

The waitlist consists of:

Frontend

↓

Validation

↓

API

↓

Database

↓

Email Confirmation

No authentication is required.

No protected routes.

No dashboards.

No bookings.

No messaging.

Keep the waitlist lightweight.

---

# Future Marketplace Architecture

Customer

↓

Frontend

↓

API Layer

↓

Business Services

↓

Database

↓

External Services

Examples of external services:

- Authentication
- Email
- Image Storage
- Maps
- Payments
- Notifications

Each service should remain isolated.

---

# Layered Architecture

Presentation Layer

Responsible for:

- UI
- User interactions
- Forms
- Navigation

Must never contain business logic.

---

Application Layer

Responsible for:

- Business rules
- Validation
- Workflows

Should remain framework-independent whenever practical.

---

Data Layer

Responsible for:

- Database access
- Prisma
- Queries
- Transactions

No UI logic.

---

Infrastructure Layer

Responsible for:

- External APIs
- Authentication
- Cloudinary
- Email
- Maps
- Payments

External services should never be accessed directly from UI components.

---

# Folder Responsibilities

app/

Routing

Pages

Layouts

Route handlers

components/

Reusable UI

Never contain business logic.

features/

Feature-specific components and logic.

lib/

Utilities

Helpers

Shared services

hooks/

Reusable React hooks.

types/

Shared TypeScript types.

prisma/

Database schema

Migrations

Generated client

public/

Static assets

docs/

Project documentation

context/

AI context files

---

# Data Flow

User Action

↓

Validation

↓

API Route

↓

Service Layer

↓

Database

↓

Response

↓

UI Update

Every request should follow this flow.

---

# Service Layer

Business logic should live in services.

Examples:

Waitlist Service

Booking Service

Notification Service

Review Service

Payment Service

The UI should never communicate directly with the database.

---

# API Principles

Routes should be:

Small

Focused

RESTful

Predictable

Never place business logic directly inside API routes.

Routes should delegate work to services.

---

# Database Principles

Prisma is the only database access layer.

Never duplicate queries across multiple files.

Keep database logic centralized.

---

# Authentication

Current Phase

None

Future

Clerk

Authentication should remain isolated from business logic.

---

# State Management

Separate:

UI State

Server State

Form State

Authentication State

Do not mix responsibilities.

---

# Error Handling

Every layer should handle errors appropriately.

UI

User-friendly messages.

API

Consistent responses.

Database

Safe transactions.

Services

Meaningful exceptions.

Never expose internal errors to users.

---

# Logging

Log:

Unexpected errors

API failures

Database failures

External service failures

Avoid logging sensitive information.

---

# Scalability Principles

Every new feature should:

Reuse existing architecture.

Avoid duplicate logic.

Remain modular.

Be independently testable.

Future features should integrate without major restructuring.

---

# Security Principles

Validate all external input.

Authorize protected actions.

Never trust client-side validation.

Store secrets securely.

Use HTTPS in production.

Sanitize user input.

---

# AI Implementation Rules

When implementing any feature:

- Respect the current project phase.
- Build only what has been approved.
- Separate UI from business logic.
- Separate business logic from database access.
- Keep services reusable.
- Prefer composition over duplication.
- Do not introduce architecture that conflicts with this document.

---

# Waitlist Scope Reminder

For the current task:

Implement only the waitlist.

Do NOT implement:

- Authentication
- User dashboards
- Messaging
- Bookings
- Reviews
- Payments
- Notifications
- Real-time features

The waitlist should remain simple while following the same architectural principles as the future marketplace.

---

# Related Context Files

- 04_TECH_STACK.md
- 06_DATABASE.md
- 07_CODING_STANDARDS.md
- 10_DEVELOPMENT_RULES.md
