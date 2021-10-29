import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut , onAuthStateChanged  } from "firebase/auth";

import initializeAuthentication from "../Pages/Home/Login/Firebase/firebase.init";

initializeAuthentication()

const useFirebase = () =>{

     //user State
     const [user, setUser] = useState({})
     const auth = getAuth();
     const googleProvider = new GoogleAuthProvider();

     //google signIn
     const googleSignInUser = () =>{
         return signInWithPopup(auth, googleProvider)
          
     }

     //Sign out
     const handleSignOut = () =>{
          signOut(auth)
          .then(() => {
               setUser({})
             })
     }

     //Observer
     useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth, user=>{
               if (user) {
                   setUser(user) 
               }
               else{
                    setUser({})
               }
          }) ;
          return ()=> unsubscribe;
     },[])


     return{
          user,
          setUser,
          googleSignInUser,
          handleSignOut
     }
}

export default useFirebase;