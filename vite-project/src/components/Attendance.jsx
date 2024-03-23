import React, { useState } from 'react';
// import Select from 'react-select';

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

    const selectedMonthData = attendanceData.find((data) => data.month === selectedMonth);

    return (
        <div className="mt-4 attendance">
            <div className="flex items-center mb-4">
                <h2 className="mb-2 text-lg font-bold">Attendance</h2>
                <Select
                    className="w-48 ml-auto"
                    options={renderMonthOptions()}
                    value={{ value: selectedMonth, label: selectedMonth }}
                    onChange={handleMonthChange}
                />
            </div>
            {selectedMonthData && (
                <>
                    <p className="text-gray-600">
                        <strong>Days Taken Food:</strong> {selectedMonthData.daysTakenFood}
                    </p>
                    <p className="text-gray-600">
                        <strong>Days Not Taken Food:</strong> {selectedMonthData.daysNotTakenFood}
                    </p>
                    <p className="text-gray-600">
                        <strong>Total Days:</strong> {selectedMonthData.totalDays}
                    </p>
                </>
            )}
        </div>
    );
};

export default Attendance;