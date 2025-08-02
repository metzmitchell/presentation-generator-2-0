# AI Generation Guide for Presentation Generator 2.0

## Overview

This presentation generator is optimized for AI-driven content creation. You can generate complete, visually appealing presentations from a single prompt using standardized components and layouts.

## Quick Start - Single Prompt Generation

To generate a complete presentation, use this prompt structure:

```
Create a presentation about [TOPIC] with:
- Title slide with title "[TITLE]" and subtitle "[SUBTITLE]"
- Executive summary slide with key points
- Data visualization showing [DATA DESCRIPTION]
- Bullet points covering [KEY TOPICS]
- Conclusion slide
```

## Available Components

### Layout Components

1. **TitleSlide** - For presentation titles and section breaks
   ```jsx
   <TitleSlide 
     title="Main Title" 
     subtitle="Optional Subtitle"
     author="Author Name"
     date="Date"
   />
   ```

2. **ContentSlide** - For general content
   ```jsx
   <ContentSlide title="Slide Title" layout="center|left|two-column">
     Your content here
   </ContentSlide>
   ```

3. **ChartSlide** - For data visualizations
   ```jsx
   <ChartSlide 
     title="Chart Title"
     description="Optional description"
     chart={<LineChart ... />}
   />
   ```

4. **BulletSlide** - For bullet points
   ```jsx
   <BulletSlide 
     title="Key Points"
     bullets={['Point 1', 'Point 2', 'Point 3']}
     numbered={false}
   />
   ```

### Chart Components

1. **LineChart** - For trends over time
   ```jsx
   <LineChart
     data={[
       { name: 'Jan', value: 100 },
       { name: 'Feb', value: 120 }
     ]}
     dataKey="value"
     color="#0070f3"
     title="Optional Title"
   />
   ```

2. **BarChart** - For comparisons
   ```jsx
   <BarChart
     data={[
       { name: 'Category A', value: 50 },
       { name: 'Category B', value: 80 }
     ]}
     dataKey="value"
     color="#00d9ff"
   />
   ```

3. **PieChart** - For proportions
   ```jsx
   <PieChart
     data={[
       { name: 'Segment 1', value: 30 },
       { name: 'Segment 2', value: 70 }
     ]}
   />
   ```

## Best Practices for AI Generation

### 1. Use Standard Patterns

Always structure presentations with:
- Opening title slide
- Content slides with clear sections
- Data visualizations where appropriate
- Summary/conclusion slide

### 2. Data Format

When providing data for charts:
- Use consistent object structure: `{ name: 'Label', value: number }`
- Keep data arrays concise (5-10 items max)
- Use meaningful labels

### 3. Slide Separation

Always use `---` between slides:
```mdx
<TitleSlide ... />

---

<ContentSlide ... />
```

### 4. Import Statements

Always include necessary imports at the top:
```jsx
import { TitleSlide, ContentSlide, ChartSlide, BulletSlide } from '@/components/layouts'
import { LineChart, BarChart, PieChart } from '@/components/charts'
```

## Common Patterns

### Monthly Report Pattern
```mdx
<TitleSlide title="Month Year Report" subtitle="Department Name" />
---
<ContentSlide title="Executive Summary">Key metrics here</ContentSlide>
---
<ChartSlide title="Performance Trends" chart={<LineChart ... />} />
---
<BulletSlide title="Achievements" bullets={[...]} />
---
<ContentSlide title="Next Steps">Future plans</ContentSlide>
```

### Project Update Pattern
```mdx
<TitleSlide title="Project Name Update" date="Current Date" />
---
<ContentSlide title="Status Overview">Current status</ContentSlide>
---
<ChartSlide title="Progress Metrics" chart={<BarChart ... />} />
---
<BulletSlide title="Completed Tasks" bullets={[...]} />
---
<BulletSlide title="Upcoming Milestones" bullets={[...]} />
```

## Tips for Reliable AI Generation

1. **Be Specific**: Provide clear data values and labels
2. **Use Templates**: Reference the template.mdx file structure
3. **Keep It Simple**: Avoid complex animations or custom styling
4. **Test Incrementally**: Generate one slide at a time if needed
5. **Consistent Styling**: Use predefined color values (#0070f3, #00d9ff, #ff0080)

## Troubleshooting

- **Import Errors**: Ensure all components are imported at the top
- **Data Format Issues**: Check that data arrays match expected structure
- **Layout Problems**: Use standard layout options (center, left, two-column)
- **Chart Rendering**: Verify data has both name and value properties