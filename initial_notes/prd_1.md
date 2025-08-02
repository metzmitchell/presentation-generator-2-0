# AI Developer Setup Prompt: Presentation Generator 2.0

## Project Overview
Create a presentation generator by customizing the **next-mdx-deck** template (https://github.com/whoisryosuke/next-mdx-deck) for AI-optimized, single-prompt presentation generation with visual-first design.

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

### Interactive Features
- Optional interactive data elements (timeline changes, clickable features, hover effects)
- Only implement features with extremely high consistency and reliability
- Interactive elements must maintain visual integrity

## Core Functionality

### Content Generation
- Generate pages from markdown notes
- Include data from exported BuilderTrend sheets
- Monthly data folder structure with one page per month
- Monthly reports starting from July

### Data Integration
- Build and deploy from markdown documents with notes, insights, and data
- Visual information display optimized for presentation delivery

## Template Decision: next-mdx-deck

### Selected Template: https://github.com/whoisryosuke/next-mdx-deck

**Why This Template:**
- **Presentation-Specific**: Built for presentations, not adapted from blogs
- **AI-Friendly Structure**: Clean component separation, predictable MDX patterns
- **TypeScript Ready**: Comprehensive TypeScript support with type definitions
- **Minimal Dependencies**: Only essential packages (Next.js, React, MDX, Framer Motion, Styled Components)
- **Visual-First**: Designed for visual storytelling with speaker notes and presentation mode

### Current Template Tech Stack
- **Framework**: Next.js with TypeScript
- **Content**: MDX with React components
- **Styling**: Styled Components
- **Animations**: Framer Motion
- **Features**: Presentation mode, speaker notes, step components

### Required Modifications for AI Optimization

#### 1. Replace Styled Components with Tailwind CSS
- **Why**: Tailwind provides more predictable, AI-friendly styling patterns
- **Action**: Convert all styled-components to Tailwind utility classes
- **Benefit**: AI can more reliably generate consistent styling

#### 2. Add Recharts for Data Visualization
- **Why**: AI-friendly declarative chart components
- **Action**: Install Recharts and create chart component library
- **Benefit**: Reliable data visualization generation from single prompts

#### 3. Simplify Component Architecture
- **Why**: Reduce complexity for AI reliability
- **Action**: Create standardized slide layouts and component patterns
- **Benefit**: >95% AI generation success rate

#### 4. Add TypeScript Strict Mode
- **Why**: Enhanced AI code generation accuracy
- **Action**: Enable strict TypeScript configuration
- **Benefit**: Prevents AI-generated type errors

## Repository & Deployment Architecture

### Git-to-Vercel Integration Setup
- **Automatic Deployment**: Git push triggers automatic Vercel deployment
- **Vercel Connection**: Connect GitHub repository to Vercel for seamless CI/CD
- **Documentation Separation**: Keep development docs separate from production code
- **Production-Ready Structure**: Optimized for automatic builds and deployments

### Repository Structure
```
presentation_generator_2_0/
├── docs/                           # Development documentation (not deployed)
│   ├── development-notes.md        # Implementation notes
│   ├── ai-generation-guide.md      # AI usage documentation
│   └── component-reference.md      # Component API docs
├── src/                           # Production source code
│   ├── components/                # React components
│   ├── pages/                     # Next.js pages
│   ├── data/                      # Content and data files
│   └── styles/                    # Global styles
├── public/                        # Static assets
├── .vercelignore                  # Exclude docs from deployment
├── vercel.json                    # Vercel configuration
├── package.json                   # Dependencies and scripts
└── README.md                      # Production README
```

### Vercel Configuration
```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm install",
  "devCommand": "npm run dev",
  "cleanUrls": true,
  "trailingSlash": false
}
```

### .vercelignore Setup
```
docs/
*.md
!README.md
development-notes/
design-files/
```

### Site Architecture

### Domain Structure
- **Private Vercel Deployment**: Main site with presentation sections

### Navigation Structure
```
Home (/)
├── Presentations (/presentations)
│ ├── Individual presentations (/presentations/[slug])
│ └── Monthly reports (/presentations/monthly/[month])
└── About (/about)
```

### Content Management
- **Presentations**: MDX files in `/src/data/presentations/`
- **Documentation**: Separate `/docs/` directory (excluded from deployment)
- **No CMS**: File-based content only for AI maintenance

## Implementation Checklist

### Step 1: Clone and Setup Base Template
```bash
git clone https://github.com/whoisryosuke/next-mdx-deck.git presentation_generator_2_0
cd presentation_generator_2_0
npm install
```

### Step 1.5: Setup Repository Structure for Git-to-Vercel Integration
```bash
# Create documentation directory (excluded from deployment)
mkdir docs
mkdir docs/development-notes

# Create Vercel configuration files
touch vercel.json
touch .vercelignore

# Initialize new git repository (separate from template)
rm -rf .git
git init
git remote add origin [YOUR_GITHUB_REPO_URL]
```

#### Configure Vercel Integration Files
- [ ] Create `vercel.json` with Next.js framework configuration
- [ ] Setup `.vercelignore` to exclude documentation from deployment  
- [ ] Move template source files to appropriate structure (`src/` directory)
- [ ] Create `/docs/` directory for development documentation
- [ ] Setup GitHub repository and connect to Vercel
- [ ] Configure automatic deployment on git push

### Step 2: AI Optimization Modifications

#### A. Replace Styled Components with Tailwind CSS
- [ ] Install Tailwind CSS: `npm install -D tailwindcss postcss autoprefixer`
- [ ] Initialize Tailwind: `npx tailwindcss init -p`
- [ ] Configure `tailwind.config.js` for optimal AI patterns
- [ ] Convert `/components` styled-components to Tailwind utility classes
- [ ] Remove styled-components dependency
- [ ] Test presentation mode still functions correctly

#### B. Add Recharts for Data Visualization
- [ ] Install Recharts: `npm install recharts`
- [ ] Create `/components/charts/` directory
- [ ] Build AI-friendly chart components: LineChart, BarChart, PieChart
- [ ] Add chart examples to sample MDX files
- [ ] Document chart component APIs for AI use

#### C. Enhance TypeScript Configuration
- [ ] Enable TypeScript strict mode in `tsconfig.json`
- [ ] Add comprehensive type definitions for all components
- [ ] Create interfaces for presentation data structures
- [ ] Add type safety for MDX components

#### D. Simplify Component Architecture
- [ ] Create standardized slide layout components
- [ ] Simplify MDXProvider component mapping
- [ ] Document component usage patterns for AI
- [ ] Remove complex animations that could confuse AI

### Step 3: Content Structure Setup
- [ ] Create `/src/data/presentations/` directory
- [ ] Set up monthly folder structure (`/src/data/presentations/2024-07/`, `/src/data/presentations/2024-08/`, etc.)
- [ ] Create presentation template MDX files
- [ ] Add sample BuilderTrend data integration

### Step 4: Git-to-Vercel Integration Setup
- [ ] Create GitHub repository for the project
- [ ] Connect GitHub repository to Vercel
- [ ] Configure automatic deployment settings in Vercel dashboard
- [ ] Test deployment pipeline with initial commit
- [ ] Setup private Vercel deployment
- [ ] Verify SSL certificate and DNS configuration

### Step 5: AI-Friendly Documentation
- [ ] Create `/docs/development-notes.md` with implementation details
- [ ] Create `/docs/ai-generation-guide.md` with AI usage instructions
- [ ] Create `/docs/component-reference.md` with component APIs
- [ ] Update production README.md with user-facing information
- [ ] Document deployment workflow and git integration

### Step 6: Deploy and Test
- [ ] Test git push → Vercel automatic deployment
- [ ] Verify documentation is excluded from production build
- [ ] Test AI generation capabilities
- [ ] Validate >95% AI reliability target
- [ ] Confirm private deployment and SSL work correctly

## Success Criteria

### AI Reliability Targets
- **>95% Success Rate**: AI can generate complete presentations without breaking design/functionality
- **Single-Prompt Generation**: Complete presentations created from one AI prompt
- **Zero Design Breaks**: AI-generated content maintains visual consistency
- **Fast Generation**: Presentations created in under 30 seconds

### Performance Requirements
- **Lighthouse Score**: >90 for Performance, Accessibility, Best Practices, SEO
- **Load Time**: <2 seconds for initial page load
- **Build Time**: <60 seconds for complete site build

## Technical Specifications

### Dependencies to Add
```json
{
  "tailwindcss": "^3.4.0",
  "postcss": "^8.4.0",
  "autoprefixer": "^10.4.0", 
  "recharts": "^2.8.0"
}
```

### Dependencies to Remove
```json
{
  "styled-components": "remove",
  "@emotion/styled": "remove (if present)"
}
```

### TypeScript Configuration Updates
```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitReturns": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}
```

## Git-to-Vercel Deployment Configuration

### Vercel Project Settings
- **Framework Preset**: Next.js
- **Build Command**: `npm run build` (auto-detected)
- **Output Directory**: `.next` (auto-detected)
- **Install Command**: `npm install` (auto-detected)
- **Root Directory**: `.` (project root)

### Automatic Deployment Triggers
- **Production Branch**: `main` (auto-deploy on push)
- **Preview Branches**: All other branches (auto-deploy for testing)
- **Pull Request Previews**: Enabled for review workflows

### Domain Configuration
- **Primary Domain**: Private Vercel deployment (auto-generated URL)
- **SSL**: Automatic Let's Encrypt certificate
- **DNS**: Vercel auto-configured

### Environment Variables (Vercel Dashboard)
```env
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=[auto-generated-vercel-url]
VERCEL_URL=[auto-generated]
```

### GitHub Integration Requirements
- **Repository Access**: Vercel GitHub app installed
- **Branch Protection**: Optional (recommended for `main` branch)
- **Deployment Status**: GitHub status checks enabled
- **Preview URLs**: Automatic comment on PRs with preview links