import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const MetricsChart = ({ data, metrics, onMetricToggle }) => {
  const [activeMetrics, setActiveMetrics] = useState(
    metrics?.reduce((acc, metric) => ({ ...acc, [metric?.key]: true }), {})
  );

  const handleLegendClick = (key) => {
    const newActiveMetrics = { ...activeMetrics, [key]: !activeMetrics?.[key] };
    setActiveMetrics(newActiveMetrics);
    if (onMetricToggle) {
      onMetricToggle(newActiveMetrics);
    }
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload?.length) {
      return (
        <div className="bg-card border border-border rounded-lg p-3 md:p-4 shadow-lg">
          <p className="text-sm font-medium text-foreground mb-2">{label}</p>
          {payload?.map((entry, index) => (
            <div key={index} className="flex items-center justify-between gap-4 mb-1">
              <div className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: entry?.color }}
                />
                <span className="text-xs text-muted-foreground">{entry?.name}</span>
              </div>
              <span className="text-sm font-medium text-foreground">
                {entry?.value?.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-card rounded-xl p-4 md:p-6 shadow-sm border border-border">
      <div className="flex items-center justify-between mb-4 md:mb-6 flex-wrap gap-3">
        <h3 className="text-lg md:text-xl font-heading font-semibold text-foreground">
          Performance Trends
        </h3>
        <div className="flex items-center gap-2 flex-wrap">
          {metrics?.map((metric) => (
            <button
              key={metric?.key}
              onClick={() => handleLegendClick(metric?.key)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-smooth ${
                activeMetrics?.[metric?.key]
                  ? 'bg-primary/10 text-primary' :'bg-muted text-muted-foreground'
              }`}
            >
              <div 
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: metric?.color }}
              />
              {metric?.label}
            </button>
          ))}
        </div>
      </div>
      <div className="w-full h-64 md:h-80 lg:h-96">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis 
              dataKey="period" 
              stroke="var(--color-muted-foreground)"
              style={{ fontSize: '12px' }}
            />
            <YAxis 
              stroke="var(--color-muted-foreground)"
              style={{ fontSize: '12px' }}
            />
            <Tooltip content={<CustomTooltip />} />
            {metrics?.map((metric) => (
              activeMetrics?.[metric?.key] && (
                <Line
                  key={metric?.key}
                  type="monotone"
                  dataKey={metric?.key}
                  name={metric?.label}
                  stroke={metric?.color}
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              )
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MetricsChart;