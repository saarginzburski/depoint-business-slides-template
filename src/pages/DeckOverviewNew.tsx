import React, { useState, useEffect, lazy } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Layers } from 'lucide-react';
import { useDeckVariations } from '@/hooks/useDeckVariations';
import { useSlideOrdering } from '@/hooks/useSlideOrdering';
import { NavigationRail } from '@/components/NavigationRail';
import { VariantsNav } from '@/components/VariantsNav';
import { SectionsNav } from '@/components/SectionsNav';
import { TopAppBar } from '@/components/TopAppBar';
import { SlideGrid } from '@/components/SlideGrid';
import { HiddenSlidesDrawer } from '@/components/HiddenSlidesDrawer';
import { CommandPalette } from '@/components/CommandPalette';
import { QuickActionsBar } from '@/components/QuickActionsBar';
import { SlideContextMenu } from '@/components/SlideContextMenu';
import { useKeyboardShortcuts } from '@/hooks/useKeyboardShortcuts';
import { Slide, Variant } from '@/types/deck';
import { toast } from '@/hooks/use-toast';
import { slideConfig } from '@/pages/slides/slideConfig';

// Lazy load all slide components for thumbnails
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

// Define section types
type Section = 'main' | 'demo' | 'appendix' | 'hidden' | 'archived';

