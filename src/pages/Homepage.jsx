import React from "react";
import Navbar from "../components/Navbar";
import Calendar from "../components/Calendar";
import Login from "./Login";

function Homepage() {
  return (
    <div className="flex h-screen">
      <div className="w-2/3 border-black">
        <div className="text-left bg-purple-400 p-6 text-xl">
          <h1 className="font-semibold">Welcome XYZ SHARMA</h1>
          <h3 className=" text-gray-300">Dashboard</h3>
        </div>
      </div>
      <div className="w-1/3 border-black">
        <div className="w-full">
          <Calendar />
        </div>

      </div>
    </div>
  );
}

export default Homepage;
