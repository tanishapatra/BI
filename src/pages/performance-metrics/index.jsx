import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import NavigationBar from '../../components/ui/NavigationBar';
import Select from '../../components/ui/Select';
import Button from '../../components/ui/Button';

import MetricCard from './components/MetricCard';
import TeamPerformanceChart from './components/TeamPerformanceChart';
import TeamLeaderboard from './components/TeamLeaderboard';
import PerformanceDistribution from './components/PerformanceDistribution';
import MilestoneTracker from './components/MilestoneTracker';
import ResourceAllocationMatrix from './components/ResourceAllocationMatrix';

const PerformanceMetrics = () => {
  const [selectedTeam, setSelectedTeam] = useState('engineering');
  const [selectedPeriod, setSelectedPeriod] = useState('monthly');
  const [benchmarkEnabled, setBenchmarkEnabled] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const teamOptions = [
  { value: 'engineering', label: 'Engineering Team' },
  { value: 'sales', label: 'Sales Team' },
  { value: 'marketing', label: 'Marketing Team' },
  { value: 'support', label: 'Support Team' },
  { value: 'product', label: 'Product Team' }];


  const periodOptions = [
  { value: 'daily', label: 'Daily View' },
  { value: 'weekly', label: 'Weekly View' },
  { value: 'monthly', label: 'Monthly View' },
  { value: 'quarterly', label: 'Quarterly View' }];


  const performanceMetrics = [
  {
    title: 'Productivity Score',
    value: '87',
    unit: '%',
    trend: 'up',
    trendValue: '+5.2% vs last period',
    target: '85',
    targetVariance: 2.4,
    iconName: 'TrendingUp',
    iconColor: 'var(--color-primary)'
  },
  {
    title: 'Utilization Rate',
    value: '78',
    unit: '%',
    trend: 'up',
    trendValue: '+3.1% vs last period',
    target: '75',
    targetVariance: 4.0,
    iconName: 'Activity',
    iconColor: 'var(--color-success)'
  },
  {
    title: 'Quality Score',
    value: '92',
    unit: '%',
    trend: 'down',
    trendValue: '-1.8% vs last period',
    target: '95',
    targetVariance: -3.2,
    iconName: 'Award',
    iconColor: 'var(--color-accent)'
  },
  {
    title: 'Goal Achievement',
    value: '84',
    unit: '%',
    trend: 'up',
    trendValue: '+7.5% vs last period',
    target: '80',
    targetVariance: 5.0,
    iconName: 'Target',
    iconColor: 'var(--color-secondary)'
  }];


  const teamPerformanceData = [
  { name: 'Sarah Chen', productivity: 92, quality: 95, efficiency: 88, collaboration: 90 },
  { name: 'Michael Rodriguez', productivity: 88, quality: 91, efficiency: 85, collaboration: 87 },
  { name: 'Emily Watson', productivity: 85, quality: 89, efficiency: 90, collaboration: 92 },
  { name: 'David Kim', productivity: 90, quality: 87, efficiency: 86, collaboration: 88 },
  { name: 'Jessica Taylor', productivity: 87, quality: 93, efficiency: 89, collaboration: 91 },
  { name: 'Robert Johnson', productivity: 83, quality: 85, efficiency: 87, collaboration: 84 },
  { name: 'Amanda Lee', productivity: 91, quality: 90, efficiency: 92, collaboration: 89 },
  { name: 'James Wilson', productivity: 86, quality: 88, efficiency: 84, collaboration: 86 }];


  const leaderboardMembers = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Senior Software Engineer',
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_10d60e496-1763295319842.png",
    avatarAlt: 'Professional headshot of Asian woman with long black hair wearing blue blazer and white blouse',
    score: 92,
    rankChange: 2
  },
  {
    id: 2,
    name: 'Amanda Lee',
    role: 'Product Manager',
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1b7bb091e-1763296217462.png",
    avatarAlt: 'Professional headshot of Asian woman with short brown hair wearing gray suit jacket',
    score: 91,
    rankChange: 1
  },
  {
    id: 3,
    name: 'David Kim',
    role: 'Tech Lead',
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1ea5c0096-1763294223103.png",
    avatarAlt: 'Professional headshot of Asian man with short black hair wearing navy blue suit',
    score: 90,
    rankChange: -1
  },
  {
    id: 4,
    name: 'Jessica Taylor',
    role: 'UX Designer',
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1bc1f2fd2-1763297375501.png",
    avatarAlt: 'Professional headshot of Caucasian woman with blonde hair wearing black blazer',
    score: 89,
    rankChange: 0
  },
  {
    id: 5,
    name: 'Michael Rodriguez',
    role: 'DevOps Engineer',
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_108dbe7bd-1763296216235.png",
    avatarAlt: 'Professional headshot of Hispanic man with short dark hair wearing charcoal suit',
    score: 88,
    rankChange: -2
  }];


  const distributionData = [
  { range: '0-59%', count: 2 },
  { range: '60-69%', count: 5 },
  { range: '70-79%', count: 8 },
  { range: '80-89%', count: 12 },
  { range: '90-100%', count: 7 }];


  const upcomingMilestones = [
  {
    id: 1,
    title: 'Q1 Product Launch',
    description: 'Complete development and testing of new feature set for major product release',
    dueDate: '2026-03-31',
    assignedTo: 'Engineering Team',
    progress: 78,
    status: 'in-progress'
  },
  {
    id: 2,
    title: 'Customer Onboarding Sprint',
    description: 'Onboard 50 new enterprise customers with dedicated support and training',
    dueDate: '2026-02-15',
    assignedTo: 'Sales & Support',
    progress: 92,
    status: 'in-progress'
  },
  {
    id: 3,
    title: 'Performance Optimization',
    description: 'Reduce application load time by 40% and improve overall system performance',
    dueDate: '2026-02-28',
    assignedTo: 'DevOps Team',
    progress: 45,
    status: 'at-risk'
  },
  {
    id: 4,
    title: 'Security Audit Completion',
    description: 'Complete comprehensive security audit and implement all recommended fixes',
    dueDate: '2026-01-25',
    assignedTo: 'Security Team',
    progress: 100,
    status: 'completed'
  }];


  const resourceAllocations = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Senior Engineer',
    project: 'Platform Redesign',
    timeline: 'Jan 15 - Mar 30',
    utilization: 92,
    hoursPerWeek: 37,
    totalCapacity: 40
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    role: 'DevOps Engineer',
    project: 'Infrastructure Upgrade',
    timeline: 'Jan 10 - Feb 28',
    utilization: 88,
    hoursPerWeek: 35,
    totalCapacity: 40
  },
  {
    id: 3,
    name: 'Emily Watson',
    role: 'Frontend Developer',
    project: 'Mobile App Development',
    timeline: 'Jan 20 - Apr 15',
    utilization: 75,
    hoursPerWeek: 30,
    totalCapacity: 40
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Tech Lead',
    project: 'API Integration',
    timeline: 'Jan 5 - Mar 15',
    utilization: 95,
    hoursPerWeek: 38,
    totalCapacity: 40
  },
  {
    id: 5,
    name: 'Jessica Taylor',
    role: 'UX Designer',
    project: 'Design System',
    timeline: 'Jan 12 - Feb 20',
    utilization: 68,
    hoursPerWeek: 27,
    totalCapacity: 40
  },
  {
    id: 6,
    name: 'Robert Johnson',
    role: 'Backend Developer',
    project: 'Database Migration',
    timeline: 'Jan 8 - Mar 10',
    utilization: 82,
    hoursPerWeek: 33,
    totalCapacity: 40
  }];


  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1500);
  };

  const handleExport = () => {
    console.log('Exporting performance report...');
  };

  const handleGoalSettings = () => {
    console.log('Opening goal settings...');
  };

  return (
    <>
      <Helmet>
        <title>Performance Metrics - AnalyticsPro</title>
        <meta name="description" content="Comprehensive team performance tracking, resource allocation insights, and productivity monitoring for effective workforce management" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <NavigationBar />

        <main className="pt-20 md:pt-24 pb-8 md:pb-12 lg:pb-16">
          <div className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8">
            <div className="mb-6 md:mb-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
                <div>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading font-semibold text-foreground mb-2">
                    Performance Metrics Dashboard
                  </h1>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Comprehensive team performance tracking and workforce management insights
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2 md:gap-3">
                  <Button
                    variant="outline"
                    iconName="Settings"
                    iconPosition="left"
                    onClick={handleGoalSettings}
                    className="flex-shrink-0">

                    Goal Settings
                  </Button>
                  <Button
                    variant="outline"
                    iconName="Download"
                    iconPosition="left"
                    onClick={handleExport}
                    className="flex-shrink-0">

                    Export Report
                  </Button>
                  <Button
                    variant="default"
                    iconName="RefreshCw"
                    iconPosition="left"
                    loading={isRefreshing}
                    onClick={handleRefresh}
                    className="flex-shrink-0">

                    Refresh
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                <Select
                  label="Select Team"
                  options={teamOptions}
                  value={selectedTeam}
                  onChange={setSelectedTeam}
                  className="w-full" />


                <Select
                  label="Performance Period"
                  options={periodOptions}
                  value={selectedPeriod}
                  onChange={setSelectedPeriod}
                  className="w-full" />


                <div className="flex items-end">
                  <Button
                    variant={benchmarkEnabled ? 'default' : 'outline'}
                    iconName="BarChart3"
                    iconPosition="left"
                    onClick={() => setBenchmarkEnabled(!benchmarkEnabled)}
                    fullWidth>

                    {benchmarkEnabled ? 'Benchmark On' : 'Benchmark Off'}
                  </Button>
                </div>

                <div className="flex items-end">
                  <div className="w-full px-4 py-2.5 bg-muted rounded-lg border border-border">
                    <p className="text-xs text-muted-foreground mb-0.5">Last Updated</p>
                    <p className="text-sm font-medium text-foreground">
                      {new Date()?.toLocaleString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6 mb-6 md:mb-8">
              {performanceMetrics?.map((metric, index) =>
              <MetricCard key={index} {...metric} />
              )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5 lg:gap-6 mb-6 md:mb-8">
              <div className="lg:col-span-8">
                <TeamPerformanceChart
                  data={teamPerformanceData}
                  selectedMetric="all" />

              </div>

              <div className="lg:col-span-4 space-y-4 md:space-y-5 lg:space-y-6">
                <TeamLeaderboard members={leaderboardMembers} />
                <PerformanceDistribution data={distributionData} />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5 lg:gap-6">
              <div className="lg:col-span-5">
                <MilestoneTracker milestones={upcomingMilestones} />
              </div>

              <div className="lg:col-span-7">
                <ResourceAllocationMatrix allocations={resourceAllocations} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>);

};

export default PerformanceMetrics;