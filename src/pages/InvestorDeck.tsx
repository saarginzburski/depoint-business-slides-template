import React, { Suspense, lazy, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Eye, FileText, Clock, Printer, CheckSquare, Square, Layers, Monitor, BookOpen, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
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
    slides: Array.from({length: 21}, (_, i) => i + 1),
    color: 'blue'
  },
  {
    id: 'appendices', 
    name: 'Appendices',
    description: 'Supporting documentation (1 slide)',
    icon: BookOpen,
    slides: [22],
    color: 'slate'
  },
  {
    id: 'demo',
    name: 'Dashboard Demo',
    description: 'Live dashboard demonstrations (10 slides)', 
    icon: Monitor,
    slides: Array.from({length: 10}, (_, i) => i + 23),
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
  
  const [deckName, setDeckName] = useState('Investor Deck');
  const [isEditingName, setIsEditingName] = useState(false);
  const [isDeckPublished, setIsDeckPublished] = useState(() => {
    return localStorage.getItem('isDeckPublished') === 'true';
  });
  const [selectedSections, setSelectedSections] = useState<Set<string>>(
    new Set(sections.map(section => section.id))
  );
  const [selectedSlides, setSelectedSlides] = useState<Set<number>>(
    new Set(slideConfig.map(slide => slide.id))
  );

  const getSlidesBySection = () => {
    const slidesBySection: { [key: string]: typeof slideConfig } = {};
    
    sections.forEach(section => {
      if (selectedSections.has(section.id)) {
        slidesBySection[section.id] = slideConfig.filter(slide => 
          section.slides.includes(slide.id)
        );
      }
    });
    
    return slidesBySection;
  };

  const getVisibleSlides = () => {
    const visibleSlideIds = new Set<number>();
    sections.forEach(section => {
      if (selectedSections.has(section.id)) {
        section.slides.forEach(slideId => visibleSlideIds.add(slideId));
      }
    });
    return slideConfig.filter(slide => visibleSlideIds.has(slide.id));
  };

  const slidesBySection = getSlidesBySection();
  const visibleSlides = getVisibleSlides();

  const handleSlideClick = (slideId: number) => {
    if (typeof window !== 'undefined' && navigate) {
      // Pass deck name as URL parameter
      navigate(`/deck/slide/${slideId}?deckName=${encodeURIComponent(deckName)}`);
    }
  };

  const handleStartPresentation = () => {
    if (typeof window !== 'undefined' && navigate) {
      const firstSlide = visibleSlides.length > 0 ? visibleSlides[0].id : 1;
      navigate(`/deck/slide/${firstSlide}?deckName=${encodeURIComponent(deckName)}`);
    }
  };

  const handleDeckNameSubmit = () => {
    setIsEditingName(false);
  };

  const handleDeckNameKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleDeckNameSubmit();
    }
    if (e.key === 'Escape') {
      setIsEditingName(false);
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

  const handlePublishToggle = (checked: boolean) => {
    setIsDeckPublished(checked);
    localStorage.setItem('isDeckPublished', checked.toString());
    
    // Force a page reload to update the App component's routing
    if (checked) {
      window.location.href = '/deck/slide/1';
    }
  };

  const getSelectedVisibleSlidesCount = () => {
    return visibleSlides.filter(slide => selectedSlides.has(slide.id)).length;
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-6 py-8">
        {/* Header Section - Compact & Modern */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm mb-8">
          <div className="px-8 py-6">
            {/* Top Row - Logo, Title, and Info */}
            <div className="flex items-center justify-between mb-6">
              {/* Left - Logo and Title */}
              <div className="flex items-center gap-4">
                <img src={depointLogoBlack} alt="Depoint" className="h-8" />
                <div className="h-6 w-px bg-gray-300"></div>
                {isEditingName ? (
                  <input
                    type="text"
                    value={deckName}
                    onChange={(e) => setDeckName(e.target.value)}
                    onBlur={() => setIsEditingName(false)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === 'Escape') {
                        setIsEditingName(false);
                      }
                    }}
                    className="text-2xl font-semibold text-gray-900 bg-transparent border-b-2 border-blue-500 outline-none min-w-0"
                    autoFocus
                    style={{ width: `${Math.max(deckName.length * 0.6, 8)}em` }}
                  />
                ) : (
                  <h1 
                    className="text-2xl font-semibold text-gray-900 cursor-pointer hover:text-blue-600 transition-colors"
                    onClick={() => setIsEditingName(true)}
                    title="Click to edit deck name"
                  >
                    {deckName}
                  </h1>
                )}
              </div>

              {/* Right - Deck Info */}
              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <span>{visibleSlides.length} Slides Displayed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>~{Math.ceil(visibleSlides.length * 1.5)} min presentation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">Q3 2025</span>
                </div>
              </div>
            </div>

            {/* Bottom Row - All Actions Grouped */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              {/* Left - Main Actions */}
              <div className="flex items-center gap-3">
                <Button 
                  onClick={() => {
                    const firstSlide = slideConfig.length > 0 ? slideConfig[0].id : 1;
                    navigate(`/deck/slide/${firstSlide}?deckName=${encodeURIComponent(deckName)}`);
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-sm transition-all"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Start Presentation
                </Button>
                
                <Button
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.open) {
                      const slideIds = slideConfig.map(s => s.id).sort((a, b) => a - b);
                      const slideParams = slideIds.join(',');
                      window.open(`/print-deck?slides=${slideParams}`, '_blank');
                    }
                  }}
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2 rounded-lg"
                >
                  <Printer className="w-4 h-4 mr-2" />
                  Print All
                </Button>
              </div>

              {/* Center - Publish Toggle */}
              <div className="flex items-center gap-3 px-4 py-2 bg-gray-50 rounded-lg border border-gray-200">
                <Globe className="w-4 h-4 text-blue-600" />
                <Label htmlFor="publish-toggle" className="text-sm font-medium text-gray-700 cursor-pointer">
                  Publish Deck
                </Label>
                <Switch
                  id="publish-toggle"
                  checked={isDeckPublished}
                  onCheckedChange={(checked) => {
                    setIsDeckPublished(checked);
                    localStorage.setItem('isDeckPublished', checked.toString());
                    if (checked) {
                      window.location.href = '/deck/slide/1';
                    }
                  }}
                  className="data-[state=checked]:bg-blue-600"
                />
                <span className="text-xs text-gray-500">
                  {isDeckPublished ? 'Root URL redirects to first slide' : 'Root URL shows overview'}
                </span>
              </div>

              {/* Right - Secondary Actions - For now empty, can add more later */}
              <div className="w-40"></div>
            </div>
          </div>
        </div>
        
        {/* Section Selection */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 text-center">Select Sections to Display</h2>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {sections.map(section => {
              const Icon = section.icon;
              const isSelected = selectedSections.has(section.id);
              const colorClasses = {
                blue: isSelected ? 'bg-blue-50 border-blue-300 text-blue-900' : 'bg-white border-gray-200 text-gray-700',
                slate: isSelected ? 'bg-slate-50 border-slate-300 text-slate-900' : 'bg-white border-gray-200 text-gray-700',
                green: isSelected ? 'bg-green-50 border-green-300 text-green-900' : 'bg-white border-gray-200 text-gray-700',
              };
              
              return (
                <Card
                  key={section.id}
                  className={`p-4 cursor-pointer transition-all min-w-[250px] ${colorClasses[section.color as keyof typeof colorClasses]}`}
                  onClick={() => toggleSectionSelection(section.id)}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="w-5 h-5" />
                    <h3 className="font-semibold">{section.name}</h3>
                  </div>
                  <p className="text-sm opacity-75">{section.description}</p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Slide Selection Controls */}
        {visibleSlides.length > 0 && (
          <div className="mb-8 flex items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600">{visibleSlides.length} Slides Displayed</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600">~{Math.ceil(visibleSlides.length * 1.5)} min presentation</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600">Q3 2025</span>
            </div>
          </div>
        )}

        {/* Slides organized by sections */}
        {visibleSlides.length > 0 && (
          <div className="space-y-8">
            {/* Global slide selection */}
            <div className="text-center">
              <Button
                onClick={toggleSelectAllSlides}
                variant="ghost"
                className="text-gray-600 hover:text-gray-800"
              >
                {visibleSlides.every(slide => selectedSlides.has(slide.id)) ? (
                  <CheckSquare className="w-4 h-4 mr-2" />
                ) : (
                  <Square className="w-4 h-4 mr-2" />
                )}
                {visibleSlides.every(slide => selectedSlides.has(slide.id)) 
                  ? `Deselect All Visible (${visibleSlides.length}/${visibleSlides.length})`
                  : `Select All Visible (${getSelectedVisibleSlidesCount()}/${visibleSlides.length})`
                }
              </Button>
            </div>

            {/* Slides by section */}
            {Object.entries(slidesBySection).map(([sectionId, sectionSlides]) => {
              const section = sections.find(s => s.id === sectionId);
              if (!section) return null;
              
              const Icon = section.icon;
              const colorClasses = {
                blue: 'border-blue-200 bg-blue-50',
                slate: 'border-slate-200 bg-slate-50', 
                green: 'border-green-200 bg-green-50',
              };
              
              return (
                <div key={sectionId} className={`border rounded-lg p-6 ${colorClasses[section.color as keyof typeof colorClasses]}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-5 h-5 text-gray-700" />
                    <h3 className="text-lg font-semibold text-gray-900">{section.name}</h3>
                    <span className="text-sm text-gray-500">({sectionSlides.length} slides)</span>
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {sectionSlides.map(slide => {
                      const componentKey = slide.component as keyof typeof slideComponents;
                      const SlideComponent = slideComponents[componentKey];
                      const isSelected = selectedSlides.has(slide.id);
                      
                      return (
                        <Card
                          key={slide.id}
                          className={`relative p-3 transition-all cursor-pointer ${
                            isSelected 
                              ? 'ring-2 ring-blue-500 ring-offset-2' 
                              : 'hover:shadow-md hover:scale-105'
                          }`}
                          onClick={() => toggleSlideSelection(slide.id)}
                        >
                          <div 
                            className="w-full aspect-[16/9] bg-white rounded border shadow-sm mb-2 overflow-hidden cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSlideClick(slide.id);
                            }}
                          >
                            <div className="w-full h-full transform scale-[0.2] origin-top-left" style={{ width: '500%', height: '500%' }}>
                              <Suspense fallback={<div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center"><div className="animate-pulse text-gray-400">{slide.id}</div></div>}>
                                {SlideComponent ? <SlideComponent /> : <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center"><div className="text-gray-400 text-6xl font-bold">{slide.id}</div></div>}
                              </Suspense>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="text-xs font-medium text-gray-900 truncate">{slide.name}</h4>
                              <p className="text-xs text-gray-500">Slide {slide.id}</p>
                            </div>
                            
                            <div 
                              className="flex-shrink-0 ml-2"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {isSelected ? (
                                <CheckSquare 
                                  className="w-4 h-4 text-blue-600 cursor-pointer" 
                                  onClick={() => toggleSlideSelection(slide.id)}
                                />
                              ) : (
                                <Square 
                                  className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer" 
                                  onClick={() => toggleSlideSelection(slide.id)}
                                />
                              )}
                            </div>
                          </div>
                        </Card>
                      );
                    })}
                  </div>
                </div>
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
