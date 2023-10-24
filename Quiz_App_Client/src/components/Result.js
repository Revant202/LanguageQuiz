import React from "react";
import "../styles/Result.css";
import { Link } from "react-router-dom";

import ResultTable from "./ResultTable";
import { useDispatch, useSelector } from "react-redux";
import {
  attempts_Number,
  earnPoints_Number,
  flagResult,
} from "../helper/helper";

/** import actions  */
import { resetAllAction } from "../redux/question_reducer";
import { resetResultAction } from "../redux/result_reducer";
import { resetUser } from "../redux/result_reducer";
import { usePublishResult } from "../hooks/setResult";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Button from "@mui/material/Button";
import LeaderBoard from "./LeaderBoard";

export default function Result() {
  const dispatch = useDispatch();
  const {
    questions: { queue, answers },
    result: { result, userId },
  } = useSelector((state) => state);

  const totalPoints = queue.length * 10;
  const attempts = attempts_Number(result);
  const earnPoints = earnPoints_Number(result, answers, 10);
  const flag = flagResult(totalPoints, earnPoints);
  const [alignment, setAlignment] = React.useState("My Scores");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  /** store user result */
  usePublishResult({
    result,
    username: userId,
    attempts,
    points: earnPoints,
    achived: flag ? "Passed" : "Failed",
  });

  function onLogout() {
    dispatch(resetAllAction());
    dispatch(resetResultAction());
    dispatch(resetUser());
  }
  function onRestart() {
    dispatch(resetAllAction());
    dispatch(resetResultAction());
  }

  return (
    <div className="container">
      <div className="card">
        <div className="titlebar">
          <ResultTable userId={userId} />
          <h3 style={{textAlign:"center"}}>SCOREBOARD</h3>
        </div>

        <div className="content">
          <div
            className="sidebar"
            style={{
              color: " #cecece",
            }}
          >
            <table>
              <tr>
                <td
                  style={{
                    color: "#90CAF9",
                    maxWidth: "7rem",
                    textAlign: "left",
                  }}
                >
                  Username:
                </td>
                <td>{userId || ""}</td>
              </tr>
              <tr>
                <td
                  style={{
                    color: "#90CAF9",
                    maxWidth: "7rem",
                    textAlign: "left",
                  }}
                >
                  Questions attempted:
                </td>
                <td>{attempts || 0}</td>
              </tr>
              <tr>
                <td
                  style={{
                    color: "#90CAF9",
                    maxWidth: "7rem",
                    textAlign: "left",
                  }}
                >
                  Your Score:
                </td>
                <td>
                  {earnPoints || 0} / {totalPoints || 0}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    color: "#90CAF9",
                    maxWidth: "7rem",
                    textAlign: "left",
                  }}
                >
                  You Result:
                </td>
                <td
                  style={{
                    fontWeight: "bolder",
                    color: `${flag ? "#2aff95" : "#ff2a66"}`,
                  }}
                >
                  {flag ? "Passed" : "Failed"}
                </td>
              </tr>
            </table>
            <div className="buttons">
              <Button
                component={Link}
                to="/"
                variant="contained"
                onClick={onRestart}
                style={{ color: "#101418", backgroundColor: "#90CAF9" }}
              >
                Exit
              </Button>
              <Button
                component={Link}
                to="/"
                variant="outlined"
                onClick={onLogout}
                style={{ color: "#90CAF9", borderColor: "#90CAF9" }}
              >
                Logout
              </Button>
                {/* <Button
                  variant="outlined"
                  component={Link}
                  to="/scores"
                  style={{ color: "#90CAF9", borderColor: "#90CAF9" }}
                  onClick={onRestart}
                >
                  Past Scores
                </Button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
