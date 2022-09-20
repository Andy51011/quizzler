import React, { useState } from "react";
import { QuizzlerHeader } from "./components/Header/QuizzlerHeader.jsx";
import { DisplayRight } from "./components/right-display/DisplayRight.jsx";
import "./App.css";
import { AppContext } from "./ContextAPI/context";

const remainingTime = {
  seconds: 0,
  minutes: 0,
};

export const App = () => {
  const [time, setTime] = useState(remainingTime);
  const [timerStart, setTimerStart] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className="main__container">
      <AppContext.Provider
        value={{
          time,
          setTime,
          timerStart,
          setTimerStart,
          selectedOption,
          setSelectedOption,
        }}
      >
        <QuizzlerHeader />
        <section className="display__contents">
          <DisplayRight />
        </section>
      </AppContext.Provider>
    </div>
  );
};
