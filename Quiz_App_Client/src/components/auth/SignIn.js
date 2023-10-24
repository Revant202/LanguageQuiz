import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import Button from "@mui/material/Button";
import { setUserId } from "../../redux/result_reducer";
import { useDispatch } from "react-redux";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
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
        <div className="titlebar" style={{padding:"2rem 4rem 2rem 4rem"}}>
          <div className="title">LANGUAGE QUIZ</div>
          <div className="loginCard">
            <p>Log In to your Account</p>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{padding:"0.4rem"}}
            ></input>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{padding:"0.4rem"}}
            ></input>
            <div style={{display:"flex",justifyContent:"space-between",width:"100%"}}>
              <Button
                onClick={signIn}
                variant="contained"
                style={{ color: "#101418", backgroundColor: "#90CAF9" }}
              >
                Login
              </Button>
              <Button
                component={Link}
                to="/signup"
                variant="outlined"
                style={{ color: "#f0f0f0c6", borderColor: "#f0f0f0c6" }}
              >
                Signup?
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

export default SignIn;
