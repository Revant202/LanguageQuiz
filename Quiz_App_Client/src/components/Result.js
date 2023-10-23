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

  function onRestart() {
    dispatch(resetAllAction());
    dispatch(resetResultAction());
  }

  return (
    <div className="container">
      <div className="card">
        <div className="titlebar">
          {alignment === "My Scores" ? (
            <ResultTable userId={userId} />
          ) : (
            <LeaderBoard />
          )}

          <div style={{ display: "flex"}}>
            <ToggleButtonGroup
              color="primary"
              value={alignment}
              exclusive
              onChange={handleChange}
              aria-label="scores"
            >
              <ToggleButton
                value="My Scores"
                style={
                  alignment === "My Scores"
                    ? {
                        color: "#101418",
                        backgroundColor: "#90CAF9",
                      }
                    : {
                        borderColor: "#90CAF9",
                        color: "#90CAF9",
                      }
                }
              >
                My Scores
              </ToggleButton>
              <ToggleButton
                value="Leaderboard"
                style={
                  alignment === "Leaderboard"
                    ? {
                        color: "#101418",
                        backgroundColor: "#90CAF9",
                      }
                    : {
                        borderColor: "#90CAF9",
                        color: "#90CAF9",
                      }
                }
              >
                Leaderboard
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </div>

        <div className="content">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              color: " #cecece",
            //   margin: "0rem 4rem 0.57rem 0rem",
              justifyContent: "flex-end",
              alignItems:"flex-end",
              width:"100%"
            }}
          >
            <table>
              <tr>
                  <td style={{ color: "#90CAF9", maxWidth: "7rem",textAlign: "left" }}>
                    Username:
                  </td>
                <td>{userId || ""}</td>
              </tr>
              <tr>
                <td style={{ color: "#90CAF9", maxWidth: "7rem",textAlign: "left" }}>
                  Questions attempted:
                </td>
                <td>{attempts || 0}</td>
              </tr>
              <tr>
                <td style={{ color: "#90CAF9", maxWidth: "7rem",textAlign: "left" }}>
                  Your Score:
                </td>
                <td>
                  {earnPoints || 0} / {totalPoints || 0}
                </td>
              </tr>
              <tr>
                <td style={{ color: "#90CAF9", maxWidth: "7rem", textAlign: "left"}}>
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

            <Button
              component={Link}
              to="/"
              variant="contained"
              onClick={onRestart}
              style={{
                color: "#101418",
                backgroundColor: "#90CAF9",
                borderColor: "#90CAF9",
                padding: "0.76rem",
                marginBottom:"0.63rem",
                marginTop:"1.1rem"
              }}
            >
              Try Again
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
