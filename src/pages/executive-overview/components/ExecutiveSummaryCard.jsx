import React from 'react';
import Icon from '../../../components/AppIcon';

const ExecutiveSummaryCard = ({ title, items, icon, iconColor }) => {
  return (
    <div className="bg-card rounded-xl p-4 md:p-6 shadow-sm border border-border">
      <div className="flex items-center gap-3 mb-4">
        <div 
          className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: `${iconColor}15` }}
        >
          <Icon name={icon} size={20} color={iconColor} />
        </div>
        <h3 className="text-base md:text-lg font-heading font-semibold text-foreground">
          {title}
        </h3>
      </div>
      <div className="space-y-3">
        {items?.map((item, index) => (
          <div 
            key={index}
            className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-smooth"
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
              item?.priority === 'high' ? 'bg-error/10' :
              item?.priority === 'medium'? 'bg-warning/10' : 'bg-success/10'
            }`}>
              <Icon 
                name={
                  item?.priority === 'high' ? 'AlertCircle' :
                  item?.priority === 'medium'? 'AlertTriangle' : 'CheckCircle'
                }
                size={16}
                color={
                  item?.priority === 'high' ? 'var(--color-error)' :
                  item?.priority === 'medium' ? 'var(--color-warning)' :
                  'var(--color-success)'
                }
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground mb-1">
                {item?.title}
              </p>
              <p className="text-xs text-muted-foreground line-clamp-2">
                {item?.description}
              </p>
              {item?.value && (
                <p className="text-sm font-semibold text-primary mt-2">
                  {item?.value}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExecutiveSummaryCard;