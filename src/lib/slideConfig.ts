// Slide dimension configuration
// Using Legal paper size in landscape orientation for optimal print results

export const SLIDE_CONFIG = {
  // Legal paper landscape: 14" × 8.5" 
  // At 96 DPI: 1344px × 816px
  // Rounded to clean numbers: 1344px × 816px
  width: 1344,
  height: 816,
  
  // Paper specifications
  paperSize: 'Legal', // 8.5" × 14"
  orientation: 'landscape', // 14" × 8.5"
  aspectRatio: 1344 / 816, // ~1.65:1
  
  // Print settings
  printWidth: '14in',
  printHeight: '8.5in',
  
  // CSS values
  cssWidth: '1344px',
  cssHeight: '816px',
} as const;

// Helper function to get slide style object - responsive for HTML, fixed for print
export const getSlideStyle = () => ({
  // Responsive width with fixed aspect ratio for HTML view
  width: '100%',
  aspectRatio: `${SLIDE_CONFIG.width} / ${SLIDE_CONFIG.height}`, // Maintains 1.65:1 ratio
  // Fixed dimensions only applied in print via CSS
});

// Helper function to get responsive slide container styles
export const getSlideContainerStyle = (scale?: number) => {
  const actualScale = scale || 1;
  return {
    width: '100%',
    aspectRatio: `${SLIDE_CONFIG.width} / ${SLIDE_CONFIG.height}`, // Maintains 1.65:1 ratio
    transform: actualScale !== 1 ? `scale(${actualScale})` : undefined,
    transformOrigin: 'top left',
  };
};

export default SLIDE_CONFIG;
