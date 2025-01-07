import React from "react";
import "../styles/About.css" // Custom CSS for the About page

export default function About() {
  return (
    <div className="about-container">
      <section className="about-header">
        <h1>About JobQuest</h1>
        <p>Your Personalized Hub for Career and Academic Excellence</p>
      </section>

      <section className="about-content">
        <div className="about-card">
          <h2>Who We Are</h2>
          <p>
            JobQuest is a one-stop platform designed to connect job seekers and employers,
            offering personalized career opportunities and fostering meaningful
            professional connections.
          </p>
        </div>

        <div className="about-card">
          <h2>Our Mission</h2>
          <p>
            We aim to empower individuals by providing them with the tools and resources
            they need to achieve their career goals while enabling organizations to
            discover top talent effortlessly.
          </p>
        </div>

        <div className="about-card">
          <h2>What We Offer</h2>
          <ul>
            <li>Personalized job recommendations</li>
            <li>Comprehensive job search tools</li>
            <li>Academic and career guidance</li>
            <li>Insights into the latest industry trends</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
