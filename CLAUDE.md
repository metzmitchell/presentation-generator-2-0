# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a presentation generator project (version 2.0) that is part of Mitchell's Operating System workspace. Based on the parent repository patterns, this will likely be a Vite-based React/TypeScript application for generating presentations, similar to other presentation generators in the workspace.

## Project Status

**Current State**: Functional presentation generator with directory system
- Directory homepage implemented at `/` (index.jsx)
- Presentation routing system with categories and tags
- Multiple example presentations available
- Build system working with Node.js compatibility fixes

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

## Project Structure

The project follows this structure:
- `/src` - Source code
  - `/components` - React components
    - `Directory.jsx` - Homepage directory component
    - `/layouts` - Slide layout components
    - `/charts` - Chart components for data presentations
  - `/pages` - Next.js pages and presentations
    - `index.jsx` - Homepage with presentation directory
    - `demo.mdx` - NextJS MDX Deck demo presentation
    - `page-2.mdx` - MDX components tutorial
    - `/presentations/YYYY-MM/` - Organized presentation files
  - `/lib` - Utility functions
    - `presentations.js` - Presentation registry and utilities
  - `/data` - Data files and presentation templates
  - `/styles` - Global styles
- `/public` - Static assets
- Configuration files (next.config.js, tsconfig.json, etc.)

## Development Guidelines

### Adding New Presentations

1. **Create MDX file** in appropriate `/src/pages/presentations/YYYY-MM/` directory
2. **Register presentation** in `/src/lib/presentations.js`:
   - Add entry to `presentationRegistry` array
   - Include metadata: title, description, path, category, tags, author, date
3. **Use available components**: SlidePage, TitleSlide, ContentSlide, ChartSlide, etc.
4. **Follow naming conventions**: Use kebab-case for filenames

### Directory System

- **Homepage** (`/`) displays all presentations in a filterable directory
- **Categories**: demo, tutorial, reports, business, technical, personal
- **Tags**: Flexible tagging system for cross-category organization
- **Filtering**: Users can filter by category and tag combinations
- **No menus on presentation pages**: Only the homepage provides navigation

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