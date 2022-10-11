import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Copiar todo el contenido de la función del proyecto creado en Firebase.
const firebaseConfig = {
  apiKey: " <<< Firebase >>> ",
  authDomain: " <<< Firebase >>> ",
  projectId: " <<< Firebase >>> ",
  storageBucket: " <<< Firebase >>> ",
  messagingSenderId: " <<< Firebase >>> ",
  appId: " <<< Firebase >>> ",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
