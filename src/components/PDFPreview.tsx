import React, { useState } from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import { Eye, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
// import InvestorDeckPDF from './pdf/InvestorDeckPDF';

interface PDFPreviewProps {
  slideIds?: number[];
  buttonText?: string;
  className?: string;
}

const PDFPreview: React.FC<PDFPreviewProps> = ({ 
  slideIds, 
  buttonText = "Preview PDF",
  className = ""
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className={className}>
          <Eye className="w-4 h-4 mr-2" />
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-6xl w-full h-[90vh] p-0">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <h3 className="text-lg font-semibold">PDF Preview</h3>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsOpen(false)}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex-1 overflow-hidden">
            <PDFViewer 
              style={{ width: '100%', height: '100%', border: 'none' }}
              showToolbar={true}
            >
              {/* <InvestorDeckPDF slides={slideIds} /> */}
              <div className="p-8 text-center text-gray-500">
                PDF component not available
              </div>
            </PDFViewer>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PDFPreview;
