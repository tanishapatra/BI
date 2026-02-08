import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const TeamPerformanceChart = ({ data, selectedMetric }) => {
  const COLORS = {
    productivity: 'var(--color-primary)',
    quality: 'var(--color-success)',
    efficiency: 'var(--color-accent)',
    collaboration: 'var(--color-secondary)'
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload?.length) {
      return (
        <div className="bg-card border border-border rounded-lg shadow-lg p-3 md:p-4">
          <p className="text-sm font-medium text-foreground mb-2">{label}</p>
          {payload?.map((entry, index) => (
            <div key={index} className="flex items-center justify-between gap-4 mb-1">
              <span className="text-xs text-muted-foreground capitalize">
                {entry?.name}:
              </span>
              <span className="text-sm font-semibold" style={{ color: entry?.color }}>
                {entry?.value}%
              </span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-card rounded-lg border border-border p-4 md:p-5 lg:p-6 shadow-sm">
      <div className="mb-4 md:mb-6">
        <h3 className="text-lg md:text-xl font-heading font-semibold text-foreground mb-1">
          Team Performance Analysis
        </h3>
        <p className="text-xs md:text-sm text-muted-foreground">
          Individual and team performance across multiple dimensions
        </p>
      </div>
      <div className="w-full h-64 md:h-80 lg:h-96" aria-label="Team Performance Bar Chart">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis 
              dataKey="name" 
              tick={{ fill: 'var(--color-muted-foreground)', fontSize: 12 }}
              angle={-45}
              textAnchor="end"
              height={80}
            />
            <YAxis 
              tick={{ fill: 'var(--color-muted-foreground)', fontSize: 12 }}
              domain={[0, 100]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              wrapperStyle={{ paddingTop: '20px' }}
              iconType="circle"
            />
            <Bar 
              dataKey="productivity" 
              fill={COLORS?.productivity} 
              radius={[4, 4, 0, 0]}
              name="Productivity"
            />
            <Bar 
              dataKey="quality" 
              fill={COLORS?.quality} 
              radius={[4, 4, 0, 0]}
              name="Quality"
            />
            <Bar 
              dataKey="efficiency" 
              fill={COLORS?.efficiency} 
              radius={[4, 4, 0, 0]}
              name="Efficiency"
            />
            <Bar 
              dataKey="collaboration" 
              fill={COLORS?.secondary} 
              radius={[4, 4, 0, 0]}
              name="Collaboration"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TeamPerformanceChart;