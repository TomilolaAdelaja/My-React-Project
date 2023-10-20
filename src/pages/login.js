import React, { useState } from "react";
// import { useAuth } from "../components/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = ({setUser}) => {
  // const { login } = useAuth();
  // const [userInfo, setUserInfo] = useState({
  //   userName: "",
  //   password: "",
  // });
  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   setUser(userInfo);
  //   navigate("/profile");
  // };
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !password) return;
    setUser({ name: name, password: password });
    navigate('/dashboard');
  };

  return (
    <div className="auto-form-container App login-form">
      <form>
        <label for="username">Username:</label>
        <br />
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />
        <br />
        <label for="password">Password:</label>
        <br />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <br />
        <button onClick={(e) => handleSubmit(e)}>Login</button>
      </form>
    </div>
  );
};

export default Login;
