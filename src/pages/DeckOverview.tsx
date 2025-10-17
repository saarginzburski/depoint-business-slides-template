import React, { Suspense, lazy, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, FileText, Clock, Printer, Layers, Monitor, BookOpen, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { slideConfig } from './slides/slideConfig';
import PrintButton from '@/components/PrintButton';
import { DeckVariationsManager } from '@/components/DeckVariationsManager';
import { DeckVariationWithSections, useDeckVariations } from '@/hooks/useDeckVariations';
import { useSlideOrdering } from '@/hooks/useSlideOrdering';
import { DraggableSlideGrid } from '@/components/DraggableSlideGrid';
import WorkspaceAppBar from '@/components/WorkspaceAppBar';

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
  SlideCover: lazy(() => import('./slides/SlideCover').catch(() => ({ default: () => <div className="w-full h-full bg-slate-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">1</div></div> }))),
  SlideExecutiveSummary: lazy(() => import('./slides/SlideExecutiveSummary').catch(() => ({ default: () => <div className="w-full h-full bg-slate-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">2</div></div> }))),
  SlidePlatform: lazy(() => import('./slides/SlidePlatform').catch(() => ({ default: () => <div className="w-full h-full bg-slate-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">3</div></div> }))),
  SlideOurJourneyInvestor: lazy(() => import('./slides/SlideOurJourneyInvestor').catch(() => ({ default: () => <div className="w-full h-full bg-slate-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">4</div></div> }))),
  SlideProblem: lazy(() => import('./slides/SlideProblem').catch(() => ({ default: () => <div className="w-full h-full bg-slate-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">5</div></div> }))),
  SlideSolution: lazy(() => import('./slides/SlideSolution').catch(() => ({ default: () => <div className="w-full h-full bg-slate-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">3</div></div> }))),
  SlideDigitizingOpsManual: lazy(() => import('./slides/SlideDigitizingOpsManual').catch(() => ({ default: () => <div className="w-full h-full bg-slate-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">4</div></div> }))),
  SlideFranchisorFranchisee: lazy(() => import('./slides/SlideFranchisorFranchisee').catch(() => ({ default: () => <div className="w-full h-full bg-slate-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">5</div></div> }))),
  SlideJollibeeOperationBook: lazy(() => import('./slides/SlideJollibeeOperationBook').catch(() => ({ default: () => <div className="w-full h-full bg-slate-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">6</div></div> }))),
  SlideJollibeeCase: lazy(() => import('./slides/SlideJollibeeCase').catch(() => ({ default: () => <div className="w-full h-full bg-slate-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">7</div></div> }))),
  SlidePlatformEcosystem: lazy(() => import('./slides/SlidePlatformEcosystem').catch(() => ({ default: () => <div className="w-full h-full bg-slate-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">6</div></div> }))),
  SlideInsightsEngine: lazy(() => import('./slides/SlideInsightsEngine').catch(() => ({ default: () => <div className="w-full h-full bg-slate-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">7</div></div> }))),
  SlideCustomerStories: lazy(() => import('./slides/SlideCustomerStories').catch(() => ({ default: () => <div className="w-full h-full bg-slate-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">8</div></div> }))),
  SlideCrossIndustryPlatform: lazy(() => import('./slides/SlideCrossIndustryPlatform').catch(() => ({ default: () => <div className="w-full h-full bg-slate-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">9</div></div> }))),
  SlideMarketOpportunity: lazy(() => import('./slides/SlideMarketOpportunity').catch(() => ({ default: () => <div className="w-full h-full bg-slate-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">10</div></div> }))),
  SlideCompetitiveLandscape: lazy(() => import('./slides/SlideCompetitiveLandscape').catch(() => ({ default: () => <div className="w-full h-full bg-slate-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">10</div></div> }))),
  SlideGTMStrategy: lazy(() => import('./slides/SlideGTMStrategy').catch(() => ({ default: () => <div className="w-full h-full bg-slate-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">11</div></div> }))),
  SlideFinancial: lazy(() => import('./slides/SlideFinancial').catch(() => ({ default: () => <div className="w-full h-full bg-slate-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">12</div></div> }))),
  SlideStrategicFit: lazy(() => import('./slides/SlideStrategicFit').catch(() => ({ default: () => <div className="w-full h-full bg-slate-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">13</div></div> }))),
  SlideClosing: lazy(() => import('./slides/SlideClosing').catch(() => ({ default: () => <div className="w-full h-full bg-slate-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">14</div></div> }))),
  SlideIntegrations: lazy(() => import('./slides/SlideIntegrations').catch(() => ({ default: () => <div className="w-full h-full bg-slate-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">17</div></div> }))),
  SlideTeam: lazy(() => import('./slides/SlideTeam').catch(() => ({ default: () => <div className="w-full h-full bg-slate-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">14</div></div> }))),
  SlideAppendices: lazy(() => import('./slides/SlideAppendices').catch(() => ({ default: () => <div className="w-full h-full bg-slate-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">16</div></div> }))),
  SlideDashboardsDemo: lazy(() => import('./slides/SlideDashboardsDemo').catch(() => ({ default: () => <div className="w-full h-full bg-slate-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">32</div></div> }))),
  SlideConsultingPartners: lazy(() => import('./slides/SlideConsultingPartners').catch(() => ({ default: () => <div className="w-full h-full bg-slate-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">17</div></div> }))),
  SlideDashboardIntro: lazy(() => import('./slides/SlideDashboardIntro').catch(() => ({ default: () => <div className="w-full h-full bg-slate-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">19</div></div> }))),
  SlideSalesManagementDashboard: lazy(() => import('./slides/SlideSalesManagementDashboard').catch(() => ({ default: () => <div className="w-full h-full bg-slate-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">19</div></div> }))),
  SlideProductGoldStandardDashboard: lazy(() => import('./slides/SlideProductGoldStandardDashboard').catch(() => ({ default: () => <div className="w-full h-full bg-slate-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">20</div></div> }))),
  SlideSpeedOfServiceDashboard: lazy(() => import('./slides/SlideSpeedOfServiceDashboard').catch(() => ({ default: () => <div className="w-full h-full bg-slate-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">21</div></div> }))),
  SlideOilMonitoringDashboard: lazy(() => import('./slides/SlideOilMonitoringDashboard').catch(() => ({ default: () => <div className="w-full h-full bg-slate-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">22</div></div> }))),
  SlideEquipmentMonitoringDashboard: lazy(() => import('./slides/SlideEquipmentMonitoringDashboard').catch(() => ({ default: () => <div className="w-full h-full bg-slate-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">24</div></div> }))),
  SlideIssuesDashboard: lazy(() => import('./slides/SlideIssuesDashboard').catch(() => ({ default: () => <div className="w-full h-full bg-slate-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">25</div></div> }))),
  SlideTaskComplianceDashboard: lazy(() => import('./slides/SlideTaskComplianceDashboard').catch(() => ({ default: () => <div className="w-full h-full bg-slate-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">26</div></div> }))),
  SlideUsersEngagementDashboard: lazy(() => import('./slides/SlideUsersEngagementDashboard').catch(() => ({ default: () => <div className="w-full h-full bg-slate-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">27</div></div> }))),
  SlideEnterpriseStack: lazy(() => import('./slides/SlideEnterpriseStack').catch(() => ({ default: () => <div className="w-full h-full bg-slate-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">18</div></div> }))),
  SlideAuditReportDashboard: lazy(() => import('./slides/SlideAuditReportDashboard').catch(() => ({ default: () => <div className="w-full h-full bg-slate-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">25</div></div> }))),
  SlideDashboardSummary: lazy(() => import('./slides/SlideDashboardSummary').catch(() => ({ default: () => <div className="w-full h-full bg-slate-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">28</div></div> }))),
};

