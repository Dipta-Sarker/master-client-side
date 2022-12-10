import React, { createContext, useState } from 'react';

export const authContex = createContext()


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