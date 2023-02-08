import { firestoreApp } from './firebaseconfig';
import { collection, addDoc } from "firebase/firestore"; 

const addDocument = (collectionId: string, data: {}) => { 
  addDoc(collection(firestoreApp, collectionId), data); 
}

export { addDocument }