const DeckOverview = () => {
  const navigate = useNavigate();
  
  const [deckName, setDeckName] = useState('Depoint Business Templates Editor');
  const [isEditingName, setIsEditingName] = useState(false);
  // Hidden section is always included and cannot be toggled
  const [selectedSections, setSelectedSections] = useState<Set<string>>(
    new Set([...sections.map(section => section.id)])
  );
  // Use deck variations hook
  const { currentVariation, setCurrentVariation, updateVariationSections } = useDeckVariations();

  // Use slide ordering hook
  const { getOrderedSlidesBySection, getVisibleSlides, refetch } = useSlideOrdering(
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
      const slidesParam = visibleSlides.map(s => s.id).join(',');
      const slidesQuery = slidesParam ? `&slides=${slidesParam}` : '';
      navigate(`/deck/slide/${slideId}?deckName=${encodeURIComponent(deckName)}${slidesQuery}`);
    }
  };

  const handleStartPresentation = () => {
    if (typeof window !== 'undefined' && navigate) {
      const firstSlide = visibleSlides.length > 0 ? visibleSlides[0].id : 1;
      const slidesParam = visibleSlides.map(s => s.id).join(',');
      const slidesQuery = slidesParam ? `&slides=${slidesParam}` : '';
      navigate(`/deck/slide/${firstSlide}?deckName=${encodeURIComponent(deckName)}${slidesQuery}`);
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
    // Hidden section cannot be toggled - it's always visible
    if (sectionId === 'hidden') {
      return;
    }
    
    const newSet = new Set(selectedSections);
    if (newSet.has(sectionId)) {
      newSet.delete(sectionId);
    } else {
      newSet.add(sectionId);
    }
    
    // Always ensure hidden section is included
    newSet.add('hidden');
    
    setSelectedSections(newSet);
    
    // Auto-save to current variation if one exists
    if (currentVariation) {
      const sectionsArray = Array.from(newSet);
      await updateVariationSections(currentVariation.id, sectionsArray);
    }
  };



  return (
    <div className="w-full min-h-screen bg-neutral-50">
      {/* Material 3 App Bar */}
      <WorkspaceAppBar 
        title="Depoint Templates"
        breadcrumbs={[{ label: deckName }]}
      />
      
      <div className="max-w-[1600px] mx-auto px-6 py-6">
        {/* Deck Info Bar */}
        <div className="surface elevation-1 rounded-lg px-6 py-4 mb-6 flex items-center justify-between">
          {/* Left - Deck Name (Editable) */}
          <div className="flex items-center gap-4">
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
                className="text-title-large font-medium text-neutral-900 bg-transparent border-b-2 border-primary outline-none transition-standard"
                autoFocus
                style={{ width: `${Math.max(deckName.length * 0.7, 10)}ch` }}
              />
            ) : (
              <h1 
                className="text-title-large font-medium text-neutral-900 cursor-pointer hover-bg px-2 py-1 -ml-2 rounded transition-standard"
                onClick={() => setIsEditingName(true)}
                title="Click to edit deck name"
              >
                {deckName}
              </h1>
            )}
            
            {/* Deck Stats */}
            <div className="flex items-center gap-4 text-body-small text-neutral-600 border-l border-neutral-200 pl-4">
              <div className="flex items-center gap-1.5">
                <FileText className="h-4 w-4" />
                <span>{visibleSlides.length} slides</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>~{Math.ceil(visibleSlides.length * 1.5)} min</span>
              </div>
            </div>
          </div>

          {/* Right - Primary Actions */}
          <div className="flex items-center gap-3">
            <PrintButton 
              visibleSlides={visibleSlides}
              variant="outline"
              className="border-neutral-300 text-neutral-700 hover-bg"
            />
            
            <Button 
              onClick={() => {
                const firstSlide = visibleSlides.length > 0 ? visibleSlides[0].id : 1;
                const slidesParam = visibleSlides.map(s => s.id).join(',');
                const slidesQuery = slidesParam ? `&slides=${slidesParam}` : '';
                navigate(`/deck/slide/${firstSlide}?deckName=${encodeURIComponent(deckName)}${slidesQuery}`);
              }}
              className="bg-primary hover:bg-primary/90 text-white elevation-1 hover-lift transition-standard"
            >
              <Play className="w-4 h-4 mr-2" />
              Present
            </Button>
          </div>
        </div>

        {/* Section Filter Chips */}
        <div className="mb-6">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-label-medium text-neutral-600 mr-2">Sections:</span>
            {sections.filter(s => s.id !== 'hidden').map(section => {
              const Icon = section.icon;
              const isSelected = selectedSections.has(section.id);
              
              return (
                <Badge
                  key={section.id}
                  onClick={() => toggleSectionSelection(section.id)}
                  className={`
                    cursor-pointer transition-all hover-lift px-3 py-1.5
                    ${isSelected 
                      ? 'bg-primary text-white hover:bg-primary/90' 
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 border border-neutral-300'
                    }
                  `}
                  variant={isSelected ? "default" : "outline"}
                >
                  <Icon className="w-3.5 h-3.5 mr-1.5" />
                  {section.name}
                </Badge>
              );
            })}
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
            onOrdersChanged={refetch}
          />
        )}

        {/* Footer */}
        <footer className="text-center mt-16 py-6 border-t border-neutral-200">
          <p className="text-body-small text-neutral-500">
            Confidential Investor Deck • Q3 2025 • Depoint Operations Intelligence Platform
          </p>
        </footer>
      </div>
    </div>
  );
};

export default DeckOverview;
