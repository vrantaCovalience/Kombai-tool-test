import React from 'react';

const ClientLogos: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="flex flex-col gap-lg text-center">
          <div className="flex flex-col gap-xs">
            <h2 className="heading-xl">Our Clients</h2>
            <p className="text-secondary">We have been working with some Fortune 500+ clients</p>
          </div>
          
          <div>
            <img 
              src="/assets/client-logos.svg" 
              alt="Fortune 500+ client logos" 
              style={{ width: '100%', height: 'auto', maxWidth: '1152px', margin: '0 auto' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;