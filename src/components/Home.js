import React, { useState, useEffect } from "react";
import { FaUsers, FaChalkboardTeacher, FaUserTie } from "react-icons/fa";
import "./Home.css";

// Slideshow component
const Slideshow = () => {
  const images = [
    "/images/Slide1.jpg",
    "/images/Slide2.jpg",
    "/images/Slide3.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="slideshow-section">
      <button className="arrow-btn arrow-left" onClick={prevImage}>
        &#9664;
      </button>
      <div className="slideshow">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="slideshow-image"
        />
      </div>
      <button className="arrow-btn arrow-right" onClick={nextImage}>
        &#9654;
      </button>
    </div>
  );
};

// Founder Message
const FounderMessage = () => {
  return (
    <div className="founder-message-container">
      <div className="founder-photo">
        <img
          src="/images/Founder1.jpg"
          alt="Founder"
          className="founder-image"
        />
      </div>
      <div className="founder-message-content">
        <h2>Message from the Founder</h2>
        <p>
          Welcome to Melamchi Community School! I am honored to be a part of
          this incredible journey with you. At SMCSES, our mission is to provide
          an environment where students are not only equipped with academic
          knowledge but also encouraged to develop creativity, leadership, and
          strong moral character.
        </p>
        <p>
          Our dedicated team of educators works passionately to ensure that
          every student feels supported and empowered to pursue their dreams.
          Together, with the support of our parents and community, we aim to
          shape responsible and compassionate leaders of tomorrow.
        </p>
        <div className="founder-name">
          <p className="founder-title">Founding Principal:</p>
          <p className="founder-name-text">Dinesh Basnet</p>
        </div>
      </div>
    </div>
  );
};

// Notices
const Notice = () => {
  return (
    <div className="notice-container">
      <h2>Notices</h2>
      <ul>
        <li>📌 Exam schedule has been updated.</li>
        <li>📌 New batch registration starts next week.</li>
        <li>📌 Library hours have been extended.</li>
      </ul>
    </div>
  );
};

// Events
const UpcomingEvents = () => {
  return (
    <div className="upcoming-events-container">
      <h2>Upcoming Events</h2>
      <ul>
        <li>📅 Parent-Teacher Meeting - April 25</li>
        <li>📅 Science Exhibition - May 3</li>
        <li>📅 Annual Sports Day - May 12</li>
        <li>📅 Art Competition - May 20</li>
        <li>📅 Summer Break - From June 1</li>
      </ul>
    </div>
  );
};

// Stats
const Statistics = () => {
  return (
    <div className="statistics-container">
      <h2>School Statistics</h2>
      <div className="statistics-cards">
        <div className="stat-card">
          <FaUsers size={60} />
          <h3>Students</h3>
          <p>1200</p>
        </div>
        <div className="stat-card">
          <FaChalkboardTeacher size={60} />
          <h3>Teachers</h3>
          <p>45</p>
        </div>
        <div className="stat-card">
          <FaUserTie size={60} />
          <h3>Staffs</h3>
          <p>30</p>
        </div>
      </div>
    </div>
  );
};

// Main Home Page
const Home = () => {
  return (
    <div className="home-page">
      <Slideshow />

      <div className="founder-notice-container">
        <div className="founder-message-section">
          <FounderMessage />
        </div>

        <div className="notice-events-section">
          <div className="notice-section">
            <Notice />
          </div>
          <div className="upcoming-events-section">
            <UpcomingEvents />
          </div>
        </div>
      </div>

      <Statistics />
    </div>
  );
};

export default Home;
