import React, { useState } from "react";
import Select from "react-select";
import { VictoryPie } from "victory";
import AttendanceTable from "./AttendanceTable";

const Attendance = ({ attendanceData }) => {
  const dummyData = [
    {
      key: "March 2024",
      value: [
        {
          id: 1,
          date: "2024-03-01",
          day: "Monday",
          mealType: "Breakfast",
          verification: "Approved",
        },
        {
          id: 2,
          date: "2024-03-01",
          day: "Monday",
          mealType: "Lunch",
          verification: "Approved",
        },
        {
          id: 3,
          date: "2024-03-02",
          day: "Tuesday",
          mealType: "Breakfast",
          verification: "Approved",
        },
        {
          id: 4,
          date: "2024-03-02",
          day: "Tuesday",
          mealType: "Lunch",
          verification: "Not Approved",
        },
        {
          id: 5,
          date: "2024-03-03",
          day: "Wednesday",
          mealType: "Breakfast",
          verification: "Approved",
        },
        {
          id: 1,
          date: "2024-03-01",
          day: "Monday",
          mealType: "Breakfast",
          verification: "Not Approved",
        },
        {
          id: 2,
          date: "2024-03-01",
          day: "Monday",
          mealType: "Lunch",
          verification: "Approved",
        },
        {
          id: 3,
          date: "2024-03-02",
          day: "Tuesday",
          mealType: "Breakfast",
          verification: "Not Approved",
        },
        {
          id: 4,
          date: "2024-03-02",
          day: "Tuesday",
          mealType: "Lunch",
          verification: "Approved",
        },
        {
          id: 5,
          date: "2024-03-03",
          day: "Wednesday",
          mealType: "Breakfast",
          verification: "Approved",
        },
      ],
    },
    {
      key: "February 2024",
      value: [
        {
          id: 1,
          date: "2024-02-01",
          day: "Monday",
          mealType: "Breakfast",
          verification: "Approved",
        },
        {
          id: 2,
          date: "2024-02-01",
          day: "Monday",
          mealType: "Lunch",
          verification: "Approved",
        },
        {
          id: 3,
          date: "2024-02-02",
          day: "Tuesday",
          mealType: "Breakfast",
          verification: "Approved",
        },
        {
          id: 4,
          date: "2024-02-02",
          day: "Tuesday",
          mealType: "Lunch",
          verification: "Not Approved",
        },
        {
          id: 5,
          date: "2024-02-03",
          day: "Wednesday",
          mealType: "Breakfast",
          verification: "Approved",
        },
      ],
    },
    {
      key: "January 2024",
      value: [
        {
          id: 1,
          date: "2024-01-01",
          day: "Monday",
          mealType: "Breakfast",
          verification: "Approved",
        },
        {
          id: 2,
          date: "2024-01-01",
          day: "Monday",
          mealType: "Lunch",
          verification: "Approved",
        },
        {
          id: 3,
          date: "2024-01-02",
          day: "Tuesday",
          mealType: "Breakfast",
          verification: "Approved",
        },
        {
          id: 4,
          date: "2024-01-02",
          day: "Tuesday",
          mealType: "Lunch",
          verification: "Not Approved",
        },
        {
          id: 5,
          date: "2024-01-03",
          day: "Wednesday",
          mealType: "Breakfast",
          verification: "Approved",
        },
        {
          id: 1,
          date: "2024-01-01",
          day: "Monday",
          mealType: "Breakfast",
          verification: "Not Approved",
        },
        {
          id: 2,
          date: "2024-01-01",
          day: "Monday",
          mealType: "Lunch",
          verification: "Approved",
        },
        {
          id: 3,
          date: "2024-01-02",
          day: "Tuesday",
          mealType: "Breakfast",
          verification: "Not Approved",
        },
        {
          id: 4,
          date: "2024-01-02",
          day: "Tuesday",
          mealType: "Lunch",
          verification: "Approved",
        },
        {
          id: 5,
          date: "2024-01-03",
          day: "Wednesday",
          mealType: "Breakfast",
          verification: "Approved",
        },
        {
          id: 4,
          date: "2024-01-02",
          day: "Tuesday",
          mealType: "Lunch",
          verification: "Approved",
        },
        {
          id: 5,
          date: "2024-01-03",
          day: "Wednesday",
          mealType: "Breakfast",
          verification: "Approved",
        },
      ],
    },
    {
      key: "December 2023",
      value: [
        {
          id: 1,
          date: "2023-12-01",
          day: "Monday",
          mealType: "Breakfast",
          verification: "Approved",
        },
        {
          id: 2,
          date: "2023-12-01",
          day: "Monday",
          mealType: "Lunch",
          verification: "Approved",
        },
        {
          id: 3,
          date: "2023-12-02",
          day: "Tuesday",
          mealType: "Breakfast",
          verification: "Approved",
        },
        {
          id: 4,
          date: "2023-12-02",
          day: "Tuesday",
          mealType: "Lunch",
          verification: "Not Approved",
        },
        {
          id: 5,
          date: "2023-12-03",
          day: "Wednesday",
          mealType: "Breakfast",
          verification: "Approved",
        },
        {
          id: 1,
          date: "2023-12-01",
          day: "Monday",
          mealType: "Breakfast",
          verification: "Not Approved",
        },
        {
          id: 2,
          date: "2023-12-01",
          day: "Monday",
          mealType: "Lunch",
          verification: "Approved",
        },
        {
          id: 3,
          date: "2023-12-02",
          day: "Tuesday",
          mealType: "Breakfast",
          verification: "Not Approved",
        },
      ],
    },
    {
      key: "November 2023",
      value: [
        {
          id: 1,
          date: "2023-11-01",
          day: "Monday",
          mealType: "Breakfast",
          verification: "Approved",
        },
        {
          id: 2,
          date: "2023-11-01",
          day: "Monday",
          mealType: "Lunch",
          verification: "Approved",
        },
        {
          id: 3,
          date: "2023-11-02",
          day: "Tuesday",
          mealType: "Breakfast",
          verification: "Approved",
        },
        {
          id: 4,
          date: "2023-11-02",
          day: "Tuesday",
          mealType: "Lunch",
          verification: "Not Approved",
        },
        {
          id: 5,
          date: "2023-11-03",
          day: "Wednesday",
          mealType: "Breakfast",
          verification: "Approved",
        },
      ],
    },
    {
      key: "October 2023",
      value: [
        {
          id: 1,
          date: "2023-10-01",
          day: "Monday",
          mealType: "Breakfast",
          verification: "Approved",
        },
        {
          id: 2,
          date: "2023-10-01",
          day: "Monday",
          mealType: "Lunch",
          verification: "Approved",
        },
        {
          id: 3,
          date: "2023-10-02",
          day: "Tuesday",
          mealType: "Breakfast",
          verification: "Approved",
        },
        {
          id: 4,
          date: "2023-10-02",
          day: "Tuesday",
          mealType: "Lunch",
          verification: "Not Approved",
        },
        {
          id: 5,
          date: "2023-10-03",
          day: "Wednesday",
          mealType: "Breakfast",
          verification: "Approved",
        },
        {
          id: 1,
          date: "2023-10-01",
          day: "Monday",
          mealType: "Breakfast",
          verification: "Not Approved",
        },
        {
          id: 2,
          date: "2023-10-01",
          day: "Monday",
          mealType: "Lunch",
          verification: "Approved",
        },
        {
          id: 3,
          date: "2023-10-02",
          day: "Tuesday",
          mealType: "Breakfast",
          verification: "Not Approved",
        },
        {
          id: 4,
          date: "2023-10-02",
          day: "Tuesday",
          mealType: "Lunch",
          verification: "Approved",
        },
        {
          id: 5,
          date: "2023-10-03",
          day: "Wednesday",
          mealType: "Breakfast",
          verification: "Approved",
        },
      ],
    },
  ];

  const [selectedMonth, setSelectedMonth] = useState("March 2024");

  const handleMonthChange = (selectedOption) => {
    setSelectedMonth(selectedOption.value);
  };

  const renderMonthOptions = () => {
    return attendanceData.map((data) => ({
      value: data.month,
      label: data.month,
    }));
  };

  const data = dummyData.find((item) => item.key === selectedMonth).value;

  const selectedMonthData = attendanceData.find(
    (data) => data.month === selectedMonth
  );

  const pieData = [
    { x: "Present", y: selectedMonthData.daysTakenFood },
    { x: "Absent", y: selectedMonthData.daysNotTakenFood },
  ];

  return (
    <div>
      <h2 className="mb-2 text-2xl font-semibold text-center">
        Attendance History
      </h2>
      <div class="flex justify-evenly">
        <div className="">
          <Select
            className="w-48"
            options={renderMonthOptions()}
            value={{ value: selectedMonth, label: selectedMonth }}
            onChange={handleMonthChange}
          />
          {selectedMonthData && (
            <div className="p-3 text-lg text-gray-600">
              <p>
                <strong>Days Food taken:</strong>{" "}
                {selectedMonthData.daysTakenFood}
              </p>
              <p>
                <strong>Days Food Not Taken:</strong>{" "}
                {selectedMonthData.daysNotTakenFood}
              </p>
              <p>
                <strong>Total Days:</strong> {selectedMonthData.totalDays}
              </p>
            </div>
          )}
        </div>
        <div className="">
          {selectedMonthData && (
            <>
              <div className="h-52 w-52">
                <VictoryPie
                  data={pieData}
                  colorScale={["green", "red"]}
                  innerRadius={80}
                />
              </div>
            </>
          )}
        </div>
      </div>

      <div className="">
        {selectedMonthData && (
          <>
            <div className="mt-8">
              <h2 className="mb-4 text-2xl font-bold">Attendance</h2>
              <AttendanceTable data={data} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Attendance;
