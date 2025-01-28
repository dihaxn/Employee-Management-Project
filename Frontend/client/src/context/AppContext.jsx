// context/AppContext.jsx
import React, { createContext } from 'react';

export const AppContext = createContext(); // Context definition

export const AppProvider = (props) => {
    const value = {
        // No actual values added for testing purposes
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};