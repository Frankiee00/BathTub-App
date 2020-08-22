import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAcD_UPU97AfjsRpzPmh_g4yjSg2ysfjak",
    authDomain: "mind-app-f153d.firebaseapp.com",
    databaseURL: "https://mind-app-f153d.firebaseio.com",
    projectId: "mind-app-f153d",
    storageBucket: "mind-app-f153d.appspot.com",
    messagingSenderId: "708366980078",
    appId: "1:708366980078:web:069767339466c5ee6674ff",
    measurementId: "G-3C1JMD5EK2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;