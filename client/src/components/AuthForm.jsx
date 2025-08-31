// components/AuthForm.jsx
import React, { useState, useContext } from "react";
import { loginUser, registerUser, setAuthToken } from "../services/api";
import { AuthContext } from "../context/AuthContext";

const AuthForm = ({ type }) => {
  const { setUser } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      let data;

      if (type === "login") {
        data = await loginUser({
          email: formData.email,
          password: formData.password,
        });
      } else {
        data = await registerUser(formData);
      }

      // Save token
      setAuthToken(data.token);
      localStorage.setItem("token", data.token);

      // Save user in context
      setUser(data.user);

    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white shadow rounded"
    >
      <h2 className="text-2xl font-semibold mb-4 text-center">
        {type === "login" ? "Login" : "Register"}
      </h2>

      {type === "register" && (
        <div className="mb-4">
          <label className="block mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
      )}

      <div className="mb-4">
        <label className="block mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        {loading
          ? "Please wait..."
          : type === "login"
          ? "Login"
          : "Register"}
      </button>
    </form>
  );
};

export default AuthForm;
