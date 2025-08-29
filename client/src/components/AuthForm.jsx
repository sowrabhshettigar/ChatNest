import React, { useState } from "react";

const AuthForm = ({ type, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === "login") {
      onSubmit({ email: formData.email, password: formData.password });
    } else {
      onSubmit(formData);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          {type === "login" ? "Login" : "Register"}
        </h2>

        {/* Name field only for register */}
        {type === "register" && (
          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
        )}

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-600 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-gray-600 mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          {type === "login" ? "Login" : "Register"}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
