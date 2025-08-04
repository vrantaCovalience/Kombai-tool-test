import React from 'react';

interface ContentSectionProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  buttonText: string;
  reverse?: boolean;
}

const ContentSection: React.FC<ContentSectionProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  buttonText,
  reverse = false
}) => {
  return (
    <section className="section-lg">
      <div className="container">
        <div className={`flex items-center gap-xl ${reverse ? 'flex-row-reverse' : ''}`}>
          {/* Image */}
          <div style={{ flex: '0 0 442px' }}>
            <img 
              src={imageSrc} 
              alt={imageAlt}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-lg" style={{ flex: '1' }}>
            <div className="flex flex-col gap-sm">
              <h2 className="heading-xl" style={{ lineHeight: '44px' }}>
                {title}
              </h2>
              <p className="text-secondary text-sm" style={{ lineHeight: '20px' }}>
                {description}
              </p>
            </div>
            <div>
              <a href="#" className="btn btn-primary">{buttonText}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;