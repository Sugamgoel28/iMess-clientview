// UserProfilePage.jsx
import React, { useState } from "react";
import ProfilePhoto from "../components/ProfilePhoto";
import PersonalDetail from "../components/PersonalDetail";
import Attendance from "../components/Attendance";
import AttendanceTable from "../components/AttendanceTable";
import RaiseComplaint from "../components/RaiseComplaint";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartSimple,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";

const UserProfilePage = () => {
  const [complaintPage, setComplaintPage] = useState(false);
  const user = {
    name: "John Doe",
    hall: "Satish Dhawan Hall of Residence",
    RollNumber: "123AB0123",
    attendanceData: [
      {
        month: "March 2024",
        daysTakenFood: 20,
        daysNotTakenFood: 10,
        totalDays: 30,
      },
      {
        month: "February 2024",
        daysTakenFood: 15,
        daysNotTakenFood: 5,
        totalDays: 28,
      },
      {
        month: "January 2024",
        daysTakenFood: 18,
        daysNotTakenFood: 12,
        totalDays: 31,
      },
      {
        month: "December 2023",
        daysTakenFood: 22,
        daysNotTakenFood: 8,
        totalDays: 31,
      },
      {
        month: "November 2023",
        daysTakenFood: 25,
        daysNotTakenFood: 5,
        totalDays: 30,
      },
      {
        month: "October 2023",
        daysTakenFood: 19,
        daysNotTakenFood: 11,
        totalDays: 31,
      },
    ],
  };

  return (
    <div className="flex justify-center bg-gray-100">
      <div className="flex flex-row w-3/4 min-h-screen m-5 bg-white border-2 border-gray-300 rounded-lg h-3/4 justify-evenly ">
        <div className="flex items-center bg-white">
          <div className="items-center">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt={`${user.name}'s profile photo`}
              className="w-56 m-2 border border-gray-600 rounded-full"
            />
            <div className="m-2">
              <h1 className="text-2xl font-bold">{user.name}</h1>
              <p className="text-gray-600">{user.RollNumber}</p>
              <p className="text-gray-600">{user.hall}</p>
            </div>
            <div className="">
              <button className="p-4 mb-2 font-sans text-lg font-bold text-white bg-blue-500 rounded hover:bg-blue-600">
                <a href="https://thingspeak.com/channels/2449450">
                  {<FontAwesomeIcon icon={faChartSimple} />} ThinkSpeak
                </a>
              </button>
            </div>
            <div className="">
              <button
                className="p-4 font-sans text-lg font-bold text-white bg-blue-500 rounded hover:bg-blue-600"
                onClick={() => setComplaintPage(true)}
              >
                {<FontAwesomeIcon icon={faCircleExclamation} />} Raise Complaint
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
        <div className="mt-2 bg-white">
          <Attendance attendanceData={user.attendanceData} />
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
