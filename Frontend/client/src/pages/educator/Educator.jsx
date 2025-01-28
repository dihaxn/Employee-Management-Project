import React from 'react';
import {Outlet} from "react-router-dom";

const Educator = () => {
    return (
        <div>
            <div>
                {/* Intentionally broke Outlet */}
                {<Outlet/>} {/* Misspelled 'Outlet' */}
            </div>
        </div>
    );
};

export default Educator;