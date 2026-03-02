import { useState } from "react";

function Courses() {
  const courseData = [
    {
      id: 1,
      name: "Full Stack Web Development",
      duration: "6 Months",
      instructor: "Abdullah Mehmood",
      description: "Complete MERN stack development course."
    },
    {
      id: 2,
      name: "Mobile App Development",
      duration: "5 Months",
      instructor: "Bilal Ahmed",
      description: "Build Android apps using React Native."
    },
    {
      id: 3,
      name: "Artificial Intelligence",
      duration: "6 Months",
      instructor: "Dr. Imran",
      description: "Learn AI, Machine Learning & Deep Learning."
    }
  ];

  // Store enrolled count per course
  const [enrolledCount, setEnrolledCount] = useState({});

  const handleEnroll = (id) => {
    setEnrolledCount((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  return (
    <div className="container">
      <h2>💻 Computer Courses</h2>

      <div className="course-grid">
        {courseData.map((course) => (
          <div className="card" key={course.id}>
            <h3>{course.name}</h3>
            <p><strong>Duration:</strong> {course.duration}</p>
            <p><strong>Instructor:</strong> {course.instructor}</p>
            <p>{course.description}</p>

            <p style={{ fontWeight: "bold", color: "#ff0080" }}>
              👩‍🎓 Enrolled: {enrolledCount[course.id] || 0}
            </p>

            <button onClick={() => handleEnroll(course.id)}>
              🚀 Enroll Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
