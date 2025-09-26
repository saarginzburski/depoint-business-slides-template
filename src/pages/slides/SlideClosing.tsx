import React from 'react';
import { getSlideStyle } from '@/lib/slideConfig';
import { User, CheckSquare } from 'lucide-react';
import depointLogoBlack from '@/assets/Depoint-Logo-black.png';

const SlideClosing = () => {
  return (
    <div className="relative w-full h-full">
      <div className="slide-container bg-white text-gray-900 relative overflow-hidden" style={getSlideStyle()}>
        
        {/* Background: Consistent Grid with Symbolic Elements */}
        <div className="absolute inset-0">
          {/* Consistent grid background across entire slide */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(128, 128, 128, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(128, 128, 128, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
          
          {/* Symbolic background elements */}
          <div className="absolute inset-0 flex">
            {/* Left side - ERP "record" symbols as watermark */}
            <div className="w-1/2 relative">
              <div className="absolute inset-0 opacity-8">
                {/* Spreadsheet shapes */}
                <div className="absolute top-24 left-20 w-28 h-3 bg-gray-400 rounded"></div>
                <div className="absolute top-30 left-20 w-24 h-3 bg-gray-400 rounded"></div>
                <div className="absolute top-36 left-20 w-32 h-3 bg-gray-400 rounded"></div>
                <div className="absolute top-42 left-20 w-20 h-3 bg-gray-400 rounded"></div>
                
                {/* ERP module blocks */}
                <div className="absolute top-56 left-16 w-20 h-16 bg-gray-300 rounded border border-gray-400"></div>
                <div className="absolute top-56 left-40 w-20 h-16 bg-gray-300 rounded border border-gray-400"></div>
                <div className="absolute top-76 left-28 w-20 h-16 bg-gray-300 rounded border border-gray-400"></div>
                
                {/* Database/record icons */}
                <div className="absolute top-100 left-24 w-24 h-2 bg-gray-400 rounded"></div>
                <div className="absolute top-104 left-24 w-28 h-2 bg-gray-400 rounded"></div>
                <div className="absolute top-108 left-24 w-20 h-2 bg-gray-400 rounded"></div>
              </div>
            </div>
            
            {/* Right side - Frontline action icons in Depoint Blue outline */}
            <div className="w-1/2 relative">
              <div className="absolute inset-0 opacity-12">
                {/* Checklist and person silhouettes - outline style */}
                <div className="absolute top-32 right-32 flex items-center gap-3">
                  <User className="w-8 h-8 text-[#0060FF] stroke-2" style={{ fill: 'none' }} />
                  <CheckSquare className="w-6 h-6 text-[#0060FF] stroke-2" style={{ fill: 'none' }} />
                </div>
                
                <div className="absolute top-52 right-24 flex items-center gap-3">
                  <User className="w-7 h-7 text-[#0060FF] stroke-2" style={{ fill: 'none' }} />
                  <CheckSquare className="w-5 h-5 text-[#0060FF] stroke-2" style={{ fill: 'none' }} />
                </div>
                
                <div className="absolute top-72 right-40 flex items-center gap-3">
                  <User className="w-6 h-6 text-[#0060FF] stroke-2" style={{ fill: 'none' }} />
                  <CheckSquare className="w-5 h-5 text-[#0060FF] stroke-2" style={{ fill: 'none' }} />
                </div>
                
                <div className="absolute top-88 right-28 flex items-center gap-3">
                  <User className="w-8 h-8 text-[#0060FF] stroke-2" style={{ fill: 'none' }} />
                  <CheckSquare className="w-6 h-6 text-[#0060FF] stroke-2" style={{ fill: 'none' }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Layer */}
        <div className="h-full relative flex flex-col justify-center items-center text-center z-10 px-12">
          {/* EDGE - Bold Navy, Large and Central */}
          <h1 className="text-[#0A0A0A] mb-8" style={{
            fontSize: '8rem',
            fontWeight: '900',
            lineHeight: '1.0',
            letterSpacing: '0.02em'
          }}>
            EDGE
          </h1>
          
          {/* Subheadline - Lighter Grey (#666) */}
          <h2 className="text-[#666] mb-16" style={{
            fontSize: '1.75rem',
            fontWeight: '400',
            letterSpacing: '0.02em'
          }}>
            EDGE — Every Day Great Execution
          </h2>

          {/* Depoint Logo - Enlarged with Soft Spotlight Glow */}
          <div className="mb-12 relative">
            {/* Soft spotlight glow - white fade, low opacity */}
            <div className="absolute inset-0 bg-gradient-radial from-white/60 via-white/30 to-transparent blur-3xl scale-200"></div>
            <img src={depointLogoBlack} alt="Depoint" className="h-24 mx-auto filter drop-shadow-lg relative z-10" />
          </div>
          
          {/* Tagline - Italic, Larger, Anchors Bottom */}
          <div className="text-gray-700 italic font-medium relative" style={{
            fontSize: '1.65rem',
            lineHeight: '1.4'
          }}>
            From <span className="text-gray-500">system of record</span> → to{' '}
            <span className="text-[#FF5A00] font-bold relative underline decoration-[#0060FF] decoration-2">
              system of action
            </span>. Every day.
          </div>
        </div>

        {/* Contact Card */}
        <div className="absolute bottom-8 right-8 z-20">
          <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-4 w-72">
            <div className="text-left">
              <div className="text-gray-900 font-semibold mb-1">Saar Ginzburski</div>
              <div className="text-gray-600 text-sm mb-3">CEO & Founder</div>
              <div className="text-gray-500 text-xs uppercase tracking-wide">Q3 2025 • CONFIDENTIAL INVESTOR DECK</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SlideClosing;