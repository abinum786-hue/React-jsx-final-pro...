function Home() {
  return (
    <div className="hero">

      <div className="hero-overlay">
        <h1 className="hero-title">Techz Hub</h1>

        <h2 className="hero-subtitle">
          Bridge to <br /> Future Technology
        </h2>

        <p className="hero-text">
          Empowering students with cutting-edge computer courses 
          and AI-driven learning solutions designed for the future.
        </p>

        <div className="hero-buttons">
          <button>Explore Courses</button>
         <br /><br /> <button className="outline-btn">Get Started</button>
        </div>
      </div>

      {/* NEW PROMINENT IMAGE */}
      <div className="hero-image">
        <img 
          src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png" 
          alt="Tech Illustration"
        />
      </div>

    </div>
  );
}

export default Home;