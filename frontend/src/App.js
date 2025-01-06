import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">
          <h1>JobQuest</h1>
        </div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#jobs">Jobs</a>
          <a href="#login">LogIn</a>
          <a href="#register">Register</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="main-section">
        <div className="text-content">
          <h1>
            Personalization <br />
            and Engagement Focus.
          </h1>
          <p>
            “Personalized Opportunities, Collaborative Success.”
            <br />
            “Your Personalized Hub for Career and Academic Excellence.”
          </p>
        </div>
        <div className="illustration">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Illustration of two people working"
          />
        </div>
      </main>

      {/* Trusted By Section */}
      <section className="trusted-section">
        <h3>Trusted By</h3>
        <div className="trusted-logos">
          <img src="https://via.placeholder.com/50" alt="Apple Logo" />
          <img src="https://via.placeholder.com/50" alt="Samsung Logo" />
          <img src="https://via.placeholder.com/50" alt="Huawei Logo" />
          <img src="https://via.placeholder.com/50" alt="Other Logo" />
        </div>
      </section>
    </div>
  );
}

export default App;
