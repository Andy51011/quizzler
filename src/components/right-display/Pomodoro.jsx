import React from "react";
import "./Pomodoro.css";
import Button from "@mui/material/Button";
import { useState, useContext } from "react";
import { AppContext } from "../../ContextAPI/context.js";
export const Pomodoro = () => {
  const {
    time,
    timerStart,
    pickedOption,
    setPickedOption,
    setTime,
    setTimerStart,
  } = useContext(AppContext);

  const timeMinutes = time.minutes < 10 ? `0${time.minutes}` : time.minutes;
  const timeSeconds = time.seconds < 10 ? `0${time.seconds}` : time.seconds;

  const handleTime = (e) => {
    setPickedOption(e.target.value);
  };

  return (
    <>
      <section className="pomo__container">
        <h1 className="pomo__title">Pomodoro</h1>
        <div className="pomo__display">
          <Button variant="outlined" value="25" onClick={handleTime}>
            Pomodoro
          </Button>
          <Button variant="outlined" value="10" onClick={handleTime}>
            Long Break
          </Button>
          <Button variant="outlined" value="5" onClick={handleTime}>
            Short Break
          </Button>
        </div>
        <div id="pomo__timer">{`${timeMinutes}:${timeSeconds} `}</div>
        <Button className="pomo__startbtn" size="large" variant="outlined">
          Start
        </Button>
      </section>
    </>
  );
};
