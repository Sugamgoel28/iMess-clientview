import React, { useState, useEffect } from 'react';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';

const Navbar = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentDateTime(new Date());
      }, 1000);
  
      return () => clearInterval(intervalId);
    }, []);
  
    return (
      <nav className="flex items-center justify-between p-4 bg-purple-600">
        <div className="flex items-center">
          <img src="./nitrlogo.png" alt="NITR Logo" className="h-8 mr-4" />
          {/* Company Name */}
          <span className="text-lg font-semibold text-white">Welcome SUGAM GOEL</span>
        </div>
        <div className="flex items-center ">
          {/* Current Date and Time */}
        
          <span className="mr-2 text-white transition duration-300 ease-in-out cursor-pointer hover:text-blue-300">
            {currentDateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
          <span className="p-2 mx-2 text-white transition duration-300 ease-in-out cursor-pointer hover:text-blue-300">
            {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][currentDateTime.getDay()]}
          </span>
          <span className="p-2 mx-1 text-white transition duration-300 ease-in-out border cursor-pointer hover:text-blue-300 hover:border-blue-300">{currentDateTime.getDate()}</span>
          <span className="p-2 mx-1 text-white transition duration-300 ease-in-out border cursor-pointer hover:text-blue-300 hover:border-blue-300">{currentDateTime.getMonth() + 1}</span>
          <span className="p-2 mx-1 text-white transition duration-300 ease-in-out border cursor-pointer hover:text-blue-300 hover:border-blue-300">{currentDateTime.getFullYear()}</span>
          {/* Notifications */}
          <NotificationsActiveOutlinedIcon fontSize="large" className='mr-3 text-white'/>
          {/* Profile Photo */}
          <img
            className="inline-block w-10 h-10 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Profile"
          />
        </div>
      </nav>
    )
};

export default Navbar;
