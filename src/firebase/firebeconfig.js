/** @format */
/** @format */

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDCv4QIIeN1ZvgkvmU2MWjwWs3141Iwrf0',
  authDomain: 'newproject-bf24f.firebaseapp.com',
  databaseURL: 'https://newproject-bf24f.firebaseio.com',
  projectId: 'newproject-bf24f',
  storageBucket: 'newproject-bf24f.firebasestorage.app',
  messagingSenderId: '696891533672',
  appId: '1:696891533672:web:bff0655c316dfd5206cedd',
  measurementId: 'G-1RSD34B7YW',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
