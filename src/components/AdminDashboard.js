import React, { useState, useContext } from "react";
import AuthContext from "../context/AuthContext"; // Import AuthContext
import "./AdminDashboard.css"; // Import CSS file
import { useNavigate } from "react-router-dom"; // For redirecting on logout

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("events");
  const [items, setItems] = useState({
    events: ["Annual Sports Meet", "Science Exhibition"],
    syllabus: ["Mathematics - Algebra", "Physics - Motion"],
    teachers: ["Mr. John Smith", "Ms. Emily Davis"],
  });

  const [newItem, setNewItem] = useState("");
  const { setIsAdminLoggedIn } = useContext(AuthContext); // Get logout function
  const navigate = useNavigate(); // Initialize navigation

  // Add new item
  const handleAddItem = () => {
    if (newItem.trim() !== "") {
      setItems((prev) => ({
        ...prev,
        [activeTab]: [...prev[activeTab], newItem],
      }));
      setNewItem("");
    }
  };

  // Delete item
  const handleDeleteItem = (index) => {
    setItems((prev) => ({
      ...prev,
      [activeTab]: prev[activeTab].filter((_, i) => i !== index),
    }));
  };

  // Logout Function
  const handleLogout = () => {
    setIsAdminLoggedIn(false); // Update global state
    navigate("/"); // Redirect to home page
  };

  return (
    <div className="dashboard-container">
      <h2>Admin Dashboard</h2>

      {/* Logout Button */}
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>

      {/* Tabs for Navigation */}
      <div className="tab-buttons">
        {["events", "syllabus", "teachers"].map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        <h3>Manage {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h3>

        <ul>
          {items[activeTab].map((item, index) => (
            <li key={index}>
              {item} <button onClick={() => handleDeleteItem(index)}>❌</button>
            </li>
          ))}
        </ul>

        {/* Input for Adding New Items */}
        <div className="input-container">
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder={`Add new ${activeTab}`}
          />
          <button onClick={handleAddItem}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
