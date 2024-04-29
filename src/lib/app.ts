// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyALC7_uNBF4IFQmr-CXOYa6s3slDka1KYc',
  authDomain: 'dillo-day.firebaseapp.com',
  projectId: 'dillo-day',
  storageBucket: 'dillo-day.appspot.com',
  messagingSenderId: '1025535388888',
  appId: '1:1025535388888:web:99fd022580035bc92cfbad',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
