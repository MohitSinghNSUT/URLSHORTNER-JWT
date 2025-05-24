import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { url } from "../../enviroment.js";
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // simulate login
    try {
      const data = await axios.post(
        url + "/user/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      console.log(data);
      navigate("/urls");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={boxStyle}>
      <h2 style={titleStyle}>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        style={inputStyle}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        style={inputStyle}
      />
      <button type="submit" style={buttonStyle}>
        Login
      </button>
    </form>
  );
}
const boxStyle = {
  background: "white",
  padding: "40px",
  borderRadius: "12px",
  boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
  width: "320px",
  textAlign: "center",
};

const titleStyle = {
  marginBottom: "20px",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "12px",
  border: "1px solid #ccc",
  borderRadius: "8px",
};

const buttonStyle = {
  width: "100%",
  padding: "10px",
  backgroundColor: "#4CAF50",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  marginBottom: "10px",
  display: "block",
};

export default Login;
