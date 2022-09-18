import React, { useState, useEffect } from "react";
import { QuizzlerHeader } from "./components/header/QuizzlerHeader.jsx";
import { DisplayRight } from "./components/right-display/DisplayRight.jsx";
import { DisplayLeft } from "./components/left-display/DisplayLeft.jsx";
import "./App.css";
import { timer } from "./components/right-display/timerUtil";

const remainingTime = {
  seconds: 0,
  minutes: 0,
};

export const App = () => {
  const [time, setTime] = useState(remainingTime);
  const [timerStart, setTimerStart] = useState(false);

  return (
    <div className="main__container">
      <QuizzlerHeader />
      <section className="display__contents">
        <DisplayRight
          time={{ ...time }}
          setTime={setTime}
          timerStart={timerStart}
          setTimerStart={setTimerStart}
        />
      </section>
    </div>
  );
};
