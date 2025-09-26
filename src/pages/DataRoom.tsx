import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, Users, Presentation } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import depointLogoBlack from '@/assets/Depoint-Logo-black.png';
const DataRoom = () => {
  const navigate = useNavigate();
  return <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white font-inter flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute top-60 right-32 w-48 h-48 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-40 w-56 h-56 bg-green-500 rounded-full blur-3xl"></div>
      </div>
      
      {/* Content */}
      <div className="text-center relative z-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        {/* Logo */}
        <div className="mb-8 sm:mb-12">
          <img src={depointLogoBlack} alt="Depoint" className="h-16 sm:h-20 lg:h-24 brightness-0 invert mx-auto" />
        </div>
        
        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight">
          Data Room
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl sm:text-2xl lg:text-3xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-12">
          Enterprise Operations Intelligence Platform
        </p>

        {/* Navigation Cards */}
        

        {/* Additional Links */}
        <div className="mt-12 space-y-4">
          
          <div className="text-slate-400 text-sm">
            Contact Depoint for additional materials and data room access
          </div>
        </div>
      </div>
    </div>;
};
export default DataRoom;