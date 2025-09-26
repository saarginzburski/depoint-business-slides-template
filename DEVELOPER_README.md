# Depoint Ops Scale - Developer Guidelines

## Project Overview
This is a React + TypeScript + Vite project using ShadCN UI components for building investor marketing materials and one-pagers for Depoint.

## Tech Stack
- **Frontend**: React 18.3.1 with TypeScript
- **Build Tool**: Vite 5.4.1
- **UI Components**: ShadCN UI with Radix UI primitives
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Forms**: React Hook Form with Zod validation
- **Charts**: Recharts
- **State Management**: TanStack React Query

## Getting Started

### Prerequisites
- Node.js (recommended version 18+)
- npm or yarn package manager

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
This starts the development server at `http://localhost:5173`

### Building
```bash
npm run build
```
Builds the project for production in the `dist/` folder

### Preview Production Build
```bash
npm run preview
```
Serves the production build locally for testing

### Linting
```bash
npm run lint
```

## Project Structure
```
src/
├── components/          # React components
│   ├── ui/             # ShadCN UI components
│   ├── DepointOnePager.tsx
│   └── ExecutiveOnePager.tsx
├── pages/              # Page components
│   ├── slides/         # Individual slide components
│   │   ├── slideConfig.ts     # Slide configuration
│   │   ├── Slide01Cover.tsx   # Cover slide
│   │   ├── Slide02ExecutiveSummary.tsx
│   │   └── ... (15 slides total)
│   ├── InvestorDeck.tsx       # Main slides browser
│   ├── SlideViewer.tsx        # Individual slide viewer
│   └── Index.tsx              # Home page
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── assets/             # Static assets (images, logos)
```

## Development Guidelines

### Code Style
- Use TypeScript for all new components
- Follow React functional component patterns with hooks
- Use ShadCN UI components for consistent styling
- Implement proper error handling and loading states

### Component Organization
- Keep components small and focused on single responsibility
- Use custom hooks for reusable logic
- Place shared UI components in `src/components/ui/`
- Place page-specific components in respective page folders

### Styling
- Use Tailwind CSS utility classes
- Follow the existing design system established by ShadCN UI
- Maintain responsive design practices

## Investor Deck Architecture

The investor deck has been refactored into a modular, scalable architecture optimized for Legal paper printing:

### Slide System
- **Main Browser**: `/investor-deck` - Grid view of all slides with navigation
- **Individual Slides**: `/investor-deck/slide/{id}` - Full-screen slide viewer
- **Slide Components**: Each slide is a separate React component in `src/pages/slides/`
- **Configuration**: Slide metadata managed in `src/pages/slides/slideConfig.ts`
- **Print Route**: `/print-deck` - Optimized for 1:1 Legal paper printing

### Slide Dimensions
- **Size**: 1344px × 816px (Legal paper landscape: 14" × 8.5")
- **Aspect Ratio**: 1.65:1 (close to original 16:9 for content compatibility)
- **Print Method**: 1:1 mapping - no scaling or transformations
- **Paper**: Legal size (8.5" × 14") in landscape orientation

### Navigation Features
- Keyboard navigation (arrow keys)
- Slide-to-slide navigation with previous/next buttons
- Overview mode with thumbnail grid
- PDF export functionality
- Responsive design for different screen sizes

### Adding New Slides

#### Manual Method
1. Create new slide component in `src/pages/slides/` using the naming convention `Slide[Name].tsx` (without numbers)
2. Use `SLIDE_CONFIG` from `@/lib/slideConfig` for dimensions
3. Add slide info to `slideConfig.ts` with the component name matching your file name
4. Import component in `SlideViewer.tsx`, `InvestorDeck.tsx`, and `PrintableDeck.tsx`
5. Slides automatically appear in the browser grid

#### Interactive Method (New Feature)
1. Navigate to the investor deck overview page (`/investor-deck`)
2. Hover between slide thumbnails to see "Add slide" buttons with + icons
3. Click any + button to open the slide creation dialog
4. Fill in the form fields:
   - **Slide Name**: Descriptive name for navigation (required)
   - **Title**: Main slide title (optional - defaults to placeholder text)
   - **Sub Title**: Slide subtitle (optional - defaults to placeholder text)  
   - **Footer**: Custom footer text (optional - defaults to placeholder text)
5. Click "Create Slide" to generate and download the slide component code
6. Follow the provided instructions to complete the setup:
   - Save the downloaded `.tsx` file to `src/pages/slides/`
   - Add the slide entry to `slideConfig.ts`
   - Import the component in the required files
7. The new slide will appear in the presentation with placeholder content that can be customized

**Note**: The interactive method generates a template slide with placeholder content. All empty fields will show helpful placeholder text like "This is the placeholder for the title that will be added later" to guide content creation.

### Slide Configuration
All slides use the centralized configuration from `src/lib/slideConfig.ts`:
```typescript
import { SLIDE_CONFIG, getSlideStyle } from '@/lib/slideConfig';

// Use in slide components:
<div style={getSlideStyle()}>
  // slide content
</div>
```

### Important Notes
- Any important items added to Cursor memory should also be documented in this README
- Follow the existing patterns for investor deck presentations
- Maintain brand consistency with Depoint logos and colors
- Each slide is lazy-loaded for optimal performance
