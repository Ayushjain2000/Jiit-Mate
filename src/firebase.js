import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDKaSVngDaeF7kXikW9iGbpTqTVM8Gv1YE",
  authDomain: "mate-e8825.firebaseapp.com",
  projectId: "mate-e8825",
  storageBucket: "mate-e8825.appspot.com",
  messagingSenderId: "473261662992",
  appId: "1:473261662992:web:c0ef280b24a4bda207bb95",
  measurementId: "G-1P7S395KNW"

  
};

// const firebaseConfig = {
//   apiKey: "AIzaSyBL3XWCUixWk8f_vUqA-knGwjJOTH8PrBg",
//   authDomain: "jiit-mate-288ea.firebaseapp.com",
//   databaseURL: "https://jiit-mate-288ea-default-rtdb.firebaseio.com",
//   projectId: "jiit-mate-288ea",
//   storageBucket: "jiit-mate-288ea.appspot.com",
//   messagingSenderId: "137058529611",
//   appId: "1:137058529611:web:ef99fc9b19467fb98578ce"
// };
// const firebaseConfig = {
//   apiKey: "AIzaSyBL3XWCUixWk8f_vUqA-knGwjJOTH8PrBg",
//   authDomain: "jiit-mate-288ea.firebaseapp.com",
//   databaseURL: "https://jiit-mate-288ea-default-rtdb.firebaseio.com",
//   projectId: "jiit-mate-288ea",
//   storageBucket: "jiit-mate-288ea.appspot.com",
//   messagingSenderId: "137058529611",
//   appId: "1:137058529611:web:ef99fc9b19467fb98578ce"
// };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
