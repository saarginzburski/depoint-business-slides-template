import React, { Suspense, lazy, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Eye, FileText, Clock, Printer, CheckSquare, Square, Layers, Monitor, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { slideConfig } from './slides/slideConfig';
import PDFExporter from '@/components/PDFExporter';
import depointLogoBlack from '@/assets/Depoint-Logo-black.png';

// Define section structure
interface Section {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  slides: number[];
  color: string;
}

const sections: Section[] = [
  {
    id: 'deck',
    name: 'Main Deck',
    description: 'Core investor presentation (21 slides)',
    icon: Layers,
    slides: Array.from({length: 21}, (_, i) => i + 1), // slides 1-21
    color: 'blue'
  },
  {
    id: 'appendices', 
    name: 'Appendices',
    description: 'Supporting documentation (1 slide)',
    icon: BookOpen,
    slides: [22], // slide 22
    color: 'slate'
  },
  {
    id: 'demo',
    name: 'Dashboard Demo',
    description: 'Live dashboard demonstrations (10 slides)', 
    icon: Monitor,
    slides: Array.from({length: 10}, (_, i) => i + 23), // slides 23-32
    color: 'green'
  }
];

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
  SlideDashboardsDemo: lazy(() => import('./slides/SlideDashboardsDemo').catch(() => ({ default: () => <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">32</div></div> }))),
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
  
  // State for managing selected sections (all selected by default)
  const [selectedSections, setSelectedSections] = useState<Set<string>>(
    new Set(sections.map(section => section.id))
  );
  
  // State for managing selected slides for printing
  const [selectedSlides, setSelectedSlides] = useState<Set<number>>(
    new Set(slideConfig.map(slide => slide.id))
  );

  // Get slides from selected sections
  const getVisibleSlides = () => {
    const visibleSlideIds = new Set<number>();
    sections.forEach(section => {
      if (selectedSections.has(section.id)) {
        section.slides.forEach(slideId => visibleSlideIds.add(slideId));
      }
    });
    return slideConfig.filter(slide => visibleSlideIds.has(slide.id));
  };

  const visibleSlides = getVisibleSlides();

  const handleSlideClick = (slideId: number) => {
    if (typeof window !== 'undefined' && navigate) {
      navigate(`/investor-deck/slide/${slideId}`);
    }
  };

  const handleStartPresentation = () => {
    if (typeof window !== 'undefined' && navigate) {
      const firstSlide = visibleSlides.length > 0 ? visibleSlides[0].id : 1;
      navigate(`/investor-deck/slide/${firstSlide}`);
    }
  };

  const toggleSectionSelection = (sectionId: string) => {
    setSelectedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId);
      } else {
        newSet.add(sectionId);
      }
      return newSet;
    });
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

  const toggleSelectAllSlides = () => {
    const allVisibleSlideIds = visibleSlides.map(slide => slide.id);
    const allVisibleSelected = allVisibleSlideIds.every(id => selectedSlides.has(id));
    
    if (allVisibleSelected) {
      // Deselect all visible slides
      setSelectedSlides(prev => {
        const newSet = new Set(prev);
        allVisibleSlideIds.forEach(id => newSet.delete(id));
        return newSet;
      });
    } else {
      // Select all visible slides
      setSelectedSlides(prev => {
        const newSet = new Set(prev);
        allVisibleSlideIds.forEach(id => newSet.add(id));
        return newSet;
      });
    }
  };

  const handlePrintSelected = () => {
    const visibleSelectedSlides = Array.from(selectedSlides).filter(id => 
      visibleSlides.some(slide => slide.id === id)
    );
    
    if (visibleSelectedSlides.length === 0) return;
    
    if (typeof window !== 'undefined' && window.open) {
      const slideIds = visibleSelectedSlides.sort((a, b) => a - b);
      const slideParams = slideIds.join(',');
      window.open(`/print-deck?slides=${slideParams}`, '_blank');
    }
  };

  const getSelectedVisibleSlidesCount = () => {
    return visibleSlides.filter(slide => selectedSlides.has(slide.id)).length;
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
              disabled={visibleSlides.length === 0}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg shadow-lg shadow-blue-600/20 transition-all hover:shadow-blue-600/30 disabled:opacity-50"
              size="lg"
            >
              <Play className="w-5 h-5 mr-2" />
              Start Presentation
            </Button>
            
            <Button
              onClick={handlePrintSelected}
              disabled={getSelectedVisibleSlidesCount() === 0}
              variant="outline"
              size="lg"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Printer className="w-5 h-5 mr-2" />
              {getSelectedVisibleSlidesCount() === 0 
                ? 'Select Slides to Print'
                : `Print ${getSelectedVisibleSlidesCount()} Selected`
              }
            </Button>
          </div>
          
          {/* Section Selection */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 text-center">Select Sections to Display</h2>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              {sections.map((section) => {
                const isSelected = selectedSections.has(section.id);
                const IconComponent = section.icon;
                const colorClasses = {
                  blue: isSelected 
                    ? 'bg-blue-100 border-blue-500 text-blue-700' 
                    : 'border-blue-200 text-blue-600 hover:bg-blue-50',
                  slate: isSelected 
                    ? 'bg-slate-100 border-slate-500 text-slate-700' 
                    : 'border-slate-200 text-slate-600 hover:bg-slate-50',
                  green: isSelected 
                    ? 'bg-green-100 border-green-500 text-green-700' 
                    : 'border-green-200 text-green-600 hover:bg-green-50'
                };
                
                return (
                  <button
                    key={section.id}
                    onClick={() => toggleSectionSelection(section.id)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg border-2 transition-all hover:shadow-md ${colorClasses[section.color as keyof typeof colorClasses]}`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <div className="text-left">
                      <div className="font-medium">{section.name}</div>
                      <div className="text-xs opacity-75">{section.description}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
            
          {/* Select All Slides Toggle */}
          {visibleSlides.length > 0 && (
            <div className="flex items-center justify-center gap-2 mb-8">
              <Button
                onClick={toggleSelectAllSlides}
                variant="ghost"
                size="sm"
                className="text-gray-600 hover:text-gray-900"
              >
                {getSelectedVisibleSlidesCount() === visibleSlides.length ? (
                  <CheckSquare className="w-4 h-4 mr-2" />
                ) : (
                  <Square className="w-4 h-4 mr-2" />
                )}
                {getSelectedVisibleSlidesCount() === visibleSlides.length ? 'Deselect All Visible' : 'Select All Visible'} 
                ({getSelectedVisibleSlidesCount()}/{visibleSlides.length})
              </Button>
            </div>
          )}
        
          {/* Deck Stats */}
          <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span>{visibleSlides.length} Slides Displayed</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>~{Math.ceil(visibleSlides.length * 0.95)} min presentation</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              <span>Q3 2025</span>
            </div>
          </div>
        </div>
                
        {/* No slides message */}
        {visibleSlides.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Layers className="w-16 h-16 mx-auto mb-4" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No Sections Selected</h3>
            <p className="text-gray-500">Please select at least one section to display slides.</p>
          </div>
        ) : (
          /* Slides Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {visibleSlides.map((slide) => {
              const componentKey = slide.component as keyof typeof slideComponents;
              const SlideComponent = slideComponents[componentKey];
              const isSelected = selectedSlides.has(slide.id);
              
              // Determine section for slide
              const slideSection = sections.find(section => section.slides.includes(slide.id));
              const sectionColorClasses = {
                blue: 'border-blue-200',
                slate: 'border-slate-200', 
                green: 'border-green-200'
              };
              
              return (
                <Card 
                  key={slide.id}
                  className={`group hover:shadow-xl transition-all duration-300 overflow-hidden border-2 ${
                    isSelected 
                      ? 'border-blue-500 ring-2 ring-blue-200' 
                      : sectionColorClasses[slideSection?.color as keyof typeof sectionColorClasses] || 'border-gray-200'
                  } hover:border-blue-300`}
                >
                  {/* Slide Toolbar */}
                  <div className="bg-gray-50 border-b border-gray-200 px-3 py-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium text-gray-600">
                        {slide.id} / {slideConfig.length}
                      </span>
                      {slideSection && (
                        <span className={`text-xs px-2 py-0.5 rounded-full text-${slideSection.color}-700 bg-${slideSection.color}-100`}>
                          {slideSection.name}
                        </span>
                      )}
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
        )}

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
