import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import NavigationBar from '../../components/ui/NavigationBar';
import KPICard from './components/KPICard';
import MetricsChart from './components/MetricsChart';
import ExecutiveSummaryCard from './components/ExecutiveSummaryCard';
import PerformanceScorecard from './components/PerformanceScorecard';
import FilterControls from './components/FilterControls';

const ExecutiveOverview = () => {
  const [dateRange, setDateRange] = useState('q1-2026');
  const [department, setDepartment] = useState('all');
  const [comparisonEnabled, setComparisonEnabled] = useState(false);
  const [lastUpdated, setLastUpdated] = useState('');
  const [activeMetrics, setActiveMetrics] = useState(['revenue', 'customers', 'efficiency']);

  useEffect(() => {
    const updateTimestamp = () => {
      const now = new Date();
      const timeString = now?.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
      });
      setLastUpdated(timeString);
    };
    
    updateTimestamp();
    const interval = setInterval(updateTimestamp, 60000);
    
    return () => clearInterval(interval);
  }, []);

  const kpiData = [
    {
      title: "Total Revenue",
      value: "$12.4M",
      change: 15.3,
      target: 12000000,
      icon: "DollarSign",
      iconColor: "var(--color-success)",
      trend: [45, 52, 48, 61, 58, 65, 72, 68, 75, 82, 78, 85]
    },
    {
      title: "Growth Rate",
      value: "23.8%",
      change: 8.2,
      target: null,
      icon: "TrendingUp",
      iconColor: "var(--color-primary)",
      trend: [30, 35, 38, 42, 45, 48, 52, 55, 58, 62, 65, 68]
    },
    {
      title: "Customer Acquisition",
      value: "2,847",
      change: 12.5,
      target: 3000,
      icon: "Users",
      iconColor: "var(--color-accent)",
      trend: [40, 45, 50, 48, 55, 60, 58, 65, 70, 68, 75, 80]
    },
    {
      title: "Operational Efficiency",
      value: "94.2%",
      change: 5.7,
      target: null,
      icon: "Zap",
      iconColor: "var(--color-warning)",
      trend: [75, 78, 80, 82, 85, 83, 87, 89, 90, 92, 91, 94]
    }
  ];

  const chartData = [
    { period: "Jan", revenue: 980000, customers: 2150, efficiency: 89 },
    { period: "Feb", revenue: 1050000, customers: 2280, efficiency: 91 },
    { period: "Mar", revenue: 1120000, customers: 2420, efficiency: 92 },
    { period: "Apr", revenue: 1180000, customers: 2550, efficiency: 90 },
    { period: "May", revenue: 1250000, customers: 2680, efficiency: 93 },
    { period: "Jun", revenue: 1320000, customers: 2790, efficiency: 94 },
    { period: "Jul", revenue: 1280000, customers: 2650, efficiency: 92 },
    { period: "Aug", revenue: 1350000, customers: 2820, efficiency: 95 },
    { period: "Sep", revenue: 1420000, customers: 2950, efficiency: 94 },
    { period: "Oct", revenue: 1480000, customers: 3080, efficiency: 96 },
    { period: "Nov", revenue: 1550000, customers: 3210, efficiency: 95 },
    { period: "Dec", revenue: 1620000, customers: 3350, efficiency: 97 }
  ];

  const chartMetrics = [
    { key: 'revenue', label: 'Revenue', color: 'var(--color-success)' },
    { key: 'customers', label: 'Customers', color: 'var(--color-primary)' },
    { key: 'efficiency', label: 'Efficiency', color: 'var(--color-accent)' }
  ];

  const criticalAlerts = [
    {
      title: "Q1 Revenue Target Exceeded",
      description: "Revenue performance surpassed quarterly target by 15.3%, driven by strong enterprise sales and market expansion initiatives.",
      priority: "high",
      value: "+$1.6M above target"
    },
    {
      title: "Customer Churn Rate Increase",
      description: "Monthly churn rate increased to 3.2% from 2.8%, requiring immediate attention to retention strategies and customer success programs.",
      priority: "high",
      value: "3.2% churn rate"
    },
    {
      title: "Operational Cost Optimization",
      description: "Successfully reduced operational costs by 12% through process automation and strategic vendor negotiations.",
      priority: "medium",
      value: "$480K savings"
    }
  ];

  const topPerformers = [
    {
      title: "Sales Team - West Region",
      description: "Achieved 142% of quarterly quota with $3.8M in closed deals, leading all regional teams in performance metrics.",
      priority: "low",
      value: "142% quota attainment"
    },
    {
      title: "Product Launch Success",
      description: "New product line generated $2.1M in first quarter, exceeding launch projections by 68% with strong market reception.",
      priority: "low",
      value: "$2.1M revenue"
    },
    {
      title: "Customer Satisfaction Score",
      description: "NPS score improved to 72 from 65, reflecting enhanced customer experience initiatives and support quality improvements.",
      priority: "low",
      value: "NPS: 72 (+7 points)"
    }
  ];

  const strategicInitiatives = [
    {
      title: "Digital Transformation Phase 2",
      description: "Cloud migration project 78% complete, on track for Q2 completion with minimal business disruption and strong adoption rates.",
      priority: "medium",
      value: "78% complete"
    },
    {
      title: "Market Expansion - APAC",
      description: "Asia-Pacific expansion launched successfully in 3 countries, establishing partnerships with 12 regional distributors.",
      priority: "low",
      value: "3 markets launched"
    },
    {
      title: "Sustainability Initiative",
      description: "Carbon footprint reduction program achieved 25% reduction target ahead of schedule through renewable energy adoption.",
      priority: "low",
      value: "25% reduction achieved"
    }
  ];

  const departmentPerformance = [
    {
      name: "Sales",
      metric: "Revenue Generated",
      current: 12400000,
      target: 12000000,
      icon: "DollarSign",
      color: "var(--color-success)"
    },
    {
      name: "Marketing",
      metric: "Lead Generation",
      current: 8750,
      target: 10000,
      icon: "Target",
      color: "var(--color-primary)"
    },
    {
      name: "Operations",
      metric: "Efficiency Score",
      current: 94,
      target: 95,
      icon: "Settings",
      color: "var(--color-accent)"
    },
    {
      name: "Customer Success",
      metric: "Satisfaction Score",
      current: 4.6,
      target: 4.5,
      icon: "Heart",
      color: "var(--color-error)"
    },
    {
      name: "Product Development",
      metric: "Feature Releases",
      current: 28,
      target: 32,
      icon: "Package",
      color: "var(--color-warning)"
    }
  ];

  const handleRefresh = () => {
    const now = new Date();
    const timeString = now?.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
    setLastUpdated(timeString);
  };

  const handleMetricToggle = (metricKey) => {
    setActiveMetrics(prev => 
      prev.includes(metricKey) 
        ? prev.filter(key => key !== metricKey)
        : [...prev, metricKey]
    );
  };

  return (
    <>
      <Helmet>
        <title>Executive Overview - AnalyticsPro</title>
        <meta 
          name="description" 
          content="Strategic KPI monitoring and high-level business performance insights for C-level leadership and data-driven decision making" 
        />
      </Helmet>
      <div className="min-h-screen bg-background">
        <NavigationBar />
        
        <main className="pt-20 md:pt-24 px-4 md:px-6 lg:px-8 pb-8 md:pb-12">
          <div className="max-w-[1600px] mx-auto">
            <div className="mb-6 md:mb-8">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-2">
                Executive Overview
              </h1>
              <p className="text-sm md:text-base text-muted-foreground">
                Strategic KPI monitoring and business performance insights for leadership decision-making
              </p>
            </div>

            <FilterControls
              dateRange={dateRange}
              onDateRangeChange={setDateRange}
              department={department}
              onDepartmentChange={setDepartment}
              comparisonEnabled={comparisonEnabled}
              onComparisonToggle={() => setComparisonEnabled(!comparisonEnabled)}
              onRefresh={handleRefresh}
              lastUpdated={lastUpdated}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
              {kpiData?.map((kpi, index) => (
                <KPICard key={index} {...kpi} />
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 mb-6 md:mb-8">
              <div className="lg:col-span-8">
                <MetricsChart 
                  data={chartData} 
                  metrics={chartMetrics}
                  onMetricToggle={handleMetricToggle}
                />
              </div>

              <div className="lg:col-span-4 space-y-4 md:space-y-6">
                <ExecutiveSummaryCard
                  title="Critical Alerts"
                  items={criticalAlerts}
                  icon="AlertCircle"
                  iconColor="var(--color-error)"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
              <ExecutiveSummaryCard
                title="Top Performers"
                items={topPerformers}
                icon="Award"
                iconColor="var(--color-success)"
              />

              <ExecutiveSummaryCard
                title="Strategic Initiatives"
                items={strategicInitiatives}
                icon="Target"
                iconColor="var(--color-primary)"
              />
            </div>

            <PerformanceScorecard departments={departmentPerformance} />
          </div>
        </main>
      </div>
    </>
  );
};

export default ExecutiveOverview;