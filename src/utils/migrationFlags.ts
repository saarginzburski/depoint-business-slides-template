import { db } from '@/integrations/firebase/client';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const SYSTEM_DOC_ID = 'system_settings';

export async function getMigrationFlag(flagName: string): Promise<boolean> {
  try {
    const docRef = doc(db, 'system', SYSTEM_DOC_ID);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return docSnap.data()[flagName] === true;
    }
    return false;
  } catch (error) {
    console.error(`Error reading migration flag ${flagName}:`, error);
    return false;
  }
}

export async function setMigrationFlag(flagName: string, value: boolean = true): Promise<void> {
  try {
    const docRef = doc(db, 'system', SYSTEM_DOC_ID);
    const docSnap = await getDoc(docRef);
    
    const currentData = docSnap.exists() ? docSnap.data() : {};
    
    await setDoc(docRef, {
      ...currentData,
      [flagName]: value,
      updated_at: new Date().toISOString()
    });
  } catch (error) {
    console.error(`Error setting migration flag ${flagName}:`, error);
    throw error;
  }
}

