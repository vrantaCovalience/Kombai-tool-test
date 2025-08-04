import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-light">
      <div className="container">
        <nav className="flex items-center justify-between" style={{ padding: '30px 0' }}>
          {/* Logo */}
          <div className="flex items-center gap-sm">
            <img 
              src="/assets/nexcent-logo.svg" 
              alt="Nexcent" 
              style={{ height: '24px' }}
            />
          </div>

          {/* Navigation Menu */}
          <div className="flex items-center" style={{ gap: '50px' }}>
            <a href="#" className="btn-ghost text-md">Home</a>
            <a href="#" className="btn-ghost text-md">Service</a>
            <a href="#" className="btn-ghost text-md">Feature</a>
            <a href="#" className="btn-ghost text-md">Product</a>
            <a href="#" className="btn-ghost text-md">Testimonial</a>
            <a href="#" className="btn-ghost text-md">FAQ</a>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center" style={{ gap: '14px' }}>
            <a href="#" className="text-primary-color font-medium text-sm">Login</a>
            <a href="#" className="btn btn-primary text-sm">Sign up</a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;