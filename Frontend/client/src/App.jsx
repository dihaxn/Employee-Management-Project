import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/student/Home.jsx';
import CoursesList from './pages/student/CoursesList.jsx';
import CourseDetails from './pages/student/CourseDetails.jsx';
import MyEnrollments from './pages/student/MyEnrollments.jsx';
import Player from './pages/student/Player.jsx';
import Loading from './component/student/Loading.jsx';
import Educator from './pages/educator/Educator.jsx';
import DashBoard from './pages/educator/DashBoard.jsx';
import AddCourse from './pages/educator/AddCourse.jsx'; // Introduced misspelling
import MyCourses from './pages/educator/MyCourses.jsx';
import StudentsEnrolled from './pages/educator/StudentsEnrolled.jsx';

const App = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/courses-list' element={<CoursesList />} /> {/* Intentional path mismatch */}
                <Route path='/course/:id' element={<CourseDetails />} />
                <Route path='/my-enrollments' element={<MyEnrollments />} />
                <Route path='/course-list/:input' element={<CoursesList />} />
                <Route path='/player/:courseId' element={<Player />} />
                <Route path='/loading/:path' element={<Loading />} />
                <Route path='/educator' element={<Educator />} >
                    <Route path='educator' element={<DashBoard />} />
                    <Route path='add-course' element={<AddCourse />} />
                    <Route path='my-courses' element={<MyCourses />} />
                    <Route path='students-enrolled' element={<StudentsEnrolled />} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;