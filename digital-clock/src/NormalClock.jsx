import React, { useEffect, useState } from "react";

const NormalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-linear-to-br from-sky-200 via-blue-400 to-indigo-900">
      <h1 className="text-[60px] font-bold uppercase bg-gradient-to-r from-pink-400 to-fuchsia-700 bg-clip-text text-transparent">
        Normal Digital Clock
      </h1>
      <div className="relative flex flex-col items-center justify-center">
        <div className="absolute flex items-center justify-center mt-4 border-2 border-gray-800 p-10 rounded-lg w-4xl h-[220px] blur-[2px]"></div>
        <h2 className="text-9xl m-10">{time.toLocaleTimeString()}</h2>
      </div>
    </div>
  );
};

export default NormalClock;
