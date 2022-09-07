import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyBXfLZxzGsXBd6nGlgqhScchooa1HurpZg",
  authDomain: "scheme-51b6b.firebaseapp.com",
  projectId: "scheme-51b6b",
  storageBucket: "scheme-51b6b.appspot.com",
  messagingSenderId: "275195110296",
  appId: "1:275195110296:web:a2b028178406603a7741ed",
  measurementId: "G-8PDKGCJNCS"
})

const auth = firebase.auth();
const firestore = firebase.firestore();


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
