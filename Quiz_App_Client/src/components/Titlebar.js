import React from 'react'
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
function Titlebar() {
  return (
    <div className="titlebar">
          <div className="title">LANGUAGE QUIZ</div>
          <Button variant="outlined" component={Link} to="/leaderboard" style={{ color: "#90CAF9",borderColor: "#90CAF9" }}>
            Leaderboard
          </Button>   
        </div>
  )
}

export default Titlebar