# Context Metadata

Document: Features Specification
Version: 1.0
Status: Active
Applies To: Entire Project
Last Updated: YYYY-MM-DD

---

# PROXI — Features Specification

## Purpose

This document defines every approved feature within Proxi.

Each feature includes its purpose, scope, implementation phase, and dependencies.

Only approved features should be implemented.

Features planned for future phases must not be built prematurely.

---

# Product Roadmap

The project is divided into two major phases.

## Phase 1

Waitlist

Purpose:

- Validate demand.
- Build awareness.
- Collect early users.
- Gather market insights.

Only waitlist-related functionality should be implemented.

---

## Phase 2

Marketplace

Purpose:

Launch the complete Proxi platform connecting customers with trusted local professionals.

---

# Current Features (Phase 1)

## Waitlist Landing Page

Status

Approved

Purpose

Introduce Proxi and encourage visitors to join the waitlist.

Includes

- Hero section
- Value proposition
- Benefits
- How Proxi works
- Customer & Artisan role selection
- FAQ
- Footer

Out of Scope

- Authentication
- Dashboard
- Search
- Booking
- Messaging

---

## Waitlist Registration

Status

Approved

Purpose

Collect interested users.

Fields

Customer

- Full Name
- Email
- Location

Artisan

- Full Name
- Email
- Location
- Service Category

Requirements

- Validate all inputs.
- Prevent duplicate registrations.
- Display success confirmation.

---

## Email Confirmation

Status

Approved

Purpose

Confirm successful waitlist registration.

Requirements

- Send confirmation email.
- Thank the user.
- Explain next steps.

---

## Responsive Landing Page

Status

Approved

Requirements

- Mobile-first.
- Dedicated desktop layout.
- Fast loading.
- Fully responsive.

---

# Future Features (Phase 2)

These features are approved conceptually but should not be implemented during the waitlist phase.

---

## Authentication

Purpose

Secure access for customers and artisans.

Dependencies

- Clerk
- PostgreSQL

---

## Customer Profiles

Purpose

Allow customers to manage bookings and account information.

---

## Artisan Profiles

Purpose

Display:

- Profile photo
- Services
- Ratings
- Reviews
- Portfolio
- Availability
- Verification

---

## Search

Purpose

Help users quickly find trusted professionals.

Includes

- Search bar
- Categories
- Filters
- Sorting
- Location-based results

---

## Categories

Purpose

Organize professionals into service groups.

Examples

- Plumbing
- Electrical
- Painting
- Cleaning
- Carpentry
- AC Repair
- Generator Repair
- Beauty
- Photography
- Home Services

---

## Booking System

Purpose

Allow customers to schedule appointments.

Future capabilities

- Date selection
- Time selection
- Booking confirmation
- Booking history

---

## Reviews & Ratings

Purpose

Build trust.

Includes

- Star ratings
- Written reviews
- Verified reviews

---

## Messaging

Purpose

Allow communication between customers and artisans.

---

## Notifications

Purpose

Keep users informed.

Examples

- Booking updates
- New messages
- Account notifications

---

## Verification

Purpose

Increase marketplace trust.

Examples

- Identity verification
- Business verification
- Phone verification

---

## Portfolio

Purpose

Allow artisans to showcase previous work.

---

## Favorites

Purpose

Allow customers to save preferred professionals.

---

## Payment Integration

Purpose

Support secure online payments.

This feature will be introduced only after the booking system is stable.

---

# Feature Priorities

## High Priority

- Waitlist
- Registration
- Email Confirmation

---

## Medium Priority

- Authentication
- Profiles
- Search
- Categories

---

## Low Priority

- Messaging
- Favorites
- Payments
- AI Recommendations

---

# Out of Scope

The following should not be implemented during the current phase:

- Payments
- Real-time chat
- Live location tracking
- Push notifications
- AI recommendations
- Admin dashboard
- Analytics dashboard

---

# Feature Dependencies

Waitlist

↓

Authentication

↓

Profiles

↓

Categories

↓

Search

↓

Booking

↓

Reviews

↓

Messaging

↓

Payments

Each feature should be built only after its dependencies are complete.

---

# AI Implementation Rules

Before implementing any feature:

- Verify that the feature is approved.
- Verify that it belongs to the current development phase.
- Respect feature dependencies.
- Do not implement future features early.
- Build only the requested scope.
- Reuse existing components and services whenever possible.

---

## Booking System

Status

📋 Approved

Priority

High

Phase

Marketplace

Dependencies

Search
Authentication
Profiles

# Related Context Files

- 01_PRODUCT.md
- 05_ARCHITECTURE.md
- 06_DATABASE.md
- 08_UI_UX_RULES.md
