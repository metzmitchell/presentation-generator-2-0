// Chart data types
export interface ChartDataPoint {
  name: string;
  value: number;
  [key: string]: any;
}

export interface LineChartProps {
  data: ChartDataPoint[];
  dataKey: string;
  xAxisKey?: string;
  color?: string;
  height?: number;
  title?: string;
  showGrid?: boolean;
  showLegend?: boolean;
  strokeWidth?: number;
}

export interface BarChartProps {
  data: ChartDataPoint[];
  dataKey: string;
  xAxisKey?: string;
  color?: string;
  height?: number;
  title?: string;
  showGrid?: boolean;
  showLegend?: boolean;
  barSize?: number;
}

export interface PieChartProps {
  data: ChartDataPoint[];
  colors?: string[];
  height?: number;
  title?: string;
  showLegend?: boolean;
  innerRadius?: number;
  outerRadius?: number;
}

// Presentation types
export interface PresentationData {
  id: string;
  title: string;
  date: string;
  slides: SlideData[];
}

export interface SlideData {
  id: string;
  content: string;
  notes?: string;
  type?: 'title' | 'content' | 'chart' | 'image';
}

// Component props
export interface SlideProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export interface CoverProps {
  children: React.ReactNode;
}

export interface SpeakerNotesProps {
  children: React.ReactNode;
}

export interface StepProps {
  order?: number;
  children: React.ReactNode;
}

export interface StepsProps {
  children: React.ReactNode;
}