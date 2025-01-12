import React from "react";
import "../styles/Home.css"

function Home() {
  return (
    <div>
      <main className="main-section">
        <div className="text-content">
          <h1>
            Personalization <br />
            and Engagement Focus.
          </h1>
          <p>
            “Personalized Opportunities with Collaborative Success.”
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
    </div>
  );
}

export default Home;
