import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = ({ onRegister }) => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get previously registered users (array)
    const existingUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];

    // Check if email already exists
    const userExists = existingUsers.some(
      (u) => u.email.toLowerCase() === user.email.toLowerCase()
    );

    if (userExists) {
      alert("An account with this email already exists. Please use another email or login.");
      return;
    }

    // Add new user
    existingUsers.push(user);
    localStorage.setItem("registeredUsers", JSON.stringify(existingUsers));

    // Set this user as logged in
    localStorage.setItem("user", JSON.stringify(user));
    onRegister(user);
    navigate("/profile");
  };

  return (
    <div className="page-container">
      <div className="card form-card shadow-lg p-4">
        <h3 className="text-center mb-4 fw-bold">Register</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter your name"
              value={user.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={user.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter your password"
              value={user.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-success w-100 mt-2">
            Register
          </button>
        </form>

        <p className="text-center mt-3">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
