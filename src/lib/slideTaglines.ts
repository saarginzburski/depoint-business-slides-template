// Centralized footer taglines for all slides
export const SLIDE_TAGLINES = {
  2: "Built for scale, proven with enterprise clients",
  3: "The only platform both IT and Ops demand to roll out",
  4: "Validated from early pilots to enterprise-wide adoption",
  5: "Depoint transforms frontline execution into operational intelligence",
  6: "A self-improving system that compounds performance",
  7: "Depoint shifts leaders from reacting to predicting",
  8: "Two of the world's top chains bet their ops on Depoint",
  9: "Each new vertical validates platform adaptability",
  10: "Depoint is the SAP of frontline execution",
  11: "Only Depoint turns frontline knowledge into enterprise wisdom",
  12: "Proven enterprise playbook delivers results in 60 days",
  13: "Scaling a capital-efficient, proven model",
  14: "Depoint owns the proprietary operational data stream",
  15: "The system of record for frontline execution",
  16: "Comprehensive analytics and insights drive continuous improvement",
  17: "Depoint is the only solution going this deep into frontline data",
  18: "Superior compliance intelligence from millions of data points",
  19: "Engagement data turned into efficiency breakthroughs",
  20: "From frontline actions to sales acceleration insights",
  21: "Granular product insights ensuring global consistency",
  22: "Turning live operations into continuous improvement",
  23: "Operational insights that prevent failures before they occur",
  24: "Predictive maintenance insights preventing failures before they occur",
  25: "Comprehensive audit intelligence driving continuous improvement",
  26: "Proactive issue intelligence turning problems into improvement opportunities",
} as const;

export const getSlideTagline = (slideNumber: number): string => {
  return SLIDE_TAGLINES[slideNumber as keyof typeof SLIDE_TAGLINES] || "Depoint: The System of Record for Frontline Execution";
};
