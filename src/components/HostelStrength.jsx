import React from 'react';

const HostelStrength = () => {
  // Placeholder data for hostel names and strengths
  const hostels = [
    { name: 'SD', totalStrength: 1000, averageAbsent: 100 },
    { name: 'DBA', totalStrength: 800, averageAbsent: 50 },
    { name: 'VS', totalStrength: 1200,  averageAbsent: 150 },
    { name: 'CVR', totalStrength: 900,  averageAbsent: 80 },
    { name: 'KMS', totalStrength: 1100,  averageAbsent: 120 },
    { name: 'MSS', totalStrength: 950,  averageAbsent: 70 },
  ];

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="mb-4 text-lg font-bold">Hostel Strength Comparison Chart</h2>
      <div className="flex flex-col">
        {hostels.map(hostel => (
          <div key={hostel.name} className="flex items-center mb-4">
            <div className="w-1/6 font-bold">{hostel.name}</div>
            <div className="flex items-center w-2/3">
              <div className="h-2 mr-2 bg-blue-500" style={{ width: `${hostel.totalStrength}px` }}>
                <div className="h-full bg-red-500" style={{ width: `${(hostel.averageAbsent / hostel.totalStrength) * 100}%` }}></div>
              </div>
              <span>{hostel.totalStrength}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HostelStrength;
