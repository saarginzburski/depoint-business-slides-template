import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Save, X, Copy, Eye, Printer, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useDeckVariations, DeckVariationWithSections } from '@/hooks/useDeckVariations';

interface Section {
  id: string;
  name: string;
  description: string;
  color: string;
  slides: number[];
}

interface DeckVariationsManagerProps {
  sections: Section[];
  onVariationSelect: (variation: DeckVariationWithSections | null) => void;
  onDeckNameChange: (name: string) => void;
}

export const DeckVariationsManager: React.FC<DeckVariationsManagerProps> = ({
  sections,
  onVariationSelect,
  onDeckNameChange
}) => {
  const {
    variations,
    currentVariation,
    setCurrentVariation,
    loading,
    createVariation,
    updateVariation,
    deleteVariation
  } = useDeckVariations();

  const [isCreating, setIsCreating] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newVariationName, setNewVariationName] = useState('');
  const [selectedSections, setSelectedSections] = useState<Set<string>>(new Set());
  const [showVariationsList, setShowVariationsList] = useState(() => {
    const saved = localStorage.getItem('showVariationsList');
    return saved !== null ? JSON.parse(saved) : true;
  });

  const handleSelectVariation = (variationId: string) => {
    const variation = variations.find(v => v.id === variationId);
    if (variation) {
      setCurrentVariation(variation);
      onVariationSelect(variation);
      onDeckNameChange(variation.name);
    }
  };

  const handleCreateVariation = async () => {
    if (!newVariationName.trim()) return;

    const sectionsArray = Array.from(selectedSections);
    await createVariation(newVariationName, sectionsArray);
    
    setIsCreating(false);
    setNewVariationName('');
    setSelectedSections(new Set());
  };

  const handleUpdateVariation = async (id: string, name: string) => {
    const variation = variations.find(v => v.id === id);
    if (!variation) return;

    await updateVariation(id, name, variation.sections);
    setEditingId(null);
  };

  const handleDuplicateVariation = async (variation: DeckVariationWithSections) => {
    const newName = `${variation.name} (Copy)`;
    await createVariation(newName, variation.sections);
  };

  const toggleSectionSelection = (sectionId: string) => {
    const newSet = new Set(selectedSections);
    if (newSet.has(sectionId)) {
      newSet.delete(sectionId);
    } else {
      newSet.add(sectionId);
    }
    setSelectedSections(newSet);
  };

  const toggleVariationsList = () => {
    const newState = !showVariationsList;
    setShowVariationsList(newState);
    localStorage.setItem('showVariationsList', JSON.stringify(newState));
  };

  if (loading) {
    return (
      <Card className="mb-6 surface elevation-1">
        <CardContent className="p-6">
          <div className="flex items-center justify-center">
            <div className="text-body-medium text-neutral-500 animate-shimmer">Loading deck variations...</div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="mb-6 surface elevation-1 border-neutral-200">
      <CardContent className="p-6">
        {/* Single row with selector, actions, toggle, and new button */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-3 flex-1">
            <Select
              value={currentVariation?.id || ''}
              onValueChange={handleSelectVariation}
            >
              <SelectTrigger className="flex-1 max-w-xs border-neutral-300 hover-bg transition-standard">
                <SelectValue placeholder="Select deck variation" />
              </SelectTrigger>
              <SelectContent className="elevation-2">
                {variations.map((variation) => (
                  <SelectItem key={variation.id} value={variation.id}>
                    <div className="flex items-center gap-2">
                      <span className="text-body-medium">{variation.name}</span>
                      {variation.is_default && (
                        <Badge variant="secondary" className="text-label-small bg-depoint-orange-light text-depoint-orange border-0">
                          default
                        </Badge>
                      )}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Actions for current variation */}
            {currentVariation && (
              <div className="flex items-center gap-1">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => {
                    const slides = currentVariation.sections.map(sectionId => {
                      const section = sections.find(s => s.id === sectionId);
                      return section?.slides || [];
                    }).flat().sort((a, b) => a - b);
                    if (slides.length > 0) {
                      const slidesParam = slides.join(',');
                      window.open(`/deck/slide/${slides[0]}?deckName=${encodeURIComponent(currentVariation.name)}&slides=${slidesParam}`, '_blank');
                    }
                  }}
                  className="text-neutral-600 hover-bg transition-standard rounded-full"
                  title="Present"
                >
                  <Eye className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => {
                    const slides = currentVariation.sections.map(sectionId => {
                      const section = sections.find(s => s.id === sectionId);
                      return section?.slides || [];
                    }).flat().sort((a, b) => a - b);
                    if (slides.length > 0) {
                      const slideParams = slides.join(',');
                      window.open(`/print-deck?slides=${slideParams}`, '_blank');
                    }
                  }}
                  className="text-neutral-600 hover-bg transition-standard rounded-full"
                  title="Print"
                >
                  <Printer className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => handleDuplicateVariation(currentVariation)}
                  className="text-neutral-600 hover-bg transition-standard rounded-full"
                  title="Duplicate"
                >
                  <Copy className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setEditingId(currentVariation.id)}
                  className="text-neutral-600 hover-bg transition-standard rounded-full"
                  title="Rename"
                >
                  <Edit2 className="h-4 w-4" />
                </Button>
                {!currentVariation.is_default && (
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => deleteVariation(currentVariation.id)}
                    className="text-gray-500 hover:text-red-600"
                    title="Delete variation"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            <Button
              onClick={toggleVariationsList}
              size="sm"
              variant="outline"
              className="border-gray-300"
            >
              {showVariationsList ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </Button>
            <Button
              onClick={() => setIsCreating(true)}
              size="sm"
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Plus className="h-4 w-4 mr-2" />
              New Variation
            </Button>
          </div>
        </div>

        {/* Variations List */}
        {showVariationsList && (
          <div className="space-y-2">
            {variations.map((variation) => (
              <div
                key={variation.id}
                className={`group flex items-center justify-between p-4 rounded-xl border transition-standard cursor-pointer ${
                  currentVariation?.id === variation.id
                    ? 'bg-primary/5 border-primary/20 shadow-elevation-1'
                    : 'bg-surface border-neutral-200 hover:border-neutral-300 hover:shadow-elevation-1'
                }`}
                onClick={() => !editingId && setCurrentVariationId(variation.id)}
              >
                <div className="flex-1 min-w-0">
                  {editingId === variation.id ? (
                    <div className="flex items-center gap-2">
                      <Input
                        defaultValue={variation.name}
                        className="flex-1 h-9 text-body-large border-neutral-300 focus:border-primary focus:ring-primary"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            handleUpdateVariation(variation.id, e.currentTarget.value);
                          }
                          if (e.key === 'Escape') {
                            setEditingId(null);
                          }
                        }}
                        onClick={(e) => e.stopPropagation()}
                        autoFocus
                      />
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={(e) => {
                          e.stopPropagation();
                          const input = document.querySelector(`input[defaultvalue="${variation.name}"]`) as HTMLInputElement;
                          if (input) {
                            handleUpdateVariation(variation.id, input.value);
                          }
                        }}
                        className="h-9 w-9 p-0 hover:bg-primary/10 text-primary"
                      >
                        <Save className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={(e) => {
                          e.stopPropagation();
                          setEditingId(null);
                        }}
                        className="h-9 w-9 p-0 hover:bg-neutral-100 text-neutral-600"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-body-large font-medium text-neutral-900 truncate">
                          {variation.name}
                        </span>
                        {variation.is_default && (
                          <Badge className="bg-depoint-orange text-white text-label-small px-2 py-0.5 rounded-full">
                            Default
                          </Badge>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {variation.sections.filter(sectionId => sectionId !== 'hidden').map(sectionId => {
                          const section = sections.find(s => s.id === sectionId);
                          return section ? (
                            <Badge
                              key={sectionId}
                              variant="outline"
                              className="text-label-small text-neutral-600 border-neutral-300 bg-neutral-50 rounded-full px-2 py-0.5"
                            >
                              {section.name}
                            </Badge>
                          ) : null;
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {/* Action Buttons - Visible on hover */}
                <div className="flex items-center gap-1 ml-4 opacity-0 group-hover:opacity-100 transition-standard">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={(e) => {
                      e.stopPropagation();
                      const slides = variation.sections.map(sectionId => {
                        const section = sections.find(s => s.id === sectionId);
                        return section?.slides || [];
                      }).flat().sort((a, b) => a - b);
                      if (slides.length > 0) {
                        const slidesParam = slides.join(',');
                        window.open(`/deck/slide/${slides[0]}?deckName=${encodeURIComponent(variation.name)}&slides=${slidesParam}`, '_blank');
                      }
                    }}
                    className="h-8 w-8 p-0 rounded-full hover:bg-primary/10 text-neutral-600 hover:text-primary transition-standard"
                    title="Present deck"
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={(e) => {
                      e.stopPropagation();
                      const slides = variation.sections.map(sectionId => {
                        const section = sections.find(s => s.id === sectionId);
                        return section?.slides || [];
                      }).flat().sort((a, b) => a - b);
                      if (slides.length > 0) {
                        const slideParams = slides.join(',');
                        window.open(`/print-deck?slides=${slideParams}`, '_blank');
                      }
                    }}
                    className="h-8 w-8 p-0 rounded-full hover:bg-primary/10 text-neutral-600 hover:text-primary transition-standard"
                    title="Print deck"
                  >
                    <Printer className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDuplicateVariation(variation);
                    }}
                    className="h-8 w-8 p-0 rounded-full hover:bg-primary/10 text-neutral-600 hover:text-primary transition-standard"
                    title="Duplicate deck"
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={(e) => {
                      e.stopPropagation();
                      setEditingId(variation.id);
                    }}
                    className="h-8 w-8 p-0 rounded-full hover:bg-primary/10 text-neutral-600 hover:text-primary transition-standard"
                    title="Rename deck"
                  >
                    <Edit2 className="h-4 w-4" />
                  </Button>
                  {!variation.is_default && (
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (confirm(`Delete "${variation.name}"? This cannot be undone.`)) {
                          deleteVariation(variation.id);
                        }
                      }}
                      className="h-8 w-8 p-0 rounded-full hover:bg-red-50 text-neutral-600 hover:text-red-600 transition-standard"
                      title="Delete deck"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            ))}

            {/* Create New Variation Form */}
            {isCreating && (
              <div className="p-6 border-2 border-dashed border-primary/30 rounded-xl bg-primary/5">
                <div className="space-y-6">
                  <div>
                    <Label className="text-body-medium font-medium text-neutral-900 mb-2 block">
                      Deck Name
                    </Label>
                    <Input
                      value={newVariationName}
                      onChange={(e) => setNewVariationName(e.target.value)}
                      placeholder="Enter deck name..."
                      className="w-full h-10 border-neutral-300 focus:border-primary focus:ring-primary"
                      autoFocus
                    />
                  </div>

                  <div>
                    <Label className="text-body-medium font-medium text-neutral-900 mb-3 block">
                      Include Sections
                    </Label>
                    <div className="grid grid-cols-1 gap-3">
                      {sections.filter(s => s.id !== 'hidden').map((section) => (
                        <div key={section.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-surface transition-standard">
                          <Checkbox
                            id={`section-${section.id}`}
                            checked={selectedSections.has(section.id)}
                            onCheckedChange={() => toggleSectionSelection(section.id)}
                            className="border-neutral-400 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                          />
                          <Label
                            htmlFor={`section-${section.id}`}
                            className="flex-1 cursor-pointer"
                          >
                            <div className="flex flex-col gap-1">
                              <span className="text-body-medium font-medium text-neutral-900">{section.name}</span>
                              <span className="text-body-small text-neutral-600">
                                {section.description}
                              </span>
                            </div>
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button
                      onClick={handleCreateVariation}
                      className="bg-primary hover:bg-primary-dark text-white h-10 px-6 rounded-full transition-standard"
                      disabled={!newVariationName.trim()}
                    >
                      <Save className="h-4 w-4 mr-2" />
                      Create Deck
                    </Button>
                    <Button
                      onClick={() => {
                        setIsCreating(false);
                        setNewVariationName('');
                        setSelectedSections(new Set());
                      }}
                      variant="outline"
                      className="h-10 px-6 rounded-full border-neutral-300 hover:bg-neutral-100 transition-standard"
                    >
                      <X className="h-4 w-4 mr-2" />
                      Cancel
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};