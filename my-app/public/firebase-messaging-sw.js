// Scripts for firebase and firebase messaging
// eslint-disable-next-line no-undef
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
// eslint-disable-next-line no-undef
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyCjeK_LeSw5E-9Jq6MST4QarHag1pshiCo",
  authDomain: "swp391-f3aae.firebaseapp.com",
  projectId: "swp391-f3aae",
  storageBucket: "swp391-f3aae.appspot.com",
  messagingSenderId: "379421024027",
  appId: "1:379421024027:web:acab9fc78510127e46fdbe",
  measurementId: "G-BVXZPGFSHS",
};

// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  // eslint-disable-next-line no-restricted-globals
  self.registration.showNotification(notificationTitle, notificationOptions);
});
