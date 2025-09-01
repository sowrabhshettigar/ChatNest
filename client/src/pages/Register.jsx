import { useContext } from "react";
import { AuthForm } from "../components/AuthForm";
import { AuthContext } from "../context/AuthContext";

export const Register=()=>{
    const {register}=useContext(AuthContext);

    const handleRegister= async (formData)=>{
       try {
      await register(formData);
      alert("Registration successful!");
    } catch (err) {
      alert("Registration failed: " + err.message);
    }
  };

  return (
    <AuthForm type="register" onSubmit={handleRegister} />
  );
};
