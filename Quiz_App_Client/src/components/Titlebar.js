import React from 'react'
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";


function Titlebar() {
  
  return (
    <div className="titlebar">
          <div className="title">LANGUAGE QUIZ</div>
          <Button variant="outlined" component={Link} to="/scores" style={{ color: "#90CAF9",borderColor: "#90CAF9" }}>
            View Scores
          </Button>   
        </div>
  )
}

export default Titlebar