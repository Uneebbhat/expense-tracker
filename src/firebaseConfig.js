import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDW49jjvLMiAOSlX7vPencZP8lTIOTyxA8",
  authDomain: "expensetracker-3.firebaseapp.com",
  projectId: "expensetracker-3",
  storageBucket: "expensetracker-3.appspot.com",
  messagingSenderId: "212742251570",
  appId: "1:212742251570:web:e43f61ddc970d8b1bac82b",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
