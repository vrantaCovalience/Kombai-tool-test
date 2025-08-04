import React from 'react';
import InstagramIcon from './icons/InstagramIcon';
import DribbbleIcon from './icons/DribbbleIcon';
import TwitterIcon from './icons/TwitterIcon';
import YouTubeIcon from './icons/YouTubeIcon';
import SendIcon from './icons/SendIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark">
      <div className="container">
        <div className="flex items-start justify-between footer-content" style={{ padding: '64px 0', gap: '125px' }}>
          {/* Company Info */}
          <div className="flex flex-col gap-xl">
            <img 
              src="/assets/footer-logo.svg" 
              alt="Nexcent"
              style={{ height: '30px', width: '191px' }}
            />
            
            <div className="flex flex-col gap-xs">
              <p className="text-sm" style={{ color: 'var(--color-background-light)' }}>
                Copyright © 2020 Nexcent ltd.
              </p>
              <p className="text-sm" style={{ color: 'var(--color-background-light)' }}>
                All rights reserved
              </p>
            </div>

            <div className="flex gap-sm">
              <InstagramIcon width={32} height={32} color="var(--color-background-light)" />
              <DribbbleIcon width={32} height={32} color="var(--color-background-light)" />
              <TwitterIcon width={32} height={32} color="var(--color-background-light)" />
              <YouTubeIcon width={32} height={32} color="var(--color-background-light)" />
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-lg footer-links">
            {/* Company Column */}
            <div className="flex flex-col gap-md footer-column" style={{ width: '160px' }}>
              <h4 className="text-white heading-md">Company</h4>
              <div className="flex flex-col" style={{ gap: '12px' }}>
                <a href="#" className="text-sm" style={{ color: 'var(--color-background-light)' }}>About us</a>
                <a href="#" className="text-sm" style={{ color: 'var(--color-background-light)' }}>Blog</a>
                <a href="#" className="text-sm" style={{ color: 'var(--color-background-light)' }}>Contact us</a>
                <a href="#" className="text-sm" style={{ color: 'var(--color-background-light)' }}>Pricing</a>
                <a href="#" className="text-sm" style={{ color: 'var(--color-background-light)' }}>Testimonials</a>
              </div>
            </div>

            {/* Support Column */}
            <div className="flex flex-col gap-md footer-column" style={{ width: '160px' }}>
              <h4 className="text-white heading-md">Support</h4>
              <div className="flex flex-col" style={{ gap: '12px' }}>
                <a href="#" className="text-sm" style={{ color: 'var(--color-background-light)' }}>Help center</a>
                <a href="#" className="text-sm" style={{ color: 'var(--color-background-light)' }}>Terms of service</a>
                <a href="#" className="text-sm" style={{ color: 'var(--color-background-light)' }}>Legal</a>
                <a href="#" className="text-sm" style={{ color: 'var(--color-background-light)' }}>Privacy policy</a>
                <a href="#" className="text-sm" style={{ color: 'var(--color-background-light)' }}>Status</a>
              </div>
            </div>

            {/* Newsletter Column */}
            <div className="flex flex-col gap-md footer-column" style={{ width: '255px' }}>
              <h4 className="text-white heading-md">Stay up to date</h4>
              <div className="flex items-center" style={{ 
                backgroundColor: 'var(--color-input-bg)', 
                borderRadius: 'var(--radius-md)',
                padding: '11px'
              }}>
                <input 
                  type="email" 
                  placeholder="Your email address"
                  className="input"
                  style={{ 
                    backgroundColor: 'transparent',
                    border: 'none',
                    padding: '0',
                    flex: '1'
                  }}
                />
                <SendIcon width={17} height={17} color="white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;