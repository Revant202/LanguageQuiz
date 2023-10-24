import React from "react";
import "../styles/Result.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ResultTable from "./ResultTable";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Button from "@mui/material/Button";
import LeaderBoard from "./LeaderBoard";

export default function Scores() {
  const [alignment, setAlignment] = React.useState("My Scores");
  const auth = useSelector(state => state.result.userId)
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  /** store user result */

  return (
    <div className="container">
      <div className="card">
        <div className="titlebar">
          {alignment === "My Scores" ? (
            <ResultTable userId={auth}/>
          ) : (
            <LeaderBoard />
          )}

          <div style={{ display: "flex", justifyContent: "space-between" }}>
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
            <Button
              variant="outlined"
              component={Link}
              to="/"
              style={{ color: "#90CAF9", borderColor: "#90CAF9" }}
            >
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
