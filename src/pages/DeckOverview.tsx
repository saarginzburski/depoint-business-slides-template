import React, { Suspense, lazy, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Eye, FileText, Clock, Printer, CheckSquare, Square, Layers, Monitor, BookOpen, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { slideConfig } from './slides/slideConfig';
import PDFExporter from '@/components/PDFExporter';
import { DeckVariationsManager } from '@/components/DeckVariationsManager';
import { DeckVariationWithSections, useDeckVariations } from '@/hooks/useDeckVariations';
import { useSlideOrdering } from '@/hooks/useSlideOrdering';
import { DraggableSlideGrid } from '@/components/DraggableSlideGrid';
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
    name: 'Demo',
    description: 'Live dashboard demonstrations (10 slides)', 
    icon: Monitor,
    slides: Array.from({length: 10}, (_, i) => i + 23),
    color: 'green'
  },
  {
    id: 'hidden',
    name: 'Hidden',
    description: 'Slides not shown in presentation',
    icon: EyeOff,
    slides: [],
    color: 'gray'
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

const DeckOverview = () => {
  const navigate = useNavigate();
  
  const [deckName, setDeckName] = useState('Depoint Business Templates Editor');
  const [isEditingName, setIsEditingName] = useState(false);
  const [selectedSections, setSelectedSections] = useState<Set<string>>(
    new Set(sections.map(section => section.id))
  );
  const [currentVariation, setCurrentVariation] = useState<DeckVariationWithSections | null>(null);

  // Use deck variations hook
  const { updateVariationSections } = useDeckVariations();

  // Use slide ordering hook
  const { getOrderedSlidesBySection, getVisibleSlides } = useSlideOrdering(
    currentVariation?.id || null, 
    sections
  );

  // Update selected sections when variation changes
  useEffect(() => {
    if (currentVariation) {
      setSelectedSections(new Set(currentVariation.sections));
    }
  }, [currentVariation]);

  const handleVariationSelect = (variation: DeckVariationWithSections | null) => {
    setCurrentVariation(variation);
    if (variation) {
      setDeckName(variation.name);
    }
  };

  const handleDeckNameChange = (name: string) => {
    setDeckName(name);
  };

  // Get slides organized by section using hook
  const orderedSlidesBySection = getOrderedSlidesBySection();
  
  // Get visible slides based on selected sections using hook
  const visibleSlides = getVisibleSlides(selectedSections);
  
  // Filter ordered slides by selected sections for display
  const slidesBySection = Object.fromEntries(
    Object.entries(orderedSlidesBySection).filter(([sectionId]) => 
      selectedSections.has(sectionId)
    )
  );

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

  const toggleSectionSelection = async (sectionId: string) => {
    const newSet = new Set(selectedSections);
    if (newSet.has(sectionId)) {
      newSet.delete(sectionId);
    } else {
      newSet.add(sectionId);
    }
    
    setSelectedSections(newSet);
    
    // Auto-save to current variation if one exists
    if (currentVariation) {
      const sectionsArray = Array.from(newSet);
      await updateVariationSections(currentVariation.id, sectionsArray);
    }
  };

  const handlePrintSelected = () => {
    if (visibleSlides.length === 0) return;
    
    if (typeof window !== 'undefined' && window.open) {
      const slideIds = visibleSlides.map(slide => slide.id).sort((a, b) => a - b);
      const slideParams = slideIds.join(',');
      window.open(`/print-deck?slides=${slideParams}`, '_blank');
    }
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
                  View Deck
                </Button>
                
                <Button
                  onClick={handlePrintSelected}
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2 rounded-lg"
                >
                  <Printer className="w-4 h-4 mr-2" />
                  Print Deck
                </Button>
              </div>

              {/* Right - Section Selection */}
              <div className="flex items-center gap-2">
                {sections.map(section => {
                  const Icon = section.icon;
                  const isSelected = selectedSections.has(section.id);
                  const colorClasses = {
                    blue: isSelected ? 'bg-blue-50 border-blue-300 text-blue-900' : 'bg-white border-gray-200 text-gray-700',
                    slate: isSelected ? 'bg-slate-50 border-slate-300 text-slate-900' : 'bg-white border-gray-200 text-gray-700',
                    green: isSelected ? 'bg-green-50 border-green-300 text-green-900' : 'bg-white border-gray-200 text-gray-700',
                    gray: isSelected ? 'bg-gray-50 border-gray-300 text-gray-900' : 'bg-white border-gray-200 text-gray-700',
                  };
                  
                  return (
                    <Button
                      key={section.id}
                      onClick={() => toggleSectionSelection(section.id)}
                      variant="outline"
                      size="sm"
                      className={`transition-all ${colorClasses[section.color as keyof typeof colorClasses]}`}
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      {section.name}
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        
        {/* Deck Variations Manager */}
        <DeckVariationsManager 
          sections={sections}
          onVariationSelect={handleVariationSelect}
          onDeckNameChange={handleDeckNameChange}
        />
        
        
        {/* Slides organized by sections with drag and drop */}
        {visibleSlides.length > 0 && (
          <DraggableSlideGrid
            sections={sections}
            selectedSections={selectedSections}
            slideComponents={slideComponents}
            onSlideClick={handleSlideClick}
            variationId={currentVariation?.id || null}
            orderedSlidesBySection={slidesBySection}
          />
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

export default DeckOverview;
