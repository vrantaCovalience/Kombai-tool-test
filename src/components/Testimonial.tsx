import React from 'react';
import ArrowRightIcon from './icons/ArrowRightIcon';

const Testimonial: React.FC = () => {
  return (
    <section className="bg-light section">
      <div className="container">
        <div className="flex items-center" style={{ gap: '78px' }}>
          {/* Customer Photo */}
          <div style={{ flex: '0 0 326px' }}>
            <img 
              src="/assets/customer-photo.jpg" 
              alt="Tim Smith"
              className="rounded shadow-md"
              style={{ width: '100%', height: '326px', objectFit: 'cover' }}
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-lg" style={{ flex: '1' }}>
            <div className="flex flex-col gap-sm">
              <p className="text-secondary font-medium" style={{ lineHeight: '24px', fontSize: '16px' }}>
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus 
                tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida 
                enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie 
                mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse 
                eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae 
                placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. 
                Curabitur id nibh id sem dignissim finibus ac sit amet magna.
              </p>
              
              <div className="flex flex-col gap-xs">
                <h4 className="text-primary-color heading-md">Tim Smith</h4>
                <p className="text-gray-light">British Dragon Boat Racing Association</p>
              </div>
            </div>

            {/* Client Logos and CTA */}
            <div className="flex items-center gap-lg">
              <div className="flex items-center" style={{ gap: '41px' }}>
                <img 
                  src="/assets/client-logos.svg" 
                  alt="Client logos"
                  style={{ height: '48px' }}
                />
              </div>
              <div className="flex items-center gap-xs">
                <span className="text-primary-color heading-md">Meet all customers</span>
                <ArrowRightIcon width={16} height={10} color="var(--color-primary)" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;