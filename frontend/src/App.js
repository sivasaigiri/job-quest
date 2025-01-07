import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// Import your components for each route
function Home() {
  return <div><h2>Welcome to JobQuest Home</h2></div>;
}

function About() {
  return <div><h2>About JobQuest</h2></div>;
}

function Jobs() {
  return <div><h2>Explore Jobs</h2></div>;
}

function Login() {
  return <div><h2>Log In to Your Account</h2></div>;
}

function Register() {
  return <div><h2>Register for JobQuest</h2></div>;
}

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <header className="navbar">
          <div className="logo">
            <h1>JobQuest</h1>
          </div>
          <nav className="nav-links">
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/jobs">Jobs</Link>
            <Link to="/login">LogIn</Link>
            <Link to="/register">Register</Link>
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
              src="/illustration.svg"
              alt="Illustration of two people working"
            />
          </div>
        </main>
          {/* Trusted By Section */}
        <section className="trusted-section">
          <h3>Trusted By</h3>
          <div className="trusted-logos">
            <img src="/social.png" alt="Apple Logo" />
            <img src="/m.png" alt="Samsung Logo" />
            <img src="/ln.png" alt="Huawei Logo" />
            <img src="/a.png" alt="Other Logo" />
          </div>
        </section>

          {/* Define Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        
      </div>
    </Router>
  );
}

export default App;
