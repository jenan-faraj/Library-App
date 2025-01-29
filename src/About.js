import React from "react";
import "./About.css";
import Header from "./Header";
import Footer from "./Footer";

function About() {
  return (
    <div>
      <Header />
      <div className="about-container">
        <div className="about-header">
          <h1>About Us</h1>
          <div className="underline"></div>
        </div>

        <div className="about-content">
          <div className="about-section">
            <h2>Our Story</h2>
            <p>
              Welcome to our bookstore! We started this journey in 2020 with a
              simple mission: to bring the joy of reading to everyone. Our
              passion for books and literature drives us to provide the best
              reading experience for our customers.
            </p>
          </div>

          <div className="about-section">
            <h2>Our Mission</h2>
            <p>
              We believe that books have the power to transform lives. Our goal
              is to create a community of readers and make quality literature
              accessible to all. We carefully curate our collection to ensure
              there's something for every reader.
            </p>
          </div>

          <div className="about-team">
            <h2>Our Team</h2>
            <div className="team-grid">
              <div className="team-member">
                <div className="member-image"></div>
                <h3>Sarah Johnson</h3>
                <p>Founder & CEO</p>
              </div>
              <div className="team-member">
                <div className="member-image"></div>
                <h3>Michael Chen</h3>
                <p>Head of Operations</p>
              </div>
              <div className="team-member">
                <div className="member-image"></div>
                <h3>Lisa Brown</h3>
                <p>Chief Librarian</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
