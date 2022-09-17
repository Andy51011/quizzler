import React from "react";
import "./Pomodoro.css";
export const Pomodoro = () => {
  return (
    <>
      <section className="pomo__container">
        <h1>Pomodoro</h1>
        <div className="pomo__display">
          <button>Pomodoro</button>
          <button>Long Break</button>
          <button>Short Break</button>
        </div>
        <div id="pomo__timer">24:00</div>
        <button id="pomo__button">Start</button>
      </section>
    </>
  );
};
