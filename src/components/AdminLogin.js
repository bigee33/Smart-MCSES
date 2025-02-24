import React, { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const { setIsAdminLoggedIn } = useContext(AuthContext); // ✅ Get context
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    if (email === "admin@example.com" && password === "admin123") {
      setIsAdminLoggedIn(true); // ✅ Update context state
      navigate("/AdminDashboard"); // Redirect to dashboard
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div>
      <h2>Admin Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
      <br></br>
    </div>
  );
};

export default AdminLogin;
