
import React, { useContext } from 'react';
import { assets } from "../../assets/assets.js";
import { AppContext } from "../../context/AppContext.jsx";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
    const { currency } = useContext(AppContext);

    return (
        <Link to={'/course/' + course._id} onClick={() => scrollTo(0, 0)}
              className='border border-gray-500/30 pb-6 overflow-hidden rounded-lg'>
            <img className='w-full' src={course.courseThumbnail} alt='' />
            <div className='p-3 text-left'>
                <h3 className='text-base font-semibold'>{course.courseTitle}</h3>
                <p className='text-gray-500'>{course.educator.name}</p>
                <div className='flex items-center space-2'>
                    <p>4.5</p>
                    <div className='flex'>
                        {[...Array(5)].map((_, i) => (
                            <img key={i} src={assets.star} alt='' className='w-3.5 h-3.5' />
                        ))}
                    </div>
                </div>
                <p className='text-gray-500'>22</p>
                {/* Move the price paragraph here */}
                <p className='text-base font-semibold text-gray-800'>
                    {currency}{(course.coursePrice - course.discount * course.coursePrice / 100).toFixed(2)}
                </p>
            </div>
        </Link>
    );
}

export default CourseCard;