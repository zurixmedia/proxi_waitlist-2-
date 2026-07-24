# Context Metadata

Document: Development Rules
Version: 1.0
Status: Active
Applies To: Entire Project
Last Updated: YYYY-MM-DD

---

# PROXI — Development Rules

## Purpose

This document defines how all development work must be carried out.

It is the operational rulebook for implementing Proxi.

Every task, feature, bug fix, and refactor must follow these rules.

---

# Development Philosophy

The goal is not to generate code quickly.

The goal is to build production-quality software.

Every implementation should prioritize:

- Correctness
- Maintainability
- Scalability
- Readability
- Simplicity

Never optimize for speed at the expense of quality.

---

# Context First

Before beginning any task, read all relevant project context files.

Implementation should never begin without understanding:

- Project Vision
- Product Specification
- Brand Guidelines
- Design System
- Architecture
- Technology Stack
- Database Design
- Coding Standards
- UI/UX Rules
- Feature Specification

If documentation conflicts, stop and explain the conflict before proceeding.

---

# Current Project Phase

The current development phase is:

**Phase 1 — Waitlist**

Only implement functionality related to the waitlist.

Do not begin marketplace development until explicitly instructed.

---

# Scope Control

Implement only the requested task.

Do not:

- Add extra features.
- Change existing functionality.
- Redesign approved UI.
- Refactor unrelated code.
- Install unnecessary dependencies.

Stay within scope.

---

# Think Before Coding

Before writing code:

1. Understand the problem.
2. Review existing code.
3. Identify reusable components.
4. Consider edge cases.
5. Explain the implementation plan.

Only then begin implementation.

---

# Reuse Before Creating

Always search for:

- Existing components.
- Existing hooks.
- Existing utilities.
- Existing services.
- Existing types.

Reuse whenever possible.

Avoid duplicate implementations.

---

# Build Incrementally

Break work into small, testable pieces.

Recommended workflow:

1. Build structure.
2. Build UI.
3. Add functionality.
4. Connect backend.
5. Test.
6. Refine.

Avoid building multiple unrelated features simultaneously.

---

# UI Implementation

Before building a screen:

- Review the approved SVG designs.
- Match layout closely.
- Follow the Design System.
- Ensure responsiveness.
- Maintain accessibility.

Do not redesign screens unless instructed.

---

# Backend Implementation

Keep business logic separate from:

- Components
- API routes
- Database queries

Use services where appropriate.

Keep functions focused.

---

# Database Changes

Before modifying the schema:

- Explain the reason.
- Confirm the impact.
- Use Prisma migrations.
- Avoid unnecessary schema changes.

Never introduce speculative models.

---

# Error Handling

Every feature should include:

- Loading state
- Success state
- Error state
- Empty state (where applicable)

Never leave users without feedback.

---

# Code Quality

Every implementation must:

- Pass TypeScript checks.
- Pass linting.
- Follow project conventions.
- Avoid duplication.
- Be easy to understand.

Readable code is preferred over clever code.

---

# Performance

Optimize for:

- Fast loading
- Small bundles
- Efficient rendering
- Minimal re-renders
- Optimized images

Do not optimize prematurely.

---

# Security

Always:

- Validate user input.
- Sanitize external data.
- Protect sensitive information.
- Use environment variables.
- Follow least-privilege principles.

Never trust client-side validation alone.

---

# Documentation

Whenever a major decision is made:

- Update the relevant documentation.
- Keep context files accurate.
- Document architectural changes.

Code and documentation should evolve together.

---

# Git Workflow

Use meaningful commits.

Examples:

feat: create waitlist hero section

feat: add waitlist registration form

fix: prevent duplicate registrations

refactor: simplify waitlist validation

docs: update database design

Each commit should represent one logical change.

---

# AI Decision Framework

Before implementing anything, ask:

1. Is this required by the current task?
2. Is it approved in the project documentation?
3. Does an existing solution already exist?
4. Is this consistent with the architecture?
5. Will this scale as Proxi grows?

If any answer is "No" or "Unknown", stop and explain before proceeding.

---

# Definition of Done

A task is complete only when:

- Requirements are fully implemented.
- UI matches approved designs.
- Mobile and desktop are both supported.
- Accessibility requirements are met.
- Code passes linting and type checking.
- No duplicated logic exists.
- Documentation is updated if necessary.
- The solution respects the project architecture.
- No unrelated files have been modified.

---

# Things the AI Must Never Do

- Guess requirements.
- Ignore project documentation.
- Rewrite working code unnecessarily.
- Introduce new libraries without approval.
- Build future features early.
- Hardcode secrets.
- Disable linting or TypeScript checks to bypass errors.
- Use temporary hacks as permanent solutions.
- Leave TODOs without explanation.

---

# Communication Rules

When responding during development:

- Explain important decisions briefly.
- Highlight trade-offs when they exist.
- State assumptions explicitly.
- Ask questions when requirements are ambiguous.
- Recommend better approaches when appropriate.

Do not make silent architectural decisions.

---

# Final Rule

Every implementation should leave the project in a better state than it was before.

Build Proxi as if it will serve millions of users, while implementing only what the current phase requires.

Quality over speed.

# Task Execution Protocol

For every development request, follow this workflow:

1. Understand the request.
2. Identify the relevant context files.
3. Explain the implementation plan.
4. Identify any risks or ambiguities.
5. Implement the smallest complete solution.
6. Verify against the Design System and Coding Standards.
7. Confirm what was completed.
8. Suggest the next logical step without implementing it.

Never skip steps.
