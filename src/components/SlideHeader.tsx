import React from 'react';

interface SlideHeaderProps {
  title: React.ReactNode;
  subtitle?: string;
  logoSrc?: string;
  className?: string;
}

const SlideHeader: React.FC<SlideHeaderProps> = ({ 
  title, 
  subtitle, 
  logoSrc = "/lovable-uploads/96869f4f-a193-4264-973e-1221a0ec5fb9.png",
  className = "" 
}) => {
  return (
    <div className={`w-full h-full bg-white border-b border-gray-200 relative ${className}`}>
      {/* Title and subtitle - left side with padding */}
      <div className="px-16 h-full flex flex-col justify-center">
        <h1 className="slide-h1 mb-0.5 text-gray-900 leading-tight">{title}</h1>
        {/* Subtitle */}
        {subtitle && (
          <p className="slide-body text-gray-600 leading-snug">{subtitle}</p>
        )}
      </div>
      
      {/* Logo - absolutely positioned to right edge of entire header */}
      <div className="absolute top-0 right-0 h-full flex items-center pr-4">
        <img src={logoSrc} alt="Depoint" className="h-12" />
      </div>
    </div>
  );
};

export default SlideHeader;
