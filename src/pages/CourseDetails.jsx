function CourseDetails({ id }) {
  return (
    <div className="container">
      <h2>Course Details</h2>
      <p>Course ID: {id}</p>
      <p>This is detailed info about course {id}.</p>
    </div>
  );
}

export default CourseDetails;