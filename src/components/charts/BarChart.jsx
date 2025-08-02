import React from 'react';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

/**
 * AI-friendly BarChart component
 * @param {Array} data - Array of data objects
 * @param {string} dataKey - Key for the bar values
 * @param {string} xAxisKey - Key for the x-axis labels (default: 'name')
 * @param {string} color - Bar color (default: '#0070f3')
 * @param {number} height - Chart height in pixels (default: 400)
 * @param {string} title - Optional chart title
 */
export default function BarChart({ 
  data, 
  dataKey, 
  xAxisKey = 'name',
  color = '#0070f3',
  height = 400,
  title,
  showGrid = true,
  showLegend = true,
  barSize = 40
}) {
  return (
    <div className="w-full">
      {title && (
        <h3 className="text-2xl font-bold mb-4 text-center">{title}</h3>
      )}
      <ResponsiveContainer width="100%" height={height}>
        <RechartsBarChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          {showGrid && <CartesianGrid strokeDasharray="3 3" stroke="#374151" />}
          <XAxis 
            dataKey={xAxisKey} 
            stroke="#9CA3AF"
            style={{ fontSize: '14px' }}
          />
          <YAxis 
            stroke="#9CA3AF"
            style={{ fontSize: '14px' }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#1F2937', 
              border: '1px solid #374151',
              borderRadius: '6px'
            }}
            labelStyle={{ color: '#E5E7EB' }}
          />
          {showLegend && <Legend />}
          <Bar 
            dataKey={dataKey} 
            fill={color}
            barSize={barSize}
            radius={[4, 4, 0, 0]}
          />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
}