import { db } from '@/integrations/firebase/client';
import { 
  collection, 
  getDocs, 
  addDoc
} from 'firebase/firestore';
import { toast } from '@/hooks/use-toast';

/**
 * Migrates custom sections from the old variant-specific collection
 * to the new global collection.
 * 
 * This should be run once to migrate existing data.
 */
export async function migrateCustomSections() {
  console.log('Starting migration of custom sections...');
  
  try {
    // Get all custom sections from old collection
    const oldSectionsSnapshot = await getDocs(
      collection(db, 'deck_variation_custom_sections')
    );
    
    if (oldSectionsSnapshot.empty) {
      console.log('No custom sections found in old collection.');
      toast({
        title: 'No sections to migrate',
        description: 'The old collection is empty.',
      });
      return { migrated: 0, skipped: 0 };
    }
    
    // Check what's already in the new collection
    const newSectionsSnapshot = await getDocs(
      collection(db, 'custom_sections')
    );
    const existingSectionNames = new Set(
      newSectionsSnapshot.docs.map(doc => doc.data().name.toLowerCase())
    );
    
    console.log(`Found ${oldSectionsSnapshot.docs.length} sections in old collection`);
    console.log(`Found ${existingSectionNames.size} sections already in new collection`);
    
    // Group sections by name to deduplicate
    const sectionsByName = new Map();
    
    oldSectionsSnapshot.docs.forEach(doc => {
      const data = doc.data();
      const name = data.name;
      
      if (!sectionsByName.has(name)) {
        sectionsByName.set(name, {
          ...data,
          oldId: doc.id
        });
      }
    });
    
    console.log(`Unique sections to migrate: ${sectionsByName.size}`);
    
    // Migrate each unique section
    let migratedCount = 0;
    let skippedCount = 0;
    const migratedSections: string[] = [];
    
    for (const [name, sectionData] of sectionsByName) {
      if (existingSectionNames.has(name.toLowerCase())) {
        console.log(`⏭️  Skipping "${name}" - already exists in new collection`);
        skippedCount++;
        continue;
      }
      
      // Create in new global collection (remove deck_variation_id)
      const newSection = {
        name: sectionData.name,
        description: sectionData.description || '',
        color: sectionData.color || 'blue',
        icon: sectionData.icon || 'Layers',
        order_index: sectionData.order_index || 0,
        is_default: false,
        created_at: sectionData.created_at || new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };
      
      await addDoc(collection(db, 'custom_sections'), newSection);
      console.log(`✅ Migrated: "${name}"`);
      migratedSections.push(name);
      migratedCount++;
    }
    
    console.log('=== Migration Complete ===');
    console.log(`✅ Migrated: ${migratedCount} sections`);
    console.log(`⏭️  Skipped: ${skippedCount} sections (already existed)`);
    
    if (migratedCount > 0) {
      toast({
        title: 'Migration successful!',
        description: `Migrated ${migratedCount} custom section(s): ${migratedSections.join(', ')}`,
      });
    } else if (skippedCount > 0) {
      toast({
        title: 'All sections already migrated',
        description: `${skippedCount} section(s) already exist in the new collection.`,
      });
    }
    
    return { 
      migrated: migratedCount, 
      skipped: skippedCount,
      sections: migratedSections 
    };
    
  } catch (error) {
    console.error('Migration failed:', error);
    toast({
      title: 'Migration failed',
      description: error instanceof Error ? error.message : 'Unknown error',
      variant: 'destructive',
    });
    throw error;
  }
}

