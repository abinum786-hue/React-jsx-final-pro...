import { useState } from "react";

function StudentForm() {
  const [formData, setFormData] = useState({ name: "", email: "", course: "" });
  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(formData);
    setFormData({ name: "", email: "", course: "" });
  };

  return (
    <div className="form-hero">
      
      {/* Coding words column */}
      <div className="coding-column">
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
        <span>React</span>
        <span>Node.js</span>
        <span>Python</span>
        <span>AI</span>
        <span>Machine Learning</span>
        <span>Git</span>
        <span>SQL</span>
        <span>Docker</span>
      </div>

      <div className="form-overlay">
        <h2>Add Student</h2>
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
          <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          <select name="course" value={formData.course} onChange={handleChange}>
            <option value="">Select Course</option>
            <option value="Full Stack Web Development">Full Stack Web Development</option>
            <option value="Mobile App Development">Mobile App Development</option>
            <option value="Artificial Intelligence">Artificial Intelligence</option>
          </select>
          <button type="submit">Submit</button>
        </form>

        {submitted && (
          <div className="submitted-data">
            <h3>Submitted Data:</h3>
            <p>Name: {submitted.name}</p>
            <p>Email: {submitted.email}</p>
            <p>Course: {submitted.course}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default StudentForm;