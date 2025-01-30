import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { assets } from '../../assets/assets.js';
import {useClerk, UserButton, useUser} from "@clerk/clerk-react";

const Navbar = () => {
    const location = useLocation();
    const isCourseListPage = location.pathname.includes('/course-list');

    const {openSignIn} = useClerk();

    const {user} = useUser();

    return (
        <div
            className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 ${
                isCourseListPage ? 'bg-white' : 'bg-cyan-100/70'
            }`}
        >
            <Link to="/">
                <img src={assets.logo} alt="Logo" className="w-28 lg:w-32 cursor-pointer" />
            </Link>

            <div className="hidden md:flex items-center justify-center gap-5 text-gray-500">
                <div>
                    <button onClick={() => {/* handle become educator click */}}>Become Educator</button>
                    &nbsp;|&nbsp;  {/* Added space around | */}
                    <Link to="/my-enrollments" className="text-blue-600 hover:underline">My Enrollments</Link>
                </div>
                <button onClick={()=> openSignIn()} className="bg-blue-600 text-white px-5 py-2 rounded-full">Create Account</button>
            </div>

            {/* For Phone screen */}
            <div className='md:hidden flex items-center gap-2 sm:gap-5 text-gray-500'>
                <div>
                    <button onClick={() => {/* handle become educator click */}}>Become Educator</button>
                    &nbsp;|&nbsp;  {/* Added space around | */}
                    <Link to="/my-enrollments" className="text-blue-600 hover:underline">My Enrollments</Link>
                </div>
                <button>
                    <img src={assets.user_icon} alt="User icon" />
                </button>
            </div>
        </div>
    );
};

export default Navbar;