-- Create deck variations table
CREATE TABLE public.deck_variations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  is_default BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create deck variation sections junction table
CREATE TABLE public.deck_variation_sections (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  deck_variation_id UUID NOT NULL REFERENCES public.deck_variations(id) ON DELETE CASCADE,
  section_id TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.deck_variations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.deck_variation_sections ENABLE ROW LEVEL SECURITY;

-- Create policies for deck_variations
CREATE POLICY "Users can view their own deck variations" 
ON public.deck_variations 
FOR SELECT 
USING (user_id IS NULL OR auth.uid() = user_id);

CREATE POLICY "Users can create deck variations" 
ON public.deck_variations 
FOR INSERT 
WITH CHECK (user_id IS NULL OR auth.uid() = user_id);

CREATE POLICY "Users can update their own deck variations" 
ON public.deck_variations 
FOR UPDATE 
USING (user_id IS NULL OR auth.uid() = user_id);

CREATE POLICY "Users can delete their own deck variations" 
ON public.deck_variations 
FOR DELETE 
USING (user_id IS NULL OR auth.uid() = user_id);

-- Create policies for deck_variation_sections
CREATE POLICY "Users can view deck variation sections they own" 
ON public.deck_variation_sections 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM public.deck_variations dv 
    WHERE dv.id = deck_variation_id 
    AND (dv.user_id IS NULL OR dv.user_id = auth.uid())
  )
);

CREATE POLICY "Users can create deck variation sections they own" 
ON public.deck_variation_sections 
FOR INSERT 
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.deck_variations dv 
    WHERE dv.id = deck_variation_id 
    AND (dv.user_id IS NULL OR dv.user_id = auth.uid())
  )
);

CREATE POLICY "Users can update deck variation sections they own" 
ON public.deck_variation_sections 
FOR UPDATE 
USING (
  EXISTS (
    SELECT 1 FROM public.deck_variations dv 
    WHERE dv.id = deck_variation_id 
    AND (dv.user_id IS NULL OR dv.user_id = auth.uid())
  )
);

CREATE POLICY "Users can delete deck variation sections they own" 
ON public.deck_variation_sections 
FOR DELETE 
USING (
  EXISTS (
    SELECT 1 FROM public.deck_variations dv 
    WHERE dv.id = deck_variation_id 
    AND (dv.user_id IS NULL OR dv.user_id = auth.uid())
  )
);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_deck_variations_updated_at
  BEFORE UPDATE ON public.deck_variations
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert default deck variation
INSERT INTO public.deck_variations (name, is_default) 
VALUES ('Default Deck', true);