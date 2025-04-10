import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import "./FeeStructure.css";

const FeeStructure = () => {
  const [showDownload, setShowDownload] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupQRCode, setPopupQRCode] = useState("");
  const [filterText, setFilterText] = useState("");
  const [sortOption, setSortOption] = useState("default");

  // Correct fee structure list
  const feeStructure = [
    {
      class: "Nursery",
      fees: [
        { category: "Admission Fee", amount: "NPR 5,000" },
        { category: "Tuition Fee", amount: "NPR 7,000/month" },
        { category: "Examination Fee", amount: "NPR 1,000/semester" },
        { category: "Sports & Activity Fee", amount: "NPR 2,000/year" },
        { category: "Lab Fee", amount: "NPR 0" },
        { category: "Library Fee", amount: "NPR 1,000/year" },
      ],
    },
    {
      class: "LKG",
      fees: [
        { category: "Admission Fee", amount: "NPR 5,500" },
        { category: "Tuition Fee", amount: "NPR 8,000/month" },
        { category: "Examination Fee", amount: "NPR 1,200/semester" },
        { category: "Sports & Activity Fee", amount: "NPR 2,200/year" },
        { category: "Lab Fee", amount: "NPR 0" },
        { category: "Library Fee", amount: "NPR 1,200/year" },
      ],
    },
    {
      class: "UKG",
      fees: [
        { category: "Admission Fee", amount: "NPR 6,000" },
        { category: "Tuition Fee", amount: "NPR 9,000/month" },
        { category: "Examination Fee", amount: "NPR 1,500/semester" },
        { category: "Sports & Activity Fee", amount: "NPR 2,500/year" },
        { category: "Lab Fee", amount: "NPR 0" },
        { category: "Library Fee", amount: "NPR 1,500/year" },
      ],
    },
    {
      class: "Class 1",
      fees: [
        { category: "Admission Fee", amount: "NPR 6,500" },
        { category: "Tuition Fee", amount: "NPR 10,000/month" },
        { category: "Examination Fee", amount: "NPR 1,500/semester" },
        { category: "Sports & Activity Fee", amount: "NPR 2,500/year" },
        { category: "Lab Fee", amount: "NPR 1,000/semester" },
        { category: "Library Fee", amount: "NPR 1,500/year" },
      ],
    },
    {
      class: "Class 2-5",
      fees: [
        { category: "Admission Fee", amount: "NPR 6,500" },
        { category: "Tuition Fee", amount: "NPR 10,500/month" },
        { category: "Examination Fee", amount: "NPR 1,500/semester" },
        { category: "Sports & Activity Fee", amount: "NPR 2,500/year" },
        { category: "Lab Fee", amount: "NPR 1,000/semester" },
        { category: "Library Fee", amount: "NPR 1,500/year" },
      ],
    },
    {
      class: "Class 6 and 7",
      fees: [
        { category: "Admission Fee", amount: "NPR 7,500" },
        { category: "Tuition Fee", amount: "NPR 11,000/month" },
        { category: "Examination Fee", amount: "NPR 2,000/semester" },
        { category: "Sports & Activity Fee", amount: "NPR 3,000/year" },
        { category: "Lab Fee", amount: "NPR 1,500/semester" },
        { category: "Library Fee", amount: "NPR 2,000/year" },
      ],
    },
    {
      class: "Class 8 and 9",
      fees: [
        { category: "Admission Fee", amount: "NPR 6,500" },
        { category: "Tuition Fee", amount: "NPR 13,500/month" },
        { category: "Examination Fee", amount: "NPR 1,500/semester" },
        { category: "Sports & Activity Fee", amount: "NPR 2,500/year" },
        { category: "Lab Fee", amount: "NPR 1,000/semester" },
        { category: "Library Fee", amount: "NPR 2,500/year" },
      ],
    },
  ];

  // Filter + Sort logic
  const filteredFeeStructure = feeStructure
    .filter((item) =>
      item.class.toLowerCase().includes(filterText.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "alphabetical") {
        return a.class.localeCompare(b.class);
      } else if (sortOption === "tuition") {
        const getTuition = (fees) =>
          parseInt(
            fees.find((f) => f.category === "Tuition Fee")?.amount.replace(/\D/g, "")
          );
        return getTuition(a.fees) - getTuition(b.fees);
      }
      return 0;
    });

  const handleDownloadClick = () => {
    setShowDownload(true);
    setTimeout(() => setShowDownload(false), 3000);
  };

  const handlePaymentMethodClick = (method) => {
    setPopupMessage(`QR code for ${method}`);
    if (method === "Bank Deposit") {
      setPopupQRCode("https://www.example.com/bank-deposit");
    } else if (method === "Online Payment Portal") {
      setPopupQRCode("https://www.example.com/online-payment");
    } else if (method === "Cash Payment at the School Office") {
      setPopupQRCode("https://www.example.com/cash-payment");
    }
    setShowPopup(true);
  };

  const closePopup = () => setShowPopup(false);

  return (
    <div className="fee-structure-container">
      <h1 className="title">Fee Structure - 2025</h1>

      <div className="controls">
        <input
          type="text"
          placeholder="Filter by class name..."
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
        <select onChange={(e) => setSortOption(e.target.value)} value={sortOption}>
          <option value="default">Sort By</option>
          <option value="alphabetical">Alphabetical</option>
          <option value="tuition">Tuition Fee (Ascending)</option>
        </select>
      </div>

      {filteredFeeStructure.map((classInfo, index) => (
        <div key={index} className="class-fee-container">
          <h2>{classInfo.class}</h2>
          <table className="fee-table">
            <thead>
              <tr>
                <th>Fee Category</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {classInfo.fees.map((fee, idx) => (
                <tr key={idx}>
                  <td>{fee.category}</td>
                  <td>{fee.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}

      <div className="payment-methods">
        <h2>Payment Methods</h2>
        <p>You can make payments through the following methods:</p>
        <ul>
          <li onClick={() => handlePaymentMethodClick("Bank Deposit")}>Bank Deposit</li>
          <li onClick={() => handlePaymentMethodClick("Online Payment Portal")}>
            Online Payment Portal
          </li>
        </ul>
      </div>

      <div className="download-section">
        <button onClick={handleDownloadClick} className="download-button">
          Download Full Fee Structure (PDF)
        </button>
        {showDownload && (
          <div className="download-message">Your download is starting...</div>
        )}
      </div>

      {showPopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closePopup}>
              &times;
            </button>
            <h3>{popupMessage}</h3>
            <QRCodeSVG value={popupQRCode} size={256} />
          </div>
        </div>
      )}
    </div>
  );
};

export default FeeStructure;
