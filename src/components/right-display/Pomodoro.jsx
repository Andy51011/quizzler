import React from "react";
import "./Pomodoro.css";
import Button from "@mui/material/Button";
import { useEffect } from "react";
import { timer } from "./timerUtil.js";
export const Pomodoro = ({ time, setTime, setTimerStart, timerStart }) => {
  const timeMinutes = time.minutes < 10 ? `0${time.minutes}` : time.minutes;
  const timeSeconds = time.seconds < 10 ? `0${time.seconds}` : time.seconds;

  const handleTime = (e) => {
    if (time.minutes === 0 && time.seconds === 0) {
      let timePicked = e.target.value;
      setTime({
        ...time,
        minutes: timePicked,
      });
      setTimerStart(true);
    } else {
      setTime(timer(time.minutes, time.seconds));
    }
  };

  useEffect(() => {
    if (timerStart) {
      let timerInterval = setInterval(() => {
        handleTime();
      }, 1000);
      return () => clearInterval(timerInterval);
    }
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
        <div id="pomo__timer">
          {timeMinutes}:{timeSeconds}
        </div>
        <Button className="pomo__startbtn" size="large" variant="outlined">
          Start
        </Button>
      </section>
    </>
  );
};
