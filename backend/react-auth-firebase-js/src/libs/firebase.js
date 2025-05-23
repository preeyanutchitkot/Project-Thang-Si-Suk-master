// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // ✅ ต้อง import getAuth


console.log("Firebase API Key:", import.meta.env.VITE_FIREBASE_API_KEY);

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY, // ✅ แก้ชื่อให้ถูกต้อง
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN, // ✅ แก้ชื่อให้ถูกต้อง
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // ✅ ใช้งาน getAuth ได้ถูกต้อง
export default app;
