import React from 'react';
import MembershipIcon from './icons/MembershipIcon';
import NationalIcon from './icons/NationalIcon';
import ClubsIcon from './icons/ClubsIcon';

const CommunityFeatures: React.FC = () => {
  const features = [
    {
      icon: MembershipIcon,
      title: 'Membership Organisations',
      description: 'Our membership management software provides full automation of membership renewals and payments'
    },
    {
      icon: NationalIcon,
      title: 'National Associations',
      description: 'Our membership management software provides full automation of membership renewals and payments'
    },
    {
      icon: ClubsIcon,
      title: 'Clubs And Groups',
      description: 'Our membership management software provides full automation of membership renewals and payments'
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="flex flex-col gap-xl">
          {/* Section Header */}
          <div className="text-center flex flex-col gap-xs">
            <h2 className="heading-xl">
              Manage your entire community<br />
              in a single system
            </h2>
            <p className="text-secondary">Who is Nextcent suitable for?</p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-3 gap-lg">
            {features.map((feature, index) => (
              <div key={index} className="card card-feature">
                <div className="flex flex-col gap-sm items-center">
                  <div style={{ marginBottom: '16px' }}>
                    <feature.icon width={65} height={56} color="var(--color-primary)" />
                  </div>
                  <h3 className="heading-lg text-center">{feature.title}</h3>
                  <p className="text-secondary text-sm text-center" style={{ lineHeight: '20px' }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityFeatures;