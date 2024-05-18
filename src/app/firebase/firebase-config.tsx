import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "meu-projeto-novo-ano.firebaseapp.com",
    projectId: "meu-projeto-novo-ano",
    storageBucket: "meu-projeto-novo-ano.appspot.com",
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.API_KEY
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);