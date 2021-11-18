import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyDpmVZf8iLw_HROmxUqTS93klFpHd7ldA8",
    authDomain: "edumart-dc190.firebaseapp.com",
    projectId: "edumart-dc190",
    storageBucket: "edumart-dc190.appspot.com",
    messagingSenderId: "311077760285",
    appId: "1:311077760285:web:7182d2b2805ec2bc9545f4",
    measurementId: "G-7DJ8YB9HQ7"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage()

export { db, auth, storage };
