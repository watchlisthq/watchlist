// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZqohzkmvUGsstNR3Sj_gWHUTGT-0Y5Nw",
  authDomain: "watchlist-4ddeb.firebaseapp.com",
  projectId: "watchlist-4ddeb",
  storageBucket: "watchlist-4ddeb.appspot.com",
  messagingSenderId: "345817946347",
  appId: "1:345817946347:web:2ce970285d15f9a4f446ae",
  measurementId: "G-MBN0GV4YMB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//
//
//
export async function readData() {
  let fetchData = async () => {
    let resp = await fetch("http://localhost:3000/save-data.json");
    let final = await resp.text();
    let json = JSON.parse(final);
    return json;
  };
  return await fetchData();
}
