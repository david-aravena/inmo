import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCMrmPYngPbQdje2gTGmDa8V0w6YTcR7AA",
  authDomain: "inmobiliario-e6a3e.firebaseapp.com",
  projectId: "inmobiliario-e6a3e",
  storageBucket: "inmobiliario-e6a3e.appspot.com",
  messagingSenderId: "939157364069",
  appId: "1:939157364069:web:8a2c09a00bc7567ceb558c"
};

const app = initializeApp(firebaseConfig);

export default app