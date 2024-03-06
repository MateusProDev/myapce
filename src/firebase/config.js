import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0OVwSSNerAzjm-yv0dUUKUktFZZ8QIHQ",
  authDomain: "blog-apce-42b51.firebaseapp.com",
  projectId: "blog-apce-42b51",
  storageBucket: "blog-apce-42b51.appspot.com",
  messagingSenderId: "1058243122672",
  appId: "1:1058243122672:web:262c5da2a8c781e83eb935"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };

