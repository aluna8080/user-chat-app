// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4UMthCGjsrMAkvWwfDBo60Zeoa3eINUg",
  authDomain: "chatapp-b04bf.firebaseapp.com",
  projectId: "chatapp-b04bf",
  storageBucket: "chatapp-b04bf.appspot.com",
  messagingSenderId: "91770011535",
  appId: "1:91770011535:web:b3286742f06157c3cd55fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
