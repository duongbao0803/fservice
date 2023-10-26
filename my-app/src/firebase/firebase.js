// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjeK_LeSw5E-9Jq6MST4QarHag1pshiCo",
  authDomain: "swp391-f3aae.firebaseapp.com",
  projectId: "swp391-f3aae",
  storageBucket: "swp391-f3aae.appspot.com",
  messagingSenderId: "379421024027",
  appId: "1:379421024027:web:acab9fc78510127e46fdbe",
  measurementId: "G-BVXZPGFSHS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
