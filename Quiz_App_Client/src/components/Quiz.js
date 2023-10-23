import React, { useEffect, useState } from "react";
import Questions from "./Questions";

import { MoveNextQuestion, MovePrevQuestion } from "../hooks/FetchQuestion";
import { PushAnswer } from "../hooks/setResult";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

/** redux store import */
import { useSelector, useDispatch } from "react-redux";
import { Navigate, Link } from "react-router-dom";

export default function Quiz() {
  const [check, setChecked] = useState(undefined);

  const result = useSelector((state) => state.result.result);
  const language = useSelector((state) => state.language.language);
  const { queue, trace } = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  function onEndQuiz() {
    dispatch(PushAnswer(check));
  }

  /*next button event handler */
  function onNext() {
    if (trace < queue.length) {
      /** increase the trace value by one using MoveNextAction */
      dispatch(MoveNextQuestion());

      /** insert a new result in the array.  */
      if (result.length <= trace) {
        dispatch(PushAnswer(check));
      }
    }

    /** reset the value of the checked variable */
    setChecked(undefined);
  }

  /** Prev button event handler */
  function onPrev() {
    if (trace > 0) {
      /** decrease the trace value by one using MovePrevQuestion */
      dispatch(MovePrevQuestion());
    }
  }

  function onChecked(check) {
    setChecked(check);
  }

  /** finished exam after the last question */
  if (result.length && result.length >= queue.length) {
    return <Navigate to="/result" replace={true}></Navigate>;
  }

  return (
    <div className="container">
      <div className="card">
        <div className="titlebar">
          <div className="title">LANGUAGE QUIZ</div>
          <Button
            variant="outlined"
            onClick={onEndQuiz}
            to="/result"
            style={{ color: "#90CAF9", borderColor: "#90CAF9" }}
          >
            END QUIZ
          </Button>
        </div>
        <div className="content">
          <div className="info">
            <Questions onChecked={onChecked} language={language} />
          </div>
          <div className="sidebar">
            <div style={{ alignSelf: "flex-end" }}>
              {trace > 0 ? (
                <Button
                  variant="outlined"
                  style={{ color: "#90CAF9", borderColor: "#90CAF9" }}
                  onClick={onPrev}
                  size="large"
                >
                  Prev
                </Button>
              ) : (
                <div></div>
              )}
              <Button
                onClick={onNext}
                variant="contained"
                style={{ color: "#101418", backgroundColor: "#90CAF9" }}
                size="large"
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
