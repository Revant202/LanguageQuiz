import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setUserId } from "../redux/result_reducer";
import { setLanguage } from "../hooks/setLanguage";
import "../styles/Main.css";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Titlebar from "./Titlebar";

export default function Main() {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);
  const handleSelect = (event) => {
    dispatch(setLanguage(event.target.value));
  };

  function startQuiz() {
    if (inputRef.current?.value) {
      dispatch(setUserId(inputRef.current?.value));
    }
  }

  return (
    <div className="container">
      <div className="card">
        <Titlebar/>
        <div className="content">
          <div className="info">
            <ol>
              <li>You will be asked 10 questions one after another.</li>
              <li>10 points is awarded for the correct answer.</li>
              <li>
                Each question has three options. You can choose only one
                options.
              </li>
              <li>You can review and change answers before the quiz finish.</li>
              <li>The result will be declared at the end of the quiz.</li>
            </ol>
          </div>
          <div className="sidebar">
            <div className="buttons">
              <input
                ref={inputRef}
                className="textInput"
                type="text"
                placeholder="Username"
              />
              <input
                // ref={inputRef}
                className="textInput"
                type="password"
                placeholder="Password"
              />
              <Button variant="outlined" component={Link} to="/quiz" style={{ color: "#90CAF9",borderColor: "#90CAF9" }}>
                New User ?
              </Button>
            </div>

            <div className="buttons">
              <FormControl
                sx={{
                  marginTop: 2,
                  "& .MuiSvgIcon-root": {
                    color: "white",
                  },
                   
                }}
              >
                <InputLabel id="select-helper-label">Language</InputLabel>
                <Select
                  labelId="select-helper-label"
                  id="select-helper"
                  value={language}
                  label="Language"
                  onChange={handleSelect}
                >
                  <MenuItem
                    value={"english"}
                    sx={{
                      height: 40,
                    }}
                  >
                    English
                  </MenuItem>
                  <MenuItem
                    value={"german"}
                    sx={{
                      height: 40,
                    }}
                  >
                    German
                  </MenuItem>
                  <MenuItem
                    value={"french"}
                    sx={{
                      height: 40,
                    }}
                  >
                    French
                  </MenuItem>
                </Select>
                <FormHelperText id="select-helper-text">
                  Select the language
                </FormHelperText>
              </FormControl>
              <Button
                component={Link}
                to="/quiz"
                variant="contained"
                onClick={startQuiz}
                style={{ color: "#101418",backgroundColor:"#90CAF9" }}
              >
                Start Quiz
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
