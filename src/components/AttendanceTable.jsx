import React from 'react';

const AttendanceTable = () => {
    // Dummy data for the table
    const dummyData = [
        { id: 1, date: '2024-04-01', day: 'Monday', mealType: 'Breakfast', verification: 'Approved' },
        { id: 2, date: '2024-04-01', day: 'Monday', mealType: 'Lunch', verification: 'Approved' },
        { id: 3, date: '2024-04-02', day: 'Tuesday', mealType: 'Breakfast', verification: 'Approved' },
        { id: 4, date: '2024-04-02', day: 'Tuesday', mealType: 'Lunch', verification: 'Not Approved' },
        { id: 5, date: '2024-04-03', day: 'Wednesday', mealType: 'Breakfast', verification: 'Approved' },
        { id: 1, date: '2024-04-01', day: 'Monday', mealType: 'Breakfast', verification: 'Not Approved' },
        { id: 2, date: '2024-04-01', day: 'Monday', mealType: 'Lunch', verification: 'Approved' },
        { id: 3, date: '2024-04-02', day: 'Tuesday', mealType: 'Breakfast', verification: 'Not Approved' },
        { id: 4, date: '2024-04-02', day: 'Tuesday', mealType: 'Lunch', verification: 'Approved' },
        { id: 5, date: '2024-04-03', day: 'Wednesday', mealType: 'Breakfast', verification: 'Approved' },
    ];

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full overflow-hidden bg-white border-gray-200 rounded-lg shadow-md">
                <thead className="text-gray-700 bg-gray-100">
                    <tr>
                        <th className="px-4 py-2">S no.</th>
                        <th className="px-4 py-2">Date and day</th>
                        <th className="px-4 py-2">Meal type</th>
                        <th className="px-4 py-2">Verification</th>
                    </tr>
                </thead>
                <tbody className="text-gray-600">
                    {dummyData.map((row, index) => (
                        <tr key={row.id} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                            <td className="px-4 py-2">{index + 1}</td>
                            <td className="px-4 py-2">{`${row.date} - ${row.day}`}</td>
                            <td className="px-4 py-2">{row.mealType}</td>
                            <td className="px-4 py-2">{row.verification}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AttendanceTable;
