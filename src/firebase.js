import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA4YHApJExe9AiWLCrtJ1e56zuKxtmnZgY",
    authDomain: "edtech-faf14.firebaseapp.com",
    projectId: "edtech-faf14",
    storageBucket: "edtech-faf14.appspot.com",
    messagingSenderId: "263778515423",
    appId: "1:263778515423:web:abf4f634bd711b457f6c6a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
// const db = {
    // folders: firebase.collection("textbook")
// }
// db.settings({timestampsInSnapshots: true});
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, firebaseApp };