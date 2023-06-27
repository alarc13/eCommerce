import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAhCuMy59hDMWx3NLQH_ebY_z4PzuynjyE",
  authDomain: "e-commerce43240.firebaseapp.com",
  projectId: "e-commerce43240",
  storageBucket: "e-commerce43240.appspot.com",
  messagingSenderId: "25880059135",
  appId: "1:25880059135:web:d46a1ae2090d6570e180ca",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
