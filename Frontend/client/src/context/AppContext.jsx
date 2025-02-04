// context/AppContext.jsx
import React, {createContext, useEffect, useState} from 'react';
import {dummyCourses} from "../assets/assets.js";

export const AppContext = createContext(); // Context definition

export const AppProvider = (props) => {

    const currency = import.meta.env.VITE_CURRENCY;



    const [allCourses, setAllCourses] = useState([]);

    //Fetch All Courses
    const fetchAllCourses =async ()=>{

        setAllCourses(dummyCourses);
    }

    useEffect(() => {
        fetchAllCourses();
    }, []);

    const value = {
       currency,allCourses
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};