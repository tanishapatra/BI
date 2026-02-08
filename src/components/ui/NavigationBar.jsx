import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';


const NavigationBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navigationItems = [
    {
      id: 'executive-overview',
      label: 'Executive Overview',
      path: '/executive-overview',
      icon: 'LayoutDashboard',
      description: 'Strategic dashboard for C-level KPI monitoring'
    },
    {
      id: 'performance-metrics',
      label: 'Performance Metrics',
      path: '/performance-metrics',
      icon: 'TrendingUp',
      description: 'Operational dashboard for team performance tracking'
    }
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const isActive = (path) => {
    return location?.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="nav-bar">
        <div className="nav-bar-container">
          <div className="nav-bar-logo">
            <button
              onClick={() => handleNavigation('/executive-overview')}
              className="focus-ring rounded-md"
              aria-label="AnalyticsPro Home"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="BarChart3" size={24} color="var(--color-primary)" />
                </div>
                <span className="text-xl font-heading font-semibold text-foreground">
                  AnalyticsPro
                </span>
              </div>
            </button>
          </div>

          <div className="nav-bar-menu">
            {navigationItems?.map((item) => (
              <button
                key={item?.id}
                onClick={() => handleNavigation(item?.path)}
                className={`nav-bar-item ${isActive(item?.path) ? 'active' : ''} focus-ring rounded-md`}
                aria-current={isActive(item?.path) ? 'page' : undefined}
                title={item?.description}
              >
                {item?.label}
              </button>
            ))}
          </div>

          <button
            onClick={toggleMobileMenu}
            className="nav-bar-mobile-toggle focus-ring rounded-md"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>
      </nav>
      <div className={`nav-bar-mobile-menu ${isMobileMenuOpen ? 'open' : 'closed'}`}>
        <div className="nav-bar-mobile-header">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name="BarChart3" size={24} color="var(--color-primary)" />
            </div>
            <span className="text-xl font-heading font-semibold text-foreground">
              AnalyticsPro
            </span>
          </div>
          <button
            onClick={toggleMobileMenu}
            className="nav-bar-mobile-close focus-ring rounded-md"
            aria-label="Close navigation menu"
          >
            <Icon name="X" size={24} />
          </button>
        </div>

        <div className="nav-bar-mobile-items">
          {navigationItems?.map((item) => (
            <button
              key={item?.id}
              onClick={() => handleNavigation(item?.path)}
              className={`nav-bar-mobile-item ${isActive(item?.path) ? 'active' : ''} focus-ring`}
              aria-current={isActive(item?.path) ? 'page' : undefined}
            >
              <Icon name={item?.icon} size={20} className="mr-3" />
              <span>{item?.label}</span>
            </button>
          ))}
        </div>
      </div>
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-[1050] bg-background md:hidden"
          onClick={toggleMobileMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default NavigationBar;