 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsouldHUIf7aYu_qsdfDU6KGsiIbM9S5k",
  authDomain: "shop-3c621.firebaseapp.com",
  projectId: "shop-3c621",
  storageBucket: "shop-3c621.appspot.com",
  messagingSenderId: "622205448123",
  appId: "1:622205448123:web:55cf5ddbd22ff55283de9e",
  measurementId: "G-ENL73EJZN2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;