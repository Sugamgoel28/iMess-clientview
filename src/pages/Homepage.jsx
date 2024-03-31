import Navbar from "../components/Navbar";
import React, { useState } from "react";
import RaiseComplaint from "../components/RaiseComplaint";
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';

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
    <div>
      <Navbar />

      <div>
        <button
          className="p-4 font-sans text-lg font-bold text-white bg-blue-500 rounded hover:bg-blue-600"
          onClick={handleOpenForm}
        >
          <ErrorOutlineOutlinedIcon fontSize="large" className="pb-1"/> Raise Complaint
        </button>
        {showForm && (
          <RaiseComplaint
            onCancel={handleCloseForm}
            onSubmit={handleSubmitForm}
          />
        )}
      </div>
    </div>
  );
}

export default Homepage;
