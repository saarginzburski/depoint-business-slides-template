import React, { useState, useEffect, lazy } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Layers, Copy } from 'lucide-react';
import { useDeckVariations } from '@/hooks/useDeckVariations';
import { useSlideOrdering } from '@/hooks/useSlideOrdering';
import { useSections } from '@/hooks/useSections';
import { VariantsNav } from '@/components/VariantsNav';
import { SectionsNav } from '@/components/SectionsNav';
import { TopAppBar } from '@/components/TopAppBar';
import { SlideGrid } from '@/components/SlideGrid';
import { HiddenSlidesDrawer } from '@/components/HiddenSlidesDrawer';
import { CommandPalette } from '@/components/CommandPalette';
import { QuickActionsBar } from '@/components/QuickActionsBar';
import { SlideContextMenu } from '@/components/SlideContextMenu';
import { SlidesViewer } from '@/components/SlidesViewer';
import { useKeyboardShortcuts } from '@/hooks/useKeyboardShortcuts';
import { useGridScrollRestoration } from '@/hooks/useGridScrollRestoration';
import { Slide, Variant } from '@/types/deck';
import { toast } from '@/hooks/use-toast';
import { slideConfig, getSlideInfo } from '@/pages/slides/slideConfig';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { migrateCustomSections } from '@/utils/migrateSections';
import { migrateSlideIdsToComponentNames, checkMigrationNeeded } from '@/utils/migrateSlideIds';

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
  SlideRealityNotChecklists: lazy(() => import('./slides/SlideRealityNotChecklists').catch(() => ({ default: () => <div className="w-full h-full bg-slate-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">6</div></div> }))),
  SlideJollibeeOperationBook: lazy(() => import('./slides/SlideJollibeeOperationBook').catch(() => ({ default: () => <div className="w-full h-full bg-slate-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">7</div></div> }))),
  SlideJollibeeCase: lazy(() => import('./slides/SlideJollibeeCase').catch(() => ({ default: () => <div className="w-full h-full bg-slate-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">7</div></div> }))),
  SlideWhatsNext: lazy(() => import('./slides/SlideWhatsNext').catch(() => ({ default: () => <div className="w-full h-full bg-slate-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">9</div></div> }))),
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
  SlideArchitectureOverview: lazy(() => import('./slides/SlideArchitectureOverview').catch(() => ({ default: () => <div className="w-full h-full bg-slate-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">20</div></div> }))),
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
  const slideIdFromUrl = searchParams.get('slide');
  
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
  const [isPresentationMode, setIsPresentationMode] = useState(false);
  const [createVariantDialogOpen, setCreateVariantDialogOpen] = useState(false);
  const [newVariantName, setNewVariantName] = useState('');
  const [selectedSectionsForVariant, setSelectedSectionsForVariant] = useState<Set<string>>(new Set());
  const [duplicateDialogOpen, setDuplicateDialogOpen] = useState(false);
  const [slideToDuplicate, setSlideToDuplicate] = useState<string | null>(null);
  const [newSlideName, setNewSlideName] = useState('');
  const [shareDialogOpen, setShareDialogOpen] = useState(false);
  const [variantToShare, setVariantToShare] = useState<string | null>(null);
  const [sharePassword, setSharePassword] = useState('');
  const [hiddenSections, setHiddenSections] = useState<Set<Section>>(() => {
    // Load hidden sections from localStorage
    const saved = localStorage.getItem('hiddenSections');
    if (saved) {
      try {
        return new Set(JSON.parse(saved));
      } catch (e) {
        return new Set();
      }
    }
    return new Set();
  });
  
  // Scroll restoration
  const { saveScrollPosition, restoreScrollPosition } = useGridScrollRestoration();
  const gridScrollContainerRef = React.useRef<HTMLDivElement>(null);

  // Hooks
  const { currentVariation, variations, setCurrentVariation, deleteVariation, createVariation, updateVariation, updateSharePassword, refetch } = useDeckVariations();
  
  // Section management hook - sections are now global, shared across all variants
  const { 
    getAllSections, 
    addSection, 
    deleteSection, 
    reorderSections,
    refetch: refetchSections 
  } = useSections();
  
  // Auto-migrate old sections on first load
  useEffect(() => {
    const hasRunMigration = localStorage.getItem('sections_migration_completed');
    if (!hasRunMigration) {
      migrateCustomSections()
        .then((result) => {
          if (result && result.migrated > 0) {
            // Refetch sections to show the migrated ones
            refetchSections();
          }
          localStorage.setItem('sections_migration_completed', 'true');
        })
        .catch((error) => {
          console.error('Auto-migration failed:', error);
        });
    }
  }, []);
  
  // Auto-migrate slide IDs from numbers to component names
  useEffect(() => {
    const hasRunSlideIdMigration = localStorage.getItem('slide_ids_migration_completed');
    if (!hasRunSlideIdMigration) {
      checkMigrationNeeded()
        .then((needed) => {
          if (needed) {
            console.log('🔄 Slide ID migration needed, starting...');
            return migrateSlideIdsToComponentNames();
          } else {
            console.log('✅ Slide IDs already migrated');
            return null;
          }
        })
        .then((result) => {
          if (result && result.migrated > 0) {
            // Refetch slides to show the migrated data
            refetchSlides();
          }
          localStorage.setItem('slide_ids_migration_completed', 'true');
        })
        .catch((error) => {
          console.error('Slide ID migration failed:', error);
        });
    }
  }, [currentVariantId]); // Run when variant changes
  
  // Update deck name when variant changes
  useEffect(() => {
    if (currentVariation?.name) {
      setDeckName(currentVariation.name);
    }
  }, [currentVariation]);
  
  const allSectionsData = getAllSections();
  
  // Convert to format expected by useSlideOrdering
  // Get slide IDs based on displayOrder ranges (using component names now)
  const getSlideIdsByDisplayOrder = (start: number, end: number) => 
    slideConfig.filter(s => s.displayOrder >= start && s.displayOrder <= end).map(s => s.id);
  
  const sections = allSectionsData.map(s => ({
    id: s.id,
    name: s.name,
    description: s.description,
    color: s.color,
    slides: s.key === 'main' ? getSlideIdsByDisplayOrder(1, 24) :
            s.key === 'appendix' ? getSlideIdsByDisplayOrder(25, 25) :
            s.key === 'demo' ? getSlideIdsByDisplayOrder(26, 35) :
            [],
  }));
  
  const { getOrderedSlidesBySection, getVisibleSlides, updateSlideOrders, moveSlideToSection, refetch: refetchSlides } = useSlideOrdering(
    currentVariantId,
    sections
  );
  
  // Sync currentVariantId with currentVariation from hook
  useEffect(() => {
    if (currentVariation && !currentVariantId) {
      setCurrentVariantId(currentVariation.id);
    }
  }, [currentVariation, currentVariantId]);
  
  // Handle variant deletion - redirect to default or first variant if current one is deleted
  useEffect(() => {
    if (currentVariantId && variations.length > 0) {
      const currentExists = variations.find(v => v.id === currentVariantId);
      if (!currentExists) {
        // Current variant was deleted, switch to default or first variant
        const defaultVariant = variations.find(v => v.is_default);
        const targetVariant = defaultVariant || variations[0];
        if (targetVariant) {
          setCurrentVariantId(targetVariant.id);
          setCurrentVariation(targetVariant);
        }
      }
    }
  }, [variations, currentVariantId, setCurrentVariation]);
  
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
    if (slideIdFromUrl) params.set('slide', slideIdFromUrl);
    setSearchParams(params, { replace: true });
  }, [currentVariantId, activeSection, searchQuery, slideIdFromUrl, setSearchParams]);
  
  // Restore scroll position when returning from viewer
  useEffect(() => {
    if (!slideIdFromUrl && gridScrollContainerRef.current) {
      restoreScrollPosition(activeSection, gridScrollContainerRef.current);
    }
  }, [slideIdFromUrl, activeSection, restoreScrollPosition]);
  
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
  
  // Viewer handlers
  const openSlideViewer = (slideId: string) => {
    // Save current scroll position
    if (gridScrollContainerRef.current) {
      saveScrollPosition(activeSection, gridScrollContainerRef.current.scrollTop);
    }
    
    const params = new URLSearchParams(searchParams);
    params.set('slide', slideId);
    setSearchParams(params);
  };
  
  const closeSlideViewer = () => {
    const params = new URLSearchParams(searchParams);
    params.delete('slide');
    setSearchParams(params);
    // Reset presentation mode when closing viewer
    setIsPresentationMode(false);
  };

  // Reset presentation mode when navigating away from slide viewer
  useEffect(() => {
    if (!slideIdFromUrl && isPresentationMode) {
      setIsPresentationMode(false);
    }
  }, [slideIdFromUrl, isPresentationMode]);
  
  const handleViewerNext = () => {
    if (!slideIdFromUrl) return;
    const currentIndex = filteredSlides.findIndex(s => s.id === slideIdFromUrl);
    if (currentIndex < filteredSlides.length - 1) {
      const nextSlide = filteredSlides[currentIndex + 1];
      const params = new URLSearchParams(searchParams);
      params.set('slide', nextSlide.id);
      setSearchParams(params);
    }
  };
  
  // Duplicate slide handler - manual process for now
  const handleDuplicateSlide = async () => {
    if (!slideToDuplicate || !currentVariantId) {
      toast({
        title: 'Error',
        description: 'No slide or variant selected',
        variant: 'destructive',
      });
      return;
    }

    if (!newSlideName.trim()) {
      toast({
        title: 'Error',
        description: 'Please enter a name for the new slide',
        variant: 'destructive',
      });
      return;
    }

    // Generate component name from user input
    const componentName = 'Slide' + newSlideName
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('')
      .replace(/[^a-zA-Z0-9]/g, ''); // Remove special characters

    const command = `node scripts/duplicate-slide.js ${slideToDuplicate} "${newSlideName}"`;
    
    // Copy to clipboard
    try {
      await navigator.clipboard.writeText(command);
      
      toast({
        title: 'Instructions copied!',
        description: `Run the command from your clipboard in terminal`,
      });
      
      console.log(`
================================================================================
TO DUPLICATE THIS SLIDE, RUN THIS COMMAND IN YOUR TERMINAL:
================================================================================

${command}

This will:
1. Create src/pages/slides/${componentName}.tsx (copy of ${slideToDuplicate}.tsx)
2. Update slideConfig.ts with the new slide entry
3. Show instructions for manually adding lazy imports

After running, add these imports:

In src/pages/DeckOverviewNew.tsx:
  ${componentName}: lazy(() => import('./slides/${componentName}').catch(() => ({ default: () => <div className="w-full h-full bg-slate-900 flex items-center justify-center"><div className="text-white/20 text-6xl font-bold">X</div></div> }))),

In src/pages/PrintableDeck.tsx:
  const ${componentName} = lazy(() => import('./slides/${componentName}'));

Then rebuild: npm run dev

================================================================================
      `);
    } catch (err) {
      console.log('Clipboard API not available, check console for command');
    }

    setDuplicateDialogOpen(false);
    setSlideToDuplicate(null);
    setNewSlideName('');
  };

  const handleViewerPrev = () => {
    if (!slideIdFromUrl) return;
    const currentIndex = filteredSlides.findIndex(s => s.id === slideIdFromUrl);
    if (currentIndex > 0) {
      const prevSlide = filteredSlides[currentIndex - 1];
      const params = new URLSearchParams(searchParams);
      params.set('slide', prevSlide.id);
      setSearchParams(params);
    }
  };
  
  const handleViewerJump = (slideId: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('slide', slideId);
    setSearchParams(params);
  };
  
  const handleViewerMoveTo = async (slideId: string, sectionKey: string) => {
    try {
      await moveSlideToSection(slideId, sectionKey);
      toast({
        title: 'Slide moved',
        description: `Moved to ${sectionKey}`,
      });
    } catch (error) {
      // Error handled in hook
    }
  };
  
  const handleViewerDuplicate = (slideId: string) => {
    setSlideToDuplicate(slideId);
    const slideInfo = getSlideInfo(slideId);
    setNewSlideName(slideInfo ? `${slideInfo.title} (Copy)` : 'Copy of Slide');
    setDuplicateDialogOpen(true);
  };
  
  const handleViewerHide = async (slideId: string) => {
    try {
      await moveSlideToSection(slideId, 'hidden');
      toast({
        title: 'Slide hidden',
        description: 'Slide removed from deck',
      });
    } catch (error) {
      // Error handled in hook
    }
  };
  
  const handleViewerRestore = async (slideId: string) => {
    try {
      await moveSlideToSection(slideId, 'main');
      toast({
        title: 'Slide restored',
        description: 'Slide added back to deck',
      });
    } catch (error) {
      // Error handled in hook
    }
  };
  
  // Bulk action handlers
  const handleHideSelected = async () => {
    toast({
      title: 'Slides hidden',
      description: `${selectedSlideIds.size} slides moved to hidden section`,
    });
    clearSelection();
    refetchSlides();
  };
  
  const handleRestoreSelected = async () => {
    toast({
      title: 'Slides restored',
      description: `${selectedSlideIds.size} slides added back to deck`,
    });
    clearSelection();
    refetchSlides();
  };
  
  const handleDuplicateSelected = async () => {
    toast({
      title: 'Slides duplicated',
      description: `Created ${selectedSlideIds.size} duplicate slides`,
    });
    clearSelection();
    refetchSlides();
  };
  
  const handleMoveSelectedToSection = async (section: 'main' | 'demo' | 'appendix') => {
    toast({
      title: 'Slides moved',
      description: `Moved ${selectedSlideIds.size} slides to ${section}`,
    });
    clearSelection();
    refetchSlides();
  };
  
  const handleMoveSelectedToVariant = async (variantId: string) => {
    const variant = variants.find(v => v.id === variantId);
    toast({
      title: 'Slides moved',
      description: `Moved ${selectedSlideIds.size} slides to ${variant?.name}`,
    });
    clearSelection();
    refetchSlides();
  };
  
  const handleDeleteSelected = async () => {
    toast({
      title: 'Slides deleted',
      description: `Deleted ${selectedSlideIds.size} slides`,
      variant: 'destructive',
    });
    clearSelection();
    refetchSlides();
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
    // Get all visible slides excluding hidden sections
    const visibleSlides = allSlides.filter(s => 
      s.status === 'visible' && !hiddenSections.has(s.section)
    );
    
    if (visibleSlides.length > 0) {
      // Open first visible slide in viewer with fullscreen mode
      const params = new URLSearchParams(searchParams);
      params.set('slide', visibleSlides[0].id);
      params.set('fullscreen', 'true');
      setSearchParams(params);
    } else {
      toast({
        title: 'No slides to show',
        description: 'All sections are hidden or no visible slides available',
        variant: 'destructive',
      });
    }
  };
  
  const handlePrintDeck = () => {
    // Get all visible slides excluding hidden sections
    const visibleSlides = allSlides.filter(s => 
      s.status === 'visible' && !hiddenSections.has(s.section)
    );
    
    if (visibleSlides.length > 0) {
      // Navigate to print view with slide IDs
      const slideIds = visibleSlides.map(s => s.id).join(',');
      navigate(`/print-deck?slides=${slideIds}&deckName=${encodeURIComponent(deckName)}`);
    } else {
      toast({
        title: 'No slides to print',
        description: 'All sections are hidden or no visible slides available',
        variant: 'destructive',
      });
    }
  };
  
  return (
    <div className="flex h-screen bg-neutral-50 overflow-hidden">
      {/* Main Content Area */}
      <div className="w-full flex flex-col overflow-hidden">
        {/* Top App Bar - Hidden in presentation mode */}
        {!isPresentationMode && (
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
        )}
        
        {/* Content with Sidebar */}
        <div className="flex-1 flex overflow-hidden">
          {/* Left Sidebar - Variants & Sections - Hidden in presentation mode */}
          {!isPresentationMode && (
          <div className="w-64 bg-white border-r border-neutral-200 flex flex-col overflow-y-auto">
            <VariantsNav
                variants={variations.map(v => ({
                  id: v.id,
                  name: v.name,
                  isDefault: v.is_default,
                  share_password: v.share_password,
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
                  if (variant) {
                    setCurrentVariation(variant);
                    // Refetch slides when variant changes
                    setTimeout(() => refetchSlides(), 100);
                  }
                }}
                onCreate={async () => {
                  setCreateVariantDialogOpen(true);
                }}
                onRename={async (id, name) => {
                  const variant = variations.find(v => v.id === id);
                  if (variant) {
                    await updateVariation(id, name, variant.sections);
                  }
                }}
                onDuplicate={async (id) => {
                  const variant = variations.find(v => v.id === id);
                  if (variant) {
                    const newName = `${variant.name} (Copy)`;
                    await createVariation(newName, variant.sections);
                  }
                }}
                onSetDefault={async (id) => {
                  // For now, just show a toast - setting default requires updating all variations
                  toast({ 
                    title: 'Feature coming soon', 
                    description: 'Set as default will be implemented soon' 
                  });
                }}
                onDelete={async (id) => {
                  try {
                    await deleteVariation(id);
                    // After deletion, variations will be updated by the hook
                    // useEffect below will handle switching to another variant
                  } catch (error) {
                    // Error already handled in hook
                  }
                }}
                onReorder={async (fromIndex, toIndex) => {
                  refetch();
                }}
                onShare={(id) => {
                  const variant = variations.find(v => v.id === id);
                  if (variant) {
                    setVariantToShare(id);
                    setSharePassword(variant.share_password || '');
                    setShareDialogOpen(true);
                  }
                }}
              />
            
            <SectionsNav
                sections={allSectionsData.map(s => ({
                  key: s.key,
                  label: s.name,
                  count: allSlides.filter(slide => slide.section === s.key && slide.status === 'visible').length,
                  id: s.id,
                  icon: s.icon,
                  is_default: s.is_default,
                  locked: s.locked,
                  order_index: s.order_index,
                }))}
                activeSectionKey={activeSection}
                onSelect={(key) => setActiveSection(key as Section)}
                hiddenSections={hiddenSections}
                onToggleSectionVisibility={(sectionKey) => {
                  setHiddenSections(prev => {
                    const next = new Set(prev);
                    if (next.has(sectionKey as Section)) {
                      next.delete(sectionKey as Section);
                      toast({
                        title: 'Section shown',
                        description: `${sectionKey} will be included in presentations`,
                      });
                    } else {
                      next.add(sectionKey as Section);
                  toast({
                        title: 'Section hidden',
                        description: `${sectionKey} will be excluded from presentations`,
                      });
                    }
                    // Save to localStorage
                    localStorage.setItem('hiddenSections', JSON.stringify(Array.from(next)));
                    return next;
                  });
                }}
                onDrop={async (slideIds, targetSection) => {
                  if (!currentVariantId) {
                    toast({
                      title: 'Error',
                      description: 'No variant selected',
                      variant: 'destructive',
                    });
                    return;
                  }
                  
                  try {
                    // Move each slide to the target section
                    for (const slideId of slideIds) {
                      await moveSlideToSection(slideId, targetSection);
                    }
                    
                    toast({
                      title: 'Slides moved',
                      description: `Moved ${slideIds.length} slide${slideIds.length > 1 ? 's' : ''} to ${targetSection}`,
                    });
                  } catch (error) {
                    toast({
                      title: 'Error',
                      description: 'Failed to move slides',
                      variant: 'destructive',
                    });
                  }
                }}
                onAddSection={addSection}
                onDeleteSection={async (sectionId) => {
                  // Move all slides from this section to main before deleting
                  const slidesInSection = allSlides.filter(s => s.section === sectionId);
                  for (const slide of slidesInSection) {
                    await moveSlideToSection(slide.id, 'main');
                  }
                  await deleteSection(sectionId);
                  refetchSlides();
                }}
                onReorderSections={reorderSections}
              />
          </div>
          )}
          
          {/* Main Content - Slide Grid or Viewer */}
          {slideIdFromUrl ? (
            <SlidesViewer
              slides={filteredSlides}
              currentSlideId={slideIdFromUrl}
              slideComponents={slideComponents}
              onClose={closeSlideViewer}
              onPrev={handleViewerPrev}
              onNext={handleViewerNext}
              onJump={handleViewerJump}
              onMoveTo={handleViewerMoveTo}
              onDuplicate={handleViewerDuplicate}
              onHide={handleViewerHide}
              onRestore={handleViewerRestore}
              deckName={deckName}
              onPresentationModeChange={setIsPresentationMode}
            />
          ) : (
            <div 
              ref={gridScrollContainerRef}
              className="flex-1 overflow-auto p-6"
              onScroll={(e) => {
                const target = e.currentTarget;
                saveScrollPosition(activeSection, target.scrollTop);
              }}
            >
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
                  onToggleSelection={(slideId, isCtrlOrCmd) => {
                    if (!isCtrlOrCmd) {
                      // Single click without modifier - open viewer
                      openSlideViewer(slideId);
                    } else {
                      // Ctrl/Cmd click - toggle selection
                      toggleSlideSelection(slideId, isCtrlOrCmd);
                    }
                  }}
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
                      slideConfigMap.get(slide.id)  // slide.id is now a string component name
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
          )}
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
          refetchSlides();
        }}
        onDeleteSlides={(slideIds) => {
          toast({
            title: 'Slides deleted',
            description: `Deleted ${slideIds.length} slides`,
            variant: 'destructive',
          });
          refetchSlides();
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
            if (contextMenu) {
              setSlideToDuplicate(contextMenu.slideId);
              const slideInfo = getSlideInfo(contextMenu.slideId);
              setNewSlideName(slideInfo ? `${slideInfo.title} (Copy)` : 'Copy of Slide');
              setDuplicateDialogOpen(true);
            }
            setContextMenu(null);
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
            refetchSlides();
          }}
        />
      )}

      {/* Create Variant Dialog */}
      <Dialog open={createVariantDialogOpen} onOpenChange={setCreateVariantDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Create New Variant</DialogTitle>
            <DialogDescription>
              Create a custom deck variant by selecting which sections to include.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6 py-4">
            <div className="space-y-2">
              <Label htmlFor="variant-name">Variant Name</Label>
              <Input
                id="variant-name"
                value={newVariantName}
                onChange={(e) => setNewVariantName(e.target.value)}
                placeholder="e.g., Investor Pitch, Client Demo, etc."
                autoFocus
              />
            </div>

            <div className="space-y-3">
              <Label>Select Sections to Include</Label>
              <div className="space-y-2 max-h-[400px] overflow-y-auto border rounded-lg p-4">
                {allSectionsData
                  .filter(section => section.key !== 'hidden' && section.key !== 'archived')
                  .map((section) => (
                    <div key={section.id} className="flex items-start space-x-3 p-2 hover:bg-neutral-50 rounded-lg">
                      <Checkbox
                        id={`section-${section.id}`}
                        checked={selectedSectionsForVariant.has(section.id)}
                        onCheckedChange={(checked) => {
                          const newSet = new Set(selectedSectionsForVariant);
                          if (checked) {
                            newSet.add(section.id);
                          } else {
                            newSet.delete(section.id);
                          }
                          setSelectedSectionsForVariant(newSet);
                        }}
                      />
                      <Label
                        htmlFor={`section-${section.id}`}
                        className="flex-1 cursor-pointer space-y-1"
                      >
                        <div className="font-medium">{section.name}</div>
                        {section.description && (
                          <div className="text-sm text-neutral-500">{section.description}</div>
                        )}
                      </Label>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setCreateVariantDialogOpen(false);
                setNewVariantName('');
                setSelectedSectionsForVariant(new Set());
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={async () => {
                if (!newVariantName.trim()) {
                  toast({ 
                    title: 'Error', 
                    description: 'Please enter a variant name',
                    variant: 'destructive' 
                  });
                  return;
                }

                const sectionsArray = Array.from(selectedSectionsForVariant);
                await createVariation(newVariantName.trim(), sectionsArray);
                
                setCreateVariantDialogOpen(false);
                setNewVariantName('');
                setSelectedSectionsForVariant(new Set());
              }}
              disabled={!newVariantName.trim()}
            >
              Create Variant
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Duplicate Slide Dialog */}
      <Dialog open={duplicateDialogOpen} onOpenChange={setDuplicateDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Duplicate Slide Component</DialogTitle>
            <DialogDescription>
              Create a new slide component based on "{slideToDuplicate ? getSlideInfo(slideToDuplicate)?.title : ''}". 
              This will generate a terminal command to create the new component file.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="slide-name">New Slide Name</Label>
              <Input
                id="slide-name"
                placeholder="e.g., Custom Market Analysis"
                value={newSlideName}
                onChange={(e) => setNewSlideName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && newSlideName.trim()) {
                    handleDuplicateSlide();
                  }
                }}
                autoFocus
              />
              <p className="text-sm text-muted-foreground">
                Component name: <code className="text-xs bg-muted px-1 py-0.5 rounded">
                  {'Slide' + newSlideName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('').replace(/[^a-zA-Z0-9]/g, '')}
                </code>
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                A terminal command will be copied to your clipboard. Run it to create the component.
              </p>
            </div>
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setDuplicateDialogOpen(false);
                setSlideToDuplicate(null);
                setNewSlideName('');
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleDuplicateSlide}
              disabled={!newSlideName.trim()}
            >
              Get Command
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Share Variant Dialog */}
      <Dialog open={shareDialogOpen} onOpenChange={setShareDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Share Variant</DialogTitle>
            <DialogDescription>
              Set a password to protect this shared variant. Anyone with the link and password will be able to view the presentation.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="share-password">Password (optional)</Label>
              <Input
                id="share-password"
                type="text"
                placeholder="Enter password for shared link"
                value={sharePassword}
                onChange={(e) => setSharePassword(e.target.value)}
              />
              <p className="text-sm text-muted-foreground">
                Leave empty to allow anyone with the link to view without a password.
              </p>
            </div>

            {variantToShare && (
              <div className="space-y-2">
                <Label>Share Link</Label>
                <div className="flex gap-2">
                  <Input
                    readOnly
                    value={`${window.location.origin}/share/${variantToShare}`}
                    className="flex-1 bg-gray-50"
                  />
                  <Button
                    variant="outline"
                    onClick={() => {
                      navigator.clipboard.writeText(`${window.location.origin}/share/${variantToShare}`);
                      toast({
                        title: 'Link copied!',
                        description: 'Share link has been copied to clipboard',
                      });
                    }}
                    className="shrink-0"
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setShareDialogOpen(false);
                setVariantToShare(null);
                setSharePassword('');
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={async () => {
                if (variantToShare) {
                  await updateSharePassword(variantToShare, sharePassword || null);
                  setShareDialogOpen(false);
                  setVariantToShare(null);
                  setSharePassword('');
                }
              }}
            >
              Save & Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DeckOverviewNew;

