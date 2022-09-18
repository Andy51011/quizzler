import React from "react";
import { Pomodoro } from "./Pomodoro";
import { Quiz } from "./Quiz";
import "./DisplayRight.css";
export const DisplayRight = ({ time, setTime, setTimerStart, timerStart }) => {
  return (
    <>
      <div className="right__container">
        <Pomodoro
          time={time}
          setTime={setTime}
          setTimerStart={setTimerStart}
          timerStart={timerStart}
        />
        <Quiz />
      </div>
    </>
  );
};
