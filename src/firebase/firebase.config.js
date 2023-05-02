// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA3whf3eWJuhNOfMUJeKVGDRuQrW6_8DbE",
    authDomain: "foods-restaurant-assignment-10.firebaseapp.com",
    projectId: "foods-restaurant-assignment-10",
    storageBucket: "foods-restaurant-assignment-10.appspot.com",
    messagingSenderId: "318185771583",
    appId: "1:318185771583:web:14dcb2fc8ccd2b9420de8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;