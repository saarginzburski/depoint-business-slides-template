import { db } from '@/integrations/firebase/client';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import { slideConfig } from '@/pages/slides/slideConfig';
import { toast } from '@/hooks/use-toast';

/**
 * Migration script to convert numeric slide_ids to component name string IDs
 * This ensures slide relationships remain stable when slides are reordered
 */
export const migrateSlideIdsToComponentNames = async () => {
  try {
    console.log('🚀 Starting slide ID migration...');
    
    // Create mapping from old numeric IDs to new component name IDs
    const idMapping: Record<number, string> = {};
    slideConfig.forEach(slide => {
      idMapping[slide.displayOrder] = slide.id; // displayOrder is the old numeric position
    });
    
    console.log('📋 ID Mapping created:', idMapping);
    
    // Get all deck_variation_slide_orders documents
    const ordersRef = collection(db, 'deck_variation_slide_orders');
    const ordersSnapshot = await getDocs(ordersRef);
    
    let migrated = 0;
    let skipped = 0;
    let errors = 0;
    
    const updatePromises: Promise<void>[] = [];
    
    ordersSnapshot.docs.forEach(docSnapshot => {
      const data = docSnapshot.data();
      const oldSlideId = data.slide_id;
      
      // Check if already migrated (slide_id is already a string component name)
      if (typeof oldSlideId === 'string' && oldSlideId.startsWith('Slide')) {
        console.log(`⏭️  Skipping already migrated document: ${docSnapshot.id}`);
        skipped++;
        return;
      }
      
      // If it's a number, migrate it
      if (typeof oldSlideId === 'number') {
        const newSlideId = idMapping[oldSlideId];
        
        if (!newSlideId) {
          console.error(`❌ No mapping found for slide_id ${oldSlideId} in document ${docSnapshot.id}`);
          errors++;
          return;
        }
        
        console.log(`✅ Migrating slide_id: ${oldSlideId} → ${newSlideId}`);
        
        const updatePromise = updateDoc(doc(db, 'deck_variation_slide_orders', docSnapshot.id), {
          slide_id: newSlideId,
          updated_at: new Date().toISOString()
        }).then(() => {
          migrated++;
        }).catch((error) => {
          console.error(`❌ Error updating document ${docSnapshot.id}:`, error);
          errors++;
        });
        
        updatePromises.push(updatePromise);
      }
    });
    
    // Wait for all updates to complete
    await Promise.all(updatePromises);
    
    const result = {
      total: ordersSnapshot.docs.length,
      migrated,
      skipped,
      errors
    };
    
    console.log('✨ Migration complete:', result);
    
    if (errors > 0) {
      toast({
        title: "Migration completed with errors",
        description: `Migrated: ${migrated}, Skipped: ${skipped}, Errors: ${errors}`,
        variant: "destructive"
      });
    } else if (migrated > 0) {
      toast({
        title: "Migration successful",
        description: `Successfully migrated ${migrated} slide IDs to component names`
      });
    } else if (skipped > 0) {
      toast({
        title: "Already migrated",
        description: "All slide IDs are already using component names"
      });
    }
    
    return result;
  } catch (error) {
    console.error('💥 Migration failed:', error);
    toast({
      title: "Migration failed",
      description: error instanceof Error ? error.message : "Unknown error occurred",
      variant: "destructive"
    });
    throw error;
  }
};

/**
 * Check if migration is needed
 */
export const checkMigrationNeeded = async (): Promise<boolean> => {
  try {
    const ordersRef = collection(db, 'deck_variation_slide_orders');
    const ordersSnapshot = await getDocs(ordersRef);
    
    // Check if any documents have numeric slide_ids
    for (const docSnapshot of ordersSnapshot.docs) {
      const data = docSnapshot.data();
      if (typeof data.slide_id === 'number') {
        return true; // Migration needed
      }
    }
    
    return false; // Already migrated
  } catch (error) {
    console.error('Error checking migration status:', error);
    return false;
  }
};

