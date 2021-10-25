import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBtgy7M7h2TIwhwhmfSL-G8s8sR1Ylx_IQ",
  authDomain: "jiitmate.firebaseapp.com",
  projectId: "jiitmate",
  storageBucket: "jiitmate.appspot.com",
  messagingSenderId: "896925024445",
  appId: "1:896925024445:web:d220bea6f8648b9705f7d4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
