import { useState, useEffect } from "react";

function useCountdownTimer(endDate) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const timeDiff = endDate.getTime() - now.getTime();

      if (timeDiff > 0) {
        const remainingDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const remainingHours = Math.floor(
          (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const remainingMinutes = Math.floor(
          (timeDiff % (1000 * 60 * 60)) / (1000 * 60)
        );
        const remainingSeconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        setDays(remainingDays);
        setHours(remainingHours);
        setMinutes(remainingMinutes);
        setSeconds(remainingSeconds);
      } else {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [endDate]);

  return { days, hours, minutes, seconds };
}

export default useCountdownTimer;
