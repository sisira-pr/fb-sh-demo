import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCdVNkQRq-zglnEC-qoPq8_Op79kaFNHbw", //.env file & populate using env variables
    authDomain: "sh-demo-f7708.firebaseapp.com",
    projectId: "sh-demo-f7708",
    storageBucket: "sh-demo-f7708.appspot.com",
    messagingSenderId: "6237363503",
    appId: "1:6237363503:web:41b82a9e4c7d38718395da",
    measurementId: "G-VS57RD2CBX"
  };


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);