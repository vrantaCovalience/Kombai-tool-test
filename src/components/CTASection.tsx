import React from 'react';
import ArrowRightIcon from './icons/ArrowRightIcon';

const CTASection: React.FC = () => {
  return (
    <section className="bg-light section-lg">
      <div className="container">
        <div className="text-center flex flex-col gap-lg">
          <h2 className="heading-2xl" style={{ color: 'var(--color-background-dark)' }}>
            Pellentesque suscipit<br />
            fringilla libero eu.
          </h2>
          
          <div>
            <a 
              href="#" 
              className="btn btn-primary flex items-center gap-xs"
              style={{ display: 'inline-flex' }}
            >
              Get a Demo
              <ArrowRightIcon width={13} height={7} color="white" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;