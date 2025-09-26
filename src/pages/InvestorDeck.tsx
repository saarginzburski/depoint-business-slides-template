import React, { Suspense, lazy, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Eye, FileText, Clock, Printer, CheckSquare, Square } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { slideConfig } from './slides/slideConfig';
import PDFExporter from '@/components/PDFExporter';
import depointLogoBlack from '@/assets/Depoint-Logo-black.png';

// Lazy load all slide components for previews with error handling
const slideComponents = {
  SlideCover: lazy(() => import('./slides/SlideCover').catch(() => ({ default: () => <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">1</div></div> }))),
  SlideExecutiveSummary: lazy(() => import('./slides/SlideExecutiveSummary').catch(() => ({ default: () => <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">2</div></div> }))),
  SlidePlatform: lazy(() => import('./slides/SlidePlatform').catch(() => ({ default: () => <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">3</div></div> }))),
  SlideOurJourneyInvestor: lazy(() => import('./slides/SlideOurJourneyInvestor').catch(() => ({ default: () => <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">4</div></div> }))),
  SlideProblem: lazy(() => import('./slides/SlideProblem').catch(() => ({ default: () => <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">5</div></div> }))),
  SlideSolution: lazy(() => import('./slides/SlideSolution').catch(() => ({ default: () => <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">3</div></div> }))),
  SlideDigitizingOpsManual: lazy(() => import('./slides/SlideDigitizingOpsManual').catch(() => ({ default: () => <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">4</div></div> }))),
  SlideFranchisorFranchisee: lazy(() => import('./slides/SlideFranchisorFranchisee').catch(() => ({ default: () => <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">5</div></div> }))),
  SlideJollibeeCase: lazy(() => import('./slides/SlideJollibeeCase').catch(() => ({ default: () => <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">6</div></div> }))),
  SlidePlatformEcosystem: lazy(() => import('./slides/SlidePlatformEcosystem').catch(() => ({ default: () => <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">6</div></div> }))),
  SlideInsightsEngine: lazy(() => import('./slides/SlideInsightsEngine').catch(() => ({ default: () => <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">7</div></div> }))),
  SlideCustomerStories: lazy(() => import('./slides/SlideCustomerStories').catch(() => ({ default: () => <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">8</div></div> }))),
  SlideCrossIndustryPlatform: lazy(() => import('./slides/SlideCrossIndustryPlatform').catch(() => ({ default: () => <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">9</div></div> }))),
  SlideMarketOpportunity: lazy(() => import('./slides/SlideMarketOpportunity').catch(() => ({ default: () => <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">10</div></div> }))),
  SlideCompetitiveLandscape: lazy(() => import('./slides/SlideCompetitiveLandscape').catch(() => ({ default: () => <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">10</div></div> }))),
  SlideGTMStrategy: lazy(() => import('./slides/SlideGTMStrategy').catch(() => ({ default: () => <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">11</div></div> }))),
  SlideFinancial: lazy(() => import('./slides/SlideFinancial').catch(() => ({ default: () => <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">12</div></div> }))),
  SlideStrategicFit: lazy(() => import('./slides/SlideStrategicFit').catch(() => ({ default: () => <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">13</div></div> }))),
  SlideClosing: lazy(() => import('./slides/SlideClosing').catch(() => ({ default: () => <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">14</div></div> }))),
  SlideIntegrations: lazy(() => import('./slides/SlideIntegrations').catch(() => ({ default: () => <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">17</div></div> }))),
  SlideTeam: lazy(() => import('./slides/SlideTeam').catch(() => ({ default: () => <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">14</div></div> }))),
  SlideAppendices: lazy(() => import('./slides/SlideAppendices').catch(() => ({ default: () => <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">16</div></div> }))),
  SlideConsultingPartners: lazy(() => import('./slides/SlideConsultingPartners').catch(() => ({ default: () => <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">17</div></div> }))),
  SlideDashboardIntro: lazy(() => import('./slides/SlideDashboardIntro').catch(() => ({ default: () => <div className="w-full h-full bg-slate-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">19</div></div> }))),
  SlideSalesManagementDashboard: lazy(() => import('./slides/SlideSalesManagementDashboard').catch(() => ({ default: () => <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">19</div></div> }))),
  SlideProductGoldStandardDashboard: lazy(() => import('./slides/SlideProductGoldStandardDashboard').catch(() => ({ default: () => <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">20</div></div> }))),
  SlideSpeedOfServiceDashboard: lazy(() => import('./slides/SlideSpeedOfServiceDashboard').catch(() => ({ default: () => <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">21</div></div> }))),
  SlideOilMonitoringDashboard: lazy(() => import('./slides/SlideOilMonitoringDashboard').catch(() => ({ default: () => <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">22</div></div> }))),
  SlideEquipmentMonitoringDashboard: lazy(() => import('./slides/SlideEquipmentMonitoringDashboard').catch(() => ({ default: () => <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">24</div></div> }))),
  SlideIssuesDashboard: lazy(() => import('./slides/SlideIssuesDashboard').catch(() => ({ default: () => <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">25</div></div> }))),
  SlideTaskComplianceDashboard: lazy(() => import('./slides/SlideTaskComplianceDashboard').catch(() => ({ default: () => <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">26</div></div> }))),
  SlideUsersEngagementDashboard: lazy(() => import('./slides/SlideUsersEngagementDashboard').catch(() => ({ default: () => <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">27</div></div> }))),
  SlideEnterpriseStack: lazy(() => import('./slides/SlideEnterpriseStack').catch(() => ({ default: () => <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">18</div></div> }))),
  SlideAuditReportDashboard: lazy(() => import('./slides/SlideAuditReportDashboard').catch(() => ({ default: () => <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">25</div></div> }))),
  SlideDashboardSummary: lazy(() => import('./slides/SlideDashboardSummary').catch(() => ({ default: () => <div className="w-full h-full bg-slate-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">28</div></div> }))),
};

const InvestorDeck = () => {
  const navigate = useNavigate();
  
  // State for managing selected slides for printing (all selected by default)
  const [selectedSlides, setSelectedSlides] = useState<Set<number>>(
    new Set(slideConfig.map(slide => slide.id))
  );

  const handleSlideClick = (slideId: number) => {
    if (typeof window !== 'undefined' && navigate) {
      navigate(`/investor-deck/slide/${slideId}`);
    }
  };

  const handleStartPresentation = () => {
    if (typeof window !== 'undefined' && navigate) {
      navigate('/investor-deck/slide/1');
    }
  };

  const toggleSlideSelection = (slideId: number) => {
    setSelectedSlides(prev => {
      const newSet = new Set(prev);
      if (newSet.has(slideId)) {
        newSet.delete(slideId);
      } else {
        newSet.add(slideId);
      }
      return newSet;
      });
    };

  const toggleSelectAll = () => {
    if (selectedSlides.size === slideConfig.length) {
      // Deselect all
      setSelectedSlides(new Set());
    } else {
      // Select all
      setSelectedSlides(new Set(slideConfig.map(slide => slide.id)));
    }
  };

  const handlePrintSelected = () => {
    if (selectedSlides.size === 0) return;
    
    if (typeof window !== 'undefined' && window.open) {
      const slideIds = Array.from(selectedSlides).sort((a, b) => a - b);
      const slideParams = slideIds.join(',');
      window.open(`/print-deck?slides=${slideParams}`, '_blank');
    }
  };

  const handleOnePager = () => {
    if (typeof window !== 'undefined' && window.open) {
      window.open('/one-pager', '_blank');
    }
  };

  // Remove old function since we're using PDFExporter component

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <img src={depointLogoBlack} alt="Depoint" className="h-12" />
            <div className="h-8 w-px bg-gray-300"></div>
            <h1 className="text-4xl font-bold text-gray-900">Investor Deck</h1>
        </div>
        
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Comprehensive presentation showcasing Depoint's enterprise operations intelligence platform, 
            trusted by global restaurant giants and proven at scale.
          </p>

                                        {/* Action Buttons */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <Button 
              onClick={handleStartPresentation}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg shadow-lg shadow-blue-600/20 transition-all hover:shadow-blue-600/30"
              size="lg"
            >
              <Play className="w-5 h-5 mr-2" />
              Start Presentation
            </Button>
            
            <Button
              onClick={handleOnePager}
              variant="outline"
              size="lg"
              className="border-blue-300 text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-lg transition-all hover:border-blue-400"
            >
              <FileText className="w-5 h-5 mr-2" />
              View One-Pager
            </Button>
            
            <Button
              onClick={handlePrintSelected}
              disabled={selectedSlides.size === 0}
              variant="outline"
              size="lg"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Printer className="w-5 h-5 mr-2" />
              {selectedSlides.size === slideConfig.length 
                ? 'Print All Slides' 
                : selectedSlides.size === 0 
                  ? 'Select Slides to Print'
                  : `Print ${selectedSlides.size} Selected`
              }
            </Button>
          </div>
            
          {/* Select All Toggle */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <Button
              onClick={toggleSelectAll}
              variant="ghost"
              size="sm"
              className="text-gray-600 hover:text-gray-900"
            >
              {selectedSlides.size === slideConfig.length ? (
                <CheckSquare className="w-4 h-4 mr-2" />
              ) : (
                <Square className="w-4 h-4 mr-2" />
              )}
              {selectedSlides.size === slideConfig.length ? 'Deselect All' : 'Select All'} 
              ({selectedSlides.size}/{slideConfig.length})
            </Button>
        </div>
        
          {/* Deck Stats */}
          <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
                <div className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span>{slideConfig.length} Slides</span>
                  </div>
                <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>~20 min presentation</span>
                  </div>
                    <div className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              <span>Q3 2025</span>
                    </div>
                  </div>
                </div>
                
                {/* Slides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {slideConfig.map((slide) => {
            const componentKey = slide.component as keyof typeof slideComponents;
            const SlideComponent = slideComponents[componentKey];
            const isSelected = selectedSlides.has(slide.id);
            
            return (
              <Card 
                key={slide.id}
                className={`group hover:shadow-xl transition-all duration-300 overflow-hidden border-2 ${
                  isSelected 
                    ? 'border-blue-500 ring-2 ring-blue-200' 
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                {/* Slide Toolbar */}
                <div className="bg-gray-50 border-b border-gray-200 px-3 py-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-gray-600">
                      {slide.id} / {slideConfig.length}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    {/* Print Checkbox */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleSlideSelection(slide.id);
                      }}
                      className="p-1.5 rounded hover:bg-gray-200 transition-colors"
                      title={isSelected ? "Remove from print selection" : "Add to print selection"}
                    >
                      {isSelected ? (
                        <CheckSquare className="w-4 h-4 text-blue-600" />
                      ) : (
                        <Square className="w-4 h-4 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>

                <div 
                  className="aspect-video bg-white relative overflow-hidden cursor-pointer"
                  onClick={() => handleSlideClick(slide.id)}
                >
                  {/* Actual Slide Preview */}
                  <div 
                    className="w-full h-full"
                    style={{
                      transform: 'scale(0.25)',
                      transformOrigin: 'top left',
                      width: '400%',
                      height: '400%'
                    }}
                  >
                    <Suspense 
                      fallback={
                        <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center">
                          <div className="text-white/20 text-6xl font-bold">
                            {slide.id}
                          </div>
                        </div>
                      }
                    >
                      {SlideComponent ? (
                        <SlideComponent />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="text-gray-500 text-sm">Unknown component: {slide.component}</div>
                        </div>
                      )}
                    </Suspense>
                  </div>
                  
                  {/* Slide Type Indicator */}
                  <div className="absolute top-3 left-3 z-10">
                    <div className="bg-black/70 backdrop-blur-sm rounded-lg px-2 py-1 text-xs text-white font-medium">
                      {slide.name}
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div 
                    className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10"
                    onClick={() => handleSlideClick(slide.id)}
                  >
                    <Button 
                      variant="ghost" 
                      className="text-white border border-white/30 hover:bg-white/10"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      View Slide
                    </Button>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {slide.name}
                  </h3>
                  <p className="text-sm text-gray-500 truncate">
                    {slide.title}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center mt-16 py-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            Confidential Investor Deck • Q3 2025 • Depoint Operations Intelligence Platform
          </p>
        </div>
      </div>
            </div>
  );
};

export default InvestorDeck;
