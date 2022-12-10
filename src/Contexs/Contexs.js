import React, { createContext, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from '../firebase/firebase.init';
export const authContex = createContext()
const provider = new GoogleAuthProvider();

const auth = getAuth(app);

const Contexs = (props) => {
 
const [user, setUser] = useState({})











const authInfo ={user}
    return (
        <authContex.Provider value={authInfo}>
            {props.children}            
       </authContex.Provider>
    );
};

export default Contexs;