import React from "react";
import { Pomodoro } from "./Pomodoro";
import { Quiz } from "./Quiz";
import "./DisplayRight.css";
export const DisplayRight = () => {
  return (
    <>
      <div className="right__container">
        <Pomodoro />
        <Quiz />
      </div>
    </>
  );
};
