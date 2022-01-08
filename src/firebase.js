// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// import firebase from "firebase"
// import { initializeApp } from "firebase/app";
// import * as firebase from "firebase/app";
// var firebase = require("firebase/app");
// import firebase from "firebase/app"
// import "firebase/firestore"

import { initializeApp } from 'firebase/app'
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC_E2NSQnPENQoyNXlmNUlaluJl9MZ2X8M",
    authDomain: "instagram-clone-91f1e.firebaseapp.com",
    databaseURL: "https://instagram-clone-91f1e-default-rtdb.firebaseio.com",
    projectId: "instagram-clone-91f1e",
    storageBucket: "instagram-clone-91f1e.appspot.com",
    messagingSenderId: "265990314654",
    appId: "1:265990314654:web:c65d077775e46f7ec1398f",
    measurementId: "G-342RPHMVEX"
};

// firebase.initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);

const firestore=getFirestore();
console.log(firestore);
// const db = 


// const db = firebase.firestore();
// const auth = firebase.auth();
// const storage = firebase.storage();

// export { db, auth, storage };
// export default firebase
