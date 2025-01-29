import { useState } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import './SignUp.css'

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const signUp = async (email, password) => {
    try {
      const response = await axios.post(
        `https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js`,
        {
          email,
          password,
          returnSecureToken: true,
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error signing up:", error);
      throw error.response?.data?.error || { message: "An unknown error occurred." };
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const userData = await signUp(email, password);
      setSuccess("User signed up successfully!");
      console.log("User Data:", userData);
    } catch (err) {
      console.error("Sign up error:", err);
      setError(err?.message || "Something went wrong, please try again.");
    }
  };

  return (
    <div>
      <Header />
    <div className="SignUpContainer">
      <h2>Sign Up</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
      <form onSubmit={handleSignUp}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
      <Footer />
    </div>
  );
};

export default SignUp;
