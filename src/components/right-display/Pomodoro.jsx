import React from "react";
import "./Pomodoro.css";
import Button from "@mui/material/Button";
import { useState, useContext, useEffect } from "react";
import { AppContext } from "../../ContextAPI/context.js";
import { timer } from "./timerUtil.js";
export const Pomodoro = () => {
  const {
    time,
    setTime,
    timerStart,
    pickedOption,
    setPickedOption,
    setTimerStart,
  } = useContext(AppContext);

  const timeMinutes = time.minutes < 10 ? `0${time.minutes}` : time.minutes;
  const timeSeconds = time.seconds < 10 ? `0${time.seconds}` : time.seconds;

  const handleTime = (e) => {
    console.log(timerStart);
    if (timerStart === false) {
      setTimerStart(true);
      setTime({
        ...time,
        minutes: e.target.value,
        seconds: time.seconds,
      });
    } else {
      let countdownTime = timer(time.minutes, time.seconds);
      setTime({
        ...time,
        minutes: countdownTime.minutes,
        seconds: countdownTime.seconds,
      });
    }
  };

  useEffect(() => {
    let intervalId = setInterval(() => {
      if (timerStart) {
        handleTime();
      }
    }, 1000);
    return () => clearInterval(intervalId);
  });

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
