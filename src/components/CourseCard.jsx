import React, { useState } from "react";

function CourseCard({ id, name, duration, instructor, goToCourseDetails }) {
  const [enrolled, setEnrolled] = useState(0);

  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Duration: {duration}</p>
      <p>Instructor: {instructor}</p>
      <p>Enrolled: {enrolled}</p>
      <button onClick={() => setEnrolled(enrolled + 1)}>Enroll</button>
      <br />
      <button onClick={() => goToCourseDetails(id)}>View Details</button>
    </div>
  );
}

export default CourseCard;