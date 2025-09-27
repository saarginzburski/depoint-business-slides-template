-- Add slide ordering table for deck variations
CREATE TABLE public.deck_variation_slide_orders (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  deck_variation_id UUID NOT NULL REFERENCES public.deck_variations(id) ON DELETE CASCADE,
  slide_id INTEGER NOT NULL,
  section_id TEXT NOT NULL,
  order_index INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(deck_variation_id, slide_id)
);

-- Enable Row Level Security
ALTER TABLE public.deck_variation_slide_orders ENABLE ROW LEVEL SECURITY;

-- Create policies for deck_variation_slide_orders
CREATE POLICY "Users can view slide orders for their variations" 
ON public.deck_variation_slide_orders 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM public.deck_variations dv 
    WHERE dv.id = deck_variation_id 
    AND (dv.user_id IS NULL OR dv.user_id = auth.uid())
  )
);

CREATE POLICY "Users can create slide orders for their variations" 
ON public.deck_variation_slide_orders 
FOR INSERT 
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.deck_variations dv 
    WHERE dv.id = deck_variation_id 
    AND (dv.user_id IS NULL OR dv.user_id = auth.uid())
  )
);

CREATE POLICY "Users can update slide orders for their variations" 
ON public.deck_variation_slide_orders 
FOR UPDATE 
USING (
  EXISTS (
    SELECT 1 FROM public.deck_variations dv 
    WHERE dv.id = deck_variation_id 
    AND (dv.user_id IS NULL OR dv.user_id = auth.uid())
  )
);

CREATE POLICY "Users can delete slide orders for their variations" 
ON public.deck_variation_slide_orders 
FOR DELETE 
USING (
  EXISTS (
    SELECT 1 FROM public.deck_variations dv 
    WHERE dv.id = deck_variation_id 
    AND (dv.user_id IS NULL OR dv.user_id = auth.uid())
  )
);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_deck_variation_slide_orders_updated_at
  BEFORE UPDATE ON public.deck_variation_slide_orders
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();