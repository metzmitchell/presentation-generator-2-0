I'm considering using this framework as a starting point for this website. timlrx/tailwind-nextjs-starter-blog  I want you to conduct deep research about whether this is The best framework for my needs.
- My top priority is stability when coding with AI
- Good visual design that's consistent and reliable
- It should be extremely lightweight
- The website doesn't have very many needs other than just being a presentation, so it doesn't need to be an app or anything like that

# Product Requirements Document: Presentation Generator 2.0

## Overview
A web-based presentation generator optimized for AI reliability and single-prompt generation. The system prioritizes AI-friendly architecture that can be quickly and easily generated without breaking design elements, followed by visually-driven, lightweight design.

## Priority 1: AI Reliability & Single-Prompt Generation

### Core AI Requirements
- **Single-Prompt Generation**: Complete presentations must be generatable from a single AI prompt
- **Zero Design Breaks**: AI must never accidentally break visual elements or design consistency
- **Predictable Patterns**: Component hierarchy and design patterns that AI can reliably work with
- **Foolproof Architecture**: Repository structure that prevents AI from making visual or functional errors

### AI-Friendly Foundation
- Repository that Claude Code CLI and Cursor IDE can easily understand, modify, and extend
- Production-ready, well-architected codebase with minimal technical debt
- Full type safety for enhanced AI code generation accuracy
- Comprehensive code comments and clear file structure for AI comprehension
- **Error Prevention**: Design system optimized to prevent AI from creating broken visual elements

### AI Reliability Standards
- High confidence (>95%) that AI-generated content will never break design or functionality
- Consistent visual presentation across all AI-generated elements
- Robust error handling that prevents visual component failures
- **AI Stability**: Design system optimized for AI content creation without manual intervention

## Priority 2: Visual Design Focus

### Visual-First Philosophy
- Very visually oriented and design-oriented
- Include effects and animations where appropriate
- Focus on visual story and visual elements
- Simple, loud designs that support verbal presentations
- **Lightweight Design**: Prioritize visual appeal while maintaining performance

### Data Visualization Standards
- Charts and data visualizations must be crisp, beautiful, and clear
- No contrast or ADA compliance issues
- Foolproof color schemes for hover effects, text overlays, and interactive elements
- **AI-Generated Visualizations**: Ensure data visualizations remain crisp and beautiful when AI-generated

### Interactive Features
- Optional interactive data elements (timeline changes, clickable features, hover effects)
- Only implement features with extremely high consistency and reliability
- Interactive elements must maintain visual integrity

## Core Functionality

### Content Generation
- Generate pages from markdown notes
- Include data from exported sheets
- Monthly data folder structure with one page per month
- Monthly reports starting from July

### Data Integration
- Build and deploy from markdown documents with notes, insights, and data
- Visual information display optimized for presentation delivery

## Technical Architecture

### Tech Stack Considerations
- **Framework**: Next.js 14 with App Router and TypeScript - is this the best choice for AI stability and lightweight design?
- **Styling**: Tailwind CSS + shadcn/ui components - would a different styling approach provide better stability for AI-generated content?
- **Hosting**: Vercel - is the free tier sufficient for initial launch?
- **Content**: File-based approach - what content structure would be most AI-friendly?

### Framework Compatibility
- Use the same framework as blog posts
- Cross-compatibility between presentation and blog post environments
- Ability to convert presentations to blog posts with similar visual elements

### Alternative Framework Considerations
- Would a different static site generator (like Astro or Gatsby) provide better AI stability?
- Should I consider a more specialized presentation framework instead of adapting a blog framework?
- Are there presentation-specific tools that might offer better AI reliability?

## Site Architecture

### Domain Structure
- **blog.rowan.build**: Main site with presentation sections

### Navigation Structure
```
Home (/)
├── Presentations (/presentations)
│ ├── Individual presentations (/presentations/[slug])
│ └── Monthly reports (/presentations/monthly/[month])
└── About (/about)
```

### Content Management
- **Presentations**: File-based content only for AI maintenance
- **No CMS**: File-based content only for AI maintenance

## Key Differentiators from Blog Posts

### Presentation vs. Blog Approach
- **Blog Posts**: Text-driven, content-heavy output
- **Presentations**: Visual-driven, story-focused with consistent, easy, and correct visual elements
- Emphasis on visual storytelling over textual content

## User Experience Requirements

### Simplicity
- No sign-in functionality required
- No lead capture or lead magnets
- No automation features
- Regular web page functionality with enhanced visual appeal

### Reliability & Consistency
- High confidence in feature stability
- Consistent visual presentation across all elements
- Robust error handling for visual components

## Success Criteria

### AI Usability & Efficiency
- AI can reliably publish content without breaking design/functionality
- High confidence (>95%) that features will never break or have visual problems
- **Single-Prompt Success**: Complete presentations generatable from one AI prompt

### Performance & Reliability
- Fast loading times and high Lighthouse scores
- Minimal maintenance overhead
- Working prototype deployed quickly

## Future Considerations

### Scalability
- Continued data integration as more data becomes available
- Framework evaluation for optimal presentation capabilities

### Questions for Development
- Will this work well with the existing log structure?
- Will the blog website structure limit presentation capabilities?
- Should presentations and blogs be separate systems?
- How can I ensure the component hierarchy and design patterns are truly foolproof for AI generation?
- What specific architectural patterns would prevent AI from accidentally breaking visual elements?
- Is the single-prompt generation approach realistic, or should I plan for multi-step generation?
- How can I structure the content files to maximize AI reliability while maintaining visual flexibility?
- Should I implement specific validation layers to catch AI-generated design inconsistencies?

## Budget Constraints
- Prefer free tiers initially
- Vercel free tier sufficient for launch
- Paid upgrades only when needed

## Environment Variables Needed
```env
# Analytics (later phase)
NEXT_PUBLIC_GA_ID=
```