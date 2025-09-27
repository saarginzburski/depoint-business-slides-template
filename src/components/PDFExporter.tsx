import React from 'react';
import { Button } from './ui/button';
import { Download } from 'lucide-react';

interface PDFExporterProps {
  className?: string;
  slideComponents?: string[];
}

const PDFExporter: React.FC<PDFExporterProps> = ({ className, slideComponents }) => {
  const handleExport = () => {
    if (slideComponents && slideComponents.length > 0) {
      // Open print deck with selected slide components
      const slideParams = slideComponents.join(',');
      window.open(`/print-deck?components=${slideParams}&autoprint=true`, '_blank');
    } else {
      // Fallback to current page print
      window.print();
    }
  };

  return (
    <Button 
      onClick={handleExport} 
      variant="outline" 
      size="sm" 
      className={className}
    >
      <Download className="w-4 h-4 mr-2" />
      Export PDF
    </Button>
  );
};

export default PDFExporter;