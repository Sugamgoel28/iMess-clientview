import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Calendar from "../components/Calendar";
import Login from "./Login";
import MessMenu from "../components/MessMenu";
import NextMeal from "../components/NextMeal";
import RaiseComplaint from "../components/RaiseComplaint";

function Homepage() {
  const [complaintPage, setComplaintPage] = useState(false);
  return (
    <div className="flex">
      <div className="w-2/3 border-black">
        <div className="text-left bg-purple-400 p-6 text-xl">
          <h1 className="font-semibold">Welcome XYZ SHARMA</h1>
          <h3 className=" text-gray-300">Dashboard</h3>
        </div>
        <div className="w-full p-1 pr-0">
          <MessMenu />
        </div>
      </div>
      <div className="w-1/3 border-black">
        <div className="w-full px-1">
          <Calendar />
        </div>
        <div>
          <NextMeal />
        </div>

        <div className="">
          <button onClick={() => setComplaintPage(true)}>
            Raise Complaint
          </button>
        </div>
        {complaintPage && (
          <RaiseComplaint
            onCancel={() => setComplaintPage(false)}
            onSubmit={(data) => console.log(data)}
          />
        )}
      </div>
    </div>
  );
}

export default Homepage;
