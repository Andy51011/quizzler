import React from "react";
import "./Pomodoro.css";
import Button from "@mui/material/Button";

export const Pomodoro = () => {
  return (
    <>
      <section className="pomo__container">
        <h1 className="pomo__title">Pomodoro</h1>
        <div className="pomo__display">
          <Button variant="outlined">Pomodoro</Button>
          <Button variant="outlined">Long Break</Button>
          <Button variant="outlined">Short Break</Button>
        </div>
        <div id="pomo__timer">24:00</div>
        <Button className="pomo__startbtn" size="large" variant="outlined">
          Start
        </Button>
      </section>
    </>
  );
};
