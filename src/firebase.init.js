// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDN9uysv_lI9wqlVBAtf92fkuMYaQwJTZ0",
    authDomain: "luxury-living-a9916.firebaseapp.com",
    projectId: "luxury-living-a9916",
    storageBucket: "luxury-living-a9916.appspot.com",
    messagingSenderId: "886430501431",
    appId: "1:886430501431:web:f007446a7393061d324db2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth

