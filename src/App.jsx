import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import StudentForm from "./components/StudentForm";
import Students from "./pages/Students";


function App() {
  // Instead of routes, use a page state
  const [page, setPage] = useState("home");
  const [courseId, setCourseId] = useState(null);

  const goToCourseDetails = (id) => {
    setCourseId(id);
    setPage("courseDetails");
  };
 
 return (
    <div>
      <Header setPage={setPage} />
      
      {page === "home" && <Home />}
      {page === "courses" && <Courses goToCourseDetails={goToCourseDetails} />}
      {page === "courseDetails" && <CourseDetails id={courseId} />}
      {page === "addStudent" && <StudentForm />}
      {page === "students" && <Students />}
    </div>
  );
}


export default App;
