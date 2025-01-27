import React, { createContext } from 'react';
import PropTypes from 'prop-types';

export const AppContext = createContext();

export const AppProvider = (props) => {
    const value = {}; // Your context value goes here

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

AppProvider.propTypes = {
    children: PropTypes.node.isRequired,
};