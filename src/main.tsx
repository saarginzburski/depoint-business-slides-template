import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initializeFirestore } from './integrations/firebase/init'

// Initialize Firestore with default data if needed
initializeFirestore().catch(console.error);

createRoot(document.getElementById("root")!).render(<App />);
