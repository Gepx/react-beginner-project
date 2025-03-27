import React, { useEffect, useState } from "react";

const AnalogClock = () => {
  const [time, setTime] = useState(() => {
    const now = new Date();
    // Set to Indonesia timezone (UTC+7)
    const offset = 7; // WIB (Western Indonesian Time)
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    return new Date(utc + 3600000 * offset);
  });
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      // Set to Indonesia timezone (UTC+7)
      const offset = 7; // WIB (Western Indonesian Time)
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      setTime(new Date(utc + 3600000 * offset));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Calculate degrees for clock hands
  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  // Each second = 6 degrees (360 / 60)
  // Each minute = 6 degrees (360 / 60)
  // Each hour = 30 degrees (360 / 12)
  const secondsDegrees = seconds * 6;
  const minutesDegrees = minutes * 6 + seconds * 0.1; // Add small movement from seconds
  const hoursDegrees = hours * 30 + minutes * 0.5; // Add small movement from minutes

  // Add time display for debugging
  const timeString = time.toLocaleTimeString("en-US", {
    timeZone: "Asia/Jakarta",
    hour12: false,
  });

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900" : "bg-gray-100"
      }`}>
      <h1
        className={`text-4xl font-light tracking-widest mb-12 ${
          isDarkMode ? "text-gray-300" : "text-gray-700"
        }`}>
        ANALOG CLOCK
      </h1>

      <div
        className={`relative w-[300px] h-[300px] rounded-full ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        } shadow-xl`}>
        {/* Clock marks */}
        {[...Array(12)].map((_, index) => (
          <div
            key={index}
            className="absolute w-full h-full"
            style={{
              transform: `rotate(${index * 30}deg)`,
            }}>
            <div
              className={`absolute left-1/2 -translate-x-1/2 text-xl font-light ${
                index % 3 === 0 ? "" : "text-sm"
              } ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
              style={{
                transform: `rotate(${-index * 30}deg)`,
                top: "10px",
              }}>
              {index === 0 ? "12" : index}
            </div>
          </div>
        ))}

        {/* Clock hands */}
        <div
          className={`absolute w-1.5 h-[100px] ${
            isDarkMode ? "bg-gray-300" : "bg-gray-700"
          } origin-bottom left-1/2 bottom-1/2 rounded-full transition-colors duration-300`}
          style={{
            transform: `rotate(${hoursDegrees}deg)`,
          }}
        />
        <div
          className={`absolute w-1 h-[120px] ${
            isDarkMode ? "bg-gray-300" : "bg-gray-700"
          } origin-bottom left-1/2 bottom-1/2 rounded-full transition-colors duration-300`}
          style={{
            transform: `rotate(${minutesDegrees}deg)`,
          }}
        />
        <div
          className="absolute w-0.5 h-[140px] bg-red-500 origin-bottom left-1/2 bottom-1/2 rounded-full"
          style={{
            transform: `rotate(${secondsDegrees}deg)`,
          }}
        />

        {/* Center dot */}
        <div
          className={`absolute w-3 h-3 ${
            isDarkMode ? "bg-gray-300" : "bg-gray-700"
          } rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-colors duration-300`}
        />
      </div>

      {/* Time display (WIB) */}
      <div
        className={`mt-4 text-lg font-light ${
          isDarkMode ? "text-gray-300" : "text-gray-700"
        }`}>
        {timeString} WIB
      </div>

      {/* Dark mode toggle */}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className={`mt-8 px-6 py-2 rounded-md text-sm font-light tracking-wider transition-colors duration-300
          ${
            isDarkMode
              ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}>
        {isDarkMode ? "LIGHT MODE" : "DARK MODE"}
      </button>
    </div>
  );
};

export default AnalogClock;
