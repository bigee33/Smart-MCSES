import React from 'react';
import './Notice.css';

const Notice = () => {
  return (
    <div className="notice-section">
      <h2>Latest Notices</h2>
      <ul>
        <li>Notice 1: School reopening date announced - 10th January 2025.</li>
        <li>Notice 2: Parent-Teacher meeting on 15th January 2025.</li>
        <li>Notice 3: New fee structure for 2025 available on the website.</li>
      </ul>
    </div>
  );
};

export default Notice;
