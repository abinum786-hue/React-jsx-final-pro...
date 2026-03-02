function Header({ setPage }) {
  return (
    <div className="header">
      <h2>Student Course Management System</h2>
      <nav>
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("courses")}>Courses</button>
        <button onClick={() => setPage("addStudent")}>Add Student</button>
        <button onClick={() => setPage("students")}>Students</button>
      </nav>
    </div>
  );
}

export default Header;