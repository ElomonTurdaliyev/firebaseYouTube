import firebase from 'firebase/compat/app';
import "firebase/compat/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyAlyAuU7QPvRpM_JbNz0WPIudZjmFzOGkw",
    authDomain: "auth-879e7.firebaseapp.com",
    projectId: "auth-879e7",
    storageBucket: "auth-879e7.appspot.com",
    messagingSenderId: "492580674631",
    appId: "1:492580674631:web:a4c02dfda36617ebb22562"
});

const auth = app.auth();
export { auth };
export default app;