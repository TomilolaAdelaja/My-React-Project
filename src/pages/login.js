import React, { useState } from "react";
import { useAuth } from "../components/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [userInfo, setUserInfo] = useState({
    userName: "",
    password: "",
  });
  const handleLogin = (e) => {
    e.preventDefault();
    login(userInfo);
    navigate("/profile");
  };
  return (
    <div className="auto-form-container App login-form">
      <form>
        <label for="username">Username:</label>
        <br />
        <input
          type="text"
          name="name"
          value={userInfo.username}
          onChange={(e) =>
            setUserInfo({ ...userInfo, userName: e.target.value })
          }
        />
        <br />
        <label for="password">Password:</label>
        <br />
        <input
          type="password"
          name="password"
          value={userInfo.password}
          onChange={(e) =>
            setUserInfo({ ...userInfo, password: e.target.value })
          }
        />

        <br />
        <button onClick={(e) => handleLogin(e)}>Login</button>
      </form>
    </div>
  );
};

export default Login;
