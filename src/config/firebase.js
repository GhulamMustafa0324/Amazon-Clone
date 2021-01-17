import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCmUqScjcHOhmm3AfZ5p2qMS5QQe7sf3vE",
    authDomain: "clone-62d0f.firebaseapp.com",
    databaseURL: "https://clone-62d0f-default-rtdb.firebaseio.com",
    projectId: "clone-62d0f",
    storageBucket: "clone-62d0f.appspot.com",
    messagingSenderId: "835542554644",
    appId: "1:835542554644:web:f965d548d63f82e4e56f01",
    measurementId: "G-FMFRXSC863"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()


export { db, auth }