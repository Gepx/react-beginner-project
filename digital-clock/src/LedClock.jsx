import React, { useEffect, useState } from "react";

const LedClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex mx-auto items-center justify-center bg-gray-800">
      <div className="flex items-center justify-center min-h-screen max-w-screen-md">
        <div className="relative flex h-36 w-full rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-2">
          <div class="absolute -inset-2 rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 opacity-75 blur"></div>
          <div class="relative flex items-center justify-center h-full w-full bg-gray-800 rounded-md">
            <span className="text-[100px] font-bold m-10 w-full text-white text-center">
              {time.toLocaleTimeString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LedClock;
