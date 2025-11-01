import { db } from '@/integrations/firebase/client';
import { collection, getDocs, setDoc, doc, getDoc, deleteDoc } from 'firebase/firestore';

/**
 * Migrate hardcoded default sections (main, demo, appendix) to Firebase custom_sections
 * This allows all sections to be treated uniformly as custom sections
 * Uses predictable document IDs so slides can reference them by key
 */
export const migrateDefaultSectionsToFirebase = async () => {
  const sectionsToMigrate = [
    {
      key: 'main',
      name: 'Main Deck',
      description: 'Core presentation',
      color: 'blue',
      icon: 'Layers',
      order_index: 0,
    },
    {
      key: 'demo',
      name: 'Demo',
      description: 'Dashboard demonstrations',
      color: 'green',
      icon: 'Monitor',
      order_index: 1,
    },
    {
      key: 'appendix',
      name: 'Appendices',
      description: 'Supporting documentation',
      color: 'slate',
      icon: 'BookOpen',
      order_index: 2,
    },
  ];

  try {
    console.log('Starting default sections migration...');
    
    // First, clean up any existing sections with these names but wrong IDs
    const allSections = await getDocs(collection(db, 'custom_sections'));
    const sectionNames = ['Main Deck', 'Demo', 'Appendices'];
    
    for (const docSnap of allSections.docs) {
      const data = docSnap.data();
      // If it has one of the default section names but wrong ID, delete it
      if (sectionNames.includes(data.name) && !['main', 'demo', 'appendix'].includes(docSnap.id)) {
        console.log(`🗑️ Removing duplicate section: ${data.name} (ID: ${docSnap.id})`);
        await deleteDoc(docSnap.ref);
      }
    }
    
    // Now create the sections with correct IDs
    for (const section of sectionsToMigrate) {
      // Use the key as the document ID for predictable references
      const docRef = doc(db, 'custom_sections', section.key);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        // Create the section with the key as document ID
        const now = new Date().toISOString();
        await setDoc(docRef, {
          name: section.name,
          description: section.description,
          color: section.color,
          icon: section.icon,
          order_index: section.order_index,
          is_default: false, // All sections are now treated as custom
          created_at: now,
          updated_at: now,
        });
        console.log(`✓ Created section: ${section.name} (ID: ${section.key})`);
      } else {
        console.log(`✓ Section already exists: ${section.name} (ID: ${section.key})`);
      }
    }

    console.log('Default sections migration completed successfully');
    return true;
  } catch (error) {
    console.error('Error migrating default sections:', error);
    return false;
  }
};

export const checkDefaultSectionsMigrationNeeded = async (): Promise<boolean> => {
  try {
    // Check if the specific document IDs exist
    const mainDoc = await getDoc(doc(db, 'custom_sections', 'main'));
    const demoDoc = await getDoc(doc(db, 'custom_sections', 'demo'));
    const appendixDoc = await getDoc(doc(db, 'custom_sections', 'appendix'));
    
    // Migration needed if any of the documents don't exist
    return !mainDoc.exists() || !demoDoc.exists() || !appendixDoc.exists();
  } catch (error) {
    console.error('Error checking migration status:', error);
    return true; // If error, assume migration needed
  }
};

