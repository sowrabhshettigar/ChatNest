import { useContext } from "react";
import AuthForm from "../components/AuthForm";
import { AuthContext } from "../context/AuthContext";

export const Login = () => {
    const { login } = useContext(AuthContext);

    const handleLogin = async (formData) => {
       try {
         await login(formData);
         alert("Login successful!");
       } catch (err) {
         alert("Login failed: " + err.message);
       }
    };

    return (
      <AuthForm type="login" onSubmit={handleLogin} />
    );
};
