import { useState, useEffect } from "react";

function DateandTime() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="font-semibold">
      <span className="mr-2  transition duration-300 ease-in-out cursor-pointer hover:text-blue-400">
        {currentDateTime.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </span>
      <span className="p-2 mx-2 transition duration-300 ease-in-out cursor-pointer hover:text-blue-400">
        {
          [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ][currentDateTime.getDay()]
        }
      </span>
      <span className="p-2 mx-1 transition duration-300 ease-in-out border cursor-pointer border-black hover:border-blue-400 hover:text-blue-400">
        {currentDateTime.getDate()}
      </span>
      <span className="p-2 mx-1 transition duration-300 ease-in-out border cursor-pointer border-black hover:border-blue-400 hover:text-blue-400">
        {currentDateTime.getMonth() + 1}
      </span>
      <span className="p-2 mx-1 transition duration-300 ease-in-out border cursor-pointer border-black hover:border-blue-400 hover:text-blue-400">
        {currentDateTime.getFullYear()}
      </span>
    </div>
  );
}
export default DateandTime;
