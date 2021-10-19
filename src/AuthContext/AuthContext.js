import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';
import useService from '../hooks/useService';

export const Context = createContext();

const AuthContext = ({ children }) => {
    const allContext = useFirebase();
    const services = useService();
    return (
        <Context.Provider value={{ allContext, services }} >
            {children}
        </Context.Provider >
    )
}

export default AuthContext;
