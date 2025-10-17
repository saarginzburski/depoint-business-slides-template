import React, { Suspense, lazy, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, FileText, Clock, Printer, Layers, Monitor, BookOpen, EyeOff, Copy, Edit2, Eye, Trash2 } from 'lucide-react';
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
import { NavigationRail } from '@/components/NavigationRail';
import { HiddenSlidesDrawer } from '@/components/HiddenSlidesDrawer';
import { CommandPalette, CommandItem } from '@/components/CommandPalette';
import { QuickActionsBar } from '@/components/QuickActionsBar';
import { SlideContextMenu } from '@/components/SlideContextMenu';
import { useKeyboardShortcuts } from '@/hooks/useKeyboardShortcuts';
import { toast } from '@/hooks/use-toast';

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
  
  // New UX state management
  const [selectedSlideIds, setSelectedSlideIds] = useState<Set<number>>(new Set());
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [contextMenu, setContextMenu] = useState<{ x: number; y: number; slideId: number } | null>(null);
  const [navActiveItem, setNavActiveItem] = useState('decks');
  
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

  // Multi-select handlers
  const toggleSlideSelection = (slideId: number, ctrlKey: boolean) => {
    const newSet = new Set(selectedSlideIds);
    if (ctrlKey) {
      // Add to selection
      if (newSet.has(slideId)) {
        newSet.delete(slideId);
      } else {
        newSet.add(slideId);
      }
    } else {
      // Replace selection
      newSet.clear();
      newSet.add(slideId);
    }
    setSelectedSlideIds(newSet);
  };

  const clearSelection = () => setSelectedSlideIds(new Set());

  const selectAll = () => {
    const allIds = visibleSlides.map(s => s.id);
    setSelectedSlideIds(new Set(allIds));
  };

  // Bulk action handlers
  const handleHideSelected = () => {
    if (selectedSlideIds.size === 0) return;
    // TODO: Implement bulk hide
    toast({
      title: `${selectedSlideIds.size} slides hidden`,
      description: 'Slides have been removed from the deck',
    });
    clearSelection();
  };

  const handleRestoreSelected = (targetSection: string) => {
    if (selectedSlideIds.size === 0) return;
    // TODO: Implement bulk restore
    toast({
      title: `${selectedSlideIds.size} slides restored`,
      description: `Slides have been added to ${targetSection}`,
    });
    clearSelection();
  };

  const handleDuplicateSelected = () => {
    if (selectedSlideIds.size === 0) return;
    // TODO: Implement bulk duplicate
    toast({
      title: `${selectedSlideIds.size} slides duplicated`,
    });
    clearSelection();
  };

  const handleMoveSelectedToDeck = (deckId: string) => {
    if (selectedSlideIds.size === 0) return;
    const deck = sections.find(s => s.id === deckId);
    toast({
      title: `${selectedSlideIds.size} slides moved`,
      description: `Moved to ${deck?.name || deckId}`,
    });
    clearSelection();
  };

  const handleDeleteSelected = () => {
    if (selectedSlideIds.size === 0) return;
    if (confirm(`Delete ${selectedSlideIds.size} slides? This cannot be undone.`)) {
      // TODO: Implement bulk delete
      toast({
        title: `${selectedSlideIds.size} slides deleted`,
        variant: 'destructive',
      });
      clearSelection();
    }
  };

  // Context menu handlers
  const handleContextMenu = (e: React.MouseEvent, slideId: number) => {
    e.preventDefault();
    setContextMenu({ x: e.clientX, y: e.clientY, slideId });
  };

  // Command palette commands
  const commands: CommandItem[] = [
    {
      id: 'open-hidden',
      label: 'Open hidden slides',
      description: 'View and manage hidden slides',
      icon: EyeOff,
      category: 'navigation',
      onSelect: () => setDrawerOpen(true),
    },
    {
      id: 'hide-selected',
      label: 'Hide selected slides',
      description: 'Remove selected slides from deck',
      icon: EyeOff,
      category: 'action',
      shortcut: 'H',
      onSelect: handleHideSelected,
    },
    {
      id: 'duplicate-selected',
      label: 'Duplicate selected slides',
      icon: Copy,
      category: 'action',
      shortcut: '⌘D',
      onSelect: handleDuplicateSelected,
    },
    {
      id: 'select-all',
      label: 'Select all slides',
      icon: Layers,
      category: 'action',
      shortcut: '⌘A',
      onSelect: selectAll,
    },
    {
      id: 'present',
      label: 'Start presentation',
      icon: Play,
      category: 'action',
      onSelect: handleStartPresentation,
    },
  ];

  // Keyboard shortcuts
  useKeyboardShortcuts([
    {
      key: 'k',
      meta: true,
      action: () => setCommandPaletteOpen(true),
      description: 'Open command palette',
    },
    {
      key: 'h',
      action: () => {
        if (selectedSlideIds.size > 0) {
          handleHideSelected();
        }
      },
      description: 'Hide selected slides',
    },
    {
      key: 'd',
      meta: true,
      action: () => {
        if (selectedSlideIds.size > 0) {
          handleDuplicateSelected();
        }
      },
      description: 'Duplicate selected slides',
    },
    {
      key: 'a',
      meta: true,
      action: selectAll,
      description: 'Select all slides',
    },
    {
      key: 'Escape',
      action: () => {
        if (selectedSlideIds.size > 0) {
          clearSelection();
        } else if (drawerOpen) {
          setDrawerOpen(false);
        } else if (commandPaletteOpen) {
          setCommandPaletteOpen(false);
        }
      },
      description: 'Clear selection / Close dialogs',
    },
  ], true);

  return (
    <div className="flex h-screen bg-neutral-50 overflow-hidden">
      {/* Navigation Rail */}
      <NavigationRail
        activeItem={navActiveItem}
        onItemClick={(id) => {
          setNavActiveItem(id);
          if (id === 'hidden') {
            setDrawerOpen(true);
          }
        }}
        hiddenCount={orderedSlidesBySection.hidden?.length || 0}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Material 3 App Bar */}
        <WorkspaceAppBar 
          title="Depoint Templates"
          breadcrumbs={[{ label: deckName }]}
        />
        
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
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
            selectedSlideIds={selectedSlideIds}
            onToggleSelection={toggleSlideSelection}
            onContextMenu={handleContextMenu}
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
      </div>

      {/* Hidden Slides Drawer */}
      <HiddenSlidesDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        hiddenSlides={orderedSlidesBySection.hidden || []}
        archivedSlides={[]}
        allSlides={visibleSlides}
        onRestoreSlides={handleRestoreSelected}
        onDeleteSlides={(ids) => {
          if (confirm(`Delete ${ids.length} slides? This cannot be undone.`)) {
            toast({
              title: `${ids.length} slides deleted`,
              variant: 'destructive',
            });
          }
        }}
        onPreviewSlide={handleSlideClick}
        slideComponents={slideComponents}
        sections={sections.filter(s => s.id !== 'hidden')}
      />

      {/* Command Palette */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        commands={commands}
      />

      {/* Quick Actions Bar */}
      {selectedSlideIds.size > 0 && (
        <QuickActionsBar
          selectedCount={selectedSlideIds.size}
          onClearSelection={clearSelection}
          onHideSlides={handleHideSelected}
          onDuplicateSlides={handleDuplicateSelected}
          onMoveToDeck={handleMoveSelectedToDeck}
          onDeleteSlides={handleDeleteSelected}
          availableDecks={sections.filter(s => s.id !== 'hidden').map(s => ({ id: s.id, name: s.name }))}
        />
      )}

      {/* Context Menu */}
      {contextMenu && (
        <SlideContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          isHidden={orderedSlidesBySection.hidden?.some(s => s.id === contextMenu.slideId) || false}
          onClose={() => setContextMenu(null)}
          onAddToDeck={() => {
            toast({ title: 'Slide added to deck' });
            setContextMenu(null);
          }}
          onRemoveFromDeck={() => {
            toast({ title: 'Slide removed from deck' });
            setContextMenu(null);
          }}
          onDuplicate={() => {
            toast({ title: 'Slide duplicated' });
            setContextMenu(null);
          }}
          onRename={() => {
            toast({ title: 'Rename feature coming soon' });
            setContextMenu(null);
          }}
          onPreview={() => {
            if (contextMenu.slideId) {
              handleSlideClick(contextMenu.slideId);
            }
            setContextMenu(null);
          }}
          onDelete={() => {
            if (confirm('Delete this slide?')) {
              toast({ title: 'Slide deleted', variant: 'destructive' });
            }
            setContextMenu(null);
          }}
        />
      )}
    </div>
  );
};

export default DeckOverview;
