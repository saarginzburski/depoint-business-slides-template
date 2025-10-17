import { Search, Filter, Grid3x3, List, Eye, Printer, MoreVertical } from 'lucide-react';
import { useState } from 'react';

interface TopAppBarProps {
  deckName: string;
  onDeckNameChange: (name: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  activeFilters: string[];
  onFilterToggle: (filter: string) => void;
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
  slideCount: number;
  presentationTime: string;
  onViewDeck: () => void;
  onPrintDeck: () => void;
}

export const TopAppBar = ({
  deckName,
  onDeckNameChange,
  searchQuery,
  onSearchChange,
  activeFilters,
  onFilterToggle,
  viewMode,
  onViewModeChange,
  slideCount,
  presentationTime,
  onViewDeck,
  onPrintDeck,
}: TopAppBarProps) => {
  const [isEditingName, setIsEditingName] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const availableFilters = [
    { id: 'main', label: 'Main Deck' },
    { id: 'demo', label: 'Demo' },
    { id: 'appendix', label: 'Appendices' },
  ];

  return (
    <div className="bg-white border-b border-neutral-200 sticky top-0 z-20">
      {/* Main App Bar */}
      <div className="flex items-center justify-between px-6 py-3 gap-4">
        {/* Left: Deck Name */}
        <div className="flex items-center gap-4 min-w-0">
          {isEditingName ? (
            <input
              type="text"
              value={deckName}
              onChange={(e) => onDeckNameChange(e.target.value)}
              onBlur={() => setIsEditingName(false)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') setIsEditingName(false);
                if (e.key === 'Escape') {
                  setIsEditingName(false);
                }
              }}
              className="text-xl font-medium text-neutral-900 bg-transparent border-b-2 border-primary-600 outline-none min-w-[200px]"
              autoFocus
            />
          ) : (
            <h1
              onClick={() => setIsEditingName(true)}
              className="text-xl font-medium text-neutral-900 cursor-pointer hover:bg-neutral-100 px-2 py-1 -mx-2 rounded transition-colors truncate"
              title="Click to rename"
            >
              {deckName}
            </h1>
          )}
          
          {/* Stats */}
          <div className="flex items-center gap-3 text-sm text-neutral-600">
            <span>{slideCount} slides</span>
            <span>•</span>
            <span>{presentationTime}</span>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={onViewDeck}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary-700 hover:bg-primary-50 rounded-full transition-colors"
          >
            <Eye className="w-5 h-5" />
            View Deck
          </button>
          <button
            onClick={onPrintDeck}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-full transition-colors elevation-1"
          >
            <Printer className="w-5 h-5" />
            Print
          </button>
          <button
            className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
            aria-label="More options"
          >
            <MoreVertical className="w-5 h-5 text-neutral-600" />
          </button>
        </div>
      </div>

      {/* Search and Filters Bar */}
      <div className="flex items-center gap-3 px-6 pb-3">
        {/* Search */}
        <div className="flex items-center gap-2 flex-1 max-w-xl bg-neutral-100 rounded-full px-4 py-2 focus-within:bg-white focus-within:ring-2 focus-within:ring-primary-600 transition-all">
          <Search className="w-5 h-5 text-neutral-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search slides..."
            className="flex-1 bg-transparent outline-none text-sm text-neutral-900 placeholder:text-neutral-500"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="text-neutral-500 hover:text-neutral-700"
              aria-label="Clear search"
            >
              ×
            </button>
          )}
        </div>

        {/* Filter Toggle */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-full transition-colors ${
            showFilters || activeFilters.length > 0
              ? 'bg-primary-100 text-primary-700'
              : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
          }`}
        >
          <Filter className="w-5 h-5" />
          Filters
          {activeFilters.length > 0 && (
            <span className="px-1.5 py-0.5 text-xs bg-primary-600 text-white rounded-full">
              {activeFilters.length}
            </span>
          )}
        </button>

        {/* View Mode Toggle */}
        <div className="flex items-center bg-neutral-100 rounded-full p-1">
          <button
            onClick={() => onViewModeChange('grid')}
            className={`p-1.5 rounded-full transition-colors ${
              viewMode === 'grid'
                ? 'bg-white text-primary-600 elevation-1'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
            aria-label="Grid view"
          >
            <Grid3x3 className="w-5 h-5" />
          </button>
          <button
            onClick={() => onViewModeChange('list')}
            className={`p-1.5 rounded-full transition-colors ${
              viewMode === 'list'
                ? 'bg-white text-primary-600 elevation-1'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
            aria-label="List view"
          >
            <List className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Filter Chips (when expanded) */}
      {showFilters && (
        <div className="px-6 pb-3 animate-slide-down">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm text-neutral-600 font-medium">Section:</span>
            {availableFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => onFilterToggle(filter.id)}
                className={`px-3 py-1 text-sm rounded-full transition-colors ${
                  activeFilters.includes(filter.id)
                    ? 'bg-primary-600 text-white'
                    : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
                }`}
              >
                {filter.label}
                {activeFilters.includes(filter.id) && (
                  <span className="ml-1.5">×</span>
                )}
              </button>
            ))}
            {activeFilters.length > 0 && (
              <button
                onClick={() => activeFilters.forEach(f => onFilterToggle(f))}
                className="ml-2 text-sm text-neutral-600 hover:text-neutral-900 underline"
              >
                Clear all
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

