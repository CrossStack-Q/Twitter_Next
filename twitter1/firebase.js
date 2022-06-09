import { initializeApp,getApps,getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"




const firebaseConfig = {

    apiKey: "AIzaSyAoOL4Ej77pLo759OGFnRe3KVr3_5wMRCM",
  
    authDomain: "twitter-330e8.firebaseapp.com",
  
    projectId: "twitter-330e8",
  
    storageBucket: "twitter-330e8.appspot.com",
  
    messagingSenderId: "565540194777",
  
    appId: "1:565540194777:web:383dfe6df2510a5d4071c8"
  
  };
  


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const storage = getStorage();

export {
    app,
    db,
    storage
};

