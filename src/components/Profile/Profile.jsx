import React, { useState } from "react";

const Profile = ({ user, onLogout, setUser }) => {
  const [editMode, setEditMode] = useState(false);
  const [updatedUser, setUpdatedUser] = useState(user);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser({ ...updatedUser, [name]: value });
  };

  const handleSave = () => {
    localStorage.setItem("registeredUser", JSON.stringify(updatedUser));
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);
    setEditMode(false);
    setMessage("✅ Profile updated successfully!");
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="card shadow p-5">
        <h3 className="text-center mb-3">My Profile</h3>

        {editMode ? (
          <div>
            <div className="mb-3">
              <input
                type="text"
                name="name"
                className="form-control"
                value={updatedUser.name}
                onChange={handleChange}
                placeholder="Name"
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                name="email"
                className="form-control"
                value={updatedUser.email}
                onChange={handleChange}
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                name="password"
                className="form-control"
                value={updatedUser.password}
                onChange={handleChange}
                placeholder="Password"
              />
            </div>
            <div className="d-flex justify-content-between">
              <button className="btn btn-success" onClick={handleSave}>
                Save
              </button>
              <button className="btn btn-secondary" onClick={() => setEditMode(false)}>
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Password:</strong> {user.password}</p>
            <button className="btn btn-primary w-100" onClick={() => setEditMode(true)}>
              Edit Profile
            </button>
          </div>
        )}

        {message && <p className="text-success text-center mt-2">{message}</p>}

        <button className="btn btn-danger w-100 mt-3" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
