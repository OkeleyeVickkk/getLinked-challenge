import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const calculateTimeRemaining = () => {
    const now = new Date();
    const targetTime = new Date();
    targetTime.setHours(23, 59, 0, 0); // Set the target time to 11:59 PM

    const timeDifference = targetTime - now;

    if (timeDifference <= 0) {
      // The target time has already passed, so return 0 for hours, minutes, and seconds.
      return {
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return {
      hours,
      minutes,
      seconds,
    };
  };

  const [time, setTime] = useState(calculateTimeRemaining());

  useEffect(() => {
    const countdown = setInterval(() => {
      const updatedTime = calculateTimeRemaining();
      setTime(updatedTime);
    }, 1000);

    return () => {
      clearInterval(countdown);
    };
  }, []);

  const formatTime = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <h1 className="countdown-timer text-white flex items-center mt-7 gap-x-5">
      <div className="flex items-end animate__animated animate__fadeInUp animate__fast">
        <span className="timer-item tracking-tighter text-5xl font-medium">{formatTime(time.hours)}</span>
        <span className="text-sm inline mb-[2px] ml-[2px]">H</span>
      </div>
      <div className="flex items-end animate__animated animate__fadeInUp animate__fast">
        <span className="timer-item tracking-tighter text-5xl font-medium">{formatTime(time.minutes)}</span>
        <span className="text-sm inline mb-[2px] ml-[2px]">M</span>
      </div>
      <div className="flex items-end animate__animated animate__fadeInUp	animate__slow">
        <span className="timer-item tracking-tighter text-5xl font-medium">{formatTime(time.seconds)}</span>
        <span className="text-sm inline mb-[2px] ml-[2px]">S</span>
      </div>
    </h1>
  );
};

export default CountdownTimer;
