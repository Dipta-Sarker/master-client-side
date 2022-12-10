import React, { createContext, useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.init';
export const authContex = createContext()
const provider = new GoogleAuthProvider();

const auth = getAuth(app);

const Contexs = (props) => {
 
const [user, setUser] = useState()


const createAccount = (email,password) =>{
    return createUserWithEmailAndPassword(auth, email, password);
}

const signIn = (email,password) =>{
    return signInWithEmailAndPassword(auth, email, password)
}


const sinInWithGoogle = () =>{
    return signInWithPopup(auth, provider)
}

const logOut = () =>{
 return   signOut(auth)
}

const updateProfileUser =(profile) =>{
    return updateProfile(auth.currentUser,profile)
} 


useEffect(() =>{
  const unsubscribs =  onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    })

    return () => unsubscribs;
},[])




const authInfo ={user,sinInWithGoogle,logOut,signIn,createAccount,updateProfileUser}

    return (
        <authContex.Provider value={authInfo}>
            {props.children}            
       </authContex.Provider>
    );
};

export default Contexs;