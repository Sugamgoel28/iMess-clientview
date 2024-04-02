import React, { useState } from "react";

const RaiseComplaint = ({ onCancel, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [complaint, setComplaint] = useState("");

  const handleAttachmentChange = (e) => {
    // Assuming only one file is attached
    const file = e.target.files[0];
    setAttachment(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform any validation here before submitting the form
    onSubmit({ title, type, dateTime, complaint });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="p-8 bg-white rounded shadow-md w-96">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-semibold">Raise Complaint</h2>
          <button
            className="text-gray-600 hover:text-gray-800"
            onClick={onCancel}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block mb-1 font-semibold">
              Complaint Title
            </label>
            <input
              type="text"
              id="title"
              className="w-full p-2 border rounded"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="type" className="block mb-1 font-semibold">
              Meal Type
            </label>
            <select
              id="type"
              className="w-full p-2 border rounded"
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
            >
              <option value="">Select Type</option>
              <option value="Hygiene">Breakfast</option>
              <option value="Taste">Lunch</option>
              <option value="Delay">Snacks</option>
              <option value="Quality">Dinner</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="type" className="block mb-1 font-semibold">
              Complaint Type
            </label>
            <select
              id="type"
              className="w-full p-2 border rounded"
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
            >
              <option value="">Select Complaint Type</option>
              <option value="Food Quality">Food Quality</option>
              <option value="Food Hygiene">Food Hygiene</option>
              <option value="Management Issue">Management Issue</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="dateTime" className="block mb-1 font-semibold">
              Date and Time
            </label>
            <input
              type="datetime-local"
              id="dateTime"
              className="w-full p-2 border rounded"
              value={dateTime}
              onChange={(e) => setDateTime(e.target.value)}
              required
            />
          </div>
          <div className="mb-1">
            <label htmlFor="complaint" className="block mb-1 font-semibold">
              Complaint Description
            </label>
            <textarea
              id="complaint"
              className="w-full p-2 border rounded"
              value={complaint}
              onChange={(e) => setComplaint(e.target.value)}
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label htmlFor="attachment" className="block font-semibold">
              Attachment:
            </label>
            <input
              type="file"
              id="attachment"
              onChange={handleAttachmentChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RaiseComplaint;
