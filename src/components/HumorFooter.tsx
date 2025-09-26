import React from 'react';
import consultantAvatar from '@/assets/consultant-avatar.svg';

interface HumorFooterProps {
  text: string;
  avatarStyle?: 'consultant' | 'robot' | 'coach' | 'none';
  highlightWords?: string[];
  highlightColor?: 'blue' | 'orange';
}

const HumorFooter: React.FC<HumorFooterProps> = ({ 
  text, 
  avatarStyle = 'none',
  highlightWords = [],
  highlightColor = 'blue'
}) => {
  // Render avatar - now uses the new consultant SVG for all styles
  const renderAvatar = () => {
    if (avatarStyle === 'none') return null;
    
    return (
      <div className="w-12 h-12 flex items-center justify-center">
        <img 
          src={consultantAvatar} 
          alt="Consultant avatar" 
          className="w-12 h-12"
        />
      </div>
    );
  };

  // Highlight specific words in the text with Depoint colors
  const renderTextWithHighlights = () => {
    if (highlightWords.length === 0) {
      return <span>{text}</span>;
    }

    const colorClass = highlightColor === 'blue' ? 'text-[#0060FF]' : 'text-[#FF5A00]';
    let processedText = text;
    highlightWords.forEach(word => {
      const regex = new RegExp(`\\b(${word})\\b`, 'gi');
      processedText = processedText.replace(regex, `<span class="${colorClass} font-medium">$1</span>`);
    });

    return <span dangerouslySetInnerHTML={{ __html: processedText }} />;
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 h-[10%] z-20 flex items-center justify-between px-8 bg-[#F8F8F8] border-t border-gray-200">
      
      {/* Left side: Avatar + humor text */}
      <div className="flex items-center gap-3 flex-1">
        {avatarStyle !== 'none' && (
          <div className="w-7 h-7 flex items-center justify-center flex-shrink-0">
            <img 
              src={consultantAvatar} 
              alt="Consultant avatar" 
              className="w-7 h-7"
            />
          </div>
        )}
        <div className="text-gray-600 italic text-sm">
          {renderTextWithHighlights()}
        </div>
      </div>

      {/* Right: Company info - maintain existing metadata */}
      <div className="slide-label tracking-wide text-gray-400 uppercase text-xs">
        Q3 2025 • CONFIDENTIAL INVESTOR DECK
      </div>
    </div>
  );
};

export default HumorFooter;