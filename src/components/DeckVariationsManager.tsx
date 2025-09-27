import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Save, X, Copy, Eye, Printer } from 'lucide-react';
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

  if (loading) {
    return (
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex items-center justify-center">
            <div className="text-gray-500">Loading deck variations...</div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="mb-6 border-blue-200 bg-blue-50/30">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <Copy className="h-5 w-5 text-blue-600" />
            Deck Variations
          </h3>
          <Button
            onClick={() => setIsCreating(true)}
            size="sm"
            className="bg-blue-600 hover:bg-blue-700"
          >
            <Plus className="h-4 w-4 mr-2" />
            New Variation
          </Button>
        </div>

        {/* Current Variation Selector */}
        <div className="mb-4">
          <Label className="text-sm font-medium text-gray-700 mb-2 block">
            Current Variation
          </Label>
          <Select
            value={currentVariation?.id || ''}
            onValueChange={handleSelectVariation}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a deck variation" />
            </SelectTrigger>
            <SelectContent>
              {variations.map((variation) => (
                <SelectItem key={variation.id} value={variation.id}>
                  <div className="flex items-center gap-2">
                    <span>{variation.name}</span>
                    {variation.is_default && (
                      <Badge variant="secondary" className="text-xs">Default</Badge>
                    )}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Variations List */}
        <div className="space-y-2">
          {variations.map((variation) => (
            <div
              key={variation.id}
              className={`flex items-center justify-between p-3 rounded-lg border transition-all ${
                currentVariation?.id === variation.id
                  ? 'bg-blue-100 border-blue-300'
                  : 'bg-white border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex-1">
                {editingId === variation.id ? (
                  <div className="flex items-center gap-2">
                    <Input
                      defaultValue={variation.name}
                      className="flex-1"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          handleUpdateVariation(variation.id, e.currentTarget.value);
                        }
                        if (e.key === 'Escape') {
                          setEditingId(null);
                        }
                      }}
                      autoFocus
                    />
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        const input = document.querySelector(`input[defaultvalue="${variation.name}"]`) as HTMLInputElement;
                        if (input) {
                          handleUpdateVariation(variation.id, input.value);
                        }
                      }}
                    >
                      <Save className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setEditingId(null)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <span className="font-medium">{variation.name}</span>
                    {variation.is_default && (
                      <Badge variant="secondary" className="text-xs">Default</Badge>
                    )}
                    <div className="flex gap-1">
                      {variation.sections.map(sectionId => {
                        const section = sections.find(s => s.id === sectionId);
                        return section ? (
                          <Badge
                            key={sectionId}
                            variant="outline"
                            className={`text-xs text-${section.color}-600 border-${section.color}-300`}
                          >
                            {section.name}
                          </Badge>
                        ) : null;
                      })}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => {
                    const slides = variation.sections.map(sectionId => {
                      const section = sections.find(s => s.id === sectionId);
                      return section?.slides || [];
                    }).flat().sort((a, b) => a - b);
                    if (slides.length > 0) {
                      window.open(`/deck/slide/${slides[0]}?deckName=${encodeURIComponent(variation.name)}`, '_blank');
                    }
                  }}
                  className="text-gray-500 hover:text-green-600"
                  title="View variation"
                >
                  <Eye className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => {
                    const slides = variation.sections.map(sectionId => {
                      const section = sections.find(s => s.id === sectionId);
                      return section?.slides || [];
                    }).flat().sort((a, b) => a - b);
                    if (slides.length > 0) {
                      const slideParams = slides.join(',');
                      window.open(`/print-deck?slides=${slideParams}`, '_blank');
                    }
                  }}
                  className="text-gray-500 hover:text-purple-600"
                  title="Print variation"
                >
                  <Printer className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => handleDuplicateVariation(variation)}
                  className="text-gray-500 hover:text-blue-600"
                  title="Duplicate variation"
                >
                  <Copy className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setEditingId(variation.id)}
                  className="text-gray-500 hover:text-blue-600"
                  title="Edit variation name"
                >
                  <Edit2 className="h-4 w-4" />
                </Button>
                {!variation.is_default && (
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => deleteVariation(variation.id)}
                    className="text-gray-500 hover:text-red-600"
                    title="Delete variation"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          ))}

          {/* Create New Variation Form */}
          {isCreating && (
            <div className="p-4 border-2 border-dashed border-blue-300 rounded-lg bg-blue-50/50">
              <div className="space-y-4">
                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-2 block">
                    Variation Name
                  </Label>
                  <Input
                    value={newVariationName}
                    onChange={(e) => setNewVariationName(e.target.value)}
                    placeholder="Enter variation name..."
                    className="w-full"
                    autoFocus
                  />
                </div>

                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-3 block">
                    Select Sections
                  </Label>
                  <div className="grid grid-cols-1 gap-2">
                    {sections.map((section) => (
                      <div key={section.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={`section-${section.id}`}
                          checked={selectedSections.has(section.id)}
                          onCheckedChange={() => toggleSectionSelection(section.id)}
                        />
                        <Label
                          htmlFor={`section-${section.id}`}
                          className="flex-1 cursor-pointer"
                        >
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{section.name}</span>
                            <span className="text-sm text-gray-500">
                              {section.description}
                            </span>
                          </div>
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button
                    onClick={handleCreateVariation}
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700"
                    disabled={!newVariationName.trim()}
                  >
                    <Save className="h-4 w-4 mr-2" />
                    Create Variation
                  </Button>
                  <Button
                    onClick={() => {
                      setIsCreating(false);
                      setNewVariationName('');
                      setSelectedSections(new Set());
                    }}
                    size="sm"
                    variant="outline"
                  >
                    <X className="h-4 w-4 mr-2" />
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};