import { db } from './client';
import { collection, getDocs, addDoc, query, where, limit } from 'firebase/firestore';

/**
 * Initialize Firestore database with default data if needed
 * This runs automatically when the app starts
 */
export const initializeFirestore = async (): Promise<void> => {
  try {
    console.log('🔍 Checking Firestore connection...');
    
    // Just verify connection - no default data creation
    const variationsQuery = query(
      collection(db, 'deck_variations'),
      limit(1)
    );
    await getDocs(variationsQuery);
    
    console.log('✅ Firestore connection verified');
  } catch (error) {
    console.error('❌ Error connecting to Firestore:', error);
    // Don't throw - let the app continue even if initialization fails
  }
};

/**
 * Check if Firestore is accessible and properly configured
 */
export const checkFirestoreConnection = async (): Promise<boolean> => {
  try {
    // Try to read from a collection (will create it if it doesn't exist on first write)
    const testQuery = query(collection(db, 'deck_variations'), limit(1));
    await getDocs(testQuery);
    return true;
  } catch (error) {
    console.error('❌ Firestore connection failed:', error);
    return false;
  }
};

