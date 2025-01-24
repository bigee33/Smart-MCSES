import React, { useState } from 'react';
import './Notice.css';

const Notice = () => {
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [popupMessage, setPopupMessage] = useState(null);

  const notices = [
    {
      title: "School reopening date announced",
      date: "10th January 2025",
      message: "The school will reopen on 10th January 2025 after the winter break."
    },
    {
      title: "Parent-Teacher meeting",
      date: "15th January 2025",
      message: "A parent-teacher meeting is scheduled for 15th January 2025."
    },
    {
      title: "New fee structure for 2025",
      date: "Available now",
      message: "The new fee structure for the year 2025 is now available on the school website."
    }
  ];

  const handleNoticeClick = (notice) => {
    setSelectedNotice(notice);
    setPopupMessage("You clicked on a notice. Please check the details in the popup.");
    setTimeout(() => setPopupMessage(null), 3000);
  };

  const closePopup = () => {
    setSelectedNotice(null);
  };

  return (
    <div className="notice-section modern">
      <h2 className="section-title">Latest Notices</h2>
      <ul className="notice-list">
        {notices.map((notice, index) => (
          <li key={index} onClick={() => handleNoticeClick(notice)} className="notice-item">
            <h3 className="notice-title">{notice.title}</h3>
            <p className="notice-date">{notice.date}</p>
          </li>
        ))}
      </ul>

      {popupMessage && <div className="popup-message">{popupMessage}</div>}

      {selectedNotice && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closePopup}>&times;</button>
            <h3 className="popup-title">{selectedNotice.title}</h3>
            <p className="popup-date">Date: {selectedNotice.date}</p>
            <p className="popup-message">{selectedNotice.message}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notice;
