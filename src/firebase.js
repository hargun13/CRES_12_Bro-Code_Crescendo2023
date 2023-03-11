// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9311XnsWdJITxcpTs5C4ontOs8t_ZbiE",
  authDomain: "crescendo-7df68.firebaseapp.com",
  projectId: "crescendo-7df68",
  storageBucket: "crescendo-7df68.appspot.com",
  messagingSenderId: "105938347122",
  appId: "1:105938347122:web:8b958c4eccc81a4ae7ceeb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
<<<<<<< HEAD
const auth = getAuth(app);
=======
export const auth = getAuth(app);
export default app;
>>>>>>> cd776f17bf2557824d75c31a7fb472aba45f4e4f
