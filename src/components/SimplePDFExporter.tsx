import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Download, FileText, Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { slideConfig } from '@/pages/slides/slideConfig';

interface SimplePDFExporterProps {
  mode: 'current' | 'all' | 'range';
  currentSlideId?: number;
  slideRange?: number[];
  className?: string;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

const SimplePDFExporter: React.FC<SimplePDFExporterProps> = ({ 
  mode, 
  currentSlideId, 
  slideRange,
  className = '',
  variant = 'default',
  size = 'sm'
}) => {
  const navigate = useNavigate();

  const handleExport = () => {
    let slidesParam = '';
    
    switch (mode) {
      case 'current':
        if (currentSlideId) {
          slidesParam = currentSlideId.toString();
        }
        break;
      case 'all':
        slidesParam = 'all';
        break;
      case 'range':
        if (slideRange && slideRange.length > 0) {
          slidesParam = slideRange.join(',');
        }
        break;
    }
    
    if (slidesParam) {
      // Open print page in new tab/window for better UX
      const printUrl = `/print-deck?slides=${slidesParam}&autoprint=false`;
      window.open(printUrl, '_blank', 'width=1400,height=900');
    }
  };

  const getButtonText = () => {
    switch (mode) {
      case 'current':
        return 'Print Slide';
      case 'all':
        return `Print All ${slideConfig.length} Slides`;
      case 'range':
        return `Print ${slideRange?.length || 0} Slides`;
      default:
        return 'Print to PDF';
    }
  };

  const getIcon = () => {
    if (mode === 'all' || mode === 'range') {
      return <FileText className="w-4 h-4 mr-2" />;
    }
    return <Printer className="w-4 h-4 mr-2" />;
  };

  return (
    <Button 
      onClick={handleExport}
      variant={variant}
      size={size}
      className={className}
    >
      {getIcon()}
      {getButtonText()}
    </Button>
  );
};

export default SimplePDFExporter;
