import React from 'react';
import { getSlideStyle } from '@/lib/slideConfig';
import { getSlideTagline } from '@/lib/slideTaglines';
import SlideHeader from './SlideHeader';
import SlideFooter from './SlideFooter';

interface SlideLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  slideNumber?: string;
  totalSlides?: string;
  logoSrc?: string;
  backgroundClass?: string;
  footerTagline?: string; // Footer tagline (optional override)
  headerHeight?: string; // Header height (optional, defaults to 12%)
  hideFooter?: boolean; // Option to hide the footer for custom footers
}

const SlideLayout: React.FC<SlideLayoutProps> = ({
  children,
  title,
  subtitle,
  slideNumber = "1",
  totalSlides = "15", 
  logoSrc = "/lovable-uploads/96869f4f-a193-4264-973e-1221a0ec5fb9.png",
  backgroundClass = "bg-gradient-neutral text-neutral-dark",
  headerHeight = "12%", // Default header height, can be adjusted per slide
  footerTagline,
  hideFooter = false
}) => {
  // Auto-generate tagline from slide number if not provided
  const actualTagline = footerTagline || getSlideTagline(parseInt(slideNumber || "1"));
  // Reserve bottom space: 8% for built-in footer, 10% when using custom HumorFooter (hideFooter=true)
  const footerHeight = hideFooter ? "10%" : "8%";
  
  return (
    <div 
      className={`slide-container ${backgroundClass} relative overflow-hidden`}
      style={getSlideStyle()}
    >
      {/* Fixed Header - Dynamic height */}
      <div 
        className="absolute top-0 left-0 right-0 z-10"
        style={{ height: headerHeight }}
      >
        <SlideHeader 
          title={title}
          subtitle={subtitle}
          logoSrc={logoSrc}
          className="h-full flex items-center"
        />
      </div>

      {/* Main Content Area - Uses remaining space, lower z-index */}
      <div 
        className="absolute left-0 right-0 px-16 overflow-hidden z-10"
        style={{ 
          top: headerHeight,
          bottom: footerHeight,
          height: `calc(100% - ${headerHeight} - ${footerHeight})`
        }}
      >
        <div className="h-full overflow-auto">
          {children}
        </div>
      </div>

      {/* Fixed Footer - 8% height, highest z-index - only show if not hidden */}
      {!hideFooter && (
        <SlideFooter 
          slideNumber={slideNumber}
          totalSlides={totalSlides}
          tagline={actualTagline}
        />
      )}
    </div>
  );
};

export default SlideLayout;
