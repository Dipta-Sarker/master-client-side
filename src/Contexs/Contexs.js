import React, { createContext, useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, GithubAuthProvider } from "firebase/auth";
import app from '../firebase/firebase.init';
export const authContex = createContext()
const provider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const auth = getAuth(app);

const Contexs = (props) => {
 
const [user, setUser] = useState()
const [loadding, setLoadding] = useState(true)


const createAccount = (email,password) =>{
    return createUserWithEmailAndPassword(auth, email, password);
}

const signIn = (email,password) =>{
    setLoadding(false)
    return signInWithEmailAndPassword(auth, email, password)
}


const sinInWithGoogle = () =>{
    return signInWithPopup(auth, provider)
}

const sinInWithGithub = () =>{
    setLoadding(false)
   return signInWithPopup(auth, githubProvider)
}

const logOut = () =>{
    setLoadding(false)
 return   signOut(auth)
}

const updateProfileUser =(profile) =>{
    setLoadding(false)
    return updateProfile(auth.currentUser,profile)
} 


useEffect(() =>{
  const unsubscribs =  onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
        setLoadding(false)
    })

    return () => unsubscribs;
},[])




const authInfo ={sinInWithGithub,user,loadding,sinInWithGoogle,logOut,signIn,createAccount,updateProfileUser}

    return (
        <authContex.Provider value={authInfo}>
            {props.children}            
       </authContex.Provider>
    );
};

export default Contexs;