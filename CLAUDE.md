# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a presentation generator project (version 2.0) that is part of Mitchell's Operating System workspace. Based on the parent repository patterns, this will likely be a Vite-based React/TypeScript application for generating presentations, similar to other presentation generators in the workspace.

## Project Status

**Current State**: Initial planning phase
- Project structure not yet implemented
- Two planning documents exist in `/initial_notes/`

## Important Rules

### Protected Files
- **Only edit files in `/initial_notes/` when explicitly requested** - These are planning documents that should generally remain unchanged
- The `/initial_notes/` directory contains original planning documents (plan.md, prd_1.md) that serve as project reference
- If asked to work on the project without specific mention of initial_notes, assume these files should not be modified

## Expected Development Stack

Based on the parent repository patterns for presentation generators:

### Technology Stack
- **Build Tool**: Vite
- **Framework**: React 18+ with TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Routing**: React Router (if multi-page)
- **Deployment**: GitHub Pages or Vercel

### Expected Commands (once initialized)

```bash
# Development
npm run dev             # Start development server

# Build & Production
npm run build           # Production build
npm run preview         # Preview production build
npm run build:gh        # Build for GitHub Pages deployment (if applicable)

# Code Quality
npm run lint            # ESLint
npm run typecheck       # TypeScript type checking (if configured)
```

## Project Structure (Expected)

Once implemented, the project will likely follow this structure:
- `/src` - Source code
  - `/components` - React components
  - `/pages` or `/routes` - Page components
  - `/lib` or `/utils` - Utility functions
  - `/styles` - Global styles
- `/public` - Static assets
- Configuration files (vite.config.ts, tsconfig.json, etc.)

## Development Guidelines

### When Initializing the Project

1. **Use Vite** for project setup with React and TypeScript template
2. **Install dependencies**: 
   - Core: `react`, `react-dom`, `typescript`
   - Styling: `tailwindcss`, `@tailwindcss/typography`, shadcn/ui components
   - Development: `@types/react`, `@types/react-dom`, `eslint`, `prettier`

3. **Follow parent repository patterns**:
   - Use shadcn/ui components for UI consistency
   - Implement responsive design (mobile-first)
   - Include proper TypeScript typing
   - Set up ESLint and Prettier configurations

### Code Quality Standards

- TypeScript strict mode enabled
- ESLint compliance required
- Responsive design patterns
- Proper error handling and loading states
- Accessibility (WCAG) compliance

### Presentation-Specific Considerations

- Support for multiple slide layouts
- Export capabilities (PDF, images, or web format)
- Responsive presentation viewer
- Keyboard navigation support
- Print-friendly styles

## Integration with Parent Repository

This project exists within the larger Operating System workspace. Reference the parent `/CLAUDE.md` for:
- General development practices
- Voice and content guidelines
- Quality standards
- Repository-wide patterns

## Next Steps

1. Initialize the Vite project with React + TypeScript template
2. Set up Tailwind CSS and shadcn/ui
3. Create basic presentation structure and components
4. Implement slide management functionality
5. Add export/sharing capabilities