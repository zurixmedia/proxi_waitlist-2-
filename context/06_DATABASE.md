# Context Metadata

Document: Database Design
Version: 1.0
Status: Active
Applies To: Entire Project
Last Updated: YYYY-MM-DD

---

# PROXI — Database Design

## Purpose

This document defines the database architecture, design principles, and data models for Proxi.

The database should remain:

- Scalable
- Secure
- Normalized
- Easy to maintain
- Easy to extend

The database should support future marketplace features without requiring major redesign.

---

# Database Philosophy

The database is the single source of truth.

Every piece of data should exist in only one place.

Avoid duplicate data whenever possible.

Prefer relationships over redundant storage.

Only collect data that provides value to the business or user.

---

# Database Technology

Database

PostgreSQL

ORM

Prisma

Requirements

- Prisma schema is the source of truth.
- All changes must go through Prisma migrations.
- Never edit the database manually in production.
- Prefer relations over duplicated fields.
- Keep models focused on one responsibility.

---

# Development Phases

## Phase 1 — Waitlist (Current)

Only the waitlist data model should be implemented.

No marketplace tables should be created yet unless explicitly approved.

---

## Phase 2 — Marketplace (Future)

Future models may include:

- Users
- Customer Profiles
- Artisan Profiles
- Categories
- Services
- Bookings
- Reviews
- Messages
- Notifications
- Payments
- Portfolios
- Verification

These models are planned but must not be implemented during the waitlist phase.

---

# Current Data Model

## Waitlist

Purpose

Store users who want early access to Proxi.

Fields

- id
- fullName
- email
- phoneNumber (optional)
- role (Customer | Artisan)
- trade (required only for artisans)
- location
- source (optional)
- createdAt
- updatedAt

Rules

- Email must be unique.
- One record per email address.
- Trade should only be stored for artisans.
- Role must be validated before saving.

---

# Data Validation

Every record must be validated before reaching the database.

Validation includes:

- Required fields
- Email format
- Role validation
- Field length
- Duplicate email detection

Never rely on client-side validation alone.

---

# Relationships

Current Phase

No relational tables.

Future Phase

Relationships will include:

Customer

↓

Bookings

↓

Artisan

↓

Reviews

↓

Categories

↓

Services

The database should be designed to support these relationships without restructuring.

---

# Naming Conventions

Tables

Singular PascalCase

Example

Waitlist

Columns

camelCase

Example

createdAt

updatedAt

fullName

Foreign Keys

<Model>NameId

Example

userId

bookingId

categoryId

---

# IDs

Use UUIDs for all primary keys.

Avoid sequential IDs.

---

# Timestamps

Every table should include:

createdAt

updatedAt

Soft deletes should use:

deletedAt

Only add deletedAt when soft deletion is required.

---

# Constraints

Use database constraints wherever possible.

Examples:

- Unique email
- Required fields
- Foreign keys
- Cascading rules
- Indexes

Never depend solely on application logic.

---

# Indexing

Create indexes for:

- Email
- Foreign keys
- Frequently searched fields

Avoid indexing unnecessary columns.

---

# Security

Never store:

- Plain-text passwords
- API keys
- Tokens
- Secrets
- Sensitive temporary data

Sanitize all user input before persistence.

---

# Data Integrity

Every write operation should preserve consistency.

Avoid partial updates.

Use database transactions for multi-step operations.

---

# Future Marketplace Models

Planned entities include:

- User
- CustomerProfile
- ArtisanProfile
- ServiceCategory
- Service
- Booking
- Review
- Message
- Notification
- Portfolio
- Verification
- Payment

These should be added only when development reaches the marketplace phase.

---

# Backup & Recovery

Production databases should support:

- Automated backups
- Point-in-time recovery
- Disaster recovery procedures

Development databases may be reset as needed.

---

# AI Implementation Rules

When working with the database:

- Implement only approved models.
- Respect the current project phase.
- Do not create speculative tables.
- Use Prisma for all schema changes.
- Validate all inputs before persistence.
- Keep models normalized.
- Reuse existing relations instead of duplicating data.
- Explain any proposed schema changes before implementing them.

---

# Waitlist Scope Reminder

For the current implementation:

Implement only the Waitlist model.

Do not generate marketplace tables.

The goal is to validate demand, not build the complete platform.

---

# Related Context Files

- 04_TECH_STACK.md
- 05_ARCHITECTURE.md
- 07_CODING_STANDARDS.md
