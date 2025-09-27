// Slide configuration for dynamic loading
export interface SlideInfo {
  id: number;
  name: string; // Changed from 'title' to 'name' - this will be the descriptive name shown in navigation
  title: string; // Keep title for slide content
  component: string;
  route: string;
}

export const slideConfig: SlideInfo[] = [
  { id: 1, name: "Cover - Original", title: "The Intelligence Layer for the Physical Economy", component: "SlideCover", route: "/investor-deck/slide/1" },
  { id: 33, name: "Cover - Bold Hero", title: "The Intelligence Layer for the Physical Economy", component: "SlideCover1", route: "/investor-deck/slide/33" },
  { id: 34, name: "Cover - Chaos to Intelligence", title: "Every Day Great Execution", component: "SlideCover2", route: "/investor-deck/slide/34" },
  { id: 35, name: "Cover - EDGE Identity", title: "EDGE - Every Day Great Execution", component: "SlideCover3", route: "/investor-deck/slide/35" },
  { id: 36, name: "Cover - Industry Symbolic", title: "Turning Operations Into Intelligence", component: "SlideCover4", route: "/investor-deck/slide/36" },
  { id: 2, name: "The Problem", title: "The $1 Trillion Disconnect", component: "SlideProblem", route: "/investor-deck/slide/2" },
  { id: 3, name: "The Solution", title: "From Chaos to Intelligence", component: "SlideSolution", route: "/investor-deck/slide/3" },
  { id: 4, name: "Digitizing Operations", title: "Digitizing the Operations Manual", component: "SlideDigitizingOpsManual", route: "/investor-deck/slide/4" },
  { id: 5, name: "Franchisor & Franchisee", title: "One Platform. Two Perspectives. Shared Growth.", component: "SlideFranchisorFranchisee", route: "/investor-deck/slide/5" },
  { id: 6, name: "Jollibee Operational Book", title: "Jollibee: Fully Digitized Operational Book", component: "SlideJollibeeOperationBook", route: "/investor-deck/slide/6" },
  { id: 7, name: "Jollibee Case Study", title: "Jollibee: Scale & Complexity Made Simple", component: "SlideJollibeeCase", route: "/investor-deck/slide/7" },
  { id: 8, name: "The Platform", title: "Built Like SAP, Loved Like WhatsApp", component: "SlidePlatform", route: "/investor-deck/slide/8" },
  { id: 9, name: "The AI Engine", title: "The Data Flywheel — Built on Proprietary IP", component: "SlidePlatformEcosystem", route: "/investor-deck/slide/9" },
  { id: 10, name: "How It Works", title: "We Turn Data Into Foresight", component: "SlideInsightsEngine", route: "/investor-deck/slide/10" },
  { id: 11, name: "Market Opportunity", title: "Defining a $14B Category", component: "SlideMarketOpportunity", route: "/investor-deck/slide/11" },
  { id: 12, name: "The Playbook", title: "Our Proven Go-To-Market Playbook", component: "SlideGTMStrategy", route: "/investor-deck/slide/12" },
  { id: 13, name: "The Economics", title: "Capital-Efficient Growth & The Plan", component: "SlideFinancial", route: "/investor-deck/slide/13" },
  { id: 14, name: "Why We Win", title: "Built for a Complexity Others Can't Handle", component: "SlideCompetitiveLandscape", route: "/investor-deck/slide/14" },
  { id: 15, name: "The Vision", title: "One Platform, Every Frontline Industry", component: "SlideCrossIndustryPlatform", route: "/investor-deck/slide/15" },
  { id: 16, name: "The Strategic Value", title: "The Ultimate Strategic Asset: Our Data", component: "SlideStrategicFit", route: "/investor-deck/slide/16" },
  { id: 17, name: "Platform Integrations", title: "Plug Into Any Platform", component: "SlideIntegrations", route: "/investor-deck/slide/17" },
  { id: 18, name: "Enterprise Stack", title: "Depoint Bridges Frontline & ERP", component: "SlideEnterpriseStack", route: "/investor-deck/slide/18" },
  { id: 19, name: "Consulting Partners", title: "Why Consulting Partners Love Depoint", component: "SlideConsultingPartners", route: "/investor-deck/slide/19" },
  { id: 20, name: "Dashboard Intelligence", title: "The Intelligence Layer: Why Dashboards Matter", component: "SlideDashboardIntro", route: "/investor-deck/slide/20" },
  { id: 21, name: "Contact", title: "EDGE — Every Day Great Execution", component: "SlideClosing", route: "/investor-deck/slide/21" },
  { id: 22, name: "Appendices", title: "Appendices", component: "SlideAppendices", route: "/investor-deck/slide/22" },
  { id: 23, name: "Dashboards Demo", title: "Dashboards Demo", component: "SlideDashboardsDemo", route: "/investor-deck/slide/23" },
  // Category 1: Protect Margin
  { id: 24, name: "Oil Monitoring Dashboard", title: "Oil Monitoring Dashboard", component: "SlideOilMonitoringDashboard", route: "/investor-deck/slide/24" },
  { id: 25, name: "Issues Dashboard", title: "Issues Dashboard", component: "SlideIssuesDashboard", route: "/investor-deck/slide/25" },
  // Category 2: Reduce Risk
  { id: 26, name: "Equipment Monitoring Dashboard", title: "Equipment Monitoring Dashboard", component: "SlideEquipmentMonitoringDashboard", route: "/investor-deck/slide/26" },
  { id: 27, name: "Audit Report Dashboard", title: "Audit Report Dashboard", component: "SlideAuditReportDashboard", route: "/investor-deck/slide/27" },
  { id: 28, name: "Task Compliance Dashboard", title: "Task Compliance Dashboard", component: "SlideTaskComplianceDashboard", route: "/investor-deck/slide/28" },
  // Category 3: Protect Revenue
  { id: 29, name: "Product Gold Standard Dashboard", title: "Product Gold Standard Dashboard", component: "SlideProductGoldStandardDashboard", route: "/investor-deck/slide/29" },
  // Category 4: Accelerate Growth
  { id: 30, name: "Speed of Service Dashboard", title: "Speed of Service Dashboard", component: "SlideSpeedOfServiceDashboard", route: "/investor-deck/slide/30" },
  { id: 31, name: "Users Engagement Dashboard", title: "Users Engagement Dashboard", component: "SlideUsersEngagementDashboard", route: "/investor-deck/slide/31" },
  { id: 32, name: "Sales Dashboard", title: "Sales Management Dashboard", component: "SlideSalesManagementDashboard", route: "/investor-deck/slide/32" }
];

export const getTotalSlides = () => slideConfig.length;
export const getSlideInfo = (id: number) => slideConfig.find(slide => slide.id === id);
export const getNextSlideId = (currentId: number) => {
  const index = slideConfig.findIndex(s => s.id === currentId);
  const nextIndex = index === -1 ? 0 : (index + 1) % slideConfig.length;
  return slideConfig[nextIndex].id;
};
export const getPrevSlideId = (currentId: number) => {
  const index = slideConfig.findIndex(s => s.id === currentId);
  const prevIndex = index === -1 ? slideConfig.length - 1 : (index - 1 + slideConfig.length) % slideConfig.length;
  return slideConfig[prevIndex].id;
};