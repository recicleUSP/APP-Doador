import { firestoreApp } from './firebaseconfig';
import { collection, doc, addDoc, setDoc, getDoc, DocumentSnapshot, DocumentData } from "firebase/firestore"; 

const addDocument = (collectionId: string, data: {}) => { 
  addDoc(collection(firestoreApp, collectionId), data); 
}

const setDocument = (collectionId: string, docId: string, data: {}) => { 
  setDoc(doc(firestoreApp, collectionId, docId), data); 
}

const getDocument = (collectionId: string, docId: string): Promise<DocumentSnapshot<DocumentData>> => { 
  return getDoc(doc(firestoreApp, collectionId, docId)); 
}

export { addDocument, setDocument, getDocument }