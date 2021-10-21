import React, { createContext } from 'react';
import useDoctor from '../hooks/useDoctor';
import useFirebase from '../hooks/useFirebase';
import useService from '../hooks/useService';

export const Context = createContext();

const AuthContext = ({ children }) => {
    const allContext = useFirebase();
    const allServices = useService();
    const doctors = useDoctor();

    return (
        <Context.Provider value={{ allContext, allServices, doctors }} >
            {children}
        </Context.Provider >
    )
}

export default AuthContext;
