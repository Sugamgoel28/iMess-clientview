// UserProfilePage.jsx
import React from 'react';
import ProfilePhoto from '../components/ProfilePhoto';
import PersonalDetail from '../components/PersonalDetail';
import Attendance from '../components/Attendance';

const UserProfilePage = () => {
    const user = {
        name: 'John Doe',
        hall: 'DBA',
        mail: 'john.doe@example.com',
        department: 'Department of Engineering',
        phone: '+1234567890',
        attendanceData: [
            { month: 'March 2024', daysTakenFood: 20, daysNotTakenFood: 10, totalDays: 30 },
            { month: 'February 2024', daysTakenFood: 15, daysNotTakenFood: 5, totalDays: 28 },
            { month: 'January 2024', daysTakenFood: 18, daysNotTakenFood: 12, totalDays: 31 },
            { month: 'December 2023', daysTakenFood: 22, daysNotTakenFood: 8, totalDays: 31 },
            { month: 'November 2023', daysTakenFood: 25, daysNotTakenFood: 5, totalDays: 30 },
            { month: 'October 2023', daysTakenFood: 19, daysNotTakenFood: 11, totalDays: 31 },
            // Add more months as needed
        ],
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-3xl p-8 bg-white rounded-lg shadow-md">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <ProfilePhoto imageUrl="./src/assets/pp.jpeg" altText={`${user.name}'s profile photo`} size="w-16 h-16" />
                        <div className="ml-4">
                            <h1 className="text-2xl font-bold">{user.name}</h1>
                            <p className="text-gray-600">{user.hall}</p>
                        </div>
                    </div>
                    <Attendance attendanceData={user.attendanceData} />
                </div>
                <div className="mt-6">
                    <PersonalDetail mail={user.mail} department={user.department} phone={user.phone} />
                </div>
                <div className="mt-8">
                    <h2 className="mb-4 text-xl font-bold">Additional Information</h2>
                    {/* Add more profile information here */}
                </div>
            </div>
        </div>
    );
};

export default UserProfilePage;