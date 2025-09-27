import React from 'react';
import { Button } from './ui/button';
import { Printer } from 'lucide-react';

interface Slide {
  id: number;
  component: string;
  title: string;
}

interface PrintButtonProps {
  visibleSlides: Slide[];
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "default" | "lg";
  className?: string;
  disabled?: boolean;
}

const PrintButton: React.FC<PrintButtonProps> = ({ 
  visibleSlides, 
  variant = "outline",
  size = "sm",
  className = "",
  disabled = false
}) => {
  const handlePrint = () => {
    if (visibleSlides.length === 0) {
      console.warn('No slides available for printing');
      return;
    }
    
    // Get component names from visible slides in their current order
    const slideComponents = visibleSlides.map(slide => slide.component);
    const componentParams = slideComponents.join(',');
    
    // Open print deck with the correctly ordered slides
    const printUrl = `/print-deck?components=${componentParams}&autoprint=true`;
    window.open(printUrl, '_blank');
  };

  return (
    <Button 
      onClick={handlePrint} 
      variant={variant}
      size={size}
      className={className}
      disabled={disabled || visibleSlides.length === 0}
    >
      <Printer className="w-4 h-4 mr-2" />
      Print Deck {visibleSlides.length > 0 && `(${visibleSlides.length} slides)`}
    </Button>
  );
};

export default PrintButton;