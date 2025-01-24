import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <header className="about-header">
        <h1>About Us</h1>
        <p>Welcome to Smart MCSES, where education meets excellence and innovation.</p>
      </header>

      <div className="about-widgets">
        {/* Vision Widget */}
        <div className="widget">
          <h2>Our Vision</h2>
          <p>
            At Smart MCSES, our vision is to empower students with knowledge, critical thinking, and creativity, preparing them for the challenges of tomorrow.
          </p>
        </div>

        {/* Mission Widget */}
        <div className="widget">
          <h2>Our Mission</h2>
          <p>
            We are committed to providing high-quality education that fosters holistic development, encourages collaboration, and builds a strong foundation for lifelong learning.
          </p>
        </div>

        {/* History Widget */}
        <div className="widget">
          <h2>Our History</h2>
          <p>
            Founded in 2062 B.S, Smart MCSES has grown from a small institution to a prestigious school known for its innovative approach to education and outstanding academic results.
          </p>
        </div>

        {/* Team Widget */}
        <div className="widget">
          <h2>Meet Our Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuBcvs9rUiSZHTU7_rDYtn-7wGvL8JrIjm9w&s"
                alt="Principal"
              />
              <h3>Dr. Falano 1</h3>
              <p>Principal</p>
            </div>
            <div className="team-member">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuBcvs9rUiSZHTU7_rDYtn-7wGvL8JrIjm9w&s"
                alt="Head of Science"
              />
              <h3>Mr. Falano 2</h3>
              <p>Head of Science Department</p>
            </div>
            <div className="team-member">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuBcvs9rUiSZHTU7_rDYtn-7wGvL8JrIjm9w&s"
                alt="Math Instructor"
              />
              <h3>Mr. Falano 3</h3>
              <p>Math Instructor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
