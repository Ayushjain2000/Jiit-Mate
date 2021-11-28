import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBoe7W-RoYOZKEj-0IJ1C7QFN7-9bCA8fY",
  authDomain: "jiit-mate-c9998.firebaseapp.com",
  databaseURL: "https://jiit-mate-c9998-default-rtdb.firebaseio.com",
  projectId: "jiit-mate-c9998",
  storageBucket: "jiit-mate-c9998.appspot.com",
  messagingSenderId: "1044532676171",
  appId: "1:1044532676171:web:7c816074905f789f6c2fce",
  measurementId: "G-5QDKMJP87K"

  
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
