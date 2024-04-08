import { initializeApp } from "firebase/app";
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyDLL03p_56LSjDcfrnNi7cRWOfvhQn_ZA0",
    authDomain: "evademedia-3cf19.firebaseapp.com",
    projectId: "evademedia-3cf19",
    storageBucket: "evademedia-3cf19.appspot.com",
    messagingSenderId: "249818389919",
    appId: "1:249818389919:web:5854746b6ca21b152f31aa",
    measurementId: "G-5YH96BEFR7"
});

const auth = getAuth(firebaseApp);

onAuthStateChanged(auth, user => {
    if(user!=null)
        console.log('logged in!');
    else    
        console.log('No user');
})