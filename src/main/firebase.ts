import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDHvhMGoztE4njVsO5gdHLIDxmJKW-gOyU",
  authDomain: "leetcode-contest-5deb1.firebaseapp.com",
  projectId: "leetcode-contest-5deb1",
  storageBucket: "leetcode-contest-5deb1.appspot.com",
  messagingSenderId: "91993735335",
  appId: "1:91993735335:web:e2151f780fdb1c95ef5b82",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
