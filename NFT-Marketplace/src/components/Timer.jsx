import { useState, useEffect } from 'react';

export const Timer = () => {
  const [time, setTime] = useState({
    hours: 59,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const countdown = setInterval(() => {
      setTime(prevTime => {
        const newTime = { ...prevTime };

        if (newTime.seconds > 0) {
          newTime.seconds -= 1;
        } else {
          newTime.seconds = 59;
          if (newTime.minutes > 0) {
            newTime.minutes -= 1;
          } else {
            newTime.minutes = 59;
            if (newTime.hours > 0) {
              newTime.hours -= 1;
            } else {
              clearInterval(countdown);
            }
          }
        }

        return newTime;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <div className="flex text-white text-[2.375rem]">
      <div className="flex flex-col items-center">
        <span className="font-bold">{String(time.hours)}</span>
        <span className="text-xs font-normal">Hours</span>
      </div>
      <span className="ml-4 text-[2.375rem]">:</span>
      <div className="flex flex-col items-center">
        <span className="font-bold">{String(time.minutes)}</span>
        <span className="text-xs font-normal">Minutes</span>
      </div>
      <span className="ml-4 text-[2.375rem]">:</span>
      <div className="flex flex-col items-center">
        <span className="font-bold">{String(time.seconds)}</span>
        <span className="text-xs font-normal">Seconds</span>
      </div>
    </div>
  );
};
