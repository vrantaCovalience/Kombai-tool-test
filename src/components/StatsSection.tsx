import React from 'react';
import MembersIcon from './icons/MembersIcon';
import ClubsStatsIcon from './icons/ClubsStatsIcon';
import EventsIcon from './icons/EventsIcon';
import PaymentsIcon from './icons/PaymentsIcon';

const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: MembersIcon,
      number: '2,245,341',
      label: 'Members',
      iconStyle: { border: '1px solid var(--color-primary)', backgroundColor: 'var(--color-primary)' }
    },
    {
      icon: ClubsStatsIcon,
      number: '46,328',
      label: 'Clubs',
      iconStyle: {}
    },
    {
      icon: EventsIcon,
      number: '828,867',
      label: 'Event Bookings',
      iconStyle: { border: '2px solid var(--color-primary)', backgroundColor: 'var(--color-primary)' }
    },
    {
      icon: PaymentsIcon,
      number: '1,926,436',
      label: 'Payments',
      iconStyle: { backgroundColor: 'var(--color-primary)' }
    }
  ];

  return (
    <section className="bg-light section">
      <div className="container">
        <div className="flex items-center stats-row" style={{ gap: '78px' }}>
          {/* Left Content */}
          <div className="flex flex-col gap-sm stats-left" style={{ flex: '0 0 540px' }}>
            <h2 className="heading-xl text-primary-color" style={{ lineHeight: '44px' }}>
              Helping a local business reinvent itself
            </h2>
            <p className="text-primary">We reached here with our hard work and dedication</p>
          </div>

          {/* Stats Grid - Desktop */}
          <div className="flex flex-col gap-lg stats-grid" style={{ flex: '1' }}>
            <div className="flex gap-lg">
              {stats.slice(0, 2).map((stat, index) => (
                <div key={index} className="flex items-center gap-sm">
                  <div 
                    className="flex items-center justify-center"
                    style={{ 
                      width: '47px', 
                      height: '31px',
                      borderRadius: '4px',
                      ...stat.iconStyle
                    }}
                  >
                    <stat.icon width={32} height={24} color="white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="heading-lg">{stat.number}</span>
                    <span className="text-secondary">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-lg">
              {stats.slice(2, 4).map((stat, index) => (
                <div key={index} className="flex items-center gap-sm">
                  <div 
                    className="flex items-center justify-center"
                    style={{ 
                      width: '42px', 
                      height: '33px',
                      borderRadius: '4px',
                      ...stat.iconStyle
                    }}
                  >
                    <stat.icon width={32} height={24} color="white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="heading-lg">{stat.number}</span>
                    <span className="text-secondary">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Grid - Mobile */}
          <div className="stats-mobile-grid" style={{ display: 'none' }}>
            {stats.map((stat, index) => (
              <div key={index} className="stats-item">
                <div 
                  className="stats-icon"
                  style={{ ...stat.iconStyle }}
                >
                  <stat.icon width={24} height={18} color="white" />
                </div>
                <div className="flex flex-col items-center">
                  <span className="heading-md">{stat.number}</span>
                  <span className="text-secondary text-sm">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;