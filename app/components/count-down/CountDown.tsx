import React, { useEffect, useState } from "react";

interface CountDownProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountDown({
  days,
  hours,
  minutes,
  seconds,
}: CountDownProps) {
  const [time, setTime] = useState(
    days * 86400 + hours * 3600 + minutes * 60 + seconds
  );

  useEffect(() => {
    let timer = setInterval(() => {
      setTime((time) => {
        if (time === 0) {
          clearInterval(timer);
          return 0;
        } else return time - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (value: number) => {
    return value.toString().padStart(2, "0");
  };

  const formattedDays = formatTime(Math.floor(time / 86400));
  const formattedHours = formatTime(Math.floor((time % 86400) / 3600));
  const formattedMinutes = formatTime(Math.floor((time % 3600) / 60));
  const formattedSeconds = formatTime(time % 60);

  return (
    <div className="count-down flex flex-row gap-1 md:gap-2 items-center">
      <div className="flex flex-col items-center bg-red-500 rounded-lg w-12 py-1">
        <span className="text-sm md:text-xl text-white">{formattedDays}</span>
        <span className="text-xs text-white">Ngày</span>
      </div>
      <span>:</span>
      <div className="flex flex-col items-center bg-red-500 rounded-lg w-12 py-1">
        <span className="text-sm md:text-xl text-white">{formattedHours}</span>
        <span className="text-xs text-white">Giờ</span>
      </div>
      <span>:</span>
      <div className="flex flex-col items-center bg-red-500  rounded-lg w-12 py-1">
        <span className="text-sm md:text-xl text-white">
          {formattedMinutes}
        </span>
        <span className="text-xs text-white">Phút</span>
      </div>
      <span>:</span>
      <div className="flex flex-col items-center bg-red-500 rounded-lg w-12 py-1">
        <span className="text-sm md:text-xl text-white">
          {formattedSeconds}
        </span>
        <span className="text-xs text-white">Giây</span>
      </div>
    </div>
  );
}
