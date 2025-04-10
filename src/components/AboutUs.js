import React, { useState } from 'react';
import './AboutUs.css';

const teamMembers = [
  {
    name: 'Dr. Falano 1',
    role: 'Principal',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuBcvs9rUiSZHTU7_rDYtn-7wGvL8JrIjm9w&s',
  },
  {
    name: 'Mr. Falano 2',
    role: 'Head of Science Department',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuBcvs9rUiSZHTU7_rDYtn-7wGvL8JrIjm9w&s',
  },
  {
    name: 'Mr. Falano 3',
    role: 'Math Instructor',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuBcvs9rUiSZHTU7_rDYtn-7wGvL8JrIjm9w&s',
  },
  {
    name: 'Ms. Falani 4',
    role: 'English Teacher',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuBcvs9rUiSZHTU7_rDYtn-7wGvL8JrIjm9w&s',
  },
  {
    name: 'Mr. Falano 5',
    role: 'Computer Instructor',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuBcvs9rUiSZHTU7_rDYtn-7wGvL8JrIjm9w&s',
  },
];

const AboutUs = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMembers = teamMembers.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="about-us">
      <header className="about-header">
        <h1>About Us</h1>
        <p>Welcome to Smart MCSES, where education meets excellence and innovation.</p>
      </header>

      <div className="about-widgets">
        <div className="widget">
          <h2>Our Vision</h2>
          <p>
            At Smart MCSES, our vision is to empower students with knowledge, critical thinking,
            and creativity, preparing them for the challenges of tomorrow.
          </p>
        </div>

        <div className="widget">
          <h2>Our Mission</h2>
          <p>
            We are committed to providing high-quality education that fosters holistic development,
            encourages collaboration, and builds a strong foundation for lifelong learning.
          </p>
        </div>

        <div className="widget about-history">
          <h2>Our History</h2>
          <p>
            Founded in 2062 B.S, Smart MCSES has grown from a small institution to a prestigious
            school known for its innovative approach to education and outstanding academic results.
          </p>
        </div>

        <div className="widget about-team">
          <h2 onClick={() => setShowModal(true)} className="clickable">Meet Our Team</h2>
          <p>Click above to view all staff members of Smart MCSES.</p>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 className="modal-title">Our Dedicated Team</h2>

            {/* Search Input */}
            <input
              type="text"
              placeholder="Search by name or role..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />

            <div className="team-members">
              {filteredMembers.length > 0 ? (
                filteredMembers.map((member, index) => (
                  <div className="team-member" key={index}>
                    <img src={member.image} alt={member.name} />
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                  </div>
                ))
              ) : (
                <p className="no-results">No matching team members found.</p>
              )}
            </div>

            <button className="close-button" onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUs;
