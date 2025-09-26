import React from 'react';
import { Button } from './ui/button';
import { Download } from 'lucide-react';

interface PDFExporterProps {
  className?: string;
}

const PDFExporter: React.FC<PDFExporterProps> = ({ className }) => {
  const handleExport = () => {
    // Simple print functionality
    window.print();
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