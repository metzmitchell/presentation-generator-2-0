# Development Notes - Presentation Generator 2.0

## Project Setup

This project is built on the next-mdx-deck template, heavily modified for AI-optimized presentation generation.

### Key Modifications from Original Template

1. **Styled Components → Tailwind CSS**
   - Removed all styled-components dependencies
   - Implemented Tailwind CSS for predictable, AI-friendly styling
   - Created utility classes for common presentation elements

2. **Added Recharts Integration**
   - Installed Recharts for data visualization
   - Created wrapper components (LineChart, BarChart, PieChart)
   - Optimized props for AI generation

3. **TypeScript Strict Mode**
   - Enabled strict TypeScript checking
   - Added comprehensive type definitions
   - Path aliases for cleaner imports

4. **Simplified Component Architecture**
   - Created standardized slide layouts
   - Reduced component complexity
   - Clear, predictable component APIs

## Project Structure

```
presentation_generator_2_0/
├── src/
│   ├── components/          # React components
│   │   ├── charts/         # Chart components
│   │   └── layouts/        # Slide layout components
│   ├── pages/              # Next.js pages
│   ├── layouts/            # Page layouts
│   ├── context/            # React contexts
│   ├── hooks/              # Custom hooks
│   ├── constants/          # Constants
│   ├── data/               # Presentation content
│   │   └── presentations/  # Monthly folders
│   ├── styles/             # Global styles
│   └── types/              # TypeScript types
├── docs/                   # Documentation (not deployed)
├── public/                 # Static assets
└── initial_notes/          # Original planning docs
```

## Key Features

### 1. MDX-Based Presentations
- Write presentations in MDX (Markdown + JSX)
- Import and use React components directly
- Syntax highlighting for code blocks

### 2. Presentation Modes
- **Slideshow Mode**: Standard presentation view
- **Speaker Mode** (Alt+P): Shows speaker notes and slide preview
- Navigation: Arrow keys, Space, Enter

### 3. AI-Optimized Components
- Standardized props and patterns
- Predictable component behavior
- Clear documentation for AI training

### 4. Responsive Design
- Mobile-friendly presentations
- Touch/swipe support
- Automatic scaling

## Development Workflow

### Local Development
```bash
npm run dev
# Visit http://localhost:3000
```

### Building
```bash
npm run build
npm run start  # Test production build
```

### Creating Presentations

1. Create MDX file in `src/data/presentations/`
2. Import necessary components
3. Use `---` to separate slides
4. Wrap content in `<SlidePage>` component

### Deployment

The project is configured for Vercel deployment:
- Push to GitHub triggers automatic deployment
- Vercel configuration in `vercel.json`
- Documentation excluded via `.vercelignore`

## Component Guidelines

### Creating AI-Friendly Components

1. **Clear Props**: Use descriptive, typed props
2. **Default Values**: Provide sensible defaults
3. **Documentation**: Include JSDoc comments
4. **Examples**: Provide usage examples

### Styling Guidelines

1. Use Tailwind utility classes
2. Avoid inline styles
3. Use CSS variables for theming
4. Maintain dark mode support

## Performance Considerations

1. **Lazy Loading**: Charts are rendered on-demand
2. **Code Splitting**: Next.js automatic code splitting
3. **Image Optimization**: Use Next.js Image component
4. **Bundle Size**: Monitor with `npm run analyze`

## Testing AI Generation

1. Use the template.mdx as a reference
2. Test single-prompt generation
3. Verify all components render correctly
4. Check responsive behavior

## Common Issues & Solutions

### Import Errors
- Ensure all components are imported at the top of MDX files
- Use path aliases (@/components/...)

### Styling Issues
- Check Tailwind classes are applied correctly
- Verify globals.css is imported in _app.js

### Chart Rendering
- Ensure data format matches expected structure
- Check that Recharts is properly installed

### TypeScript Errors
- Run `npm run typecheck` to identify issues
- Update type definitions as needed

## Future Enhancements

1. **Export Features**: PDF/PowerPoint export
2. **Themes**: Multiple color themes
3. **Animations**: More transition effects
4. **Templates**: Industry-specific templates
5. **Live Data**: Real-time data integration

## Maintenance

- Keep dependencies updated
- Monitor Vercel build logs
- Test AI generation regularly
- Update documentation as needed