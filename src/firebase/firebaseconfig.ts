import { getApps, getApp, initializeApp } from 'firebase/app'; 
import { getFirestore } from "firebase/firestore"; 
import { API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID, MEASUREMENT_ID } from "@env" 

const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID,
    measurementId: MEASUREMENT_ID
};

const app = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApp();

const firestoreApp = getFirestore(app);
  
export { firestoreApp };
