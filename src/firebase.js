// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore, getDoc, doc} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHY3NMdhII86Rj9aXM3fzIbe8M2itNW78",
  authDomain: "web-page-6656c.firebaseapp.com",
  databaseURL: "https://web-page-6656c-default-rtdb.firebaseio.com",
  projectId: "web-page-6656c",
  storageBucket: "web-page-6656c.appspot.com",
  messagingSenderId: "23448822861",
  appId: "1:23448822861:web:2bca1b1f3e6d3ae5c6e804"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const docRef = doc(db, 'projects', 'Nusqx1rTJivSAqhXXy6M')
const docSnap = await getDoc(docRef)
let info = docSnap.data() 

export{
  db,
  info
}