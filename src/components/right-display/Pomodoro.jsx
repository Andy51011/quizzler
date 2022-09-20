import React from "react";
import "./Pomodoro.css";
import Button from "@mui/material/Button";
import { useContext, useEffect } from "react";
import { AppContext } from "../../ContextAPI/context.js";
import { timer } from "./timerUtil.js";
import alarm from "../Audio/alarm.wav";
export const Pomodoro = () => {
  const {
    time,
    setTime,
    timerStart,
    setTimerStart,
    selectedOption,
    setSelectedOption,
  } = useContext(AppContext);
  //const alarm = new Audio(alarm);
  const timeMinutes = time.minutes < 10 ? `0${time.minutes}` : time.minutes;
  const timeSeconds = time.seconds < 10 ? `0${time.seconds}` : time.seconds;

  const handleSelection = (e) => {
    let selectedVal = e.target.value;
    console.log(selectedVal);
    setTime({
      ...time,
      minutes:
        selectedVal === "pomo" ? 25 : selectedVal === "long-break" ? 15 : 0,
      seconds: 5,
    });
    if (timerStart) {
      setTimerStart(false);
    }
  };

  const handleTime = (e) => {
    if (timerStart) {
      let countdownTime = timer(time.minutes, time.seconds);
      setTime({
        ...time,
        minutes: countdownTime.minutes,
        seconds: countdownTime.seconds,
      });
    }
  };

  // start and pause time
  const handleStart = () => {
    setTimerStart(true);
    if (timerStart) {
      let countdownTime = timer(time.minutes, time.seconds);
      setTime({
        ...time,
        minutes: countdownTime.minutes,
        seconds: countdownTime.seconds,
      });
    }

    if (time.seconds === 0) {
      setTimerStart(false);
      alarm.play();
    }
  };

  const handleStop = () => {
    setTimerStart(false);
  };

  useEffect(() => {
    let intervalId = setInterval(() => {
      if (timerStart) {
        handleStart();
      }
    }, 1000);
    return () => clearInterval(intervalId);
  });

  return (
    <>
      <section className="pomo__container">
        <h1 className="pomo__title">Pomodoro</h1>
        <div className="pomo__display">
          <Button variant="outlined" value="pomo" onClick={handleSelection}>
            Pomodoro
          </Button>
          <Button
            variant="outlined"
            value="long-break"
            onClick={handleSelection}
          >
            Long Break
          </Button>
          <Button
            variant="outlined"
            value="short-break"
            onClick={handleSelection}
          >
            Short Break
          </Button>
        </div>
        <div id="pomo__timer">{`${timeMinutes}:${timeSeconds} `}</div>
        <div>
          {!timerStart ? (
            <Button
              className="pomo__startbtn"
              size="large"
              variant="outlined"
              onClick={handleStart}
            >
              Start
            </Button>
          ) : (
            <Button
              className="pomo__resetbtn"
              size="large"
              variant="outlined"
              onClick={handleStop}
            >
              Stop
            </Button>
          )}
          <Button className="pomo__resetbtn" size="large" variant="outlined">
            Reset
          </Button>
        </div>
      </section>
    </>
  );
};
