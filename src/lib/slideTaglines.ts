// Component-based taglines - more maintainable and reorder-safe
export const SLIDE_TAGLINES = {
  // Main deck slides
  SlideProblem: "From 'Excel FINAL v14' to finally knowing what's going on.",
  SlideSolution: "EBITDA protection: the sexiest three letters your CFO has ever heard.",
  SlideDigitizingOpsManual: "Bye-bye binders. Hello sanity.",
  SlideFranchisorFranchisee: "Keeping franchisors happy without giving franchisees a meltdown.",
  SlideJollibeeOperationBook: "Turns out fried chicken tastes even better with Bluetooth thermometers.",
  SlideJollibeeCase: "1,324 locations, 184 bosses, and zero migraines.",
  SlidePlatform: "The only enterprise software employees don't hate on sight.",
  SlidePlatformEcosystem: "Spin the flywheel, print foresight.",
  SlideInsightsEngine: "Your freezer just texted: 'I'm about to quit.'",
  SlideMarketOpportunity: "Finally, a trillion-dollar problem begging for a billion-dollar solution.",
  SlideGTMStrategy: "Land. Expand. Embed. Sounds suspiciously like your teenager's summer job.",
  SlideFinancial: "Who knew frugality could be this profitable?",
  SlideCompetitiveLandscape: "Zenput checks boxes. Depoint checks reality.",
  SlideCrossIndustryPlatform: "Where chaos is in the DNA, Depoint is the gene therapy.",
  SlideStrategicFit: "Our moat isn't software. It's what the software knows.",
  SlideIntegrations: "QuickBooks, POS, or even your grandma's spreadsheet — we'll make it sing.",
  SlideEnterpriseStack: "ERP tells you what happened. Depoint tells you what to do about it.",
  SlideConsultingPartners: "ERP makes consultants rich. Depoint makes them look smart.",
  SlideDashboardIntro: "Finally, KPIs that don't need a PhD to explain themselves.",
  SlideClosing: "EDGE: It's like caffeine, but for your operations.",
  SlideAppendices: "Because someone always asks for the appendix.",
  SlideDashboardsDemo: "Screenshots or it didn't happen.",
  
  // Dashboard slides
  SlideOilMonitoringDashboard: "Save your fries. Save your margins.",
  SlideIssuesDashboard: "Because fixing the fryer twice isn't twice as fun.",
  SlideEquipmentMonitoringDashboard: "When machines stop breaking, your P&L stops crying.",
  SlideAuditReportDashboard: "Finally, an audit you don't dread.",
  SlideTaskComplianceDashboard: "90.71% compliance… because 100% is reserved for robots.",
  SlideProductGoldStandardDashboard: "Because soggy fries should be a crime.",
  SlideSpeedOfServiceDashboard: "Fast food should actually be… fast.",
  SlideUsersEngagementDashboard: "Engagement isn't just for Instagram influencers.",
  SlideSalesManagementDashboard: "Finally, a dashboard that sells itself.",
} as const;

export const getSlideTagline = (componentName: string): string => {
  return SLIDE_TAGLINES[componentName as keyof typeof SLIDE_TAGLINES] || "Depoint: The System of Record for Frontline Execution";
};
