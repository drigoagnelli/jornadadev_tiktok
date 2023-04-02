
import { initializeApp } from "firebase/app";


import { getFirestore} from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyAuZaF3kgVKtng2sjufkpJoCHoLygmqIoQ",
  authDomain: "tiktok---jornada-b4595.firebaseapp.com",
  projectId: "tiktok---jornada-b4595",
  storageBucket: "tiktok---jornada-b4595.appspot.com",
  messagingSenderId: "499474868527",
  appId: "1:499474868527:web:e06e97251e2ec3e87dd9da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db;