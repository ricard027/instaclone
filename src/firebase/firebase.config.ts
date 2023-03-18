import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAJW8dYtE8UAT1OPErfCNJB7oFfDoRMDAY',
  authDomain: 'instaclone-445b3.firebaseapp.com',
  projectId: 'instaclone-445b3',
  storageBucket: 'instaclone-445b3.appspot.com',
  messagingSenderId: '471412305614',
  appId: '1:471412305614:web:75edbd19a717292e40ea9f',
  measurementId: 'G-7TFP5SMJEV'
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
