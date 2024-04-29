/* eslint-disable react/prop-types */
// import React from 'react';

import { createContext, useEffect, useState } from "react";
import { storedMovies } from "../localStorage/localStorage";


export const AuthContext = createContext(null);
const AuthProviders = ({ children }) => {
    const [cartData, setCartData] = useState([])
    const [refetch, setRefetch] = useState(1)
    useEffect(() => {
        const data = storedMovies()
        setCartData(data)
    }, [refetch])

    const authInfo = { cartData, setCartData, refetch, setRefetch };


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;