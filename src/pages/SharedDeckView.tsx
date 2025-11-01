import React, { useState, useEffect, lazy, Suspense } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db } from '@/integrations/firebase/client';
import { doc, getDoc, collection, query, where, getDocs, orderBy as firestoreOrderBy } from 'firebase/firestore';
import { toast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { slideConfig } from '@/pages/slides/slideConfig';

// Lazy load all slide components
const slideComponents: Record<string, React.LazyExoticComponent<React.ComponentType<any>>> = {
  SlideCover: lazy(() => import('./slides/SlideCover')),
  SlideExecutiveSummary: lazy(() => import('./slides/SlideExecutiveSummary')),
  SlidePlatform: lazy(() => import('./slides/SlidePlatform')),
  SlideOurJourneyInvestor: lazy(() => import('./slides/SlideOurJourneyInvestor')),
  SlideProblem: lazy(() => import('./slides/SlideProblem')),
  SlideSolution: lazy(() => import('./slides/SlideSolution')),
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
  SlideFinancial: lazy(() => import('./slides/SlideFinancial')),
  SlideTeam: lazy(() => import('./slides/SlideTeam')),
  SlideOurJourney: lazy(() => import('./slides/SlideOurJourney')),
  SlideStrategicFit: lazy(() => import('./slides/SlideStrategicFit')),
  SlideArchitectureOverview: lazy(() => import('./slides/SlideArchitectureOverview')),
  SlideEnterpriseStack: lazy(() => import('./slides/SlideEnterpriseStack')),
  SlideIntegrations: lazy(() => import('./slides/SlideIntegrations')),
  SlideConsultingPartners: lazy(() => import('./slides/SlideConsultingPartners')),
  SlideDashboardIntro: lazy(() => import('./slides/SlideDashboardIntro')),
  SlideDashboardSummary: lazy(() => import('./slides/SlideDashboardSummary')),
  SlideDashboardsDemo: lazy(() => import('./slides/SlideDashboardsDemo')),
  SlideTaskComplianceDashboard: lazy(() => import('./slides/SlideTaskComplianceDashboard')),
  SlideIssuesDashboard: lazy(() => import('./slides/SlideIssuesDashboard')),
  SlideProductGoldStandardDashboard: lazy(() => import('./slides/SlideProductGoldStandardDashboard')),
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
  const [slides, setSlides] = useState<string[]>([]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

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
      
      // Get hidden sections from variant (these are section KEYS like 'main', 'demo', etc)
      const hiddenSectionKeys = new Set(data.hidden_sections || []);
      console.log('Hidden section keys:', Array.from(hiddenSectionKeys));
      
      // Fetch ALL sections to get order and mapping
      const allSectionsSnapshot = await getDocs(
        query(collection(db, 'custom_sections'), firestoreOrderBy('order_index', 'asc'))
      );
      
      const sectionIdToKey = new Map<string, string>();
      const orderedSections: Array<{ id: string; key: string }> = [];
      
      allSectionsSnapshot.docs.forEach(doc => {
        const sectionData = doc.data();
        if (sectionData.key) {
          sectionIdToKey.set(doc.id, sectionData.key);
          orderedSections.push({ id: doc.id, key: sectionData.key });
        }
      });
      
      console.log('Ordered sections:', orderedSections.map(s => s.key));
      
      // Fetch slide orders for this variant
      const slidesQuery = query(
        collection(db, 'deck_variation_slide_orders'),
        where('deck_variation_id', '==', variantId),
        firestoreOrderBy('order_index', 'asc')
      );
      
      const slidesSnapshot = await getDocs(slidesQuery);
      const slideOrders = slidesSnapshot.docs.map(doc => ({
        slide_id: doc.data().slide_id,
        section_id: doc.data().section_id,
        order_index: doc.data().order_index
      }));
      
      console.log('Total slide orders:', slideOrders.length);
      
      // Group slide orders by section
      const slidesBySection = new Map<string, typeof slideOrders>();
      slideOrders.forEach(order => {
        if (!slidesBySection.has(order.section_id)) {
          slidesBySection.set(order.section_id, []);
        }
        slidesBySection.get(order.section_id)!.push(order);
      });
      
      // Build ordered list of slides: sections in order, then slides within each section
      let orderedSlides: string[] = [];
      
      if (slideOrders.length === 0) {
        // No custom ordering - use all slides in default order
        console.log('No custom ordering, using all slides');
        orderedSlides = slideConfig
          .sort((a, b) => a.displayOrder - b.displayOrder)
          .map(slide => slide.id);
      } else {
        // Iterate sections in order
        orderedSections.forEach(section => {
          // Skip hidden sections
          if (hiddenSectionKeys.has(section.key)) {
            console.log('Skipping hidden section:', section.key);
            return;
          }
          
          const sectionSlideOrders = slidesBySection.get(section.id) || [];
          
          // Sort slides within this section by order_index and add to result
          sectionSlideOrders
            .sort((a, b) => a.order_index - b.order_index)
            .forEach(order => {
              orderedSlides.push(order.slide_id);
            });
        });
      }
      
      console.log('Final slides for shared view:', orderedSlides.length);
      setSlides(orderedSlides);
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
    if (currentSlideIndex < slides.length - 1) {
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
  }, [isAuthenticated, currentSlideIndex, slides.length]);

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

  const currentSlideId = slides[currentSlideIndex];
  const SlideComponent = currentSlideId ? slideComponents[currentSlideId] : null;

  return (
    <div className="w-full h-screen bg-gray-900 flex flex-col">
      {/* Slide Display */}
      <div className="flex-1 flex items-center justify-center p-8">
        {SlideComponent ? (
          <Suspense fallback={<div className="text-white">Loading slide...</div>}>
            <SlideComponent />
          </Suspense>
        ) : (
          <div className="text-white text-center">
            <p>Slide not found</p>
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
          Slide {currentSlideIndex + 1} of {slides.length}
        </div>
        
        <Button
          onClick={handleNext}
          disabled={currentSlideIndex === slides.length - 1}
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

