import React from "react";

const AttendanceTable = ({ data }) => {
  // Dummy data for the table

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
          {data.map((row, index) => (
            <tr
              key={row.id}
              className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
            >
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
