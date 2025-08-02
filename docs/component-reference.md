# Component Reference

## Layout Components

### TitleSlide

Creates a centered title slide with optional subtitle, author, and date.

**Props:**
- `title` (string, required): Main title text
- `subtitle` (string): Subtitle text
- `author` (string): Author name
- `date` (string): Presentation date

**Example:**
```jsx
<TitleSlide 
  title="Q3 2024 Results" 
  subtitle="Financial Performance Review"
  author="Jane Smith"
  date="October 15, 2024"
/>
```

### ContentSlide

Flexible content slide with multiple layout options.

**Props:**
- `title` (string): Slide heading
- `children` (ReactNode): Slide content
- `layout` (string): 'center' | 'left' | 'two-column'

**Example:**
```jsx
<ContentSlide title="Market Analysis" layout="two-column">
  <div>
    ### Opportunities
    - Growing market demand
    - New technology adoption
  </div>
  <div>
    ### Challenges
    - Increased competition
    - Supply chain issues
  </div>
</ContentSlide>
```

### ChartSlide

Optimized layout for data visualizations.

**Props:**
- `title` (string): Slide heading
- `chart` (ReactNode): Chart component
- `description` (string): Optional description below chart

**Example:**
```jsx
<ChartSlide 
  title="Revenue Growth"
  description="Year-over-year comparison"
  chart={<LineChart data={revenueData} dataKey="revenue" />}
/>
```

### BulletSlide

Creates formatted bullet or numbered lists.

**Props:**
- `title` (string): Slide heading
- `bullets` (string[]): Array of bullet points
- `numbered` (boolean): Use numbers instead of bullets

**Example:**
```jsx
<BulletSlide 
  title="Action Items"
  bullets={[
    'Complete market research',
    'Update project timeline',
    'Schedule stakeholder meeting'
  ]}
  numbered={true}
/>
```

## Chart Components

### LineChart

Displays trends over time with a line graph.

**Props:**
- `data` (array, required): Array of {name, value} objects
- `dataKey` (string, required): Key for y-axis values
- `xAxisKey` (string): Key for x-axis labels (default: 'name')
- `color` (string): Line color (default: '#0070f3')
- `height` (number): Chart height in pixels (default: 400)
- `title` (string): Chart title
- `showGrid` (boolean): Show grid lines (default: true)
- `showLegend` (boolean): Show legend (default: true)
- `strokeWidth` (number): Line thickness (default: 2)

**Example:**
```jsx
<LineChart
  data={[
    { month: 'Jan', sales: 4000 },
    { month: 'Feb', sales: 4500 },
    { month: 'Mar', sales: 5200 }
  ]}
  dataKey="sales"
  xAxisKey="month"
  color="#0070f3"
  title="Monthly Sales Trend"
/>
```

### BarChart

Displays categorical comparisons with bars.

**Props:**
- `data` (array, required): Array of {name, value} objects
- `dataKey` (string, required): Key for bar values
- `xAxisKey` (string): Key for x-axis labels (default: 'name')
- `color` (string): Bar color (default: '#0070f3')
- `height` (number): Chart height (default: 400)
- `title` (string): Chart title
- `showGrid` (boolean): Show grid lines (default: true)
- `showLegend` (boolean): Show legend (default: true)
- `barSize` (number): Bar width (default: 40)

**Example:**
```jsx
<BarChart
  data={[
    { product: 'Product A', units: 120 },
    { product: 'Product B', units: 80 },
    { product: 'Product C', units: 150 }
  ]}
  dataKey="units"
  xAxisKey="product"
  color="#00d9ff"
  title="Units Sold by Product"
/>
```

### PieChart

Shows proportions and percentages.

**Props:**
- `data` (array, required): Array of {name, value} objects
- `colors` (array): Array of colors for slices
- `height` (number): Chart height (default: 400)
- `title` (string): Chart title
- `showLegend` (boolean): Show legend (default: true)
- `innerRadius` (number): For donut charts (default: 0)
- `outerRadius` (number): Pie size (default: 120)

**Example:**
```jsx
<PieChart
  data={[
    { name: 'Desktop', value: 45 },
    { name: 'Mobile', value: 35 },
    { name: 'Tablet', value: 20 }
  ]}
  title="Device Usage Distribution"
  colors={['#0070f3', '#00d9ff', '#ff0080']}
/>
```

## Animation Components

### Step

Reveals content incrementally within a slide.

**Props:**
- `children` (ReactNode): Content to reveal
- `order` (number): Step order (auto-assigned when used with Steps)

### Steps

Container for Step components, handles reveal order.

**Props:**
- `children` (ReactNode): Step components

**Example:**
```jsx
<Steps>
  <Step>First point appears</Step>
  <Step>Then this appears</Step>
  <Step>Finally this appears</Step>
</Steps>
```

## Utility Components

### SpeakerNotes

Adds presenter notes (only visible in speaker mode).

**Props:**
- `children` (ReactNode): Note content

**Example:**
```jsx
<SpeakerNotes>
  - Emphasize the revenue growth
  - Mention the new partnership
  - Address questions about timeline
</SpeakerNotes>
```

### Cover

Wrapper for cover/title slides with centered content.

**Props:**
- `children` (ReactNode): Slide content

## Color Palette

Predefined colors for consistency:
- Primary Blue: `#0070f3`
- Cyan: `#00d9ff`
- Pink: `#ff0080`
- Orange: `#ffaa00`
- Green: `#00ff88`

## Typography Classes

Tailwind classes for text styling:
- `.presentation-title`: Large title text (6xl)
- `.presentation-subtitle`: Subtitle text (3xl)
- `.slide-heading`: Section headings (5xl)
- `.slide-text`: Body text (2xl)