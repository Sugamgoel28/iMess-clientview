import React, { useState } from "react";
import Select from "react-select";
import { VictoryPie } from "victory";

const Attendance = ({ attendanceData }) => {
  const [selectedMonth, setSelectedMonth] = useState(attendanceData[0]?.month);

  const handleMonthChange = (selectedOption) => {
    setSelectedMonth(selectedOption.value);
  };

  const renderMonthOptions = () => {
    return attendanceData.map((data) => ({
      value: data.month,
      label: data.month,
    }));
  };

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
    </div>
  );
};

export default Attendance;
