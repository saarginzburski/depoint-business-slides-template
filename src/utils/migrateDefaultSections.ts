import { db } from '@/integrations/firebase/client';
import { collection, getDocs, addDoc, query, where } from 'firebase/firestore';

/**
 * Migrate hardcoded default sections (main, demo, appendix) to Firebase custom_sections
 * This allows all sections to be treated uniformly as custom sections
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
    
    for (const section of sectionsToMigrate) {
      // Check if section already exists by name
      const existingQuery = query(
        collection(db, 'custom_sections'),
        where('name', '==', section.name)
      );
      const existingSnapshot = await getDocs(existingQuery);

      if (existingSnapshot.empty) {
        // Create the section
        const now = new Date().toISOString();
        await addDoc(collection(db, 'custom_sections'), {
          name: section.name,
          description: section.description,
          color: section.color,
          icon: section.icon,
          order_index: section.order_index,
          is_default: false, // All sections are now treated as custom
          created_at: now,
          updated_at: now,
        });
        console.log(`✓ Created section: ${section.name}`);
      } else {
        console.log(`✓ Section already exists: ${section.name}`);
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
    const sectionsSnapshot = await getDocs(collection(db, 'custom_sections'));
    const sectionNames = sectionsSnapshot.docs.map(doc => doc.data().name);
    
    // Check if we have Main Deck, Demo, and Appendices
    const hasMain = sectionNames.includes('Main Deck');
    const hasDemo = sectionNames.includes('Demo');
    const hasAppendix = sectionNames.includes('Appendices');
    
    return !hasMain || !hasDemo || !hasAppendix;
  } catch (error) {
    console.error('Error checking migration status:', error);
    return true; // If error, assume migration needed
  }
};

