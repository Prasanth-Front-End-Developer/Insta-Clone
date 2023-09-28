import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCZWYpXHxw_Qt_T6_09J1tyR0WWXnAri9k",
    authDomain: "inta-f0adb.firebaseapp.com",
    projectId: "inta-f0adb",
    storageBucket: "inta-f0adb.appspot.com",
    messagingSenderId: "919922066060",
    appId: "1:919922066060:web:d4bde3b3c4333dfd5131a9",
    measurementId: "G-05C3EDNJCX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();

const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };