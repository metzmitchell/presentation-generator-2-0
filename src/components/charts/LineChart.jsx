import React from 'react';
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

/**
 * AI-friendly LineChart component
 * @param {Array} data - Array of data objects with x and y values
 * @param {string} dataKey - Key for the y-axis data
 * @param {string} xAxisKey - Key for the x-axis data (default: 'name')
 * @param {string} color - Line color (default: '#0070f3')
 * @param {number} height - Chart height in pixels (default: 400)
 * @param {string} title - Optional chart title
 */
export default function LineChart({ 
  data, 
  dataKey, 
  xAxisKey = 'name',
  color = '#0070f3',
  height = 400,
  title,
  showGrid = true,
  showLegend = true,
  strokeWidth = 2
}) {
  return (
    <div className="w-full">
      {title && (
        <h3 className="text-2xl font-bold mb-4 text-center">{title}</h3>
      )}
      <ResponsiveContainer width="100%" height={height}>
        <RechartsLineChart
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
          <Line 
            type="monotone" 
            dataKey={dataKey} 
            stroke={color} 
            strokeWidth={strokeWidth}
            activeDot={{ r: 8 }} 
          />
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  );
}