import React from 'react'
import {Route} from "react-router-dom";
import Home from "./pages/student/Home.jsx";
import CoursesList from "./pages/student/CoursesList.jsx";
import CourseDetails from "./pages/student/CourseDetails.jsx";
import MyEnrollments from "./pages/student/MyEnrollments.jsx";
import Player from "./pages/student/Player.jsx";
import Loading from "./component/student/Loading.jsx";

const App = () => {
    return(
        <div>
            <Route>
                <Route path='/' element={<Home/>}/>
                <Route path='/course-list' element={<CoursesList/>}/>
                <Route path='/course/:id' element={<CourseDetails/>}/>
                <Route path='/my-enrollments' element={<MyEnrollments/>}/>
                <Route path='/course-list/:input' element={<CoursesList/>}/>
                <Route path='/player/:courseId' element={<Player/>}/>
                <Route path='/loading/:path' element={<Loading/>}/>

            </Route>
        </div>

    )
}

export default App