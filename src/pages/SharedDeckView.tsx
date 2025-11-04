import React, { useState, useEffect, lazy, Suspense } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db } from '@/integrations/firebase/client';
import { doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { toast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useSlideOrdering } from '@/hooks/useSlideOrdering';
import { useSections } from '@/hooks/useSections';
import { slideConfig } from '@/pages/slides/slideConfig';

// Lazy load all slide components
const slideComponents: Record<string, React.LazyExoticComponent<React.ComponentType<any>>> = {
  SlideCover: lazy(() => import('./slides/SlideCover')),
  SlideExecutiveSummary: lazy(() => import('./slides/SlideExecutiveSummary')),
  SlidePlatform: lazy(() => import('./slides/SlidePlatform')),
  SlideOurJourneyInvestor: lazy(() => import('./slides/SlideOurJourneyInvestor')),
  SlideProblem: lazy(() => import('./slides/SlideProblem')),
  SlideProblemStats: lazy(() => import('./slides/SlideProblemStats')),
  SlideSolution: lazy(() => import('./slides/SlideSolution')),
  SlideSolutionOverview: lazy(() => import('./slides/SlideSolutionOverview')),
  SlideDigitizingOpsManual: lazy(() => import('./slides/SlideDigitizingOpsManual')),
  SlideFranchisorFranchisee: lazy(() => import('./slides/SlideFranchisorFranchisee')),
  SlideRealityNotChecklists: lazy(() => import('./slides/SlideRealityNotChecklists')),
  SlideJollibeeOperationBook: lazy(() => import('./slides/SlideJollibeeOperationBook')),
  SlideJollibeeCase: lazy(() => import('./slides/SlideJollibeeCase')),
  SlideWhatsNext: lazy(() => import('./slides/SlideWhatsNext')),
  SlidePlatformEcosystem: lazy(() => import('./slides/SlidePlatformEcosystem')),
  SlideInsightsEngine: lazy(() => import('./slides/SlideInsightsEngine')),
  SlideCustomerStories: lazy(() => import('./slides/SlideCustomerStories')),
  SlideCrossIndustryPlatform: lazy(() => import('./slides/SlideCrossIndustryPlatform')),
  SlideMarketOpportunity: lazy(() => import('./slides/SlideMarketOpportunity')),
  SlideCompetitiveLandscape: lazy(() => import('./slides/SlideCompetitiveLandscape')),
  SlideGTMStrategy: lazy(() => import('./slides/SlideGTMStrategy')),
  SlideGlobalBrands: lazy(() => import('./slides/SlideGlobalBrands')),
  SlideFieldAssociates: lazy(() => import('./slides/SlideFieldAssociates')),
  SlideFinancial: lazy(() => import('./slides/SlideFinancial')),
  SlideTeam: lazy(() => import('./slides/SlideTeam')),
  SlideOurJourney: lazy(() => import('./slides/SlideOurJourney')),
  SlideStrategicFit: lazy(() => import('./slides/SlideStrategicFit')),
  SlideArchitectureOverview: lazy(() => import('./slides/SlideArchitectureOverview')),
  SlideEnterpriseStack: lazy(() => import('./slides/SlideEnterpriseStack')),
  SlideIntegrations: lazy(() => import('./slides/SlideIntegrations')),
  SlideConsultingPartners: lazy(() => import('./slides/SlideConsultingPartners')),
  SlideDashboardIntro: lazy(() => import('./slides/SlideDashboardIntro')),
  SlideDashboardFeatures: lazy(() => import('./slides/SlideDashboardFeatures')),
  Slide360Management: lazy(() => import('./slides/Slide360Management')),
  SlideOutOfTheBox: lazy(() => import('./slides/SlideOutOfTheBox')),
  SlideAnalyticsPlatform: lazy(() => import('./slides/SlideAnalyticsPlatform')),
  SlideDashboardSummary: lazy(() => import('./slides/SlideDashboardSummary')),
  SlideDashboardsDemo: lazy(() => import('./slides/SlideDashboardsDemo')),
  SlideTaskComplianceDashboard: lazy(() => import('./slides/SlideTaskComplianceDashboard')),
  SlideFoodSafetyDashboard: lazy(() => import('./slides/SlideFoodSafetyDashboard')),
  SlideIssuesDashboard: lazy(() => import('./slides/SlideIssuesDashboard')),
  SlideProductGoldStandardDashboard: lazy(() => import('./slides/SlideProductGoldStandardDashboard')),
  SlideCleanlinessConditionDashboard: lazy(() => import('./slides/SlideCleanlinessConditionDashboard')),
  SlideEquipmentMonitoringDashboard: lazy(() => import('./slides/SlideEquipmentMonitoringDashboard')),
  SlideOilMonitoringDashboard: lazy(() => import('./slides/SlideOilMonitoringDashboard')),
  SlideSpeedOfServiceDashboard: lazy(() => import('./slides/SlideSpeedOfServiceDashboard')),
  SlideSalesManagementDashboard: lazy(() => import('./slides/SlideSalesManagementDashboard')),
  SlideAuditReportDashboard: lazy(() => import('./slides/SlideAuditReportDashboard')),
  SlideUsersEngagementDashboard: lazy(() => import('./slides/SlideUsersEngagementDashboard')),
  SlideClosing: lazy(() => import('./slides/SlideClosing')),
  SlideAppendices: lazy(() => import('./slides/SlideAppendices')),
};

const SharedDeckView = () => {
  const { variantId } = useParams<{ variantId: string }>();
  const navigate = useNavigate();
  
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(true);
  const [passwordInput, setPasswordInput] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [variantData, setVariantData] = useState<any>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  
  // Use the same hooks as the main editor
  const { getAllSections } = useSections();
  const allSectionsData = getAllSections();
  
  // Convert to format expected by useSlideOrdering (same as DeckOverviewNew)
  // Build section->slides mapping from slideConfig's section_key field
  const sections = allSectionsData.map(s => {
    // Get slides that belong to this section
    const sectionSlides = slideConfig
      .filter(slide => slide.section_key === s.key || slide.section_key === s.id)
      .sort((a, b) => a.displayOrder - b.displayOrder)
      .map(slide => slide.id);
    
    return {
      id: s.id,
      name: s.name,
      description: s.description,
      color: s.color,
      slides: sectionSlides,
    };
  });
  
  const { getVisibleSlides } = useSlideOrdering(variantId || null, sections);
  
  // Get visible slides excluding hidden sections
  const visibleSlides = React.useMemo(() => {
    const hiddenSectionKeys = new Set(variantData?.hidden_sections || []);
    const visibleSectionIds = new Set(
      allSectionsData
        .filter(s => !hiddenSectionKeys.has(s.key))
        .map(s => s.id)
    );
    
    const slides = getVisibleSlides(visibleSectionIds);
    return slides.map(s => s.id);
  }, [variantData, allSectionsData, getVisibleSlides]);

  useEffect(() => {
    // Check if already authenticated for this variant
    const auth = sessionStorage.getItem(`share_auth_${variantId}`);
    if (auth === 'true') {
      setIsAuthenticated(true);
      setShowPasswordPrompt(false);
      loadVariantData();
    } else {
      setLoading(false);
    }
  }, [variantId]);

  const loadVariantData = async () => {
    try {
      setLoading(true);
      
      // Fetch variant data
      const variantRef = doc(db, 'deck_variations', variantId!);
      const variantDoc = await getDoc(variantRef);
      
      if (!variantDoc.exists()) {
        toast({
          title: 'Error',
          description: 'Variant not found',
          variant: 'destructive',
        });
        navigate('/');
        return;
      }
      
      const data = variantDoc.data();
      setVariantData(data);
      
      console.log('Loaded variant data, hidden sections:', data.hidden_sections);
    } catch (error) {
      console.error('Error loading variant:', error);
      toast({
        title: 'Error',
        description: 'Failed to load presentation',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordSubmit = async () => {
    if (!variantData && variantId) {
      // First fetch to check password
      try {
        const variantRef = doc(db, 'deck_variations', variantId);
        const variantDoc = await getDoc(variantRef);
        
        if (!variantDoc.exists()) {
          toast({
            title: 'Error',
            description: 'Variant not found',
            variant: 'destructive',
          });
          return;
        }
        
        const data = variantDoc.data();
        
        if (!data.share_password || data.share_password === passwordInput) {
          setIsAuthenticated(true);
          setShowPasswordPrompt(false);
          sessionStorage.setItem(`share_auth_${variantId}`, 'true');
          setVariantData(data);
          loadVariantData();
        } else {
          toast({
            title: 'Incorrect password',
            description: 'Please try again',
            variant: 'destructive',
          });
        }
      } catch (error) {
        console.error('Error checking password:', error);
        toast({
          title: 'Error',
          description: 'Failed to authenticate',
          variant: 'destructive',
        });
      }
    }
  };

  const handleNext = () => {
    if (currentSlideIndex < visibleSlides.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isAuthenticated) return;
      
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isAuthenticated, currentSlideIndex, visibleSlides.length]);

  if (loading) {
    return (
      <div className="w-full h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading presentation...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <Dialog open={showPasswordPrompt} onOpenChange={() => {}}>
        <DialogContent onInteractOutside={(e) => e.preventDefault()}>
          <DialogHeader>
            <DialogTitle>Password Required</DialogTitle>
            <DialogDescription>
              This presentation is password protected. Please enter the password to view.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handlePasswordSubmit();
                  }
                }}
                autoFocus
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button onClick={handlePasswordSubmit}>
              Submit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  const currentSlideId = visibleSlides[currentSlideIndex];
  const SlideComponent = currentSlideId ? slideComponents[currentSlideId] : null;

  // Handle navigation to a specific slide by component ID
  const handleNavigateToSlide = (componentId: string) => {
    const index = visibleSlides.findIndex(s => s === componentId);
    if (index !== -1) {
      setCurrentSlideIndex(index);
    }
  };

  return (
    <div className="w-full h-screen bg-gray-900 flex flex-col">
      {/* Slide Display */}
      <div className="flex-1 flex items-center justify-center p-8">
        {SlideComponent ? (
          <div 
            className="relative bg-white shadow-2xl"
            style={{
              width: '100%',
              maxWidth: '1300px',
              aspectRatio: '16 / 9',
              maxHeight: 'calc(100vh - 120px)',
            }}
          >
            <Suspense fallback={<div className="text-white">Loading slide...</div>}>
              <SlideComponent onNavigateToSlide={handleNavigateToSlide} />
            </Suspense>
          </div>
        ) : (
          <div className="text-white text-center">
            <p>Slide not found</p>
            <p className="text-sm text-gray-400 mt-2">Total slides: {visibleSlides.length}</p>
          </div>
        )}
      </div>

      {/* Navigation Bar */}
      <div className="bg-gray-800 px-8 py-4 flex items-center justify-between border-t border-gray-700">
        <Button
          onClick={handlePrev}
          disabled={currentSlideIndex === 0}
          variant="ghost"
          className="text-gray-300 hover:text-white hover:bg-gray-700"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Previous
        </Button>
        
        <div className="text-gray-300 text-sm">
          Slide {currentSlideIndex + 1} of {visibleSlides.length}
        </div>
        
        <Button
          onClick={handleNext}
          disabled={currentSlideIndex === visibleSlides.length - 1}
          variant="ghost"
          className="text-gray-300 hover:text-white hover:bg-gray-700"
        >
          Next
          <ChevronRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default SharedDeckView;

