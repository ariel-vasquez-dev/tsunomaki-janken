import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  // apiKey: "AIzaSyBtw1-ONf3cRcEObOz7vJnE8XcrFuQJ7HY",
  // authDomain: "tsunomaki-janken-3bc75.firebaseapp.com",
  // projectId: "tsunomaki-janken-3bc75",
  // storageBucket: "tsunomaki-janken-3bc75.appspot.com",
  // messagingSenderId: "36016707050",
  // appId: "1:36016707050:web:3c436e7d5bfbfbf1e10e93"
  apiKey: "AIzaSyC_VMK0KGpSVCgWOD_PQJTCLBPMnMbObxw",
  authDomain: "tsunomaki-janken-a5dae.firebaseapp.com",
  projectId: "tsunomaki-janken-a5dae",
  storageBucket: "tsunomaki-janken-a5dae.appspot.com",
  messagingSenderId: "1006196992622",
  appId: "1:1006196992622:web:6067c6bcebec7a7abc147f"
};

const app = initializeApp(firebaseConfig);
const authentication = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore();

const loginWithGoogle = async () => {
  return signInWithPopup(authentication, provider)
}

export {
  loginWithGoogle,
  db
}
