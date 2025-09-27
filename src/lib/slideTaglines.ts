// Centralized footer taglines for all slides
export const SLIDE_TAGLINES = {
  2: "From 'Excel FINAL v14' to finally knowing what's going on.",
  3: "EBITDA protection: the sexiest three letters your CFO has ever heard.",
  4: "Bye-bye binders. Hello sanity.",
  5: "Keeping franchisors happy without giving franchisees a meltdown.",
  6: "Turns out fried chicken tastes even better with Bluetooth thermometers.",
  7: "1,324 locations, 184 bosses, and zero migraines.",
  8: "The only enterprise software employees don't hate on sight.",
  9: "Spin the flywheel, print foresight.",
  10: "Your freezer just texted: 'I'm about to quit.'",
  11: "Finally, a trillion-dollar problem begging for a billion-dollar solution.",
  12: "Land. Expand. Embed. Sounds suspiciously like your teenager's summer job.",
  13: "Who knew frugality could be this profitable?",
  14: "Zenput checks boxes. Depoint checks reality.",
  15: "Where chaos is in the DNA, Depoint is the gene therapy.",
  16: "Our moat isn't software. It's what the software knows.",
  17: "QuickBooks, POS, or even your grandma's spreadsheet — we'll make it sing.",
  18: "ERP tells you what happened. Depoint tells you what to do about it.",
  19: "ERP makes consultants rich. Depoint makes them look smart.",
  20: "Finally, KPIs that don't need a PhD to explain themselves.",
  21: "EDGE: It's like caffeine, but for your operations.",
  22: "Because someone always asks for the appendix.",
  23: "Screenshots or it didn't happen.",
  24: "Save your fries. Save your margins.",
  25: "Because fixing the fryer twice isn't twice as fun.",
  26: "When machines stop breaking, your P&L stops crying.",
  27: "Finally, an audit you don't dread.",
  28: "90.71% compliance… because 100% is reserved for robots.",
  29: "Because soggy fries should be a crime.",
  30: "Fast food should actually be… fast.",
  31: "Engagement isn't just for Instagram influencers.",
  32: "Finally, a dashboard that sells itself.",
} as const;

export const getSlideTagline = (slideNumber: number): string => {
  return SLIDE_TAGLINES[slideNumber as keyof typeof SLIDE_TAGLINES] || "Depoint: The System of Record for Frontline Execution";
};
