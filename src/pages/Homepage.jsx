import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Calendar from "../components/Calendar";
import Login from "./Login";
import MessMenu from "../components/MessMenu";
import NextMeal from "../components/NextMeal";
import RaiseComplaint from "../components/RaiseComplaint";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

function Homepage() {
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
    <div className="md:flex md:flex-wrap mb-10">
      <div className="md:w-2/3 border-black w-full">
        <div className="text-left bg-purple-400 p-6 text-xl">
          <h1 className="font-semibold">Welcome XYZ SHARMA</h1>
          <h3 className="text-gray-300 ">Dashboard</h3>
        </div>
        <div className="w-full p-1 pr-0">
          <MessMenu />
        </div>
      </div>
      <div className="md:w-1/3 border-black w-full">
        <div className="w-full px-1">
          <Calendar />
        </div>
        <div className="mt-2 ml-1">
          <NextMeal />
        </div>

      </div>
    </div>
  );
}

export default Homepage;
