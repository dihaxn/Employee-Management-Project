import React from 'react';
import { Routes, Route, useMatch } from 'react-router-dom';
import Home from './pages/student/Home.jsx';
import CoursesList from './pages/student/CoursesList.jsx';
import CourseDetails from './pages/student/CourseDetails.jsx';
import MyEnrollments from './pages/student/MyEnrollments.jsx';
import Player from './pages/student/Player.jsx';
import Loading from './component/student/Loading.jsx';
import Educator from './pages/educator/Educator.jsx';
import DashBoard from './pages/educator/DashBoard.jsx';
import AddCourse from './pages/educator/AddCourse.jsx';
import MyCourses from './pages/educator/MyCourses.jsx';
import StudentsEnrolled from './pages/educator/StudentsEnrolled.jsx';
import Navbar from "./component/student/Navbar.jsx";

const App = () => {
    const isEducatorRoute = !!useMatch('/educator/*'); // Ensure it's a boolean

    return (
        <div className="text-default min-h-screen bg-white">
            {!isEducatorRoute && <Navbar />}
            <Routes>
                {/* Student Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/course-list" element={<CoursesList />} />  {/* Corrected path */}
                <Route path="/course/:id" element={<CourseDetails />} />
                <Route path="/my-enrollments" element={<MyEnrollments />} />
                <Route path="/course-list/:input" element={<CoursesList />} />
                <Route path="/player/:courseId" element={<Player />} />
                <Route path="/loading/:path" element={<Loading />} />

                {/* Educator Routes - Nested Properly */}
                <Route path="/educator" element={<Educator />}>
                    <Route index element={<DashBoard />} /> {/* Default route inside /educator */}
                    <Route path="add-course" element={<AddCourse />} />
                    <Route path="my-courses" element={<MyCourses />} />
                    <Route path="students-enrolled" element={<StudentsEnrolled />} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;
