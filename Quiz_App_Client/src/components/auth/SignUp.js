import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { setUserId } from "../../redux/result_reducer";
import { useDispatch } from "react-redux";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch(setUserId(email));
        console.log(userCredential);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <div className="card">
        <div className="titlebar" style={{ padding: "2rem 4rem 2rem 4rem" }}>
          <div className="title">LANGUAGE QUIZ</div>
          <div className="loginCard">
            <p>Create a new Account</p>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ padding: "0.4rem" }}
            ></input>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ padding: "0.4rem" }}
            ></input>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Button
                to="/"
                onClick={signUp}
                variant="contained"
                style={{ color: "#101418", backgroundColor: "#90CAF9" }}
              >
                Sign Up
              </Button>
              <Button
                component={Link}
                to="/login"
                variant="outlined"
                style={{ color: "#f0f0f0c6", borderColor: "#f0f0f0c6" }}
              >
                Login?
              </Button>
            </div>
          </div>
          <Button
            variant="outlined"
            component={Link}
            to="/leaderboard"
            style={{ color: "#90CAF9", borderColor: "#90CAF9" }}
          >
            Leaderboard
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
