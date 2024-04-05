import React, { useState } from "react";
import Calendar from "../components/Calendar";
import HostelStrength from "../components/HostelStrength";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";

function AdminDashboard() {
  const [showForm, setShowForm] = useState(false);

  const handleOpenForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleSubmitForm = (formData) => {
    // Handle form submission logic here
    console.log(formData);
    setShowForm(false); // Close the form after submission
  };
  return (
    <div className="mb-10 md:flex md:flex-wrap">
      <div className="w-full p-6 text-xl text-left bg-purple-400">
        <h1 className="font-semibold">Welcome ADMIN</h1>
        <h3 className="text-gray-300 ">Dashboard</h3>
      </div>
      <div className="w-full border-black md:w-2/3">
        <div className="flex m-3 justify between">
          <button className="p-4 font-sans text-lg font-bold text-gray-600 bg-gray-200 rounded hover:bg-gray-300 mx-1">
            <a href="https://thingspeak.com/channels/2449450">
              {<FontAwesomeIcon icon={faChartSimple} />} ThinkSpeak
            </a>
          </button>
          <Link to="/admin/complaint-portal">
            <button className="p-4 font-sans text-lg font-bold text-gray-600 bg-gray-200 rounded hover:bg-gray-300 mx-1">
              View Complaints
            </button>
          </Link>
          <Link to="/admin/attendance">
            <button className="p-4 font-sans text-lg font-bold text-gray-600 bg-gray-200 rounded hover:bg-gray-300 mx-1">
              Verify Attendance
            </button>
          </Link>
        </div>

        <div>
          <HostelStrength />
        </div>
      </div>

      <div className="w-full border-black md:w-1/3">
        <div className="w-full px-1">
          <Calendar />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
