import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore"


const {
    API_KEY,
    AUTH_DOMAIN,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    APP_ID,
    MEASUREMENT_ID,
} = process.env;

const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID,
    measurementId: MEASUREMENT_ID,
  };
  

// Initialize Firebase
initializeApp(firebaseConfig);

// Initialize database
const db = getFirestore()

// Collection ref
const colRef = collection(db, "countries")

//Collection data
getDocs(colRef)
  .then((snapshot) => {
    let countries = [];
    snapshot.docs.forEach((doc) => {
      countries.push({ ...doc.data(), id: doc.id})
    })
    console.log(countries)
  })

export { colRef, getDocs}