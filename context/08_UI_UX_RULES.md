# Context Metadata

Document: UI/UX Rules
Version: 1.0
Status: Active
Applies To: Entire Project
Last Updated: YYYY-MM-DD

---

# PROXI — UI/UX Rules

## Purpose

This document defines the user experience principles and interface rules for Proxi.

Every screen should prioritize usability, clarity, accessibility, and trust.

The objective is to make Proxi feel intuitive for first-time users while remaining efficient for returning users.

---

# Core UX Principles

Every screen should be:

- Simple
- Predictable
- Consistent
- Accessible
- Fast
- Trustworthy

Users should never wonder what to do next.

---

# First Impression

Users should understand within 5 seconds:

- What Proxi is.
- Who it is for.
- What action to take.
- Why they should trust it.

Avoid overwhelming users with excessive information.

---

# Primary Action

Every screen must have one clear primary action.

Examples:

- Join Waitlist
- Search Professionals
- Book Service
- Continue

Do not present multiple competing primary actions.

---

# Navigation

Navigation should always feel familiar.

Rules:

- Keep navigation consistent across screens.
- Do not move navigation elements between pages.
- Highlight the current page.
- Keep labels short and descriptive.
- Avoid deep navigation hierarchies.

---

# Content Hierarchy

Present information in this order:

1. What this page is.
2. Why it matters.
3. What users can do.
4. Supporting information.
5. Primary action.

Users should never search for the next step.

---

# Forms

Forms should be quick and approachable.

Rules:

- Ask only for essential information.
- Clearly indicate required fields.
- Validate inputs immediately after interaction.
- Preserve entered data after validation errors.
- Explain errors using plain language.

Avoid long forms.

---

# Waitlist Experience

The waitlist should:

- Clearly explain Proxi.
- Build confidence.
- Highlight key benefits.
- Offer role selection (Customer or Artisan).
- Require minimal effort to join.

The waitlist should feel like the beginning of the product, not a placeholder.

---

# Search Experience

Search is a core feature of Proxi.

Rules:

- Keep the search bar visible.
- Show relevant categories.
- Display helpful empty states.
- Allow users to refine results easily.

Search should reduce effort, not create it.

---

# Artisan Discovery

Artisan listings should prioritize:

- Verification status.
- Ratings.
- Service category.
- Location.
- Availability.
- Clear booking action.

Do not hide important trust signals.

---

# Booking Flow

Every booking flow should feel linear.

Typical flow:

Search

↓

Choose Professional

↓

Review Details

↓

Select Date & Time

↓

Confirm

↓

Success

Avoid unnecessary steps.

---

# Feedback

Every user action should receive immediate feedback.

Examples:

- Loading indicators.
- Success messages.
- Error messages.
- Confirmation screens.

Never leave users wondering if something happened.

---

# Empty States

Every empty state should include:

- Explanation.
- Illustration or icon.
- Suggested next action.

Avoid dead ends.

---

# Error Handling

Errors should:

- Explain the problem.
- Explain how to fix it.
- Avoid technical language.

Never blame the user.

---

# Loading States

Every asynchronous action should display:

- Skeleton loaders.
- Progress indicators.
- Meaningful loading text when appropriate.

Avoid blank screens.

---

# Trust Signals

Every relevant screen should reinforce trust.

Examples:

- Verified badges.
- Ratings.
- Reviews.
- Completed jobs.
- Clear pricing.
- Professional profile photos.

Trust should be visible without users searching for it.

---

# Visual Hierarchy

Users should immediately identify:

- Page title.
- Primary action.
- Important information.
- Secondary information.

Use spacing and typography before using color.

---

# Accessibility

Every interface must:

- Support keyboard navigation.
- Meet WCAG AA standards.
- Include semantic HTML.
- Maintain visible focus states.
- Avoid using color alone to communicate meaning.

Accessibility is mandatory.

---

# Performance

Interfaces should feel responsive.

Guidelines:

- Prioritize above-the-fold content.
- Optimize images.
- Avoid unnecessary animations.
- Minimize layout shifts.

Fast experiences build trust.

---

# Responsive Experience

Every page must support:

- Mobile
- Tablet
- Desktop

Rules:

- Design mobile first.
- Adapt layouts intelligently.
- Preserve the same user journey across devices.
- Never stretch mobile layouts to desktop.

---

# AI Implementation Rules

When generating UI:

- Follow the Design System before creating layouts.
- Follow the Brand Guidelines before styling.
- Reuse existing components.
- Keep interactions simple.
- Prioritize clarity over decoration.
- Maintain consistency across all screens.
- If usability conflicts with aesthetics, prioritize usability.

---

# UX Review Checklist

Before considering a screen complete, verify:

- The purpose is immediately clear.
- There is one primary action.
- Navigation is consistent.
- Content hierarchy is obvious.
- The design is responsive.
- Accessibility requirements are met.
- Trust signals are visible.
- The screen matches the approved designs.
- No unnecessary complexity has been introduced.

---

# Related Context Files

- 02_BRAND.md
- 03_DESIGN_SYSTEM.md
- 04_TECH_STACK.md
- 07_CODING_STANDARDS.md

# Dual User Experience

Every feature should consider both user types:

## Customer

Priorities:

- Find trusted professionals quickly.
- Compare options easily.
- Book confidently.
- Feel safe.

## Artisan

Priorities:

- Receive quality job opportunities.
- Build trust through profile and reviews.
- Respond efficiently.
- Manage work with minimal friction.

Whenever implementing a new feature, consider how it affects both user journeys before development begins.
