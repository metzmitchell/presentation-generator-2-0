import React from 'react';
import { PieChart as RechartsPieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

/**
 * AI-friendly PieChart component
 * @param {Array} data - Array of data objects with name and value
 * @param {Array} colors - Array of colors for pie slices
 * @param {number} height - Chart height in pixels (default: 400)
 * @param {string} title - Optional chart title
 */
export default function PieChart({ 
  data, 
  colors = ['#0070f3', '#ff0080', '#00d9ff', '#ffaa00', '#00ff88'],
  height = 400,
  title,
  showLegend = true,
  innerRadius = 0,
  outerRadius = 120
}) {
  return (
    <div className="w-full">
      {title && (
        <h3 className="text-2xl font-bold mb-4 text-center">{title}</h3>
      )}
      <ResponsiveContainer width="100%" height={height}>
        <RechartsPieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            outerRadius={outerRadius}
            innerRadius={innerRadius}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#1F2937', 
              border: '1px solid #374151',
              borderRadius: '6px'
            }}
            labelStyle={{ color: '#E5E7EB' }}
          />
          {showLegend && <Legend />}
        </RechartsPieChart>
      </ResponsiveContainer>
    </div>
  );
}