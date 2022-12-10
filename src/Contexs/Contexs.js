import React, { createContext, useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../firebase/firebase.init';
export const authContex = createContext()
const provider = new GoogleAuthProvider();

const auth = getAuth(app);

const Contexs = (props) => {
 
const [user, setUser] = useState()





const sinInWithGoogle = () =>{
    return signInWithPopup(auth, provider)
}

const logOut = () =>{
 return   signOut(auth)
}


useEffect(() =>{
  const unsubscribs =  onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    })

    return () => unsubscribs;
},[])




const authInfo ={user,sinInWithGoogle,logOut}

    return (
        <authContex.Provider value={authInfo}>
            {props.children}            
       </authContex.Provider>
    );
};

export default Contexs;