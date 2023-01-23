import firebase from 'firebase/compat/app';
import 'firebase/compat/database'; 
import 'firebase/compat/firestore'; 
import { firestoreApp } from './firebaseconfig'
import { Request, Donor } from './types'

import CollectionReference = firebase.firestore.CollectionReference

const dataPoint = <T>(collectionPath: string) => firestoreApp().collection(collectionPath) as CollectionReference<T>

const db = {
  request: dataPoint<Request>('request'),
  donor: dataPoint<Donor>('donor'),
}

export { db }