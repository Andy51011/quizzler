export const timer = (timeMin, timeSec) => {
  // get minutes in seconds
  // get seconds
  // decrement minutes if seconds becomes 00 to 59
  // until mintues is 0 display something
  let timeInSeconds = timeSec;
  let timeInMinutes = timeMin;

  if (timeInMinutes < 0 && timeInSeconds < 0) {
    stopTimer();
  }

  if (timeInSeconds === 0) {
    timeInMinutes--;
    timeInSeconds = 59;
  } else {
    timeInSeconds--;
  }

  return {
    minutes: timeInMinutes,
    seconds: timeInSeconds,
  };
};
// clear interval to stop timer; this function stops the timer
const stopTimer = () => {
  clearInterval(timer);
};

// calls function every second
const startTimer = () => {
  setInterval(timer, 1000);
};
