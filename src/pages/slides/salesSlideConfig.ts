// Slide configuration for sales deck
export interface SalesSlideInfo {
  id: number;
  name: string;
  title: string;
  component: string;
  route: string;
}

export const salesSlideConfig: SalesSlideInfo[] = [
  { id: 1, name: "Cover", title: "The System of Record for Frontline Execution", component: "SlideCover", route: "/sales-deck/slide/1" },
  { id: 2, name: "Problem", title: "The $100B Blind Spot", component: "SlideProblem", route: "/sales-deck/slide/2" },
  { id: 3, name: "Our Journey", title: "From Pilots to Scale", component: "SlideOurJourney", route: "/sales-deck/slide/3" },
  { id: 4, name: "Platform", title: "Built Like SAP, Loved Like WhatsApp", component: "SlidePlatform", route: "/sales-deck/slide/4" },
  { id: 5, name: "Platform Ecosystem", title: "The Operations Intelligence Flywheel", component: "SlidePlatformEcosystem", route: "/sales-deck/slide/5" },
  { id: 6, name: "Insights Engine", title: "From Retrospective to Predictive Intelligence", component: "SlideInsightsEngine", route: "/sales-deck/slide/6" },
  { id: 7, name: "Closing", title: "We're Building the SAP of Store Execution", component: "SlideClosing", route: "/sales-deck/slide/7" },
];

export const getSalesTotalSlides = () => salesSlideConfig.length;
export const getSalesSlideInfo = (id: number) => salesSlideConfig.find(slide => slide.id === id);
export const getSalesNextSlideId = (currentId: number) => currentId < salesSlideConfig.length ? currentId + 1 : 1;
export const getSalesPrevSlideId = (currentId: number) => currentId > 1 ? currentId - 1 : salesSlideConfig.length;