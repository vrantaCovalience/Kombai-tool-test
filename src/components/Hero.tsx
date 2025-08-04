import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-light section-lg">
      <div className="container">
        <div className="flex items-center hero-content" style={{ gap: '104px' }}>
          {/* Content */}
          <div className="flex flex-col gap-lg" style={{ flex: '1' }}>
            <div className="flex flex-col gap-sm">
              <h1 className="heading-2xl">
                Lessons and insights{' '}
                <span className="text-primary-color">from 8 years</span>
              </h1>
              <p className="text-secondary text-md">
                Where to grow your business as a photographer: site or social media?
              </p>
            </div>
            <div>
              <a href="#" className="btn btn-primary">Register</a>
            </div>
          </div>

          {/* Illustration */}
          <div className="hero-illustration" style={{ flex: '0 0 391px' }}>
            <img 
              src="/assets/hero-illustration.svg" 
              alt="Business growth illustration" 
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center" style={{ marginTop: '40px' }}>
          <div className="flex gap-xs">
            <div style={{ 
              width: '10px', 
              height: '10px', 
              borderRadius: '50%', 
              backgroundColor: 'var(--color-primary)' 
            }}></div>
            <div style={{ 
              width: '10px', 
              height: '10px', 
              borderRadius: '50%', 
              backgroundColor: '#E0E0E0' 
            }}></div>
            <div style={{ 
              width: '10px', 
              height: '10px', 
              borderRadius: '50%', 
              backgroundColor: '#E0E0E0' 
            }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;