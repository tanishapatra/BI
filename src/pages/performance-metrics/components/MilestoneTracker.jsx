import React from 'react';
import Icon from '../../../components/AppIcon';

const MilestoneTracker = ({ milestones }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-success/10 text-success border-success/20';
      case 'in-progress':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'at-risk':
        return 'bg-warning/10 text-warning border-warning/20';
      case 'delayed':
        return 'bg-error/10 text-error border-error/20';
      default:
        return 'bg-muted text-muted-foreground border-border';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return 'CheckCircle2';
      case 'in-progress':
        return 'Clock';
      case 'at-risk':
        return 'AlertTriangle';
      case 'delayed':
        return 'XCircle';
      default:
        return 'Circle';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="bg-card rounded-lg border border-border p-4 md:p-5 lg:p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <div>
          <h3 className="text-lg md:text-xl font-heading font-semibold text-foreground mb-1">
            Upcoming Milestones
          </h3>
          <p className="text-xs md:text-sm text-muted-foreground">
            Key deliverables and deadlines
          </p>
        </div>
        <Icon name="Target" size={24} color="var(--color-primary)" />
      </div>
      <div className="space-y-3 md:space-y-4">
        {milestones?.map((milestone) => (
          <div 
            key={milestone?.id}
            className="border border-border rounded-lg p-3 md:p-4 hover:shadow-md transition-smooth"
          >
            <div className="flex items-start gap-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 border ${getStatusColor(milestone?.status)}`}>
                <Icon name={getStatusIcon(milestone?.status)} size={20} />
              </div>

              <div className="flex-1 min-w-0">
                <h4 className="text-sm md:text-base font-medium text-foreground mb-1">
                  {milestone?.title}
                </h4>
                <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
                  {milestone?.description}
                </p>

                <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Icon name="Calendar" size={14} />
                    <span>{formatDate(milestone?.dueDate)}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Icon name="Users" size={14} />
                    <span>{milestone?.assignedTo}</span>
                  </div>
                </div>

                <div className="mt-3">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs text-muted-foreground">Progress</span>
                    <span className="text-xs font-medium text-foreground">
                      {milestone?.progress}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full transition-all duration-300"
                      style={{ width: `${milestone?.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MilestoneTracker;