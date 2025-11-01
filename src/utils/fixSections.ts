import { db } from '@/integrations/firebase/client';
import { collection, getDocs, setDoc, doc, deleteDoc } from 'firebase/firestore';

/**
 * Manual fix to recreate sections with correct IDs
 * Run this once to fix the section ID issue
 */
export const fixSectionsManually = async () => {
  try {
    console.log('🔧 Starting manual section fix...');
    
    // Step 1: Delete ALL existing sections (except status sections)
    const allSections = await getDocs(collection(db, 'custom_sections'));
    console.log(`Found ${allSections.docs.length} existing sections`);
    
    for (const docSnap of allSections.docs) {
      console.log(`Deleting section: ${docSnap.id} (${docSnap.data().name})`);
      await deleteDoc(docSnap.ref);
    }
    
    // Step 2: Create sections with correct IDs
    const sectionsToCreate = [
      {
        id: 'main',
        name: 'Main Deck',
        description: 'Core presentation',
        color: 'blue',
        icon: 'Layers',
        order_index: 0,
      },
      {
        id: 'demo',
        name: 'Demo',
        description: 'Dashboard demonstrations',
        color: 'green',
        icon: 'Monitor',
        order_index: 1,
      },
      {
        id: 'appendix',
        name: 'Appendices',
        description: 'Supporting documentation',
        color: 'slate',
        icon: 'BookOpen',
        order_index: 2,
      },
    ];
    
    for (const section of sectionsToCreate) {
      const docRef = doc(db, 'custom_sections', section.id);
      const now = new Date().toISOString();
      
      await setDoc(docRef, {
        name: section.name,
        description: section.description,
        color: section.color,
        icon: section.icon,
        order_index: section.order_index,
        is_default: false,
        created_at: now,
        updated_at: now,
      });
      
      console.log(`✅ Created section: ${section.name} with ID: ${section.id}`);
    }
    
    console.log('✅ Manual section fix completed!');
    console.log('Please reload the page to see your slides.');
    
    return { success: true, message: 'Sections fixed successfully!' };
  } catch (error) {
    console.error('❌ Error fixing sections:', error);
    return { success: false, error };
  }
};

