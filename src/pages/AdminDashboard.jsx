import React, { useState } from "react";
import Calendar from "../components/Calendar";
import HostelStrength from "../components/HostelStrength";

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
      <div className="w-full border-black md:w-2/3">
        <div className="p-6 text-xl text-left bg-purple-400">
          <h1 className="font-semibold">Welcome XYZ SHARMA</h1>
          <h3 className="text-gray-300 ">Dashboard</h3>
        </div>
      </div>
      <div className="flex m-3 justify between">
        <button className="p-4 font-sans text-lg font-bold text-gray-600 bg-gray-200 rounded hover:bg-gray-300">
          Thing Speaks
        </button>
        <button className="p-4 font-sans text-lg font-bold text-gray-600 bg-gray-200 rounded hover:bg-gray-300">
          View Complaints
        </button>
        <button className="p-4 font-sans text-lg font-bold text-gray-600 bg-gray-200 rounded hover:bg-gray-300">
          Verify Attendance
        </button>
      </div>
      <div>
        <HostelStrength/>
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
