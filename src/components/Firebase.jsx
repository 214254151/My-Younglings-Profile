import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCdRneZZXc6arcjZlf8CRs62lumIr2XvYs",
  authDomain: "react-contact-form-younglings.firebaseapp.com",
  projectId: "react-contact-form-younglings",
  storageBucket: "react-contact-form-younglings.appspot.com",
  messagingSenderId: "723765062720",
  appId: "1:723765062720:web:d39c63deffbe9e2f4283a5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };

