// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6FlsYaQ7DqmE3CsQBIU2INmba_t_3CIs",
  authDomain: "learn-with-master.firebaseapp.com",
  projectId: "learn-with-master",
  storageBucket: "learn-with-master.appspot.com",
  messagingSenderId: "937648973204",
  appId: "1:937648973204:web:c0cc75e773a0ce57e81b81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;