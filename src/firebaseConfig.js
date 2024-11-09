import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { initializeApp } from "firebase/app";
import {  useNavigate } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyBrpVrm8g-jvUyAfMufRnLnu6_VCLguSFs",
  authDomain: "mymind-a55f6.firebaseapp.com",
  projectId: "mymind-a55f6",
  storageBucket: "mymind-a55f6.appspot.com",
  messagingSenderId: "110606707590",
  appId: "1:110606707590:web:1d709658564e6d669f1a07",
  measurementId: "G-SDGTQH373J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Function to handle Google Sign-In
const handleGoogleLogin = async () => {
    const navigate=useNavigate()
  try {
    const result = await signInWithPopup(auth, googleProvider);
    // Access user info from result.user
    navigate("/dashboard")
    console.log("User information:", result.user);
  } catch (error) {
    console.error("Error during sign-in:", error);
  }
};

export { auth, googleProvider, handleGoogleLogin };
