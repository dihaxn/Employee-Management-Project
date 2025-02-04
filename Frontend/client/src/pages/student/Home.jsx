import React from 'react';
import Hero from "../../component/student/Hero.jsx";
<<<<<<< HEAD

const Home = () => {
    return (
        <div className='flex flex-col items-center space-y-7 text-[15px] leading-[21px]'>
            <Hero/>
=======
import Companies from "../../component/student/Companies.jsx";
import CoursesSection from "../../component/student/CoursesSection.jsx";

const Home = () => {
    return (
        <div className='flex flex-col items-center space-y-7 text-[15px] leading-[21px] text-center'>
            <Hero/>
            <Companies/>
            <CoursesSection/>
>>>>>>> dd6d3145fb306b62c7cf04a3afd89c4a1ab5e66d
        </div>
    );
};

export default Home;