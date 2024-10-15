import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "1:91993735335:web:"",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
