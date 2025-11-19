import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// Firebase configuration from environment variables
const firebaseConfig = {
  apiKey: (import.meta as any).env?.VITE_FIREBASE_API_KEY || '',
  authDomain: (import.meta as any).env?.VITE_FIREBASE_AUTH_DOMAIN || '',
  projectId: (import.meta as any).env?.VITE_FIREBASE_PROJECT_ID || '',
  storageBucket: (import.meta as any).env?.VITE_FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: (import.meta as any).env?.VITE_FIREBASE_MESSAGING_SENDER_ID || '',
  appId: (import.meta as any).env?.VITE_FIREBASE_APP_ID || '',
};

// Validate Firebase configuration
if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
  console.warn('⚠️ Firebase configuration incomplete. PDF upload/download features will be disabled.');
  console.warn('Configure Firebase environment variables in .env.local');
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage
export const storage = getStorage(app);

export default app;
