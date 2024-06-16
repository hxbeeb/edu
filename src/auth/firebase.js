import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    // apiKey: "AIzaSyAGxV_UlJI8Votba7BhkU8rTV6_YBJslzk",
    // authDomain: "EDUai-f3cce.firebaseapp.com",
    // projectId: "EDUai-f3cce",
    // storageBucket: "EDUai-f3cce.appspot.com",
    // messagingSenderId: "1028587345494",
    // appId: "1:1028587345494:web:9b5b18c29873811d1d8df7",
    // measurementId: "G-TKMBD1MGBY",



apiKey:"AIzaSyBpvmVT4mNm2hH-pxatWa4S_oviZaQECC0",
authDomain: "edu-ai-6112a.firebaseapp.com",
projectId: "edu-ai-6112a",
messagingSenderId:"edu-ai-6112a.appspot.com",
storageBucket: "edu-ai-6112a.appspot.com",
 messagingSenderId:"387004847425",
 appId:"1:387004847425:web:5f259f21a1eba3ed58bdc0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export default app;