# Presentation Generator 2.0

AI-optimized presentation generator built with Next.js, MDX, and React. Create beautiful, data-driven presentations from a single prompt.

## Features

- 🤖 **AI-Optimized**: Generate complete presentations from single prompts
- 📊 **Data Visualizations**: Built-in charts (Line, Bar, Pie) with Recharts
- 🎨 **Modern Design**: Tailwind CSS with dark mode support
- 📱 **Responsive**: Works on all devices with touch/swipe support
- 👨‍💻 **Presentation Mode**: Speaker notes and slide preview (Alt+P)
- ⚡ **Fast**: Next.js with automatic code splitting
- 🔧 **TypeScript**: Full type safety with strict mode

## Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
# Visit http://localhost:3000
```

### Building

```bash
npm run build
npm run start  # Test production build
```

## Creating Presentations

### Basic Structure

Create MDX files in `src/pages/` or `src/data/presentations/`:

```mdx
import { TitleSlide, ContentSlide, ChartSlide } from '@/components/layouts'
import { LineChart } from '@/components/charts'

<SlidePage>

<TitleSlide 
  title="My Presentation" 
  subtitle="Subtitle here"
  author="Your Name"
  date="Today"
/>

---

<ContentSlide title="Introduction">

Your content here...

</ContentSlide>

---

<ChartSlide 
  title="Data Visualization"
  chart={
    <LineChart
      data={[
        { name: 'Jan', value: 100 },
        { name: 'Feb', value: 120 }
      ]}
      dataKey="value"
    />
  }
/>

</SlidePage>
```

### Navigation

- **Next slide**: Right arrow, Space, or Enter
- **Previous slide**: Left arrow
- **Presentation mode**: Alt+P
- **Touch devices**: Swipe left/right

## Available Components

### Layout Components

- `TitleSlide` - Title/cover slides
- `ContentSlide` - General content (center/left/two-column)
- `ChartSlide` - Data visualizations
- `BulletSlide` - Bullet or numbered lists

### Chart Components

- `LineChart` - Trends over time
- `BarChart` - Categorical comparisons
- `PieChart` - Proportions and percentages

### Utility Components

- `SpeakerNotes` - Notes visible only in presentation mode
- `Steps/Step` - Reveal content incrementally
- `Cover` - Centered content wrapper

## AI Generation

Generate complete presentations with prompts like:

```
Create a monthly report presentation with:
- Title slide "July 2024 Report"
- Executive summary with key metrics
- Line chart showing revenue trend
- Bullet points of achievements
- Next steps slide
```

See `/docs/ai-generation-guide.md` for detailed instructions.

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy with default settings

### Static Export

```bash
npm run build
npm run export
# Deploy contents of 'out' folder
```

## Configuration

### Site Settings

Edit `src/site.config.js`:

```js
export const siteConfig = {
  name: 'Your Name',
  title: 'Presentation Title',
  date: 'Date',
  author: {
    url: 'https://your-site.com'
  }
}
```

### Styling

- Edit `src/styles/globals.css` for global styles
- Use Tailwind classes for component styling
- CSS variables for theming

## Documentation

- `/docs/ai-generation-guide.md` - AI usage guide
- `/docs/component-reference.md` - Component API docs
- `/docs/development-notes.md` - Technical details

## License

MIT