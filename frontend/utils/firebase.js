// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhWl6cBXdSvt_9DtspxiSZQdDA1I6jXTk",
  authDomain: "multiagent-c9c8f.firebaseapp.com",
  projectId: "multiagent-c9c8f",
  storageBucket: "multiagent-c9c8f.firebasestorage.app",
  messagingSenderId: "648991420774",
  appId: "1:648991420774:web:deebcdb23e54932c6718a7",
  measurementId: "G-BSV65VJ7HB"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth=getAuth(app)
export const googleProvider=new GoogleAuthProvider()