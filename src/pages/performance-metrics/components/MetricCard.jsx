import React from 'react';
import Icon from '../../../components/AppIcon';

const MetricCard = ({ 
  title, 
  value, 
  unit, 
  trend, 
  trendValue, 
  target, 
  targetVariance,
  iconName,
  iconColor 
}) => {
  const getTrendColor = () => {
    if (trend === 'up') return 'text-success';
    if (trend === 'down') return 'text-error';
    return 'text-muted-foreground';
  };

  const getTrendIcon = () => {
    if (trend === 'up') return 'TrendingUp';
    if (trend === 'down') return 'TrendingDown';
    return 'Minus';
  };

  const getVarianceColor = () => {
    if (targetVariance > 0) return 'text-success';
    if (targetVariance < 0) return 'text-error';
    return 'text-muted-foreground';
  };

  return (
    <div className="bg-card rounded-lg border border-border p-4 md:p-5 lg:p-6 shadow-sm hover:shadow-md transition-smooth">
      <div className="flex items-start justify-between mb-3 md:mb-4">
        <div className="flex-1">
          <p className="text-xs md:text-sm text-muted-foreground font-medium mb-1">
            {title}
          </p>
          <div className="flex items-baseline gap-2">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-semibold text-foreground">
              {value}
            </h3>
            {unit && (
              <span className="text-sm md:text-base text-muted-foreground">
                {unit}
              </span>
            )}
          </div>
        </div>
        <div 
          className="w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: `${iconColor}15` }}
        >
          <Icon name={iconName} size={20} color={iconColor} />
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className={`flex items-center gap-1.5 ${getTrendColor()}`}>
          <Icon name={getTrendIcon()} size={16} />
          <span className="text-xs md:text-sm font-medium">
            {trendValue}
          </span>
        </div>

        {target && (
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">
              Target: {target}
            </span>
            <span className={`text-xs font-medium ${getVarianceColor()}`}>
              ({targetVariance > 0 ? '+' : ''}{targetVariance}%)
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default MetricCard;