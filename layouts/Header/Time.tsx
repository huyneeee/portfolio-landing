"use client";
import React, { useEffect, useState } from "react";

const getZeroNumber = (num: number) => (num < 10 ? `0${num}` : num);

const Time = () => {
  const [time, setTime] = useState("00:00 AM");

  useEffect(() => {
    const getTime = () => {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const isPM = hours >= 12;
      setTime(
        `${getZeroNumber(isPM ? hours - 12 : hours)}:${getZeroNumber(minutes)} ${isPM ? "PM" : "AM"}`
      );
    };

    getTime();
    const intGetTime = setInterval(() => getTime(), 1000);
    return () => {
      clearInterval(intGetTime);
    };
  }, []);

  return (
    <div className="absolute top-[-10px] w-max rounded-[30px] border border-main-gray px-[16px] py-[12px] text-base text-main-white max-lg:leading-3 lg:top-[-25px]">
      {time}
    </div>
  );
};

export default Time;
