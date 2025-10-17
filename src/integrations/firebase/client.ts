import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// TODO: Replace with your Firebase project configuration
// Get these values from Firebase Console > Project Settings > General
const firebaseConfig = {
    apiKey: "AIzaSyCyYu2mxwDAblgXbrUuOA7HVXKIf5vDDbM",
    authDomain: "depoint-project-2024.firebaseapp.com",
    projectId: "depoint-project-2024",
    storageBucket: "depoint-project-2024.firebasestorage.app",
    messagingSenderId: "348107187678",
    appId: "1:348107187678:web:b50689616db192f15d294f"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore with specific database name
// Database: depoint-deck-editor
const DATABASE_NAME = 'depoint-deck-editor';

export const db = getFirestore(app, DATABASE_NAME);

// Initialize Firebase Authentication
export const auth = getAuth(app);

// Configure Google Auth Provider with domain restriction
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  hd: 'depoint.ai', // Restrict to depoint.ai domain during sign-in
  prompt: 'select_account' // Always show account selection
});

// Import the Firestore database like this:
// import { db } from "@/integrations/firebase/client";
// Import auth like this:
// import { auth, googleProvider } from "@/integrations/firebase/client";


