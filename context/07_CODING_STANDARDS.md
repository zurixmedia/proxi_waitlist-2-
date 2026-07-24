# Context Metadata

Document: Coding Standards
Version: 1.0
Status: Active
Applies To: Entire Project
Last Updated: YYYY-MM-DD

---

# PROXI — Coding Standards

## Purpose

This document defines the official coding standards for Proxi.

Every line of code should be:

- Readable
- Maintainable
- Reusable
- Type-safe
- Testable
- Consistent

Code should be written for future developers, not just to make the application work.

---

# General Principles

Every implementation should prioritize:

- Simplicity
- Readability
- Reusability
- Performance
- Scalability

Always prefer clear code over clever code.

If code requires extensive explanation, simplify it.

---

# SOLID Principles

Follow SOLID principles where applicable.

Components and modules should have a single responsibility.

Prefer composition over inheritance.

Depend on abstractions rather than implementations.

Avoid tightly coupled code.

---

# DRY Principle

Do not repeat logic.

If logic is reused multiple times, extract it into a shared utility, hook, or component.

Avoid copy-pasting code.

---

# KISS Principle

Keep implementations simple.

Do not build for hypothetical future requirements.

Only implement what the current project phase requires.

---

# File Organization

Each file should have a single responsibility.

Avoid files that exceed approximately 300 lines.

If a file becomes difficult to navigate, split it into smaller modules.

---

# Naming Conventions

## Files

Use kebab-case.

Examples:

waitlist-form.tsx

service-card.tsx

email-service.ts

---

## Components

Use PascalCase.

Examples:

WaitlistForm

ArtisanCard

HeroSection

---

## Variables

Use camelCase.

Names should clearly describe their purpose.

Avoid abbreviations.

---

## Constants

Use UPPER_SNAKE_CASE only for true constants.

Example:

MAX_UPLOAD_SIZE

---

## Types

Use PascalCase.

Examples:

WaitlistUser

ServiceCategory

BookingStatus

---

## Enums

Use PascalCase.

Members should be descriptive.

---

# Functions

Functions should:

- Perform one task.
- Be easy to understand.
- Return early when possible.
- Avoid deep nesting.

Prefer pure functions when practical.

---

# Components

Components should:

- Have a single responsibility.
- Be reusable.
- Remain presentation-focused.

Avoid embedding business logic inside UI components.

---

# Business Logic

Business logic belongs in services.

Do not place business rules inside:

- Components
- API routes
- Hooks

Keep logic centralized.

---

# Hooks

Use custom hooks only for reusable React logic.

Do not place unrelated functionality inside the same hook.

Keep hooks focused.

---

# API Routes

API routes should:

- Validate input.
- Call services.
- Return standardized responses.

Avoid implementing business logic directly in route handlers.

---

# Database Access

Use Prisma exclusively.

Do not execute raw SQL unless performance requires it.

Keep database queries centralized.

---

# Error Handling

Handle errors gracefully.

Display user-friendly messages.

Log technical details internally.

Never expose stack traces to users.

---

# TypeScript

Type safety is mandatory.

Do not use:

- any
- @ts-ignore
- unnecessary type assertions

Prefer explicit types where clarity improves readability.

---

# Comments

Code should explain itself.

Use comments only when documenting:

- Business decisions
- Complex algorithms
- Non-obvious behavior

Avoid commenting obvious code.

---

# Imports

Group imports in this order:

1. External libraries
2. Internal modules
3. Components
4. Types
5. Styles

Remove unused imports.

Avoid circular dependencies.

---

# Styling

Use Tailwind CSS.

Do not use inline styles.

Avoid duplicated utility classes by extracting reusable components or utilities when appropriate.

---

# Accessibility

Every UI component should:

- Support keyboard navigation.
- Include semantic HTML.
- Include accessible labels.
- Provide visible focus states.

Accessibility is part of the implementation, not an afterthought.

---

# Performance

Optimize for performance by default.

Prefer:

- Server Components
- Lazy loading
- Image optimization
- Memoization only when beneficial

Avoid premature optimization.

---

# Git Standards

Commit messages should be short and descriptive.

Examples:

feat: add waitlist form

fix: validate email input

refactor: simplify hero component

docs: update architecture

Avoid vague commit messages such as:

update

fix

changes

---

# Security

Validate all external input.

Never trust client-side validation.

Do not expose secrets.

Use environment variables for configuration.

Sanitize user input before persistence.

---

# Testing

Test critical business logic.

Prioritize:

- Validation
- Services
- API routes
- Utility functions

Write deterministic tests.

---

# Refactoring

Refactor when:

- Code becomes difficult to read.
- Logic is duplicated.
- Responsibilities become unclear.

Do not refactor purely for personal preference.

---

# Code Review Checklist

Before considering a task complete, verify:

- Code follows the project architecture.
- Code matches the Design System.
- No duplicated logic exists.
- Naming is consistent.
- Type safety is maintained.
- Components are reusable.
- Accessibility requirements are met.
- Performance has been considered.
- Security best practices are followed.
- The implementation solves only the approved scope.

---

# AI Implementation Rules

When generating code:

- Read all relevant context files before writing code.
- Respect the current development phase.
- Follow the approved architecture.
- Reuse existing components and utilities.
- Prefer readability over cleverness.
- Explain significant architectural decisions.
- Do not introduce new libraries without approval.
- Do not implement features outside the current scope.
- If requirements are unclear, ask for clarification instead of making assumptions.

---

# Definition of Done

A task is complete only when:

- The feature works correctly.
- The code follows all coding standards.
- The implementation is responsive.
- The UI matches the approved designs.
- Accessibility requirements are satisfied.
- No TypeScript errors exist.
- No linting errors exist.
- No unnecessary code remains.
- Documentation is updated if required.

---

# Related Context Files

- 04_TECH_STACK.md
- 05_ARCHITECTURE.md
- 06_DATABASE.md
- 08_AI_RULES.md

# Fix, Don't Work Around

Do not silence errors using temporary workarounds.

Avoid:

- // @ts-ignore
- disabling ESLint rules
- commenting out broken code
- hardcoded fallback values to hide bugs
- duplicate implementations to bypass issues

Instead:

- Identify the root cause.
- Explain the issue.
- Implement the proper fix.

Temporary workarounds are allowed only when explicitly approved and must include a TODO with the reason and planned removal.
