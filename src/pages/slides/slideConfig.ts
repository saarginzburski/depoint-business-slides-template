// Slide configuration for dynamic loading
export interface SlideInfo {
  id: string;  // Stable component name - never changes when slides are reordered
  name: string; // Descriptive name shown in navigation
  title: string; // Title displayed on the slide
  component: string; // Same as id - the React component name
  displayOrder: number; // Numeric order for UI display (can change)
  route: string;
  section_key: string; // Section this slide belongs to (main, demo, appendix, or custom)
}

export const slideConfig: SlideInfo[] = [
  { id: "SlideCover", component: "SlideCover", displayOrder: 1, name: "Cover", title: "The Intelligence Layer for the Physical Economy", route: "/investor-deck/slide/1", section_key: "main" },
  { id: "SlideProblem", component: "SlideProblem", displayOrder: 2, name: "The Problem", title: "The $1 Trillion Disconnect", route: "/investor-deck/slide/2", section_key: "main" },
  { id: "SlideSolution", component: "SlideSolution", displayOrder: 3, name: "The Solution", title: "From Chaos to Control", route: "/investor-deck/slide/3", section_key: "main" },
  { id: "SlideDigitizingOpsManual", component: "SlideDigitizingOpsManual", displayOrder: 4, name: "Digitizing Operations", title: "Digitizing the Operations Manual", route: "/investor-deck/slide/4", section_key: "main" },
  { id: "SlideFranchisorFranchisee", component: "SlideFranchisorFranchisee", displayOrder: 5, name: "Franchisor & Franchisee", title: "One Platform. Two Perspectives. Shared Growth.", route: "/investor-deck/slide/5", section_key: "main" },
  { id: "SlideRealityNotChecklists", component: "SlideRealityNotChecklists", displayOrder: 6, name: "Reality Not Checklists", title: "Is this just another checklists app?", route: "/investor-deck/slide/6", section_key: "main" },
  { id: "SlideJollibeeOperationBook", component: "SlideJollibeeOperationBook", displayOrder: 7, name: "Jollibee Operational Book", title: "Jollibee: Fully Digitized Operational Book", route: "/investor-deck/slide/7", section_key: "main" },
  { id: "SlideJollibeeCase", component: "SlideJollibeeCase", displayOrder: 8, name: "Jollibee Case Study", title: "Jollibee: Scale & Complexity Made Simple", route: "/investor-deck/slide/8", section_key: "main" },
  { id: "SlideWhatsNext", component: "SlideWhatsNext", displayOrder: 9, name: "What's Next", title: "What's Next", route: "/investor-deck/slide/9", section_key: "main" },
  { id: "SlidePlatform", component: "SlidePlatform", displayOrder: 10, name: "The Platform", title: "Built Like SAP, Loved Like WhatsApp", route: "/investor-deck/slide/10", section_key: "main" },
  { id: "SlidePlatformEcosystem", component: "SlidePlatformEcosystem", displayOrder: 11, name: "The AI Engine", title: "The Data Flywheel — Built on Proprietary IP", route: "/investor-deck/slide/11", section_key: "main" },
  { id: "SlideInsightsEngine", component: "SlideInsightsEngine", displayOrder: 12, name: "How It Works", title: "We Turn Data Into Foresight", route: "/investor-deck/slide/12", section_key: "main" },
  { id: "SlideMarketOpportunity", component: "SlideMarketOpportunity", displayOrder: 13, name: "Market Opportunity", title: "Defining a $14B Category", route: "/investor-deck/slide/13", section_key: "main" },
  { id: "SlideGTMStrategy", component: "SlideGTMStrategy", displayOrder: 14, name: "The Playbook", title: "Our Proven Go-To-Market Playbook", route: "/investor-deck/slide/14", section_key: "main" },
  { id: "SlideGlobalBrands", component: "SlideGlobalBrands", displayOrder: 15, name: "Global Brands", title: "Scale Proven Across Industries", route: "/investor-deck/slide/15", section_key: "main" },
  { id: "SlideFinancial", component: "SlideFinancial", displayOrder: 16, name: "The Economics", title: "Capital-Efficient Growth & The Plan", route: "/investor-deck/slide/16", section_key: "main" },
  { id: "SlideCompetitiveLandscape", component: "SlideCompetitiveLandscape", displayOrder: 17, name: "Why We Win", title: "Built for a Complexity Others Can't Handle", route: "/investor-deck/slide/17", section_key: "main" },
  { id: "SlideCrossIndustryPlatform", component: "SlideCrossIndustryPlatform", displayOrder: 18, name: "The Vision", title: "One Platform, Every Frontline Industry", route: "/investor-deck/slide/18", section_key: "main" },
  { id: "SlideStrategicFit", component: "SlideStrategicFit", displayOrder: 19, name: "The Strategic Value", title: "The Ultimate Strategic Asset: Our Data", route: "/investor-deck/slide/19", section_key: "main" },
  { id: "SlideIntegrations", component: "SlideIntegrations", displayOrder: 20, name: "Platform Integrations", title: "Plug Into Any Platform", route: "/investor-deck/slide/20", section_key: "main" },
  { id: "SlideEnterpriseStack", component: "SlideEnterpriseStack", displayOrder: 21, name: "Enterprise Stack", title: "Depoint Bridges Frontline & ERP", route: "/investor-deck/slide/21", section_key: "main" },
  { id: "SlideArchitectureOverview", component: "SlideArchitectureOverview", displayOrder: 22, name: "Architecture Overview", title: "Depoint Platform: A Strategic Architecture Overview", route: "/investor-deck/slide/22", section_key: "main" },
  { id: "SlideConsultingPartners", component: "SlideConsultingPartners", displayOrder: 23, name: "Consulting Partners", title: "Why Consulting Partners Love Depoint", route: "/investor-deck/slide/23", section_key: "main" },
  { id: "SlideDashboardIntro", component: "SlideDashboardIntro", displayOrder: 24, name: "Dashboard Intelligence", title: "The Intelligence Layer: Why Dashboards Matter", route: "/investor-deck/slide/24", section_key: "main" },
  { id: "SlideClosing", component: "SlideClosing", displayOrder: 25, name: "Contact", title: "EDGE — Every Day Great Execution", route: "/investor-deck/slide/25", section_key: "main" },
  { id: "SlideProblemStats", component: "SlideProblemStats", displayOrder: 26, name: "The Problem (Stats)", title: "The Hidden Cost of Operational Chaos", route: "/investor-deck/slide/26", section_key: "main" },
  { id: "SlideAppendices", component: "SlideAppendices", displayOrder: 27, name: "Appendices", title: "Appendices", route: "/investor-deck/slide/27", section_key: "appendix" },
  { id: "SlideDashboardsDemo", component: "SlideDashboardsDemo", displayOrder: 28, name: "Dashboards Demo", title: "Dashboards Demo", route: "/investor-deck/slide/28", section_key: "demo" },
  // Category 1: Protect Margin
  { id: "SlideOilMonitoringDashboard", component: "SlideOilMonitoringDashboard", displayOrder: 29, name: "Oil Monitoring Dashboard", title: "Oil Monitoring Dashboard", route: "/investor-deck/slide/29", section_key: "demo" },
  { id: "SlideIssuesDashboard", component: "SlideIssuesDashboard", displayOrder: 30, name: "Issues Dashboard", title: "Issues Dashboard", route: "/investor-deck/slide/30", section_key: "demo" },
  // Category 2: Reduce Risk
  { id: "SlideEquipmentMonitoringDashboard", component: "SlideEquipmentMonitoringDashboard", displayOrder: 31, name: "Equipment Monitoring Dashboard", title: "Equipment Monitoring Dashboard", route: "/investor-deck/slide/31", section_key: "demo" },
  { id: "SlideAuditReportDashboard", component: "SlideAuditReportDashboard", displayOrder: 32, name: "Audit Report Dashboard", title: "Audit Report Dashboard", route: "/investor-deck/slide/32", section_key: "demo" },
  { id: "SlideTaskComplianceDashboard", component: "SlideTaskComplianceDashboard", displayOrder: 33, name: "Task Compliance Dashboard", title: "Task Compliance Dashboard", route: "/investor-deck/slide/33", section_key: "demo" },
  // Category 3: Protect Revenue
  { id: "SlideProductGoldStandardDashboard", component: "SlideProductGoldStandardDashboard", displayOrder: 34, name: "Product Gold Standard Dashboard", title: "Product Gold Standard Dashboard", route: "/investor-deck/slide/34", section_key: "demo" },
  // Category 4: Accelerate Growth
  { id: "SlideSpeedOfServiceDashboard", component: "SlideSpeedOfServiceDashboard", displayOrder: 35, name: "Speed of Service Dashboard", title: "Speed of Service Dashboard", route: "/investor-deck/slide/35", section_key: "demo" },
  { id: "SlideUsersEngagementDashboard", component: "SlideUsersEngagementDashboard", displayOrder: 36, name: "Users Engagement Dashboard", title: "Users Engagement Dashboard", route: "/investor-deck/slide/36", section_key: "demo" },
  { id: "SlideSalesManagementDashboard", component: "SlideSalesManagementDashboard", displayOrder: 37, name: "Sales Dashboard", title: "Sales Management Dashboard", route: "/investor-deck/slide/37", section_key: "demo" },
];

export const getTotalSlides = () => slideConfig.length;

export const getSlideInfo = (id: string) => slideConfig.find(slide => slide.id === id);

// Get slide by displayOrder (for URL routes like /slide/1)
export const getSlideInfoByOrder = (displayOrder: number) => 
  slideConfig.find(slide => slide.displayOrder === displayOrder);

export const getNextSlideId = (currentId: string) => {
  const index = slideConfig.findIndex(s => s.id === currentId);
  const nextIndex = index === -1 ? 0 : (index + 1) % slideConfig.length;
  return slideConfig[nextIndex].id;
};

export const getPrevSlideId = (currentId: string) => {
  const index = slideConfig.findIndex(s => s.id === currentId);
  const prevIndex = index === -1 ? slideConfig.length - 1 : (index - 1 + slideConfig.length) % slideConfig.length;
  return slideConfig[prevIndex].id;
};