const DeckOverviewNew = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  
  // URL state
  const variantIdFromUrl = searchParams.get('variant');
  const sectionFromUrl = (searchParams.get('section') || 'main') as Section;
  const searchQueryFromUrl = searchParams.get('q') || '';
  
  // Core state
  const [deckName, setDeckName] = useState('Business Presentation Template');
  const [currentVariantId, setCurrentVariantId] = useState<string | null>(variantIdFromUrl);
  const [activeSection, setActiveSection] = useState<Section>(sectionFromUrl);
  const [searchQuery, setSearchQuery] = useState(searchQueryFromUrl);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  // Selection and UI state
  const [selectedSlideIds, setSelectedSlideIds] = useState<Set<string>>(new Set());
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [contextMenu, setContextMenu] = useState<{ x: number; y: number; slideId: string } | null>(null);
  const [navActiveItem, setNavActiveItem] = useState('decks');
  
  // Define sections for the hook
  const sections = [
    {
      id: 'main',
      name: 'Main Deck',
      description: 'Core presentation',
      color: 'blue',
      slides: Array.from({length: 21}, (_, i) => i + 1),
    },
    {
      id: 'appendix', 
      name: 'Appendices',
      description: 'Supporting documentation',
      color: 'slate',
      slides: [22],
    },
    {
      id: 'demo',
      name: 'Demo',
      description: 'Dashboard demonstrations', 
      color: 'green',
      slides: Array.from({length: 10}, (_, i) => i + 23),
    },
    {
      id: 'hidden',
      name: 'Hidden',
      description: 'Hidden slides',
      color: 'gray',
      slides: [],
    },
    {
      id: 'archived',
      name: 'Archived',
      description: 'Archived slides',
      color: 'gray',
      slides: [],
    }
  ];

  // Hooks
  const { currentVariation, variations, setCurrentVariation } = useDeckVariations();
  const { getOrderedSlidesBySection, getVisibleSlides, updateSlideOrders, moveSlideToSection, refetch } = useSlideOrdering(
    currentVariantId,
    sections
  );
  
  // Sync currentVariantId with currentVariation from hook
  useEffect(() => {
    if (currentVariation && !currentVariantId) {
      setCurrentVariantId(currentVariation.id);
    }
  }, [currentVariation, currentVariantId]);
  
  // Get ordered slides from Firebase
  const orderedSlidesBySection = getOrderedSlidesBySection();
  
  // Convert slide config to Slide type using the ordered data
  const allSlides: Slide[] = React.useMemo(() => {
    const slides: Slide[] = [];
    
    // Go through each section and add its slides
    Object.entries(orderedSlidesBySection).forEach(([sectionId, sectionSlides]) => {
      sectionSlides.forEach((slideConfig, index) => {
        // Determine status based on section
        let status: 'visible' | 'hidden' | 'archived' = 'visible';
        if (sectionId === 'hidden') {
          status = 'hidden';
        } else if (sectionId === 'archived') {
          status = 'archived';
        }
        
        slides.push({
          id: slideConfig.id.toString(),
          deckId: currentVariantId || '',
          variantId: currentVariantId || '',
          title: slideConfig.title,
          name: slideConfig.name,
          component: slideConfig.component,
          section: sectionId as any,
          status: status,
          order: index,
          thumbnailUrl: `/placeholder.svg`,
          tags: slideConfig.tags || [],
          thumbUrl: `/placeholder.svg`,
          updatedAt: new Date().toISOString(),
          createdAt: new Date(),
        });
      });
    });
    
    return slides;
  }, [orderedSlidesBySection, currentVariantId]);
  
  // Filter slides by active section and search query
  const getFilteredSlides = (): Slide[] => {
    let filtered = allSlides;
    
    // Filter by section
    if (activeSection === 'hidden') {
      filtered = filtered.filter(s => s.status === 'hidden');
    } else if (activeSection === 'archived') {
      filtered = filtered.filter(s => s.status === 'archived');
    } else {
      filtered = filtered.filter(s => 
        s.section === activeSection && s.status === 'visible'
      );
    }
    
    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(s => 
        s.title.toLowerCase().includes(query) ||
        s.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    // Filter by active filters
    if (activeFilters.length > 0) {
      filtered = filtered.filter(s => 
        activeFilters.includes(s.section)
      );
    }
    
    return filtered;
  };
  
  const filteredSlides = getFilteredSlides();
  
  // Calculate stats
  const visibleSlidesCount = allSlides.filter(s => s.status === 'visible').length;
  const hiddenSlidesCount = allSlides.filter(s => s.status === 'hidden').length;
  const archivedSlidesCount = allSlides.filter(s => s.status === 'archived').length;
  const presentationTime = `${Math.ceil(visibleSlidesCount * 2.5)} min`; // Estimate 2.5 min per slide
  
  // Update URL when state changes
  useEffect(() => {
    const params = new URLSearchParams();
    if (currentVariantId) params.set('variant', currentVariantId);
    if (activeSection !== 'main') params.set('section', activeSection);
    if (searchQuery) params.set('q', searchQuery);
    setSearchParams(params, { replace: true });
  }, [currentVariantId, activeSection, searchQuery, setSearchParams]);
  
  // Multi-select handlers
  const toggleSlideSelection = (slideId: string, isCtrlOrCmd: boolean) => {
    setSelectedSlideIds(prev => {
      const next = new Set(prev);
      if (isCtrlOrCmd) {
        if (next.has(slideId)) {
          next.delete(slideId);
        } else {
          next.add(slideId);
        }
      } else {
        next.clear();
        next.add(slideId);
      }
      return next;
    });
  };
  
  const clearSelection = () => {
    setSelectedSlideIds(new Set());
  };
  
  const selectAll = () => {
    setSelectedSlideIds(new Set(filteredSlides.map(s => s.id)));
  };
  
  // Context menu handler
  const handleContextMenu = (slideId: string, x: number, y: number) => {
    setContextMenu({ x, y, slideId });
  };
  
  // Bulk action handlers
  const handleHideSelected = async () => {
    toast({
      title: 'Slides hidden',
      description: `${selectedSlideIds.size} slides moved to hidden section`,
    });
    clearSelection();
    refetch();
  };
  
  const handleRestoreSelected = async () => {
    toast({
      title: 'Slides restored',
      description: `${selectedSlideIds.size} slides added back to deck`,
    });
    clearSelection();
    refetch();
  };
  
  const handleDuplicateSelected = async () => {
    toast({
      title: 'Slides duplicated',
      description: `Created ${selectedSlideIds.size} duplicate slides`,
    });
    clearSelection();
    refetch();
  };
  
  const handleMoveSelectedToSection = async (section: 'main' | 'demo' | 'appendix') => {
    toast({
      title: 'Slides moved',
      description: `Moved ${selectedSlideIds.size} slides to ${section}`,
    });
    clearSelection();
    refetch();
  };
  
  const handleMoveSelectedToVariant = async (variantId: string) => {
    const variant = variants.find(v => v.id === variantId);
    toast({
      title: 'Slides moved',
      description: `Moved ${selectedSlideIds.size} slides to ${variant?.name}`,
    });
    clearSelection();
    refetch();
  };
  
  const handleDeleteSelected = async () => {
    toast({
      title: 'Slides deleted',
      description: `Deleted ${selectedSlideIds.size} slides`,
      variant: 'destructive',
    });
    clearSelection();
    refetch();
  };
  
  // Command palette commands
  const commands = [
    ...filteredSlides.slice(0, 5).map(slide => ({
      id: `slide-${slide.id}`,
      label: slide.title,
      description: `Go to slide ${slide.id}`,
      category: 'slide' as const,
      onSelect: () => navigate(`/deck/slide/${slide.id}`),
    })),
    ...variations.map(variant => ({
      id: `variant-${variant.id}`,
      label: variant.name,
      description: 'Switch to this variant',
      category: 'variant' as const,
      badge: variant.id === currentVariantId ? 'Active' : variant.is_default ? 'Default' : undefined,
      onSelect: () => {
        setCurrentVariantId(variant.id);
        setCurrentVariation(variant);
      },
    })),
    {
      id: 'hide-selected',
      label: 'Hide selected slides',
      description: 'Move slides to hidden section',
      category: 'action' as const,
      shortcut: 'H',
      onSelect: handleHideSelected,
    },
    {
      id: 'select-all',
      label: 'Select all slides',
      description: 'Select all visible slides',
      category: 'action' as const,
      shortcut: '⌘A',
      onSelect: selectAll,
    },
  ];
  
  // Keyboard shortcuts
  useKeyboardShortcuts([
    { key: 'k', ctrlOrCmd: true, handler: () => setCommandPaletteOpen(true) },
    { key: 'h', handler: () => selectedSlideIds.size > 0 && handleHideSelected() },
    { key: 'Escape', handler: () => clearSelection() },
    { key: 'a', ctrlOrCmd: true, handler: (e) => { e.preventDefault(); selectAll(); } },
  ]);
  
  // Navigation handlers
  const handleViewDeck = () => {
    if (filteredSlides.length > 0) {
      navigate(`/deck/slide/${filteredSlides[0].id}`);
    }
  };
  
  const handlePrintDeck = () => {
    navigate('/printable');
  };
  
  return (
    <div className="flex h-screen bg-neutral-50 overflow-hidden">
      {/* Left Navigation Rail */}
      <NavigationRail
        activeItem={navActiveItem}
        onItemClick={(item) => {
          setNavActiveItem(item);
          if (item === 'hidden') {
            setDrawerOpen(true);
          }
        }}
        hiddenCount={hiddenSlidesCount}
      />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top App Bar */}
        <TopAppBar
          deckName={deckName}
          onDeckNameChange={setDeckName}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          activeFilters={activeFilters}
          onFilterToggle={(filter) => {
            setActiveFilters(prev => 
              prev.includes(filter) 
                ? prev.filter(f => f !== filter)
                : [...prev, filter]
            );
          }}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          slideCount={visibleSlidesCount}
          presentationTime={presentationTime}
          onViewDeck={handleViewDeck}
          onPrintDeck={handlePrintDeck}
        />
        
        {/* Content with Sidebar */}
        <div className="flex-1 flex overflow-hidden">
          {/* Left Sidebar - Variants & Sections */}
          <div className="w-64 bg-white border-r border-neutral-200 flex flex-col overflow-hidden">
            <div className="p-4 border-b border-neutral-200">
              <h2 className="text-sm font-medium text-neutral-700 uppercase tracking-wide">
                Variants
              </h2>
            </div>
            <div className="flex-1 overflow-y-auto">
              <VariantsNav
                variants={variations.map(v => ({
                  id: v.id,
                  name: v.name,
                  isDefault: v.is_default,
                  countBySection: {
                    main: allSlides.filter(s => s.section === 'main' && s.status === 'visible').length,
                    demo: allSlides.filter(s => s.section === 'demo' && s.status === 'visible').length,
                    appendix: allSlides.filter(s => s.section === 'appendix' && s.status === 'visible').length,
                    hidden: hiddenSlidesCount,
                    archived: archivedSlidesCount,
                  },
                  updatedAt: new Date().toISOString(),
                  order: 0,
                }))}
                activeVariantId={currentVariantId || ''}
                onSelect={(id) => {
                  setCurrentVariantId(id);
                  const variant = variations.find(v => v.id === id);
                  if (variant) setCurrentVariation(variant);
                }}
                onCreate={async () => {
                  toast({ title: 'Creating new variant...' });
                  refetch();
                }}
                onRename={async (id, name) => {
                  toast({ title: `Renamed to ${name}` });
                  refetch();
                }}
                onDuplicate={async (id) => {
                  toast({ title: 'Variant duplicated' });
                  refetch();
                }}
                onSetDefault={async (id) => {
                  toast({ title: 'Default variant updated' });
                  refetch();
                }}
                onDelete={async (id) => {
                  toast({ title: 'Variant deleted', variant: 'destructive' });
                  refetch();
                }}
                onReorder={async (fromIndex, toIndex) => {
                  refetch();
                }}
              />
            </div>
            
            <div className="border-t border-neutral-200">
              <SectionsNav
                sections={[
                  { key: 'main', label: 'Main Deck', count: allSlides.filter(s => s.section === 'main' && s.status === 'visible').length },
                  { key: 'demo', label: 'Demo', count: allSlides.filter(s => s.section === 'demo' && s.status === 'visible').length },
                  { key: 'appendix', label: 'Appendices', count: allSlides.filter(s => s.section === 'appendix' && s.status === 'visible').length },
                  { key: 'hidden', label: 'Hidden', count: hiddenSlidesCount },
                  { key: 'archived', label: 'Archived', count: archivedSlidesCount },
                ]}
                activeSectionKey={activeSection as any}
                onSelect={(key) => setActiveSection(key as Section)}
                onDrop={(slideIds, targetSection) => {
                  toast({
                    title: 'Slides moved',
                    description: `Moved ${slideIds.length} slides to ${targetSection}`,
                  });
                  refetch();
                }}
              />
            </div>
          </div>
          
          {/* Main Content - Slide Grid */}
          <div className="flex-1 overflow-auto p-6">
            {filteredSlides.length === 0 ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <Layers className="w-16 h-16 mx-auto mb-4 text-neutral-300" />
                  <h3 className="text-lg font-medium text-neutral-700 mb-2">
                    No slides found
                  </h3>
                  <p className="text-neutral-500">
                    {searchQuery ? 'Try a different search' : 'Add slides to get started'}
                  </p>
                </div>
              </div>
            ) : (
              <SlideGrid
                slides={filteredSlides}
                selectedSlideIds={selectedSlideIds}
                onToggleSelection={toggleSlideSelection}
                onContextMenu={handleContextMenu}
                viewMode={viewMode}
                showCheckboxes={selectedSlideIds.size > 0}
                slideComponents={slideComponents}
                onReorder={async (reorderedSlides) => {
                  if (!currentVariantId) {
                    toast({
                      title: 'Error',
                      description: 'No variant selected',
                      variant: 'destructive',
                    });
                    return;
                  }
                  
                  try {
                    // Get current sections
                    const orderedSections = getOrderedSlidesBySection();
                    
                    // Convert reordered slides back to slide config format
                    const slideConfigMap = new Map(slideConfig.map(s => [s.id, s]));
                    
                    // Update only the current section with new order
                    const reorderedSection = reorderedSlides.map(slide => 
                      slideConfigMap.get(parseInt(slide.id))
                    ).filter(Boolean) as typeof slideConfig;
                    
                    orderedSections[activeSection] = reorderedSection;
                    
                    await updateSlideOrders(orderedSections);
                    toast({
                      title: 'Slides reordered',
                      description: 'The new order has been saved',
                    });
                  } catch (error) {
                    toast({
                      title: 'Error',
                      description: 'Failed to reorder slides',
                      variant: 'destructive',
                    });
                  }
                }}
              />
            )}
          </div>
        </div>
      </div>
      
      {/* Hidden Slides Drawer */}
      <HiddenSlidesDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        hiddenSlides={allSlides
          .filter(s => s.status === 'hidden')
          .map(s => ({
            id: parseInt(s.id),
            name: s.title,
            title: s.title,
            component: `Slide${s.id}`,
            sectionId: s.section,
            lastEdited: s.updatedAt,
            hiddenAt: s.updatedAt,
          }))}
        archivedSlides={allSlides
          .filter(s => s.status === 'archived')
          .map(s => ({
            id: parseInt(s.id),
            name: s.title,
            title: s.title,
            component: `Slide${s.id}`,
            sectionId: s.section,
            lastEdited: s.updatedAt,
            hiddenAt: s.updatedAt,
          }))}
        allSlides={allSlides.map(s => ({
          id: parseInt(s.id),
          name: s.title,
          title: s.title,
          component: `Slide${s.id}`,
          sectionId: s.section,
          lastEdited: s.updatedAt,
          hiddenAt: s.updatedAt,
        }))}
        onRestoreSlides={(slideIds, targetSection) => {
          toast({
            title: 'Slides restored',
            description: `Restored ${slideIds.length} slides to ${targetSection}`,
          });
          refetch();
        }}
        onDeleteSlides={(slideIds) => {
          toast({
            title: 'Slides deleted',
            description: `Deleted ${slideIds.length} slides`,
            variant: 'destructive',
          });
          refetch();
        }}
        onPreviewSlide={(slideId) => {
          navigate(`/deck/slide/${slideId}`);
        }}
        slideComponents={slideComponents}
        sections={[
          { id: 'main', name: 'Main Deck' },
          { id: 'demo', name: 'Demo' },
          { id: 'appendix', name: 'Appendices' },
        ]}
      />
      
      {/* Command Palette */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        commands={commands}
      />
      
      {/* Quick Actions Bar */}
      <QuickActionsBar
        selectedCount={selectedSlideIds.size}
        onClearSelection={clearSelection}
        onHideSlides={handleHideSelected}
        onRestoreSlides={handleRestoreSelected}
        onDuplicateSlides={handleDuplicateSelected}
        onMoveToSection={handleMoveSelectedToSection}
        onMoveToVariant={handleMoveSelectedToVariant}
        onDeleteSlides={handleDeleteSelected}
        availableVariants={variations.map(v => ({
          id: v.id,
          name: v.name,
          isDefault: v.is_default,
        }))}
        currentVariantId={currentVariantId || undefined}
        showRestoreAction={activeSection === 'hidden' || activeSection === 'archived'}
      />
      
      {/* Context Menu */}
      {contextMenu && (
        <SlideContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          isHidden={allSlides.find(s => s.id === contextMenu.slideId)?.status === 'hidden'}
          onClose={() => setContextMenu(null)}
          onAddToDeck={async () => {
            try {
              if (contextMenu) {
                await moveSlideToSection(contextMenu.slideId, 'main');
                toast({ title: 'Slide added to deck' });
              }
            } catch (error) {
              // Error already handled in hook
            } finally {
              setContextMenu(null);
            }
          }}
          onRemoveFromDeck={async () => {
            if (!currentVariantId) {
              toast({
                title: 'Error',
                description: 'No variant selected',
                variant: 'destructive',
              });
              setContextMenu(null);
              return;
            }
            
            try {
              if (contextMenu) {
                await moveSlideToSection(contextMenu.slideId, 'hidden');
                toast({ title: 'Slide removed from deck' });
              }
            } catch (error) {
              toast({
                title: 'Error',
                description: 'Failed to remove slide',
                variant: 'destructive',
              });
            } finally {
              setContextMenu(null);
            }
          }}
          onDuplicate={() => {
            toast({ title: 'Slide duplicated' });
            setContextMenu(null);
            refetch();
          }}
          onRename={() => {
            toast({ title: 'Rename slide' });
            setContextMenu(null);
          }}
          onPreview={() => {
            if (contextMenu) {
              navigate(`/deck/slide/${contextMenu.slideId}`);
            }
            setContextMenu(null);
          }}
          onDelete={() => {
            toast({ title: 'Slide deleted', variant: 'destructive' });
            setContextMenu(null);
            refetch();
          }}
        />
      )}
    </div>
  );
};

export default DeckOverviewNew;

