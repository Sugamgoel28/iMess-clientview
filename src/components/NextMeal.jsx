import React, { useState } from 'react';
import QRCode from '../assets/QRScan.svg';
const MealComponent = () => {
  const [showScanner, setShowScanner] = useState(false);

  const handleScannerClick = () => {
    setShowScanner(true);
    // Add your logic to open the camera/scanner here
    // You might want to use a library like react-qr-reader for this purpose
  };

  return (
    <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg shadow-md">
      <div className="flex flex-col">
        <div className="mb-2 text-lg font-bold">Upcoming Meal</div>
        <div className="mb-2">
          <span className="font-bold">Meal type:</span> Dinner
        </div>
        <div className="mb-2">
          <span className="font-bold">Meal Description:</span> Chole Bhature, Sweet Pumpkin, Curry, Kheer
        </div>
        <div className="flex">
          <button className="px-4 py-2 mr-2 text-white bg-green-500 rounded-md hover:bg-green-600">Book</button>
          <button className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600">Opt-out</button>
        </div>
      </div>
      <div>
        {showScanner ? (
          // You can replace this with your actual QR code scanner component
          <div>QR Code Scanner</div>
        ) : (
          <button className="text-gray-600 hover:text-gray-800" onClick={handleScannerClick}>
          <img src={QRCode} alt="QR Code" className="w-28 " />
          </button>
        )}
      </div>
    </div>
  );
};

export default MealComponent;
