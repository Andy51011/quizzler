import React from "react";
import { QuizzlerHeader } from "./components/header/QuizzlerHeader.jsx";
import { DisplayRight } from "./components/right-display/DisplayRight.jsx";
import { DisplayLeft } from "./components/left-display/DisplayLeft.jsx";

import "./App.css";

export const App = () => {
  return (
    <div className="main__container">
      <QuizzlerHeader />
      <section className="display__contents">
        <DisplayRight />
      </section>
    </div>
  );
};
