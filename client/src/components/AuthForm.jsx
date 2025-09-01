import { useState } from "react";

export const AuthForm = ({type, onSubmit }) =>{
    const [formData, setFormData] = useState({
        name:"",
        email: "",
        password: ""
    });

    const handleChange=(e) =>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value   
        });
    };

    const handleSubmit=(e) =>{
        e.preventDefault();
        onSubmit(formData);
    };

    return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {type === "login" ? "Login" : "Register"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {type === "register" && (
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          {type === "login" ? "Login" : "Register"}
        </button>
      </form>
    </div>
  );
}

