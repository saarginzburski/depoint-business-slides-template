import React, { useState, useMemo } from 'react';
import { X, Search, Filter, Eye, Trash2, Archive } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface SlideData {
  id: number;
  name: string;
  title: string;
  component: string;
  sectionId?: string;
  lastEdited?: Date;
  hiddenAt?: Date;
}

interface HiddenSlidesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  hiddenSlides: SlideData[];
  archivedSlides?: SlideData[];
  allSlides: SlideData[];
  onRestoreSlides: (slideIds: number[], targetSection: string) => void;
  onDeleteSlides: (slideIds: number[]) => void;
  onPreviewSlide: (slideId: number) => void;
  slideComponents: Record<string, React.LazyExoticComponent<any>>;
  sections: Array<{ id: string; name: string }>;
}

type TabType = 'hidden' | 'archived' | 'all';

export const HiddenSlidesDrawer: React.FC<HiddenSlidesDrawerProps> = ({
  isOpen,
  onClose,
  hiddenSlides,
  archivedSlides = [],
  allSlides,
  onRestoreSlides,
  onDeleteSlides,
  onPreviewSlide,
  slideComponents,
  sections,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('hidden');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSlideIds, setSelectedSlideIds] = useState<Set<number>>(new Set());
  const [filterSection, setFilterSection] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('recent');

  // Get slides for current tab
  const tabSlides = useMemo(() => {
    switch (activeTab) {
      case 'hidden':
        return hiddenSlides;
      case 'archived':
        return archivedSlides;
      case 'all':
        return allSlides;
      default:
        return [];
    }
  }, [activeTab, hiddenSlides, archivedSlides, allSlides]);

  // Filter and search slides
  const filteredSlides = useMemo(() => {
    let result = [...tabSlides];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (slide) =>
          slide.name.toLowerCase().includes(query) ||
          slide.title.toLowerCase().includes(query) ||
          slide.id.toString().includes(query)
      );
    }

    // Section filter
    if (filterSection !== 'all') {
      result = result.filter((slide) => slide.sectionId === filterSection);
    }

    // Sort
    switch (sortBy) {
      case 'recent':
        result.sort((a, b) => {
          const dateA = a.hiddenAt || a.lastEdited || new Date(0);
          const dateB = b.hiddenAt || b.lastEdited || new Date(0);
          return dateB.getTime() - dateA.getTime();
        });
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'id':
        result.sort((a, b) => a.id - b.id);
        break;
    }

    return result;
  }, [tabSlides, searchQuery, filterSection, sortBy]);

  const toggleSlideSelection = (slideId: number) => {
    const newSet = new Set(selectedSlideIds);
    if (newSet.has(slideId)) {
      newSet.delete(slideId);
    } else {
      newSet.add(slideId);
    }
    setSelectedSlideIds(newSet);
  };

  const toggleSelectAll = () => {
    if (selectedSlideIds.size === filteredSlides.length) {
      setSelectedSlideIds(new Set());
    } else {
      setSelectedSlideIds(new Set(filteredSlides.map((s) => s.id)));
    }
  };

  const handleBulkRestore = (targetSection: string) => {
    onRestoreSlides(Array.from(selectedSlideIds), targetSection);
    setSelectedSlideIds(new Set());
  };

  const handleBulkDelete = () => {
    if (confirm(`Delete ${selectedSlideIds.size} slides? This cannot be undone.`)) {
      onDeleteSlides(Array.from(selectedSlideIds));
      setSelectedSlideIds(new Set());
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-neutral-900/20 z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-[600px] bg-surface shadow-elevation-4 z-50 flex flex-col animate-drawer-slide-in-right">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200">
          <h2 className="text-title-large font-medium text-neutral-900">Manage Slides</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="h-8 w-8 p-0 rounded-full hover:bg-neutral-100"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-neutral-200">
          <button
            onClick={() => setActiveTab('hidden')}
            className={`flex-1 px-6 py-3 text-body-medium font-medium transition-colors relative ${
              activeTab === 'hidden'
                ? 'text-primary'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            Hidden
            <Badge className="ml-2 bg-neutral-100 text-neutral-700 text-label-small">
              {hiddenSlides.length}
            </Badge>
            {activeTab === 'hidden' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('archived')}
            className={`flex-1 px-6 py-3 text-body-medium font-medium transition-colors relative ${
              activeTab === 'archived'
                ? 'text-primary'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            Archived
            <Badge className="ml-2 bg-neutral-100 text-neutral-700 text-label-small">
              {archivedSlides.length}
            </Badge>
            {activeTab === 'archived' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('all')}
            className={`flex-1 px-6 py-3 text-body-medium font-medium transition-colors relative ${
              activeTab === 'all'
                ? 'text-primary'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            All Slides
            <Badge className="ml-2 bg-neutral-100 text-neutral-700 text-label-small">
              {allSlides.length}
            </Badge>
            {activeTab === 'all' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
            )}
          </button>
        </div>

        {/* Search and Filters */}
        <div className="px-6 py-4 space-y-3 border-b border-neutral-200 bg-neutral-50">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
            <Input
              type="text"
              placeholder="Search slides..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-10 border-neutral-300 focus:border-primary"
            />
          </div>

          {/* Filters */}
          <div className="flex gap-3">
            <Select value={filterSection} onValueChange={setFilterSection}>
              <SelectTrigger className="flex-1 h-9 border-neutral-300">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="All sections" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All sections</SelectItem>
                {sections.filter(s => s.id !== 'hidden').map((section) => (
                  <SelectItem key={section.id} value={section.id}>
                    {section.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="flex-1 h-9 border-neutral-300">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Recently hidden</SelectItem>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="id">Slide number</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Bulk Actions */}
          {selectedSlideIds.size > 0 && (
            <div className="flex items-center gap-3 pt-2">
              <Checkbox
                checked={selectedSlideIds.size === filteredSlides.length}
                onCheckedChange={toggleSelectAll}
              />
              <span className="text-body-small text-neutral-700">
                {selectedSlideIds.size} selected
              </span>
              <div className="flex-1" />
              <Select onValueChange={handleBulkRestore}>
                <SelectTrigger className="w-[160px] h-8 text-label-small">
                  <Eye className="h-3 w-3 mr-1" />
                  <SelectValue placeholder="Add to deck" />
                </SelectTrigger>
                <SelectContent>
                  {sections.filter(s => s.id !== 'hidden').map((section) => (
                    <SelectItem key={section.id} value={section.id}>
                      {section.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button
                size="sm"
                variant="ghost"
                onClick={handleBulkDelete}
                className="h-8 text-red-600 hover:text-red-700 hover:bg-red-50"
              >
                <Trash2 className="h-3 w-3 mr-1" />
                Delete
              </Button>
            </div>
          )}
        </div>

        {/* Slide Grid */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {filteredSlides.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="text-neutral-400 mb-2">
                {searchQuery ? (
                  <Search className="h-12 w-12 mx-auto mb-2" />
                ) : (
                  <Archive className="h-12 w-12 mx-auto mb-2" />
                )}
              </div>
              <p className="text-body-medium text-neutral-600">
                {searchQuery ? 'No slides match your search' : 'No slides here'}
              </p>
              <p className="text-body-small text-neutral-500 mt-1">
                {searchQuery ? 'Try adjusting your filters' : 'Hidden slides will appear here'}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-4">
              {filteredSlides.map((slide) => {
                const SlideComponent = slideComponents[slide.component];
                const isSelected = selectedSlideIds.has(slide.id);

                return (
                  <Card
                    key={slide.id}
                    className={`group relative overflow-hidden rounded-lg border transition-standard cursor-pointer ${
                      isSelected
                        ? 'ring-2 ring-primary border-primary'
                        : 'border-neutral-200 hover:border-neutral-300 hover:shadow-elevation-1'
                    }`}
                    onClick={() => toggleSlideSelection(slide.id)}
                  >
                    {/* Checkbox */}
                    <div className="absolute top-2 left-2 z-10">
                      <Checkbox
                        checked={isSelected}
                        onCheckedChange={() => toggleSlideSelection(slide.id)}
                        className="bg-surface shadow-sm"
                        onClick={(e) => e.stopPropagation()}
                      />
                    </div>

                    {/* Slide Preview */}
                    <div className="relative w-full aspect-[16/9] bg-neutral-50 overflow-hidden">
                      <div
                        className="w-full h-full transform scale-[0.15] origin-top-left"
                        style={{ width: '666%', height: '666%' }}
                      >
                        {SlideComponent ? (
                          <React.Suspense
                            fallback={
                              <div className="w-full h-full bg-neutral-100 flex items-center justify-center">
                                <div className="animate-pulse text-neutral-400 text-6xl">
                                  {slide.id}
                                </div>
                              </div>
                            }
                          >
                            <SlideComponent />
                          </React.Suspense>
                        ) : (
                          <div className="w-full h-full bg-neutral-100 flex items-center justify-center">
                            <div className="text-neutral-400 text-6xl font-bold">{slide.id}</div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Slide Info */}
                    <div className="px-3 py-2 bg-surface border-t border-neutral-200">
                      <p className="text-body-small font-medium text-neutral-900 truncate">
                        {slide.name}
                      </p>
                      <p className="text-label-small text-neutral-600">Slide {slide.id}</p>
                    </div>

                    {/* Hover Actions */}
                    <div className="absolute inset-x-0 bottom-12 flex justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={(e) => {
                          e.stopPropagation();
                          onPreviewSlide(slide.id);
                        }}
                        className="h-8 w-8 p-0 bg-surface/90 backdrop-blur-sm hover:bg-primary/10 rounded-full shadow-sm"
                        title="Preview slide"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (confirm(`Delete slide ${slide.id}?`)) {
                            onDeleteSlides([slide.id]);
                          }
                        }}
                        className="h-8 w-8 p-0 bg-surface/90 backdrop-blur-sm hover:bg-red-50 text-red-600 rounded-full shadow-sm"
                        title="Delete slide"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

