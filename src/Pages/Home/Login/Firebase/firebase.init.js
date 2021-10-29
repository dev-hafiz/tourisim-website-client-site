import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebas.config";

const initializeAuthentication = () =>{
     initializeApp(firebaseConfig);
}

export default initializeAuthentication;