import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDd6thtNmLCAemRx_yrz1ou6woH0KoI5N8",
  authDomain: "faysal-ui.firebaseapp.com",
  projectId: "faysal-ui",
  storageBucket: "faysal-ui.appspot.com",
  messagingSenderId: "733563054055",
  appId: "1:733563054055:web:a2a84d6e5730c4c6187f42",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
