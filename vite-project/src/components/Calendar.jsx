import React, { useState } from 'react';

const 
Calendar = () => {
    const months = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
    ];

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const [currentMonth, setCurrentMonth] = useState(new Date());

    const prevMonth = () => {
        const prevMonthDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1);
        setCurrentMonth(prevMonthDate);
    };

    const nextMonth = () => {
        const nextMonthDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1);
        setCurrentMonth(nextMonthDate);
    };

    const getDaysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (year, month) => {
        return new Date(year, month, 1).getDay();
    };

    const renderCalendarDays = () => {
        const totalDays = getDaysInMonth(currentMonth.getFullYear(), currentMonth.getMonth());
        const firstDayOfMonth = getFirstDayOfMonth(currentMonth.getFullYear(), currentMonth.getMonth());
        const daysArray = [];

        // Add empty cells for days before the first day of the month
        for (let i = 0; i < firstDayOfMonth; i++) {
            daysArray.push(
                <td key={`empty-${i}`} className="p-4 bg-gray-50"></td>
            );
        }

        // Add cells for each day in the month
        for (let day = 1; day <= totalDays; day++) {
            const isToday = new Date().toDateString() === new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day).toDateString();
            daysArray.push(
                <td key={day} className={` p-4 ${isToday ? 'bg-gray-100 font-mono hover:bg-gray-200 text-red-600 font-bold text-center' : 'bg-gray-50 text-gray-800 hover:bg-gray-200 hover:font-bold font-mono text-center'}`}>
                    {day}
                </td>
            );
        }

        // Create rows
        const rows = [];
        let cells = [];

        daysArray.forEach((day, index) => {
            if (index % 7 !== 0) {
                cells.push(day);
            } else {
                rows.push(cells);
                cells = [];
                cells.push(day);
            }
        });

        // Add the remaining cells
        rows.push(cells);

        // Render the rows
        return rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
                {row}
            </tr>
        ));
    };

    return (
        <div className="container px-4 py-8 mx-auto drop-shadow">
            <div className='w-2/3 border bg-gray-50'>
          <div className="flex justify-between bg-gray-100 ">
    <h3 className="px-4 m-3 text-xl font-bold text-indigo-500 ease-in hover:text-gray-600">{months[currentMonth.getMonth()]} {currentMonth.getFullYear()}</h3>
    <div>
        <button onClick={prevMonth} className="px-2 py-1 m-2 font-serif font-bold text-gray-800 bg-gray-100 rounded hover:text-gray-400">
            &lt;&lt;
        </button>
        <button onClick={nextMonth} className="px-2 py-1 m-2 font-serif font-bold text-gray-800 bg-gray-100 rounded hover:text-gray-400">
            &gt;&gt;
        </button>
    </div>
</div>

            <table className="w-full rounded-lg table-fixed">
                <thead>
                    <tr className="bg-gray-100">
                        {daysOfWeek.map(day => (
                            <th key={day} className="p-4 font-mono text-gray-600 hover:text-gray-800">{day}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {renderCalendarDays()}
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default Calendar;