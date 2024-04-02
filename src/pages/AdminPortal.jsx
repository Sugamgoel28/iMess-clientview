import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import AttendanceTable from '../components/AttendanceTable';

const AdminPortal = () => {
    // Static attendance data for the provided roll numbers
    const staticAttendanceData = [
        {
            rollNumber: '121EI0401', name: 'Student 1', attendance: [
                { id: 1, date: '2024-04-01', day: 'Monday', mealType: 'Breakfast', verification: 'Approved' },
                { id: 2, date: '2024-04-01', day: 'Monday', mealType: 'Lunch', verification: 'Approved' },
                { id: 1, date: '2024-04-01', day: 'Monday', mealType: 'Breakfast', verification: 'Approved' },
                { id: 2, date: '2024-04-01', day: 'Monday', mealType: 'Lunch', verification: 'Not Approved' }
                // Add more attendance data as needed
            ]
        },
        {
            rollNumber: '121EI0402', name: 'Student 2', attendance: [
                { id: 1, date: '2024-04-01', day: 'Monday', mealType: 'Breakfast', verification: 'Approved' },
                { id: 2, date: '2024-04-01', day: 'Monday', mealType: 'Lunch', verification: 'Not Approved' },
                { id: 1, date: '2024-04-01', day: 'Monday', mealType: 'Breakfast', verification: 'Approved' },
                { id: 2, date: '2024-04-01', day: 'Monday', mealType: 'Lunch', verification: 'Not Approved' }
                // Add more attendance data as needed
            ]
        },
        {
            rollNumber: '121ID0403', name: 'Student 3', attendance: [
                { id: 1, date: '2024-04-01', day: 'Monday', mealType: 'Breakfast', verification: 'Approved' },
                { id: 2, date: '2024-04-01', day: 'Monday', mealType: 'Lunch', verification: 'Approved' },
                { id: 1, date: '2024-04-01', day: 'Monday', mealType: 'Breakfast', verification: 'Approved' },
                { id: 2, date: '2024-04-01', day: 'Monday', mealType: 'Lunch', verification: 'Approved' },
                // Add more attendance data as needed
            ]
        },
        {
            rollNumber: '121EI0404', name: 'Student 4', attendance: [
                { id: 1, date: '2024-04-01', day: 'Monday', mealType: 'Breakfast', verification: 'Approved' },
                { id: 2, date: '2024-04-01', day: 'Monday', mealType: 'Lunch', verification: 'Approved' },
                { id: 1, date: '2024-04-01', day: 'Monday', mealType: 'Breakfast', verification: 'Not Approved' },
                { id: 2, date: '2024-04-01', day: 'Monday', mealType: 'Lunch', verification: 'Not Approved' },
                // Add more attendance data as needed
            ]
        },
        {
            rollNumber: '121EI0405', name: 'Student 5', attendance: [
                { id: 1, date: '2024-04-01', day: 'Monday', mealType: 'Breakfast', verification: 'Approved' },
                { id: 2, date: '2024-04-01', day: 'Monday', mealType: 'Lunch', verification: 'Not Approved' },
                { id: 1, date: '2024-04-01', day: 'Monday', mealType: 'Breakfast', verification: 'Approved' },
                { id: 2, date: '2024-04-01', day: 'Monday', mealType: 'Lunch', verification: 'Not Approved' },
                // Add more attendance data as needed
            ]
        },
    ];

    const [filteredAttendance, setFilteredAttendance] = useState([]);

    const handleSearch = (rollNumber) => {
        const studentAttendance = staticAttendanceData.find(student => student.rollNumber === rollNumber);
        if (studentAttendance) {
            setFilteredAttendance([studentAttendance]);
        } else {
            setFilteredAttendance([]);
        }
    };

    return (
        <div className="max-w-4xl p-8">
            <h1 className="mb-4 text-3xl font-bold">Admin Portal</h1>
            <SearchBar onSearch={handleSearch} />
            {filteredAttendance.length > 0 ? (
                <AttendanceTable attendanceData={filteredAttendance[0].attendance} />
            ) : (
                <p className="text-gray-600">No attendance found for the entered roll number.</p>
            )}
        </div>
    );
};

export default AdminPortal;
