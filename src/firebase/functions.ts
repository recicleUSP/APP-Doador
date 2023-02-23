import { firestoreApp } from './firebaseconfig';
import { collection, doc, addDoc, setDoc } from "firebase/firestore"; 

const addDocument = (collectionId: string, data: {}) => { 
  addDoc(collection(firestoreApp, collectionId), data); 
}

const setDocument = (collectionId: string, docId: string, data: {}) => { 
  setDoc(doc(firestoreApp, collectionId, docId), data); 
}

export { addDocument, setDocument }