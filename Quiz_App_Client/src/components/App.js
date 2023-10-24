import "../styles/App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

/** import components */
import Main from "./Main";
import Quiz from "./Quiz";
import Result from "./Result";
import { CheckUserExist } from "../helper/helper";
import LeaderBoard from "./LeaderBoard";
import Titlebar from "./Titlebar";

import Button from "@mui/material/Button";
import Scores from "./Scores";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import AuthDetails from "./AuthDetails";

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route exact path="/Login" element={<SignIn />}></Route>
        <Route exact path="/Signup" element={<SignUp />}></Route>
          <Route exact path="/" element={<CheckUserExist><Main /></CheckUserExist>}></Route>
          <Route
            exact
            path="/quiz"
            element={
              <CheckUserExist>
                <Quiz />
              </CheckUserExist>
            }
          ></Route>
          <Route
            exact
            path="/result"
            element={
              <CheckUserExist>
                <Result />
              </CheckUserExist>
            }
          ></Route>
          <Route
            exact
            path="/leaderboard"
            element={
              <div className="container">
                <div className="card">
                  <div className="titlebar">
                    <div className="title">LANGUAGE QUIZ</div>
                    <Button
                      variant="outlined"
                      component={Link}
                      to="/"
                      style={{ color: "#90CAF9", borderColor: "#90CAF9" }}
                    >
                      Go Back
                    </Button>
                  </div>
                  <div className="content">
                    <LeaderBoard />
                  </div>
                </div>
              </div>
            }
          ></Route>
          <Route exact path="/scores" element={<Scores />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
