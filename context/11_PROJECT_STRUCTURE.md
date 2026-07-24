# Context Metadata

Document: Project Structure
Version: 1.0
Status: Active
Applies To: Entire Project
Last Updated: YYYY-MM-DD

---

# PROXI — Project Structure

## Purpose

This document defines the official folder structure, file organization, and ownership rules for Proxi.

A consistent project structure improves:

- Scalability
- Readability
- Maintainability
- Team collaboration
- AI-generated code quality

Every new file must belong in the correct location.

---

# Project Philosophy

The project should be organized by responsibility, not convenience.

Each folder should have one clear purpose.

Avoid creating generic folders that become catch-alls over time.

---

# Root Structure

```
proxi/

├── app/
├── components/
├── features/
├── lib/
├── hooks/
├── services/
├── types/
├── constants/
├── prisma/
├── public/
├── docs/
├── context/
├── styles/
├── tests/
├── middleware.ts
├── package.json
└── README.md
```

---

# Folder Responsibilities

## app/

Contains:

- App Router pages
- Layouts
- Route handlers
- Error pages
- Loading pages

Must NOT contain:

- Business logic
- Database queries
- Large reusable UI

---

## components/

Reusable UI shared across multiple features.

Examples:

- Button
- Input
- Card
- Modal
- Navbar
- Footer
- Section
- Logo

Components should be generic and reusable.

---

## features/

Feature-specific code.

Examples:

```
features/

waitlist/

search/

booking/

profile/
```

Each feature may contain:

- Components
- Hooks
- Validation
- Services (feature-specific)
- Types

Do not place shared code here.

---

## services/

Contains business logic.

Examples:

- waitlist.service.ts
- email.service.ts
- notification.service.ts

Business logic should not live inside API routes.

---

## lib/

Contains shared utilities.

Examples:

- prisma.ts
- resend.ts
- cloudinary.ts
- helpers.ts

Avoid placing feature-specific logic here.

---

## hooks/

Reusable React hooks.

Examples:

- useMediaQuery
- useDebounce
- useScrollPosition

Hooks should be reusable across features.

---

## types/

Shared TypeScript types.

Avoid redefining types in multiple locations.

---

## constants/

Shared constants.

Examples:

- routes.ts
- colors.ts
- breakpoints.ts
- categories.ts

Do not hardcode repeated values throughout the application.

---

## prisma/

Contains:

- schema.prisma
- migrations
- generated client

No application logic belongs here.

---

## public/

Static assets.

Recommended structure:

```
public/

images/

icons/

logos/

illustrations/

backgrounds/

fonts/
```

Use optimized assets whenever possible.

---

## docs/

Project documentation.

Includes:

- Product
- Architecture
- Database
- Design

---

## context/

AI context files.

These documents define project behavior.

They should be updated whenever major architectural decisions change.

---

## styles/

Global styling only.

Examples:

- globals.css
- fonts.css

Avoid feature-specific styling here.

---

## tests/

Application tests.

Recommended structure:

```
tests/

unit/

integration/

e2e/
```

---

# Feature Structure

Each feature should follow a consistent layout.

Example:

```
features/

waitlist/

components/

hooks/

schemas/

services/

types/

utils/

index.ts
```

Every feature should remain self-contained.

---

# Component Structure

Small components should be preferred over large monolithic components.

Recommended example:

```
HeroSection

BenefitsSection

HowItWorksSection

RoleSelection

WaitlistForm

FAQSection

Footer
```

Each component should have one responsibility.

---

# Import Rules

Prefer absolute imports where configured.

Import order:

1. External packages
2. Internal libraries
3. Services
4. Hooks
5. Components
6. Types
7. Styles

Avoid circular dependencies.

---

# Naming Rules

Folders

kebab-case

Files

kebab-case

Components

PascalCase

Hooks

useCamelCase

Types

PascalCase

Constants

UPPER_SNAKE_CASE (only true constants)

Routes

camelCase

---

# Asset Organization

Images should be grouped by purpose.

Example:

```
public/images/

landing/

waitlist/

categories/

artisans/

customers/
```

Avoid dumping all assets into one folder.

---

# Documentation Rules

Whenever a major feature is added:

Update:

- Features
- Architecture
- Database
- Design System

Documentation must evolve with the codebase.

---

# Growth Rules

As Proxi grows:

- Create new feature folders instead of expanding unrelated ones.
- Reuse shared components.
- Keep modules independent.
- Avoid deep nesting beyond three levels unless justified.

---

# Waitlist Structure

Current implementation should primarily use:

```
features/

waitlist/
```

No marketplace feature folders should be created until development reaches that phase.

---

# AI Implementation Rules

Before creating a new file:

1. Check if a suitable file already exists.
2. Determine whether it belongs in a shared folder or a feature folder.
3. Reuse existing modules whenever possible.
4. Keep features isolated.
5. Avoid creating generic utility files without a clear purpose.
6. Follow the approved folder hierarchy.

If unsure where a file belongs, explain the reasoning before creating it.

---

# Definition of a Well-Structured Project

A well-structured Proxi codebase should:

- Be easy to navigate.
- Have predictable file locations.
- Minimize duplication.
- Separate responsibilities clearly.
- Scale without major reorganization.
- Be understandable by any developer joining the project.

Project organization is considered part of code quality.

---

# Related Context Files

- 05_ARCHITECTURE.md
- 06_DATABASE.md
- 07_CODING_STANDARDS.md
- 10_DEVELOPMENT_RULES.md
