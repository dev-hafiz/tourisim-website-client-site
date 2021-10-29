import { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut  } from "firebase/auth";

import initializeAuthentication from "../Pages/Home/Login/Firebase/firebase.init";

initializeAuthentication()

const useFirebase = () =>{

     //user State
     const [user, setUser] = useState({})
     const auth = getAuth();
     const googleProvider = new GoogleAuthProvider();

     //google signIn
     const googleSignInUser = () =>{
          signInWithPopup(auth, googleProvider)
          .then(result =>{
               setUser(result.user)
          })
     }

     //Sign out
     const handleSignOut = () =>{
          signOut(auth)
          .then(() => {
               setUser({})
             })
     }


     return{
          user,
          setUser,
          googleSignInUser,
          handleSignOut
     }
}

export default useFirebase;