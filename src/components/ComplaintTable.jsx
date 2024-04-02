// ComplaintTable.jsx
import React, { useState } from 'react';

const ComplaintTable = ({ complaints }) => {
    const [sortedComplaints, setSortedComplaints] = useState(complaints);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedHall, setSelectedHall] = useState('All');
    const [selectedComplaintType, setSelectedComplaintType] = useState('All');

    // Function to handle sorting
    const handleSort = (column) => {
        const sorted = [...sortedComplaints].sort((a, b) => {
            if (column === 'hallName' || column === 'complaintType') {
                return a[column].localeCompare(b[column]);
            } else {
                // Handle sorting for other columns if needed
            }
        });
        setSortedComplaints(sorted);
    };

    // Function to handle search
    const handleSearch = (event) => {
        const term = event.target.value.toLowerCase();
        setSearchTerm(term);
        const filtered = complaints.filter(complaint =>
            complaint.rollNumber.toLowerCase().includes(term) ||
            complaint.complaintType.toLowerCase().includes(term)
        );
        setSortedComplaints(filtered);
    };

    // Function to handle filtering by hall name
    const handleHallFilter = (event) => {
        const hallName = event.target.value;
        setSelectedHall(hallName);
        if (hallName === 'All') {
            setSortedComplaints(complaints);
        } else {
            const filtered = complaints.filter(complaint => complaint.hallName === hallName);
            setSortedComplaints(filtered);
        }
    };

    // Function to handle filtering by complaint type
    const handleComplaintTypeFilter = (event) => {
        const complaintType = event.target.value;
        setSelectedComplaintType(complaintType);
        if (complaintType === 'All') {
            setSortedComplaints(complaints);
        } else {
            const filtered = complaints.filter(complaint => complaint.complaintType === complaintType);
            setSortedComplaints(filtered);
        }
    };

    return (
        <div className="mt-8 overflow-x-auto">
            <div className="flex mb-4">
                <input type="text" placeholder="Search Roll Number or Complaint Type" onChange={handleSearch} className="px-4 py-2 mr-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                <select value={selectedHall} onChange={handleHallFilter} className="px-4 py-2 mr-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
                    <option value="All">All Halls</option>
                    <option value="DBA">DBA</option>
                    <option value="SD">SD</option>
                    <option value="VS">VS</option>
                    <option value="HB">HB</option>
                    <option value="CVR">CVR</option>
                    <option value="KMS">KMS</option>
                </select>
                <select value={selectedComplaintType} onChange={handleComplaintTypeFilter} className="px-4 py-2 mr-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
                    <option value="All">All Complaint Types</option>
                    <option value="Food Hygiene">Food Hygiene</option>
                    <option value="Food Quality">Food Quality</option>
                    <option value="Management Issues">Management Issues</option>
                    <option value="Others">Others</option>
                </select>
            </div>
            <table className="min-w-full overflow-hidden bg-white border-gray-200 rounded-lg shadow-md">
                <thead className="text-gray-700 bg-gray-100">
                    <tr>
                        <th className="px-4 py-2">S No.</th>
                        <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort('hallName')}>Hall Name</th>
                        <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort('complaintType')}>Complaint Type</th>
                        <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort('title')}>Title</th>
                        <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort('rollNumber')}>Roll Number</th>
                        <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort('studentName')}>Student Name</th>
                        <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort('complaintUID')}>Complaint UID</th>
                        <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort('dateTimeStamp')}>Date & Time Stamp</th>
                    </tr>
                </thead>
                <tbody className="text-center text-gray-600">
                    {sortedComplaints.map((complaint, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                            <td className="px-4 py-2">{index + 1}</td>
                            <td className="px-4 py-2">{complaint.hallName}</td>
                            <td className="px-4 py-2">{complaint.complaintType}</td>
                            <td className="px-4 py-2">{complaint.title}</td>
                            <td className="px-4 py-2">{complaint.rollNumber}</td>
                            <td className="px-4 py-2">{complaint.studentName}</td>
                            <td className="px-4 py-2">{complaint.complaintUID}</td>
                            <td className="px-4 py-2">{complaint.dateTimeStamp}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ComplaintTable;
