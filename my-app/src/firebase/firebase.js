// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

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

// firebase cloud message

const messaging = getMessaging(app);

export const fetchToken = (setTokenFound) => {
  return getToken(messaging, {
    vapidKey:
      "BC1Bw9o--d-h1Sgh5YW1A-lO8JjhAENReqzd2dUVdzWHOC0_STbqSRL87YqJmqOKOwqVP6Uj7ko_vEThERxJJvQ",
  })
    .then((currentToken) => {
      if (currentToken) {
        // console.log("current token for client: ", currentToken);
        setTokenFound(true);
        if (localStorage.getItem("deviceToken") === null) {
          localStorage.setItem("deviceToken", currentToken);
        }
      } else {
        console.log(
          "No registration token available. Request permission to generate one."
        );
        setTokenFound(false);
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
    });
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
