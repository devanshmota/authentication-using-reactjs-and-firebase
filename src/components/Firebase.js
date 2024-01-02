import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC-U4Gn8VBQR7gKUMXS-HecxkGpLfFsJ7U",
  authDomain: "authentication-2ba9e.firebaseapp.com",
  projectId: "authentication-2ba9e",
  storageBucket: "authentication-2ba9e.appspot.com",
  messagingSenderId: "328740952658",
  appId: "1:328740952658:web:5df540823cf99fabb1dd8b",
  measurementId: "G-ML9G7G06Y7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };