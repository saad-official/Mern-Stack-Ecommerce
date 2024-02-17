import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/apiCalls";
import { useHistory } from "react-router-dom";
const Login = () => {
  const user = useSelector((state) => state.user.currentUser);
  let history = useHistory();
  const [flag, setFlag] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
    if (user?.isAdmin === true) {
      window.location.reload();
    } else {
      console.log("dd", user);
      setFlag(true);
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <input
        style={{ padding: "10px", marginBottom: "20px" }}
        type="text"
        placeholder="username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        style={{ padding: "10px", marginBottom: "20px" }}
        type="password"
        placeholder="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button
        onClick={handleSubmit}
        style={{ padding: "10px", width: "100px" }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
